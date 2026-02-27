"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
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
            <Shield size={24} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
        </div>
        
        <p className="text-slate-400 font-medium mb-12">Last Updated: February 27, 2026</p>

        <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl text-slate-300 space-y-8 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>Welcome to B&S Media. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. The Data We Collect</h2>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400 marker:text-blue-500">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you. Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:info@bnsmedia.co" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">info@bnsmedia.co</a>.</p>
          </section>

        </div>
      </div>
    </motion.main>
  );
}