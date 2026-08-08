"use client";

import { useState } from "react";
import Image from "next/image";
import { Package, Shield, CheckCircle, ArrowUpRight, Sparkles, Layers, Scissors, Printer, ShieldAlert, Scroll, FileText } from "lucide-react";

interface ProductsSectionProps {
  onOpenQuoteModal: (boxType: string) => void;
}

interface Product {
  id: string;
  category: "all" | "multilayer" | "custom" | "supplies";
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
  // Multi-Layer Corrugated Boxes
  {
    id: "3ply-box",
    category: "multilayer",
    title: "3-Ply Corrugated Boxes",
    subtitle: "Lightweight & Reliable Everyday Shipping Cartons",
    tag: "Standard Shipping",
    specs: {
      ply: "3-Ply Single Wall",
      flute: "B-Flute / C-Flute / E-Flute",
      burstingFactor: "16 to 22 BF",
      idealFor: "E-commerce shipments, retail goods, apparel & light products",
    },
    features: [
      "Cost-effective everyday packing for online store dispatch",
      "Precision cut for easy folding and fast taping",
      "Available in brown kraft or bleached white top",
    ],
    image: "/images/cardboard_factory_hero.png",
  },
  {
    id: "5ply-box",
    category: "multilayer",
    title: "5-Ply Corrugated Boxes",
    subtitle: "Double Wall Strong Shipping Master Cartons",
    tag: "High Demand",
    specs: {
      ply: "5-Ply Double Wall",
      flute: "BC-Flute / AB-Flute",
      burstingFactor: "22 to 32 BF",
      idealFor: "Handicrafts, electronics, garments & domestic freight",
    },
    features: [
      "Enhanced stacking strength for multi-layer warehouse storage",
      "Superior protection against transit bumps and drops",
      "High bursting strength kraft paper liner options",
    ],
    image: "/images/cardboard_custom_boxes.png",
  },
  {
    id: "7ply-box",
    category: "multilayer",
    title: "7-Ply Corrugated Boxes",
    subtitle: "Triple Wall Heavy-Duty Export Shipping Cartons",
    tag: "Export Quality",
    specs: {
      ply: "7-Ply Triple Wall",
      flute: "BCA Flute Combination",
      burstingFactor: "32 to 45 BF",
      idealFor: "Heavy machinery, stone pottery, export shipping & bulk cargo",
    },
    features: [
      "Replaces wooden crates for export shipments",
      "High vertical compression rating for heavy ocean freight",
      "Protects against severe handling and international transit",
    ],
    image: "/images/cardboard_factory_hero.png",
  },
  {
    id: "9ply-box",
    category: "multilayer",
    title: "9-Ply Heavy-Duty Boxes",
    subtitle: "Multi-Wall High Load Capacity Industrial Cartons",
    tag: "Heavy Load",
    specs: {
      ply: "9-Ply Quad Wall",
      flute: "Heavy Flute Composite",
      burstingFactor: "45+ BF",
      idealFor: "Auto components, industrial equipment & bulk export",
    },
    features: [
      "Extreme structural rigidity without warping",
      "Absorbs heavy vibrations and high impact forces",
      "Custom manufactured for severe industrial transport",
    ],
    image: "/images/cardboard_custom_boxes.png",
  },
  {
    id: "11ply-box",
    category: "multilayer",
    title: "11-Ply Extra Strong Boxes",
    subtitle: "Reinforced Multi-Wall Industrial Packaging",
    tag: "Extra Strong",
    specs: {
      ply: "11-Ply Multi-Wall",
      flute: "Dense Heavy Fluting",
      burstingFactor: "50+ BF",
      idealFor: "Heavy machinery spares, metal castings & raw materials",
    },
    features: [
      "Designed for extreme weight bearing and stacking",
      "Ideal for sea container bulk cargo shipping",
      "Moisture-resistant kraft construction options",
    ],
    image: "/images/cardboard_factory_hero.png",
  },
  {
    id: "13ply-box",
    category: "multilayer",
    title: "13-Ply Ultra Heavy-Duty Industrial Boxes",
    subtitle: "Maximum Strength Corrugated Crates",
    tag: "Ultra Heavy Duty",
    specs: {
      ply: "13-Ply Ultra Multi-Wall",
      flute: "Max Flute Matrix",
      burstingFactor: "60+ BF Industrial Grade",
      idealFor: "Ultra-heavy machinery, engine blocks & heavy export cargo",
    },
    features: [
      "Maximum crush resistance available in corrugated technology",
      "Eco-friendly alternative to heavy timber / wooden crates",
      "Custom engineered to exact weight specifications",
    ],
    image: "/images/cardboard_factory_hero.png",
  },

