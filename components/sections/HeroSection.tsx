interface HeroSectionProps {
  isActive: boolean;
}

export function HeroSection({ isActive }: HeroSectionProps) {
  return (
    <section
      className={`absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 transition-all duration-700 ${
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center py-4 sm:py-6 md:py-8 landscape:max-h-[500px]:py-2">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center w-full max-w-6xl mx-auto landscape:max-h-[500px]:gap-2 landscape:max-h-[500px]:max-w-4xl">
          {/* Left column - Content */}
          <div className="text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 landscape:max-h-[500px]:space-y-2">
            <div className="flex justify-center md:justify-start">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl">
                <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12">
                  <path d="M50,20 Q30,40 30,60 Q30,80 50,90 Q70,80 70,60 Q70,40 50,20 Z" fill="white" />
                  <ellipse cx="45" cy="55" rx="3" ry="4" fill="#3b82f6" />
                  <ellipse cx="55" cy="55" rx="3" ry="4" fill="#3b82f6" />
                </svg>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-balance leading-tight landscape:max-h-[500px]:text-lg landscape:max-h-[500px]:sm:text-xl landscape:max-h-[500px]:md:text-2xl landscape:max-h-[500px]:lg:text-3xl landscape:max-h-[500px]:xl:text-4xl">
              El seguimiento nutricional que tu mascota merece
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 text-balance px-2 sm:px-0 landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm landscape:max-h-[500px]:md:text-base landscape:max-h-[500px]:lg:text-lg">
              Controla la alimentación de tu perro o gato con precisión
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start px-2 sm:px-0 landscape:max-h-[500px]:gap-1 landscape:max-h-[500px]:sm:gap-2">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base md:text-lg landscape:max-h-[500px]:px-3 landscape:max-h-[500px]:py-2 landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                                <div className="text-left">
                  <div className="text-xs sm:text-sm md:text-base leading-tight opacity-90 landscape:max-h-[500px]:text-[10px] landscape:max-h-[500px]:sm:text-xs landscape:max-h-[500px]:md:text-sm">Disponible en</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold leading-tight landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm landscape:max-h-[500px]:md:text-base">Google Play</div>
                </div>
              </a>

                            <button
                disabled
                className="inline-flex items-center justify-center gap-2 bg-black/40 text-white/60 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl cursor-not-allowed shadow-lg text-sm sm:text-base md:text-lg landscape:max-h-[500px]:px-3 landscape:max-h-[500px]:py-2 landscape:max-h-[500px]:text-xs landscape:max-h-[500px]:sm:text-sm"
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

          <div className="flex justify-center md:justify-end mt-4 sm:mt-6 md:mt-0 order-1 md:order-2 landscape:max-h-[500px]:mt-2">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 rounded-3xl blur-3xl animate-pulse landscape:max-h-[500px]:-inset-2"></div>

              {/* Phone mockup */}
              <div className="relative aspect-[9/19.5] w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 bg-slate-950 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-[3px] sm:border-[4px] md:border-[6px] border-slate-800 overflow-hidden landscape:max-h-[500px]:w-32 landscape:max-h-[500px]:sm:w-40 landscape:max-h-[500px]:md:w-48 landscape:max-h-[500px]:border-[2px] landscape:max-h-[500px]:sm:border-[3px] landscape:max-h-[500px]:rounded-[1rem] landscape:max-h-[500px]:sm:rounded-[1.5rem]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-950 rounded-b-3xl z-10"></div>

                {/* App screenshot placeholder - User can replace this */}
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4 sm:p-6 md:p-8 landscape:max-h-[500px]:p-2 landscape:max-h-[500px]:sm:p-3 landscape:max-h-[500px]:md:p-4">
                  <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 landscape:max-h-[500px]:space-y-1 landscape:max-h-[500px]:sm:space-y-2">
                    <div className="w-12 h-12 sm:w-16 md:w-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-xl landscape:max-h-[500px]:w-8 landscape:max-h-[500px]:h-8 landscape:max-h-[500px]:sm:w-10 landscape:max-h-[500px]:sm:h-10 landscape:max-h-[500px]:md:w-12 landscape:max-h-[500px]:md:h-12 landscape:max-h-[500px]:rounded-xl landscape:max-h-[500px]:sm:rounded-2xl">
                      <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 md:w-12 landscape:max-h-[500px]:w-6 landscape:max-h-[500px]:h-6 landscape:max-h-[500px]:sm:w-8 landscape:max-h-[500px]:md:w-10">
                        <path d="M50,20 Q30,40 30,60 Q30,80 50,90 Q70,80 70,60 Q70,40 50,20 Z" fill="white" />
                        <ellipse cx="45" cy="55" rx="3" ry="4" fill="#3b82f6" />
                        <ellipse cx="55" cy="55" rx="3" ry="4" fill="#3b82f6" />
                      </svg>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-white font-bold text-base sm:text-lg md:text-xl landscape:max-h-[500px]:text-sm landscape:max-h-[500px]:sm:text-base landscape:max-h-[500px]:md:text-lg">GluePets</div>
                      <div className="text-slate-400 text-xs sm:text-sm landscape:max-h-[500px]:text-[10px] landscape:max-h-[500px]:sm:text-xs">
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
  );
}