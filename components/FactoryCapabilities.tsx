"use client";

import { Factory, ShieldCheck, Cpu, Leaf, BarChart3, CheckCircle } from "lucide-react";

export default function FactoryCapabilities() {
  const TESTING_LAB = [
    { title: "Bursting Strength Test (BF)", value: "16 BF - 45 BF Range", desc: "Measures paper hydraulic pressure tolerance under load." },
    { title: "Edge Crush Rating (ECT)", value: "32 ECT - 80+ ECT", desc: "Tests vertical stacking resistance of box walls." },
    { title: "Box Compression Test (BCT)", value: "Up to 500 kg Force", desc: "Ensures cartons don't collapse in warehouse stacks." },
    { title: "Moisture Content Analysis", value: "Strict 8-10% Limit", desc: "Prevents soft corrugation flutes during monsoon seasons." },
  ];

  return (
    <section id="factory-specs" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
            <Factory className="w-4 h-4 text-amber-400" /> Jaipur Manufacturing Plant & Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Precision <span className="text-amber-400">Corrugation Technology</span> & Quality Lab
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Located in Vishwakarma Industrial Area (VKI Jaipur), our 45,000 sq. ft. automated plant manufactures world-class corrugated boxes certified to international export standards.
          </p>
        </div>
        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Automated Machine Line</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              German-engineered 5-ply automated corrugators producing 50,000+ precision cut boxes daily with zero dimensional variation.
            </p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">In-House QA Testing Lab</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Every production batch is tested for ECT, Bursting Strength, and Ring Crush to guarantee zero transit damage for export shipments.
            </p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% Recyclable Kraft</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              FSC certified sustainable kraft paper sourced from top paper mills, printed with non-toxic eco-friendly water inks.
            </p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">ISO 9001:2015 Certified</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Full ISO compliance with strict manufacturing quality control, traceability, and batch certification for corporate audits.
            </p>
          </div>
        </div>

        {/* Quality Lab Grid */}
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                Laboratory Quality Standard Benchmarks
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Rigorous testing metrics applied to every batch of corrugated board manufactured at our Jaipur plant
              </p>
            </div>
            <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
              100% QA Inspection Verified
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TESTING_LAB.map((item, idx) => (
              <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/80">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">{item.title}</p>
                <p className="text-lg font-black text-white mt-1">{item.value}</p>
                <p className="text-[11px] text-slate-400 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