  // Custom & Specialty Packaging
  {
    id: "custom-die-cut",
    category: "custom",
    title: "Custom Die-Cut Boxes",
    subtitle: "Precision-Cut Packaging Tailored to Exact Dimensions",
    tag: "Custom Tailored",
    specs: {
      ply: "3-Ply / 5-Ply Custom",
      flute: "E-Flute / B-Flute / F-Flute",
      burstingFactor: "20 to 28 BF",
      idealFor: "Custom product shapes, mailer boxes, gift boxes & inserts",
    },
    features: [
      "Precision-cut to exact product contours and dimensions",
      "Self-locking designs require no adhesive tape",
      "Enhances unboxing experience and brand value",
    ],
    image: "/images/cardboard_custom_boxes.png",
  },
  {
    id: "offset-printed",
    category: "custom",
    title: "Offset Printed Boxes",
    subtitle: "High-Quality Multi-Color Branding & Retail Displays",
    tag: "Premium Branding",
    specs: {
      ply: "Micro-Flute + Laminated Board",
      flute: "E-Flute / F-Flute",
      burstingFactor: "22 to 30 BF",
      idealFor: "Retail display packaging, cosmetics, luxury goods & consumer electronics",
    },
    features: [
      "Vibrant multi-color offset printing with gloss / matte lamination",
      "High photographic resolution for eye-catching shelf presence",
      "Custom foil stamping and spot UV options available",
    ],
    image: "/images/cardboard_custom_boxes.png",
  },
  {
    id: "binding-cloth-box",
    category: "custom",
    title: "Boxes with Binding Cloth",
    subtitle: "Extra-Reinforced Cloth-Stitched Heavy-Duty Cartons",
    tag: "Extreme Durability",
    specs: {
      ply: "5-Ply / 7-Ply Cloth Reinforced",
      flute: "BC-Flute + Fabric Stitch",
      burstingFactor: "35+ BF Fabric Reinforced",
      idealFor: "Heavy-weight export goods, textile rolls, hardware & harsh handling",
    },
    features: [
      "Stitched with heavy binding cloth along edges and joints",
      "Prevents corner tearing under severe transport strain",
      "Extremely popular for long-distance export and heavy loads",
    ],
    image: "/images/cardboard_factory_hero.png",
  },

  // Packaging Materials & Supplies
  {
    id: "corrugated-rolls",
    category: "supplies",
    title: "Corrugated Kraft Rolls",
    subtitle: "Flexible & Shock-Absorbent Wrapping Rolls",
    tag: "Wrapping Material",
    specs: {
      ply: "2-Ply Single Face Flute",
      flute: "C-Flute / B-Flute",
      burstingFactor: "16 to 20 BF",
      idealFor: "Wrapping furniture, glass, metal pipes & irregular items",
    },
    features: [
      "Flexible shock-absorbing cushion for surface protection",
      "Available in standard roll widths from 24 to 72 inches",
      "100% recyclable and eco-friendly packaging material",
    ],
    image: "/images/cardboard_factory_hero.png",
  },
  {
    id: "corrugated-sheets",
    category: "supplies",
    title: "Corrugated Sheets & Layer Pads",
    subtitle: "Sturdy Flat Partition & Support Sheets",
    tag: "Structural Support",
    specs: {
      ply: "3-Ply / 5-Ply / 7-Ply Flat Sheets",
      flute: "B / C / BC Flutes",
      burstingFactor: "18 to 32 BF",
      idealFor: "Pallet layer pads, box partitions, separator sheets & floor protection",
    },
    features: [
      "Provides uniform load distribution on pallets",
      "Custom die-cut grid partitions for fragile items",
      "High rigidity for stacking stability",
    ],
    image: "/images/cardboard_custom_boxes.png",
  },
  {
    id: "kraft-paper",
    category: "supplies",
    title: "High-Strength Kraft Paper",
    subtitle: "Premium Grade Packaging & Wrapping Paper",
    tag: "Raw Material",
    specs: {
      ply: "Virgin / Recycled Kraft Paper",
      flute: "Non-corrugated Flat Paper",
      burstingFactor: "14 to 30 BF (80 to 220 GSM)",
      idealFor: "Wrapping, void fill, paper bags & laminating",
    },
    features: [
      "High tensile strength and tear resistance",
      "Available in various GSM ratings and roll/sheet sizes",
      "Sourced from premium mills for high bursting factor",
    ],
    image: "/images/cardboard_factory_hero.png",
  },
];

export default function ProductsSection({ onOpenQuoteModal }: ProductsSectionProps) {
  const [activeTab, setActiveTab] = useState<"all" | "multilayer" | "custom" | "supplies">("all");

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
            <Package className="w-4 h-4 text-amber-400" /> Complete Packaging Range
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Complete <span className="text-amber-400">Corrugated & Cardboard</span> Products
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Manufactured in-house at our Jaipur plant to ensure the highest quality standards. From 3-ply to 13-ply ultra heavy-duty boxes, custom die-cut designs, binding cloth reinforcement & packaging materials.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Products" },
            { id: "multilayer", label: "Multi-Layer Boxes (3 to 13 Ply)" },
            { id: "custom", label: "Custom, Offset & Binding Cloth" },
            { id: "supplies", label: "Rolls, Sheets & Kraft Paper" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
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
              className="bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-black text-[11px] px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
                    {prod.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-amber-300/80 font-medium mt-1">
                      {prod.subtitle}
                    </p>
                  </div>

                  {/* Specs Table */}
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700/80 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Type / Spec:</span>
                      <span className="text-slate-200 font-semibold">{prod.specs.ply}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Strength Rating:</span>
                      <span className="text-amber-400 font-semibold">{prod.specs.burstingFactor}</span>
                    </div>
                    <div className="pt-1 text-[11px] text-slate-300 border-t border-slate-800">
                      <span className="text-amber-400 font-semibold">Ideal For:</span> {prod.specs.idealFor}
                    </div>
                  </div>

                  {/* Key Features */}
                  <ul className="space-y-2 text-xs text-slate-300">
                    {prod.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuoteModal(prod.title)}
                  className="w-full py-3 px-4 bg-slate-700/80 hover:bg-amber-500 hover:text-slate-950 text-slate-100 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 border border-slate-600 hover:border-amber-400 cursor-pointer"
                >
                  <span>Request Quote for {prod.title}</span>
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
