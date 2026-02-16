"use client"

import { Check, X } from "lucide-react";

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
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Planes diseñados para ti</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Comienza gratis y crece con nosotros. Sin tarjetas de crédito para empezar.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {PLANS.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-3xl p-8 border ${plan.popular ? 'bg-slate-900 border-accent/50 shadow-2xl shadow-accent/10' : 'bg-slate-950 border-white/10'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-accent text-slate-950 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
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
                                            <Check className="text-green-400 shrink-0 mt-0.5" size={16} />
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
                                disabled
                                className="w-full py-4 rounded-xl font-bold transition-all bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                <span>{plan.price === "0" ? "Empezar Gratis" : "Elegir Premium"}</span>
                                <span className="bg-accent/10 text-accent text-[10px] px-2 py-0.5 rounded border border-accent/20 uppercase tracking-wider">Pronto</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
