"use client"

import { useState, useRef, useEffect } from "react"
import { CheckCircle2, ArrowRight, BarChart3, Activity } from "lucide-react"
import { WaitlistModal } from "./modals/WaitlistModal"

export function HeroVet() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handleLoadedMetadata = () => {
            video.currentTime = 2
        }

        const handleEnded = () => {
            video.currentTime = 2
            video.play().catch(err => console.log("Video playback error:", err))
        }

        video.addEventListener("loadedmetadata", handleLoadedMetadata)
        video.addEventListener("ended", handleEnded)

        if (video.readyState >= 1) {
            video.currentTime = 2
        }

        return () => {
            video.removeEventListener("loadedmetadata", handleLoadedMetadata)
            video.removeEventListener("ended", handleEnded)
        }
    }, [])

    return (
        <>
            <section className="min-h-screen w-full flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-slate-950">
                {/* Video Background with Readability Mask */}
                <div className="absolute inset-x-0 top-20 lg:inset-0 z-0">
                    <video
                        ref={videoRef}
                        src="/media/A_beautiful_black_tabby_cat_si.mp4"
                        muted
                        playsInline
                        autoPlay
                        preload="auto"
                        onCanPlay={() => setIsVideoLoaded(true)}
                        className={`w-full aspect-video lg:aspect-none lg:w-full lg:h-full object-cover transition-opacity duration-1000 pointer-events-none ${isVideoLoaded ? 'opacity-85' : 'opacity-0'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-[#070C15]/30 lg:via-[#070C15]/15 to-[#070C15] lg:from-[#070C15] lg:to-transparent z-10 pointer-events-none"></div>
                    
                    {/* Subtle loader overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-[#070C15] transition-opacity duration-700 pointer-events-none ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="w-6 h-6 rounded-full border-2 border-accent/20 border-t-accent animate-spin"></div>
                    </div>
                </div>

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

                    {/* Column Right: Open visual space for desktop */}
                    <div className="hidden lg:block"></div>
                </div>

                {/* Floating glass badge positioned absolutely flush in the bottom-right corner to cover the watermark */}
                <div className="hidden lg:block absolute bottom-0 right-0 z-20 bg-[#0C1527]/90 border-t border-l border-slate-800/80 px-10 py-12 sm:py-16 rounded-tl-[3.5rem] shadow-2xl min-w-[320px] sm:min-w-[380px] backdrop-blur-md">
                    <div className="flex justify-between items-center gap-8">
                        <div className="space-y-1 text-left">
                            <p className="text-accent text-xs sm:text-sm font-bold uppercase tracking-widest">Sincronización</p>
                            <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none">100% Activa</p>
                        </div>
                        <Activity className="w-10 h-10 sm:w-12 sm:h-12 text-accent animate-pulse flex-shrink-0" />
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
