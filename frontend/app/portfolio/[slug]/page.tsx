import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ProjectVideoPlayer } from "@/components/ProjectVideoPlayer";
import {
  PORTFOLIO_PROJECTS,
  getProjectBySlug,
} from "@/data/portfolioProjects";

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Card grid title, showcase title, and benefits title from project data
  const cardGridTitle = project.cardGridTitle || "CORE FEATURES";
  const showcaseTitle = project.showcaseTitle || "PLATFORM CAPABILITIES";
  const benefitsTitle = project.benefitsTitle || "KEY BENEFITS";

  // Showcase bullet list items
  const showcaseList =
    project.showcaseItems && project.showcaseItems.length > 0
      ? project.showcaseItems
      : project.capabilities && project.capabilities.length > 0
      ? project.capabilities
      : project.coreFeatures.map((f) => f.title);

  // How it works items
  const howItWorksList =
    project.howItWorksItems && project.howItWorksItems.length > 0
      ? project.howItWorksItems
      : project.howItWorks.map((s) => s.title);

  // Determine card layout based on count
  const featureCount = project.coreFeatures.length;

  return (
    <main className="relative min-h-screen bg-white flex flex-col">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Banner */}
      <section
        className="relative w-full pt-[150px] sm:pt-[190px] lg:pt-[220px] pb-[110px] sm:pb-[140px] lg:pb-[170px] px-6 sm:px-10 lg:px-14 flex items-center justify-center overflow-hidden bg-[#EEF1FF] bg-top bg-cover bg-no-repeat select-none"
        style={{
          backgroundImage: "url('/images/about-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />

        <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
          <h1 className="font-title text-[28px] sm:text-[44px] lg:text-[64px] font-semibold text-white tracking-tight leading-tight drop-shadow-md">
            {project.title}
          </h1>
        </div>
      </section>

      {/* 3. Overview & Interactive Video/Preview Card */}
      <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-14 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading, Paragraph, CTA */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <h2 className="font-title text-[28px] sm:text-[34px] lg:text-[38px] font-semibold text-[#0C0E24] tracking-tight leading-[1.2] mb-5">
                {project.tagline}
              </h2>

              <p className="font-body text-[#0C0E24]/80 text-[16px] sm:text-[17px] leading-[28px] sm:leading-[30px] mb-8 font-normal">
                {project.overview}
              </p>

              {/* Cyber-Shimmer Dual-Zone Capsule CTA */}
              <Button href="/contact" variant="cyber-capsule" size="md">
                Get a Demo
              </Button>
            </div>

            {/* Right Column: Video Preview Card with Circular Play Button */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              {/* Decorative Nova Blue Dot Accent */}
              <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#3D5AFE] pointer-events-none" />

              <ProjectVideoPlayer
                video={project.video}
                poster={project.image}
                title={project.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Feature Card Grid Section (Dynamic 5, 6, or 7 Cards) */}
      <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          {/* Centered Heading with Decorative Nova Blue Dot */}
          <div className="relative flex items-center justify-center mb-12 sm:mb-16">
            <div className="hidden sm:block absolute left-4 lg:left-12 w-3 h-3 rounded-full bg-[#3D5AFE] pointer-events-none" />
            <h2 className="font-title text-[32px] sm:text-[40px] lg:text-[46px] font-semibold text-[#0C0E24] tracking-tight uppercase text-center">
              {cardGridTitle}
            </h2>
          </div>

          {/* Dynamic Grid Layout */}
          {featureCount === 6 ? (
            /* 6 Cards: 3x2 Grid */
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {project.coreFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#EEF1FF]/60 rounded-[20px] p-8 sm:p-9 border border-[#3D5AFE]/15 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <h3 className="font-title text-[18px] sm:text-[20px] font-semibold text-[#0C0E24] tracking-tight leading-snug">
                    {idx + 1}. {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          ) : featureCount === 7 ? (
            /* 7 Cards: Row 1 (3), Row 2 (3), Row 3 (1 Centered) */
            <div className="w-full space-y-6 sm:space-y-8">
              {/* Row 1: 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {project.coreFeatures.slice(0, 3).map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-[#EEF1FF]/60 rounded-[20px] p-8 sm:p-9 border border-[#3D5AFE]/15 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <h3 className="font-title text-[18px] sm:text-[20px] font-semibold text-[#0C0E24] tracking-tight leading-snug">
                      {idx + 1}. {feature.title}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Row 2: 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {project.coreFeatures.slice(3, 6).map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-[#EEF1FF]/60 rounded-[20px] p-8 sm:p-9 border border-[#3D5AFE]/15 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <h3 className="font-title text-[18px] sm:text-[20px] font-semibold text-[#0C0E24] tracking-tight leading-snug">
                      {idx + 4}. {feature.title}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Row 3: 1 Centered Card */}
              <div className="max-w-md mx-auto">
                {project.coreFeatures.slice(6, 7).map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-[#EEF1FF]/60 rounded-[20px] p-8 sm:p-9 border border-[#3D5AFE]/15 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center"
                  >
                    <h3 className="font-title text-[18px] sm:text-[20px] font-semibold text-[#0C0E24] tracking-tight leading-snug">
                      {idx + 7}. {feature.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* 5 Cards Default: Row 1 (3), Row 2 (2 Centered) */
            <div className="w-full space-y-6 sm:space-y-8">
              {/* Row 1: 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {project.coreFeatures.slice(0, 3).map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-[#EEF1FF]/60 rounded-[20px] p-8 sm:p-9 border border-[#3D5AFE]/15 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <h3 className="font-title text-[18px] sm:text-[20px] font-semibold text-[#0C0E24] tracking-tight leading-snug">
                      {idx + 1}. {feature.title}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Row 2: 2 Centered Cards */}
              {project.coreFeatures.length > 3 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl lg:max-w-3xl mx-auto gap-6 sm:gap-8">
                  {project.coreFeatures.slice(3, 5).map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-[#EEF1FF]/60 rounded-[20px] p-8 sm:p-9 border border-[#3D5AFE]/15 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <h3 className="font-title text-[18px] sm:text-[20px] font-semibold text-[#0C0E24] tracking-tight leading-snug">
                        {idx + 4}. {feature.title}
                      </h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 5. 2-COLUMN SHOWCASE SECTION (Secondary Screenshot + List) */}
      <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-14 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Secondary Screenshot */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[580px] aspect-[16/10] rounded-[20px] overflow-hidden shadow-xl border border-slate-200/90 bg-white group">
                <Image
                  src={project.secondaryImage || project.image}
                  alt={`${project.title} showcase`}
                  fill
                  className="object-contain p-3 group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 580px"
                />
              </div>
            </div>

            {/* Right Column: Heading & Bullet Points */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <h2 className="font-title text-[30px] sm:text-[38px] lg:text-[44px] font-semibold text-[#0C0E24] tracking-tight mb-8 uppercase">
                {showcaseTitle}
              </h2>

              <div className="flex flex-col space-y-4 font-body text-[#0C0E24] text-[16px] sm:text-[17px] font-medium">
                {showcaseList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#3D5AFE] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KEY BENEFITS & HOW IT WORKS (Full-Width Frost Banner) */}
      <section className="relative w-full bg-[#EEF1FF] py-20 sm:py-24 px-6 sm:px-10 lg:px-14 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full relative">
          {/* Decorative Nova Blue Dot Accent on Right Margin */}
          <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#3D5AFE] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: Benefits / Perfect For */}
            <div className="flex flex-col items-start">
              <h3 className="font-title text-[24px] sm:text-[28px] font-semibold text-[#0C0E24] tracking-tight mb-7 uppercase">
                {benefitsTitle}
              </h3>

              <div className="flex flex-col space-y-3.5 font-body text-[#0C0E24]/85 text-[15px] sm:text-[16px] font-normal">
                {project.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#3D5AFE] flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: HOW IT WORKS */}
            <div className="flex flex-col items-start">
              <h3 className="font-title text-[24px] sm:text-[28px] font-semibold text-[#0C0E24] tracking-tight mb-7 uppercase">
                HOW IT WORKS
              </h3>

              <div className="flex flex-col space-y-3.5 font-body text-[#0C0E24]/85 text-[15px] sm:text-[16px] font-normal">
                {howItWorksList.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#3D5AFE] flex-shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Pre-Footer Call to Action */}
      <PreFooterCTA />

      {/* 8. Comprehensive Footer */}
      <Footer />

      {/* 9. Floating Scroll to Top */}
      <ScrollToTop />
    </main>
  );
}
