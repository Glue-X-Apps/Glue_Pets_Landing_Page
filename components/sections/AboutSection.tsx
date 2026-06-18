"use client"

import React, { useRef, useEffect } from "react";
import { Heart, Utensils, Syringe, Scale } from "lucide-react";

export function AboutSection({ isActive }: { isActive: boolean }) {
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
          className="w-full h-full object-cover opacity-90 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/96 lg:via-[#FAF8F5]/92 to-[#FAF8F5]/70 lg:to-[#FAF8F5]/35 z-10 pointer-events-none"></div>
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

          {/* Column Right: Open visual space for the video background with a single floating glass card */}
          <div className="flex justify-center lg:justify-end">
            <div className="glass-light p-6 rounded-3xl border border-slate-200/50 shadow-xl max-w-[280px] animate-float-medium backdrop-blur-md">
              <div className="flex justify-between items-center gap-6">
                <div className="space-y-1">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">Nutrición</p>
                  <p className="text-2xl font-bold text-slate-800">100% Óptima</p>
                </div>
                <Heart className="w-8 h-8 text-primary animate-pulse" fill="currentColor" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}