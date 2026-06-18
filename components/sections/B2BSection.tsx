"use client"

import { LayoutDashboard, Users, FileText, BarChart3, ArrowRight, ShieldCheck, Link2 } from "lucide-react";
import { PlatformVisualizer } from "../visuals/PlatformVisualizer";
import { Hover3DContainer } from "../visuals/Hover3DContainer";

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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400 font-serif italic font-normal">En casa del cliente.</span>
                    </h2>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-sans">
                        No pierdas el rastro de tus pacientes. Visualiza sus curvas de peso, recibe alertas nutricionales y fideliza mediante recetas digitales directas a su App.
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 border-t border-l border-slate-800/40 rounded-2xl overflow-hidden bg-slate-950/10 text-left">
                        {[
                            { title: "Monitoreo Remoto", desc: "Gráficos de peso y BCS en tiempo real.", icon: BarChart3 },
                            { title: "Fidelización", desc: "Alertas automáticas de vacunas.", icon: Users },
                            { title: "Recetas & Dietas", desc: "Crea planes nutricionales digitales.", icon: FileText },
                            { title: "Acceso Inmediato", desc: "Crea tu cuenta y opera al instante.", icon: ShieldCheck },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-2 p-5 border-r border-b border-slate-800/40 hover:bg-[#0C1527]/25 transition-all group">
                                <item.icon className="text-accent mb-2 group-hover:scale-105 transition-transform duration-300" size={24} />
                                <h3 className="text-white font-bold text-sm">{item.title}</h3>
                                <p className="text-xs text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visualizer - Static and Interactive */}
                <div className="relative w-full max-w-6xl mx-auto" id="demo">
                    <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full pointer-events-none top-1/2 -translate-y-1/2"></div>
                    <div className="relative w-full z-10 shadow-2xl shadow-accent/5 rounded-xl border border-[#18263D] bg-[#0A1120]/85 backdrop-blur-md p-2 lg:p-4">
                        <PlatformVisualizer onInteract={() => console.log('Interactive clicked')} />
                    </div>
                </div>

                {/* QR Integration Steps - Premium Bento Box layout */}
                <div className="max-w-4xl mx-auto mt-28 border-t border-slate-800/30 pt-20">
                    <h3 className="text-2xl font-bold font-serif text-white text-center mb-12">Conexión Instantánea en 3 Pasos</h3>
                    <div className="grid md:grid-cols-3 border-t border-l border-slate-800/40 rounded-2xl overflow-hidden bg-slate-950/10">
                        <div className="p-8 border-r border-b border-slate-800/40 flex flex-col gap-4 hover:bg-[#0C1527]/20 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent font-bold flex items-center justify-center border border-accent/20">1</div>
                            <h4 className="text-white font-bold text-base">Generas tu QR</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">Cada clínica veterinaria tiene un código QR único disponible en su panel administrativo de GlueVets.</p>
                        </div>
                        <div className="p-8 border-r border-b border-slate-800/40 flex flex-col gap-4 hover:bg-[#0C1527]/20 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent font-bold flex items-center justify-center border border-accent/20">2</div>
                            <h4 className="text-white font-bold text-base">El Dueño Escanea</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">El cliente escanea el QR desde la app móvil GluePets para enlazar su perfil de Simba a tu clínica.</p>
                        </div>
                        <div className="p-8 border-r border-b border-slate-800/40 flex flex-col gap-4 hover:bg-[#0C1527]/20 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent font-bold flex items-center justify-center border border-accent/20">3</div>
                            <h4 className="text-white font-bold text-base">Historial Conectado</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">Visualiza en tiempo real curvas de peso, eventos y notifica recordatorios médicos directamente al dueño.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
