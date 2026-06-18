"use client"

import { useState } from "react"
import { Smartphone, Utensils, QrCode } from "lucide-react"
import { AppVisualizer } from "../visuals/AppVisualizer"
import { DownloadModal } from "../modals/DownloadModal"
import { Hover3DContainer } from "../visuals/Hover3DContainer"

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
              <div className="relative mx-auto lg:ml-auto w-full max-w-[320px] lg:max-w-none flex justify-center">
                <div className="relative p-2.5 rounded-[2.8rem] border border-slate-200/50 bg-[#FAF8F5]/80 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur-md">
                  <AppVisualizer />
                </div>
              </div>
              {/* Decorative elements behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-primary/10 rounded-full blur-[80px] -z-10"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold font-serif text-slate-900 leading-tight">
                Lo que necesitas. <br />
                <span className="text-primary italic font-normal">Cuando lo necesitas.</span>
              </h2>

              <p className="text-lg text-slate-600 font-sans leading-relaxed">
                Lleva el control total de la salud de tu mascota. Desde su alimentación diaria hasta sus visitas al veterinario.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Diario de Eventos Moldeable", desc: "Registra desde visitas al veterinario hasta notas diarias (administración de medicamentos, síntomas o rutinas de cuidado). Un historial totalmente flexible a tu gusto.", icon: Smartphone },
                  { title: "Diario de Comidas & Alimentos", desc: "Registra alimentos para cargarlos en tus comidas diarias (Comida #1, Comida #2), calculando calorías bajo estándares científicos.", icon: Utensils },
                  { title: "Eventos Recurrentes & Alertas", desc: "Agenda eventos como vacunas anuales; la app creará automáticamente el siguiente recordatorio y te notificará el día clave.", icon: QrCode },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white/60 hover:shadow-sm border border-transparent hover:border-slate-200/40 transition-all group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-slate-800 font-bold text-lg">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
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
