import { Card } from "@/components/ui/card";
import { Heart, Calendar, Target, TrendingUp } from "lucide-react";

interface FeaturesSectionProps {
  isActive: boolean;
}

export function FeaturesSection({ isActive }: FeaturesSectionProps) {
  return (
    <section
      className={`absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 transition-all duration-700 ${
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl h-full flex items-center py-4 sm:py-6 md:py-8 lg:py-12 landscape:max-h-[500px]:py-2 landscape:max-h-[500px]:lg:py-4">
        <div className="w-full">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 landscape:max-h-[500px]:mb-2 landscape:max-h-[500px]:sm:mb-3 landscape:max-h-[500px]:md:mb-4 landscape:max-h-[500px]:lg:mb-6">
            <span className="text-xs sm:text-sm font-semibold text-cyan-400 bg-cyan-950/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-800 inline-block mb-4">
              Características
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-balance landscape:max-h-[500px]:text-lg landscape:max-h-[500px]:sm:text-xl landscape:max-h-[500px]:md:text-2xl landscape:max-h-[500px]:lg:text-3xl landscape:max-h-[500px]:mb-1 landscape:max-h-[500px]:sm:mb-1.5 landscape:max-h-[500px]:md:mb-2">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto text-balance px-2 sm:px-0 landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm landscape:max-h-[500px]:md:text-base">
              Herramientas profesionales para el cuidado nutricional de tu mascota
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto landscape:max-h-[500px]:gap-2 landscape:max-h-[500px]:sm:gap-3 landscape:max-h-[500px]:md:gap-4">
            <Card className="group p-5 sm:p-6 bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 landscape:max-h-[500px]:p-3 landscape:max-h-[500px]:sm:p-4">
              <div className="flex items-start gap-4 landscape:max-h-[500px]:gap-2 landscape:max-h-[500px]:sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg landscape:max-h-[500px]:w-8 landscape:max-h-[500px]:h-8 landscape:max-h-[500px]:sm:w-10 landscape:max-h-[500px]:sm:h-10 landscape:max-h-[500px]:rounded-lg landscape:max-h-[500px]:sm:rounded-xl">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white landscape:max-h-[500px]:w-4 landscape:max-h-[500px]:h-4 landscape:max-h-[500px]:sm:w-5 landscape:max-h-[500px]:sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors landscape:max-h-[500px]:text-sm landscape:max-h-[500px]:sm:text-base landscape:max-h-[500px]:mb-1">
                    Perfiles completos
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm">
                    Registra múltiples mascotas con información detallada de edad, peso y raza
                  </p>
                </div>
              </div>
            </Card>

            <Card className="group p-5 sm:p-6 bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1 landscape:max-h-[500px]:p-3 landscape:max-h-[500px]:sm:p-4">
              <div className="flex items-start gap-4 landscape:max-h-[500px]:gap-2 landscape:max-h-[500px]:sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg landscape:max-h-[500px]:w-8 landscape:max-h-[500px]:h-8 landscape:max-h-[500px]:sm:w-10 landscape:max-h-[500px]:sm:h-10 landscape:max-h-[500px]:rounded-lg landscape:max-h-[500px]:sm:rounded-xl">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-white landscape:max-h-[500px]:w-4 landscape:max-h-[500px]:h-4 landscape:max-h-[500px]:sm:w-5 landscape:max-h-[500px]:sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors landscape:max-h-[500px]:text-sm landscape:max-h-[500px]:sm:text-base landscape:max-h-[500px]:mb-1">
                    Diario nutricional
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm">
                    Lleva un registro detallado de cada comida con porciones y horarios exactos
                  </p>
                </div>
              </div>
            </Card>

            <Card className="group p-5 sm:p-6 bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 landscape:max-h-[500px]:p-3 landscape:max-h-[500px]:sm:p-4">
              <div className="flex items-start gap-4 landscape:max-h-[500px]:gap-2 landscape:max-h-[500px]:sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg landscape:max-h-[500px]:w-8 landscape:max-h-[500px]:h-8 landscape:max-h-[500px]:sm:w-10 landscape:max-h-[500px]:sm:h-10 landscape:max-h-[500px]:rounded-lg landscape:max-h-[500px]:sm:rounded-xl">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white landscape:max-h-[500px]:w-4 landscape:max-h-[500px]:h-4 landscape:max-h-[500px]:sm:w-5 landscape:max-h-[500px]:sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors landscape:max-h-[500px]:text-sm landscape:max-h-[500px]:sm:text-base landscape:max-h-[500px]:mb-1">
                    Metas inteligentes
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm">
                    Objetivos personalizados basados en las necesidades específicas de tu mascota
                  </p>
                </div>
              </div>
            </Card>

            <Card className="group p-5 sm:p-6 bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1 landscape:max-h-[500px]:p-3 landscape:max-h-[500px]:sm:p-4">
              <div className="flex items-start gap-4 landscape:max-h-[500px]:gap-2 landscape:max-h-[500px]:sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg landscape:max-h-[500px]:w-8 landscape:max-h-[500px]:h-8 landscape:max-h-[500px]:sm:w-10 landscape:max-h-[500px]:sm:h-10 landscape:max-h-[500px]:rounded-lg landscape:max-h-[500px]:sm:rounded-xl">
                  <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white landscape:max-h-[500px]:w-4 landscape:max-h-[500px]:h-4 landscape:max-h-[500px]:sm:w-5 landscape:max-h-[500px]:sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors landscape:max-h-[500px]:text-sm landscape:max-h-[500px]:sm:text-base landscape:max-h-[500px]:mb-1">
                    Análisis visual
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm">
                    Gráficos interactivos que muestran el progreso y tendencias nutricionales
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}