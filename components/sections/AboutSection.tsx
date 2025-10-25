import { Heart, Calendar, Target, TrendingUp } from "lucide-react";

interface AboutSectionProps {
  isActive: boolean;
}

export function AboutSection({ isActive }: AboutSectionProps) {
  return (
    <section
      className={`absolute inset-0 w-full h-full flex items-center justify-center bg-slate-800 transition-all duration-700 ${
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl h-full flex items-center py-4 sm:py-6 md:py-8 landscape:max-h-[500px]:py-2">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center w-full landscape:max-h-[500px]:gap-2 landscape:max-h-[500px]:md:gap-4 landscape:max-h-[500px]:lg:gap-6">
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 landscape:max-h-[500px]:space-y-2 landscape:max-h-[500px]:sm:space-y-3 landscape:max-h-[500px]:md:space-y-4">
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-semibold text-blue-400 bg-blue-950/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-800">
                Sobre GluePets
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight landscape:max-h-[500px]:text-lg landscape:max-h-[500px]:sm:text-xl landscape:max-h-[500px]:md:text-2xl landscape:max-h-[500px]:lg:text-3xl">
              Nutrición inteligente para tus mejores amigos
            </h2>

            <div className="space-y-2.5 sm:space-y-3 md:space-y-4 landscape:max-h-[500px]:space-y-1.5 landscape:max-h-[500px]:sm:space-y-2 landscape:max-h-[500px]:md:space-y-2.5">
              <div className="flex gap-3 items-start landscape:max-h-[500px]:gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 landscape:max-h-[500px]:w-6 landscape:max-h-[500px]:h-6 landscape:max-h-[500px]:sm:w-7 landscape:max-h-[500px]:sm:h-7 landscape:max-h-[500px]:mt-0.5">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 landscape:max-h-[500px]:w-3 landscape:max-h-[500px]:h-3 landscape:max-h-[500px]:sm:w-4 landscape:max-h-[500px]:sm:h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 landscape:max-h-[500px]:text-sm landscape:max-h-[500px]:sm:text-base landscape:max-h-[500px]:mb-0.5">Registro diario simplificado</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm">
                    Anota comidas y porciones en segundos con nuestra interfaz intuitiva
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start landscape:max-h-[500px]:gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 landscape:max-h-[500px]:w-6 landscape:max-h-[500px]:h-6 landscape:max-h-[500px]:sm:w-7 landscape:max-h-[500px]:sm:h-7 landscape:max-h-[500px]:mt-0.5">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 landscape:max-h-[500px]:w-3 landscape:max-h-[500px]:h-3 landscape:max-h-[500px]:sm:w-4 landscape:max-h-[500px]:sm:h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 landscape:max-h-[500px]:text-sm landscape:max-h-[500px]:sm:text-base landscape:max-h-[500px]:mb-0.5">Metas personalizadas</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm">
                    Establece objetivos según edad, peso y nivel de actividad
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start landscape:max-h-[500px]:gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 landscape:max-h-[500px]:w-6 landscape:max-h-[500px]:h-6 landscape:max-h-[500px]:sm:w-7 landscape:max-h-[500px]:sm:h-7 landscape:max-h-[500px]:mt-0.5">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 landscape:max-h-[500px]:w-3 landscape:max-h-[500px]:h-3 landscape:max-h-[500px]:sm:w-4 landscape:max-h-[500px]:sm:h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 landscape:max-h-[500px]:text-sm landscape:max-h-[500px]:sm:text-base landscape:max-h-[500px]:mb-0.5">Control nutricional preciso</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm">
                    Monitorea calorías, proteínas y macronutrientes en tiempo real
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end landscape:max-h-[500px]:mt-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl landscape:max-h-[500px]:-inset-2"></div>
              <div className="relative aspect-[9/16] w-56 sm:w-64 md:w-72 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl shadow-2xl border-4 sm:border-8 border-slate-600 overflow-hidden landscape:max-h-[500px]:w-40 landscape:max-h-[500px]:sm:w-48 landscape:max-h-[500px]:md:w-56 landscape:max-h-[500px]:border-2 landscape:max-h-[500px]:sm:border-4 landscape:max-h-[500px]:rounded-2xl">
                <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900/50 flex items-center justify-center">
                  <div className="w-20 h-1 bg-slate-700 rounded-full"></div>
                </div>

                <div className="p-4 sm:p-6 pt-12 sm:pt-14 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-4 sm:p-6 mb-4 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white/80 text-xs">Hoy</p>
                        <p className="text-white font-bold text-sm sm:text-base">1,250 / 1,500 kcal</p>
                      </div>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2" style={{ width: "83%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 flex-1">
                    <div className="bg-slate-700/50 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white font-medium text-xs sm:text-sm">Desayuno</p>
                          <p className="text-slate-400 text-xs">8:00 AM</p>
                        </div>
                        <p className="text-blue-400 font-bold text-sm sm:text-base">350 kcal</p>
                      </div>
                    </div>

                    <div className="bg-slate-700/50 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white font-medium text-xs sm:text-sm">Almuerzo</p>
                          <p className="text-slate-400 text-xs">2:00 PM</p>
                        </div>
                        <p className="text-cyan-400 font-bold text-sm sm:text-base">550 kcal</p>
                      </div>
                    </div>

                    <div className="bg-slate-700/50 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white font-medium text-xs sm:text-sm">Cena</p>
                          <p className="text-slate-400 text-xs">7:00 PM</p>
                        </div>
                        <p className="text-blue-400 font-bold text-sm sm:text-base">350 kcal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}