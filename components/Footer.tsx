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
                <span className="text-2xl font-black text-white tracking-tight">
                  SHIP<span className="text-amber-500">BOX</span>
                </span>
                <span className="ml-2 bg-amber-500/20 text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-500/30">
                  JAIPUR
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed font-normal max-w-sm">
              Jaipur&apos;s leading corrugated cardboard box manufacturing facility. Specializing in heavy-duty 3-ply, 5-ply, 7-ply shipping cartons, die-cut packaging & custom flexo printing for Rajasthan exporters.
            </p>

            <div className="flex items-center gap-3 text-slate-300 font-semibold pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 9001:2015 Certified • FSC Recyclable Paper</span>
            </div>
          </div>

          {/* Col 2: Box Types */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs">Cardboard Box Types</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">RSC Shipping Cartons</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">Die-Cut Self Locking Mailers</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">Partitioned Fragile Cartons</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">7-Ply Heavy Duty Master Boxes</button></li>
              <li><button onClick={() => scrollTo("products")} className="hover:text-amber-400 transition-colors">Corrugated Rolls & Corner Guards</button></li>
            </ul>
          </div>

          {/* Col 3: Jaipur Industries */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs">Jaipur Exporter Solutions</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Blue Pottery & Marble Crafts</button></li>
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Sanganeri Textile Cartons</button></li>
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Johri Bazaar Jewellery Mailers</button></li>
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">VKI Heavy Machinery Crates</button></li>
              <li><button onClick={() => scrollTo("jaipur-industries")} className="hover:text-amber-400 transition-colors">Jaipur D2C & Amazon Sellers</button></li>
            </ul>
          </div>

          {/* Col 4: Factory Address */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-xs">Jaipur Factory Unit</h4>
            <p className="text-slate-300 leading-relaxed">
              Plot 142-145, Road No. 9,<br />
              Vishwakarma Industrial Area (VKI),<br />
              Jaipur, Rajasthan 302013, India
            </p>
            <p className="text-slate-300 pt-1">
              Phone: <a href="tel:+919829077123" className="text-amber-400 font-bold hover:underline">+91 98290 77123</a>
            </p>
            <p className="text-slate-300">
              Email: <a href="mailto:info@shipboxjaipur.com" className="text-amber-400 hover:underline">info@shipboxjaipur.com</a>
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} ShipBox Packaging Co. (Jaipur, Rajasthan). All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3 h-3 text-amber-500 fill-amber-500" /> for Jaipur Industry & Exporters
          </p>
        </div>
      </div>
    </footer>
  );
}
