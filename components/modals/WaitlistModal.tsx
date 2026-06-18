"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check, Loader2, Sparkles } from "lucide-react"

interface WaitlistModalProps {
    isOpen: boolean
    onClose: () => void
    defaultType: 'OWNER' | 'VET'
}

export function WaitlistModal({ isOpen, onClose, defaultType }: WaitlistModalProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS'>('IDLE')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus('LOADING')
        setTimeout(() => {
            setStatus('SUCCESS')
            setName("")
            setEmail("")
        }, 1200)
    }

    const handleClose = () => {
        onClose()
        setTimeout(() => {
            setStatus('IDLE')
        }, 300)
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md bg-slate-950 border border-slate-800 text-white rounded-3xl p-8">
                {status !== 'SUCCESS' ? (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-center text-3xl font-bold font-serif flex items-center justify-center gap-2">
                                <Sparkles className="text-primary w-6 h-6 animate-pulse" />
                                {defaultType === 'OWNER' ? "Lista de Espera iOS" : "Acceso Anticipado Beta"}
                            </DialogTitle>
                            <p className="text-center text-slate-400 mt-2 text-sm">
                                {defaultType === 'OWNER' 
                                    ? "Únete a la lista de espera para iPhone. Sé el primero en enterarte y obtén beneficios de lanzamiento."
                                    : "Registra tu clínica veterinaria para la Beta Privada. Te contactaremos para coordinar una demo guiada."
                                }
                            </p>
                        </DialogHeader>

                        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nombre de contacto</label>
                                <input
                                    type="text"
                                    placeholder={defaultType === 'OWNER' ? "Tu nombre" : "Nombre de la clínica / Doctor"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder-slate-500"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Correo electrónico *</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="correo@ejemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder-slate-500"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'LOADING'}
                                className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-sm hover:shadow-glow hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                            >
                                {status === 'LOADING' ? (
                                    <>
                                        <Loader2 className="animate-spin w-4 h-4" />
                                        <span>Procesando...</span>
                                    </>
                                ) : (
                                    <span>{defaultType === 'OWNER' ? "Inscribirse ahora" : "Solicitar acceso beta"}</span>
                                )}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="py-8 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                        <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400">
                            <Check size={32} strokeWidth={3} className="animate-bounce" />
                        </div>
                        <h3 className="text-2xl font-bold font-serif text-white">¡Registro Exitoso!</h3>
                        <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                            {defaultType === 'OWNER'
                                ? "Te hemos añadido a la lista de espera de iOS. Te avisaremos apenas esté lista la app en el App Store."
                                : "Tu solicitud de acceso beta ha sido recibida. Nos pondremos en contacto contigo pronto para agendar tu demo."
                            }
                        </p>
                        <button
                            onClick={handleClose}
                            className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                        >
                            Cerrar
                        </button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
