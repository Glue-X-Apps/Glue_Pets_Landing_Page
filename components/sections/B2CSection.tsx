"use client"

import { useState } from "react"
import { Smartphone, Utensils, QrCode } from "lucide-react"
import { AppVisualizer } from "../visuals/AppVisualizer"
import { DownloadModal } from "../modals/DownloadModal"

interface B2CSectionProps {
  isActive: boolean;
}

export function B2CSection({ isActive }: B2CSectionProps) {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  return (
    <>
      <section
        id="b2c"
        className={`relative min-h-screen py-20 flex items-center transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="order-2 lg:order-1 relative">
              {/* Phone Mockup - Now using Real Code Visualizer */}
              <div className="relative mx-auto lg:ml-auto w-full max-w-[320px] lg:max-w-none flex justify-center perspective-1000">
                <div className="transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-700 ease-out hover:scale-105">
                  <AppVisualizer />
                </div>
              </div>
              {/* Decorative elements behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-primary/20 rounded-full blur-[80px] -z-10"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Lo que necesitas. <br />
                <span className="text-primary">Cuando lo necesitas.</span>
              </h2>

              <p className="text-lg text-slate-400">
                Lleva el control total de la salud de tu mascota. Desde su alimentación diaria hasta sus visitas al veterinario.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Historial Clínico Compartido", desc: "Tu veterinario actualiza vacunas y diagnósticos directo en tu App.", icon: Smartphone },
                  { title: "Nutrición Personalizada", desc: "Calcula las porciones exactas para un peso saludable.", icon: Utensils },
                  { title: "Conexión Veterinaria", desc: "Toda la información médica sincronizada automáticamente.", icon: QrCode },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
                >
                  Descargar App
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
    </>
  );
}
