"use client"

import { useState, useRef, useEffect } from "react"
import { DownloadModal } from "./modals/DownloadModal"
import { WaitlistModal } from "./modals/WaitlistModal"

export function HeroOwner() {
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
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
            <section className="min-h-screen w-full flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
                {/* Video Background with Readability Mask */}
                <div className="absolute inset-x-0 top-20 lg:inset-0 z-0">
                    <video
                        ref={videoRef}
                        src="/media/A_beautiful_Golden_Retriever_d.mp4"
                        muted
                        playsInline
                        autoPlay
                        preload="auto"
                        onCanPlay={() => setIsVideoLoaded(true)}
                        className={`w-full aspect-video lg:aspect-none lg:w-full lg:h-full object-cover transition-opacity duration-1000 pointer-events-none ${isVideoLoaded ? 'opacity-90' : 'opacity-0'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-l from-transparent via-[#FAF8F5]/30 lg:via-[#FAF8F5]/92 to-[#FAF8F5] lg:to-[#FAF8F5]/35 z-10 pointer-events-none"></div>
                    
                    {/* Subtle loader overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-[#FAF8F5] transition-opacity duration-700 pointer-events-none ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="w-6 h-6 rounded-full border-2 border-primary/20 border-t-primary animate-spin"></div>
                    </div>
                </div>

                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Column Left: Open visual space for desktop */}
                    <div className="hidden lg:block"></div>

                    <div className="space-y-8 text-center lg:text-left lg:pl-12">
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
