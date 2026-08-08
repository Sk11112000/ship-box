"use client";

import { Package, MapPin, Phone, Mail, ShieldCheck, Heart } from "lucide-react";

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
              <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-white shadow-md">
                <Package className="w-5 h-5" />
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
              Krishna Packaging Co. & Shubham Industries. Established in 1989, we are Jaipur&apos;s trusted manufacturer of 3-ply to 13-ply corrugated boxes, custom die-cut packaging, offset printed boxes, binding cloth reinforcement & packaging materials.
            </p>

            <div className="flex items-center gap-3 text-slate-300 font-semibold pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Est. 1989 • 35+ Years Packaging Legacy</span>
            </div>
          </div>

          {/* Col 2: Box Types */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs">Products & Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">3-Ply to 13-Ply Boxes</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">Custom Die-Cut Boxes</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">Offset Printed Boxes</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">Boxes with Binding Cloth</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">Corrugated Rolls & Sheets</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">High-Strength Kraft Paper</button></li>
            </ul>
          </div>

          {/* Col 3: Jaipur Industries */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs">Jaipur Exporter Solutions</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Blue Pottery & Marble Crafts</button></li>
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Sanganeri Textile Cartons</button></li>
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Heavy Machinery Packaging</button></li>
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Export Sea Freight Boxes</button></li>
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Jaipur D2C & Bulk Cartons</button></li>
            </ul>
          </div>

          {/* Col 4: Factory Address */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs">Factory & Office</h4>
            <p className="text-slate-300 leading-relaxed">
              <strong>Factory:</strong> B-10, Opp. RAC Gate, Nagtali Transport Nagar, Delhi Road, Jaipur - 302004<br />
              <strong>Reg. Office:</strong> S-24-25, Janta Colony, Jaipur - 302004
            </p>
            <p className="text-slate-300 pt-1">
              Orders/WhatsApp: <a href="https://wa.me/917891013141" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-bold hover:underline">+91 78910 13141</a>
            </p>
            <p className="text-slate-300">
              Email: <a href="mailto:krishnapackagingcompany@gmail.com" className="text-amber-400 hover:underline">krishnapackagingcompany@gmail.com</a>
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p>© 1989 - {new Date().getFullYear()} Krishna Packaging Co. & Shubham Industries (Jaipur, Rajasthan). All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Manufactured with <Heart className="w-3 h-3 text-amber-500 fill-amber-500" /> for Jaipur & Global Exporters
          </p>
        </div>
      </div>
    </footer>
  );
}
