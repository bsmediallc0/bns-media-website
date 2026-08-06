import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import PageIntro from "@/components/PageIntro";
import "./globals.css";

// Ease Health tarzı editoryal serif — başlıklar için ince ve zarif.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "B&S Media — İşini büyüten dijital sistemler.",
  description:
    "Kurumsal web sitesinden rezervasyon ve teklif sistemlerine — işletmene müşteri kazandıran dijital altyapıyı kuruyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageIntro />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
