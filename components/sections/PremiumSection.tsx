import { Sparkles } from "lucide-react";

interface PremiumSectionProps {
  isActive: boolean;
}

export function PremiumSection({ isActive }: PremiumSectionProps) {
  return (
    <section
      className={`absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white transition-all duration-700 ${
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center py-4 sm:py-6">
        <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 text-cyan-200" />

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance">GluePets Premium</h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-50 mb-4 sm:mb-6 md:mb-8 text-balance max-w-2xl mx-auto px-2 sm:px-0">
          Próximamente: gestión de múltiples mascotas, estadísticas avanzadas y recomendaciones inteligentes
          personalizadas
        </p>

        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl flex items-center justify-center border border-white/20 mx-auto">
          <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
        </div>
      </div>
    </section>
  );
}