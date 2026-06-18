"use client"

import { useState } from "react"
import { CheckCircle2, ArrowRight, BarChart3 } from "lucide-react"
import { Hover3DContainer } from "./visuals/Hover3DContainer"
import { WaitlistModal } from "./modals/WaitlistModal"

export function HeroVet() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

    return (
        <>
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

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
                            Tu consulta no termina <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400 font-serif italic font-normal">sincroniza la salud en tiempo real.</span>
                        </h1>

                        <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-sans">
                            Conecta tu clínica con el celular de tu cliente. Todo lo que registres en tu portal de gestión se sincroniza automáticamente en el diario médico de la app de tus dueños, eliminando la doble digitación y fidelizando al instante.
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
                                <span className="text-slate-300">Pre-registro de Dueños Pendientes</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                                <span className="text-slate-300">Sincronización Clínica Directa</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button 
                                onClick={() => setIsWaitlistOpen(true)}
                                className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:shadow-glow hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group cursor-pointer"
                            >
                                <span>Solicitar Acceso Beta</span>
                            </button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById('demo');
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-slate-900 border border-slate-800 text-slate-300 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-800 hover:text-white transition-colors flex items-center justify-center gap-2 group"
                            >
                                Ver Demo
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Floating elements to create depth/layering */}
                        <div className="absolute -top-6 -left-12 bg-slate-950/95 border border-slate-800/60 px-3.5 py-2 rounded-xl text-[10px] text-slate-300 font-semibold flex items-center gap-2 shadow-2xl animate-float-slow z-20 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                            Sincronización QR Activa
                        </div>

                        <div className="absolute bottom-16 -left-10 bg-slate-950/95 border border-slate-800/60 px-3.5 py-2 rounded-xl text-[10px] text-slate-300 font-semibold flex items-center gap-2 shadow-2xl animate-float-medium z-20 backdrop-blur-md">
                            <span className="text-accent font-bold">✓</span>
                            Historial Clínico Guardado
                        </div>

                        <div className="absolute -bottom-6 -right-4 bg-accent text-slate-950 px-4 py-2 rounded-xl text-[11px] font-bold shadow-lg shadow-accent/25 border border-accent/30 animate-float-fast z-20">
                            +25% Fidelización
                        </div>

                        <Hover3DContainer>
                            {/* High-Fidelity Dashboard Composition Mockup */}
                            <div className="relative z-10 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl overflow-hidden aspect-video transition-all duration-700 font-sans text-left text-xs">
                                {/* Browser Toolbar */}
                                <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900 border-b border-slate-800/80 flex items-center px-4 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                                    <span className="text-[10px] text-slate-500 font-mono ml-4 truncate">gluevets.com/dashboard/simba</span>
                                </div>
                                
                                <div className="pt-10 flex h-full text-slate-300">
                                    {/* Sidebar */}
                                    <div className="w-24 border-r border-slate-900 bg-slate-950 p-2 flex flex-col gap-3">
                                        <div className="w-5 h-5 bg-accent/25 rounded-md flex items-center justify-center text-accent text-[9px] font-bold">GV</div>
                                        <div className="space-y-1.5 pt-2">
                                            <div className="h-2 w-12 bg-accent/30 rounded"></div>
                                            <div className="h-2 w-14 bg-slate-800 rounded"></div>
                                            <div className="h-2 w-10 bg-slate-800 rounded"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Dashboard Content */}
                                    <div className="flex-1 p-4 space-y-3 bg-slate-900/30">
                                        {/* Clinic Header */}
                                        <div className="flex justify-between items-center pb-2 border-b border-slate-900">
                                            <div>
                                                <div className="text-[10px] font-bold text-white">Clínica San José</div>
                                                <div className="text-[8px] text-slate-500">Historial Clínico Digital</div>
                                            </div>
                                            <div className="bg-accent/10 border border-accent/25 px-2 py-0.5 rounded text-[8px] text-accent font-semibold">Conectado con App</div>
                                        </div>
                                        
                                        {/* Main content split */}
                                        <div className="grid grid-cols-5 gap-3">
                                            {/* Patient details Card */}
                                            <div className="col-span-3 bg-slate-900/50 border border-slate-850 p-3 rounded-lg space-y-2.5">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-[10px]">S</div>
                                                    <div>
                                                        <div className="text-[10px] font-bold text-white">Simba</div>
                                                        <div className="text-[8px] text-slate-500">Golden Retriever • 5 Años</div>
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="flex justify-between text-[7px] text-slate-400">
                                                        <span>Vacuna Rabia</span>
                                                        <span className="text-green-400 font-bold">Sincronizado</span>
                                                    </div>
                                                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                                        <div className="w-full h-full bg-green-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Sync metrics card */}
                                            <div className="col-span-2 bg-slate-900/50 border border-slate-850 p-3 rounded-lg flex flex-col justify-between">
                                                <div className="text-[8px] font-bold text-slate-400">Estatus Cliente</div>
                                                <div className="text-[14px] font-bold text-white">Activo</div>
                                                <div className="text-[7px] text-slate-500 flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> QR Vinculado
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Recent activity list */}
                                        <div className="bg-slate-900/30 border border-slate-900 p-2.5 rounded-lg space-y-1.5">
                                            <div className="text-[8px] font-bold text-slate-400">Notificaciones Recientes a Dueño</div>
                                            <div className="flex items-center justify-between text-[8px] bg-slate-950/40 px-2 py-1.5 rounded border border-slate-900">
                                                <span className="text-slate-300">Vacuna Óctuple registrada por Dr. Evans</span>
                                                <span className="text-accent font-semibold flex items-center gap-1">Enviado a App ✓</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Hover3DContainer>

                        <div className="absolute -inset-4 bg-accent/10 blur-3xl -z-10 rounded-full"></div>
                    </div>
                </div>
            </section>

            <WaitlistModal 
                isOpen={isWaitlistOpen} 
                onClose={() => setIsWaitlistOpen(false)} 
                defaultType="VET" 
            />
        </>
    )
}
