import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transform Data into Insights with DeepNova AI Solutions",
  description: "Explore how DeepNova AI converts data into actionable insights for strategic growth and a competitive edge.",
  icons: {
    icon: "/images/logos/favicon.svg",
    shortcut: "/images/logos/favicon.svg",
    apple: "/images/logos/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Sora:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#EEF1FF] text-[#0C0E24] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
