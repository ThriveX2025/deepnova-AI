"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/constants/images";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Frame the Problem",
    description: "Learn content by interacting with an expert lesson or watching a video.",
  },
  {
    number: 2,
    title: "Collect the Data",
    description: "Practice what you learned on realistic SAT test questions.",
  },
  {
    number: 3,
    title: "Process the Data",
    description: "Have to be repudiated annoyances accepted the wise lorem ispum sample text.",
  },
];

export const WorkProcess: React.FC = () => {
  const [imageSrc, setImageSrc] = useState(
    SITE_IMAGES.process?.illustration || "/images/work-process.jpg"
  );
  const [hasFallback, setHasFallback] = useState(false);

  const handleImageError = () => {
    if (!hasFallback) {
      setHasFallback(true);
      setImageSrc("/images/hero-3.jpg");
    }
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-14 overflow-hidden">
      {/* Blueprint Grid with Crosshair '+' background pattern matching deepnovaai.com */}
      <div
        className="absolute inset-0 pointer-events-none opacity-85"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M160 0H0V160' stroke='rgba(61, 90, 254, 0.08)' stroke-width='1'/%3E%3Cpath d='M-6 0H6M0 -6V6M154 0H166M160 -6V6M-6 160H6M0 154V166M154 160H166M160 154V166' stroke='%23B794FF' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundPosition: "center top",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full z-10">
        {/* Top 2-Column Hero Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
          {/* Left Column: Badge, Headline, Paragraph, Link */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-[#7C4DFF] to-[#3D5AFE] text-white font-title text-[13px] font-semibold uppercase tracking-[2px] mb-6 shadow-xs">
              WORK PROCESS
            </div>

            {/* Main Headline */}
            <h2 className="font-title text-[34px] sm:text-[44px] lg:text-[52px] font-semibold text-[#0C0E24] tracking-tight leading-[1.15] lg:leading-[58px] mb-6">
              How <span className="text-[#3D5AFE]">DeepNova AI&apos;s</span> <br />
              process &amp; works.
            </h2>

            {/* Subtitle / Description */}
            <p className="font-body text-[#0C0E24]/80 text-[16px] sm:text-[17px] leading-[28px] sm:leading-[30px] mb-7 max-w-xl">
              DeepNova AI specializes in Data-Driven Strategy Consulting, machine learning, and artificial intelligence, providing business solutions that deliver blazing-fast, striking results.
            </p>

            {/* "Want to learn more about us? Click here" Link */}
            <div className="flex flex-wrap items-center gap-2 text-[15px] sm:text-[16px]">
              <span className="font-body text-[#0C0E24]/80">Want to learn more about us?</span>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-[#0C0E24] hover:text-[#3D5AFE] font-title font-semibold transition-colors group"
              >
                <span className="underline underline-offset-4 decoration-1 decoration-[#0C0E24] group-hover:decoration-[#3D5AFE]">
                  Click here
                </span>
                <span className="w-5 h-5 rounded-full border border-[#0C0E24] group-hover:border-[#3D5AFE] flex items-center justify-center transition-colors ml-0.5">
                  <svg
                    className="w-3 h-3 text-[#0C0E24] group-hover:text-[#3D5AFE] transform group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Rounded Feature Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] aspect-[417/300] rounded-[26px] overflow-hidden shadow-lg border border-slate-100 group bg-[#0C0E24]">
              <Image
                src={imageSrc}
                alt="How DeepNova AI Process Works"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
                onError={handleImageError}
              />
            </div>
          </div>
        </div>

        {/* Bottom 3 Steps Cards (Horizontal Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-[22px] p-5 sm:p-6 lg:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 border border-slate-100/80 flex items-start gap-4 sm:gap-5 lg:gap-6 group"
            >
              {/* Step Number Circle */}
              <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-[#B794FF]/50 text-[#3D5AFE] group-hover:border-[#3D5AFE] group-hover:bg-[#3D5AFE]/10 transition-colors flex items-center justify-center font-title font-semibold text-lg sm:text-xl lg:text-2xl bg-white shadow-xs">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="flex flex-col pt-0.5">
                <h3 className="font-title text-[20px] sm:text-[22px] font-semibold text-[#0C0E24] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="font-body text-[14px] sm:text-[15px] text-[#0C0E24]/80 leading-[24px] sm:leading-[26px] font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
