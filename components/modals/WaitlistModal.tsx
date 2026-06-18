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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus('LOADING')
        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, type: defaultType })
            })

            if (response.ok) {
                setStatus('SUCCESS')
                setName("")
                setEmail("")
            } else {
                alert("Ocurrió un error al registrarte. Por favor intenta de nuevo.")
                setStatus('IDLE')
            }
        } catch (err) {
            console.error("Waitlist error:", err)
            alert("Error de red. Por favor intenta de nuevo.")
            setStatus('IDLE')
        }
    }

    const handleClose = () => {
        onClose()
        setTimeout(() => {
            setStatus('IDLE')
        }, 300)
    }

    const isOwner = defaultType === 'OWNER'
    const bgClass = isOwner ? "bg-[#FAF8F5] border-slate-200 text-slate-900 shadow-2xl" : "bg-[#0C1527] border-slate-800 text-white shadow-2xl"
    const textTitleClass = isOwner ? "text-slate-900" : "text-white"
    const textMutedClass = isOwner ? "text-slate-600" : "text-slate-400"
    const labelClass = isOwner ? "text-slate-500" : "text-slate-400"
    const inputClass = isOwner 
        ? "bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-primary/50 focus:border-primary" 
        : "bg-[#070C15] border-slate-800 text-white placeholder-slate-500 focus:ring-accent/50 focus:border-accent"
    const buttonClass = isOwner 
        ? "bg-primary text-white hover:shadow-glow shadow-lg shadow-primary/20" 
        : "bg-accent text-slate-950 hover:bg-accent/90 shadow-lg shadow-accent/20"
    const successCloseBtnClass = isOwner
        ? "bg-slate-200 hover:bg-slate-300 text-slate-800"
        : "bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300"

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className={`sm:max-w-md rounded-3xl p-8 border ${bgClass}`}>
                {status !== 'SUCCESS' ? (
                    <>
                        <DialogHeader>
                            <DialogTitle className={`text-center text-3xl font-bold font-serif flex items-center justify-center gap-2 ${textTitleClass}`}>
                                <Sparkles className="text-primary w-6 h-6 animate-pulse" />
                                {defaultType === 'OWNER' ? "Lista de Espera iOS" : "Acceso Anticipado Beta"}
                            </DialogTitle>
                            <p className={`text-center mt-2 text-sm ${textMutedClass}`}>
                                {defaultType === 'OWNER' 
                                    ? "Únete a la lista de espera para iPhone. Sé el primero en enterarte y obtén beneficios de lanzamiento."
                                    : "Registra tu clínica veterinaria para la Beta Privada. Te contactaremos para coordinar una demo guiada."
                                }
                            </p>
                        </DialogHeader>
 
                        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                            <div className="space-y-1">
                                <label className={`text-xs font-bold uppercase tracking-wider ${labelClass}`}>Nombre de contacto</label>
                                <input
                                    type="text"
                                    placeholder={defaultType === 'OWNER' ? "Tu nombre" : "Nombre de la clínica / Doctor"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${inputClass}`}
                                />
                            </div>
 
                            <div className="space-y-1">
                                <label className={`text-xs font-bold uppercase tracking-wider ${labelClass}`}>Correo electrónico *</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="correo@ejemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${inputClass}`}
                                />
                            </div>
 
                            <button
                                type="submit"
                                disabled={status === 'LOADING'}
                                className={`w-full py-3.5 rounded-xl font-bold text-sm hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2 ${buttonClass}`}
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
                        <h3 className={`text-2xl font-bold font-serif ${textTitleClass}`}>¡Registro Exitoso!</h3>
                        <p className={`text-sm max-w-xs leading-relaxed ${textMutedClass}`}>
                            {defaultType === 'OWNER'
                                ? "Te hemos añadido a la lista de espera de iOS. Te avisaremos apenas esté lista la app en el App Store."
                                : "Tu solicitud de acceso beta ha sido recibida. Nos pondremos en contacto contigo pronto para agendar tu demo."
                            }
                        </p>
                        <button
                            onClick={handleClose}
                            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${successCloseBtnClass}`}
                        >
                            Cerrar
                        </button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
