import { ArrowUpRight, MonitorSmartphone, Zap, Bot } from "lucide-react";

export default function Work() {
  return (
    <section id="work" className="relative z-10 w-full max-w-7xl mx-auto py-32 px-6">
      
      {/* Üst Başlıklar */}
      <div className="mb-20 flex flex-col items-center text-center">
        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-4">
          PROVEN <span className="text-blue-500">SYSTEMS</span>
        </h2>
        <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base">
          Plug-and-play digital platforms & AI workflows.
        </p>
      </div>

      {/* BENTO BOX GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
        
        {/* SOL BÜYÜK KART (Web Tasarım & Geliştirme - SENİN ANA GÜCÜN) */}
        <div className="lg:col-span-7 group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 cursor-pointer flex flex-col justify-between p-8 md:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700"></div>
          
          <div className="relative z-10 flex justify-between items-start">
            <div className="p-4 bg-blue-600/20 text-blue-400 rounded-2xl backdrop-blur-md border border-blue-500/20">
              <MonitorSmartphone size={32} />
            </div>
            <div className="w-12 h-12 bg-white text-[#030712] rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <ArrowUpRight size={24} className="font-bold" />
            </div>
          </div>

          <div className="relative z-10 mt-32 lg:mt-0">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-300 bg-white/10 rounded-full border border-white/10">Web Dev</span>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">High-Converting</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
              Custom AI-Integrated Websites
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              We don't just build stunning websites. We engineer high-performance digital storefronts embedded with AI chatbots, automated booking systems, and seamless payment gateways.
            </p>
          </div>
        </div>

        {/* SAĞ TARAF (2 Küçük Kart) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* SAĞ ÜST KART (CRM ve Lead Gen) */}
          <div className="flex-1 group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-600/20 transition-all duration-700"></div>
            
            <div className="absolute top-8 left-8 p-3 bg-emerald-600/20 text-emerald-400 rounded-xl backdrop-blur-md border border-emerald-500/20">
              <Zap size={24} />
            </div>

            <div className="relative z-10 mt-20">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 rounded-full border border-emerald-500/20">Lead Gen</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors">
                Smart CRM Pipeline
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect your inbound leads directly to an AI that qualifies them, scores their budget, and books meetings directly into your calendar.
              </p>
            </div>
          </div>

          {/* SAĞ ALT KART (Pazarlama & Sosyal Medya) */}
          <div className="flex-1 group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-600/20 transition-all duration-700"></div>
            
            <div className="absolute top-8 left-8 p-3 bg-purple-600/20 text-purple-400 rounded-xl backdrop-blur-md border border-purple-500/20">
              <Bot size={24} />
            </div>

            <div className="relative z-10 mt-20">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20">Marketing</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight group-hover:text-purple-400 transition-colors">
                Content Autopilot
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                AI workflows that scrape trending topics, generate high-converting ad copies, and automatically schedule posts across all your social channels.
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className="mt-16 flex justify-center">
        {/* BU BUTONU DA MAİL ATMAYA BAĞLADIK */}
        <a href="mailto:info@bnsmedia.co?subject=Custom%20Demo%20Request%20-%20B%26S%20Media" className="px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-[#030712] transition-all duration-300">
          Request a Custom Demo
        </a>
      </div>

    </section>
  );
}