import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { HeroOwner } from "@/components/HeroOwner";
import { FooterSection } from "@/components/sections";
import { B2CSection } from "@/components/sections/B2CSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "La App para el Cuidado Integral de tu Mascota",
  description: "Lleva el control de vacunas, peso y nutrición científica de tu mascota. Conéctate con tu veterinario y recibe recordatorios inteligentes. ¡Usa la App Web o descarga gratis!",
  keywords: ["app mascotas", "salud perros", "recordatorio vacunas", "nutrición mascotas", "diario medico perro", "diario gato", "app veterinaria Chile", "WSAVA"],
  alternates: {
    canonical: "https://gluepets.cl",
  },
  openGraph: {
    title: "GluePets — La App para el Cuidado Integral de tu Mascota",
    description: "Control de alimentación, peso, vacunas, diario médico y conexión en tiempo real con tu clínica veterinaria.",
    url: "https://gluepets.cl",
    siteName: "GluePets",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GluePets — La App para el Cuidado Integral de tu Mascota",
    description: "Control de alimentación, peso, vacunas y conexión veterinaria en tiempo real.",
  }
}

export default function GluePetsLanding() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GluePets',
    url: 'https://gluepets.cl',
    description: 'Plataforma para el cuidado integral y nutrición de mascotas con sincronización clínica veterinaria.',
    inLanguage: 'es-CL',
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GluePets Inc.',
    url: 'https://gluepets.cl',
    logo: 'https://gluepets.cl/img/GluePetsLogo.png',
    sameAs: [
      'https://www.instagram.com/gluepets',
      'https://www.tiktok.com/@gluepetsapp',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contacto@gluepets.cl',
      contactType: 'customer support',
      availableLanguage: ['Spanish'],
    },
  }

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GluePets',
    operatingSystem: 'iOS, Android, Web (PWA)',
    applicationCategory: 'HealthApplication',
    url: 'https://app.gluepets.cl',
    description: 'Lleva el control de vacunas, peso y nutrición de tu mascota. Conecta con tu veterinario y recibe recordatorios inteligentes.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CLP',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué es la Nutrición Científica?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Utilizamos estándares veterinarios (WSAVA) para calcular las calorías exactas que tu mascota necesita, basándonos en su peso, edad, nivel de actividad y estado reproductivo. No es solo comida, es salud preventiva.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Qué significan BMR y RER?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BMR (Tasa Metabólica Basal) y RER (Requerimiento Energético en Reposo) son fórmulas científicas que determinan la energía mínima para que el cuerpo funcione. GluePets usa estas fórmulas para asegurar que tu mascota no coma ni más ni menos de lo necesario.'
        }
      },
      {
        '@type': 'Question',
        name: '¿La App sustituye al veterinario?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nunca. GluePets es una herramienta que te conecta mejor con él. Tu veterinario puede ver los datos que registras y tomar mejores decisiones clínicas, pero el diagnóstico siempre es responsabilidad del profesional.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Es gratis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, el acceso a la app web y las funciones principales de diario y salud son gratuitas para todos los dueños.'
        }
      }
    ]
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 noise-bg selection:bg-primary/20 selection:text-slate-800 transition-colors duration-700 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
