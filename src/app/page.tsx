import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Systems from "@/components/Systems";
import SiteVsSystem from "@/components/SiteVsSystem";
import WhyBNS from "@/components/WhyBNS";
import Steps from "@/components/Steps";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyReveal from "@/components/StickyReveal";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <StickyReveal z={0} first>
        <Hero />
      </StickyReveal>
      <StickyReveal z={10}>
        <Problem />
      </StickyReveal>
      <StickyReveal z={20} tone="mist">
        <Systems />
      </StickyReveal>
      <StickyReveal z={30}>
        <SiteVsSystem />
      </StickyReveal>
      <StickyReveal z={40} tone="mist">
        <WhyBNS />
      </StickyReveal>
      <StickyReveal z={50}>
        <Steps />
      </StickyReveal>
      <StickyReveal z={55}>
        <ContactCTA />
      </StickyReveal>
      <StickyReveal z={60} tone="mist">
        <FAQ />
      </StickyReveal>
      <Footer />
    </main>
  );
}
