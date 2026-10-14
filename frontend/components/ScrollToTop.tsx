"use client";

import React, { useState, useEffect } from "react";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 lg:bottom-[50px] lg:right-[50px] z-50 w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] rounded-full bg-white shadow-md hover:shadow-xl border border-slate-200 text-[#4169E1] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
    >
      <svg
        className="w-5 h-5 stroke-current transform group-hover:-translate-y-0.5 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};
