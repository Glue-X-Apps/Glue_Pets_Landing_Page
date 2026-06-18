"use client"

import Link from "next/link"
import Image from "next/image"
import { PawPrint, Stethoscope } from "lucide-react"

interface HeaderProps {
    mode: 'OWNER' | 'VET'
}

export function Header({ mode }: HeaderProps) {
    const isOwner = mode === 'OWNER';

    return (
        <header className={`
            fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300
            ${isOwner 
                ? 'bg-[#FAF8F5]/80 border-slate-250/30 text-slate-900' 
                : 'bg-[#050B14]/80 border-slate-900/60 text-slate-100'
            }
        `}>
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                
                {/* Left: Brand Logo */}
                <Link href={isOwner ? '/' : '/veterinarias'} className="flex items-center gap-3 group">
                    <div className={`
                        w-10 h-10 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-105
                        ${isOwner ? 'bg-primary/10 border-primary/20' : 'bg-accent/10 border-accent/20'}
                    `}>
                        <Image src="/img/GluePetsLogo.png" alt="GluePets Logo" width={24} height={24} />
                    </div>
                    <span className={`text-xl font-bold tracking-tight ${isOwner ? 'text-slate-900' : 'text-white'}`}>
                        Glue<span className={isOwner ? 'text-primary' : 'text-accent'}>{isOwner ? 'Pets' : 'Vets'}</span>
                    </span>
                </Link>

                {/* Middle: Anchor Navigation (Desktop Only) */}
                <nav className="hidden md:flex items-center gap-8">
                    {isOwner ? (
                        <>
                            <a href="#b2c" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Características</a>
                            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Bienestar</a>
                            <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">FAQ</a>
                        </>
                    ) : (
                        <>
                            <a href="#b2b" className="text-sm font-semibold text-slate-400 hover:text-accent transition-colors">Fidelización</a>
                            <a href="#features" className="text-sm font-semibold text-slate-400 hover:text-accent transition-colors">Herramientas</a>
                            <a href="#plans" className="text-sm font-semibold text-slate-400 hover:text-accent transition-colors">Planes</a>
                        </>
                    )}
                </nav>

                {/* Right: Premium Profile Switcher */}
                <div className="flex items-center gap-4">
                    <div className={`
                        p-1 rounded-full border flex items-center gap-0.5 shadow-inner transition-colors duration-300
                        ${isOwner ? 'bg-slate-200/50 border-slate-300/30' : 'bg-slate-900/60 border-slate-800'}
                    `}>
                        <Link
                            href="/"
                            className={`
                                px-4 py-2 rounded-full flex items-center gap-1.5 font-bold text-xs transition-all duration-300
                                ${isOwner 
                                    ? 'bg-primary text-white shadow-glow' 
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }
                            `}
                        >
                            <PawPrint size={14} className={isOwner ? 'animate-bounce-subtle' : ''} />
                            <span>Dueño</span>
                        </Link>

                        <Link
                            href="/veterinarias"
                            className={`
                                px-4 py-2 rounded-full flex items-center gap-1.5 font-bold text-xs transition-all duration-300
                                ${!isOwner 
                                    ? 'bg-accent text-slate-950 shadow-glow' 
                                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-300/30'
                                }
                            `}
                        >
                            <Stethoscope size={14} />
                            <span>Veterinaria</span>
                        </Link>
                    </div>
                </div>

            </div>
        </header>
    )
}
