import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { SocialButton } from "./SocialButton";
import { SITE_IMAGES } from "@/constants/images";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#EEF1FF] text-slate-700 border-t border-[#3D5AFE]/10">
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
            <p className="font-body text-[16px] text-[#0C0E24]/80 leading-[29px] max-w-sm">
              We&apos;re more than just a technology partner Reach out to us for your solution.
            </p>

            {/* Social Media Links with 3D Tilting Cards */}
            <div className="flex items-center space-x-6 pt-2">
              {/* LinkedIn */}
              <SocialButton
                platform="linkedin"
                href="https://www.linkedin.com/in/amruta-panchal-740137263/"
                ariaLabel="LinkedIn"
              />

              {/* Instagram */}
              <SocialButton
                platform="instagram"
                href="https://www.instagram.com/thrivex_ai/"
                ariaLabel="Instagram"
              />

              {/* Facebook */}
              <SocialButton
                platform="facebook"
                href="https://www.facebook.com/profile.php?id=61585035887945"
                ariaLabel="Facebook"
              />
            </div>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-title text-[18px] font-semibold text-[#0C0E24] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-6 font-body text-[15px] sm:text-[16px] font-medium leading-[26px]">
              <Link href="#" className="text-[#0C0E24]/80 hover:text-[#3D5AFE] transition-colors">
                Terms &amp; conditions
              </Link>
              <Link href="#" className="text-[#0C0E24]/80 hover:text-[#3D5AFE] transition-colors">
                Privacy policy
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Info (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="font-title text-[18px] font-semibold text-[#0C0E24] uppercase tracking-wider mb-4">
              Contact Info
            </h4>
            <div className="flex flex-col space-y-6 font-body text-[15px] sm:text-[16px] font-medium leading-[26px]">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="text-[#3D5AFE] flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="text-[#0C0E24]/80 leading-snug">
                  Ahmedabad, Gujarat, India
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="text-[#3D5AFE] flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <a
                    href="mailto:info@thrivexai.com"
                    className="text-[#0C0E24]/80 hover:text-[#3D5AFE] transition-colors"
                  >
                    info@thrivexai.com
                  </a>
                </div>
              </div>

              {/* Second Email */}
              <div className="flex items-center gap-3">
                <div className="text-[#3D5AFE] flex-shrink-0">
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <a
                  href="mailto:amruta@deepnovaai.in"
                  className="text-[#0C0E24]/80 hover:text-[#3D5AFE] transition-colors"
                >
                  amruta@deepnovaai.in
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="text-[#3D5AFE] flex-shrink-0">
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <a
                  href="tel:+919099332633"
                  className="text-[#0C0E24]/80 hover:text-[#3D5AFE] transition-colors"
                >
                  +91-9099332633
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#0C0E24] pt-5 pb-24 lg:py-5 px-6 sm:px-10 text-center">
        <p className="font-body text-[14px] text-white font-normal">
          Copyright @2026 DeepNova AI.
        </p>
      </div>
    </footer>
  );
};
