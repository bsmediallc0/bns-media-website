import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Ambient from "@/components/Ambient";
import DotSpotlight from "@/components/DotSpotlight";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { BLOG_POSTS } from "@/lib/blogContent";

export const metadata: Metadata = {
  title: "Blog — B&S Media",
  description:
    "Villa, emlak, inşaat ve klinik işletmeleri için sistem ve dijital büyüme yazıları.",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Page() {
  return (
    <main className="relative">
      <Nav />

      <section
        data-nav-tone="dark"
        className="relative flex flex-col overflow-hidden bg-ink"
      >
        <Image
          src="/hero/3.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink/85"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-5 pt-32 pb-20 text-center sm:px-8">
          <p className="mono-label text-sm text-sky">Blog</p>
          <h1 className="font-display mt-6 text-[clamp(2.4rem,6vw,3.6rem)] leading-[1.08] text-white">
            Sistem ve dijital büyüme üzerine.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Villa/emlak vitrini, kentsel dönüşüm takibi, web tasarım ve
            reklam yönetimi üzerine gerçek örneklerden çıkardığımız
            yazılar.
          </p>
        </div>
      </section>

      <section
        data-nav-tone="light"
        className="relative overflow-hidden bg-mist"
      >
        <Ambient variant="light" />
        <DotSpotlight variant="light" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 70} className="h-full">
                <TiltCard className="h-full rounded-3xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex h-full flex-col overflow-hidden rounded-3xl bg-white"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 380px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="mono-label text-xs font-bold tracking-wide text-blue">
                        {post.category}
                      </span>
                      <h2 className="font-display mt-2 text-xl leading-snug text-ink">
                        {post.title}
                      </h2>
                      <p className="mt-2 flex-1 text-[14px] leading-relaxed text-body">
                        {post.excerpt}
                      </p>
                      <p className="mono-label mt-4 text-[11px] text-body/60">
                        {formatDate(post.date)} · {post.readMinutes} dk okuma
                      </p>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
