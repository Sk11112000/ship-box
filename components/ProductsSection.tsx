"use client";

import { useState } from "react";
import Image from "next/image";
import { Package, Shield, CheckCircle, ArrowUpRight, Sparkles, Layers } from "lucide-react";

interface ProductsSectionProps {
  onOpenQuoteModal: (boxType: string) => void;
}

interface Product {
  id: string;
  category: "all" | "shipping" | "custom" | "heavyduty" | "jaipur";
  title: string;
  subtitle: string;
  tag: string;
  specs: {
    ply: string;
    flute: string;
    burstingFactor: string;
    idealFor: string;
  };
  features: string[];
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: "rsc-carton",
    category: "shipping",
    title: "RSC Corrugated Shipping Cartons",
    subtitle: "Regular Slotted Containers (3-Ply & 5-Ply)",
    tag: "Most Popular",
    specs: {
      ply: "3-Ply & 5-Ply Kraft",
      flute: "B-Flute / BC-Flute",
      burstingFactor: "18 to 28 BF",
      idealFor: "E-commerce shipping, FMCG, logistics & general goods",
    },
    features: [
      "Precision cut for high-speed automated taping",
      "Stacking strength up to 350 kg compression test",
      "Available in bleached white or classic brown craft",
    ],
    image: "/images/cardboard_factory_hero.png",
  },
  {
    id: "diecut-mailer",
    category: "custom",
    title: "Die-Cut Self Locking Mailer Boxes",
    subtitle: "Premium E-Commerce Kraft Packaging",
    tag: "High Conversion",
    specs: {
      ply: "3-Ply Micro Flute",
      flute: "E-Flute / Micro Flute",
      burstingFactor: "22 to 26 BF",
      idealFor: "Apparel, cosmetics, online retail & luxury gifts",
    },
    features: [
      "No adhesive tape needed for secure lock",
      "HD Flexo 1-4 color brand logo printing",
      "Foldable flat for space-saving factory storage",
    ],
    image: "/images/cardboard_custom_boxes.png",
  },
  {
    id: "pottery-fragile",
    category: "jaipur",
    title: "Jaipur Handicraft & Blue Pottery Cartons",
    subtitle: "Cellular Partitioned Fragile Packaging",
    tag: "Jaipur Speciality",
    specs: {
      ply: "5-Ply Double Wall",
      flute: "BC-Flute + Honeycomb",
      burstingFactor: "28 to 32 BF",
      idealFor: "Blue Pottery, marble statues, glass & brass export",
    },
    features: [
      "Custom die-cut grid partitions for individual item protection",
      "High shock absorption against transit vibration",
      "Zero breakage guarantee for international exporters",
    ],
    image: "/images/cardboard_custom_boxes.png",
  },
  {
    id: "heavy-duty-master",
    category: "heavyduty",
    title: "7-Ply Heavy-Duty Master Cartons",
    subtitle: "Triple Wall Industrial Pallet Shipping Boxes",
    tag: "Heavy Load",
    specs: {
      ply: "7-Ply Triple Wall",
      flute: "BCA Combination",
      burstingFactor: "36 to 45 BF",
      idealFor: "Heavy machinery components, auto parts & sea export",
    },
    features: [
      "Replaces wooden crates for cost & weight reduction",
      "Supports 100+ kg load capacity per carton",
      "Moisture-proof outer kraft lamination available",
    ],
    image: "/images/cardboard_factory_hero.png",
  },
  {
    id: "textile-box",
    category: "jaipur",
    title: "Sanganeri Textile & Garment Cartons",
    subtitle: "Flat Garment Shipping Boxes",
    tag: "Export Grade",
    specs: {
      ply: "3-Ply / 5-Ply Kraft",
      flute: "B-Flute / BC-Flute",
      burstingFactor: "20 to 24 BF",
      idealFor: "Jaipur block-printed bedsheets, ethnic wear & garments",
    },
    features: [
      "Crease-free flat dimensions for high density packing",
      "Humidity protection coating for monsoon sea shipping",
      "Custom size options for bulk export container loading",
    ],
    image: "/images/cardboard_custom_boxes.png",
  },
  {
    id: "corrugated-rolls",
    category: "shipping",
    title: "Corrugated Kraft Paper Rolls & Angle Protectors",
    subtitle: "Industrial Cushioning & Corner Guards",
    tag: "Protection Supplies",
    specs: {
      ply: "2-Ply Single Face Flute",
      flute: "C-Flute / B-Flute",
      burstingFactor: "16 to 20 BF",
      idealFor: "Furniture wrapping, metal pipes & pallet corner safety",
    },
    features: [
      "Flexible wrapping for irregular shaped goods",
      "Available in 36 to 72 inch roll widths",
      "100% eco-friendly biodegradable recycled kraft paper",
    ],
    image: "/images/cardboard_factory_hero.png",
  },
];

export default function ProductsSection({ onOpenQuoteModal }: ProductsSectionProps) {
  const [activeTab, setActiveTab] = useState<"all" | "shipping" | "custom" | "heavyduty" | "jaipur">("all");

  const filteredProducts = activeTab === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
            <Package className="w-4 h-4 text-amber-400" /> Corrugated Packaging Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Custom <span className="text-amber-400">Cardboard Box Types</span> & Specifications
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Manufactured in our state-of-the-art Jaipur corrugation facility using premium virgin & recycled kraft paper.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Packaging Types" },
            { id: "shipping", label: "RSC Shipping Cartons" },
            { id: "custom", label: "Die-Cut & Printed Mailers" },
            { id: "jaipur", label: "Jaipur Handicrafts & Textiles" },
            { id: "heavyduty", label: "Heavy Duty 7-Ply Cartons" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all group flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div>
                {/* Image header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                    {prod.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-amber-200/80 font-medium mt-0.5">
                      {prod.subtitle}
                    </p>
                  </div>

                  {/* Specs Pill List */}
                  <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-700/80 grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[9px]">Ply & Wall</span>
                      <span className="font-extrabold text-slate-100">{prod.specs.ply}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[9px]">Bursting Strength</span>
                      <span className="font-extrabold text-amber-400">{prod.specs.burstingFactor}</span>
                    </div>
                    <div className="col-span-2 pt-1 border-t border-slate-800">
                      <span className="text-slate-400 block font-bold uppercase text-[9px]">Ideal For</span>
                      <span className="font-medium text-slate-300">{prod.specs.idealFor}</span>
                    </div>
                  </div>

                  {/* Feature Checkmarks */}
                  <ul className="space-y-1.5 text-xs text-slate-300 font-medium pt-1">
                    {prod.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuoteModal(prod.title)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-700 hover:bg-amber-600 text-white hover:text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-slate-600 hover:border-amber-500"
                >
                  <span>Request Sample & Bulk Pricing</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
