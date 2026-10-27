import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishna Packaging Company & Shubham Industries | Corrugated Box Manufacturer Jaipur (Est. 1989)",
  description: "Established in 1989 (For over 37 years). Leading manufacturer of 3-ply to 13-ply corrugated boxes at Nagtali, Transport Nagar, Delhi Road, Jaipur - 302004. Custom die-cut boxes, offset printed boxes, boxes with binding cloth, corrugated rolls, sheets & kraft paper. Factory hours 9 AM - 8 PM.",
  keywords: [
    "Krishna Packaging Company Jaipur",
    "Shubham Industries Jaipur",
    "Corrugated box manufacturer Jaipur",
    "Cardboard manufacturer Jaipur",
    "Nagtali Transport Nagar Delhi Road Jaipur",
    "Transport Nagar cardboard factory",
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
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

