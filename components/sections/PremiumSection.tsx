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
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <Sparkles className="w-16 h-16 mx-auto mb-6 text-cyan-200" />

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">GluePets Premium</h2>

        <p className="text-xl md:text-2xl text-blue-50 mb-8 text-balance max-w-2xl mx-auto">
          Próximamente: gestión de múltiples mascotas, estadísticas avanzadas y recomendaciones inteligentes
          personalizadas
        </p>

        <div className="w-48 h-48 md:w-56 md:h-56 bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center border border-white/20 mx-auto">
          <Sparkles className="w-20 h-20 text-white" />
        </div>
      </div>
    </section>
  );
}