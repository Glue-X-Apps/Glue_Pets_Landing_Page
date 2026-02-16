"use client"

import React, { useState } from 'react';
import {
    BarChart3,
    Users,
    Calendar,
    Settings,
    Search,
    Plus,
    Phone,
    Mail,
    MoreVertical,
    ChevronRight,
    PawPrint
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { LandingPetSvg } from './LandingPetSvg';

export function PlatformVisualizer({ onInteract }: { onInteract?: () => void }) {
    const [activeClient, setActiveClient] = useState(1);

    return (
        <div
            onClick={onInteract}
            // Changed aspect ratio to fixed height on mobile to exaggerate verticality
            className="relative mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-w-5xl w-full h-[650px] sm:h-auto sm:aspect-[16/10] flex flex-col font-sans transition-all cursor-pointer group hover:ring-2 hover:ring-primary/50"
        >

            {/* Browser Header */}
            <div className="h-8 sm:h-10 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center px-3 sm:px-4 gap-3 sm:gap-4 flex-none">
                <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white dark:bg-slate-900 h-5 sm:h-6 rounded-md border border-slate-200 dark:border-slate-800 flex items-center px-2 sm:px-3 text-[10px] sm:text-xs text-slate-400 font-medium truncate">
                    gluepets.com/app/patients
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar - Hidden on mobile */}
                <div className="w-16 flex-none bg-slate-900 hidden sm:flex flex-col items-center py-6 gap-6">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">G</div>
                    <div className="flex-1 flex flex-col gap-4">
                        <SidebarItem icon={BarChart3} />
                        <SidebarItem icon={Users} active />
                        <SidebarItem icon={Calendar} />
                        <SidebarItem icon={Settings} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-slate-50 dark:bg-slate-950 flex flex-col min-w-0">
                    {/* Page Header */}
                    <div className="h-14 sm:h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-8 bg-white dark:bg-slate-900 flex-none">
                        <div>
                            <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Pacientes</h1>
                            <p className="text-[10px] sm:text-xs text-slate-500 hidden sm:block">Gestión de clientes y mascotas</p>
                        </div>
                        <button className="bg-primary text-white px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 shadow-lg shadow-primary/20 whitespace-nowrap">
                            <Plus size={14} className="sm:hidden" /> <Plus size={16} className="hidden sm:block" />
                            <span className="hidden sm:inline">Nuevo Cliente</span> <span className="sm:hidden">Nuevo</span>
                        </button>
                    </div>

                    <div className="flex-1 p-3 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-hidden">
                        {/* List Column - Vertical stack on mobile */}
                        <div className="w-full sm:w-1/3 flex flex-col gap-3 sm:gap-4 flex-none h-[180px] sm:h-auto border-b sm:border-b-0 sm:border-r border-slate-200 dark:border-slate-800 pb-3 sm:pb-0 pr-0 sm:pr-4">
                            <div className="relative flex-none">
                                <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 sm:hidden" />
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hidden sm:block" />
                                <input type="text" placeholder="Buscar..." className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg pl-8 sm:pl-9 p-1.5 sm:p-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                            </div>

                            <div className="flex-1 overflow-auto space-y-2 sm:space-y-3">
                                <ClientCard
                                    id={1}
                                    name="Jesus Orelleana"
                                    pets={1}
                                    active={activeClient === 1}
                                    onClick={(e) => { e.stopPropagation(); setActiveClient(1) }}
                                />
                                <ClientCard
                                    id={2}
                                    name="Ana García"
                                    pets={2}
                                    active={activeClient === 2}
                                    onClick={(e) => { e.stopPropagation(); setActiveClient(2) }}
                                    compact
                                />
                                <ClientCard
                                    id={3}
                                    name="Carlos Mendez"
                                    pets={1}
                                    active={activeClient === 3}
                                    onClick={(e) => { e.stopPropagation(); setActiveClient(3) }}
                                    compact
                                />
                                <ClientCard
                                    id={4}
                                    name="Lucia P."
                                    pets={1}
                                    active={activeClient === 4}
                                    onClick={(e) => { e.stopPropagation(); setActiveClient(4) }}
                                    compact
                                />
                            </div>
                        </div>

                        {/* Detail Column */}
                        <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-6 overflow-auto min-h-0">
                            {/* Client Header */}
                            <div className="flex items-start justify-between mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-slate-100 dark:border-slate-800">
                                <div className="flex gap-3 sm:gap-4 items-center sm:items-start">
                                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg sm:text-2xl font-bold text-slate-500 flex-none">
                                        JO
                                    </div>
                                    <div className="min-w-0">
                                        <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white truncate">Jesus Orellana</h2>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            <span className="flex items-center gap-1 text-[10px] sm:text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md whitespace-nowrap">
                                                <Phone size={10} /> +34 612...
                                            </span>
                                            <span className="flex items-center gap-1 text-[10px] sm:text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md truncate max-w-[100px] sm:max-w-[120px]">
                                                <Mail size={10} /> jesus@email.com
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button className="text-slate-400 hover:text-slate-600">
                                    <MoreVertical size={16} className="sm:hidden" />
                                    <MoreVertical size={20} className="hidden sm:block" />
                                </button>
                            </div>

                            {/* Pets Grid */}
                            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                                <PawPrint size={14} className="text-primary sm:hidden" />
                                <PawPrint size={16} className="text-primary hidden sm:block" />
                                Mascotas (1)
                            </h3>

                            <div className="grid grid-cols-1 gap-3 sm:gap-4">
                                <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-3 sm:p-4 flex gap-3 sm:gap-4 hover:border-primary/50 transition-colors cursor-pointer group/pet">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100/50 rounded-xl items-center justify-center flex p-1 flex-none">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12">
                                            <LandingPetSvg species="dog" color="#F2DCC5" />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white group-hover/pet:text-primary transition-colors text-xs sm:text-base">Gon</h4>
                                                <p className="text-[10px] sm:text-xs text-slate-500">Golden Retr... • 3 años</p>
                                            </div>
                                            <span className="bg-green-100 text-green-700 text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full h-fit">Sano</span>
                                        </div>
                                        <div className="mt-2 sm:mt-3 flex gap-2 overflow-x-auto no-scrollbar">
                                            <span className="text-[9px] sm:text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                                                Visita: 12 Oct
                                            </span>
                                            <span className="text-[9px] sm:text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                                                28kg
                                            </span>
                                        </div>
                                    </div>
                                    <ChevronRight className="text-slate-300 group-hover/pet:text-primary transition-colors self-center flex-none" size={16} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SidebarItem({ icon: Icon, active }: { icon: any, active?: boolean }) {
    return (
        <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all",
            active ? "bg-white/10 text-white" : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
        )}>
            <Icon size={20} />
        </div>
    )
}

function ClientCard({ id, name, pets, active, onClick, compact }: { id: number, name: string, pets: number, active: boolean, onClick: (e: React.MouseEvent) => void, compact?: boolean }) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "p-3 rounded-xl border transition-all cursor-pointer",
                active
                    ? "bg-white dark:bg-slate-900 border-primary shadow-md shadow-primary/5 ring-1 ring-primary"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 hover:shadow-sm",
                compact && !active && "opacity-60 hover:opacity-100"
            )}
        >
            <div className="flex items-center gap-3">
                <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors flex-none",
                    active ? "bg-primary text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                )}>
                    {name.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className={cn("text-sm font-bold truncate", active ? "text-primary" : "text-slate-900 dark:text-white")}>{name}</h4>
                    <p className="text-xs text-slate-500">{pets} mascota{pets !== 1 && 's'}</p>
                </div>
                {active && <ChevronRight size={16} className="text-primary flex-none" />}
            </div>
        </div>
    )
}
