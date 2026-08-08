"use client";

import { MapPin, Sparkles, Gem, Shirt, PackageCheck, Anchor, CheckCircle2, ArrowRight } from "lucide-react";

interface JaipurSpecialtyProps {
  onOpenQuoteModal: (industry: string) => void;
}

export default function JaipurSpecialty({ onOpenQuoteModal }: JaipurSpecialtyProps) {
  const INDUSTRIES = [
    {
      icon: Sparkles,
      title: "Jaipur Blue Pottery & Marble Handicrafts",
      tagline: "Fragile Item Transit Protection",
      description: "Custom multi-cell corrugated partitions and high shock-absorbing 5-ply double-wall boxes designed to absorb transit impact for Jaipur's delicate artisan exports.",
      location: "Sanganer • Amer • Heritage City Exporters",
      specs: ["Vibration Proof 5-Ply", "Honeycomb Cushioning", "Zero-Breakage Guarantee"],
    },
    {
      icon: Shirt,
      title: "Sanganeri & Bagru Block Print Textiles",
      tagline: "Moisture Protected Flat Garment Shipping",
      description: "Flat corrugated master cartons treated with anti-humidity craft coating, preventing fabric mildew during long sea container transit to global fashion markets.",
      location: "Sanganer • Bagru • Sitapura Garment Hub",
      specs: ["Anti-Moisture Kraft", "Flat Garment Fit", "High Compression Stacking"],
    },
    {
      icon: Gem,
      title: "Johri Bazaar Gemstone & Silver Jewellery",
      tagline: "Tamper-Evident Luxury Mailers",
      description: "Ultra-compact E-flute micro-corrugated mailers with inner locking tabs and custom foil printing, fully compliant with FedEx & DHL courier security norms.",
      location: "Johri Bazaar • MI Road • Sitapura SEZ",
      specs: ["E-Flute Micro Cardboard", "Tamper-Evident Lock", "Custom Logo Foil Stamp"],
    },
    {
      icon: Anchor,
      title: "VKI Industrial Machinery & Auto Parts",
      tagline: "Heavy-Duty Pallet Cartons (7-Ply)",
      description: "Heavy structural triple-wall 7-ply corrugated containers replacing expensive wooden crates for auto component exporters and heavy industrial machinery.",
      location: "Vishwakarma (VKI) • Sitapura • Jhotwara",
      specs: ["100+ kg Load Rating", "ISPM-15 Exempt (No Wood)", "Cost Reduction vs Crates"],
    },
    {
      icon: PackageCheck,
      title: "Jaipur E-Commerce Sellers & D2C Brands",
      tagline: "Fast 24-Hour Factory Dispatch",
      description: "Amazon, Flipkart & Shopify standard corrugated mailer boxes stored ready in stock for instant same-day pickup or delivery across Jaipur pin codes.",
      location: "Mansarovar • Transport Nagar • Jaipur NCR",
      specs: ["Pre-Cut In Stock", "Same-Day Delivery", "Wholesale Tier Pricing"],
    },
  ];

  return (
    <section id="jaipur-industries" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-amber-700" /> Tailored For Jaipur Exporters
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Packaging for <span className="text-amber-700">Jaipur&apos;s Heritage Industries</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            For over 18 years, our VKI factory has engineered specialized cardboard solutions tailored to Rajasthan&apos;s leading handicraft, textile, jewellery, and industrial exporters.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl border border-amber-900/10 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between hover:border-amber-500/40 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {ind.tagline}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-amber-800 font-semibold mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-600" /> {ind.location}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {ind.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {ind.specs.map((sp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onOpenQuoteModal(`Jaipur Industry Box: ${ind.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-amber-600 text-slate-800 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Request Industry Spec Sheet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
