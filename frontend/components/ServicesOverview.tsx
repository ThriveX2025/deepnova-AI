"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/constants/images";

interface ServiceCard {
  id: number;
  title: string;
  image: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const SERVICES_LIST: ServiceCard[] = [
  {
    id: 1,
    title: "Services",
    image: SITE_IMAGES.services.development,
    href: "/services",
    icon: (
      <svg className="w-14 h-14 text-[#3D5AFE]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="8" y="10" width="48" height="34" rx="4" />
        <path d="M24 44v8M40 44v8M18 52h28" strokeLinecap="round" />
        <circle cx="32" cy="27" r="6" />
        <path d="M32 17v3M32 34v3M22 27h3M39 27h3M25 20l2 2M37 32l2 2M25 34l2-2M37 22l2-2" strokeLinecap="round" />
      </svg>
    ),
    description:
      "DeepNova AI is a leader in Data-Driven Strategy Consulting and custom solutions, offering cutting-edge expertise in statistical methodologies, neural networks, and machine learning.",
  },
  {
    id: 2,
    title: "Technologies",
    image: SITE_IMAGES.services.technology,
    href: "/technologies",
    icon: (
      <svg className="w-14 h-14 text-[#3D5AFE]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="32" cy="32" r="8" />
        <path d="M32 16v5M32 43v5M16 32h5M20 20l4 4M20 44l4-4" strokeLinecap="round" />
        <path d="M24 16c-6 4-8 12-8 16s2 12 8 16" strokeLinecap="round" strokeDasharray="3 3" />
        <path d="M40 24h10M40 32h12M40 40h10" strokeLinecap="round" />
        <circle cx="50" cy="24" r="2.5" fill="currentColor" />
        <circle cx="52" cy="32" r="2.5" fill="currentColor" />
        <circle cx="50" cy="40" r="2.5" fill="currentColor" />
      </svg>
    ),
    description:
      "DeepNova AI drives digital excellence with advanced custom application development, helping businesses worldwide achieve new levels of digital transformation.",
  },
  {
    id: 3,
    title: "Custom Solutions",
    image: SITE_IMAGES.services.customSolutions,
    href: "/services/computer-vision",
    icon: (
      <svg className="w-14 h-14 text-[#3D5AFE]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="8" y="10" width="48" height="34" rx="4" />
        <path d="M24 44v8M40 44v8M18 52h28" strokeLinecap="round" />
        <path
          d="M26 20h4a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h4v5a2 2 0 0 1-2 2 2 2 0 0 0 0 4 2 2 0 0 1 2 2v5h-4a2 2 0 0 1-2-2 2 2 0 0 0-4 0 2 2 0 0 1-2 2h-4v-5a2 2 0 0 1 2-2 2 2 0 0 0 0-4 2 2 0 0 1-2-2v-5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description:
      "As your trusted digital partner, we leverage today's tools to create innovative solutions that boost your business growth and competitiveness in the digital age.",
  },
];

export const ServicesOverview: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="relative w-full bg-white pt-16 pb-24 lg:pt-20 lg:pb-28 px-6 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto w-full">
        {/* Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Title */}
          <div className="lg:col-span-6">
            <h2 className="font-title text-[30px] sm:text-[34px] lg:text-[44px] font-semibold text-[#0C0E24] tracking-tight leading-[1.2] lg:leading-[52px]">
              <span className="text-[#3D5AFE]">Services </span> We Provide with Quality.
            </h2>
          </div>

          {/* Right Lead Copy + Decorative dot */}
          <div className="lg:col-span-6 relative flex items-center justify-between">
            <p className="font-body text-[#0C0E24]/80 text-[16px] leading-[29px] pr-8">
              DeepNova AI empowers transformative insights in businesses through its Data-Driven Strategy Consulting team, utilizing Artificial Intelligence, Machine Learning, and Deep Learning. We remain at the forefront of industry trends, providing high-impact business solutions that drive remarkable revenue growth.
            </p>
            <div className="hidden sm:block w-3.5 h-3.5 rounded-full bg-[#3D5AFE] flex-shrink-0" />
          </div>
        </div>

        {/* 3 Prominent Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 sm:mt-20">
          {SERVICES_LIST.map((card) => {
            const hasError = imageErrors[card.id];

            return (
              <Link
                key={card.id}
                href={card.href}
                className="bg-[#EEF1FF] rounded-[20px] p-6 sm:p-7 lg:p-10 transition-all duration-300 hover:bg-[#E4E9FF] hover:-translate-y-1 flex flex-col group border border-[#3D5AFE]/10"
              >
                <div className="mb-6 w-14 h-14 relative flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  {!hasError ? (
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={56}
                      height={56}
                      className="object-contain"
                      onError={() => handleImageError(card.id)}
                    />
                  ) : (
                    card.icon
                  )}
                </div>

                <h3 className="font-title text-[22px] sm:text-[24px] font-semibold text-[#0C0E24] group-hover:text-[#3D5AFE] transition-colors mb-4 tracking-tight">
                  {card.title}
                </h3>

                <p className="font-body text-[15px] sm:text-[16px] text-[#0C0E24]/80 leading-[26px] sm:leading-[28px] font-normal">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
