import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { SITE_IMAGES } from "@/constants/images";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#4169E1]/[0.06] text-slate-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Column 1: Brand & Socials (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <Logo
              src={SITE_IMAGES.footerLogo}
              width={260}
              height={80}
              imageClassName="h-[56px] sm:h-[72px] md:h-[85px] lg:h-[80px] w-auto"
            />
            <p className="font-body text-[16px] text-[#4A5568] leading-[29px] max-w-sm">
              We&apos;re more than just a technology partner Reach out to us for your solution.
            </p>

                     {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/thrivex_ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#4169E1] shadow-sm flex items-center justify-center text-white hover:bg-[#010D4C] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/amruta-panchal-740137263/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#4169E1] shadow-sm flex items-center justify-center text-white hover:bg-[#010D4C] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61585035887945"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#4169E1] shadow-sm flex items-center justify-center text-white hover:bg-[#010D4C] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-title text-[18px] font-bold text-[#010D4C] uppercase tracking-wider mb-2">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-3 font-body text-[15px] sm:text-[16px] font-medium leading-[26px]">
              <Link href="#" className="text-[#4A5568] hover:text-[#4169E1] transition-colors">
                Terms &amp; conditions
              </Link>
              <Link href="#" className="text-[#4A5568] hover:text-[#4169E1] transition-colors">
                Privacy policy
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Info (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="font-title text-[18px] font-bold text-[#010D4C] uppercase tracking-wider mb-2">
              Contact Info
            </h4>
            <div className="flex flex-col space-y-4 font-body text-[15px] sm:text-[16px] font-medium leading-[26px]">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="text-[#4169E1] flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="text-[#4A5568] leading-snug">
                  Ahmedabad, Gujarat<br />India
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="text-[#4169E1] flex-shrink-0">
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <a
                  href="mailto:info@thrivexai.com"
                  className="text-[#4A5568] hover:text-[#4169E1] transition-colors"
                >
                  info@thrivexai.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="text-[#4169E1] flex-shrink-0">
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <a
                  href="tel:+919099332633"
                  className="text-[#4A5568] hover:text-[#4169E1] transition-colors"
                >
                  +91-9099332633
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#010D4C] py-5 px-6 sm:px-10 text-center">
        <p className="font-body text-[14px] text-white font-normal">
          Copyright @2025 DeepNova AI.
        </p>
      </div>
    </footer>
  );
};
