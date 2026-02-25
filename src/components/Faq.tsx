"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  // B&S Media'ya özel güncellenmiş ve yeni soru eklenmiş SSS Listesi
  const faqData = [
    {
      question: "How long does it take to see results from AI Automation?",
      answer: "Most clients start seeing initial time-savings within the first 2 weeks of deployment. Full ROI and significant workflow improvements typically occur at the 1-2 month mark as the AI agents fully adapt to your CRM and operations."
    },
    {
      question: "What makes B&S Media different from other agencies?",
      answer: "We don't just run traditional ads. We build autonomous AI systems that manage your leads, create content at scale, and handle customer support 24/7. We are a tech-first growth partner, not just a marketing agency."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No. We believe in earning your business every month. While AI models perform best with continuous optimization, we offer flexible month-to-month retainers and transparent one-off project fees."
    },
    {
      question: "How much do your AI & Marketing services cost?",
      answer: "Our solutions are custom-tailored to your business needs. Simple automations start at a flat rate, while full-scale AI agent deployments and paid social management are priced based on the scope. Book a discovery call for a precise quote."
    },
    {
      question: "How do you track and report results?",
      answer: "We provide detailed monthly reports showing your AI workflow performance, traffic, leads, and ROI. You'll also have access to a real-time dashboard where you can see your campaign metrics anytime. We believe in complete transparency and accountability."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section id="faq" className="relative z-10 w-full max-w-4xl mx-auto py-32 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-4">
          ANY <span className="text-blue-500">QUESTIONS?</span>
        </h2>
        <p className="text-slate-400 font-medium text-lg">
          Everything you need to know about our services and AI workflows.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? "bg-white/10 shadow-[0_0_20px_rgba(37,99,235,0.1)]" : "bg-white/5 hover:bg-white/10"
              } backdrop-blur-md`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${isOpen ? "text-blue-400" : "text-white"}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${isOpen ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-slate-400"}`}>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-slate-300 leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}