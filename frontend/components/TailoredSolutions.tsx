"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SITE_IMAGES } from "@/constants/images";

interface CapabilityCard {
  id: number;
  image: string;
  icon: React.ReactNode;
  text: string;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    id: 1,
    image: SITE_IMAGES.solutions.chip,
    icon: (
      <svg className="w-12 h-12 text-[#4169E1] flex-shrink-0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="12" y="12" width="24" height="24" rx="4" />
        <path d="M18 20h12M18 24h8M18 28h10" strokeWidth="1.5" strokeLinecap="round" />
        <text x="24" y="27" textAnchor="middle" fill="#4169E1" fontSize="9" fontWeight="bold" stroke="none">AI</text>
        <path d="M16 6v6M24 6v6M32 6v6M16 36v6M24 36v6M32 36v6M6 16h6M6 24h6M6 32h6M36 16h6M36 24h6M36 32h6" strokeLinecap="round" />
      </svg>
    ),
    text: "Specialize in designing and implementing machine learning models, tailored to meet specific business needs",
  },
  {
    id: 2,
    image: SITE_IMAGES.solutions.dataModelling,
    icon: (
      <svg className="w-12 h-12 text-[#4169E1] flex-shrink-0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="18" y="6" width="12" height="14" rx="2" />
        <path d="M22 10h4M22 13h4M22 16h4" strokeWidth="1.5" />
        <path d="M24 20v6M10 26h28M10 26v4M24 26v4M38 26v4" strokeLinecap="round" />
        <rect x="6" y="30" width="8" height="10" rx="1" />
        <rect x="20" y="30" width="8" height="10" rx="1" />
        <rect x="34" y="30" width="8" height="10" rx="1" />
      </svg>
    ),
    text: "Creating custom ML Models for Classification, Regression, Clustering etc",
  },
  {
    id: 3,
    image: SITE_IMAGES.solutions.historical,
    icon: (
      <svg className="w-12 h-12 text-[#4169E1] flex-shrink-0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="8" width="36" height="30" rx="3" />
        <line x1="6" y1="16" x2="42" y2="16" />
        <circle cx="10" cy="12" r="1.5" fill="currentColor" />
        <circle cx="15" cy="12" r="1.5" fill="currentColor" />
        <line x1="18" y1="16" x2="18" y2="38" strokeDasharray="2 2" strokeWidth="1.5" />
        <line x1="30" y1="16" x2="30" y2="38" strokeDasharray="2 2" strokeWidth="1.5" />
        <path d="M10 32l8-10 10 6 10-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Forecast future trends and outcomes based on historical data.",
  },
  {
    id: 4,
    image: SITE_IMAGES.solutions.find,
    icon: (
      <svg className="w-12 h-12 text-[#4169E1] flex-shrink-0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="20" cy="20" r="13" />
        <path d="M30 30l12 12" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M15 20h10M20 15v10" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    ),
    text: "To ensure product consistency and identify anomalies.",
  },
  {
    id: 5,
    image: SITE_IMAGES.solutions.integration,
    icon: (
      <svg className="w-12 h-12 text-[#4169E1] flex-shrink-0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="19" cy="17" r="7" />
        <path d="M19 8v2M19 24v2M10 17h2M26 17h2" strokeLinecap="round" />
        <circle cx="33" cy="31" r="7" />
        <path d="M33 22v2M33 38v2M24 31h2M40 31h2" strokeLinecap="round" />
        <path d="M12 28v8h8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
    text: "Creating customized ML models, Integrating Models as per algorithms",
  },
  {
    id: 6,
    image: SITE_IMAGES.solutions.performance,
    icon: (
      <svg className="w-12 h-12 text-[#4169E1] flex-shrink-0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 32v6M16 26v12M24 20v18M32 14v24" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M8 26l12-8 8 4 12-12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M34 10h6v6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M6 42h36" strokeLinecap="round" strokeWidth="2" />
        <circle cx="24" cy="42" r="3" strokeWidth="1.5" />
      </svg>
    ),
    text: "Ensuring models perform well and adjusting as needed",
  },
];

export const TailoredSolutions: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="relative w-full bg-white pt-24 pb-20 lg:pt-28 lg:pb-24 px-6 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto w-full">
        {/* Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Headline */}
          <div className="lg:col-span-6">
            <h2 className="font-title text-[30px] sm:text-[34px] lg:text-[44px] font-bold text-[#010D4C] tracking-tight leading-[1.2] lg:leading-[52px]">
              Harness the Power of Data with{" "}
              <span className="text-[#4169E1]">Our Tailored Solutions </span>
            </h2>
          </div>

          {/* Right Descriptions */}
          <div className="lg:col-span-6 space-y-4 font-body text-[#4A5568] text-[16px] leading-[29px] pt-1">
            <p>
              DeepNova AI is one of the premier Data-Driven Strategy with AI Consulting, offering comprehensive solutions for making exceptional decisions and driving substantial growth in your business value.
            </p>
            <p>
              Leverage our Data-Driven Strategy Consulting Services to Maximize Your Business Assets and Achieve Your Goals Effectively.
            </p>
          </div>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 sm:mt-20">
          {CAPABILITIES.map((card) => {
            const hasError = imageErrors[card.id];

            return (
              <div
                key={card.id}
                className="bg-[#F3F6FD] rounded-[20px] p-6 sm:p-7 min-h-[120px] flex items-center gap-5 transition-all duration-200 hover:bg-[#EBF1FA]"
              >
                <div className="flex-shrink-0 w-12 h-12 relative flex items-center justify-center">
                  {!hasError ? (
                    <Image
                      src={card.image}
                      alt={card.text}
                      width={48}
                      height={48}
                      className="object-contain"
                      onError={() => handleImageError(card.id)}
                    />
                  ) : (
                    card.icon
                  )}
                </div>
                <p className="font-body text-[15px] sm:text-[16px] font-normal text-[#010D4C] leading-[24px]">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
