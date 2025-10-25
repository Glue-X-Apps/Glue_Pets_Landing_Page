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
  );
}