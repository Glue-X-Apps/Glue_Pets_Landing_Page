"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Apple, Play, Globe } from "lucide-react"
import Link from "next/link"

interface DownloadModalProps {
    isOpen: boolean
    onClose: () => void
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md bg-[#FAF8F5] border border-slate-200 text-slate-900 rounded-3xl p-8 shadow-2xl">
                <DialogHeader>
                    <DialogTitle className="text-center text-3xl font-bold font-serif text-slate-900">Descarga GluePets</DialogTitle>
                    <p className="text-center text-slate-600 mt-2 text-base">
                        Tu mascota te lo agradecerá. <br /> Elige tu plataforma para comenzar.
                    </p>
                </DialogHeader>

                <div className="grid gap-4 py-6">
                    {/* Google Play Button - Primary Action */}
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.gluepets.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 w-full bg-slate-900 text-white p-4 rounded-xl hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md border border-slate-850"
                    >
                        <div className="w-10 h-10 flex items-center justify-center">
                            <Play fill="currentColor" size={32} className="text-white" />
                        </div>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Disponible en</span>
                            <span className="text-xl font-bold">Google Play</span>
                        </div>
                    </Link>

                    {/* Web Version Button */}
                    <a
                        href="https://app.gluepets.cl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 w-full bg-white text-slate-800 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden shadow-sm"
                    >
                        <div className="w-10 h-10 flex items-center justify-center text-primary">
                            <Globe size={32} />
                        </div>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Sin instalar nada</span>
                            <span className="text-xl font-bold">Abrir App Web</span>
                        </div>

                        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-500/10 px-3 py-1 rounded-full text-[10px] font-bold text-green-700 border border-green-500/20 group-hover:scale-105 transition-transform">
                            Online
                        </div>
                    </a>

                    {/* App Store Button - Próximamente */}
                    <div
                        className="group flex items-center gap-4 w-full bg-slate-100/80 text-slate-500 p-4 rounded-xl border border-slate-200/80 relative overflow-hidden shadow-sm cursor-default"
                    >
                        <div className="w-10 h-10 flex items-center justify-center">
                            <Apple fill="currentColor" size={36} className="pb-1 text-slate-400" />
                        </div>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Próximamente en el</span>
                            <span className="text-xl font-bold text-slate-700">App Store</span>
                        </div>

                        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-200/80 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 border border-slate-300/60">
                            Próximamente
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
