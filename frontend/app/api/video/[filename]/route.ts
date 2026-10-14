import { NextRequest, NextResponse } from "next/server";
import * as Minio from "minio";
import { Readable } from "stream";
import path from "path";

// Determine if connection is HTTPS (supports both MINIO_SECURE and MINIO_USE_SSL)
const isSecure =
  process.env.MINIO_SECURE?.toLowerCase() === "true" ||
  process.env.MINIO_USE_SSL?.toLowerCase() === "true";

// Strip protocol if user included https:// or http:// in the endpoint
const rawEndpoint = process.env.MINIO_ENDPOINT || "minio.api.thrivexai.cloud";
const cleanEndpoint = rawEndpoint.replace(/^https?:\/\//i, "").replace(/\/+$/, "");

// Port: if explicit port set use it, otherwise 443 for SSL/HTTPS, 9000 for insecure
const minioPort = process.env.MINIO_PORT
  ? parseInt(process.env.MINIO_PORT, 10)
  : isSecure
  ? 443
  : 9000;

// Initialize MinIO client instance with server-side environment variables
const minioClient = new Minio.Client({
  endPoint: cleanEndpoint,
  port: minioPort,
  useSSL: isSecure,
  accessKey: process.env.MINIO_ACCESS_KEY || "",
  secretKey: process.env.MINIO_SECRET_KEY || "",
});

const BUCKET_NAME = process.env.MINIO_BUCKET || "depnova-ai";

interface RouteContext {
  params: Promise<{ filename: string }>;
}

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const { filename } = await context.params;

    // Validate and sanitize filename to prevent directory traversal
    if (!filename || filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
      return NextResponse.json(
        { error: "Invalid video filename parameter." },
        { status: 400 }
      );
    }

    const cleanFilename = path.basename(decodeURIComponent(filename));

    // Retrieve file metadata from MinIO
    let stat: Minio.BucketItemStat;
    try {
      stat = await minioClient.statObject(BUCKET_NAME, cleanFilename);
    } catch (err: unknown) {
      const minioErr = err as { code?: string; message?: string };
      if (minioErr.code === "NotFound" || minioErr.code === "NoSuchKey") {
        return NextResponse.json(
          { error: `Video file '${cleanFilename}' not found in bucket '${BUCKET_NAME}'.` },
          { status: 404 }
        );
      }
      throw err;
    }

    const fileSize = stat.size;
    const rangeHeader = request.headers.get("range");

    // Standard Full Playback (if no Range header sent)
    if (!rangeHeader) {
      const dataStream = await minioClient.getObject(BUCKET_NAME, cleanFilename);
      const webStream = Readable.toWeb(dataStream) as ReadableStream;

      return new NextResponse(webStream, {
        status: 200,
        headers: {
          "Content-Type": "video/mp4",
          "Content-Length": fileSize.toString(),
          "Accept-Ranges": "bytes",
          "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
        },
      });
    }

    // HTTP Range Request Handling (Enables seeking/scrubbing and fast chunk streaming)
    const matches = rangeHeader.match(/bytes=(\d+)-(\d*)/);
    if (!matches) {
      return NextResponse.json(
        { error: "Malformed Range header." },
        { status: 416 }
      );
    }

    const start = parseInt(matches[1], 10);
    // Stream in 5MB chunks if end is not explicitly given by the browser
    const CHUNK_SIZE = 5 * 1024 * 1024;
    let end = matches[2] ? parseInt(matches[2], 10) : Math.min(start + CHUNK_SIZE - 1, fileSize - 1);

    if (start >= fileSize || end >= fileSize) {
      return new NextResponse(null, {
        status: 416,
        headers: {
          "Content-Range": `bytes */${fileSize}`,
        },
      });
    }

    if (end < start) {
      end = Math.min(start + CHUNK_SIZE - 1, fileSize - 1);
    }

    const bytesToRead = end - start + 1;

    // Fetch only the requested byte chunk from MinIO
    const partialStream = await minioClient.getPartialObject(
      BUCKET_NAME,
      cleanFilename,
      start,
      bytesToRead
    );

    const webStream = Readable.toWeb(partialStream) as ReadableStream;

    return new NextResponse(webStream, {
      status: 206,
      headers: {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": bytesToRead.toString(),
        "Content-Type": "video/mp4",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
      },
    });
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error("Error streaming video from MinIO:", err.message || error);
    return NextResponse.json(
      {
        error: "Failed to stream video from MinIO.",
        details: err.message || "Unknown internal error",
      },
      { status: 500 }
    );
  }
}
