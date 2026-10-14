"use client";

import React from "react";
import Link from "next/link";

interface CubeProps {
  className?: string;
  topColor?: string;
  leftColor?: string;
  rightColor?: string;
}

const IsometricCube: React.FC<CubeProps> = ({
  className = "w-10 h-10",
  topColor = "#A5EEFD",
  leftColor = "#58D3F3",
  rightColor = "#33B4DB",
}) => (
  <svg
    viewBox="0 0 50 50"
    className={`drop-shadow-sm pointer-events-none select-none ${className}`}
    fill="none"
  >
    <polygon points="25,4 46,16 25,28 4,16" fill={topColor} />
    <polygon points="4,16 25,28 25,48 4,36" fill={leftColor} />
    <polygon points="25,28 46,16 46,36 25,48" fill={rightColor} />
  </svg>
);

export const PreFooterCTA: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-14 overflow-hidden bg-white select-none">
      {/* Subtle Background Isometric Grid Effect */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #edf2f7 1px, transparent 1px), linear-gradient(to bottom, #edf2f7 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating 3D Isometric Decorative Cubes matching live screenshot */}
      {/* 1. Top-Left Larger Cyan Cube */}
      <div className="hidden sm:block absolute top-12 sm:top-16 left-6 sm:left-14 lg:left-24">
        <IsometricCube
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
          topColor="#A5EEFD"
          leftColor="#58D3F3"
          rightColor="#33B4DB"
        />
      </div>

      {/* 2. Bottom-Left Smaller Cyan Cube */}
      <div className="hidden sm:block absolute bottom-12 sm:bottom-16 left-12 sm:left-24 lg:left-36 opacity-85">
        <IsometricCube
          className="w-7 h-7 sm:w-8 sm:h-8"
          topColor="#A5EEFD"
          leftColor="#58D3F3"
          rightColor="#33B4DB"
        />
      </div>

      {/* 3. Top-Right Smaller Blue Cube */}
      <div className="hidden sm:block absolute top-12 sm:top-16 right-10 sm:right-20 lg:right-32 opacity-85">
        <IsometricCube
          className="w-7 h-7 sm:w-8 sm:h-8"
          topColor="#BFDBFE"
          leftColor="#60A5FA"
          rightColor="#3B82F6"
        />
      </div>

      {/* 4. Bottom-Right Peach/Amber Cube */}
      <div className="hidden sm:block absolute bottom-10 sm:bottom-14 right-8 sm:right-16 lg:right-28 opacity-90">
        <IsometricCube
          className="w-10 h-10 sm:w-12 sm:h-12"
          topColor="#FED7AA"
          leftColor="#FDBA74"
          rightColor="#F97316"
        />
      </div>

      {/* Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#738BAE] text-white font-title text-[13px] sm:text-[14px] font-medium uppercase tracking-[2px] leading-[22px] mb-6 shadow-sm">
          CONTACT US
        </div>

        {/* Main Title */}
        <h2 className="font-title text-[28px] sm:text-[40px] lg:text-[50px] font-bold text-[#010D4C] tracking-tight leading-[1.2] mb-5">
          Get Ready to Started. It’s{" "}
          <span className="text-[#4169E1]">Fast &amp; Easy.</span>
        </h2>

        {/* Description Copy */}
        <p className="font-body text-[#4A5568] text-[15px] sm:text-[16px] leading-[28px] max-w-2xl mx-auto mb-10 font-normal">
          Getting started is simple and quick. Let ThriveX AI guide you through
          a seamless process to begin your journey toward digital
          transformation.
        </p>

        {/* CTA Button with Slanted Arrow */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-[#010D4C] hover:bg-[#738BAE] active:scale-95 text-white font-nav font-semibold text-[15px] sm:text-[16px] uppercase tracking-[0.5px] px-9 sm:px-10 py-4 rounded-[50px] shadow-xl shadow-slate-900/10 transition-all duration-200 group"
        >
          <span>CONSULT NOW</span>
          <svg
            className="w-4 h-4 fill-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            viewBox="0 0 512 512"
          >
            <path d="M512 21.805V353.007C512 365.049 502.237 374.812 490.195 374.812C478.153 374.812 468.39 365.049 468.39 353.007V74.451L37.225 505.615C32.966 509.872 27.387 512.001 21.806 512.001C16.225 512.001 10.646 509.872 6.387 505.615C-2.129 497.099 -2.129 483.292 6.387 474.776L437.553 43.61H158.993C146.951 43.61 137.188 33.847 137.188 21.805C137.188 9.763 146.951 7.68059e-08 158.993 7.68059e-08H490.195C502.237 -0.000999923 512 9.763 512 21.805Z" />
          </svg>
        </Link>
      </div>
    </section>
  );
};
