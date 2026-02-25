"use client"; 

import { motion } from "framer-motion";
import { Terminal, BrainCircuit, Target, Rocket } from "lucide-react";
import Cta from "@/components/Cta";

export default function AboutPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen bg-[#030712] flex flex-col items-center justify-start overflow-x-hidden pt-40 pb-10"
    >
      
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 mb-20">
        {/* Üst Başlık */}
        <div className="mb-20 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-4">
            WHO WE <span className="text-blue-500">ARE</span>
          </h1>
          <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base">
            Engineering the future of marketing.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* SOL TARAF: Manifesto ve Hikaye */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              We don't just run ads. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                We build growth engines.
              </span>
            </h2>
            
            <div className="text-slate-400 text-lg leading-relaxed flex flex-col gap-6 mt-4">
              <p>
                The traditional agency model is broken. It relies on manual labor, guesswork, and outdated tactics that drain your budget. At B&S Media, we approach business growth differently: <strong className="text-white font-medium">like software engineers.</strong>
              </p>
              <p>
                We believe that if a task can be done twice, it should be automated. By combining custom web development, autonomous AI workflows, and data-driven performance marketing, we replace manual effort with flawless, scalable systems.
              </p>
            </div>

            {/* İmzamsı Ufak Bir Vurgu */}
            <div className="mt-6 flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-max backdrop-blur-sm">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-sm font-bold tracking-wider text-slate-300 uppercase">
                Based in Tech • Operating Globally
              </span>
            </div>
          </div>

          {/* SAĞ TARAF: Core Values (Değerlerimiz) Grid'i */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. Kutu */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-300 group shadow-xl hover:border-blue-500/50 hover:scale-105 hover:shadow-2xl hover:z-10 cursor-default">
              <Terminal size={32} className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Tech-First Approach</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We build custom Node.js architectures and robust codebases, ensuring your digital presence is lightning fast and secure.
              </p>
            </div>

            {/* 2. Kutu */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-300 group shadow-xl md:translate-y-8 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:z-10 cursor-default">
              <BrainCircuit size={32} className="text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">AI at the Core</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                From autonomous content generation to 24/7 smart customer support, we inject AI into the heart of your operations.
              </p>
            </div>

            {/* 3. Kutu */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-300 group shadow-xl hover:border-emerald-500/50 hover:scale-105 hover:shadow-2xl hover:z-10 cursor-default">
              <Target size={32} className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Data-Driven ROI</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No vanity metrics. We track, analyze, and optimize for one thing only: maximizing your bottom line.
              </p>
            </div>

            {/* 4. Kutu */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-500/30 transition-all duration-300 group md:translate-y-8 flex flex-col justify-center items-start shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:border-white/50 hover:scale-105 hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:z-10 cursor-default">
              <Rocket size={32} className="text-white mb-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Scale Instantly</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Once our systems are plugged in, your business is ready to handle 10x the volume without breaking a sweat.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sayfanın Sonunda Randevu Butonumuz Çıkacak */}
      <Cta />
      
    </motion.main>
  );
}