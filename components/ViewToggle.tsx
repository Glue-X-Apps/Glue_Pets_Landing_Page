import Link from "next/link";
import { PawPrint, Stethoscope } from "lucide-react"

interface ViewToggleProps {
    mode: 'OWNER' | 'VET';
}

export function ViewToggle({ mode }: ViewToggleProps) {
    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-black/40 backdrop-blur-xl p-1.5 rounded-full border border-white/10 flex items-center gap-1 shadow-2xl">
                <Link
                    href="/"
                    className={`
            relative px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 font-medium text-sm
            ${mode === 'OWNER' ? 'bg-primary text-white shadow-glow' : 'text-slate-400 hover:text-white hover:bg-white/5'}
          `}
                >
                    <PawPrint size={16} className={mode === 'OWNER' ? 'animate-bounce-subtle' : ''} />
                    Soy Dueño
                </Link>

                <Link
                    href="/veterinarias"
                    className={`
            relative px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 font-medium text-sm
            ${mode === 'VET' ? 'bg-accent text-accent-foreground shadow-glow' : 'text-slate-400 hover:text-white hover:bg-white/5'}
          `}
                >
                    <Stethoscope size={16} />
                    Soy Veterinaria
                </Link>
            </div>
        </div>
    )
}
