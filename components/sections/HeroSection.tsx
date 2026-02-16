import Image from "next/image";
import { GOOGLE_PLAY_URL } from "@/lib/constants";

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
              La conexión <br className="hidden md:block" />
              <span className="text-gradient">inteligente</span> entre <br className="hidden md:block" />
              mascotas y salud.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 text-balance font-normal max-w-lg mx-auto md:mx-0">
              GluePets une a los dueños con sus veterinarias mediante tecnología de seguimiento nutricional y médico avanzada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="#b2c"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-premium hover:-translate-y-1 font-bold group"
              >
                Soy Dueño
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="#b2b"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl border border-white/20 transition-all hover:bg-white/20 font-bold group"
              >
                Soy Veterinaria
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
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