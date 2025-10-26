import { Sparkles } from "lucide-react";

interface PremiumSectionProps {
  isActive: boolean;
}

export function PremiumSection({ isActive }: PremiumSectionProps) {
  return (
    <section
      className={`absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white transition-all duration-700 landscape:max-h-[500px]:overflow-y-auto landscape:max-h-[500px]:justify-start landscape:max-h-[500px]:pt-3 landscape:max-h-[500px]:pb-4 group-data-[mlh=true]:overflow-y-auto group-data-[mlh=true]:justify-start group-data-[mlh=true]:pt-3 group-data-[mlh=true]:pb-4 ${
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center py-4 sm:py-6 landscape:max-h-[500px]:py-2">
        <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 text-cyan-200 landscape:max-h-[500px]:w-8 landscape:max-h-[500px]:h-8 landscape:max-h-[500px]:sm:w-10 landscape:max-h-[500px]:sm:h-10 landscape:max-h-[500px]:md:w-12 landscape:max-h-[500px]:md:h-12 landscape:max-h-[500px]:mb-2 landscape:max-h-[500px]:sm:mb-3 landscape:max-h-[500px]:md:mb-4" />

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance landscape:max-h-[500px]:text-lg landscape:max-h-[500px]:sm:text-xl landscape:max-h-[500px]:md:text-2xl landscape:max-h-[500px]:lg:text-3xl landscape:max-h-[500px]:mb-1 landscape:max-h-[500px]:sm:mb-2 landscape:max-h-[500px]:md:mb-3">GluePets Premium</h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-50 mb-4 sm:mb-6 md:mb-8 text-balance max-w-2xl mx-auto px-2 sm:px-0 landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm landscape:max-h-[500px]:md:text-base landscape:max-h-[500px]:lg:text-lg landscape:max-h-[500px]:xl:text-xl landscape:max-h-[500px]:mb-2 landscape:max-h-[500px]:sm:mb-3 landscape:max-h-[500px]:md:mb-4">
          Próximamente: gestión de múltiples mascotas, estadísticas avanzadas y recomendaciones inteligentes
          personalizadas
        </p>

        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl flex items-center justify-center border border-white/20 mx-auto landscape:max-h-[500px]:w-24 landscape:max-h-[500px]:h-24 landscape:max-h-[500px]:sm:w-28 landscape:max-h-[500px]:sm:h-28 landscape:max-h-[500px]:md:w-32 landscape:max-h-[500px]:md:h-32 landscape:max-h-[500px]:lg:w-36 landscape:max-h-[500px]:lg:h-36 landscape:max-h-[500px]:xl:w-40 landscape:max-h-[500px]:xl:h-40 landscape:max-h-[500px]:rounded-xl landscape:max-h-[500px]:sm:rounded-2xl">
          <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white landscape:max-h-[500px]:w-8 landscape:max-h-[500px]:h-8 landscape:max-h-[500px]:sm:w-10 landscape:max-h-[500px]:sm:h-10 landscape:max-h-[500px]:md:w-12 landscape:max-h-[500px]:md:h-12 landscape:max-h-[500px]:lg:w-14 landscape:max-h-[500px]:lg:h-14" />
        </div>
      </div>
    </section>
  );
}