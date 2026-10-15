"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function CustomSolutionsPage() {
  return (
    <main className="relative min-h-screen bg-white flex flex-col">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Banner */}
      <section
        className="relative w-full pt-[150px] sm:pt-[190px] lg:pt-[220px] pb-[110px] sm:pb-[140px] lg:pb-[180px] px-6 sm:px-10 lg:px-14 flex items-center justify-center overflow-hidden bg-[#EEF1FF] bg-top bg-cover bg-no-repeat select-none"
        style={{
          backgroundImage:
            "url('/images/about-hero.jpg'), url('/images/about/about-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />

        <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
          <h1 className="font-title text-[38px] sm:text-[60px] lg:text-[84px] font-semibold text-white tracking-tight leading-none drop-shadow-md">
            Our <span className="text-[#3D5AFE]">Solutions</span>
          </h1>
        </div>
      </section>

      {/* 3. Solution Cards (2 Columns) */}
      <section className="relative w-full bg-white py-20 lg:py-28 px-6 sm:px-10 lg:px-14">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Computer Vision */}
            <div className="bg-[#EEF1FF]/50 rounded-[26px] p-9 sm:p-12 border border-[#3D5AFE]/15 shadow-sm hover:shadow-xl hover:border-[#3D5AFE]/30 transition-all duration-300 flex flex-col items-center text-center group">
              {/* Computer Vision High-Res Icon */}
              <div className="w-20 h-20 mb-6 rounded-2xl bg-white border border-[#3D5AFE]/20 flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                <Image
                  src="/images/solutions/vision.png"
                  alt="Computer Vision Icon"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h2 className="font-title text-[24px] sm:text-[26px] font-semibold text-[#0C0E24] mb-4">
                Computer Vision
              </h2>

              {/* Description */}
              <p className="font-body text-[#0C0E24]/80 text-[15px] sm:text-[16px] leading-[26px] mb-8 font-normal max-w-md">
                DeepNova AI uses NLP expertise to build intelligent applications that understand human language, driving results beyond traditional methods.
              </p>

              {/* Arrow Button Link */}
              <Link
                href="/custom-solutions/computer-vision-development"
                className="w-12 h-12 rounded-full border border-slate-200 text-[#3D5AFE] group-hover:border-[#3D5AFE] group-hover:bg-[#3D5AFE] group-hover:text-white transition-all flex items-center justify-center shadow-xs"
                aria-label="View Computer Vision Development"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Card 2: Natural Language Processing */}
            <div className="bg-[#EEF1FF]/50 rounded-[26px] p-9 sm:p-12 border border-[#3D5AFE]/15 shadow-sm hover:shadow-xl hover:border-[#3D5AFE]/30 transition-all duration-300 flex flex-col items-center text-center group">
              {/* NLP High-Res Icon */}
              <div className="w-20 h-20 mb-6 rounded-2xl bg-white border border-[#3D5AFE]/20 flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                <Image
                  src="/images/solutions/processing.png"
                  alt="Natural Language Processing Icon"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h2 className="font-title text-[24px] sm:text-[26px] font-semibold text-[#0C0E24] mb-4">
                Natural language processing
              </h2>

              {/* Description */}
              <p className="font-body text-[#0C0E24]/80 text-[15px] sm:text-[16px] leading-[26px] mb-8 font-normal max-w-md">
                Experience advanced computer vision software with real-time processing, scalable architectures, and customized solutions for your industry.
              </p>

              {/* Arrow Button Link */}
              <Link
                href="/custom-solutions/natural-language-processing-development"
                className="w-12 h-12 rounded-full border border-slate-200 text-[#3D5AFE] group-hover:border-[#3D5AFE] group-hover:bg-[#3D5AFE] group-hover:text-white transition-all flex items-center justify-center shadow-xs"
                aria-label="View Natural Language Processing Development"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us For Your Business (2 Columns) */}
      <section className="relative w-full bg-white pb-20 lg:pb-28 px-6 sm:px-10 lg:px-14 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Stacked Team Hands Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-[26px] overflow-hidden shadow-xl border border-slate-100 group">
                <Image
                  src="/images/why-choose-us.jpg"
                  alt="Why Choose Us for your business"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Badge, Heading, 3 Reason Cards */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Pill Badge */}
              <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-[#7C4DFF] to-[#3D5AFE] text-white font-title text-[13px] font-semibold uppercase tracking-[2px] mb-6 shadow-xs">
                WHY CHOOSE US
              </div>

              {/* Heading */}
              <h2 className="font-title text-[34px] sm:text-[44px] lg:text-[48px] font-semibold text-[#0C0E24] tracking-tight leading-[1.15] mb-8">
                Why <span className="text-[#3D5AFE]">choose us</span> for your business.
              </h2>

              {/* 3 Reason Cards */}
              <div className="w-full flex flex-col space-y-4">
                {/* Reason 1 */}
                <div className="bg-[#EEF1FF]/60 rounded-[20px] p-6 sm:p-7 border border-[#3D5AFE]/15 shadow-xs hover:shadow-md transition-shadow flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#3D5AFE]/30 text-[#3D5AFE] flex items-center justify-center font-title font-semibold text-lg bg-white shadow-xs">
                    1
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="font-title text-[18px] sm:text-[20px] font-semibold text-[#0C0E24] mb-1 tracking-tight">
                      Innovative Technology
                    </h3>
                    <p className="font-body text-[#0C0E24]/80 text-[14px] sm:text-[15px] leading-[24px]">
                      Employ the latest advancements in AI and Data Analytics to deliver state-of-the-art solutions.
                    </p>
                  </div>
                </div>

                {/* Reason 2 */}
                <div className="bg-[#EEF1FF]/60 rounded-[20px] p-6 sm:p-7 border border-[#3D5AFE]/15 shadow-xs hover:shadow-md transition-shadow flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#3D5AFE]/30 text-[#3D5AFE] flex items-center justify-center font-title font-semibold text-lg bg-white shadow-xs">
                    2
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="font-title text-[18px] sm:text-[20px] font-semibold text-[#0C0E24] mb-1 tracking-tight">
                      Expert Team
                    </h3>
                    <p className="font-body text-[#0C0E24]/80 text-[14px] sm:text-[15px] leading-[24px]">
                      Experienced Data Scientists with strong engineering background of 17 years in service &amp; manufacturing industry.
                    </p>
                  </div>
                </div>

                {/* Reason 3 */}
                <div className="bg-[#EEF1FF]/60 rounded-[20px] p-6 sm:p-7 border border-[#3D5AFE]/15 shadow-xs hover:shadow-md transition-shadow flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#3D5AFE]/30 text-[#3D5AFE] flex items-center justify-center font-title font-semibold text-lg bg-white shadow-xs">
                    3
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="font-title text-[18px] sm:text-[20px] font-semibold text-[#0C0E24] mb-1 tracking-tight">
                      Time Bound Delivery
                    </h3>
                    <ul className="font-body text-[#0C0E24]/80 text-[14px] sm:text-[15px] leading-[24px] space-y-1 list-disc list-inside">
                      <li>Committed to complete the project within timelines.</li>
                      <li>Completed various pilot projects in diverse domain (&gt;10 projects)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pre-Footer Call to Action */}
      <PreFooterCTA />

      {/* 6. Comprehensive Footer */}
      <Footer />

      {/* 7. Floating Scroll to Top */}
      <ScrollToTop />
    </main>
  );
}
