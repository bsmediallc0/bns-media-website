import Link from 'next/link';
import Image from 'next/image'; // YENİ: Logomuz için Image motorunu çağırdık
import { Mail } from 'lucide-react'; // Cpu ikonunu uçurduk, sadece Mail kaldı

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#030712] pt-20 pb-10 px-6 overflow-hidden">
      
      {/* Hafif arka plan parlaması */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-16">
        
        {/* Sol Kısım: Yeni SVG Logo ve Açıklama */}
        <div className="w-full md:w-5/12 flex flex-col gap-6">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity w-max">
            <Image 
              src="/logo.svg" 
              alt="B&S Media Logo" 
              width={180} 
              height={50} 
              className="w-auto h-8 md:h-10" 
            />
          </Link>
          <p className="text-slate-400 text-base leading-relaxed pr-4 font-medium">
            Stop doing repetitive tasks manually. We build custom AI workflows and performance marketing systems to scale your business on autopilot.
          </p>
          
          <a href="mailto:info@bnsmedia.co" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-all w-max text-base font-bold mt-2 group">
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all">
                <Mail size={18} className="group-hover:text-blue-400" />
            </div>
            info@bnsmedia.co
          </a>
        </div>

        {/* Sağ Kısım: Navigation Linkleri */}
        <div className="w-full md:w-7/12 flex flex-wrap md:justify-end gap-16 md:gap-32">
          
          <div className="flex flex-col">
            <h4 className="text-white text-lg font-bold tracking-tight mb-6">Navigation</h4>
            <div className="flex flex-col gap-5 text-base font-medium text-slate-400">
              <a href="/#work" className="hover:text-white hover:translate-x-1 transition-all">Our Work</a>
              <a href="/#services" className="hover:text-white hover:translate-x-1 transition-all">Services</a>
              <Link href="/about" className="hover:text-white hover:translate-x-1 transition-all">About Us</Link>
              <a href="/#faq" className="hover:text-white hover:translate-x-1 transition-all">FAQ</a>
            </div>
          </div>

        </div>
      </div>

      {/* En Alt Kısım: Copyright ve Yasal Sayfalar */}
      <div className="relative z-10 max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-500">
        <p>© 2026 B&S Media. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}