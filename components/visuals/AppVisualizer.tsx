"use client"

import React, { useState } from 'react';
import { LandingPetSvg } from './LandingPetSvg';
import {
    Battery,
    Wifi,
    Signal,
    ChevronLeft,
    ChevronRight,
    Utensils,
    CalendarDays,
    Plus,
    Check,
    Stethoscope,
    Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function AppVisualizer() {
    const [activeTab, setActiveTab] = useState<'NUTRITION' | 'CLINICAL'>('NUTRITION');

    return (
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl flex flex-col overflow-hidden">
            {/* Dynamic Island / Notch */}
            <div className="h-[32px] w-full bg-gray-900 absolute top-0 left-0 right-0 z-50 flex items-center justify-center rounded-t-[2rem]">
                <div className="h-[18px] w-[80px] bg-black rounded-full absolute top-2"></div>
            </div>

            {/* Status Bar */}
            <div className="h-12 w-full bg-slate-50 flex items-center justify-between px-6 pt-2 text-[10px] font-medium text-slate-900 z-40 rounded-t-[2rem]">
                <span>9:41</span>
                <div className="flex gap-1.5">
                    <Signal size={12} strokeWidth={2.5} />
                    <Wifi size={12} strokeWidth={2.5} />
                    <Battery size={12} strokeWidth={2.5} />
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-slate-50 overflow-hidden relative font-sans text-slate-900">

                {/* Render Active View */}
                {activeTab === 'NUTRITION' ? <NutritionView /> : <ClinicalView />}

            </div>

            {/* Bottom Tab Bar */}
            <div className="h-16 bg-white border-t border-slate-100 flex items-center justify-around px-2 z-40 pb-2">
                <button
                    onClick={() => setActiveTab('NUTRITION')}
                    className={cn("flex flex-col items-center gap-1 p-2 rounded-xl transition-colors", activeTab === 'NUTRITION' ? "text-primary" : "text-slate-400")}
                >
                    <Utensils size={20} />
                    <span className="text-[9px] font-medium">Diario</span>
                </button>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 -mt-6 border-4 border-slate-50">
                    <Plus size={20} className="text-white" strokeWidth={3} />
                </div>
                <button
                    onClick={() => setActiveTab('CLINICAL')}
                    className={cn("flex flex-col items-center gap-1 p-2 rounded-xl transition-colors", activeTab === 'CLINICAL' ? "text-purple-600" : "text-slate-400")}
                >
                    <CalendarDays size={20} />
                    <span className="text-[9px] font-medium">Salud</span>
                </button>
            </div>

            {/* Home Indicator */}
            <div className="h-1 w-1/3 bg-slate-900/20 rounded-full self-center mb-2 mx-auto absolute bottom-1 z-50"></div>
        </div>
    );
}

function NutritionView() {
    return (
        <div className="h-full flex flex-col p-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header Date */}
            <div className="flex items-center justify-between mb-4">
                <ChevronLeft size={20} className="text-slate-400" />
                <div className="text-center">
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Hoy</div>
                    <div className="text-sm font-bold text-slate-800">24 Octubre</div>
                </div>
                <ChevronRight size={20} className="text-slate-400" />
            </div>

            {/* Pet Card */}
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 mb-4">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col gap-2">
                        {/* Macro: Protein */}
                        <div className="w-1 bg-slate-100 h-10 rounded-full overflow-hidden relative">
                            <div className="absolute bottom-0 w-full bg-orange-400 h-[70%] rounded-full"></div>
                        </div>
                        <span className="text-[8px] font-bold text-slate-400 text-center w-1">P</span>
                    </div>

                    {/* Visualizer */}
                    <div className="w-24 h-24">
                        <LandingPetSvg species="dog" color="#F2DCC5" />
                    </div>

                    <div className="flex flex-col gap-2">
                        {/* Macro: Fat */}
                        <div className="w-1 bg-slate-100 h-10 rounded-full overflow-hidden relative">
                            <div className="absolute bottom-0 w-full bg-blue-400 h-[40%] rounded-full"></div>
                        </div>
                        <span className="text-[8px] font-bold text-slate-400 text-center w-1">G</span>
                    </div>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-50 flex justify-between items-center px-2">
                    <span className="text-xs font-semibold text-slate-600">Simba</span>
                    <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[9px] font-bold">
                        840 / 1200 kcal
                    </div>
                </div>
            </div>

            {/* Meals List */}
            <div className="flex-1 overflow-visible space-y-3">
                <div className="text-xs font-bold text-slate-900 mb-2">Comidas</div>

                {/* Meal 1 */}
                <div className="bg-white p-3 rounded-2xl flex items-center gap-3 border border-slate-100 shadow-sm opacity-60">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check size={14} className="text-green-600" strokeWidth={3} />
                    </div>
                    <div className="flex-1">
                        <div className="text-xs font-bold text-slate-800 line-through decoration-slate-400 decoration-2">Desayuno</div>
                        <div className="text-[10px] text-slate-500">400 kcal • 8:00 AM</div>
                    </div>
                </div>

                {/* Meal 2 */}
                <div className="bg-white p-3 rounded-2xl flex items-center gap-3 border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <Utensils size={14} className="text-orange-600" />
                    </div>
                    <div className="flex-1">
                        <div className="text-xs font-bold text-slate-800">Cena</div>
                        <div className="text-[10px] text-slate-500">400 kcal • 7:00 PM</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

function ClinicalView() {
    return (
        <div className="h-full flex flex-col p-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="text-sm font-bold text-slate-800 mb-4">Calendario de Salud</div>

            {/* Calendar Grid */}
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 mb-4">
                {/* Weekdays */}
                <div className="grid grid-cols-7 mb-2 text-center">
                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(d => (
                        <span key={d} className="text-[10px] font-bold text-slate-300">{d}</span>
                    ))}
                </div>
                {/* Days */}
                <div className="grid grid-cols-7 gap-y-2 place-items-center">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => {
                        const isSelected = day === 24;
                        const isEvent = day === 24 || day === 15 || day === 5;
                        return (
                            <div key={day} className={cn(
                                "w-6 h-6 flex flex-col items-center justify-center rounded-full text-[10px] relative transition-all",
                                isSelected ? "bg-purple-600 text-white shadow-md shadow-purple-200" : "text-slate-600"
                            )}>
                                {day}
                                {isEvent && (
                                    <span className={cn("w-1 h-1 rounded-full absolute -bottom-1", isSelected ? "bg-purple-600" : "bg-purple-400")} />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Event List */}
            <div className="flex-1 space-y-3">
                <div className="text-xs font-bold text-slate-900 mb-2">Eventos del día</div>

                <div className="bg-purple-50 p-3 rounded-2xl flex items-center gap-3 border border-purple-100">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Stethoscope size={14} className="text-purple-600" />
                    </div>
                    <div className="flex-1">
                        <div className="text-xs font-bold text-slate-800">Consulta Veterinaria</div>
                        <div className="text-[10px] text-purple-700 flex items-center gap-1">
                            <Clock size={10} /> 10:30 AM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
