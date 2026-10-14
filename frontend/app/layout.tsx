import type { Metadata } from "next";
import { Nunito, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transform Data into Insights with Thrivex AI Solutions",
  description: "Explore how Thrivex AI converts data into actionable insights for strategic growth and a competitive edge.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
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
      className={`${nunito.variable} ${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-700 font-body antialiased">
        {children}
      </body>
    </html>
  );
}
