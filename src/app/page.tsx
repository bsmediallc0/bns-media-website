"use client";

import { motion } from "framer-motion";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Work from "@/components/Work";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      // DİKKAT: Buradan px-6'yı sildik ki arka plan şeritleri ekranın sonuna kadar uzasın
      className="relative min-h-screen bg-[#030712] flex flex-col items-center overflow-x-hidden"
    >
      
      {/* --- DALGA / IŞIK EFEKTİ --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none flex justify-center items-center z-0">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-wave"></div>
        <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-[#1e0a8c]/30 rounded-full mix-blend-screen filter blur-[100px] animate-wave animation-delay-2000"></div>
        <div className="absolute -bottom-[10%] left-[30%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full mix-blend-screen filter blur-[150px] animate-wave animation-delay-4000"></div>
      </div>

      {/* HERO (GİRİŞ) BÖLÜMÜ - Orijinal Koyu Renk */}
      <section className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center pt-40 md:pt-60 pb-20 px-6">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[11px] font-bold tracking-[0.2em] uppercase border rounded-full bg-blue-500/10 border-blue-500/20 text-blue-400 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          AI-Driven Growth Partner
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="text-[50px] md:text-[100px] font-extrabold tracking-tighter leading-[0.9] text-white mb-8"
        >
          Scale Your Business <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-600">
            with AI Flows
          </span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-slate-200 mb-6"
        >
          Automate production. Multiply your impact.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-2xl text-lg text-slate-400 mb-12 font-medium"
        >
          We build custom AI workflows that transform how you create content and manage digital operations. Stop doing repetitive tasks manually—let B&S Media systemize your success.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center w-full"
        >
          <Link href="/contact" className="flex items-center gap-3 px-10 py-5 font-bold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.4)] text-lg">
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* 1. HİZMETLER BÖLÜMÜ - Hafif Açık Şerit */}
      <section className="w-full bg-white/[0.02] border-y border-white/5 py-10">
        <Services />
      </section>

      {/* 2. PROJELER BÖLÜMÜ - Orijinal Koyu Arka Plan */}
      <section className="w-full py-10">
        <Work />
      </section>

      {/* 3. İSTATİSTİKLER BÖLÜMÜ - Hafif Açık Şerit */}
      <section className="w-full bg-white/[0.02] border-y border-white/5 py-10">
        <Stats />
      </section>

      {/* 4. RANDEVU (CTA) BÖLÜMÜ - Orijinal Koyu Arka Plan */}
      <section className="w-full py-10">
        <Cta />
      </section>

      {/* 5. SIK SORULAN SORULAR - Hafif Açık Şerit */}
      <section className="w-full bg-white/[0.02] border-t border-white/5 py-10">
        <Faq />
      </section>

    </motion.main>
  );
}