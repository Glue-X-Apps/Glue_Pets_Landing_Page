"use client"

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ_ITEMS = [
    {
        question: "¿Qué es la Nutrición Científica?",
        answer: "Utilizamos estándares veterinarios (WSAVA) para calcular las calorías exactas que tu mascota necesita, basándonos en su peso, edad, nivel de actividad y estado reproductivo. No es solo comida, es salud preventiva."
    },
    {
        question: "¿Qué significan BMR y RER?",
        answer: "BMR (Tasa Metabólica Basal) y RER (Requerimiento Energético en Reposo) son fórmulas científicas que determinan la energía mínima para que el cuerpo funcione. GluePets usa estas fórmulas para asegurar que tu mascota no coma ni más ni menos de lo necesario."
    },
    {
        question: "¿La App sustituye al veterinario?",
        answer: "Nunca. GluePets es una herramienta que te conecta mejor con él. Tu veterinario puede ver los datos que registras y tomar mejores decisiones clínicas, pero el diagnóstico siempre es responsabilidad del profesional."
    },
    {
        question: "¿Es gratis?",
        answer: "Sí, la descarga y las funciones principales de diario y salud son gratuitas para todos los dueños."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
                    <p className="text-slate-400">Resolvemos tus dudas sobre el cuidado inteligente.</p>
                </div>

                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className={`border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/5' : 'hover:bg-white/5'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(api => api === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-lg">{item.question}</span>
                                {openIndex === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-slate-400" />}
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
