"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

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
      // Geçici: gerçek hatayı gösteriyoruz ki "yanlış şifre" mi yoksa
      // ağ/CORS/proje bağlantısı gibi başka bir sorun mu ayırt edebilelim.
      setError(`${signInError.message} (status: ${signInError.status ?? "?"})`);
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
    <main className="flex min-h-dvh items-center justify-center bg-ink px-5">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-3xl bg-white p-8">
        <span className="font-display text-xl text-ink">B&amp;S Media</span>
        <h1 className="font-display mt-2 text-2xl text-ink">Panele giriş</h1>

        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="mono-label text-xs text-body">
              E-posta
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink focus:border-blue focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="mono-label text-xs text-body">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink focus:border-blue focus:outline-none"
            />
          </div>
        </div>

        {error && <p className="mt-4 text-[13px] leading-relaxed text-[#B4423B]">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="chamfer mt-6 w-full bg-ink py-3.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-navy-2 disabled:opacity-60"
        >
          {loading ? "Giriş yapılıyor..." : "Giriş yap"}
        </button>
      </form>
    </main>
  );
}
