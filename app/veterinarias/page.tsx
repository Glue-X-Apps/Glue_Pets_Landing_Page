import { HeroVet } from "@/components/HeroVet";
import { B2BSection } from "@/components/sections/B2BSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { FooterSection } from "@/components/sections";
import { ViewToggle } from "@/components/ViewToggle";

export const metadata = {
    title: "GluePets Vet | Software de Gestión para Clínicas Veterinarias",
    description: "Optimiza tu clínica con GluePets. Historias clínicas digitales, recetas electrónicas y conexión directa con la App de tus clientes. Moderniza tu veterinaria.",
    keywords: ["software veterinario", "historia clínica digital", "gestión veterinaria", "receta digital veterinaria"]
}

export default function VeterinariasPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'GluePets Vet',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '29',
            priceCurrency: 'USD',
        },
    }

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary transition-colors duration-700 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Navigation will be updated later to be shared/context aware */}
            <ViewToggle mode="VET" />

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <HeroVet />
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-t-[3rem] -mt-12 relative z-20 border-t border-white/5">
                    <B2BSection isActive={true} />
                    <FeaturesSection isActive={true} />
                    <PlansSection />
                </div>
            </div>

            <FooterSection isActive={true} />
        </main>
    );
}
