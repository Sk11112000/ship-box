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
  title: "ShipBox Jaipur | Cardboard & Corrugated Box Manufacturing Co.",
  description: "Jaipur's premier cardboard packaging manufacturer. Heavy-duty corrugated boxes, custom printed kraft shipping cartons, die-cut boxes, & eco-friendly packaging solutions for Jaipur exporters and industries.",
  keywords: [
    "Cardboard manufacturer Jaipur",
    "Corrugated box manufacturer Jaipur",
    "VKI Industrial area box packaging",
    "Kraft paper boxes Jaipur",
    "Die cut box supplier Rajasthan",
    "ShipBox Jaipur packaging",
    "Custom shipping cartons Jaipur"
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

