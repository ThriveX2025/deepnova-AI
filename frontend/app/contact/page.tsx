"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SendMessageButton } from "@/components/SendMessageButton";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Smooth transition allowing airplane takeoff and Sent animation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <main className="relative min-h-screen bg-white flex flex-col">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Banner */}
      <section
        className="relative w-full pt-[150px] sm:pt-[190px] lg:pt-[230px] pb-[110px] sm:pb-[140px] lg:pb-[170px] px-6 sm:px-10 lg:px-14 flex items-center justify-center overflow-hidden bg-[#111827] bg-center bg-cover bg-no-repeat select-none"
        style={{
          backgroundImage:
            "url('/images/contact-hero.jpg'), url('/images/about-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />

        <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
          <h1 className="font-title text-[38px] sm:text-[60px] lg:text-[86px] font-semibold text-white tracking-tight leading-none drop-shadow-md">
            Contact <span className="text-[#3D5AFE]">Us</span>
          </h1>
        </div>
      </section>

      {/* 3. Main Contact Section */}
      <section className="relative w-full bg-white py-20 lg:py-28 px-6 sm:px-10 lg:px-14">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header Intro */}
          <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#EEF1FF] text-[#3D5AFE] font-title text-[13px] font-semibold uppercase tracking-[2px] mb-5 shadow-xs border border-[#3D5AFE]/20">
              LET&apos;S SPEAK SOON!
            </div>

            {/* Main Headline */}
            <h2 className="font-title text-[32px] sm:text-[42px] lg:text-[46px] font-semibold text-[#0C0E24] tracking-tight leading-tight mb-4">
              Level up your brand, Get in touch now.
            </h2>

            {/* Subtitle */}
            <p className="font-body text-[#0C0E24]/75 text-[15px] sm:text-[17px] leading-[28px] max-w-2xl font-normal">
              We&apos;d love to hear from you. Our friendly team is always here to chat.
            </p>
          </div>

          {/* 2-Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: 3 Contact Info Cards */}
            <div className="lg:col-span-5 flex flex-col space-y-5">
              {/* Card 1: Location */}
              <div className="bg-[#EEF1FF] rounded-[20px] p-7 border border-[#3D5AFE]/15 shadow-xs hover:shadow-md transition-shadow flex items-center gap-5">
                <div className="w-13 h-13 rounded-full bg-white border border-[#3D5AFE]/25 flex items-center justify-center flex-shrink-0 text-[#3D5AFE]">
                  <svg
                    className="w-6 h-6 text-[#3D5AFE]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-nav text-[12px] font-medium text-[#0C0E24]/60 uppercase tracking-wider mb-0.5">
                    Location
                  </span>
                  <span className="font-title text-[16px] sm:text-[17px] font-semibold text-[#0C0E24] leading-snug">
                    Ahmedabad, Gujarat India
                  </span>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="bg-[#EEF1FF] rounded-[20px] p-7 border border-[#3D5AFE]/15 shadow-xs hover:shadow-md transition-shadow flex items-center gap-5">
                <div className="w-13 h-13 rounded-full bg-white border border-[#3D5AFE]/25 flex items-center justify-center flex-shrink-0 text-[#3D5AFE]">
                  <svg
                    className="w-6 h-6 text-[#3D5AFE]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-nav text-[12px] font-medium text-[#0C0E24]/60 uppercase tracking-wider mb-0.5">
                    Email us
                  </span>
                  <a
                    href="mailto:info@thrivexai.com"
                    className="font-title text-[16px] sm:text-[17px] font-semibold text-[#0C0E24] hover:text-[#3D5AFE] transition-colors leading-snug"
                  >
                    info@thrivexai.com
                  </a>
                </div>
              </div>

              {/* Card 3: Call us */}
              <div className="bg-[#EEF1FF] rounded-[20px] p-7 border border-[#3D5AFE]/15 shadow-xs hover:shadow-md transition-shadow flex items-center gap-5">
                <div className="w-13 h-13 rounded-full bg-white border border-[#3D5AFE]/25 flex items-center justify-center flex-shrink-0 text-[#3D5AFE]">
                  <svg
                    className="w-6 h-6 text-[#3D5AFE]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-nav text-[12px] font-medium text-[#0C0E24]/60 uppercase tracking-wider mb-0.5">
                    Call us
                  </span>
                  <a
                    href="tel:+917984086915"
                    className="font-title text-[16px] sm:text-[17px] font-semibold text-[#0C0E24] hover:text-[#3D5AFE] transition-colors leading-snug"
                  >
                    +91 79840 86915
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-[#EEF1FF] border border-[#3D5AFE]/30 rounded-[24px] p-10 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#3D5AFE] text-white mx-auto flex items-center justify-center mb-5 shadow-lg">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-title text-[24px] font-semibold text-[#0C0E24] mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-body text-[#0C0E24]/80 text-[15px] max-w-md mx-auto mb-6">
                    Thank you for reaching out. A member of our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center bg-[#0C0E24] hover:bg-[#3D5AFE] text-white font-nav text-[13px] font-semibold uppercase tracking-wider px-8 py-3 rounded-full transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name *"
                      required
                      className="w-full bg-[#EEF1FF]/60 border border-slate-200 rounded-[50px] px-6 py-4 text-[#0C0E24] placeholder-[#0C0E24]/40 text-[16px] focus:outline-none focus:border-[#3D5AFE] focus:bg-white focus:ring-2 focus:ring-[#3D5AFE]/15 transition-all font-body"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name *"
                      required
                      className="w-full bg-[#EEF1FF]/60 border border-slate-200 rounded-[50px] px-6 py-4 text-[#0C0E24] placeholder-[#0C0E24]/40 text-[16px] focus:outline-none focus:border-[#3D5AFE] focus:bg-white focus:ring-2 focus:ring-[#3D5AFE]/15 transition-all font-body"
                    />
                  </div>

                  {/* Row 2: Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      required
                      className="w-full bg-[#EEF1FF]/60 border border-slate-200 rounded-[50px] px-6 py-4 text-[#0C0E24] placeholder-[#0C0E24]/40 text-[16px] focus:outline-none focus:border-[#3D5AFE] focus:bg-white focus:ring-2 focus:ring-[#3D5AFE]/15 transition-all font-body"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-[#EEF1FF]/60 border border-slate-200 rounded-[50px] px-6 py-4 text-[#0C0E24] placeholder-[#0C0E24]/40 text-[16px] focus:outline-none focus:border-[#3D5AFE] focus:bg-white focus:ring-2 focus:ring-[#3D5AFE]/15 transition-all font-body"
                    />
                  </div>

                  {/* Row 3: Subject */}
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full bg-[#EEF1FF]/60 border border-slate-200 rounded-[50px] px-6 py-4 text-[#0C0E24] placeholder-[#0C0E24]/40 text-[16px] focus:outline-none focus:border-[#3D5AFE] focus:bg-white focus:ring-2 focus:ring-[#3D5AFE]/15 transition-all font-body"
                    />
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={5}
                      required
                      className="w-full bg-[#EEF1FF]/60 border border-slate-200 rounded-[20px] px-6 py-4 text-[#0C0E24] placeholder-[#0C0E24]/40 text-[16px] focus:outline-none focus:border-[#3D5AFE] focus:bg-white focus:ring-2 focus:ring-[#3D5AFE]/15 transition-all resize-none font-body"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <SendMessageButton
                      type="submit"
                      disabled={isSubmitting}
                      isSubmitting={isSubmitting}
                    />
                  </div>
                </form>
              )}
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
