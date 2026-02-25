import { CalendarCheck, Sparkles } from "lucide-react";

export default function Cta() {
  // Senin özel Calendly linkini buraya tanımladık
  const calendlyLink = "https://calendly.com/bsmediallc0/book-now";

  return (
    <section className="relative w-full max-w-6xl mx-auto py-24 px-6 mb-20">
      
      {/* Göz alıcı arka plan kutusu */}
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-b from-[#0a1128] to-[#030712] border border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.15)] p-12 md:p-20 text-center flex flex-col items-center">
        
        {/* Arka plan ışık efektleri */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        {/* İçerik */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[11px] font-bold tracking-[0.2em] uppercase border rounded-full bg-blue-500/10 border-blue-500/20 text-blue-400">
          <Sparkles size={14} />
          Limited Onboarding Slots
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 relative z-10">
          Ready to put your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-600">
            growth on autopilot?
          </span>
        </h2>

        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-12 relative z-10">
          Stop wasting hours on repetitive tasks and inefficient marketing. Book a free discovery call and let's map out a custom AI workflow for your business.
        </p>

        {/* CALENDLY ENTEGRASYONLU BUTON */}
        <a 
          href={calendlyLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="relative z-10 flex items-center gap-3 px-10 py-5 font-bold text-white transition-all bg-blue-600 rounded-2xl hover:bg-blue-500 hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.5)] text-lg group"
        >
          <CalendarCheck size={24} className="group-hover:rotate-12 transition-transform" />
          Book Your Free Call
        </a>

      </div>
    </section>
  );
}