"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Apple, Play } from "lucide-react"
import Link from "next/link"

interface DownloadModalProps {
    isOpen: boolean
    onClose: () => void
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md bg-slate-950 border border-slate-800 text-white rounded-3xl p-8">
                <DialogHeader>
                    <DialogTitle className="text-center text-3xl font-bold">Descarga GluePets</DialogTitle>
                    <p className="text-center text-slate-400 mt-2 text-base">
                        Tu mascota te lo agradecerá. <br /> Elige tu plataforma para comenzar.
                    </p>
                </DialogHeader>

                <div className="grid gap-4 py-6">
                    {/* Google Play Button - Primary Action */}
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.gluepets.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 w-full bg-white text-black p-4 rounded-xl hover:bg-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-white/5"
                    >
                        <div className="w-10 h-10 flex items-center justify-center">
                            <Play fill="currentColor" size={32} className="text-black" />
                        </div>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Disponible en</span>
                            <span className="text-xl font-bold">Google Play</span>
                        </div>
                    </Link>

                    {/* App Store Button - Disabled/Coming Soon */}
                    <button
                        disabled
                        className="flex items-center gap-4 w-full bg-slate-900 text-slate-500 p-4 rounded-xl border border-slate-800 cursor-not-allowed relative overflow-hidden"
                    >
                        <div className="w-10 h-10 flex items-center justify-center">
                            <Apple fill="currentColor" size={36} className="pb-1" />
                        </div>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Consíguelo en el</span>
                            <span className="text-xl font-bold">App Store</span>
                        </div>

                        {/* 'Coming Soon' Badge */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800 px-3 py-1 rounded-full text-[10px] font-bold text-slate-300 border border-slate-700">
                            Pronto
                        </div>
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
