"use client"

import React, { useRef, useEffect, useState } from "react";
import { Heart, Utensils, Syringe, Scale } from "lucide-react";

export function AboutSection({ isActive }: { isActive: boolean }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      video.currentTime = 2;
    };

    const handleEnded = () => {
      video.currentTime = 2;
      video.play().catch(err => console.log("Video playback error:", err));
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= 1) {
      video.currentTime = 2;
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const points = [
    { icon: Utensils, title: "Diario de Comidas", desc: "Registra alimentos para cargarlos luego en tus Comida #1, Comida #2..." },
    { icon: Scale, title: "Mascotas Personalizadas", desc: "Elige entre avatares SVG oficiales o sube la foto real de tu mascota." },
    { icon: Syringe, title: "Recordatorios Automáticos", desc: "Establece eventos repetitivos (vacunas anuales) y recibe alertas en tu celular." },
    { icon: Heart, title: "Ficha Médica Libre", desc: "Registra desde síntomas de salud hasta observaciones cotidianas sobre el comportamiento y rutinas." }
  ]

  return (
    <section
      id="about"
      className={`min-h-screen w-full flex items-center justify-center py-20 transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'} relative overflow-hidden`}
    >
      {/* Video Background with Readability Mask */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/media/A_beautiful_cat_walking_gracef.mp4"
          muted
          playsInline
          autoPlay
          preload="auto"
          onCanPlay={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 pointer-events-none ${isVideoLoaded ? 'opacity-90' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/96 lg:via-[#FAF8F5]/92 to-[#FAF8F5]/70 lg:to-[#FAF8F5]/35 z-10 pointer-events-none"></div>
        
        {/* Subtle loader overlay */}
        <div className={`absolute inset-0 flex items-center justify-center bg-[#FAF8F5] transition-opacity duration-700 ${isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="w-6 h-6 rounded-full border-2 border-primary/20 border-t-primary animate-spin"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Column Left: Text & Features (Readability Mask makes this extremely crisp) */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 leading-tight">
                Diseñado para el <span className="text-gradient italic font-normal">bienestar integral</span>
              </h2>
              <p className="text-xl text-slate-700 font-sans leading-relaxed">
                No somos solo una App de seguimiento. Somos el puente entre el amor por tu mascota y la ciencia de su nutrición.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((p, i) => (
                <div key={i} className="space-y-2 hover:bg-white/30 hover:shadow-xs border border-transparent hover:border-slate-200/20 p-4 rounded-xl transition-all -ml-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column Right: Open visual space for the video background */}
          <div className="hidden lg:block"></div>

        </div>
      </div>

      {/* Floating glass badge positioned absolutely flush in the bottom-right corner to cover the watermark */}
      <div className="absolute bottom-0 right-0 z-20 glass-light px-10 py-12 sm:py-16 rounded-tl-[3.5rem] border-t border-l border-white/40 shadow-2xl min-w-[320px] sm:min-w-[380px] backdrop-blur-md bg-white/85">
        <div className="flex justify-between items-center gap-8">
          <div className="space-y-1 text-left">
            <p className="text-primary text-xs sm:text-sm font-bold uppercase tracking-widest">Nutrición</p>
            <p className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight leading-none">100% Óptima</p>
          </div>
          <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary animate-pulse flex-shrink-0" fill="currentColor" />
        </div>
      </div>
    </section>
  )
}