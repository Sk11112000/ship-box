"use client";

import Image from "next/image";
import { Package, ShieldCheck, Factory, Truck, Award, ArrowRight, Calculator, MapPin, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenCalculator: () => void;
  onOpenQuoteModal: (boxType?: string) => void;
}

export default function Hero({ onOpenCalculator, onOpenQuoteModal }: HeroProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-slate-900 text-white pt-8 pb-20 lg:pt-14 lg:pb-28">
      {/* Background Kraft Accent Gradients */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-amber-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Jaipur Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-700/20 border border-amber-500/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 backdrop-blur-sm shadow-inner">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Jaipur&apos;s Leading Corrugated & Cardboard Manufacturer • VKI Area</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400 ml-1 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-50">
              Engineered <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">Cardboard & Corrugated Boxes</span> Manufactured in Jaipur
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              From heavy-duty 7-ply shipping cartons to precision die-cut printed kraft packaging. Custom designed for Jaipur handicraft exporters, Sanganeri textiles, Johri Bazaar jewellery, e-commerce sellers & industrial plants.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm font-semibold text-slate-200 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>18+ Yrs Heritage</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700">
                <Factory className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>50,000+ Boxes / Day</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700 col-span-2 sm:col-span-1">
                <Truck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>24h Jaipur Delivery</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm shadow-xl shadow-amber-600/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <Calculator className="w-5 h-5" />
                Calculate Box Cost Instantly
              </button>

              <button
                onClick={() => onOpenQuoteModal("Custom Corrugated Shipping Box")}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all"
              >
                Get Wholesale Quote
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Quick Metrics Ticker */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-4 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-400">18+</p>
                <p className="text-[11px] sm:text-xs text-slate-400 font-medium">Years in Jaipur</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-400">1.2K+</p>
                <p className="text-[11px] sm:text-xs text-slate-400 font-medium">Exporters & Clients</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-400">50K+</p>
                <p className="text-[11px] sm:text-xs text-slate-400 font-medium">Daily Output</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-400">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-400 font-medium">Recyclable Kraft</p>
              </div>
            </div>
          </div>

          {/* Right Image Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20 group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/cardboard_factory_hero.png"
                  alt="ShipBox Jaipur Cardboard Factory Manufacturing Unit"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-amber-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Factory Location: VKI Jaipur
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      Plot 142-145, Road No. 9, Vishwakarma Industrial Area, Jaipur 302013
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Packaging Pill */}
            <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2 bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-lg">
              <Package className="w-4 h-4" />
              <span>3-Ply • 5-Ply • 7-Ply Options</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
