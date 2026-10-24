import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_IMAGES } from "@/constants/images";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  imageClassName = "h-[56px] sm:h-[72px] md:h-[85px] lg:h-[56px] w-auto",
  src = SITE_IMAGES.logo,
  alt = "DeepNova AI Logo",
  width = 712,
  height = 118,
  showWordmark = false,
  wordmarkClassName = "font-title font-semibold text-xl tracking-tight text-[#0C0E24]",
}) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      aria-label="DeepNova AI Home"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className={`${imageClassName} object-contain`}
      />
      {showWordmark && (
        <span className={wordmarkClassName}>
          Deep<span className="text-[#3D5AFE]">Nova</span>
        </span>
      )}
    </Link>
  );
};
