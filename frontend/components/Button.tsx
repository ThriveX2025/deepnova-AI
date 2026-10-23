"use client";

import React from "react";
import Link from "next/link";

export type ButtonVariant = "cyber-capsule" | "glow" | "dual-zone" | "gradient" | "shimmer" | "ink" | "sweep" | "flyout";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  iconPosition?: "left" | "right";
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
  iconPosition = "right",
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

  // Variant: Diagonal Fly-Through Arrow Capsule
  if (variant === "flyout") {
    const flyoutPadding = {
      sm: "px-4 py-2 text-xs gap-2.5",
      md: "px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] gap-3",
      lg: "px-7 sm:px-8 py-3.5 sm:py-4 text-[15px] sm:text-[16px] gap-3.5",
    }[size];

    const iconWrapperSize = {
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-7 h-7",
    }[size];

    const arrowSvgSize = {
      sm: "w-2 h-2",
      md: "w-2.5 h-2.5",
      lg: "w-3 h-3",
    }[size];

    const flyoutIcon = showArrow && (
      <span
        className={`relative ${iconWrapperSize} rounded-full bg-white text-[#3D5AFE] group-hover:text-[#0C0E24] flex items-center justify-center overflow-hidden transition-colors duration-300 flex-shrink-0 shadow-xs`}
        aria-hidden="true"
      >
        {/* Primary Arrow (Flies out top-right) */}
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${arrowSvgSize} transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]`}
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>

        {/* Secondary Arrow (Flies in from bottom-left) */}
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute ${arrowSvgSize} -translate-x-[150%] translate-y-[150%] transition-transform duration-300 ease-in-out delay-75 group-hover:translate-x-0 group-hover:translate-y-0`}
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>
      </span>
    );

    const baseClass = `group inline-flex items-center justify-center bg-gradient-to-r from-[#7C4DFF] to-[#3D5AFE] hover:from-[#3D5AFE] hover:to-[#0C0E24] active:scale-95 text-white font-nav font-semibold uppercase tracking-wider rounded-full shadow-lg shadow-[#3D5AFE]/25 hover:shadow-xl hover:shadow-[#3D5AFE]/40 border border-white/20 transition-all duration-300 select-none ${flyoutPadding} ${className}`;

    const content = (
      <>
        {iconPosition === "left" && flyoutIcon}
        <span className="tracking-[1px]">{children}</span>
        {iconPosition === "right" && flyoutIcon}
      </>
    );

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

  // Variant: Interactive Expand Sweep Capsule with Rotating Arrow
  if (variant === "sweep") {
    const sweepPadding = {
      sm: "pl-4 pr-1.5 py-1.5 text-xs gap-2.5",
      md: "pl-6 sm:pl-7 pr-2 py-2 text-[14px] sm:text-[15px] gap-3.5",
      lg: "pl-7 sm:pl-8 pr-2.5 py-2.5 text-[15px] sm:text-[16px] gap-4",
    }[size];

    const arrowDimensions = {
      sm: "w-7 h-7 p-1.5",
      md: "w-8 h-8 p-1.5 sm:p-2",
      lg: "w-9 h-9 p-2",
    }[size];

    const content = (
      <span
        className={`relative inline-flex items-center justify-between rounded-full bg-[#0C0E24] hover:bg-[#141846] backdrop-blur-md border border-white/20 hover:border-white/30 text-white font-nav font-semibold uppercase tracking-wider overflow-hidden isolate shadow-lg shadow-[#0C0E24]/30 hover:shadow-[#3D5AFE]/30 active:scale-95 transition-all duration-300 group select-none ${sweepPadding} ${className} ${buttonProps.disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "cursor-pointer"}`}
      >
        <span
          aria-hidden="true"
          className="absolute -left-[120%] top-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full bg-gradient-to-r from-[#7C4DFF] to-[#3D5AFE] -z-10 transition-all duration-700 ease-out group-hover:left-[-20%] group-hover:scale-150 pointer-events-none"
        />
        <span className="tracking-[1px]">{children}</span>
        {showArrow && (
          <span
            className={`${arrowDimensions} rounded-full border border-white/25 group-hover:border-transparent group-hover:bg-white text-white group-hover:text-[#0C0E24] flex items-center justify-center rotate-45 group-hover:rotate-90 transition-all duration-300 ease-linear shadow-sm flex-shrink-0`}
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" />
            </svg>
          </span>
        )}
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
