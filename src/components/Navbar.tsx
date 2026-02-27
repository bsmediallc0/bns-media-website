"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // YENİ: Next.js'in efsane resim motorunu ekledik
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* YENİ LOGO KISMI BURASI */}
        <Link href="/" onClick={closeMenu} className="flex items-center hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.svg" 
            alt="B&S Media Logo" 
            width={180} 
            height={50} 
            className="w-auto h-8 md:h-10" // Mobilde biraz daha küçük (h-8), bilgisayarda tam boy (h-10)
            priority
          />
        </Link>

        {/* BİLGİSAYAR MENÜSÜ */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Contact Us</Link>
          <Link href="/about" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">About</Link>
        </nav>

        {/* SAĞ TARAF */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] text-sm"
          >
            Book a Demo
          </Link>
          
          {/* MOBİL HAMBURGER İKONU */}
          <button 
            className="md:hidden text-slate-300 hover:text-white transition-colors p-1" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBİL AÇILIR MENÜ */}
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