"use client"; 

import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

// YENİ EKLENEN SİHİRLİ SATIR: Verileri merkezi dosyadan çekiyoruz
import { blogPosts } from "@/lib/blogData"; 

export default function BlogPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen bg-[#030712] pt-40 pb-20 px-6"
    >
      
      {/* Üst Başlık */}
      <div className="relative z-10 max-w-7xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase border rounded-full bg-blue-500/10 border-blue-500/20 text-blue-400">
          <BookOpen size={14} />
          Knowledge Hub
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-6">
          OUR <span className="text-blue-500">INSIGHTS</span>
        </h1>
        <p className="max-w-2xl text-slate-400 text-lg md:text-xl font-medium">
          Deep dives into AI, automation, and the future of digital business. We share our engineering secrets to help you scale.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="group relative flex flex-col bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl">
            {/* Görsel Alanı */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                {post.category}
              </div>
            </div>

            {/* İçerik Alanı */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold mb-4 uppercase tracking-widest">
                <Calendar size={14} />
                {post.date}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>
              
              <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-white font-bold text-sm group/link">
                Read Full Article 
                <ArrowRight size={18} className="text-blue-500 group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Arka Plan Efekti */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
    </motion.main>
  );
}