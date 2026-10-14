"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

import { PORTFOLIO_PROJECTS } from "@/data/portfolioProjects";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-white flex flex-col">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Banner (Exact 1:1 alignment with About Us page) */}
      <section
        className="relative w-full pt-[150px] sm:pt-[190px] lg:pt-[220px] pb-[110px] sm:pb-[150px] lg:pb-[200px] px-6 sm:px-10 lg:px-14 flex items-center justify-center overflow-hidden bg-[#F6FCFF] bg-top bg-cover bg-no-repeat select-none"
        style={{
          backgroundImage:
            "url('/images/about-hero.jpg'), url('/images/about/about-hero.jpg'), url('https://thrivexai.com/wp-content/uploads/2024/10/2149611211.jpg')",
        }}
      >
        {/* Exact 70% Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />

        {/* Centered Heading */}
        <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
          <h1 className="font-title text-[38px] sm:text-[60px] lg:text-[90px] font-bold text-white tracking-tight leading-none drop-shadow-md">
            Our <span className="text-[#4169E1]">Portfolio</span>
          </h1>
        </div>
      </section>

      {/* 3. Portfolio Projects Grid */}
      <section className="relative w-full bg-white py-20 lg:py-28 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {PORTFOLIO_PROJECTS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[24px] p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Preview */}
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="block relative w-full aspect-[16/11] rounded-[16px] overflow-hidden mb-6 border border-slate-100 bg-slate-50 group-hover:scale-[1.02] transition-transform duration-300"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>

                  {/* Title */}
                  <Link href={`/portfolio/${item.slug}`}>
                    <h3 className="font-title text-[20px] sm:text-[22px] font-bold text-[#4169E1] hover:text-[#3154C4] mb-3 leading-snug tracking-tight transition-colors">
                      {item.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="font-body text-[#4A5568] text-[15px] leading-[26px] mb-6 font-normal">
                    {item.overview}
                  </p>
                </div>

                {/* Read More Button */}
                <div>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center justify-center bg-[#4169E1] hover:bg-[#3154C4] active:scale-95 text-white font-title text-[13px] font-bold uppercase tracking-wider px-7 py-2.5 rounded-full shadow-md shadow-blue-600/20 transition-all duration-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pre-Footer Call to Action */}
      <PreFooterCTA />

      {/* 5. Comprehensive Footer */}
      <Footer />

      {/* 6. Floating Scroll to Top */}
      <ScrollToTop />
    </main>
  );
}
