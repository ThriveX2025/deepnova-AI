import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TailoredSolutions } from "@/components/TailoredSolutions";
import { ServicesOverview } from "@/components/ServicesOverview";
import { OurPartners } from "@/components/OurPartners";
import { AboutSection } from "@/components/AboutSection";
import { WorkProcess } from "@/components/WorkProcess";
import { BlogPreview } from "@/components/BlogPreview";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white flex flex-col">
      {/* 1. Top Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section with 3-Slide Carousel */}
      <HeroCarousel />

      {/* 3. Tailored Solutions Section */}
      <TailoredSolutions />

      {/* 4. Services We Provide with Quality Section */}
      <ServicesOverview />

      {/* 5. Our Partners Infinite Logo Carousel */}
      <OurPartners />

      {/* 6. About Us Feature Section */}
      <AboutSection />

      {/* 7. Work Process Section */}
      <WorkProcess />

      {/* 8. Recent News & Inside Story Blog Grid */}
      <BlogPreview />

      {/* 9. Pre-Footer Contact Call to Action */}
      <PreFooterCTA />

      {/* 10. Comprehensive Footer & Copyright */}
      <Footer />

      {/* 11. Floating Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
