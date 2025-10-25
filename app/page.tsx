"use client"
import { Card } from "@/components/ui/card"
import { Heart, Calendar, Target, TrendingUp, Sparkles } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function GluePetsLanding() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const totalSections = 5
  const touchStartY = useRef(0)
  const lastScrollTime = useRef(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      const now = Date.now()
      if (isTransitioning || now - lastScrollTime.current < 800) return

      lastScrollTime.current = now

      if (e.deltaY > 30 && currentSection < totalSections - 1) {
        setIsTransitioning(true)
        setCurrentSection((prev) => prev + 1)
        setTimeout(() => setIsTransitioning(false), 800)
      } else if (e.deltaY < -30 && currentSection > 0) {
        setIsTransitioning(true)
        setCurrentSection((prev) => prev - 1)
        setTimeout(() => setIsTransitioning(false), 800)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const diff = touchStartY.current - touchEndY

      const now = Date.now()
      if (isTransitioning || now - lastScrollTime.current < 800) return

      lastScrollTime.current = now

      if (diff > 50 && currentSection < totalSections - 1) {
        setIsTransitioning(true)
        setCurrentSection((prev) => prev + 1)
        setTimeout(() => setIsTransitioning(false), 800)
      } else if (diff < -50 && currentSection > 0) {
        setIsTransitioning(true)
        setCurrentSection((prev) => prev - 1)
        setTimeout(() => setIsTransitioning(false), 800)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && currentSection < totalSections - 1) {
        setIsTransitioning(true)
        setCurrentSection((prev) => prev + 1)
        setTimeout(() => setIsTransitioning(false), 800)
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        setIsTransitioning(true)
        setCurrentSection((prev) => prev - 1)
        setTimeout(() => setIsTransitioning(false), 800)
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchend", handleTouchEnd, { passive: true })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentSection, isTransitioning])

  const navigateToSection = (index: number) => {
    if (index !== currentSection && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentSection(index)
      setTimeout(() => setIsTransitioning(false), 800)
    }
  }

  return (
    <main className="h-screen w-screen overflow-hidden bg-slate-900 relative">
      <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {[...Array(totalSections)].map((_, i) => (
          <button
            key={i}
            onClick={() => navigateToSection(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === i ? "bg-blue-500 scale-125" : "bg-slate-600 hover:bg-slate-500"
            }`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </nav>

      <section
        className={`absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 transition-all duration-700 ${
          currentSection === 0 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-6xl mx-auto">
            {/* Left column - Content */}
            <div className="text-center md:text-left space-y-6 md:space-y-8">
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl">
                  <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12">
                    <path d="M50,20 Q30,40 30,60 Q30,80 50,90 Q70,80 70,60 Q70,40 50,20 Z" fill="white" />
                    <ellipse cx="45" cy="55" rx="3" ry="4" fill="#3b82f6" />
                    <ellipse cx="55" cy="55" rx="3" ry="4" fill="#3b82f6" />
                  </svg>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
                El seguimiento nutricional que tu mascota merece
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-blue-100 text-balance">
                Controla la alimentación de tu perro o gato con precisión
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight opacity-90">Disponible en</div>
                    <div className="text-base font-semibold leading-tight">Google Play</div>
                  </div>
                </a>

                <button
                  disabled
                  className="inline-flex items-center justify-center gap-2 bg-black/40 text-white/60 px-6 py-3 rounded-xl cursor-not-allowed shadow-lg"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight">Próximamente en</div>
                    <div className="text-base font-semibold leading-tight">App Store</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex justify-center md:justify-end mt-8 md:mt-0">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-3xl blur-3xl animate-pulse"></div>

                {/* Phone mockup */}
                <div className="relative aspect-[9/19.5] w-64 sm:w-72 md:w-80 bg-slate-950 rounded-[2.5rem] shadow-2xl border-[6px] border-slate-800 overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-950 rounded-b-3xl z-10"></div>

                  {/* App screenshot placeholder - User can replace this */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                        <svg viewBox="0 0 100 100" className="w-12 h-12">
                          <path d="M50,20 Q30,40 30,60 Q30,80 50,90 Q70,80 70,60 Q70,40 50,20 Z" fill="white" />
                          <ellipse cx="45" cy="55" rx="3" ry="4" fill="#3b82f6" />
                          <ellipse cx="55" cy="55" rx="3" ry="4" fill="#3b82f6" />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <div className="text-white font-bold text-xl">GluePets</div>
                        <div className="text-slate-400 text-sm">
                          Coloca aquí la captura
                          <br />
                          de tu app
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="space-y-3 pt-4">
                        <div className="h-12 bg-slate-800/50 rounded-xl backdrop-blur-sm"></div>
                        <div className="h-12 bg-slate-800/50 rounded-xl backdrop-blur-sm"></div>
                        <div className="h-12 bg-slate-800/50 rounded-xl backdrop-blur-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`absolute inset-0 w-full h-full flex items-center justify-center bg-slate-800 transition-all duration-700 ${
          currentSection === 1 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-semibold text-blue-400 bg-blue-950/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-800">
                  Sobre GluePets
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance leading-tight">
                Nutrición inteligente para tus mejores amigos
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Registro diario simplificado</h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      Anota comidas y porciones en segundos con nuestra interfaz intuitiva
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Metas personalizadas</h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      Establece objetivos según edad, peso y nivel de actividad
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Control nutricional preciso</h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      Monitorea calorías, proteínas y macronutrientes en tiempo real
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative aspect-[9/16] w-56 sm:w-64 md:w-72 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl shadow-2xl border-4 sm:border-8 border-slate-600 overflow-hidden">
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

      <section
        className={`absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 transition-all duration-700 ${
          currentSection === 2 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl h-full flex items-center py-12 sm:py-16">
          <div className="w-full">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-xs sm:text-sm font-semibold text-cyan-400 bg-cyan-950/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-800 inline-block mb-4">
                Características
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 text-balance">
                Todo lo que necesitas en un solo lugar
              </h2>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto text-balance">
                Herramientas profesionales para el cuidado nutricional de tu mascota
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <Card className="group p-5 sm:p-6 bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      Perfiles completos
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      Registra múltiples mascotas con información detallada de edad, peso y raza
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group p-5 sm:p-6 bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      Diario nutricional
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      Lleva un registro detallado de cada comida con porciones y horarios exactos
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group p-5 sm:p-6 bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      Metas inteligentes
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      Objetivos personalizados basados en las necesidades específicas de tu mascota
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group p-5 sm:p-6 bg-gradient-to-br from-slate-800/90 to-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      Análisis visual
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      Gráficos interactivos que muestran el progreso y tendencias nutricionales
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white transition-all duration-700 ${
          currentSection === 3 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
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

      <section
        className={`absolute inset-0 w-full h-full flex items-center justify-center bg-slate-950 text-white transition-all duration-700 ${
          currentSection === 4 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-xl mx-auto mb-6">
            <svg viewBox="0 0 100 100" className="w-12 h-12">
              <path d="M50,20 Q30,40 30,60 Q30,80 50,90 Q70,80 70,60 Q70,40 50,20 Z" fill="white" />
              <ellipse cx="45" cy="55" rx="3" ry="4" fill="#3b82f6" />
              <ellipse cx="55" cy="55" rx="3" ry="4" fill="#3b82f6" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold mb-8">GluePets</h3>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="#"
              className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.766-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.306.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42 2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <p className="text-slate-400 mb-2">© 2025 GluePets</p>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
              Política de privacidad
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
