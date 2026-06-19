import { HeroVet } from "@/components/HeroVet";
import { B2BSection } from "@/components/sections/B2BSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { FooterSection } from "@/components/sections";
import { Header } from "@/components/Header";

export const metadata = {
    title: "Software de Gestión para Clínicas Veterinarias",
    description: "Optimiza tu clínica con GluePets Vet. Historias clínicas digitales, recetas electrónicas y conexión directa con la App de tus clientes. Moderniza tu veterinaria.",
    keywords: ["software veterinario", "historia clínica digital", "gestión veterinaria", "receta digital veterinaria", "CRM veterinarias"],
    alternates: {
        canonical: "https://gluepets.click/veterinarias",
    }
}

export default function VeterinariasPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'GluePets Vet',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://gluepets.click/veterinarias',
        description: 'Software de gestión clínica veterinaria y CRM con sincronización directa en tiempo real con la App móvil de los dueños.',
        offers: {
            '@type': 'Offer',
            price: '29.00',
            priceCurrency: 'USD',
        },
    }

    return (
        <main className="min-h-screen bg-[#070C15] text-[#E2E8F0] noise-bg selection:bg-accent/20 selection:text-accent transition-colors duration-700 font-sans overflow-x-hidden relative">
            {/* Clinical Premium Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-accent/8 to-transparent rounded-full blur-[120px] pointer-events-none z-0"></div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Navigation will be updated later to be shared/context aware */}
            <Header mode="VET" />

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10">
                <HeroVet />
                <div className="bg-[#070C15]/85 backdrop-blur-md rounded-t-[3rem] lg:rounded-t-none -mt-12 lg:mt-0 relative z-20 border-t border-[#182235] lg:border-t-0 shadow-[0_-15px_30px_rgba(0,0,0,0.4)] lg:shadow-none">
                    <B2BSection isActive={true} />
                    <FeaturesSection isActive={true} />
                    <PlansSection />
                </div>
            </div>

            <FooterSection isActive={true} />
        </main>
    );
}
