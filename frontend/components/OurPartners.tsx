"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SITE_IMAGES } from "@/constants/images";

export interface PartnerLogo {
  id: number;
  name: string;
  image: string;
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  { id: 1, name: "FLUXO", image: SITE_IMAGES.partners.fluxo },
  { id: 2, name: "KEC", image: SITE_IMAGES.partners.kec },
  { id: 3, name: "PGEHS", image: SITE_IMAGES.partners.pgehs },
  { id: 4, name: "NMT", image: SITE_IMAGES.partners.nmt },
  { id: 5, name: "BDK", image: SITE_IMAGES.partners.bdk },
  { id: 6, name: "FIREFLY ENERGY", image: SITE_IMAGES.partners.firefly },
  { id: 7, name: "Royal Electronics Sales & Services", image: SITE_IMAGES.partners.royal },
  { id: 8, name: "GHV", image: SITE_IMAGES.partners.ghv },
];

export const OurPartners: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const infinitePartners = [
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
    ...PARTNER_LOGOS,
  ];

  return (
    <section className="relative w-full bg-[#EEF1FF] py-12 lg:py-16 px-6 sm:px-10 lg:px-14 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Decorative dot */}
        <div className="w-3 h-3 rounded-full bg-[#3D5AFE] mb-4" />

        {/* Centered Heading */}
        <h3 className="font-title text-[26px] sm:text-[30px] lg:text-[34px] font-semibold text-[#0C0E24] text-center tracking-tight leading-[1.2]">
          Our <span className="text-[#3D5AFE]">Partners</span>
        </h3>
      </div>

      {/* Auto-scrolling Track */}
      <div className="w-full mt-8 sm:mt-10 overflow-hidden relative group">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#EEF1FF] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#EEF1FF] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center space-x-10 sm:space-x-16 py-2 w-max">
          {infinitePartners.map((partner, index) => {
            const hasError = imageErrors[partner.id];

            return (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                {!hasError ? (
                  <div className="relative h-12 sm:h-14 lg:h-16 w-36 sm:w-44 lg:w-52 flex items-center justify-center transition-all duration-300">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="220px"
                      onError={() => handleImageError(partner.id)}
                    />
                  </div>
                ) : (
                  <div className="h-12 sm:h-14 lg:h-16 w-36 sm:w-44 lg:w-52 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center px-3 text-center">
                    <span className="font-nav text-xs font-bold text-[#0C0E24] uppercase tracking-wide">
                      {partner.name}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
