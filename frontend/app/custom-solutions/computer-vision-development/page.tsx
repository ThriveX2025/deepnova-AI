"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Navbar } from "@/components/Navbar";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function ComputerVisionDevelopmentPage() {
  return (
    <main className="relative min-h-screen bg-white flex flex-col">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Banner */}
      <section
        className="relative w-full pt-[150px] sm:pt-[190px] lg:pt-[220px] pb-[110px] sm:pb-[140px] lg:pb-[170px] px-6 sm:px-10 lg:px-14 flex items-center justify-center overflow-hidden bg-[#EEF1FF] bg-top bg-cover bg-no-repeat select-none"
        style={{
          backgroundImage:
            "url('/images/solutions/cv-2.jpg'), url('/images/hero-2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />

        <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 className="font-title text-[32px] sm:text-[48px] lg:text-[72px] font-semibold text-white tracking-tight leading-tight mb-5 drop-shadow-md">
            Computer Vision
          </h1>

          <p className="font-body text-white/90 text-[15px] sm:text-[17px] leading-[28px] sm:leading-[30px] max-w-3xl mb-8 font-normal">
            Experience cutting-edge technology with our computer vision development, focusing on real-time processing, scalable architectures, and algorithm optimization, our experts design customized applications to meet the specific needs of various industries.
          </p>

          <Button href="/contact" variant="flyout" size="md">
            Consult Now
          </Button>
        </div>
      </section>

      {/* 3. Alternating 2-Column Capabilities Section with Blueprint Grid Background */}
      <section className="relative w-full bg-white py-20 sm:py-28 lg:py-36 px-6 sm:px-10 lg:px-14 overflow-hidden">
        {/* Blueprint Grid with Crosshairs background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-85"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M160 0H0V160' stroke='rgba(61, 90, 254, 0.08)' stroke-width='1'/%3E%3Cpath d='M-6 0H6M0 -6V6M154 0H166M160 -6V6M-6 160H6M0 154V166M154 160H166M160 154V166' stroke='%23B794FF' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
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
                  src="/images/solutions/cv-1.jpg"
                  alt="Customized Model Development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <h2 className="font-title text-[30px] sm:text-[38px] lg:text-[42px] font-semibold text-[#0C0E24] tracking-tight leading-[1.2] mb-5">
                Customized <span className="text-[#3D5AFE]">Model Development</span>
              </h2>
              <p className="font-body text-[#0C0E24]/80 text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] font-normal">
                We specialize in developing customized computer vision applications using state-of-the-art frameworks such as TensorFlow, OpenCV, and PyTorch. Our expertise in real-time data processing and analysis allows us to create solutions that address the unique challenges of your industry.
              </p>
            </div>
          </div>

          {/* Row 2: Text Left | Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <h2 className="font-title text-[30px] sm:text-[38px] lg:text-[42px] font-semibold text-[#0C0E24] tracking-tight leading-[1.2] mb-5">
                Object <span className="text-[#3D5AFE]">Recognition and Categorization</span>
              </h2>
              <p className="font-body text-[#0C0E24]/80 text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] font-normal">
                Our experts utilize cutting-edge algorithms and neural networks to develop accurate classification systems and object detection, enhancing various industries by making applications more intelligent and responsive, such as in retail and automating defect identification in manufacturing.
              </p>
            </div>

            {/* Right: Image Container */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden shadow-xl border border-slate-100 group">
                <Image
                  src="/images/solutions/cv-2.jpg"
                  alt="Object Recognition and Categorization"
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
                  src="/images/solutions/cv-3.jpg"
                  alt="Facial Recognition Development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <h2 className="font-title text-[30px] sm:text-[38px] lg:text-[42px] font-semibold text-[#0C0E24] tracking-tight leading-[1.2] mb-5">
                Facial Recognition <span className="text-[#3D5AFE]">Development</span>
              </h2>
              <p className="font-body text-[#0C0E24]/80 text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] font-normal">
                Our Developers create facial recognition systems to improve security protocols with access controls. We employ Deep Learning and Convolutional Neural Networks (CNNs) to provide cutting edge and secure solutions.
              </p>
            </div>
          </div>

          {/* Row 4: Text Left | Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <h2 className="font-title text-[30px] sm:text-[38px] lg:text-[42px] font-semibold text-[#0C0E24] tracking-tight leading-[1.2] mb-5">
                Real Time <span className="text-[#3D5AFE]">Visual Analysis</span>
              </h2>
              <p className="font-body text-[#0C0E24]/80 text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] font-normal">
                Our Experts develop real-time image processing solutions that enable instant data evaluation and actionable insights across various applications, including security surveillance, automated quality assessment, and dynamic customer interaction systems.
              </p>
            </div>

            {/* Right: Image Container */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden shadow-xl border border-slate-100 group">
                <Image
                  src="/images/solutions/cv-4.jpg"
                  alt="Real Time Visual Analysis"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
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
