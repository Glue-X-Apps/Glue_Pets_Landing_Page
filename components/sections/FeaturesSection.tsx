"use client"

import { Database, FileText, BarChart3, Users, Building2, Lock } from "lucide-react";

export function FeaturesSection({ isActive }: { isActive: boolean }) {
  const features = [
    { icon: Database, title: "Base de Datos Unificada", desc: "Historial médico accesible desde cualquier sucursal." },
    { icon: FileText, title: "Recetas Inteligentes", desc: "Calcula dosis y envía prescripciones directo a la App del dueño." },
    { icon: BarChart3, title: "Analítica de Negocio", desc: "Métricas de retención, tickets promedio y crecimiento." },
    { icon: Building2, title: "Gestión Multi-Sede", desc: "Control total de tu red de clínicas desde un solo panel." },
    { icon: Users, title: "CRM Veterinario", desc: "Campañas automáticas de vacunación y recordatorios." },
    { icon: Lock, title: "Seguridad de Datos", desc: "Validación manual de profesionales. Sin intrusismo." }
  ]

  return (
    <section
      id="features"
      className={`min-h-screen w-full flex items-center justify-center py-32 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Potencia tu <span className="text-gradient">clínica veterinaria</span></h2>
          <p className="text-muted-foreground text-lg">
            Herramientas diseñadas para reducir la carga administrativa y aumentar la fidelización de tus pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-800/40 rounded-3xl overflow-hidden bg-slate-950/10">
          {features.map((f, i) => (
            <div key={i} className="border-r border-b border-slate-800/40 p-8 sm:p-10 hover:bg-[#0C1527]/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-105 transition-transform duration-300">
                <f.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}