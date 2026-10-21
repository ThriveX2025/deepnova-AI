"use client";

import React from "react";
import { Button } from "./Button";

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
      {/* 1. Top-Left Larger Ultraviolet/Nova Cube */}
      <div className="hidden sm:block absolute top-12 sm:top-16 left-6 sm:left-14 lg:left-24">
        <IsometricCube
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
          topColor="#B794FF"
          leftColor="#7C4DFF"
          rightColor="#3D5AFE"
        />
      </div>

      {/* 2. Bottom-Left Smaller Frost/Orchid Cube */}
      <div className="hidden sm:block absolute bottom-12 sm:bottom-16 left-12 sm:left-24 lg:left-36 opacity-85">
        <IsometricCube
          className="w-7 h-7 sm:w-8 sm:h-8"
          topColor="#EEF1FF"
          leftColor="#B794FF"
          rightColor="#7C4DFF"
        />
      </div>

      {/* 3. Top-Right Smaller Blue Cube */}
      <div className="hidden sm:block absolute top-12 sm:top-16 right-10 sm:right-20 lg:right-32 opacity-85">
        <IsometricCube
          className="w-7 h-7 sm:w-8 sm:h-8"
          topColor="#B794FF"
          leftColor="#7C4DFF"
          rightColor="#3D5AFE"
        />
      </div>

      {/* 4. Bottom-Right Ember Cube */}
      <div className="hidden sm:block absolute bottom-10 sm:bottom-14 right-8 sm:right-16 lg:right-28 opacity-90">
        <IsometricCube
          className="w-10 h-10 sm:w-12 sm:h-12"
          topColor="#FFB088"
          leftColor="#FF8A5B"
          rightColor="#FF6B35"
        />
      </div>

      {/* Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-[#7C4DFF] to-[#3D5AFE] text-white font-title text-[13px] sm:text-[14px] font-semibold uppercase tracking-[2px] leading-[22px] mb-6 shadow-sm">
          CONTACT US
        </div>

        {/* Main Title */}
        <h2 className="font-title text-[28px] sm:text-[40px] lg:text-[50px] font-semibold text-[#0C0E24] tracking-tight leading-[1.2] mb-5">
          Get Ready to Started. It’s{" "}
          <span className="text-[#3D5AFE]">Fast &amp; Easy.</span>
        </h2>

        {/* Description Copy */}
        <p className="font-body text-[#0C0E24]/80 text-[15px] sm:text-[16px] leading-[28px] max-w-2xl mx-auto mb-10 font-normal">
          Getting started is simple and quick. Let DeepNova AI guide you through
          a seamless process to begin your journey toward digital
          transformation.
        </p>

        {/* Cyber-Shimmer Dual-Zone Capsule CTA */}
        <Button href="/contact" variant="cyber-capsule" size="lg">
          Consult Now
        </Button>
      </div>
    </section>
  );
};
