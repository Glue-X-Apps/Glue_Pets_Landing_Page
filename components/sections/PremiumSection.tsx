"use client"

import { Sparkles, Trophy, Star, Crown } from "lucide-react";

export function PremiumSection({ isActive }: { isActive: boolean }) {
  return (
    <section
      id="premium"
      className={`min-h-screen w-full flex items-center justify-center py-24 transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-6">
        <div className="glass p-12 md:p-20 rounded-[3rem] border-white/10 relative overflow-hidden bg-gradient-to-br from-primary/20 via-slate-900 to-accent/20">
          <div className="absolute top-0 right-0 p-8">
            <Sparkles className="text-primary w-12 h-12 opacity-50" />
          </div>

          <div className="max-w-3xl space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold">
              <Crown className="w-5 h-5 text-yellow-500" />
              Evolución GluePets
            </div>

            <h2 className="text-4xl md:text-7xl font-bold leading-tight">
              Próximamente: <span className="text-gradient">El futuro</span> del cuidado animal
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Estamos construyendo herramientas de análisis predictivo, integración total con dispositivos IoT y una red global de expertos.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {["Multi-mascota", "Recomendaciones AI", "Acceso Prioritario"].map((tag) => (
                <span key={tag} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 blur-[120px] rounded-full"></div>
        </div>
      </div>
    </section>
  )
}