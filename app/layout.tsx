import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishna Packaging Co. & Shubham Industries | Corrugated Box Manufacturer Jaipur (Est. 1989)",
  description: "Established in 1989. Leading manufacturer of 3-ply to 13-ply corrugated boxes, custom die-cut packaging, offset printed boxes, binding cloth boxes, corrugated rolls, sheets & kraft paper in Jaipur.",
  keywords: [
    "Krishna Packaging Company Jaipur",
    "Shubham Industries Jaipur",
    "Corrugated box manufacturer Jaipur",
    "Cardboard manufacturer Jaipur",
    "Nagtali Transport Nagar Delhi Road Jaipur",
    "Multi-layer 3-ply to 13-ply corrugated boxes",
    "Custom die cut boxes Jaipur",
    "Offset printed boxes Jaipur",
    "Boxes with binding cloth Jaipur",
    "Corrugated rolls and sheets Jaipur"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}

