"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function NaturalLanguageProcessingDevelopmentPage() {
  return (
    <main className="relative min-h-screen bg-white flex flex-col">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Banner */}
      <section
        className="relative w-full pt-[150px] sm:pt-[190px] lg:pt-[220px] pb-[110px] sm:pb-[140px] lg:pb-[170px] px-6 sm:px-10 lg:px-14 flex items-center justify-center overflow-hidden bg-[#F6FCFF] bg-top bg-cover bg-no-repeat select-none"
        style={{
          backgroundImage:
            "url('/images/solutions/nlp-4.jpg'), url('/images/hero-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />

        <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 className="font-title text-[28px] sm:text-[46px] lg:text-[68px] font-bold text-white tracking-tight leading-tight mb-5 drop-shadow-md">
            Natural language processing development
          </h1>

          <p className="font-body text-white/90 text-[15px] sm:text-[17px] leading-[28px] sm:leading-[30px] max-w-3xl mb-8 font-normal">
            Natural Language Processing (NLP) empowers applications to understand human language, like sentiment analysis, intent detection, and entity extraction. We build customized NLP solutions with state-of-the-art models for chatbots, text summarization, search, and more.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#051138] hover:bg-[#010D4C] active:scale-95 text-white font-title text-[14px] font-semibold uppercase tracking-wider px-8 py-3.5 rounded-[50px] shadow-lg shadow-blue-950/20 transition-all duration-200 group"
          >
            <span>CONSULT NOW</span>
            <svg
              className="w-4 h-4 text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 3. Alternating 2-Column Capabilities Section with Blueprint Grid Background */}
      <section className="relative w-full bg-white py-20 sm:py-28 lg:py-36 px-6 sm:px-10 lg:px-14 overflow-hidden">
        {/* Blueprint Grid with Crosshairs background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-85"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M160 0H0V160' stroke='rgba(65, 105, 225, 0.08)' stroke-width='1'/%3E%3Cpath d='M-6 0H6M0 -6V6M154 0H166M160 -6V6M-6 160H6M0 154V166M154 160H166M160 154V166' stroke='%237FA6DE' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
            backgroundPosition: "center top",
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full z-10 space-y-20 sm:space-y-28 lg:space-y-36">
          {/* Row 1: Image Left | Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Image Container */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden shadow-xl border border-slate-100 group">
                <Image
                  src="/images/solutions/nlp-1.jpg"
                  alt="Sentiment Evaluation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <h2 className="font-title text-[30px] sm:text-[38px] lg:text-[42px] font-bold text-[#010D4C] tracking-tight leading-[1.2] mb-5">
                Sentiment <span className="text-[#3B66FF]">Evaluation</span>
              </h2>
              <p className="font-body text-[#4A5568] text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] font-normal">
                We provide Sentiment Analysis solutions that empower businesses in understanding customer opinions, feelings, and attitudes about their products/services. We utilize advanced machine learning algorithms to evaluate customer sentiment from various sources and deliver precise sentiment evaluation.
              </p>
            </div>
          </div>

          {/* Row 2: Text Left | Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <h2 className="font-title text-[30px] sm:text-[38px] lg:text-[42px] font-bold text-[#010D4C] tracking-tight leading-[1.2] mb-5">
                Text <span className="text-[#3B66FF]">Analysis and Processing</span>
              </h2>
              <p className="font-body text-[#4A5568] text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] font-normal">
                Extract structured data from unstructured text with NLP. We build models for entity extraction, text classification, and syntactic parsing. Optimize customer interactions, automate document processing, and derive actionable insights from customer feedback.
              </p>
            </div>

            {/* Right: Image Container */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden shadow-xl border border-slate-100 group">
                <Image
                  src="/images/solutions/nlp-2.jpg"
                  alt="Text Analysis and Processing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Image Left | Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Image Container */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden shadow-xl border border-slate-100 group">
                <Image
                  src="/images/solutions/nlp-3.jpg"
                  alt="Named Entity Recognition"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <h2 className="font-title text-[30px] sm:text-[38px] lg:text-[42px] font-bold text-[#010D4C] tracking-tight leading-[1.2] mb-5">
                Named <span className="text-[#3B66FF]">Entity Recognition (NER)</span>
              </h2>
              <p className="font-body text-[#4A5568] text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] font-normal">
                With Named Entity Recognition (NER), our models extract meaningful entities from unstructured text, such as names, dates, organizations, and product codes, providing structured data for efficient business processes.
              </p>
            </div>
          </div>

          {/* Row 4: Text Left | Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <h2 className="font-title text-[30px] sm:text-[38px] lg:text-[42px] font-bold text-[#010D4C] tracking-tight leading-[1.2] mb-5">
                Machine <span className="text-[#3B66FF]">Translation</span>
              </h2>
              <p className="font-body text-[#4A5568] text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] font-normal">
                Break language barriers with accurate translation engines. ThriveX AI develops customized translation models powered by deep learning for accurate multi-lingual communication across business domains.
              </p>
            </div>

            {/* Right: Image Container */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden shadow-xl border border-slate-100 group">
                <Image
                  src="/images/solutions/nlp-4.jpg"
                  alt="Machine Translation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </div>

          {/* Row 5: Image Left | Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Image Container */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden shadow-xl border border-slate-100 group">
                <Image
                  src="/images/solutions/nlp-5.jpg"
                  alt="Speech Processing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <h2 className="font-title text-[30px] sm:text-[38px] lg:text-[42px] font-bold text-[#010D4C] tracking-tight leading-[1.2] mb-5">
                Speech <span className="text-[#3B66FF]">Processing</span>
              </h2>
              <p className="font-body text-[#4A5568] text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] font-normal">
                Transform spoken voice into actionable insights. We build customized speech-to-text models, voice assistant interfaces, and audio transcription services with high accuracy and domain-specific vocabulary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pre-Footer Call to Action */}
      <PreFooterCTA />

      {/* 5. Comprehensive Footer */}
      <Footer />

      {/* 6. Floating Scroll to Top */}
      <ScrollToTop />
    </main>
  );
}
