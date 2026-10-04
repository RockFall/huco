"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-black tracking-tight">Hu.Co</span>
            <span className="text-xs text-gray-500 hidden sm:block ml-2">Human Company</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/empresa" className="text-sm text-gray-600 hover:text-black transition-colors">A empresa</Link>
            <Link href="/trabalho" className="text-sm text-gray-600 hover:text-black transition-colors">O trabalho</Link>
            <Link href="/equipe" className="text-sm text-gray-600 hover:text-black transition-colors">Quem trabalha aqui</Link>
            <Link href="/vagas" className="text-sm text-gray-600 hover:text-black transition-colors">Vagas</Link>
            <Link href="/contato" className="text-sm text-gray-600 hover:text-black transition-colors">Contato</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/login"
              className="hidden sm:inline-flex text-sm text-gray-600 hover:text-black transition-colors"
            >
              Entrar
            </Link>
            <Link 
              href="/vagas"
              className="bg-[#1e3a5f] text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-[#152a45] transition-colors"
            >
              Quero trabalhar
            </Link>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link href="/empresa" className="text-gray-600 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>A empresa</Link>
              <Link href="/trabalho" className="text-gray-600 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>O trabalho</Link>
              <Link href="/equipe" className="text-gray-600 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>Quem trabalha aqui</Link>
              <Link href="/vagas" className="text-gray-600 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>Vagas</Link>
              <Link href="/contato" className="text-gray-600 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>Contato</Link>
              <Link href="/login" className="text-gray-600 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>Entrar</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
