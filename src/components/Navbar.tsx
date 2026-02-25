"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  // Mobil menünün açık/kapalı durumunu tutuyoruz
  const [isOpen, setIsOpen] = useState(false);

  // Linke tıklayınca menü otomatik kapansın diye ufak bir fonksiyon
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-black text-white tracking-tighter" onClick={closeMenu}>
          B&S<span className="text-blue-500">MEDIA</span>
        </Link>

        {/* BİLGİSAYAR MENÜSÜ (Mobilde Gizli) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Contact Us</Link>
          <Link href="/about" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">About</Link>
        </nav>

        {/* SAĞ TARAF: Randevu Butonu ve Mobil Menü İkonu */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] text-sm"
          >
            Book a Demo
          </Link>
          
          {/* SADECE MOBİLDE GÖRÜNEN HAMBURGER İKONU */}
          <button 
            className="md:hidden text-slate-300 hover:text-white transition-colors p-1" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBİL AÇILIR MENÜ (Framer Motion ile Süzülerek İner) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#030712] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              <Link href="/blog" onClick={closeMenu} className="text-xl font-bold text-slate-300 hover:text-blue-400 transition-colors">
                Blog
              </Link>
              <Link href="/contact" onClick={closeMenu} className="text-xl font-bold text-slate-300 hover:text-blue-400 transition-colors">
                Contact Us
              </Link>
              <Link href="/about" onClick={closeMenu} className="text-xl font-bold text-slate-300 hover:text-blue-400 transition-colors">
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}