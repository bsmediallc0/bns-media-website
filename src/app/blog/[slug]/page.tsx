import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { BLOG_POSTS, getBlogPost } from "@/lib/blogContent";
import { waLink } from "@/lib/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Yazı bulunamadı — B&S Media" };
  return {
    title: `${post.title} — B&S Media`,
    description: post.excerpt,
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="relative">
      <Nav />

      <section
        data-nav-tone="dark"
        className="relative flex flex-col overflow-hidden bg-ink"
      >
        <Image
          src={post.coverImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/90"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-5 pt-32 pb-20 text-center sm:px-8">
          <Link
            href="/blog"
            className="mono-label text-sm text-sky hover:text-white"
          >
            ← Blog
          </Link>
          <span className="mono-label mt-6 text-xs font-bold tracking-wide text-sky">
            {post.category}
          </span>
          <h1 className="font-display mt-4 text-[clamp(2rem,5.5vw,3.2rem)] leading-[1.12] text-white">
            {post.title}
          </h1>
          <p className="mono-label mt-6 text-xs text-white/50">
            {formatDate(post.date)} · {post.readMinutes} dk okuma
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream">
        <div className="relative mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="text-lg leading-relaxed text-body">{post.intro}</p>
          </Reveal>

          {post.sections.map((section, i) => (
            <Reveal key={section.heading} delay={(i + 1) * 60}>
              <div className="mt-12">
                <h2 className="font-display text-2xl text-ink sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p, pi) => (
                    <p
                      key={pi}
                      className="text-base leading-relaxed text-body"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={(post.sections.length + 1) * 60}>
            <div className="mt-14 rounded-3xl bg-mist p-7 sm:p-8">
              <p className="text-base leading-relaxed text-ink">
                {post.closing}
              </p>
              <a
                href={waLink(
                  `Merhaba, "${post.title}" yazısını okudum, ${post.category.toLowerCase()} hakkında konuşmak istiyorum.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="chamfer wa-pulse mt-6 inline-flex items-center gap-2 bg-wa px-6 py-3.5 text-sm font-medium text-wa-ink transition-colors duration-150 hover:bg-[#1fbd5a]"
              >
                WhatsApp&apos;tan yaz
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative overflow-hidden bg-mist">
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <span className="mono-label text-xs font-bold tracking-wide text-blue">
              Diğer yazılar
            </span>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card-hover flex flex-col overflow-hidden rounded-3xl bg-white"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={p.coverImage}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 380px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <span className="mono-label text-[11px] font-bold tracking-wide text-blue">
                      {p.category}
                    </span>
                    <h3 className="font-display mt-1.5 text-base leading-snug text-ink">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
