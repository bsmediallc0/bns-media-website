"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

// YENİ EKLENEN SİHİRLİ SATIR: Verileri merkezi dosyadan çekiyoruz
import { blogPosts } from "@/lib/blogData";

// Yeni Next.js için params artık Promise olarak tanımlanıyor
export default function BlogPostDetail({ params }: { params: Promise<{ id: string }> }) {
  // Promise'i use() ile çözüyoruz
  const resolvedParams = use(params);
  
  // URL'den gelen ID'ye göre doğru yazıyı merkezden buluyoruz
  const post = blogPosts.find((p) => p.id === parseInt(resolvedParams.id));

  // Eğer URL'ye saçma sapan bir ID yazılırsa 404 sayfasına atıyoruz
  if (!post) {
    return notFound();
  }

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen bg-[#030712] pt-40 pb-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Geri Dön Butonu */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group font-medium"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to all articles
        </Link>

        {/* Yazı Başlığı ve Meta Bilgiler */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            <span className="px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/20">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              {post.date}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            {post.title}
          </h1>
        </div>

        {/* Hero Görseli */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden mb-16 shadow-2xl border border-white/10">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Yazı İçeriği */}
        <div className="prose prose-lg prose-invert max-w-none flex flex-col gap-8 text-slate-300 leading-relaxed font-medium">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Alt Kısım: Paylaş & Etkileşim */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-slate-400 font-medium">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
              <span className="font-bold">B&S</span>
            </div>
            <div>
              <p className="text-white font-bold">Written by B&S Media</p>
              <p className="text-sm">Engineering the future.</p>
            </div>
          </div>
          
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all group">
            <Share2 size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
            Share Article
          </button>
        </div>

      </div>
    </motion.main>
  );
}