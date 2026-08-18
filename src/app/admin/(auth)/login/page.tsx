"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const WAVE_PATH =
  "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

function WaveLayer({
  className,
  color,
  opacity,
}: {
  className: string;
  color: string;
  opacity: number;
}) {
  return (
    <svg
      className={`absolute bottom-0 left-0 h-full w-[200%] ${className}`}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={WAVE_PATH} fill={color} opacity={opacity} />
      <path
        d={WAVE_PATH}
        fill={color}
        opacity={opacity}
        transform="translate(1440, 0)"
      />
    </svg>
  );
}

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = getSupabaseBrowserClient();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!supabase) {
      setError("Supabase henüz bağlı değil. Önce .env.local dosyasına proje bilgilerini ekle.");
      return;
    }

    setLoading(true);
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (signInError) {
      setError("E-posta veya şifre yanlış.");
      return;
    }

    // app.bnsmedia.co gibi bir alt alan adındaysak URL'de /admin hiç
    // görünmemeli — girişten sonra köke dönüyoruz, middleware bunu içeride
    // /admin'e çeviriyor.
    const isAppSubdomain = window.location.hostname.startsWith("app.");
    router.push(isAppSubdomain ? "/" : "/admin");
    router.refresh();
  };

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-ink px-5">
      {/* Yavaş kayan dalga katmanları */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(62,134,232,0.25), transparent), #142136",
          }}
        />
        <WaveLayer className="login-wave-1" color="#1D5BBF" opacity={0.35} />
        <WaveLayer className="login-wave-2" color="#3E86E8" opacity={0.2} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="liquid-glass relative z-10 w-full max-w-sm rounded-3xl p-8 backdrop-blur-xl"
      >
        <span className="font-display text-xl text-white">B&amp;S Media</span>
        <h1 className="font-display mt-2 text-2xl text-white">Panele giriş</h1>

        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="mono-label text-xs text-white/60">
              E-posta
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-sky focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="mono-label text-xs text-white/60">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-sky focus:outline-none"
            />
          </div>
        </div>

        {error && (
          <p className="mt-4 text-[13px] leading-relaxed text-[#ff9b93]">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="chamfer mt-6 w-full bg-white py-3.5 text-sm font-medium text-ink transition-colors duration-150 hover:bg-white/85 disabled:opacity-60"
        >
          {loading ? "Giriş yapılıyor..." : "Giriş yap"}
        </button>
      </form>
    </main>
  );
}
