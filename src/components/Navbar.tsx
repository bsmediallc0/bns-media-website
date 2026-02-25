"use client"; // Çok önemli! Kaydırma hareketini dinlemek için bunu en üste yazmalıyız.

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Sayfa aşağı kaydığında (20px'den fazla) menünün durumunu değiştiriyoruz
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300">
      <div className={`flex items-center justify-between px-8 py-5 rounded-2xl transition-all duration-500 ${
        isScrolled 
          ? "bg-[#030712]/80 backdrop-blur-xl border border-white/10 shadow-2xl" 
          : "bg-transparent border-transparent"
      }`}>
        
        {/* Sol Kısım: Logo (text-xl'den text-2xl'ye büyütüldü) */}
        <Link href="/" className="text-2xl font-extrabold tracking-tighter text-white">
          B&S <span className="text-blue-500">MEDIA</span>
        </Link>

        {/* Orta Kısım: Linkler */}
        <div className="hidden md:flex items-center gap-10 text-base font-semibold text-slate-300">
          {/* Work yerine Blog geldi */}
          <Link href="/blog" className="hover:text-white hover:scale-105 transition-all">Blog</Link>
          <Link href="/contact" className="hover:text-white hover:scale-105 transition-all">Contact Us</Link>
          <Link href="/about" className="hover:text-white hover:scale-105 transition-all">About Us</Link>
        </div>
        {/* Sağ Kısım: CTA Butonu (Yazı boyutu ve butonun kendisi biraz büyütüldü) */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-500 hover:scale-105 transition-all text-base shadow-[0_0_15px_rgba(37,99,235,0.4)]">
          Book a Demo
        </button>
        
      </div>
    </nav>
  );
}