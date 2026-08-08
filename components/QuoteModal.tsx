"use client";

import { useState } from "react";
import { X, Send, CheckCircle2, Package, Sparkles } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpec?: string;
}

export default function QuoteModal({ isOpen, onClose, initialSpec }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    boxSpec: initialSpec || "Custom Cardboard Box",
    qty: "1000",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-amber-900/10 relative overflow-hidden text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Quote Request Submitted!</h3>
            <p className="text-xs text-slate-600">
              Our Jaipur factory representative will call you shortly at <span className="font-bold text-amber-800">{formData.phone}</span> with wholesale price sheets and sample options.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-amber-600 text-white font-bold text-xs"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-amber-800">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center font-bold">
                <Package className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Request Factory Quotation</h3>
                <p className="text-[11px] text-slate-500">Krishna Packaging Co. & Shubham Industries • Jaipur (Est. 1989)</p>
              </div>
            </div>

            <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs">
              <span className="font-bold text-amber-900 block text-[10px] uppercase">Selected Specification:</span>
              <p className="font-bold text-slate-800 mt-0.5">{formData.boxSpec}</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Anil Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone / WhatsApp Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 98290 XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Company Name</label>
              <input
                type="text"
                placeholder="e.g. Rajasthan Crafts Pvt Ltd"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Quantity Needed</label>
              <select
                value={formData.qty}
                onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
                className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="500">500 Box Units</option>
                <option value="1000">1,000 Box Units</option>
                <option value="5000">5,000 Box Units</option>
                <option value="25000">25,000+ Wholesale Supply</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" />
              Send Quote Request to Jaipur Office
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
