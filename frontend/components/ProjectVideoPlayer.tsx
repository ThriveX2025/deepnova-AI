"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ProjectVideoPlayerProps {
  video?: string;
  poster: string;
  title: string;
}

export const ProjectVideoPlayer: React.FC<ProjectVideoPlayerProps> = ({
  video,
  poster,
  title,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play when modal opens
  useEffect(() => {
    if (isModalOpen && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if browser requires manual user click on player controls
      });
    }
  }, [isModalOpen]);

  // Lock body scroll while modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleStartPlay = () => {
    if (video) {
      setIsModalOpen(true);
    }
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsModalOpen(false);
  };

  return (
    <>
      {/* 1. Preview Card with Dead-Centered Play Button */}
      <div
        onClick={handleStartPlay}
        className={`relative w-full max-w-[580px] aspect-[16/10] rounded-[20px] overflow-hidden shadow-xl border border-slate-200/90 bg-white group ${
          video ? "cursor-pointer" : ""
        }`}
      >
        <Image
          src={poster}
          alt={title}
          fill
          className="object-contain p-3 group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 1024px) 100vw, 580px"
          priority
        />

        {/* Circular Play Button Overlay: locked dead-center */}
        {video && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              type="button"
              onClick={handleStartPlay}
              aria-label={`Play ${title} video preview`}
              className="pointer-events-auto w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#3D5AFE] hover:bg-[#0C0E24] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none"
            >
              <svg
                className="w-8 h-8 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M7.5 5.25C7.5 4.56 8.27 4.14 8.84 4.53L18.42 11.28C18.94 11.64 18.94 12.36 18.42 12.72L8.84 19.47C8.27 19.86 7.5 19.44 7.5 18.75V5.25Z" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* 2. Full-Screen Elementor-style Lightbox Modal */}
      {isModalOpen && video && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Top-Right Close Button matching deepnovaai.com Elementor lightbox */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close video player"
            className="absolute top-4 right-5 sm:top-6 sm:right-8 z-[10000] text-white/80 hover:text-white transition-colors cursor-pointer p-2 focus:outline-none"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Centered Theater 16:9 Video Player Box */}
          <div
            className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl rounded-sm sm:rounded-lg overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={video}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};
