"use client";

import { useState, useId } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Factory, MessageSquare } from "lucide-react";

interface ContactSectionProps {
  prefilledBoxSpec?: string;
}

export default function ContactSection({ prefilledBoxSpec }: ContactSectionProps) {
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const companyId = useId();
  const locationId = useId();
  const boxTypeId = useId();
  const quantityId = useId();
  const detailsId = useId();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    location: "Jaipur",
    boxType: prefilledBoxSpec || "Custom Corrugated Box",
    quantity: "1000",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
            <Factory className="w-4 h-4 text-amber-400" /> Jaipur Factory Office & Sales
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect With Our <span className="text-amber-400">Jaipur Packaging Team</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Visit our corrugation plant in Vishwakarma (VKI Area) Jaipur or request an instant wholesale quote below. Factory samples dispatched within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Contact Info & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/90 p-7 rounded-2xl border border-slate-700 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white pb-3 border-b border-slate-700 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" /> Factory Location & Address
              </h3>

              <div className="space-y-5 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white uppercase tracking-wider">Manufacturing Unit</h4>
                    <p className="text-slate-300 leading-relaxed mt-0.5">
                      Plot No. 142-145, Road No. 9,<br />
                      Vishwakarma Industrial Area (VKI Area),<br />
                      Jaipur, Rajasthan 302013, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white uppercase tracking-wider">Direct Factory Phones</h4>
                    <p className="text-slate-300 mt-0.5">
                      Sales Desk: <a href="tel:+911412334890" className="text-amber-300 hover:underline font-bold">+91 141 233 4890</a><br />
                      WhatsApp / Mobile: <a href="tel:+919829077123" className="text-amber-300 hover:underline font-bold">+91 98290 77123</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white uppercase tracking-wider">Email Inquiry</h4>
                    <p className="text-slate-300 mt-0.5">
                      <a href="mailto:sales@shipboxjaipur.com" className="text-amber-300 hover:underline">sales@shipboxjaipur.com</a><br />
                      <a href="mailto:info@shipboxjaipur.com" className="text-amber-300 hover:underline">info@shipboxjaipur.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white uppercase tracking-wider">Factory Operating Hours</h4>
                    <p className="text-slate-300 mt-0.5">
                      Monday - Saturday: 8:30 AM - 7:30 PM<br />
                      <span className="text-amber-400 font-semibold">Factory Visits Welcome by Appointment</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Transport Directions */}
            <div className="bg-amber-500/10 border border-amber-500/30 p-5 rounded-2xl text-xs text-amber-200 space-y-1.5">
              <h4 className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Factory className="w-4 h-4" /> Transport & Delivery Reach
              </h4>
              <p className="leading-relaxed text-slate-300">
                Direct fleet delivery to VKIA, Sitapura, Mansarovar, Bagru, Jhotwara, Transport Nagar, & Jaipur Railway Station / Airport cargo terminals within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-8 rounded-2xl shadow-2xl border border-amber-900/10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Quote Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our Jaipur factory sales engineer will contact you at <span className="font-bold text-amber-800">{formData.phone}</span> within 2 business hours with formal wholesale rates & sample options.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-amber-600" />
                    Request Wholesale Quotation & Sample Kit
                  </h3>
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded uppercase">
                    Free Jaipur Sample
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={nameId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      required
                      placeholder="e.g. Ramesh Agarwal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor={phoneId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone / Mobile Number *
                    </label>
                    <input
                      id={phoneId}
                      type="tel"
                      required
                      placeholder="+91 98290 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={emailId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor={companyId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      id={companyId}
                      type="text"
                      placeholder="e.g. Jaipur Crafts Exporters"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={boxTypeId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Box Type / Specification
                    </label>
                    <input
                      id={boxTypeId}
                      type="text"
                      value={formData.boxType}
                      onChange={(e) => setFormData({ ...formData, boxType: e.target.value })}
                      className="w-full p-2.5 text-xs font-bold text-amber-900 bg-amber-50/60 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor={quantityId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Estimated Order Quantity
                    </label>
                    <select
                      id={quantityId}
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    >
                      <option value="500">500 units (Sample / Trial)</option>
                      <option value="1000">1,000 units (Standard Batch)</option>
                      <option value="5000">5,000 units (Wholesale Tier)</option>
                      <option value="10000">10,000+ units (Monthly Factory Supply)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor={detailsId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Custom Dimensions / Print Details / Specific Requirements
                  </label>
                  <textarea
                    id={detailsId}
                    rows={3}
                    placeholder="Mention custom L x W x H dimensions, printing logo color requirements, or fragile product details..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-extrabold text-sm shadow-lg shadow-amber-600/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry to Jaipur Factory Sales
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
