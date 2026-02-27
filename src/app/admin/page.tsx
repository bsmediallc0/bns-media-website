"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, Briefcase, CheckCircle2, Circle, Trash2, Lock, Key, ArrowRight, UserCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  // --- GERÇEK KİMLİK DOĞRULAMA (AUTH) STATE'LERİ ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false); // Giriş yapılıyor efekti için
  const [loginError, setLoginError] = useState("");

  // --- VERİ STATE'LERİ ---
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. Sayfa açıldığında Supabase'e "Bu adam zaten giriş yapmış mı?" diye sor
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
      }
    };
    checkSession();
  }, []);

  // 2. Giriş yapılmışsa verileri çek
  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages();
    }
  }, [isAuthenticated]);

  const fetchMessages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setMessages(data);
    setLoading(false);
  };

  // 3. Supabase ile Gerçek Giriş İşlemi
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setLoginError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailInput,
      password: passwordInput,
    });

    setIsAuthenticating(false);

    if (error) {
      setLoginError("Geçersiz e-posta veya şifre.");
      setPasswordInput(""); // Hatalıysa şifreyi temizle
    } else if (data.session) {
      setIsAuthenticated(true);
    }
  };

  // 4. Supabase ile Çıkış Yapma (Kilitleme)
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setEmailInput("");
    setPasswordInput("");
  };

  const toggleReadStatus = async (id: number, currentStatus: boolean) => {
    setMessages(messages.map(msg => msg.id === id ? { ...msg, is_read: !currentStatus } : msg));
    await supabase.from("contacts").update({ is_read: !currentStatus }).eq("id", id);
  };

  const deleteMessage = async (id: number) => {
    if (confirm("Emin misin patron? Bu mesaj kalıcı olarak silinecek.")) {
      setMessages(messages.filter(msg => msg.id !== id));
      await supabase.from("contacts").delete().eq("id", id);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // ------------------------------------------------------------------
  // EĞER GİRİŞ YAPILMADIYSA: GERÇEK SUPABASE KİLİT EKRANI
  // ------------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mb-6 text-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Secure Login</h1>
          <p className="text-slate-400 text-sm mb-8 font-medium">Verify your identity to access the command center.</p>

          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            {/* E-POSTA ALANI */}
            <div className="relative">
              <UserCircle size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                required
                type="email" 
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Admin Email" 
                className={`w-full bg-black/30 border ${loginError ? 'border-red-500' : 'border-white/10'} rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium`}
              />
            </div>

            {/* ŞİFRE ALANI */}
            <div className="relative">
              <Key size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                required
                type="password" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Password" 
                className={`w-full bg-black/30 border ${loginError ? 'border-red-500' : 'border-white/10'} rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium tracking-widest`}
              />
            </div>
            
            {loginError && <p className="text-red-400 text-xs font-bold animate-bounce mt-1">{loginError}</p>}
            
            <button 
              type="submit" 
              disabled={isAuthenticating}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 group mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isAuthenticating ? "Verifying..." : "Unlock System"}
              {!isAuthenticating && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <Link href="/" className="mt-8 text-xs font-bold text-slate-500 hover:text-slate-300 transition-colors">
            &larr; Return to main site
          </Link>
        </motion.div>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // EĞER GİRİŞ YAPILDIYSA: ASIL YÖNETİM PANELİ
  // ------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 px-6 md:px-12 pt-32 md:pt-40 pb-12 font-sans selection:bg-blue-500/30">
      
      {/* Üst Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-12 gap-6 relative z-10">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">
            B&S Media <span className="text-blue-500">Command Center</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium">Manage your incoming leads and growth pipelines.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-bold text-white">System Online</span>
          </div>
          {/* ÇIKIŞ YAP BUTONU */}
          <button 
            onClick={handleLogout} 
            className="px-4 py-2 text-sm font-bold bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-slate-300 border border-white/10 hover:border-red-500/30 rounded-xl transition-all"
          >
            Lock System
          </button>
        </div>
      </div>

      {/* Mesajlar Tablosu */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative z-10"
      >
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-12 text-center text-blue-500 font-bold animate-pulse">Decrypting secure data...</div>
          ) : messages.length === 0 ? (
            <div className="p-12 text-center text-slate-500">No messages yet. Waiting for incoming leads.</div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500">Status</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500">Client</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500">Phone</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500">Service</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500">Message</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500">Date</th>
                  <th className="p-6"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {messages.map((msg) => (
                  <tr key={msg.id} className={`hover:bg-white/[0.04] transition-colors ${!msg.is_read ? 'bg-blue-900/10' : ''}`}>
                    
                    <td className="p-6">
                      <button onClick={() => toggleReadStatus(msg.id, msg.is_read)} className="focus:outline-none hover:scale-110 transition-transform">
                        {msg.is_read ? <CheckCircle2 size={24} className="text-slate-600" /> : <Circle size={24} className="text-blue-500 fill-blue-500/20" />}
                      </button>
                    </td>

                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
                          {msg.name.charAt(0)}
                        </div>
                        <div>
                          <p className={`font-bold ${!msg.is_read ? 'text-white' : 'text-slate-300'}`}>{msg.name}</p>
                          <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                            <Mail size={12} /> {msg.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-6 whitespace-nowrap">
                      <p className="text-sm font-bold text-slate-300">{msg.phone || 'N/A'}</p>
                    </td>

                    <td className="p-6">
                      <span className="inline-flex w-max items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold">
                        <Briefcase size={12} /> {msg.service}
                      </span>
                    </td>

                    <td className="p-6 max-w-xs">
                      <p className={`text-sm leading-relaxed line-clamp-3 ${!msg.is_read ? 'text-slate-200 font-medium' : 'text-slate-400'}`}>
                        {msg.message}
                      </p>
                    </td>

                    <td className="p-6 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        <Calendar size={14} /> {formatDate(msg.created_at)}
                      </div>
                    </td>

                    <td className="p-6 text-right">
                      <button onClick={() => deleteMessage(msg.id)} className="text-slate-600 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </motion.div>
    </div>
  );
}