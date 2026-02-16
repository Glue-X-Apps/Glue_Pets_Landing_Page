"use client"

import { LayoutDashboard, Users, FileText, BarChart3, ArrowRight, ShieldCheck, Link2 } from "lucide-react";
import { PlatformVisualizer } from "../visuals/PlatformVisualizer";

interface B2BSectionProps {
    isActive: boolean;
}

export function B2BSection({ isActive }: B2BSectionProps) {
    return (
        <section
            id="b2b"
            className={`relative min-h-screen py-20 flex flex-col items-center justify-center transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="container mx-auto px-6">

                {/* Text Content - Centered Top */}
                <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        Para Veterinarias
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Una extensión de tu clínica. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal-400">En casa del cliente.</span>
                    </h2>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        No pierdas el rastro de tus pacientes. Visualiza sus curvas de peso, recibe alertas nutricionales y fideliza mediante recetas digitales directas a su App.
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
                        {[
                            { title: "Monitoreo Remoto", desc: "Gráficos de peso y BCS en tiempo real.", icon: BarChart3 },
                            { title: "Fidelización", desc: "Alertas automáticas de vacunas.", icon: Users },
                            { title: "Recetas & Dietas", desc: "Crea planes nutricionales digitales.", icon: FileText },
                            { title: "Acceso Inmediato", desc: "Crea tu cuenta y opera al instante.", icon: ShieldCheck },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-2 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-accent/30 transition-all hover:-translate-y-1 group">
                                <item.icon className="text-accent mb-2 group-hover:scale-110 transition-transform" size={24} />
                                <h3 className="text-white font-bold text-sm">{item.title}</h3>
                                <p className="text-xs text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visualizer - Full Width Below */}
                <div className="relative w-full max-w-6xl mx-auto perspective-1000" id="demo">
                    <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full pointer-events-none top-1/2 -translate-y-1/2"></div>
                    <div className="relative w-full transform hover:scale-[1.01] transition-all duration-700 ease-out z-10 shadow-2xl shadow-accent/5 rounded-xl border border-white/5 bg-slate-950/50 backdrop-blur-sm p-2 lg:p-4">
                        <PlatformVisualizer onInteract={() => console.log('Interactive clicked')} />
                    </div>
                </div>

            </div>
        </section>
    );
}
