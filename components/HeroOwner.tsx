"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { DownloadModal } from "./modals/DownloadModal"
import { Hover3DContainer } from "./visuals/Hover3DContainer"
import { WaitlistModal } from "./modals/WaitlistModal"

export function HeroOwner() {
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

    return (
        <>
            <section className="min-h-screen w-full flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-slate-200/50 backdrop-blur-md shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-sm font-semibold text-slate-600">Bienestar & Salud</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-serif text-slate-900">
                            Tu mascota te habla. <br />
                            <span className="text-gradient italic font-normal">Entiende su salud.</span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                            La primera App que realmente conecta la nutrición diaria de tu mascota con su historial médico. Simple, científica y conectada con tu veterinario.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button
                                onClick={() => setIsDownloadModalOpen(true)}
                                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-glow hover:-translate-y-1 transition-all shadow-lg shadow-primary/20"
                            >
                                Descargar App
                            </button>
                        </div>
                    </div>

                    <div className="relative lg:h-[800px] flex items-center justify-center">
                        <Hover3DContainer>
                            <div className="relative w-[340px] lg:w-[400px] aspect-[4/5] p-4">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-[3rem] border border-slate-200/50 backdrop-blur-sm shadow-inner"></div>
                                <Image
                                    src="/img/hero-gluepets-optimized.png"
                                    alt="GluePets App Interface"
                                    width={600}
                                    height={800}
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] max-w-none drop-shadow-2xl z-10"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                />

                                {/* Floating Cards - Premium Glassmorphism */}
                                <div className="absolute top-20 -right-8 glass-light p-4 rounded-2xl animate-float z-20 border border-white/60">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-semibold">Vacuna</p>
                                            <p className="font-bold text-sm text-slate-800">Al día</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-32 -left-8 glass-light p-4 rounded-2xl animate-float delay-1000 z-20 border border-white/60">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-sm">
                                            ⚖️
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-semibold">Peso</p>
                                            <p className="font-bold text-sm text-slate-800">Controlado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Hover3DContainer>
                    </div>
                </div>
            </section>

            <DownloadModal 
                isOpen={isDownloadModalOpen} 
                onClose={() => setIsDownloadModalOpen(false)} 
                onOpenWaitlist={() => {
                    setIsDownloadModalOpen(false)
                    setIsWaitlistOpen(true)
                }}
            />
            <WaitlistModal 
                isOpen={isWaitlistOpen} 
                onClose={() => setIsWaitlistOpen(false)} 
                defaultType="OWNER" 
            />
        </>
    )
}
