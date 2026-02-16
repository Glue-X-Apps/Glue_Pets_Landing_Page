"use client"

import Image from "next/image"
import { CheckCircle2, ArrowRight, BarChart3 } from "lucide-react"

export function HeroVet() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-slate-950">
            {/* Professional Background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent font-semibold text-sm">
                        <BarChart3 size={16} />
                        Para Clínicas Veterinarias Modernas
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
                        Tu consulta no termina <br />
                        <span className="text-accent">cuando el paciente se va.</span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                        Accede al historial de nutrición y peso registrado por el dueño en casa. Fideliza a tus clientes con una App vinculada a tu clínica y optimiza tu gestión.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                            <span className="text-slate-300">Monitoreo Remoto (Peso/BCS)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                            <span className="text-slate-300">Recetas Digitales & Dietas</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                            <span className="text-slate-300">Gestión de Inventario</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                            <span className="text-slate-300">Validación de Nuevos Pacientes</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button disabled className="bg-slate-800 text-slate-500 px-8 py-3.5 rounded-xl font-bold text-lg border border-slate-700 cursor-not-allowed flex items-center gap-3 relative overflow-hidden group">
                            <span>Empezar Gratis</span>
                            <span className="bg-accent/10 text-accent text-xs px-2 py-0.5 rounded border border-accent/20 uppercase tracking-wider">Pronto</span>
                        </button>
                        <button
                            onClick={() => {
                                const element = document.getElementById('demo');
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-accent text-slate-950 px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20 flex items-center justify-center gap-2 group"
                        >
                            Ver Demo
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    {/* Abstract Dashboard Composition */}
                    <div className="relative z-10 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden aspect-video transform rotate-1 hover:rotate-0 transition-all duration-700">
                        <div className="absolute top-0 left-0 right-0 h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="p-8 pt-16 grid grid-cols-3 gap-6 h-full">
                            <div className="col-span-1 bg-slate-800/50 rounded-xl h-40 animate-pulse"></div>
                            <div className="col-span-2 bg-slate-800/50 rounded-xl h-40"></div>
                            <div className="col-span-3 bg-slate-800/50 rounded-xl h-32"></div>
                        </div>

                        {/* Floating Info Element */}
                        <div className="absolute bottom-6 right-6 bg-accent text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                            +25% Retención
                        </div>
                    </div>

                    <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full"></div>
                </div>
            </div>
        </section>
    )
}
