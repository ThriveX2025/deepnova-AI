"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SITE_IMAGES } from "@/constants/images";

const TEAM_MEMBERS = [
  {
    name: "Dhruv",
    role: "Graphic Designer &\nSocial Media Manager",
    image: SITE_IMAGES.about.team.dhruv,
    fallback: "https://thrivexai.com/wp-content/uploads/2026/06/Dhruv.webp",
  },
  {
    name: "Kishan",
    role: "AI-ML Developer",
    image: SITE_IMAGES.about.team.kishan,
    fallback: "https://thrivexai.com/wp-content/uploads/2026/08/Kishan-e1785914609130.png",
  },
  {
    name: "Umang",
    role: "AI-ML Developer",
    image: SITE_IMAGES.about.team.umang,
    fallback: "https://thrivexai.com/wp-content/uploads/2026/06/Umang.webp",
  },
  {
    name: "Darshan",
    role: "UI/UX Designer &\nPython Developer",
    image: SITE_IMAGES.about.team.darshan,
    fallback: "https://thrivexai.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-5-2026-01_22_44-PM-e1785916637159.png",
  },
  {
    name: "Kush",
    role: "UI/UX Designer",
    image: SITE_IMAGES.about.team.kush,
    fallback: "https://thrivexai.com/wp-content/uploads/2026/07/Kush.jpeg",
  },
];

const VALUE_OFFERS_ROW1 = [
  {
    title: "Innovation",
    description: "Exploring new ways to bring innovation to our solutions.",
    image: SITE_IMAGES.about.values.innovation,
    fallback: "https://thrivexai.com/wp-content/uploads/2024/08/idea-1.png",
  },
  {
    title: "Technology",
    description: "Exploring new ways to bring innovation to our solutions.",
    image: SITE_IMAGES.about.values.technology,
    fallback: "https://thrivexai.com/wp-content/uploads/2024/08/technology.png",
  },
  {
    title: "Reliable Support",
    description: "Exploring new ways to bring innovation to our solutions.",
    image: SITE_IMAGES.about.values.reliability,
    fallback: "https://thrivexai.com/wp-content/uploads/2024/08/reliability.png",
  },
  {
    title: "Integrity",
    description: "Exploring new ways to bring innovation to our solutions.",
    image: SITE_IMAGES.about.values.integrity,
    fallback: "https://thrivexai.com/wp-content/uploads/2024/08/network.png",
  },
];

const VALUE_OFFERS_ROW2 = [
  {
    title: "Transparency",
    description: "We make the interaction process easier with transparent communication.",
    image: SITE_IMAGES.about.values.transparency,
    fallback: "https://thrivexai.com/wp-content/uploads/2024/08/transparency.png",
  },
  {
    title: "Scalability",
    description: "Our highly scalable team meets the needs of our growing customer base.",
    image: SITE_IMAGES.about.values.scalability,
    fallback: "https://thrivexai.com/wp-content/uploads/2024/08/scalability.png",
  },
];

const WHY_CHOOSE_US_ITEMS = [
  {
    number: "1",
    title: "Innovative Technology",
    description:
      "Employ the latest advancements in AI and Data Analytics to deliver state-of-the art solutions.",
  },
  {
    number: "2",
    title: "Expert Team",
    description:
      "Experienced Data Scientists with strong Engineering background of 17 years in service & manufacturing industry.",
  },
  {
    number: "3",
    title: "Time Bound Delivery",
    bullets: [
      "Committed to complete the project within timelines.",
      "Completed various pilot projects in diverse domain (>50 projects)",
    ],
  },
];

