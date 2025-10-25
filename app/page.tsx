"use client"

import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { NavigationDots } from "@/components/NavigationDots";
import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  PremiumSection,
  FooterSection
} from "@/components/sections";

export default function GluePetsLanding() {
  const { currentSection, navigateToSection } = useSectionNavigation(5);

  return (
    <main className="h-screen w-screen overflow-hidden bg-slate-900 relative">
      <NavigationDots
        currentSection={currentSection}
        totalSections={5}
        onNavigateToSection={navigateToSection}
      />

      <HeroSection isActive={currentSection === 0} />
      <AboutSection isActive={currentSection === 1} />
      <FeaturesSection isActive={currentSection === 2} />
      <PremiumSection isActive={currentSection === 3} />
      <FooterSection isActive={currentSection === 4} />
    </main>
  );
}
