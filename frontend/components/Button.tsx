"use client";

import React from "react";
import Link from "next/link";

export type ButtonVariant = "cyber-capsule" | "glow" | "dual-zone" | "gradient" | "shimmer" | "ink";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = "cyber-capsule",
  size = "md",
  showArrow = true,
  children,
  className = "",
  target,
  rel,
  ...buttonProps
}) => {
  // Size metrics
  const sizeClasses = {
    sm: "text-xs px-5 py-2.5 gap-2",
    md: "text-[14px] sm:text-[15px] px-8 sm:px-9 py-3.5 sm:py-4 gap-3",
    lg: "text-[15px] sm:text-[16px] px-9 sm:px-11 py-4 sm:py-4.5 gap-3.5",
  }[size];

  // Arrow icon component
  const ArrowIcon = (
    <svg
      className="w-4 h-4 fill-none stroke-current transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );

  // Variant 0: Cyber-Shimmer Dual-Zone Capsule (1st + 4th Combined)
  if (variant === "cyber-capsule") {
    const cyberPadding = {
      sm: "pl-5 pr-1.5 py-1.5 text-xs",
      md: "pl-7 sm:pl-8 pr-2 py-2 text-[14px] sm:text-[15px]",
      lg: "pl-8 sm:pl-9 pr-2.5 py-2.5 text-[15px] sm:text-[16px]",
    }[size];

    const content = (
      <span className="relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden active:scale-95 transition-all duration-300 shadow-xl shadow-[#3D5AFE]/25 hover:shadow-[#3D5AFE]/50 group">
        {/* Animated Gradient Shimmer Border (from Concept 4) */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7C4DFF] via-[#3D5AFE] to-[#FF6B35] animate-shimmer-border" />

        {/* Inner Deep Ink Core (from Concept 4) */}
        <span className={`relative inline-flex items-center gap-4 sm:gap-5 rounded-full bg-[#0C0E24] group-hover:bg-[#141846] transition-colors duration-300 text-white font-nav font-semibold uppercase tracking-wider select-none ${cyberPadding} ${className}`}>
          <span className="tracking-[1px]">{children}</span>

          {/* Rotating Arrow Badge (from Concept 1) */}
          {showArrow && (
            <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#3D5AFE] border border-white/15 group-hover:border-[#3D5AFE] flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45 shadow-sm flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          )}
        </span>
      </span>
    );

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} className="inline-block">
          {content}
        </Link>
      );
    }
    return (
      <button {...buttonProps} className="inline-block bg-transparent p-0 border-0">
        {content}
      </button>
    );
  }

  // Variant 1: Dual-Zone Capsule with Rotating Badge
  if (variant === "dual-zone") {
    const dualZonePadding = {
      sm: "pl-5 pr-1.5 py-1.5 text-xs",
      md: "pl-7 sm:pl-8 pr-2 py-2 text-[14px] sm:text-[15px]",
      lg: "pl-8 sm:pl-9 pr-2.5 py-2.5 text-[15px] sm:text-[16px]",
    }[size];

    const content = (
      <>
        <span className="tracking-[1px]">{children}</span>
        <span className="w-8 h-8 rounded-full bg-white text-[#0C0E24] group-hover:bg-[#3D5AFE] group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45 shadow-sm flex-shrink-0">
          <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </span>
      </>
    );

    const baseClass = `group inline-flex items-center gap-4 bg-[#3D5AFE] hover:bg-[#0C0E24] active:scale-95 text-white font-nav font-semibold uppercase tracking-wider rounded-full shadow-lg shadow-[#3D5AFE]/30 hover:shadow-[#3D5AFE]/50 border border-white/20 transition-all duration-300 select-none ${dualZonePadding} ${className}`;

    if (href) {
      return (
        <Link href={href} className={baseClass} target={target} rel={rel}>
          {content}
        </Link>
      );
    }
    return (
      <button className={baseClass} {...buttonProps}>
        {content}
      </button>
    );
  }

  // Variant 2: Radiant Nova Glow (Modern SaaS Default)
  if (variant === "glow") {
    const content = (
      <div className="relative group inline-block">
        {/* Ambient Halo Glow */}
        <div className="absolute -inset-1 rounded-full bg-[#3D5AFE] opacity-35 blur-md group-hover:opacity-75 group-hover:blur-lg transition-all duration-300 pointer-events-none" />

        <div className={`relative inline-flex items-center bg-[#3D5AFE] hover:bg-[#2b44d4] active:scale-95 text-white font-nav font-semibold uppercase tracking-[0.5px] rounded-full transition-all duration-200 border-t border-white/35 border-b border-black/20 shadow-md select-none ${sizeClasses} ${className}`}>
          <span>{children}</span>
          {showArrow && ArrowIcon}
        </div>
      </div>
    );

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} className="inline-block">
          {content}
        </Link>
      );
    }
    return (
      <button {...buttonProps} className="inline-block bg-transparent p-0 border-0">
        {content}
      </button>
    );
  }

  // Variant 3: AI Gradient Stream (Ultraviolet -> Nova Blue)
  if (variant === "gradient") {
    const content = (
      <div className="relative group inline-block">
        {/* Glow Bloom */}
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#7C4DFF] to-[#3D5AFE] opacity-40 blur-md group-hover:opacity-85 group-hover:blur-lg transition-all duration-300 pointer-events-none" />

        <div className={`relative inline-flex items-center bg-gradient-to-r from-[#7C4DFF] via-[#5C54FF] to-[#3D5AFE] hover:from-[#3D5AFE] hover:to-[#7C4DFF] active:scale-95 text-white font-nav font-semibold uppercase tracking-[0.5px] rounded-full border border-white/20 shadow-xl transition-all duration-300 select-none ${sizeClasses} ${className}`}>
          <span>{children}</span>
          {showArrow && ArrowIcon}
        </div>
      </div>
    );

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} className="inline-block">
          {content}
        </Link>
      );
    }
    return (
      <button {...buttonProps} className="inline-block bg-transparent p-0 border-0">
        {content}
      </button>
    );
  }

  // Variant 4: Stealth Shimmer Border (Deep Ink Core with Gradient Rim)
  if (variant === "shimmer") {
    const content = (
      <span className="relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden active:scale-95 transition-all duration-200 group">
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7C4DFF] via-[#3D5AFE] to-[#FF6B35] animate-shimmer-border" />
        <span className={`relative inline-flex items-center rounded-full bg-[#0C0E24] group-hover:bg-[#141846] transition-colors duration-200 text-white font-nav font-semibold uppercase tracking-[0.5px] select-none ${sizeClasses} ${className}`}>
          <span>{children}</span>
          {showArrow && (
            <svg
              className="w-4 h-4 text-[#B794FF] group-hover:text-white stroke-current fill-none transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          )}
        </span>
      </span>
    );

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} className="inline-block">
          {content}
        </Link>
      );
    }
    return (
      <button {...buttonProps} className="inline-block bg-transparent p-0 border-0">
        {content}
      </button>
    );
  }

  // Variant 5: Solid Ink Pill (Default dark pill with hover Nova Blue)
  const defaultClass = `group inline-flex items-center bg-[#0C0E24] hover:bg-[#3D5AFE] active:scale-95 text-white font-nav font-semibold uppercase tracking-[0.5px] rounded-full shadow-lg shadow-black/20 hover:shadow-[#3D5AFE]/30 transition-all duration-200 select-none border border-white/10 ${sizeClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={defaultClass} target={target} rel={rel}>
        <span>{children}</span>
        {showArrow && ArrowIcon}
      </Link>
    );
  }

  return (
    <button className={defaultClass} {...buttonProps}>
      <span>{children}</span>
      {showArrow && ArrowIcon}
    </button>
  );
};
