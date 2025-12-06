import Image from "next/image";

interface HeroSectionProps {
  isActive: boolean;
  isMobile?: boolean;
  subSectionIndex?: number;
}

export function HeroSection({ isActive, isMobile, subSectionIndex = 0 }: HeroSectionProps) {
  return (
    <section
      className={`absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B1033] via-[#0f1745] to-[#0B1033] transition-all duration-700 overflow-hidden ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
    >
      {/* Fondo decorativo (opcional) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/img/wave-pattern.svg')] bg-cover bg-center mix-blend-overlay"></div>

      {/* Container principal */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center justify-center pt-4 sm:pt-6 pb-0 relative">
        <div className={`w-full h-full max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-8 items-center justify-center`}>

          {/* Part 1: Text Content */}
          <div
            className={`
              flex flex-col justify-center w-full md:h-auto text-center md:text-left space-y-6 md:col-span-5
              transition-all duration-700 ease-in-out z-20 relative
            `}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-balance leading-[1.1] tracking-tight">
              El seguimiento <br className="hidden md:block" />
              <span className="text-blue-500">nutricional</span> que tu <br className="hidden md:block" />
              mascota merece.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 text-balance font-normal max-w-lg mx-auto md:mx-0">
              Controla la alimentación de tu perro o gato con precisión profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50 shadow-lg border border-transparent"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-70">Disponible en</div>
                  <div className="text-sm font-bold font-sans">Google Play</div>
                </div>
              </a>

              <button
                disabled
                className="inline-flex items-center justify-center gap-3 bg-[#1e293b]/60 backdrop-blur-md text-white px-6 py-3 rounded-xl border border-white/10 transition-all cursor-not-allowed hover:bg-[#1e293b]/80"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">Próximamente en</div>
                  <div className="text-sm font-bold font-sans">App Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* Part 2: Visual Composition */}
          <div
            className={`
              flex justify-center md:justify-end items-center w-full md:col-span-7
              transition-all duration-700 ease-in-out relative
            `}
          >
            {/* Contenedor relativo para posicionar el suelo/plataforma */}
            <div className="relative w-full flex justify-center md:justify-end items-center group perspective-[1000px]">

              {/* --- RECURSO VISUAL: Plataforma / Suelo de Anclaje --- */}
              <div className="absolute bottom-[5%] md:bottom-[8%] left-1/2 md:left-auto md:right-[10%] -translate-x-1/2 md:translate-x-0 w-[90%] md:w-[80%] h-[60px] z-0 pointer-events-none">
                {/* 1. Sombra fuerte de contacto (base oscura) */}
                <div className="absolute bottom-2 left-0 w-full h-full bg-black/60 blur-xl rounded-[100%] transform scale-y-50"></div>

                {/* 2. Resplandor azul sutil (efecto tech) */}
                <div className="absolute bottom-4 left-[10%] w-[80%] h-[30px] bg-blue-900/30 blur-2xl rounded-[100%]"></div>
              </div>
              {/* --------------------------------------------------- */}

              {/* Imagen Principal */}
              <Image
                src="/img/hero-gluepets.png"
                alt="GluePets App Dashboard con Mascotas"
                width={1200}
                height={900}
                className="w-full max-w-[500px] md:max-w-none md:w-[125%] h-auto object-contain object-center drop-shadow-2xl z-10 transform transition-transform duration-700 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}