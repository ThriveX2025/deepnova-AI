"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/constants/images";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "How Can Your AI-driven Business Benefit From Synthetic Data?",
    excerpt:
      "Are you looking for specific data to train your AI/ML models uniquely? Then synthetic data is the answer! Read this blog to know the role it plays in the AI/ML...",
    image: SITE_IMAGES.blog.post1,
    href: "#",
  },
  {
    id: 2,
    title: "How AI and ML in Business Processes are Changing the Market Landscape?",
    excerpt:
      "Explore the dynamic possibilities of AI/ML technology that can help to elevate your business operations and adapt to changing business landscape.",
    image: SITE_IMAGES.blog.post2,
    href: "#",
  },
  {
    id: 3,
    title: "How Data Science Can Drive Informed Decision-Making in Your Organization?",
    excerpt:
      "Explore key insights and strategies to drive the full potential of data science solutions for informed organizational decision-making.",
    image: SITE_IMAGES.blog.post3,
    href: "#",
  },
];

export const BlogPreview: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 px-6 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] font-title text-[14px] font-semibold uppercase tracking-[2px] leading-[22px] mb-5">
            RECENT NEWS
          </div>
          <h2 className="font-title text-[30px] sm:text-[34px] lg:text-[44px] font-semibold text-[#0C0E24] tracking-tight leading-[1.2] lg:leading-[52px]">
            Inside Story &amp; <span className="text-[#3D5AFE]"> Blog</span>
          </h2>
        </div>

        {/* 3 Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => {
            const hasError = imageErrors[post.id];

            return (
              <article
                key={post.id}
                className="bg-white border border-slate-200/90 rounded-[20px] overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-[#3D5AFE]/30 transition-all duration-300 flex flex-col group"
              >
                {/* Thumbnail Image */}
                <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                  {!hasError ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                      onError={() => handleImageError(post.id)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#7C4DFF] to-[#0C0E24] flex items-center justify-center p-4">
                      <span className="font-title text-sm font-semibold text-white uppercase tracking-wider">
                        DeepNova AI Blog
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-title text-[20px] sm:text-[22px] font-semibold text-[#0C0E24] group-hover:text-[#3D5AFE] transition-colors leading-snug mb-3.5">
                      {post.title}
                    </h3>
                    <p className="font-body text-[15px] sm:text-[16px] text-[#0C0E24]/80 leading-[26px] sm:leading-[28px] font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
