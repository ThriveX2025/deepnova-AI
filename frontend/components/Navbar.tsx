"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { SITE_IMAGES } from "@/constants/images";
import { Button } from "./Button";

interface SubMenuItem {
  title: string;
  href: string;
}

const CUSTOM_SOLUTIONS: SubMenuItem[] = [
  {
    title: "Computer Vision Development",
    href: "/custom-solutions/computer-vision-development",
  },
  {
    title: "Natural language processing development",
    href: "/custom-solutions/natural-language-processing-development",
  },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isPortfolio = pathname === "/portfolio";
  const isSolutions =
    pathname?.startsWith("/custom-solutions") || pathname?.startsWith("/services");
  const isContact = pathname === "/contact";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0C0E24]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
      <div
        className={`w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-20" : "h-20 sm:h-24 lg:h-28"
        }`}
      >
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          {/* Mobile: Standalone Icon Logo (No wordmark) */}
          <Link href="/" className="block lg:hidden select-none" aria-label="DeepNova AI Home">
            <Image
              src="/images/logos/logo-icon.svg"
              alt="DeepNova AI Logo"
              width={48}
              height={40}
              className="h-10 sm:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop: Full Horizontal Brand Logo */}
          <div className="hidden lg:block">
            <Logo
              src={SITE_IMAGES.navbarLogo}
              width={260}
              height={80}
              imageClassName="h-[56px] w-auto"
            />
          </div>
        </div>

        {/* Right: Grouped Nav Links + Contact Us Button */}
        <div className="hidden lg:flex items-center space-x-7 xl:space-x-8">
          <nav className="flex items-center space-x-1.5 font-nav text-[15px] tracking-wide">
            {/* Home */}
            <Link
              href="/"
              className={`px-4 py-2 rounded-full uppercase transition-all duration-200 ${
                isHome
                  ? "text-[#3D5AFE] bg-white/5 font-semibold"
                  : "text-white/90 hover:text-white hover:bg-white/10 font-medium"
              }`}
            >
              Home
            </Link>

            {/* About us */}
            <Link
              href="/about"
              className={`px-4 py-2 rounded-full uppercase transition-all duration-200 ${
                isAbout
                  ? "text-[#3D5AFE] bg-white/5 font-semibold"
                  : "text-white/90 hover:text-white hover:bg-white/10 font-medium"
              }`}
            >
              About us
            </Link>

            {/* Portfolio */}
            <Link
              href="/portfolio"
              className={`px-4 py-2 rounded-full uppercase transition-all duration-200 ${
                isPortfolio
                  ? "text-[#3D5AFE] bg-white/5 font-semibold"
                  : "text-white/90 hover:text-white hover:bg-white/10 font-medium"
              }`}
            >
              Portfolio
            </Link>

            {/* Custom Solutions Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/custom-solutions"
                className={`px-4 py-2 rounded-full uppercase transition-all duration-200 inline-flex items-center gap-1.5 group cursor-pointer ${
                  isSolutions || isSolutionsOpen
                    ? "text-[#3D5AFE] bg-white/5 font-semibold"
                    : "text-white/90 hover:text-white hover:bg-white/10 font-medium"
                }`}
              >
                <span>Custom Solutions</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isSolutionsOpen ? "rotate-180 text-[#3D5AFE]" : "text-white/70 group-hover:text-white"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Minimal Clean Dropdown Menu */}
              {isSolutionsOpen && (
                <div className="absolute top-full -left-4 pt-3 z-50">
                  <div
                    className="w-[280px] bg-[#0C0E24]/95 backdrop-blur-xl rounded-2xl p-2.5 shadow-2xl border border-white/10 transition-all transform origin-top animate-in fade-in zoom-in-95 duration-150"
                    style={{
                      boxShadow: "0px 20px 50px 0px rgba(0, 0, 0, 0.5), 0px 0px 30px 0px rgba(61, 90, 254, 0.12)",
                    }}
                    role="menu"
                  >
                    <div className="flex flex-col space-y-1">
                      {CUSTOM_SOLUTIONS.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsSolutionsOpen(false)}
                          className="block px-3.5 py-2.5 rounded-xl font-nav text-[14px] font-medium uppercase leading-snug text-white/90 hover:text-[#3D5AFE] hover:bg-white/5 transition-colors"
                          role="menuitem"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Contact Us Pill CTA Button with Interactive Arrow */}
          <Button href="/contact" variant="sweep" size="sm">
            Contact us
          </Button>
        </div>

        {/* Mobile Top Right: Quick Consult Pill */}
        <div className="lg:hidden flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-nav font-medium uppercase tracking-wider active:scale-95 transition-all"
          >
            <span>Consult</span>
            <span className="text-[#3D5AFE]">&rarr;</span>
          </Link>
        </div>
        </div>
      </header>

      {/* Mobile Floating App-Style Bottom Dock (Option 4) */}
      <nav
        aria-label="Mobile Navigation Dock"
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm sm:max-w-md h-16 bg-[#0C0E24]/90 backdrop-blur-xl border border-white/15 rounded-full px-3 shadow-2xl flex items-center justify-between lg:hidden transition-all duration-300 select-none"
        style={{
          boxShadow:
            "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(61, 90, 254, 0.18)",
        }}
      >
        {/* 1. Home */}
        <Link
          href="/"
          aria-label="Home"
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 ${
            isHome
              ? "text-[#3D5AFE] bg-white/5 font-semibold"
              : "text-white/65 hover:text-white font-medium"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={isHome ? 2.3 : 1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="text-[10px] tracking-tight mt-0.5">Home</span>
        </Link>

        {/* 2. About */}
        <Link
          href="/about"
          aria-label="About us"
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 ${
            isAbout
              ? "text-[#3D5AFE] bg-white/5 font-semibold"
              : "text-white/65 hover:text-white font-medium"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={isAbout ? 2.3 : 1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-[10px] tracking-tight mt-0.5">About</span>
        </Link>

        {/* 3. Solutions */}
        <Link
          href="/custom-solutions"
          aria-label="Custom Solutions"
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 ${
            isSolutions
              ? "text-[#3D5AFE] bg-white/5 font-semibold"
              : "text-white/65 hover:text-white font-medium"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={isSolutions ? 2.3 : 1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          <span className="text-[10px] tracking-tight mt-0.5">Solutions</span>
        </Link>

        {/* 4. Portfolio */}
        <Link
          href="/portfolio"
          aria-label="Portfolio"
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 ${
            isPortfolio
              ? "text-[#3D5AFE] bg-white/5 font-semibold"
              : "text-white/65 hover:text-white font-medium"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={isPortfolio ? 2.3 : 1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span className="text-[10px] tracking-tight mt-0.5">Portfolio</span>
        </Link>

        {/* 5. Contact CTA */}
        <Link
          href="/contact"
          aria-label="Contact us"
          className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full text-white shadow-lg transition-all duration-200 active:scale-95 ${
            isContact
              ? "bg-[#0C0E24] ring-2 ring-white/30 shadow-[#3D5AFE]/20"
              : "bg-gradient-to-r from-[#7C4DFF] to-[#3D5AFE] hover:from-[#3D5AFE] hover:to-[#0C0E24] shadow-[#3D5AFE]/35"
          }`}
        >
          <svg
            className="w-4 h-4 text-white"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M512 21.805V353.007C512 365.049 502.237 374.812 490.195 374.812C478.153 374.812 468.39 365.049 468.39 353.007V74.451L37.225 505.615C32.966 509.872 27.387 512.001 21.806 512.001C16.225 512.001 10.646 509.872 6.387 505.615C-2.129 497.099 -2.129 483.292 6.387 474.776L437.553 43.61H158.993C146.951 43.61 137.188 33.847 137.188 21.805C137.188 9.763 146.951 7.68059e-08 158.993 7.68059e-08H490.195C502.237 -0.000999923 512 9.763 512 21.805Z" />
          </svg>
        </Link>
      </nav>
    </>
  );
};
