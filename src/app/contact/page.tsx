"use client"; 

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Zap } from "lucide-react";

export default function ContactPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen bg-[#030712] pt-40 pb-20 px-6 overflow-hidden"
    >
      
      {/* Arka Plan Efektleri */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* SOL TARAF: Başlık ve Bilgiler */}
          <div className="w-full lg:w-5/12 flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase border rounded-full bg-blue-500/10 border-blue-500/20 text-blue-400">
                <Zap size={14} />
                Get In Touch
              </div>
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-white mb-6">
                LET'S <span className="text-blue-500">TALK</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Have a project in mind? Looking to automate your business with AI? 
                Drop us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              {/* İletişim Kartları */}
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg font-bold text-white">info@bnsmedia.co</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Live Chat</p>
                  <p className="text-lg font-bold text-white">Available on WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF: Contact Form */}
          <div className="w-full lg:w-7/12">
            <div className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-400 ml-2 italic">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-400 ml-2 italic">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-400 ml-2 italic">Subject</label>
                  <input 
                    type="text" 
                    placeholder="AI Automation Inquiry" 
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-400 ml-2 italic">Your Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Tell us about your project..." 
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full mt-4 flex items-center justify-center gap-3 px-10 py-5 font-bold text-white transition-all bg-blue-600 rounded-2xl hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.3)] text-lg group"
                >
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </motion.main>
  );
}