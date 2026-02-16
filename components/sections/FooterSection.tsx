"use client"

import Image from "next/image";
import { Instagram } from "lucide-react";

import Link from "next/link";

export function FooterSection({ isActive }: { isActive: boolean }) {
  // Always active in the new layout
  return (
    <footer
      className="w-full py-20 bg-slate-950 border-t border-white/5 relative z-10"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/5">
                <Image src="/img/GluePetsLogo.png" alt="Logo" width={28} height={28} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">GluePets</span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
              La plataforma que une el amor por las mascotas con la ciencia veterinaria.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gluepets"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-slate-400 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@gluepetsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-400 group-hover:text-primary transition-colors"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  <path d="M15 13a3 3 0 1 0 -6 0" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Explora</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors text-left"
                >
                  Para Dueños
                </Link>
              </li>
              <li>
                <Link
                  href="/veterinarias"
                  className="hover:text-accent transition-colors text-left"
                >
                  Para Veterinarias
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 GluePets Inc. Todos los derechos reservados.</p>

        </div>
      </div>
    </footer>
  );
}