export default function AboutPage() {
  const [founderImageError, setFounderImageError] = useState(false);

  return (
    <main className="relative min-h-screen bg-white flex flex-col">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Banner (Exact 1:1 Elementor specs: pt-220px, pb-200px, 90px title) */}
      <section
        className="relative w-full pt-[150px] sm:pt-[190px] lg:pt-[220px] pb-[110px] sm:pb-[150px] lg:pb-[200px] px-6 sm:px-10 lg:px-14 flex items-center justify-center overflow-hidden bg-[#F6FCFF] bg-top bg-cover bg-no-repeat select-none"
        style={{
          backgroundImage:
            "url('/images/about/about-hero.jpg'), url('https://thrivexai.com/wp-content/uploads/2024/10/2149611211.jpg')",
        }}
      >
        {/* Exact 70% Dark Elementor Overlay */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />

        {/* Centered Heading */}
        <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
          <h1 className="font-title text-[38px] sm:text-[60px] lg:text-[90px] font-bold text-white tracking-tight leading-none drop-shadow-md">
            About <span className="text-[#4169E1]">Us</span>
          </h1>
        </div>
      </section>

      {/* 3. Who We Are Section (Exact 1:1 Elementor specs: pt-100px, pb-70px, 48px heading, 18px body) */}
      <section className="relative w-full bg-white pt-[80px] sm:pt-[100px] pb-[60px] sm:pb-[70px] px-6 sm:px-10 lg:px-14 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[50px] items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Pill Badge */}
              <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#738BAE] text-white font-title text-[14px] font-medium uppercase tracking-[2px] leading-[22px] mb-5">
                WHO WE ARE
              </div>

              {/* Main Heading */}
              <h2 className="font-title text-[36px] sm:text-[42px] lg:text-[48px] font-bold text-[#010D4C] tracking-tight leading-[1.2] mb-5">
                AI for your <span className="text-[#4169E1]">business.</span>
              </h2>

              {/* Paragraph 1 */}
              <p className="font-body text-[#4A5568] text-[17px] sm:text-[18px] leading-[1.5] mb-5 font-normal">
                We are a team of seasoned data scientists, machine learning engineers, and business analysts with a proven track record of delivering transformative solutions across diverse industries. Our experts to meet the unique needs of your business.
              </p>

              {/* Paragraph 2 */}
              <p className="font-body text-[#4A5568] text-[17px] sm:text-[18px] leading-[1.5] mb-8 font-normal">
                Our consultants bring years of hands-on experience in developing data models, designing AI-driven solutions, and implementing predictive analytics that scale with your growth. We are committed to delivering measurable results that exceed your expectations and drive sustainable value.
              </p>

              {/* CTA Button with Slanted Arrow */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#010D4C] hover:bg-[#738BAE] active:scale-95 text-white font-nav font-semibold text-[15px] sm:text-[16px] uppercase tracking-[0.5px] px-9 py-3.5 sm:py-4 rounded-[50px] shadow-lg shadow-slate-900/10 transition-all duration-200 group"
              >
                <span>CONSULT NOW</span>
                <svg
                  className="w-4 h-4 fill-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 21.805V353.007C512 365.049 502.237 374.812 490.195 374.812C478.153 374.812 468.39 365.049 468.39 353.007V74.451L37.225 505.615C32.966 509.872 27.387 512.001 21.806 512.001C16.225 512.001 10.646 509.872 6.387 505.615C-2.129 497.099 -2.129 483.292 6.387 474.776L437.553 43.61H158.993C146.951 43.61 137.188 33.847 137.188 21.805C137.188 9.763 146.951 7.68059e-08 158.993 7.68059e-08H490.195C502.237 -0.000999923 512 9.763 512 21.805Z" />
                </svg>
              </Link>
            </div>

            {/* Right Column: Visual Collaboration Graphic */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[560px] aspect-square rounded-[24px] overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="https://thrivexai.com/wp-content/uploads/2024/12/team-man-woman-working-media-field-with-laptop-tablet_23-2148901154.jpg"
                  alt="AI for your business"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Decorative Blue Dot Accent */}
              <div className="hidden lg:block absolute -left-4 bottom-24 w-3.5 h-3.5 rounded-full bg-[#4169E1]/80 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership / Founder Profile Section */}
      <section className="relative w-full bg-white pb-12 sm:pb-16 lg:pb-20 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-[#F3F6FD] rounded-[24px] sm:rounded-[30px] p-8 sm:p-12 lg:p-16 border border-blue-50/50 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Founder Photo */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-xl border-4 border-white bg-slate-200 group">
                  {!founderImageError ? (
                    <Image
                      src={SITE_IMAGES.about.founder}
                      alt="Amruta Panchal - Founder"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 360px"
                      onError={() => setFounderImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#010D4C] to-[#101D38] flex flex-col items-center justify-center p-6 text-white text-center">
                      <div className="w-20 h-20 rounded-full bg-[#4169E1] text-white flex items-center justify-center font-title font-bold text-2xl mb-4 shadow-lg">
                        AP
                      </div>
                      <h4 className="font-title text-xl font-bold">Amruta Panchal</h4>
                      <p className="font-body text-slate-300 text-xs mt-1 uppercase tracking-wider">
                        Founder &amp; Business Solutions
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Founder Bio & Socials */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <h3 className="font-title text-[32px] sm:text-[40px] font-bold text-[#010D4C] tracking-tight leading-tight mb-6">
                  Amruta Panchal
                </h3>

                <p className="font-body text-[#4A5568] text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] mb-5 font-normal">
                  A passionate leader with 17+ years of expertise in{" "}
                  <strong className="font-semibold text-[#010D4C]">
                    business development and sales
                  </strong>
                  , I am{" "}
                  <strong className="font-semibold text-[#010D4C]">
                    Amruta Panchal
                  </strong>
                  , the founder of a dynamic startup specializing in{" "}
                  <strong className="font-semibold text-[#010D4C]">
                    Business Solutions
                  </strong>
                  .
                </p>

                <p className="font-body text-[#4A5568] text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] mb-8 font-normal">
                  Throughout my Journey, I have combined strategic thinking with hands-on problem-solving to deliver impactful results. My focus is on leveraging the power of{" "}
                  <strong className="font-semibold text-[#010D4C]">
                    Data Science, AI, and ML
                  </strong>{" "}
                  to empower businesses with innovative, data-driven solutions. My mission is to bridge the gap between traditional industries and modern technology, driving transformation and success.
                </p>

                {/* Social Media & Contact Row */}
                <div className="flex items-center space-x-4 pt-1">
                  {/* Email */}
                  <a
                    href="mailto:info@thrivexai.com"
                    aria-label="Email Amruta Panchal"
                    className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-[#4169E1] hover:bg-[#4169E1] hover:text-white transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-[#4169E1] hover:bg-[#4169E1] hover:text-white transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-[#4169E1] hover:bg-[#4169E1] hover:text-white transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-[#4169E1] hover:bg-[#4169E1] hover:text-white transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Members Grid Section */}
      <section className="relative w-full bg-white pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-[#F3F6FD] rounded-[24px] p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-blue-50/40"
              >
                {/* Circular Avatar */}
                <div className="relative w-[180px] h-[180px] sm:w-[210px] sm:h-[210px] rounded-full overflow-hidden mb-6 bg-slate-100 flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    onError={(e) => {
                      if (member.fallback && e.currentTarget.src !== member.fallback) {
                        e.currentTarget.src = member.fallback;
                      }
                    }}
                  />
                </div>

                {/* Name */}
                <h4 className="font-title text-[22px] sm:text-[24px] font-bold text-[#010D4C] mb-2 tracking-tight">
                  {member.name}
                </h4>

                {/* Role */}
                <p className="font-body text-[15px] sm:text-[16px] text-[#4A5568] leading-snug whitespace-pre-line font-normal">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Values / Unique Value Offer Section */}
      <section className="relative w-full bg-white pb-36 sm:pb-44 lg:pb-52 px-6 sm:px-10 lg:px-14 overflow-hidden">
        {/* Floating Accent Dot */}
        <div className="hidden lg:block absolute top-6 left-12 w-3.5 h-3.5 rounded-full bg-[#4169E1]/80 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#738BAE] text-white font-title text-[14px] font-medium uppercase tracking-[2px] leading-[22px] mb-4">
            OUR VALUES
          </div>

          {/* Heading */}
          <h2 className="font-title text-[36px] sm:text-[44px] lg:text-[48px] font-bold text-[#010D4C] tracking-tight text-center mb-12 sm:mb-16">
            Unique Value Offer
          </h2>

          {/* Row 1: 4 Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:gap-y-8 sm:mb-8">
            {VALUE_OFFERS_ROW1.map((item) => (
              <div
                key={item.title}
                className="bg-[#F3F6FD] rounded-[24px] p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-blue-50/40"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-6 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      if (item.fallback && e.currentTarget.src !== item.fallback) {
                        e.currentTarget.src = item.fallback;
                      }
                    }}
                  />
                </div>
                <h3 className="font-title text-[20px] sm:text-[22px] font-bold text-[#010D4C] mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="font-body text-[14px] sm:text-[15px] text-[#4A5568] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Centered Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 max-w-2xl lg:max-w-3xl gap-6 sm:gap-8">
            {VALUE_OFFERS_ROW2.map((item) => (
              <div
                key={item.title}
                className="bg-[#F3F6FD] rounded-[24px] p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-blue-50/40"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-6 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      if (item.fallback && e.currentTarget.src !== item.fallback) {
                        e.currentTarget.src = item.fallback;
                      }
                    }}
                  />
                </div>
                <h3 className="font-title text-[20px] sm:text-[22px] font-bold text-[#010D4C] mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="font-body text-[14px] sm:text-[15px] text-[#4A5568] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Values & Mission Cards + Statistics Counters Banner */}
      <section className="relative w-full bg-[#738BAE] pt-0 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-14">
        {/* Overlapping Floating Cards */}
        <div className="max-w-5xl mx-auto w-full -translate-y-12 sm:-translate-y-24 lg:-translate-y-28 mb-4 sm:mb-[-50px] lg:mb-[-60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card 1: Our Values */}
            <div className="bg-white rounded-[24px] p-8 sm:p-10 lg:p-12 shadow-xl border border-slate-100 flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <img
                  src={SITE_IMAGES.about.cubeIcon}
                  alt="Our Values Icon"
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://thrivexai.com/wp-content/uploads/2024/08/squer.svg";
                  }}
                />
              </div>
              <h3 className="font-title text-[24px] sm:text-[28px] font-bold text-[#010D4C] mb-5 tracking-tight">
                Our Values
              </h3>
              <div className="font-body text-[#4A5568] text-[15px] sm:text-[16px] leading-[30px] font-normal space-y-1">
                <p>Customer First</p>
                <p>On time Delivery</p>
                <p>Challenge &amp; Committee</p>
                <p>Collaborative Winning</p>
              </div>
            </div>

            {/* Card 2: Our Mission */}
            <div className="bg-white rounded-[24px] p-8 sm:p-10 lg:p-12 shadow-xl border border-slate-100 flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <img
                  src={SITE_IMAGES.about.cubeIcon}
                  alt="Our Mission Icon"
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://thrivexai.com/wp-content/uploads/2024/08/squer.svg";
                  }}
                />
              </div>
              <h3 className="font-title text-[24px] sm:text-[28px] font-bold text-[#010D4C] mb-5 tracking-tight">
                Our Mission
              </h3>
              <p className="font-body text-[#4A5568] text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] font-normal">
                To empower customers business with cutting-edge technology that transforms data into actionable insights and enhances decision-making processes.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Impact Counters */}
        <div className="max-w-6xl mx-auto w-full pt-12 sm:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-center">
            {/* Counter 1 */}
            <div className="flex flex-col items-center">
              <span className="font-title text-[50px] sm:text-[62px] lg:text-[72px] font-bold text-white tracking-tight leading-none mb-3">
                20mil
              </span>
              <p className="font-body text-white/95 text-[15px] sm:text-[16px] leading-snug max-w-[220px]">
                Human labor hours saved with help of AI
              </p>
            </div>

            {/* Counter 2 */}
            <div className="flex flex-col items-center">
              <span className="font-title text-[50px] sm:text-[62px] lg:text-[72px] font-bold text-white tracking-tight leading-none mb-3">
                1.3b+
              </span>
              <p className="font-body text-white/95 text-[15px] sm:text-[16px] leading-snug max-w-[220px]">
                Generated revenue by AI Solutions
              </p>
            </div>

            {/* Counter 3 */}
            <div className="flex flex-col items-center">
              <span className="font-title text-[50px] sm:text-[62px] lg:text-[72px] font-bold text-white tracking-tight leading-none mb-3">
                $15mil
              </span>
              <p className="font-body text-white/95 text-[15px] sm:text-[16px] leading-snug max-w-[220px]">
                Saved operational costs due to AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us Section */}
      <section className="relative w-full bg-white py-20 sm:py-28 px-6 sm:px-10 lg:px-14 overflow-hidden">
        {/* Floating Royal Blue Accent Dot */}
        <div className="hidden lg:block absolute top-12 left-10 w-3.5 h-3.5 rounded-full bg-[#4169E1]/80 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Team Hands Collaboration Photo */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-[24px] overflow-hidden shadow-xl border border-slate-100">
                <img
                  src={SITE_IMAGES.about.whyChooseUs}
                  alt="Why choose us for your business"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://thrivexai.com/wp-content/uploads/2024/12/business-concept-with-team-close-up_23-2149151159.jpg";
                  }}
                />
              </div>
            </div>

            {/* Right Column: Heading & 3 Feature Boxes */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Pill Badge */}
              <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#738BAE] text-white font-title text-[14px] font-medium uppercase tracking-[2px] leading-[22px] mb-5">
                WHY CHOOSE US
              </div>

              {/* Main Heading */}
              <h2 className="font-title text-[36px] sm:text-[42px] lg:text-[48px] font-bold text-[#010D4C] tracking-tight leading-[1.2] mb-8">
                Why <span className="text-[#4169E1]">choose us</span> for your business.
              </h2>

              {/* 3 Numbered Feature Items */}
              <div className="w-full flex flex-col space-y-4 sm:space-y-5">
                {WHY_CHOOSE_US_ITEMS.map((item) => (
                  <div
                    key={item.number}
                    className="w-full bg-white rounded-[20px] p-5 sm:p-6 flex items-start gap-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Circular Number Badge */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-blue-200 bg-[#F3F6FD] flex items-center justify-center font-title text-[18px] sm:text-[20px] font-bold text-[#010D4C] flex-shrink-0">
                      {item.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-title text-[18px] sm:text-[20px] font-bold text-[#010D4C] mb-1.5">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="font-body text-[#4A5568] text-[14px] sm:text-[15px] leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      {item.bullets && (
                        <ul className="font-body text-[#4A5568] text-[14px] sm:text-[15px] leading-relaxed space-y-1 mt-1">
                          {item.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#4169E1] font-bold">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Pre-Footer Call to Action */}
      <PreFooterCTA />

      {/* 10. Comprehensive Footer */}
      <Footer />

      {/* 11. Floating Scroll To Top */}
      <ScrollToTop />
    </main>
  );
}
