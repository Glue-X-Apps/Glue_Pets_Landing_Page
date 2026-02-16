"use client"

import { Heart, Utensils, Syringe, Scale } from "lucide-react";

export function AboutSection({ isActive }: { isActive: boolean }) {
  const points = [
    { icon: Utensils, title: "Diario de Comidas", desc: "Registra marcas, porciones y calcula calorías." },
    { icon: Scale, title: "Control de Peso", desc: "Gráficos de evolución y alertas de desviación." },
    { icon: Syringe, title: "Vacunas y Desparasitaciones", desc: "Recordatorios automáticos sincronizados con tu vet." },
    { icon: Heart, title: "Bienestar General", desc: "Monitorea síntomas y actividad diaria." }
  ]

  return (
    <section
      id="about"
      className={`min-h-screen w-full flex items-center justify-center py-20 transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="glass p-6 rounded-[2.5rem] bg-slate-900/40 relative overflow-hidden group border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
              <div className="space-y-6">
                <div className="bg-primary/20 p-6 rounded-3xl border border-primary/20 backdrop-blur-sm">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-primary text-sm font-bold uppercase tracking-widest">Estado Nutricional</p>
                      <p className="text-3xl font-bold text-white">Óptimo</p>
                    </div>
                    <Heart className="w-10 h-10 text-primary animate-pulse" fill="currentColor" />
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    { title: "Desayuno", time: "8:00 AM", color: "bg-orange-400" },
                    { title: "Paseo Matutino", time: "9:30 AM", color: "bg-blue-400" },
                    { title: "Cena", time: "7:00 PM", color: "bg-purple-400" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/5 flex justify-between items-center transition-transform hover:translate-x-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <div className="flex-1 px-4 text-sm font-medium text-slate-200">{item.title}</div>
                      <div className="text-slate-500 text-xs">{item.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Diseñado para el <span className="text-gradient">bienestar integral</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                No somos solo una App de seguimiento. Somos el puente entre el amor por tu mascota y la ciencia de su nutrición.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((p, i) => (
                <div key={i} className="space-y-2 hover:bg-white/5 p-4 rounded-xl transition-colors -ml-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}