"use client";

import { useState, type FormEvent } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type Status = "idle" | "submitting" | "sent";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setError("Devam etmek için kişisel verilerin işlenmesine onay vermen gerekiyor.");
      return;
    }
    setError("");
    setStatus("submitting");

    const supabase = getSupabaseBrowserClient();
    if (supabase) {
      const { error: insertError } = await supabase.from("leads").insert({
        source: "lead_form",
        name,
        phone,
        email,
        message,
        meta: { path: window.location.pathname },
      });
      if (insertError) {
        setError("Bir şeyler ters gitti, lütfen tekrar dene.");
        setStatus("idle");
        return;
      }
    }

    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-white p-8 text-center sm:p-10">
        <div className="chamfer flex h-12 w-12 items-center justify-center bg-tint">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D5BBF" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-display mt-5 text-2xl text-ink">Talebin bize ulaştı.</p>
        <p className="mt-2 max-w-xs text-[15px] text-body">
          Anında seninle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-7 sm:p-8">
      <h3 className="font-display text-xl text-ink sm:text-2xl">Ücretsiz Fiyat Teklifi Al</h3>
      <p className="mt-1.5 text-[14px] text-body">Sana özel teklifle anında dönüş yapıyoruz.</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ad Soyad"
          className="rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none"
        />
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="0 (5XX) XXX XX XX"
          className="rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none"
        />
      </div>

      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-posta adresin"
        className="mt-3 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none"
      />

      <textarea
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Projen hakkında kısaca bilgi ver... (opsiyonel)"
        className="mt-3 w-full resize-none rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none"
      />

      <label className="mt-4 flex items-start gap-2.5 text-[12.5px] leading-relaxed text-body">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            if (e.target.checked) setError("");
          }}
          className="mt-0.5 h-4 w-4 shrink-0 accent-blue"
        />
        Kişisel verilerimin işlenmesine ilişkin Aydınlatma Metni&apos;ni okudum ve
        bilgilendirildim.
      </label>

      {error && <p className="mt-2 text-[12.5px] text-[#B4423B]">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="chamfer mt-5 w-full bg-ink py-3.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-navy-2 disabled:opacity-60"
      >
        {status === "submitting" ? "Gönderiliyor..." : "Ücretsiz Teklif Al"}
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-body/60">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
        Bilgilerin gizli tutulur · Taahhüt yok
      </p>
    </form>
  );
}
