"use client";

import { useState, useEffect } from "react";
import { MonitorSmartphone, Workflow, TrendingUp, ArrowRight } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [codeText, setCodeText] = useState("");

  // 1. OTOMATİK DÖNEN SEKME SİSTEMİ (7 Saniyeye Çıkarıldı)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 7000); // 5000 yerine 7000 yapıldı
    return () => clearInterval(interval);
  }, [activeTab]);

  // 2. YAZILAN KOD ANİMASYONU (Web Design sekmesi için)
  const codeSnippet = `import { BSMedia } from '@agency/core';

const agency = new BSMedia({
  mode: 'autonomous',
  performance: 'maximum',
});

// Initiating growth sequence...
await agency.deployAgents();
console.log("ROI maximized. Success!");`;

  useEffect(() => {
    if (activeTab === 0) {
      setCodeText("");
      let i = 0;
      const typing = setInterval(() => {
        setCodeText(codeSnippet.slice(0, i));
        i++;
        if (i > codeSnippet.length) clearInterval(typing);
      }, 30);
      return () => clearInterval(typing);
    }
  }, [activeTab, codeSnippet]);

  const services = [
    {
      id: 0,
      title: "Web Design & Development",
      description: "We build custom, high-converting websites using cutting-edge tech. Fast, responsive, and designed to turn visitors into loyal customers.",
      icon: <MonitorSmartphone className="text-blue-500 mb-4" size={32} />
    },
    {
      id: 1,
      title: "AI Automation & Agents",
      description: "Connect once, run forever. We deploy autonomous AI agents that handle your customer support, CRM entries, and daily repetitive tasks 24/7.",
      icon: <Workflow className="text-purple-500 mb-4" size={32} />
    },
    {
      id: 2,
      title: "Paid Social Marketing",
      description: "Targeted PPC campaigns and data-driven ad strategies across platforms to maximize your ROI and generate high-quality leads on autopilot.",
      icon: <TrendingUp className="text-emerald-500 mb-4" size={32} />
    }
  ];

  return (
    <section id="services" className="relative z-10 w-full max-w-7xl mx-auto py-32 px-6">
      
      {/* Özel Animasyon CSS'leri */}
      <style>{`
        @keyframes drawLine {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        .anim-line {
          stroke-dasharray: 1000;
          animation: drawLine 2s ease-out forwards;
        }
        @keyframes fadeUpIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .anim-node {
          opacity: 0;
          animation: fadeUpIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* Üst Başlıklar */}
      <div className="mb-20 flex flex-col items-center text-center">
        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-4">
          WHAT WE <span className="text-blue-500">DO</span>
        </h2>
        <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base">
          Full-Service Business Marketing Solutions.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        
        {/* SOL TARAF */}
        <div className="w-full lg:w-5/12 flex flex-col gap-4">
          {services.map((service, index) => {
            const isActive = activeTab === index;
            return (
              <div 
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer transition-all duration-500 p-8 rounded-3xl border relative overflow-hidden ${
                  isActive 
                    ? "bg-white/10 border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.15)]" 
                    : "bg-transparent border-transparent hover:bg-white/5"
                }`}
              >
                {/* İlerleme Çubuğu (7 Saniye Olarak Güncellendi) */}
                {isActive && (
                  <div className="absolute top-0 left-0 h-1 bg-blue-500 transition-all ease-linear" style={{ width: '100%', animation: 'progress 7s linear' }}>
                    <style>{`@keyframes progress { 0% { width: 0%; } 100% { width: 100%; } }`}</style>
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isActive ? "text-white" : "text-slate-500"}`}>
                  {service.title}
                </h3>
                
                <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                  <p className="text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* SAĞ TARAF */}
        <div className="w-full lg:w-7/12 h-[450px] bg-[#0a0f1e] border border-white/10 rounded-[2.5rem] relative overflow-hidden flex items-center justify-center shadow-2xl p-8">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full"></div>

          {/* 1. SEÇENEK: KOD YAZMA */}
          <div className={`absolute inset-0 p-8 flex flex-col justify-center transition-all duration-700 ${activeTab === 0 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
            <div className="w-full h-full bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-4 text-xs font-mono text-slate-500">bs-media-agent.ts</span>
              </div>
              <div className="p-6 font-mono text-sm md:text-base text-blue-300 whitespace-pre-wrap overflow-hidden h-full">
                {codeText}<span className="animate-pulse text-white">_</span>
              </div>
            </div>
          </div>

          {/* 2. SEÇENEK: MİNDRA TARZI AI BAĞLANTI (LOGO DÜZELTİLDİ!) */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${activeTab === 1 ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none z-0"}`}>
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6,6" className={activeTab === 1 ? "anim-line" : ""} />
              <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6,6" className={activeTab === 1 ? "anim-line" : ""} />
              <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6,6" className={activeTab === 1 ? "anim-line" : ""} />
              <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6,6" className={activeTab === 1 ? "anim-line" : ""} />
            </svg>

            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* --- YENİ EFSANE KARANLIK MERKEZ KUTU --- */}
              <div className={`absolute z-20 w-44 h-16 bg-[#030712] border border-blue-500/40 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] backdrop-blur-xl ${activeTab === 1 ? "anim-node" : ""}`}>
                <span className="text-xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400">
                  B&S <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]">MEDIA</span>
                </span>
              </div>

              <div className={`absolute top-[18%] left-[10%] w-28 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center ${activeTab === 1 ? "anim-node" : ""}`} style={{animationDelay: '1.2s'}}>
                <span className="text-sm font-semibold text-white">Agent A</span>
              </div>
              <div className={`absolute top-[18%] right-[10%] w-28 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center ${activeTab === 1 ? "anim-node" : ""}`} style={{animationDelay: '1.4s'}}>
                <span className="text-sm font-semibold text-white">Agent B</span>
              </div>
              <div className={`absolute bottom-[12%] left-[20%] w-28 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center ${activeTab === 1 ? "anim-node" : ""}`} style={{animationDelay: '1.6s'}}>
                <span className="text-sm font-semibold text-white">CRM Sync</span>
              </div>
              <div className={`absolute bottom-[12%] right-[20%] w-28 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center ${activeTab === 1 ? "anim-node" : ""}`} style={{animationDelay: '1.8s'}}>
                <span className="text-sm font-semibold text-white">Auto Reply</span>
              </div>

            </div>
          </div>

          {/* 3. SEÇENEK: PAZARLAMA BÜYÜME */}
          <div className={`absolute inset-0 flex items-end justify-center p-12 transition-all duration-700 ${activeTab === 2 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
            <div className="w-full h-full flex items-end justify-between gap-4 border-b-2 border-l-2 border-white/10 pb-0 pl-4 relative">
              <div className={`w-1/4 bg-white/10 rounded-t-xl transition-all duration-1000 ${activeTab === 2 ? "h-[30%]" : "h-0"}`}></div>
              <div className={`w-1/4 bg-blue-500/30 rounded-t-xl transition-all duration-1000 delay-150 ${activeTab === 2 ? "h-[50%]" : "h-0"}`}></div>
              <div className={`w-1/4 bg-blue-500/60 rounded-t-xl transition-all duration-1000 delay-300 ${activeTab === 2 ? "h-[70%]" : "h-0"}`}></div>
              <div className={`w-1/4 bg-blue-600 rounded-t-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-start justify-center pt-4 transition-all duration-1000 delay-500 ${activeTab === 2 ? "h-[95%]" : "h-0"}`}>
                <TrendingUp className="text-white" size={28} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}