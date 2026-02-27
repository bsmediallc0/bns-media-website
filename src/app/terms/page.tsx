"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen bg-[#030712] pt-40 pb-20 px-6 overflow-hidden"
    >
      {/* Arka Plan Efekti */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
            <FileText size={24} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Terms of <span className="text-blue-500">Service</span>
          </h1>
        </div>
        
        <p className="text-slate-400 font-medium mb-12">Last Updated: February 27, 2026</p>

        <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl text-slate-300 space-y-8 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using the B&S Media website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p>B&S Media provides businesses with AI automation, web architecture, and digital growth services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, including the availability of any feature, database, or content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p>The website and its original content, features, and functionality are owned by B&S Media and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. Custom workflows and code built for clients remain the property of the respective clients upon final payment, as detailed in individual service contracts.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p>In no event shall B&S Media, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which B&S Media operates, without regard to its conflict of law provisions.</p>
          </section>

        </div>
      </div>
    </motion.main>
  );
}