"use client";

import { useState } from "react";
import Image from "next/image";
import { Package, Shield, CheckCircle, ArrowUpRight, Sparkles, Layers, Scissors, Printer, ShieldAlert, Scroll, FileText, CheckCircle2 } from "lucide-react";

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
  // 1. Multi-Layer Corrugated Boxes
  {
    id: "3ply-box",
    category: "multilayer",
    title: "3-Ply Corrugated Boxes",
    subtitle: "Lightweight & Reliable Everyday Shipping Cartons",
    tag: "High Demand",
    specs: {
      ply: "3-Ply Single Wall",
      flute: "B-Flute / C-Flute / E-Flute",
      burstingFactor: "16 to 22 BF",
      idealFor: "E-commerce shipments, retail goods, apparel & light to medium products",
    },
    features: [
      "Shock-absorbent for fragile items with moisture-resistant kraft paper",
      "Crush-proof & reliable for courier transit and domestic shipping",
      "Available in standard kraft brown and bleached white top",
    ],
    image: "/images/krishna_3ply_strength.jpg",
  },
  {
    id: "5ply-box",
    category: "multilayer",
    title: "5-Ply Corrugated Boxes",
    subtitle: "Double Wall Strong Shipping Master Cartons (140 GSM Virgin Paper)",
    tag: "Export Grade",
    specs: {
      ply: "5-Ply Double Wall",
      flute: "BC-Flute / AB-Flute",
      burstingFactor: "22 to 32 BF",
      idealFor: "Handicrafts, ceramics, blue pottery, garments & domestic/export freight",
    },
    features: [
      "140 GSM virgin paper quality for superior compression strength",
      "Enhanced stacking strength for multi-layer warehouse storage",
      "Superior protection against transit shocks, vibrations and drops",
    ],
    image: "/images/krishna_5ply_box.png",
  },
  {
    id: "7ply-box",
    category: "multilayer",
    title: "7-Ply Corrugated Boxes",
    subtitle: "Triple Wall Heavy-Duty Export Shipping Cartons",
    tag: "Heavy Duty",
    specs: {
      ply: "7-Ply Triple Wall",
      flute: "BCA Flute Combination",
      burstingFactor: "32 to 45 BF",
      idealFor: "Heavy machinery, stone crafts, bulk auto components & ocean sea freight",
    },
    features: [
      "Replaces heavy wooden crates with zero ISPM fumigation compliance",
      "High vertical compression rating for severe multi-ton stacking",
      "Engineered to withstand long ocean cargo transit and rough handling",
    ],
    image: "/images/cardboard_factory_hero.png",
  },
  {
    id: "9ply-box",
    category: "multilayer",
    title: "9-Ply Heavy-Duty Boxes",
    subtitle: "Multi-Wall High Load Capacity Industrial Cartons",
    tag: "Industrial Grade",
    specs: {
      ply: "9-Ply Quad Wall",
      flute: "Heavy Flute Composite Matrix",
      burstingFactor: "45+ BF",
      idealFor: "Heavy industrial machinery, engines, metal components & bulk export",
    },
    features: [
      "Extreme structural rigidity without warping under extreme weight",
      "Absorbs heavy vibrations and high road impact forces",
      "Custom manufactured for severe industrial transport environments",
    ],
    image: "/images/krishna_plant_machinery.png",
  },
  {
    id: "11ply-box",
    category: "multilayer",
    title: "11-Ply Extra Strong Boxes",
    subtitle: "Reinforced Multi-Wall Industrial Packaging",
    tag: "Extra Strong",
    specs: {
      ply: "11-Ply Multi-Wall",
      flute: "Dense Multi-Flute Combination",
      burstingFactor: "50+ BF",
      idealFor: "Heavy machinery spares, metal castings, tooling & export bulk loads",
    },
    features: [
      "Engineered for extreme weight-bearing capacity up to 450+ kg",
      "Optimal for containerized sea shipment and rail bulk freight",
      "Moisture-resistant kraft construction for tropical shipping",
    ],
    image: "/images/cardboard_custom_boxes.png",
  },
  {
    id: "13ply-box",
    category: "multilayer",
    title: "13-Ply Ultra Heavy-Duty Industrial Boxes",
    subtitle: "Maximum Strength Corrugated Heavy-Duty Crates",
    tag: "Ultra Heavy Duty",
    specs: {
      ply: "13-Ply Ultra Multi-Wall",
      flute: "Max Flute Matrix",
      burstingFactor: "60+ Industrial BF",
      idealFor: "Ultra-heavy machinery, generator units & massive industrial exports",
    },
    features: [
      "Maximum crush resistance available in modern corrugated engineering",
      "Eco-friendly, lightweight alternative to timber and plywood crates",
      "Custom engineered to exact product weight, balance and load requirements",
    ],
    image: "/images/krishna_factory_exterior.jpg",
  },

  // 2. Custom & Specialty Packaging
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
      idealFor: "Precision product shapes, self-locking mailers, gift boxes & inserts",
    },
    features: [
      "Precision-cut packaging tailored to your exact product dimensions and shape",
      "Self-locking designs require no adhesive tape, giving a premium unboxing experience",
      "Custom internal cavities and dividers to lock delicate products in place",
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
      ply: "Micro-Flute + Laminated Duplex Board",
      flute: "E-Flute / F-Flute / B-Flute",
      burstingFactor: "22 to 30 BF",
      idealFor: "Retail display packaging, cosmetics, luxury goods, textiles & electronics",
    },
    features: [
      "High-quality multi-color printed boxes for premium branding and retail display",
      "Vibrant color fidelity with gloss/matte lamination, UV coating & embossing",
      "Transforms standard shipping boxes into eye-catching marketing assets",
    ],
    image: "/images/krishna_5ply_box.png",
  },
  {
    id: "binding-cloth-box",
    category: "custom",
    title: "Boxes with Binding Cloth",
    subtitle: "Extra-Reinforced Cloth-Stitched Heavy-Duty Cartons",
    tag: "Extreme Durability",
    specs: {
      ply: "5-Ply / 7-Ply Cloth Reinforced",
      flute: "BC-Flute + Heavy Cloth Stitch",
      burstingFactor: "35+ BF Fabric Reinforced",
      idealFor: "Heavy-weight export goods, textile bales, metal hardware & rough transit",
    },
    features: [
      "Extra-reinforced boxes stitched with binding cloth along edges and joints",
      "Provides extreme durability against burst strains, corner tear and drop shock",
      "Highly recommended for heavy export cargo and multi-handling transport",
    ],
    image: "/images/krishna_plant_machinery.png",
  },

  // 3. Packaging Materials & Supplies
  {
    id: "corrugated-rolls",
    category: "supplies",
    title: "Corrugated Rolls",
    subtitle: "Flexible & Shock-Absorbent Wrapping Rolls",
    tag: "Wrapping Material",
    specs: {
      ply: "2-Ply Single Face Flute",
      flute: "C-Flute / B-Flute",
      burstingFactor: "16 to 20 BF",
      idealFor: "Wrapping furniture, glass, metal tubes, ceramic crafts & irregular shapes",
    },
    features: [
      "Flexible and shock-absorbent rolls for wrapping irregular-shaped items safely",
      "Available in roll widths from 24 inches to 72 inches in continuous lengths",
      "100% recyclable, biodegradable cushioning alternative to plastic bubble wrap",
    ],
    image: "/images/krishna_3ply_strength.jpg",
  },
  {
    id: "corrugated-sheets",
    category: "supplies",
    title: "Corrugated Sheets",
    subtitle: "Sturdy Flat Partition & Layer Support Sheets",
    tag: "Structural Support",
    specs: {
      ply: "3-Ply / 5-Ply / 7-Ply Flat Board",
      flute: "B / C / BC Flutes",
      burstingFactor: "18 to 35 BF",
      idealFor: "Pallet layer pads, box partitions, separator sheets & structural support",
    },
    features: [
      "Sturdy flat sheets used for partitions, layer pads, and structural support inside boxes",
      "Custom sized to fit inside cartons or on standard wooden/plastic export pallets",
      "Provides uniform load distribution to prevent carton crushing in tall stacks",
    ],
    image: "/images/krishna_3ply_structure.jpg",
  },
  {
    id: "kraft-paper",
    category: "supplies",
    title: "Kraft Paper",
    subtitle: "High-Strength Premium Quality Industrial Paper",
    tag: "Raw Material",
    specs: {
      ply: "Virgin / Recycled Kraft Paper Roll & Sheet",
      flute: "Flat Industrial Kraft Paper",
      burstingFactor: "16 to 32 BF (80 to 250 GSM)",
      idealFor: "Industrial packaging, void fill, laminating, paper bags & core wrapping",
    },
    features: [
      "High-strength, premium quality kraft paper for various industrial applications",
      "High bursting factor and tensile strength to withstand rough friction and moisture",
      "Supplied in rolls of varied widths or customized flat cut sheets",
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
            <Package className="w-4 h-4 text-amber-400" /> Complete Range of Corrugated Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Complete <span className="text-amber-400">Packaging Products & Raw Materials</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            We offer a complete range of corrugated packaging solutions and raw materials, manufactured in-house to ensure the highest quality standards. From lightweight retail packing to ultra-heavy-duty industrial transit, we provide exactly what your business needs.
          </p>

          {/* Pricing & MOQ Notice Banner */}
          <div className="mt-5 inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-amber-600/20 to-amber-500/20 border border-amber-500/40 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-amber-300">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Pricing & Minimum Order Quantity (MOQ): According to the size and specific box requirements.</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Products (12)" },
            { id: "multilayer", label: "1. Multi-Layer Boxes (3 to 13 Ply)" },
            { id: "custom", label: "2. Custom & Specialty Packaging" },
            { id: "supplies", label: "3. Packaging Materials & Supplies" },
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
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
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
                  onClick={() => onOpenQuoteModal(`Bulk Quote for ${prod.title}`)}
                  className="w-full py-3 px-4 bg-slate-700/80 hover:bg-amber-500 hover:text-slate-950 text-slate-100 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 border border-slate-600 hover:border-amber-400 cursor-pointer"
                >
                  <span>Get a Bulk Quote for {prod.title}</span>
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
