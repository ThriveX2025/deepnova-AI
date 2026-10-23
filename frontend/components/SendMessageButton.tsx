"use client";

import React, { useState, useRef, useEffect } from "react";

export interface SendMessageButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
  isSent?: boolean;
  isError?: boolean;
  errorMessage?: string;
  accentColor?: string;
}

export const SendMessageButton: React.FC<SendMessageButtonProps> = ({
  isSubmitting = false,
  isSent = false,
  isError: externalError = false,
  errorMessage = "Fill Required Fields!",
  accentColor = "#3D5AFE",
  className = "",
  disabled,
  onClick,
  ...props
}) => {
  const [internalError, setInternalError] = useState(false);
  const errorTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isError = externalError || internalError;
  const isActive = (isSubmitting || isSent) && !isError;

  // Intercept click to check HTML5 form validity
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.closest("form");
    if (form && !form.checkValidity()) {
      // Required fields are empty or invalid
      setInternalError(true);
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
      errorTimerRef.current = setTimeout(() => {
        setInternalError(false);
      }, 2500);
    } else {
      setInternalError(false);
    }

    if (onClick) onClick(e);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        .send-msg-btn {
          --primary: ${isError ? "#EF4444" : accentColor};
          --neutral-1: #ffffff;
          --neutral-2: #f4f6fa;
          --radius: 50px;

          cursor: pointer;
          border-radius: var(--radius);
          border: none;
          box-shadow: 0 0.5px 0.5px 1px rgba(255, 255, 255, 0.4),
            0 10px 20px rgba(12, 14, 36, 0.08), 0 4px 6px 0px rgba(12, 14, 36, 0.04);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.3s ease;
          min-width: 230px;
          padding: 0 32px;
          height: 60px;
          font-family: var(--font-inter, 'Inter', sans-serif);
          font-size: 15px;
          font-weight: 600;
          color: #0C0E24;
          user-select: none;
        }

        .send-msg-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 0 1px 2px rgba(61, 90, 254, 0.2),
            0 14px 28px rgba(12, 14, 36, 0.12), 0 8px 10px -3px rgba(12, 14, 36, 0.06);
        }

        .send-msg-btn:active {
          transform: scale(0.98);
        }

        .send-msg-btn:disabled {
          cursor: not-allowed;
          opacity: 0.85;
        }

        /* Error Shake & Border Styling */
        .send-msg-btn.is-error {
          --primary: #EF4444;
          animation: sendShake 0.45s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }

        .send-msg-btn.is-error::after {
          background: linear-gradient(var(--neutral-1), var(--neutral-2)) padding-box,
            linear-gradient(to bottom, rgba(239, 68, 68, 0.6), rgba(239, 68, 68, 0.3)) border-box;
        }

        @keyframes sendShake {
          0%, 100% { transform: translateX(0); }
          15%, 45%, 75% { transform: translateX(-6px); }
          30%, 60%, 90% { transform: translateX(6px); }
        }

        .send-msg-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: var(--radius);
          border: 2px solid transparent;
          background: linear-gradient(var(--neutral-1), var(--neutral-2)) padding-box,
            linear-gradient(to bottom, rgba(61, 90, 254, 0.25), rgba(12, 14, 36, 0.15)) border-box;
          z-index: 0;
          transition: all 0.4s ease;
        }

        .send-msg-btn::before {
          content: "";
          inset: 4px;
          position: absolute;
          background: linear-gradient(to top, var(--neutral-1), var(--neutral-2));
          border-radius: var(--radius);
          filter: blur(0.5px);
          z-index: 2;
        }

        /* Spinning Outline Beam */
        .send-msg-outline {
          position: absolute;
          border-radius: inherit;
          overflow: hidden;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.4s ease;
          inset: -2px;
        }

        .send-msg-outline::before {
          content: "";
          position: absolute;
          inset: -100%;
          background: conic-gradient(
            from 180deg,
            transparent 60%,
            var(--primary) 85%,
            transparent 100%
          );
          animation: sendSpin 2.5s linear infinite;
          animation-play-state: paused;
        }

        @keyframes sendSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .send-msg-btn:hover .send-msg-outline {
          opacity: 1;
        }

        .send-msg-btn:hover .send-msg-outline::before {
          animation-play-state: running;
        }

        /* Button Content States */
        .send-state {
          padding-left: 32px;
          z-index: 3;
          display: flex;
          align-items: center;
          position: relative;
        }

        .send-state p {
          display: flex;
          align-items: center;
          margin: 0;
          letter-spacing: 0.5px;
        }

        .send-state .icon {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          transform: scale(1.3);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        /* Letter Wave Bounce on Hover */
        .send-state p span {
          display: inline-block;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .send-msg-btn:hover .send-state--default p span {
          animation: sendWave 0.5s ease forwards calc(var(--i) * 0.02s);
        }

        @keyframes sendWave {
          30% { transform: translateY(3px); }
          50% { transform: translateY(-4px); color: var(--primary); }
          100% { transform: translateY(0); }
        }

        /* Paper Airplane Flight Animations */
        .send-state--default .icon svg {
          animation: sendLand 0.5s ease forwards;
        }

        .send-msg-btn:hover .send-state--default .icon {
          transform: rotate(45deg) scale(1.35);
        }

        .send-msg-btn.is-active .send-state--default svg {
          animation: sendTakeOff 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .send-msg-btn.is-active .send-state--default .icon {
          transform: rotate(0) scale(1.3);
        }

        @keyframes sendTakeOff {
          0% { opacity: 1; }
          50% { opacity: 1; transform: translateX(60px) rotate(45deg) scale(1.8); }
          100% { opacity: 0; transform: translateX(180px) rotate(45deg) scale(0); }
        }

        @keyframes sendLand {
          0% {
            transform: translateX(-50px) translateY(20px) rotate(-40deg) scale(1.8);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0);
            opacity: 1;
          }
        }

        /* Smoke Contrail */
        .send-state--default .icon:before {
          content: "";
          position: absolute;
          top: 50%;
          height: 2px;
          width: 0;
          left: -5px;
          background: linear-gradient(to right, transparent, rgba(61, 90, 254, 0.7));
        }

        .send-msg-btn.is-active .send-state--default .icon:before {
          animation: sendContrail 0.8s linear forwards;
        }

        @keyframes sendContrail {
          0% { width: 0; opacity: 1; }
          10% { width: 20px; }
          60% { opacity: 0.8; width: 80px; }
          100% { opacity: 0; width: 180px; }
        }

        /* State Visibility Toggling */
        .send-state--sent,
        .send-state--error {
          display: none;
        }

        /* Sent State */
        .send-msg-btn.is-active .send-state--default,
        .send-msg-btn.is-active .send-state--error {
          display: none;
        }

        .send-msg-btn.is-active .send-state--sent {
          display: flex;
        }

        .send-msg-btn.is-active .send-state--sent svg {
          color: #10B981;
          animation: sendAppear 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .send-msg-btn.is-active .send-state--sent span {
          animation: sendSlideDown 0.6s ease forwards calc(var(--i) * 0.08s);
        }

        /* Error State */
        .send-msg-btn.is-error .send-state--default,
        .send-msg-btn.is-error .send-state--sent {
          display: none;
        }

        .send-msg-btn.is-error .send-state--error {
          display: flex;
        }

        .send-msg-btn.is-error .send-state--error svg {
          color: #EF4444;
          animation: sendAppear 0.4s ease forwards;
        }

        .send-msg-btn.is-error .send-state--error p {
          color: #DC2626;
          font-weight: 700;
        }

        @keyframes sendSlideDown {
          0% { opacity: 0; transform: translateY(-15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes sendAppear {
          0% { opacity: 0; transform: scale(0.3); }
          60% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <button
        {...props}
        onClick={handleClick}
        disabled={disabled || isSubmitting}
        className={`send-msg-btn ${isActive ? "is-active" : ""} ${
          isError ? "is-error" : ""
        } ${className}`}
      >
        <div className="send-msg-outline" />

        {/* 1. Default State: Airplane + Send Message */}
        <div className="send-state send-state--default">
          <div className="icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                  fill="currentColor"
                />
                <path
                  d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
          <p>
            <span style={{ "--i": 0 } as React.CSSProperties}>S</span>
            <span style={{ "--i": 1 } as React.CSSProperties}>e</span>
            <span style={{ "--i": 2 } as React.CSSProperties}>n</span>
            <span style={{ "--i": 3, marginRight: "5px" } as React.CSSProperties}>
              d
            </span>
            <span style={{ "--i": 4 } as React.CSSProperties}>M</span>
            <span style={{ "--i": 5 } as React.CSSProperties}>e</span>
            <span style={{ "--i": 6 } as React.CSSProperties}>s</span>
            <span style={{ "--i": 7 } as React.CSSProperties}>s</span>
            <span style={{ "--i": 8 } as React.CSSProperties}>a</span>
            <span style={{ "--i": 9 } as React.CSSProperties}>g</span>
            <span style={{ "--i": 10 } as React.CSSProperties}>e</span>
          </p>
        </div>

        {/* 2. Error State: Alert Circle + Message */}
        <div className="send-state send-state--error">
          <div className="icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#EF4444"
                strokeWidth="2"
              />
              <path
                d="M12 8V12"
                stroke="#EF4444"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="16" r="1.25" fill="#EF4444" />
            </svg>
          </div>
          <p>
            <span>{errorMessage}</span>
          </p>
        </div>

        {/* 3. Sent State: Checkmark + Sent */}
        <div className="send-state send-state--sent">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="22"
              width="22"
            >
              <path
                fill="#10B981"
                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              />
              <path
                fill="#10B981"
                d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
              />
            </svg>
          </div>
          <p>
            <span style={{ "--i": 0 } as React.CSSProperties}>S</span>
            <span style={{ "--i": 1 } as React.CSSProperties}>e</span>
            <span style={{ "--i": 2 } as React.CSSProperties}>n</span>
            <span style={{ "--i": 3 } as React.CSSProperties}>t!</span>
          </p>
        </div>
      </button>
    </>
  );
};
