"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "./Button";
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
    fallbackGradient: "from-[#0C0E24] via-[#7C4DFF]/30 to-[#3D5AFE]/40",
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
    fallbackGradient: "from-[#0C0E24] via-[#7C4DFF]/20 to-[#B794FF]/30",
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
    fallbackGradient: "from-[#0C0E24] via-[#3D5AFE]/30 to-[#FF6B35]/25",
    titlePrimary: "",
    titleAccent: "Natural language processing development",
    description:
      "DeepNova AI empower intelligent applications capable of genuinely comprehending human language. Our NLP Development Experts assists organizations in achieving outcomes that traditional data processing methods cannot accomplish. We enhance various facets of your business through our NLP Solutions.",
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
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
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
              className={`absolute inset-0 bg-gradient-to-br ${slide.fallbackGradient} ${hasError ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(#3D5AFE_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
            </div>

            {/* Dark Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
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
              {/* Brand Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-title text-[13px] sm:text-[14px] font-medium tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-[#3D5AFE] animate-pulse" />
                DeepNova AI LLP By{" "}
                <a
                  href="https://thrivexai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white underline underline-offset-2 transition-colors font-normal"
                >
                  ThriveX AI
                </a>
              </div>

              {/* Main Headline */}
              <h1 className="font-title text-[28px] sm:text-[42px] md:text-[54px] lg:text-[64px] font-semibold !text-white tracking-tight leading-[1.15] drop-shadow-md">
                <span className="text-white">{slide.titlePrimary}</span>
                <span className="text-white">{slide.titleAccent}</span>
              </h1>

              {/* Subtitle / Description */}
              <p className="font-nav mt-6 md:mt-8 text-[14px] sm:text-[17px] md:text-[18px] text-slate-200/90 leading-[26px] sm:leading-[29px] max-w-3xl font-normal drop-shadow">
                {slide.description}
              </p>

              {/* CTA Action Button */}
              <div className="mt-8 sm:mt-9 md:mt-11">
                <Button href={slide.ctaLink} variant="flyout" size="md">
                  {slide.ctaText}
                </Button>
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
      <div className="absolute bottom-24 sm:bottom-12 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${index === currentIndex
              ? "w-8 h-2.5 bg-gradient-to-r from-[#3D5AFE] to-[#7C4DFF]"
              : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </section>
  );
};
