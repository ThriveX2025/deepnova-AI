"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { SITE_IMAGES } from "@/constants/images";

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
  const isAbout = pathname === "/about" || pathname === "/about-us";
  const isPortfolio = pathname === "/portfolio";
  const isSolutions =
    pathname?.startsWith("/custom-solutions") || pathname?.startsWith("/services");
  const isContact = pathname === "/contact" || pathname === "/contact-us";

  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    <header
      className={`absolute top-0 left-0 right-0 z-50 w-full transition-colors duration-200 ${
        isMobileMenuOpen
          ? "bg-[#060D25]/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 h-20 sm:h-24 lg:h-28 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          <Logo
            src={SITE_IMAGES.navbarLogo}
            width={260}
            height={80}
            imageClassName="h-[56px] sm:h-[72px] md:h-[85px] lg:h-[56px] w-auto"
          />
        </div>

        {/* Right: Grouped Nav Links + Contact Us Button */}
        <div className="hidden lg:flex items-center space-x-10">
          <nav className="flex items-center space-x-9 font-nav text-[17px] font-medium tracking-wide">
            {/* Nav Links */}
            <Link
              href="/"
              className={`transition-colors uppercase ${
                isHome ? "text-[#4169E1] font-semibold" : "text-white hover:text-[#4169E1] font-medium"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors uppercase ${
                isAbout ? "text-[#4169E1] font-semibold" : "text-white hover:text-[#4169E1] font-medium"
              }`}
            >
              About us
            </Link>
            <Link
              href="/portfolio"
              className={`transition-colors uppercase ${
                isPortfolio ? "text-[#4169E1] font-semibold" : "text-white hover:text-[#4169E1] font-medium"
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
                className="group flex items-center gap-1.5 text-white hover:text-[#4169E1] transition-colors uppercase font-medium focus:outline-none cursor-pointer py-2"
              >
                <span className={isSolutions || isSolutionsOpen ? "text-[#4169E1] font-semibold" : "text-white group-hover:text-[#4169E1]"}>
                  Custom Solutions
                </span>
                <span className="text-sm font-bold text-white/80 group-hover:text-[#4169E1]">+</span>
              </Link>

              {/* Dropdown Menu Modal with seamless hover bridge */}
              {isSolutionsOpen && (
                <div className="absolute top-full -left-6 pt-3 z-50">
                  <div
                    className="w-[290px] bg-white rounded-[20px] p-3 shadow-2xl border-t-4 border-b-4 border-[#4169E1] transition-all transform origin-top animate-in fade-in zoom-in-95 duration-150"
                    style={{
                      boxShadow: "0px 0px 100px 20px rgba(0, 73, 171, 0.08)",
                    }}
                    role="menu"
                  >
                    <div className="flex flex-col space-y-1">
                      {CUSTOM_SOLUTIONS.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsSolutionsOpen(false)}
                          className="block px-4 py-3 rounded-xl font-nav text-[14px] font-medium uppercase leading-snug text-[#010D4C] hover:text-[#4169E1] hover:bg-[#F3F6FD] transition-colors"
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

          {/* Contact Us Pill CTA Button */}
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center text-white font-nav text-[15px] font-semibold uppercase tracking-wider px-9 py-3.5 rounded-[50px] shadow-lg shadow-blue-600/25 transition-all duration-200 ${
              isContact
                ? "bg-[#3154C4] ring-2 ring-white/30"
                : "bg-[#4169E1] hover:bg-[#3154C4] active:scale-95"
            }`}
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="text-white hover:text-[#4169E1] p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block font-nav text-base uppercase py-1 ${
              isHome ? "text-[#4169E1] font-bold" : "text-[#010D4C] hover:text-[#4169E1] font-medium"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block font-nav text-base uppercase py-1 ${
              isAbout ? "text-[#4169E1] font-bold" : "text-[#010D4C] hover:text-[#4169E1] font-medium"
            }`}
          >
            About us
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block font-nav text-base uppercase py-1 ${
              isPortfolio ? "text-[#4169E1] font-bold" : "text-[#010D4C] hover:text-[#4169E1] font-medium"
            }`}
          >
            Portfolio
          </Link>

          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsSolutionsOpen((prev) => !prev)}
              className="w-full flex items-center justify-between text-[#010D4C] font-nav font-medium text-base uppercase py-1"
            >
              <span className={isSolutions ? "text-[#4169E1] font-bold" : ""}>Custom Solutions</span>
              <span>{isSolutionsOpen ? "−" : "+"}</span>
            </button>
            {isSolutionsOpen && (
              <div className="mt-2 pl-3 space-y-2 border-l-2 border-[#4169E1]">
                {CUSTOM_SOLUTIONS.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-nav text-sm font-medium text-[#4A5568] hover:text-[#4169E1] py-1 leading-snug uppercase"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-center text-white font-nav text-sm font-semibold uppercase py-3.5 rounded-[50px] shadow-lg transition-colors ${
                isContact ? "bg-[#3154C4]" : "bg-[#4169E1] hover:bg-[#3154C4]"
              }`}
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
