"use client"

import { useState } from "react"
import { Check, X } from "lucide-react";
import { WaitlistModal } from "../modals/WaitlistModal";

const PLANS = [
    {
        name: "Plan Gratuito",
        price: "0",
        description: "Ideal para veterinarios independientes que están empezando.",
        features: [
            { name: "Hasta 50 clientes", included: true },
            { name: "Hasta 100 mascotas", included: true },
            { name: "Gestión básica de ingresos", included: true },
            { name: "Carga de archivos (Limitado)", included: true },
            { name: "Recetas digitales", included: true },
            { name: "Acceso ilimitado a funcionalidades", included: false },
            { name: "Soporte prioritario", included: false },
        ]
    },
    {
        name: "Plan Premium",
        price: "29", // Example price, or "Consultar"
        period: "/mes",
        description: "Para clínicas que buscan escalar y digitalizar al máximo.",
        popular: true,
        features: [
            { name: "Clientes ilimitados", included: true },
            { name: "Mascotas ilimitadas", included: true },
            { name: "Reportes financieros avanzados", included: true },
            { name: "Carga de archivos ilimitada", included: true },
            { name: "Recetas digitales ilimitadas", included: true },
            { name: "Acceso total a todas las funciones", included: true },
            { name: "Soporte prioritario 24/7", included: true },
        ]
    }
];

export function PlansSection() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

    return (
        <>
            <section id="plans" className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">Planes diseñados para ti</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Comienza gratis y crece con nosotros. Sin tarjetas de crédito para empezar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {PLANS.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`relative rounded-2xl p-8 lg:p-10 border transition-all ${plan.popular ? 'bg-slate-950/40 border-accent/40 shadow-xl shadow-accent/5' : 'bg-slate-950/10 border-slate-800/40'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-accent text-slate-950 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                                        Recomendado
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-sm text-slate-400 mb-6 h-10">{plan.description}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-white">${plan.price}</span>
                                        {plan.period && <span className="text-slate-500">{plan.period}</span>}
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-sm">
                                            {feature.included ? (
                                                <Check className="text-accent shrink-0 mt-0.5" size={16} />
                                            ) : (
                                                <X className="text-slate-700 shrink-0 mt-0.5" size={16} />
                                            )}
                                            <span className={feature.included ? 'text-slate-300' : 'text-slate-600'}>
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setIsWaitlistOpen(true)}
                                    className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer border
                                        ${plan.popular 
                                            ? 'bg-accent text-slate-950 hover:bg-accent/90 border-accent/20 hover:border-accent/40 shadow-lg shadow-accent/15' 
                                            : 'bg-transparent hover:bg-slate-900 text-slate-300 border-slate-800/60 hover:border-slate-700'
                                        }
                                    `}
                                >
                                    <span>{plan.price === "0" ? "Empezar Gratis" : "Elegir Premium"}</span>
                                    <span className="bg-primary/20 text-primary group-hover:scale-105 transition-transform text-[9px] px-1.5 py-0.5 rounded border border-primary/30 uppercase tracking-wider font-semibold">Beta</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WaitlistModal 
                isOpen={isWaitlistOpen} 
                onClose={() => setIsWaitlistOpen(false)} 
                defaultType="VET" 
            />
        </>
    );
}
