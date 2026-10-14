import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_IMAGES } from "@/constants/images";

interface LogoProps {
  className?: string;
  src?: string;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  src = SITE_IMAGES.logo,
  alt = "ThriveX AI Logo",
}) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none ${className}`}
      aria-label="ThriveX AI Home"
    >
      <Image
        src={src}
        alt={alt}
        width={260}
        height={80}
        priority
        className="h-[56px] sm:h-[72px] md:h-[85px] lg:h-[90px] w-auto object-contain"
      />
    </Link>
  );
};
