"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/constants/images";

export const AboutSection: React.FC = () => {
  const [imageSrc, setImageSrc] = useState(
    SITE_IMAGES.about?.feature || "/images/about-strategy.jpg"
  );
  const [hasFallback, setHasFallback] = useState(false);

  const handleImageError = () => {
    if (!hasFallback) {
      setHasFallback(true);
      // Fallback to existing high-tech AI image
      setImageSrc("/images/hero-1.jpg");
    }
  };

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 px-6 sm:px-10 lg:px-14 overflow-hidden">
      {/* Decorative dot accent on right edge */}
      <div className="hidden lg:block w-2.5 h-2.5 rounded-full bg-[#3D5AFE] absolute right-6 top-1/2 -translate-y-1/2 opacity-80" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Feature Graphic */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[540px] aspect-square rounded-[30px] overflow-hidden shadow-2xl border border-slate-100 group bg-[#0C0E24]">
              <Image
                src={imageSrc}
                alt="DeepNova AI Strategy Innovation"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 540px"
                priority
                onError={handleImageError}
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Gradient Pill Badge */}
            <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-[#7C4DFF] to-[#3D5AFE] text-white font-title text-[13px] font-semibold uppercase tracking-[2px] mb-6 shadow-xs">
              ABOUT US
            </div>

            {/* Main Title */}
            <h2 className="font-title text-[34px] sm:text-[44px] lg:text-[52px] font-semibold text-[#0C0E24] tracking-tight leading-[1.15] lg:leading-[58px] mb-6">
              Transform with <br />
              <span className="text-[#3D5AFE]">DeepNova AI&apos;s Strategy</span>
            </h2>

            {/* Paragraph */}
            <p className="font-body text-[#0C0E24]/80 text-[16px] sm:text-[17px] leading-[28px] sm:leading-[30px] mb-8 max-w-xl">
              When data is all around but living in confusion, handling Data-Driven Strategy Consulting becomes challenging. Disorganized data, limited expertise, and the vast array of tools and practices required during model training and deployment can be overwhelming. This is where the expertise of skilled Data Scientists at DeepNova AI comes in, helping to bring order and clarity to the process.
            </p>

            {/* Ink Pill CTA Button with Up-Right Arrow */}
            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-[#0C0E24] hover:bg-[#3D5AFE] active:scale-95 text-white font-nav text-[15px] font-semibold uppercase tracking-wider px-8 py-4 rounded-[50px] shadow-lg shadow-blue-950/20 transition-all duration-200 group"
            >
              <span>MORE ABOUT US</span>
              <svg
                className="w-4 h-4 text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
