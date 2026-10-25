"use client";

import Image from "next/image";
import { Factory, ShieldCheck, Cpu, Leaf, BarChart3, Clock, MapPin, CheckCircle2 } from "lucide-react";

export default function FactoryCapabilities() {
  const TESTING_LAB = [
    { title: "Bursting Strength Test (BF)", value: "16 BF - 45+ BF Range", desc: "Measures paper hydraulic pressure tolerance under heavy cargo strain." },
    { title: "Edge Crush Rating (ECT)", value: "32 ECT - 80+ ECT", desc: "Tests vertical stacking resistance of multi-wall corrugated box fluting." },
    { title: "Box Compression Test (BCT)", value: "Up to 500+ kg Force", desc: "Ensures cartons do not bulge or crush in tall warehouse stacking." },
    { title: "Moisture Content Analysis", value: "Strict 8-10% Limit", desc: "Prevents soft corrugation flutes during monsoon and coastal export transit." },
  ];

  return (
    <section id="factory-specs" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
            <Factory className="w-4 h-4 text-amber-400" /> Established in 1989 • For Over 37 Years
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-amber-400">Krishna Packaging Company</span>
          </h2>
          <p className="mt-2 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            &amp; Shubham Industries • Transport Nagar, Jaipur
          </p>
        </div>

        {/* About Us Two-Column Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 bg-slate-800/80 p-7 sm:p-9 rounded-2xl border border-slate-700 space-y-4 shadow-xl">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              <strong>Established in 1989</strong>, we are a leading and trusted manufacturer of high-quality corrugated and cardboard boxes. With over three decades of rich industry experience, we have built a strong legacy of delivering durable, reliable, and cost-effective packaging solutions to a diverse range of businesses.
            </p>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Over the past 35 years, we have continuously upgraded our manufacturing processes to meet modern packaging demands. From standard shipping boxes to custom-designed packaging, we ensure that every box we produce offers maximum strength and protection for your products.
            </p>
            <p className="text-sm sm:text-base text-amber-300 font-medium leading-relaxed">
              Our core philosophy revolves around uncompromising quality, timely delivery, and complete customer satisfaction. When you choose us, you are not just buying a box; you are partnering with decades of packaging expertise.
            </p>

            {/* Transport Nagar Factory Distinction Callout */}
            <div className="pt-4 border-t border-slate-700/80 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Transport Nagar Plant:</strong> Nagtali Transport Nagar, Delhi Road, Jaipur - 302004 (For over 37 years, our Transport Nagar factory serves clients across Jaipur & all India).
                </span>
              </div>
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Factory Operating Hours: 9:00 AM to 8:00 PM (Monday - Saturday)</span>
              </div>
            </div>
          </div>

          {/* Right Plant Machinery Image Feature */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-950 group">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/krishna_plant_machinery.png"
                alt="Krishna Packaging Company Automated Corrugation Machine Line in Transport Nagar Jaipur"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>
            <div className="p-4 bg-slate-900 border-t border-slate-800">
              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-amber-400" />
                Automated In-House Corrugation Machine Line
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Producing 3-ply to 13-ply multi-wall boards with continuous high-volume output at our Transport Nagar factory.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">High-Capacity Corrugators</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Continuous multi-flute corrugation line producing 50,000+ precision-cut boxes daily with zero dimensional variation.
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
              Sustainable virgin and semi-virgin kraft paper sourced from top paper mills, printed with non-toxic eco-friendly water inks.
            </p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Decades of Proven Trust</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Serving Rajasthan&apos;s leading handicraft, textile, marble, gems, e-commerce, and industrial exporters continuously since 1989.
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
                Rigorous testing metrics applied to every batch of corrugated board manufactured at our Transport Nagar Jaipur plant
              </p>
            </div>
            <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
              100% Quality Inspection Verified
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
