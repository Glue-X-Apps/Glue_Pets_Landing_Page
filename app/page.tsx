"use client"

import { useState } from "react";
import { ViewToggle } from "@/components/ViewToggle";
import { HeroOwner } from "@/components/HeroOwner";
import { HeroVet } from "@/components/HeroVet";
import { FooterSection } from "@/components/sections";

// Simplified placeholders for now, will be replaced by full implementations as we progress
// or we can reuse existing sections but adapted for specific views
import { B2CSection } from "@/components/sections/B2CSection";
import { B2BSection } from "@/components/sections/B2BSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PlansSection } from "@/components/sections/PlansSection";

export default function GluePetsLanding() {
  const [mode, setMode] = useState<'OWNER' | 'VET'>('OWNER');

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary transition-colors duration-700 font-sans">

      <ViewToggle mode={mode} onToggle={setMode} />

      <div className="transition-opacity duration-500 ease-in-out">
        {mode === 'OWNER' ? (
          <div key="owner" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <HeroOwner />
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-t-[3rem] -mt-12 relative z-20 border-t border-white/5">
              <B2CSection isActive={true} />
              <FAQSection />
              <AboutSection isActive={true} />
            </div>
            {/* Additional OWNER sections will go here */}
          </div>
        ) : (
          <div key="vet" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <HeroVet />
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-t-[3rem] -mt-12 relative z-20 border-t border-white/5">
              <B2BSection isActive={true} />
              <FeaturesSection isActive={true} />
              <PlansSection />
            </div>
          </div>
        )}
      </div>

      <FooterSection
        isActive={true}
        onSwitchView={(view) => {
          setMode(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </main>
  );
}
