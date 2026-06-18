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
      className={`min-h-screen w-full flex items-center justify-center py-20 transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="glass-light p-6 rounded-[2.5rem] relative overflow-hidden group border border-slate-200/60 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
              <div className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-3xl border border-primary/20 backdrop-blur-sm">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-primary text-sm font-bold uppercase tracking-widest">Estado Nutricional</p>
                      <p className="text-3xl font-bold text-slate-800">Óptimo</p>
                    </div>
                    <Heart className="w-10 h-10 text-primary animate-pulse" fill="currentColor" />
                  </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] border border-slate-200/60 shadow-inner bg-slate-900 group-hover:scale-[1.01] transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent z-10 pointer-events-none"></div>
                  <video
                    ref={videoRef}
                    src="/media/A_beautiful_cat_walking_gracef.mp4"
                    muted
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-bold text-slate-800 border border-slate-200/50 shadow-sm z-20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    Monitoreo Diario
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 leading-tight">
                Diseñado para el <span className="text-gradient italic font-normal">bienestar integral</span>
              </h2>
              <p className="text-xl text-slate-600 font-sans leading-relaxed">
                No somos solo una App de seguimiento. Somos el puente entre el amor por tu mascota y la ciencia de su nutrición.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((p, i) => (
                <div key={i} className="space-y-2 hover:bg-white/60 hover:shadow-sm border border-transparent hover:border-slate-200/40 p-4 rounded-xl transition-all -ml-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800">{p.title}</h3>
                  <p className="text-slate-500 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}