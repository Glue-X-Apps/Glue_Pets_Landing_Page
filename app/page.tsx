import { Header } from "@/components/Header";
import { HeroOwner } from "@/components/HeroOwner";
import { FooterSection } from "@/components/sections";
import { B2CSection } from "@/components/sections/B2CSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata = {
  title: "GluePets | La App para el Cuidado Integral de tu Mascota",
  description: "Lleva el control de vacunas, peso y nutrición de tu mascota. Conecta con tu veterinario y recibe recordatorios inteligentes. ¡Descarga gratis!",
  keywords: ["app mascotas", "salud perros", "recordatorio vacunas", "nutrición mascotas"]
}

export default function GluePetsLanding() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'GluePets',
    operatingSystem: 'ANDROID, IOS',
    applicationCategory: 'HealthApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1024',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 noise-bg selection:bg-primary/20 selection:text-slate-800 transition-colors duration-700 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header mode="OWNER" />

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <HeroOwner />
        <div className="bg-[#FAF8F5]/80 backdrop-blur-sm rounded-t-[3rem] -mt-12 relative z-20 border-t border-slate-200/50 shadow-[0_-15px_30px_rgba(0,0,0,0.02)]">
          <B2CSection isActive={true} />
          <AboutSection isActive={true} />
          <FAQSection />
        </div>
      </div>

      <FooterSection isActive={true} />
    </main>
  );
}
