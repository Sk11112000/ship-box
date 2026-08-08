"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import BoxCalculator from "@/components/BoxCalculator";
import FactoryCapabilities from "@/components/FactoryCapabilities";
import JaipurSpecialty from "@/components/JaipurSpecialty";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedBoxSpec, setSelectedBoxSpec] = useState<string>("3-Ply Custom Corrugated Box");

  const handleOpenQuoteModal = (boxSpec?: string) => {
    if (boxSpec) {
      setSelectedBoxSpec(boxSpec);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleOpenCalculator = () => {
    const el = document.getElementById("box-calculator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      <Navbar 
        onOpenCalculator={handleOpenCalculator}
        onOpenQuoteModal={handleOpenQuoteModal}
      />
      <Hero 
        onOpenCalculator={handleOpenCalculator}
        onOpenQuoteModal={handleOpenQuoteModal}
      />
      <ProductsSection 
        onOpenQuoteModal={handleOpenQuoteModal}
      />
      <BoxCalculator 
        onOpenQuoteModal={handleOpenQuoteModal}
      />
      <FactoryCapabilities />
      <JaipurSpecialty 
        onOpenQuoteModal={handleOpenQuoteModal}
      />
      <Testimonials />
      <ContactSection 
        prefilledBoxSpec={selectedBoxSpec}
      />
      <Footer />

      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialSpec={selectedBoxSpec}
      />
    </main>
  );
}
