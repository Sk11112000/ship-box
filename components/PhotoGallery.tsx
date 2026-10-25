"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ZoomIn, X, CheckCircle2, ChevronRight, MapPin, Phone, Layers, ShieldCheck } from "lucide-react";

interface PhotoItem {
  id: string;
  title: string;
  category: "factory" | "product" | "technical";
  categoryLabel: string;
  image: string;
  description: string;
  highlights: string[];
}

const PHOTOS: PhotoItem[] = [
  {
    id: "factory-exterior",
    title: "Krishna Packaging Company — Factory & Logistics Fleet",
    category: "factory",
    categoryLabel: "Factory Infrastructure",
    image: "/images/krishna_factory_exterior.jpg",
    description: "Our expansive manufacturing facility and dedicated transport fleet located at Nagtali, Transport Nagar, Delhi Road, Jaipur. Serving over 37 years of uninterrupted industrial packaging supply.",
    highlights: [
      "Prime location on Delhi Road, Transport Nagar Jaipur",
      "Direct company-owned delivery fleet for fast dispatch",
      "Fully equipped loading dock & raw material warehouse",
    ],
  },
  {
    id: "plant-machinery",
    title: "High-Speed Automated Corrugator Production Line",
    category: "factory",
    categoryLabel: "Manufacturing Machinery",
    image: "/images/krishna_plant_machinery.png",
    description: "Our heavy-duty continuous corrugation plant line capable of manufacturing 3-ply, 5-ply, 7-ply up to 13-ply multi-wall boards with precision fluting and automated slitting.",
    highlights: [
      "High daily capacity for bulk and urgent orders",
      "Multi-flute precision corrugation (B, C, E flutes)",
      "Automated temperature and adhesive bonding controls",
    ],
  },
  {
    id: "5ply-corrugated",
    title: "5-Ply Corrugated Box (140 GSM Virgin Paper Quality)",
    category: "product",
    categoryLabel: "Product Spotlight",
    image: "/images/krishna_5ply_box.png",
    description: "Manufactured with premium 140 GSM virgin kraft paper. Engineered with superior bursting strength and high compression tolerance for delicate exports and heavy industrial loads.",
    highlights: [
      "140 GSM virgin kraft paper construction",
      "Double wall protection against transit shocks",
      "Custom sizing & branding for e-commerce and retail",
    ],
  },
  {
    id: "3ply-strength",
    title: "3-Ply Corrugated Box for Maximum Strength",
    category: "product",
    categoryLabel: "Product Spotlight",
    image: "/images/krishna_3ply_strength.jpg",
    description: "Shock-absorbent for fragile items, moisture-resistant kraft paper, and crush-proof structural design. Reliable for domestic e-commerce, courier dispatch, and export shipping.",
    highlights: [
      "Shock absorbent for fragile & delicate items",
      "Moisture-resistant kraft paper liner",
      "Crush-proof & reliable stacking performance",
    ],
  },
  {
    id: "flute-structure",
    title: "3-Ply Corrugated Board Flute & Liner Anatomy",
    category: "technical",
    categoryLabel: "Technical Diagram",
    image: "/images/krishna_3ply_structure.jpg",
    description: "Technical structural breakdown of our 3-ply board: outer kraft liner, high-adhesion industrial starch glue, arched fluting medium for cushioning, and inner liner for surface rigidity.",
    highlights: [
      "Paper outer liner for puncture resistance & print quality",
      "Paper fluting medium for maximum cushioning & arch strength",
      "Paper inner liner for smooth product contact & integrity",
    ],
  },
];

interface PhotoGalleryProps {
  onOpenQuoteModal: (spec?: string) => void;
}

export default function PhotoGallery({ onOpenQuoteModal }: PhotoGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "factory" | "product" | "technical">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = activeFilter === "all"
    ? PHOTOS
    : PHOTOS.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-amber-900/20">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
            <Camera className="w-4 h-4 text-amber-400" /> Real Factory & Product Photos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Inside <span className="text-amber-400">Krishna Packaging Company</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Take a visual tour of our Transport Nagar manufacturing plant, automated machine lines, real box samples, and multi-ply corrugated board engineering.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-amber-300 bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Nagtali, Transport Nagar, Delhi Road, Jaipur - 302004</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Photos (5)" },
            { id: "factory", label: "Factory & Machinery" },
            { id: "product", label: "Box Products & Samples" },
            { id: "technical", label: "Board Anatomy & Fluting" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/60 shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge */}
                <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
                  {photo.categoryLabel}
                </span>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span>View Full Photo & Specs</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 p-6 sm:p-8 rounded-2xl border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              Need Custom Sizing or In-Person Factory Inspection?
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Pricing & Minimum Order Quantity (MOQ) are customized according to the box size, thickness (3-ply to 13-ply), and printing requirements. Factory visits welcome at our Transport Nagar plant!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenQuoteModal("Custom Factory Bulk Order")}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
            >
              Get a Bulk Quote
            </button>
            <a
              href="https://wa.me/917891013141?text=Hello%20Krishna%20Packaging%2C%20I%20saw%20your%20factory%20photos%20and%20would%20like%20a%20bulk%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 flex items-center justify-center gap-2 transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              WhatsApp: +91 78910 13141
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 rounded-2xl max-w-3xl w-full border border-amber-500/30 overflow-hidden shadow-2xl relative text-white max-h-[90vh] flex flex-col">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-amber-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full h-72 sm:h-96 bg-black">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 overflow-y-auto">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded border border-amber-500/30">
                  {selectedPhoto.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2">
                <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Key Specifications & Features:</p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedPhoto.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    const title = selectedPhoto.title;
                    setSelectedPhoto(null);
                    onOpenQuoteModal(`Inquiry based on photo: ${title}`);
                  }}
                  className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  Get a Bulk Quote for this Product / Box
                </button>
                <a
                  href={`https://wa.me/917891013141?text=${encodeURIComponent(`Hello Krishna Packaging, I saw photo "${selectedPhoto.title}" on your website and want details and pricing.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
                >
                  Ask on WhatsApp (+91 78910 13141)
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
