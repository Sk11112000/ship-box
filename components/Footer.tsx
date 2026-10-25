"use client";

import Image from "next/image";
import { Package, MapPin, Phone, Mail, ShieldCheck, Heart, Clock, Camera } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md border border-amber-500/30 shrink-0">
                <Image
                  src="/images/krishna_packaging_logo.png"
                  alt="Krishna Packaging Company Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  KRISHNA<span className="text-amber-500"> PACKAGING</span>
                </span>
                <span className="ml-2 bg-amber-500/20 text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-500/30">
                  EST. 1989
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed font-normal max-w-sm">
              Krishna Packaging Company &amp; Shubham Industries. Established in 1989, we are Jaipur&apos;s trusted manufacturer of 3-ply to 13-ply corrugated boxes, custom die-cut packaging, offset printed boxes, binding cloth reinforcement &amp; packaging supplies. For over 37 years, our Transport Nagar factory delivers durable, cost-effective packaging solutions.
            </p>

            <div className="flex flex-col gap-1.5 text-slate-300 font-semibold pt-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Est. 1989 • For Over 37 Years Packaging Legacy</span>
              </div>
              <div className="flex items-center gap-2 text-amber-300">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Factory Hours: 9:00 AM - 8:00 PM (Mon - Sat)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Box Types */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs">Products &amp; Solutions</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">3-Ply to 13-Ply Boxes</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">Custom Die-Cut Boxes</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">Offset Printed Boxes</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">Boxes with Binding Cloth</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">Corrugated Rolls &amp; Sheets</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">High-Strength Kraft Paper</button></li>
              <li><button onClick={() => scrollTo("gallery")} className="hover:text-amber-400 transition-colors flex items-center gap-1 text-amber-300 font-bold"><Camera className="w-3 h-3" /> Factory &amp; Box Photos</button></li>
            </ul>
          </div>

          {/* Col 3: Jaipur Industries */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs">Exporters &amp; Pricing</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Blue Pottery &amp; Handicrafts</button></li>
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Sanganeri Textile Cartons</button></li>
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Industrial Machinery Spares</button></li>
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Export Sea Container Boxes</button></li>
              <li><button onClick={() => scrollTo("calculator")} className="hover:text-amber-400 transition-colors text-amber-300 font-bold">Pricing &amp; MOQ According to Size</button></li>
            </ul>
          </div>

          {/* Col 4: Factory Address & Contacts */}
          <div className="space-y-2.5">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs">Factory &amp; Management</h4>
            <p className="text-slate-300 leading-relaxed">
              <strong>Factory:</strong> B-10, Opp. RAC Gate, Nagtali Transport Nagar, Delhi Road, Jaipur - 302004<br />
              <strong>Reg. Office:</strong> S-24-25, Janta Colony, Jaipur - 302004
            </p>
            <p className="text-slate-300 pt-1">
              📞 <strong>Orders &amp; WhatsApp:</strong><br />
              <a href="https://wa.me/917891013141" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-bold hover:underline">+91 78910 13141</a>
            </p>
            <div className="text-slate-300 space-y-0.5 pt-0.5">
              <p>👤 <strong>Krishna Gopal Sharma:</strong> <a href="tel:+919314519097" className="text-amber-300 hover:underline">+91 93145 19097</a></p>
              <p>👤 <strong>Aniket Sharma:</strong> <a href="tel:+919829088124" className="text-amber-300 hover:underline">+91 98290 88124</a></p>
            </div>
            <div className="text-slate-300 pt-1 space-y-0.5">
              <p>✉️ <a href="mailto:krishnapackagingcompany@gmail.com" className="text-amber-400 hover:underline break-all">krishnapackagingcompany@gmail.com</a></p>
              <p>✉️ <a href="mailto:shubhamindustries124@gmail.com" className="text-amber-400 hover:underline break-all">shubhamindustries124@gmail.com</a></p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p>© 1989 - {new Date().getFullYear()} Krishna Packaging Company &amp; Shubham Industries (Jaipur, Rajasthan). All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Manufactured with <Heart className="w-3 h-3 text-amber-500 fill-amber-500" /> in Transport Nagar, Jaipur
          </p>
        </div>
      </div>
    </footer>
  );
}
