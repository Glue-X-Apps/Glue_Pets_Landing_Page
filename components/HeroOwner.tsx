"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { DownloadModal } from "./modals/DownloadModal"

export function HeroOwner() {
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

    return (
        <>
            <section className="min-h-screen w-full flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-slate-300">Bienestar & Salud</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                            Tu mascota te habla. <br />
                            <span className="text-gradient">Entiende su salud.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
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

                        <div className="pt-8 flex items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
                            <div className="flex -space-x-2">
                                {/* Simulated user avatars without numbers */}
                                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-background flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-blue-400 opacity-50"></div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-background flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-purple-400 opacity-50"></div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-background flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-green-400 opacity-50"></div>
                                </div>
                            </div>
                            <p>Únete a nuestra comunidad creciente</p>
                        </div>
                    </div>

                    <div className="relative lg:h-[800px] flex items-center justify-center">
                        <div className="relative w-full max-w-[500px] aspect-[4/5]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-[3rem] border border-white/5 backdrop-blur-sm"></div>
                            <Image
                                src="/img/hero-gluepets.png"
                                alt="GluePets App Interface"
                                width={600}
                                height={800}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] max-w-none drop-shadow-2xl"
                                priority
                            />

                            {/* Floating Cards - Simplified */}
                            <div className="absolute top-20 -right-8 glass-panel p-4 rounded-2xl animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                                        ✓
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Vacuna</p>
                                        <p className="font-bold text-sm">Al día</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-32 -left-8 glass-panel p-4 rounded-2xl animate-float delay-1000">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400">
                                        ⚖️
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Peso</p>
                                        <p className="font-bold text-sm">Controlado</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
        </>
    )
}
