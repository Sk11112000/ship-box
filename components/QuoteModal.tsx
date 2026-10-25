"use client";

import { useState } from "react";
import { X, Send, CheckCircle2, Package, Sparkles, Loader2, MessageSquare, Phone } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpec?: string;
}

export default function QuoteModal({ isOpen, onClose, initialSpec }: QuoteModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    dimensions: "",
    boxSpec: initialSpec || "Custom Cardboard Box",
    qty: "1000",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          company: formData.company,
          boxSpec: formData.dimensions ? `${formData.boxSpec} (Dimensions: ${formData.dimensions})` : formData.boxSpec,
          quantity: formData.qty,
          location: "Transport Nagar, Jaipur",
        }),
      });
    } catch (err) {
      console.error("Error sending quote email:", err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Krishna Packaging,\nI would like to get a Bulk Quote for:\n• Product: ${formData.boxSpec}\n• Dimensions: ${formData.dimensions || "To be discussed"}\n• Quantity: ${formData.qty} units\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Company: ${formData.company || "N/A"}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-amber-900/10 relative overflow-hidden text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Bulk Quote Request Dispatched!</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Your bulk quote request has been emailed to <span className="font-bold text-slate-900">krishnapackagingcompany@gmail.com</span> &amp; <span className="font-bold text-slate-900">shubhamindustries124@gmail.com</span>. Our sales engineer will contact you shortly at <span className="font-bold text-amber-800">{formData.phone}</span>.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/917891013141?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                Also Chat on WhatsApp (+91 78910 13141)
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs cursor-pointer"
              >
                Done &amp; Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="flex items-center gap-2.5 text-amber-800">
              <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center font-bold shrink-0">
                <Package className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Get a Bulk Quote</h3>
                <p className="text-[11px] text-slate-500 font-medium">Krishna Packaging Company • Transport Nagar, Jaipur (Est. 1989)</p>
              </div>
            </div>

            <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-xs space-y-0.5">
              <span className="font-bold text-amber-900 block text-[10px] uppercase">Selected Product:</span>
              <p className="font-bold text-slate-800">{formData.boxSpec}</p>
              <p className="text-[10px] text-amber-700 font-semibold pt-0.5">Note: Pricing &amp; MOQ according to the size and ply requirements.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Company / Brand Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rajasthan Crafts Pvt Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Box Size / Dimensions (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. 12 x 10 x 8 inches"
                  value={formData.dimensions}
                  onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Estimated Quantity Needed</label>
              <select
                value={formData.qty}
                onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
                className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="500">500 Box Units (Trial Batch)</option>
                <option value="1000">1,000 Box Units (Standard)</option>
                <option value="5000">5,000 Box Units (Bulk Tier)</option>
                <option value="25000">25,000+ Units (Factory Supply Contract)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending Bulk Quote Request...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Get a Bulk Quote &amp; Dispatch to Factory Team
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
