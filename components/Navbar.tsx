"use client";

import { useState } from "react";
import { Package, Phone, Mail, MapPin, Menu, X, ChevronRight, Calculator, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenCalculator?: () => void;
  onOpenQuoteModal?: (boxType?: string) => void;
}

export default function Navbar({ onOpenCalculator, onOpenQuoteModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-900/10 shadow-sm">
      {/* Top Jaipur Factory Announcement & Quick Contacts Bar */}
      <div className="bg-[#1E293B] text-amber-100 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-semibold text-[11px] border border-amber-500/30">
              <MapPin className="w-3 h-3 text-amber-400" /> Nagtali, Transport Nagar, Delhi Road, Jaipur
            </span>
            <span className="hidden sm:inline-block text-slate-400">|</span>
            <span className="hidden sm:inline flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Est. 1989 • 35+ Years Packaging Excellence
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-200">
            <a href="https://wa.me/917891013141" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-amber-400 transition-colors font-semibold">
              <Phone className="w-3 h-3 text-amber-400" /> +91 78910 13141
            </a>
            <span className="text-slate-600">|</span>
            <a href="mailto:krishnapackagingcompany@gmail.com" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Mail className="w-3 h-3 text-amber-400" /> krishnapackagingcompany@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center text-white shadow-md shadow-amber-600/20 border border-amber-400/30">
              <Package className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-900 font-sans">
                  KRISHNA<span className="text-amber-600"> PACKAGING</span>
                </span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-1.5 py-0.5 rounded tracking-wider uppercase">
                  EST. 1989
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Krishna Packaging Co. & Shubham Industries • Jaipur
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <button
              onClick={() => scrollTo("hero")}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("products")}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Box Types
            </button>
            <button
              onClick={() => scrollTo("jaipur-industries")}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Jaipur Exporters
            </button>
            <button
              onClick={() => scrollTo("calculator")}
              className="hover:text-amber-600 transition-colors flex items-center gap-1 text-amber-700 font-bold bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-amber-600" />
              Box Cost Estimator
            </button>
            <button
              onClick={() => scrollTo("factory-specs")}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Factory Specs
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Jaipur Factory Location
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenCalculator) onOpenCalculator();
                else scrollTo("calculator");
              }}
              className="text-xs font-bold text-slate-800 hover:text-amber-700 bg-slate-100 hover:bg-amber-100 px-4 py-2.5 rounded-lg transition-all border border-slate-200"
            >
              Calculate Box Cost
            </button>
            <button
              onClick={() => {
                if (onOpenQuoteModal) onOpenQuoteModal("Custom Corrugated Shipping Box");
                else scrollTo("contact");
              }}
              className="text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 px-4 py-2.5 rounded-lg transition-all shadow-md shadow-amber-600/20 flex items-center gap-1.5"
            >
              Request Quote <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 rounded-lg bg-slate-100 hover:bg-amber-50 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
            <button
              onClick={() => scrollTo("hero")}
              className="text-left px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-700"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("products")}
              className="text-left px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-700"
            >
              Corrugated Box Types
            </button>
            <button
              onClick={() => scrollTo("jaipur-industries")}
              className="text-left px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-700"
            >
              Jaipur Industries & Exporters
            </button>
            <button
              onClick={() => scrollTo("calculator")}
              className="text-left px-3 py-2 rounded-md bg-amber-50 text-amber-800 flex items-center gap-2 font-bold"
            >
              <Calculator className="w-4 h-4 text-amber-600" />
              Box Cost & Weight Estimator
            </button>
            <button
              onClick={() => scrollTo("factory-specs")}
              className="text-left px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-700"
            >
              Factory Infrastructure & Specs
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-left px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-700"
            >
              Contact Factory (VKI Jaipur)
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
                else scrollTo("contact");
              }}
              className="w-full text-center text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 py-3 rounded-lg shadow-md"
            >
              Request Wholesale Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
