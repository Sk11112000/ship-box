"use client";

import { useState, useId } from "react";
import { Calculator, CheckCircle2, ChevronRight, Info, ShieldCheck, Sparkles, Layers, Sliders, ArrowRight } from "lucide-react";

interface BoxCalculatorProps {
  onOpenQuoteModal: (details: string) => void;
}

export default function BoxCalculator({ onOpenQuoteModal }: BoxCalculatorProps) {
  const boxTypeId = useId();
  const plyFluteId = useId();
  const paperGradeId = useId();
  const customPrintingId = useId();
  const waterproofCoatingId = useId();
  const lengthId = useId();
  const widthId = useId();
  const heightId = useId();

  // State
  const [boxType, setBoxType] = useState<string>("rsc");
  const [ply, setPly] = useState<string>("3ply");
  const [length, setLength] = useState<number>(12);
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(8);
  const [paperGrade, setPaperGrade] = useState<string>("180gsm");
  const [customPrinting, setCustomPrinting] = useState<string>("1color");
  const [waterproofCoating, setWaterproofCoating] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1000);

  // Calculation Logic
  // Calculate Surface Area in Sq Inches:
  // For RSC: 2 * (L + W) * (W + H) approx board sheet calculation
  const sheetWidthInches = (2 * (length + width)) + 2; // + 2 for joint tab
  const sheetHeightInches = width + height;
  const areaSqFt = (sheetWidthInches * sheetHeightInches) / 144;

  // Base rate per Sq Ft of corrugated board in INR based on Ply & Paper Grade
  let baseRatePerSqFt = 18; // default 3ply 140gsm
  if (ply === "3ply") baseRatePerSqFt = 16;
  else if (ply === "5ply") baseRatePerSqFt = 26;
  else if (ply === "7ply") baseRatePerSqFt = 42;
  else if (ply === "9ply") baseRatePerSqFt = 58;
  else if (ply === "11ply") baseRatePerSqFt = 74;
  else if (ply === "13ply") baseRatePerSqFt = 92;

  // Paper grade adjustment
  if (paperGrade === "180gsm") baseRatePerSqFt *= 1.15;
  if (paperGrade === "250gsm") baseRatePerSqFt *= 1.35;

  // Box type factor
  if (boxType === "diecut") baseRatePerSqFt *= 1.25;
  if (boxType === "partitioned") baseRatePerSqFt *= 1.4;

  // Printing cost per box
  let printingCost = 0;
  if (customPrinting === "1color") printingCost = 1.8;
  if (customPrinting === "multicolor") printingCost = 3.5;

  // Coating
  let coatingCost = waterproofCoating ? 2.2 : 0;

  // Quantity Discount Factor
  let quantityMultiplier = 1.25; // 250 units base multiplier
  if (quantity >= 500) quantityMultiplier = 1.15;
  if (quantity >= 1000) quantityMultiplier = 1.0;
  if (quantity >= 2500) quantityMultiplier = 0.92;
  if (quantity >= 5000) quantityMultiplier = 0.85;
  if (quantity >= 10000) quantityMultiplier = 0.78;

  const rawUnitPrice = (areaSqFt * baseRatePerSqFt + printingCost + coatingCost) * quantityMultiplier;
  const estimatedUnitPrice = Math.max(8.5, Math.round(rawUnitPrice * 100) / 100);
  const totalBatchCost = Math.round(estimatedUnitPrice * quantity);

  // Strength & Spec Estimation
  let bfRating = "18 BF";
  let loadCapacity = "12 - 15 kg";
  let ectRating = "32 ECT";

  if (ply === "3ply") {
    if (paperGrade === "140gsm") { bfRating = "16 - 18 BF"; loadCapacity = "10 - 15 kg"; ectRating = "32 ECT"; }
    else if (paperGrade === "180gsm") { bfRating = "20 - 22 BF"; loadCapacity = "15 - 22 kg"; ectRating = "38 ECT"; }
    else { bfRating = "24 - 28 BF"; loadCapacity = "20 - 28 kg"; ectRating = "44 ECT"; }
  } else if (ply === "5ply") {
    if (paperGrade === "140gsm") { bfRating = "22 - 24 BF"; loadCapacity = "25 - 35 kg"; ectRating = "48 ECT"; }
    else if (paperGrade === "180gsm") { bfRating = "26 - 30 BF"; loadCapacity = "35 - 50 kg"; ectRating = "55 ECT"; }
    else { bfRating = "32 - 36 BF"; loadCapacity = "50 - 65 kg"; ectRating = "65 ECT"; }
  } else if (ply === "7ply") {
    bfRating = "36 - 42 BF"; loadCapacity = "70 - 120 kg"; ectRating = "80+ ECT";
  } else if (ply === "9ply") {
    bfRating = "45 - 52 BF"; loadCapacity = "120 - 250 kg"; ectRating = "100+ ECT";
  } else if (ply === "11ply") {
    bfRating = "52 - 60 BF"; loadCapacity = "250 - 450 kg"; ectRating = "120+ ECT";
  } else if (ply === "13ply") {
    bfRating = "60+ Industrial BF"; loadCapacity = "450 - 800+ kg (Ultra Heavy Industrial)"; ectRating = "150+ ECT";
  }

  const handleRequestQuoteWithSpecs = () => {
    const boxTypeName = boxType === "rsc" ? "Regular Slotted Carton (RSC)" : boxType === "diecut" ? "Die-Cut Mailer Box" : boxType === "partitioned" ? "Partitioned Fragile Box" : "Heavy Duty Master Carton";
    const specsString = `${boxTypeName} (${length}" x ${width}" x ${height}"), ${ply.toUpperCase()}, ${paperGrade.toUpperCase()}, Qty: ${quantity} units, Est. Unit Price: ₹${estimatedUnitPrice}`;
    onOpenQuoteModal(specsString);
  };

  return (
    <section id="calculator" className="py-20 bg-[#F5EFDF] relative overflow-hidden border-y border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-200/60 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-amber-700" /> Live Factory Price Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your <span className="text-amber-700">Cardboard Box Cost</span> & Weight Capacity
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Get instant wholesale estimates for custom corrugated boxes manufactured in our Jaipur factory. Select dimensions, fluting, paper GSM & order volume below.
          </p>
        </div>

        {/* Estimator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls / Inputs Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-amber-900/10 space-y-6">
            
            {/* Box Type Selector */}
            <div>
              <label htmlFor={boxTypeId} className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-amber-600" /> Select Cardboard Box Style
              </label>
              <div id={boxTypeId} className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "rsc", title: "RSC Shipping", desc: "Standard slotted" },
                  { id: "diecut", title: "Die-Cut Mailer", desc: "Self locking" },
                  { id: "partitioned", title: "Fragile Craft", desc: "With grid cells" },
                  { id: "master", title: "Master Cartons", desc: "Bulk transport" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBoxType(item.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      boxType === item.id
                        ? "border-amber-600 bg-amber-50/80 text-amber-950 font-bold ring-2 ring-amber-500/20"
                        : "border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-700 font-medium"
                    }`}
                  >
                    <p className="text-xs font-bold">{item.title}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Corrugation Ply & Flute */}
            <div>
              <label htmlFor={plyFluteId} className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-600" /> Corrugation Flute & Wall Ply
              </label>
              <div id={plyFluteId} className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "3ply", label: "3-Ply Single Wall", detail: "E / B Flute (Light - Med)" },
                  { id: "5ply", label: "5-Ply Double Wall", detail: "BC Flute (High Strength)" },
                  { id: "7ply", label: "7-Ply Heavy Duty", detail: "Triple Wall Export" },
                  { id: "9ply", label: "9-Ply Quad Wall", detail: "Multi-Wall Heavy" },
                  { id: "11ply", label: "11-Ply Extra Strong", detail: "Industrial Multi-Wall" },
                  { id: "13ply", label: "13-Ply Ultra Heavy", detail: "Max Strength Crate" },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPly(p.id)}
                    className={`p-3 rounded-xl text-center border transition-all cursor-pointer ${
                      ply === p.id
                        ? "border-amber-600 bg-amber-50 text-amber-950 font-bold ring-2 ring-amber-500/20"
                        : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium"
                    }`}
                  >
                    <p className="text-xs font-bold">{p.label}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{p.detail}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensions (Inches) Sliders & Direct Inputs */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  Box Dimensions (Length × Width × Height in Inches)
                </label>
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  {length}&Prime; L &times; {width}&Prime; W &times; {height}&Prime; H
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor={lengthId} className="text-[11px] font-bold text-slate-600 block mb-1">Length (L)</label>
                  <input
                    id={lengthId}
                    type="number"
                    min={4}
                    max={48}
                    value={length}
                    onChange={(e) => setLength(Math.max(4, Math.min(48, Number(e.target.value) || 4)))}
                    className="w-full text-sm font-bold text-slate-900 border border-slate-300 rounded-lg p-2 text-center focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={widthId} className="text-[11px] font-bold text-slate-600 block mb-1">Width (W)</label>
                  <input
                    id={widthId}
                    type="number"
                    min={4}
                    max={36}
                    value={width}
                    onChange={(e) => setWidth(Math.max(4, Math.min(36, Number(e.target.value) || 4)))}
                    className="w-full text-sm font-bold text-slate-900 border border-slate-300 rounded-lg p-2 text-center focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={heightId} className="text-[11px] font-bold text-slate-600 block mb-1">Height (H)</label>
                  <input
                    id={heightId}
                    type="number"
                    min={2}
                    max={36}
                    value={height}
                    onChange={(e) => setHeight(Math.max(2, Math.min(36, Number(e.target.value) || 2)))}
                    className="w-full text-sm font-bold text-slate-900 border border-slate-300 rounded-lg p-2 text-center focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Kraft Paper GSM & Customization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label htmlFor={paperGradeId} className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Kraft Paper Grade & GSM
                </label>
                <select
                  id={paperGradeId}
                  value={paperGrade}
                  onChange={(e) => setPaperGrade(e.target.value)}
                  className="w-full text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 focus:ring-2 focus:ring-amber-500"
                >
                  <option value="140gsm">140 GSM Kraft Paper (18 BF Standard)</option>
                  <option value="180gsm">180 GSM Kraft Paper (22 BF High Tensile)</option>
                  <option value="250gsm">250 GSM Virgin Kraft (30+ BF Export)</option>
                </select>
              </div>

              <div>
                <label htmlFor={customPrintingId} className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Custom Brand Logo Printing
                </label>
                <select
                  id={customPrintingId}
                  value={customPrinting}
                  onChange={(e) => setCustomPrinting(e.target.value)}
                  className="w-full text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 focus:ring-2 focus:ring-amber-500"
                >
                  <option value="none">Plain Kraft (No Printing)</option>
                  <option value="1color">1-Color Flexo Logo Print (+₹1.80/box)</option>
                  <option value="multicolor">Multi-Color Brand Print (+₹3.50/box)</option>
                </select>
              </div>
            </div>

            {/* Moisture Coating & Quantity Slider */}
            <div className="pt-2 border-t border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor={waterproofCoatingId} className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                  <input
                    id={waterproofCoatingId}
                    type="checkbox"
                    checked={waterproofCoating}
                    onChange={(e) => setWaterproofCoating(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                  />
                  Add Moisture Barrier / Waterproof Coating (+₹2.20/box)
                </label>
                {waterproofCoating && (
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Monsoon Protected
                  </span>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                    Order Quantity (Units)
                  </label>
                  <span className="text-sm font-black text-amber-700 bg-amber-100 px-3 py-1 rounded-lg">
                    {quantity.toLocaleString("en-IN")} Units
                  </span>
                </div>
                <input
                  type="range"
                  min={250}
                  max={25000}
                  step={250}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  aria-label="Order Quantity Slider"
                  className="w-full accent-amber-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
                  <span>250 (MOQ)</span>
                  <span>1,000 (Popular)</span>
                  <span>5,000</span>
                  <span>25,000+ (Wholesale)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Result Card Side */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-900 text-white p-7 rounded-2xl shadow-2xl border border-amber-500/30 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Live Factory Estimate
                </span>
                <span className="text-[11px] bg-slate-800 text-slate-300 font-semibold px-2.5 py-1 rounded-full border border-slate-700">
                  VKI Jaipur Dispatch
                </span>
              </div>

              {/* Price Display */}
              <div className="py-5 text-center">
                <p className="text-xs font-semibold text-slate-400">Estimated Wholesale Unit Price</p>
                <div className="flex items-baseline justify-center gap-1.5 mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-amber-400">
                    ₹{estimatedUnitPrice.toFixed(2)}
                  </span>
                  <span className="text-xs font-bold text-slate-400">/ box</span>
                </div>
                <p className="text-xs text-amber-200/80 font-medium mt-1">
                  Total Order Value ({quantity.toLocaleString("en-IN")} units): <span className="font-bold text-white">₹{totalBatchCost.toLocaleString("en-IN")}</span>
                </p>
              </div>

              {/* Specification Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2 pb-4 text-xs">
                <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Bursting Strength (BF)</p>
                  <p className="text-sm font-black text-white mt-0.5">{bfRating}</p>
                </div>
                <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Edge Crush (ECT)</p>
                  <p className="text-sm font-black text-white mt-0.5">{ectRating}</p>
                </div>
                <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 col-span-2">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Max Safe Load Weight</p>
                  <p className="text-sm font-black text-amber-300 mt-0.5">{loadCapacity}</p>
                </div>
              </div>

              {/* Order Benefits */}
              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Box Sample Dispatch in Jaipur within 24 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>GST Invoice Available (18% GST Applicable)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom Die Cut & Print Plate Setup Discount</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleRequestQuoteWithSpecs}
                className="w-full mt-6 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-sm shadow-xl shadow-amber-600/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>Lock Estimate & Request Factory Sample</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Note box */}
            <div className="bg-amber-100/70 border border-amber-300/80 p-4 rounded-xl flex items-start gap-3 text-xs text-amber-900 font-medium">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p>
                Need custom sizes or bulk rate contracts for 50,000+ monthly boxes? Our Jaipur packaging engineers provide free technical box design consultation!
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
