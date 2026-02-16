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
      className={`min-h-screen w-full flex items-center justify-center py-24 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Potencia tu <span className="text-gradient">clínica veterinaria</span></h2>
          <p className="text-muted-foreground text-lg">
            Herramientas diseñadas para reducir la carga administrativa y aumentar la fidelización de tus pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] border-white/5 hover:border-accent/30 transition-all hover:bg-white/[0.03] group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <f.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}