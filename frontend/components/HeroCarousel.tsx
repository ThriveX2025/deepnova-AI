"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/constants/images";

export interface CarouselSlide {
  id: number;
  image: string;
  fallbackGradient: string;
  titlePrimary: string;
  titleAccent: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const HERO_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    image: SITE_IMAGES.hero.slide1,
    fallbackGradient: "from-slate-950 via-[#0B1528] to-[#010D4C]",
    titlePrimary: "Data-Driven ",
    titleAccent: "Strategy with AI",
    description:
      "Unleash next-generation business insights through our Data-Driven Strategy with AI. Transform your data into powerful assets with cutting-edge AI, machine learning, and deep learning technologies. Our expert data science resources are dedicated to helping you navigate the complexities of data, enabling you to make informed decisions and drive innovation.",
    ctaText: "CONSULT NOW",
    ctaLink: "/contact",
  },
  {
    id: 2,
    image: SITE_IMAGES.hero.slide2,
    fallbackGradient: "from-slate-950 via-[#0D1B2A] to-[#031525]",
    titlePrimary: "",
    titleAccent: "Computer Vision",
    description:
      "Experience cutting-edge technology with our computer vision development . Focusing on real-time processing, scalable architectures, and algorithm optimization, our experts design customized applications to meet the specific needs of various industries.",
    ctaText: "Read More",
    ctaLink: "/services/computer-vision",
  },
  {
    id: 3,
    image: SITE_IMAGES.hero.slide3,
    fallbackGradient: "from-slate-950 via-[#10142C] to-[#0A0E27]",
    titlePrimary: "",
    titleAccent: "Natural language processing development",
    description:
      "ThriveX AI empower intelligent applications capable of genuinely comprehending human language. Our NLP Development Experts assists organizations in achieving outcomes that traditional data processing methods cannot accomplish. We enhance various facets of your business through our NLP Solutions.",
    ctaText: "Read More",
    ctaLink: "/services/nlp",
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Carousel"
    >
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        const hasError = imageErrors[index];

        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            {!hasError ? (
              <Image
                src={slide.image}
                alt={`${slide.titlePrimary} ${slide.titleAccent}`}
                fill
                priority={index === 0}
                className="object-cover object-center scale-105 transition-transform duration-10000 ease-out"
                sizes="100vw"
                onError={() => handleImageError(index)}
              />
            ) : null}

            {/* Gradient Fallback */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.fallbackGradient} ${
                hasError ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(#4169E1_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
            </div>

            {/* Dark Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80 pointer-events-none" />
          </div>
        );
      })}

      {/* Hero Content (Centered) */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-28 pb-16 flex flex-col items-center">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          if (!isActive) return null;

          return (
            <div
              key={slide.id}
              className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-700"
            >
              {/* Main Headline */}
              <h1 className="font-title text-[28px] sm:text-[42px] md:text-[54px] lg:text-[64px] font-bold !text-white tracking-tight leading-[1.15] drop-shadow-md">
                <span className="text-white">{slide.titlePrimary}</span>
                <span className="text-white">{slide.titleAccent}</span>
              </h1>

              {/* Subtitle / Description */}
              <p className="font-nav mt-6 md:mt-8 text-[14px] sm:text-[17px] md:text-[18px] text-slate-200/90 leading-[26px] sm:leading-[29px] max-w-3xl font-normal drop-shadow">
                {slide.description}
              </p>

              {/* CTA Action Button */}
              <div className="mt-8 sm:mt-9 md:mt-11">
                <Link
                  href={slide.ctaLink}
                  className="inline-flex items-center gap-3 bg-[#4169E1] hover:bg-[#3154C4] active:scale-95 text-white font-nav font-semibold text-[15px] sm:text-[16px] uppercase tracking-[0.5px] px-8 sm:px-10 py-3.5 sm:py-4 rounded-[50px] shadow-xl shadow-blue-600/30 transition-all duration-200 group"
                >
                  <span>{slide.ctaText}</span>
                  <svg
                    className="w-4 h-4 fill-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    viewBox="0 0 512 512"
                  >
                    <path d="M512 21.805V353.007C512 365.049 502.237 374.812 490.195 374.812C478.153 374.812 468.39 365.049 468.39 353.007V74.451L37.225 505.615C32.966 509.872 27.387 512.001 21.806 512.001C16.225 512.001 10.646 509.872 6.387 505.615C-2.129 497.099 -2.129 483.292 6.387 474.776L437.553 43.61H158.993C146.951 43.61 137.188 33.847 137.188 21.805C137.188 9.763 146.951 7.68059e-08 158.993 7.68059e-08H490.195C502.237 -0.000999923 512 9.763 512 21.805Z" />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Left Navigation Arrow (<) */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-1.5 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 text-white/70 hover:text-white transition-all duration-200 group focus:outline-none cursor-pointer"
      >
        <svg
          className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-current transform group-hover:-translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Navigation Arrow (>) */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-1.5 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 text-white/70 hover:text-white transition-all duration-200 group focus:outline-none cursor-pointer"
      >
        <svg
          className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-current transform group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Indicators / Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
              index === currentIndex
                ? "w-8 h-2.5 bg-[#4169E1]"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
