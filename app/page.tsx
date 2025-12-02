"use client"

import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { useMobileLikeLandscape } from "@/hooks/useMobileLikeLandscape";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavigationDots } from "@/components/NavigationDots";
import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  PremiumSection,
  FooterSection
} from "@/components/sections";

export default function GluePetsLanding() {
  const isMobileLikeLandscape = useMobileLikeLandscape();
  const isMobile = useIsMobile();

  // On mobile, we split the Hero section AND About section into 2 parts each.
  // Hero: 2 parts
  // About: 2 parts
  // Features: 1 part
  // Premium: 1 part
  // Footer: 1 part
  // Total = 7 sections on mobile.
  // On desktop, we have 5 sections.
  const totalSections = isMobile ? 7 : 5;

  // We enable snap scroll (section navigation) on all devices, 
  // unless it's that specific "mobile-like landscape" case where height is extremely small 
  // and we might want native scroll (though user seemed to imply they want the snap logic).
  // Let's stick to enabling it generally, but maybe disable for landscape if it's too tricky?
  // User said "no te pedí que quitaras la logica de scroll", implying they LIKE the snap scroll.
  // So let's enable it.
  const { currentSection, navigateToSection } = useSectionNavigation(totalSections, !isMobileLikeLandscape);

  return (
    <main
      className={`group w-screen bg-slate-900 relative ${isMobileLikeLandscape
          ? "min-h-screen overflow-y-auto"
          : "h-[100dvh] overflow-hidden"
        }`}
      data-mlh={isMobileLikeLandscape ? "true" : "false"}
    >
      {!isMobileLikeLandscape && (
        <NavigationDots
          currentSection={currentSection}
          totalSections={totalSections}
          onNavigateToSection={navigateToSection}
        />
      )}

      <HeroSection
        isActive={currentSection === 0 || (isMobile && currentSection === 1)}
        isMobile={isMobile}
        subSectionIndex={isMobile && currentSection === 1 ? 1 : 0}
      />
      <AboutSection
        isActive={currentSection === (isMobile ? 2 : 1) || (isMobile && currentSection === 3)}
        isMobile={isMobile}
        subSectionIndex={isMobile && currentSection === 3 ? 1 : 0}
      />
      <FeaturesSection isActive={currentSection === (isMobile ? 4 : 2)} isMobile={isMobile} />
      <PremiumSection isActive={currentSection === (isMobile ? 5 : 3)} isMobile={isMobile} />
      <FooterSection isActive={currentSection === (isMobile ? 6 : 4)} isMobile={isMobile} />
    </main>
  );
}
