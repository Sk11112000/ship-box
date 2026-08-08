"use client";

import { Star, Quote, Award, Building2, MapPin } from "lucide-react";

export default function Testimonials() {
  const REVIEWS = [
    {
      name: "Rajesh Sharma",
      role: "Managing Director",
      company: "Royal Blue Pottery & Crafts",
      location: "Sanganer, Jaipur",
      content: "ShipBox Jaipur customized 5-ply partitioned cartons for our export pottery. Zero transit breakage in over 40 sea containers shipped to USA and EU. Highly dependable team!",
      rating: 5,
    },
    {
      name: "Priya Khandelwal",
      role: "Logistics Head",
      company: "Jaipur Loom & Textile Exporters",
      location: "Sitapura Industrial Area, Jaipur",
      content: "Their anti-moisture kraft boxes protected our printed block fabric through the heavy monsoon shipping season. Outstanding strength, exact dimensions, and super prompt delivery.",
      rating: 5,
    },
    {
      name: "Vikramjit Singh",
      role: "Operations Manager",
      company: "VKI Auto Parts Mfg Pvt Ltd",
      location: "VKI Area Road No. 9, Jaipur",
      content: "Switched from expensive wooden crates to ShipBox's 7-ply heavy-duty cardboard boxes. Saved 30% on transport freight costs and eliminated ISPM wood fumigation headaches.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#F5EFDF] relative overflow-hidden border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-amber-700" /> Client Reviews & Industry Trust
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by <span className="text-amber-700">1,200+ Jaipur Exporters</span> & Manufacturers
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Here is what business owners across Vishwakarma, Sitapura, Mansarovar, and Heritage Jaipur say about ShipBox Packaging.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl border border-amber-900/10 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amber-200" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm shadow">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-[11px] text-amber-800 font-semibold">{rev.role} • {rev.company}</p>
                  <p className="text-[10px] text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" /> {rev.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Banner */}
        <div className="mt-14 bg-white p-6 rounded-2xl border border-amber-900/10 shadow-md flex flex-wrap justify-around items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <Building2 className="w-8 h-8 text-amber-600" />
            <div className="text-left">
              <p className="text-xs font-black text-slate-900 uppercase">ISO 9001:2015</p>
              <p className="text-[11px] text-slate-500">Certified Quality Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-amber-600" />
            <div className="text-left">
              <p className="text-xs font-black text-slate-900 uppercase">FSC Certified Kraft</p>
              <p className="text-[11px] text-slate-500">100% Recyclable Paper Pulp</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-8 h-8 text-amber-600" />
            <div className="text-left">
              <p className="text-xs font-black text-slate-900 uppercase">VKI Jaipur Industrial Unit</p>
              <p className="text-[11px] text-slate-500">Road No. 9, Vishwakarma Area</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
