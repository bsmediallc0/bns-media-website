// src/app/layout.tsx

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "B&S Media | AI Content Production",
  description: "Redefining the future of content with AI-driven production.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.className} antialiased bg-[#030712] text-white`}>
        <Navbar />
        {/* Animasyon sarmalayıcısını buradan çıkardık, karmaşa bitti */}
        {children}
        <Footer />
      </body>
    </html>
  );
}