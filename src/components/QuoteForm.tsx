"use client";

import { useState, type FormEvent } from "react";
import { SERVICES, SYSTEMS, waLink } from "@/lib/site";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const ALL_OPTIONS = [...SYSTEMS, ...SERVICES];

export default function QuoteForm() {
  const [choiceId, setChoiceId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Asıl iletişim kanalı WhatsApp — form onu seçilen sistem/hizmetle önceden
  // doldurulmuş şekilde açar. Supabase bağlıysa aynı zamanda panelde
  // görünmesi için bir kayıt da düşürür (best-effort).
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!choiceId) {
      setError("Lütfen önce bir sistem ya da hizmet seç.");
      return;
    }
    const choice = ALL_OPTIONS.find((s) => s.id === choiceId)!;
    const text =
      `Merhaba, ${choice.name} hakkında ücretsiz teklif almak istiyorum. ` +
      `Ben ${name || "..."}. ` +
      (message || "Detayları konuşabilir miyiz?");

    const supabase = getSupabaseBrowserClient();
    supabase?.from("leads").insert({
      source: "quote_form",
      name,
      phone,
      email,
      message,
      meta: { choice: choice.name, path: window.location.pathname },
    });

    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <p className="mono-label text-xs text-body">Hangi sistemle ilgileniyorsun?</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {SYSTEMS.map((s) => {
            const active = choiceId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setChoiceId(s.id);
                  setError("");
                }}
                aria-pressed={active}
                className={`rounded-xl border p-4 text-left transition-colors duration-150 ${
                  active ? "border-blue bg-tint" : "border-line bg-cream hover:border-blue/40"
                }`}
              >
                <span className={`font-display block text-sm ${active ? "text-blue" : "text-ink"}`}>
                  {s.name}
                </span>
                <span className="mono-label mt-1 block text-[11px] text-body/70">{s.sector}</span>
              </button>
            );
          })}
        </div>

        <p className="mono-label mt-5 text-xs text-body">Ya da bir hizmet mi istiyorsun?</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {SERVICES.map((s) => {
            const active = choiceId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setChoiceId(s.id);
                  setError("");
                }}
                aria-pressed={active}
                className={`rounded-xl border p-4 text-left transition-colors duration-150 ${
                  active ? "border-blue bg-tint" : "border-line bg-cream hover:border-blue/40"
                }`}
              >
                <span className={`font-display block text-sm ${active ? "text-blue" : "text-ink"}`}>
                  {s.name}
                </span>
                <span className="mono-label mt-1 block text-[11px] text-body/70">{s.sector}</span>
              </button>
            );
          })}
        </div>
        {error && <p className="mt-2 text-xs text-[#B4423B]">{error}</p>}
      </div>

      <div>
        <label htmlFor="qname" className="mono-label text-xs text-body">
          Adın
        </label>
        <input
          id="qname"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adın soyadın"
          className="mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qphone" className="mono-label text-xs text-body">
            Telefon
          </label>
          <input
            id="qphone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0 (5XX) XXX XX XX"
            className="mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="qemail" className="mono-label text-xs text-body">
            E-posta
          </label>
          <input
            id="qemail"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ornek@eposta.com"
            className="mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="qmessage" className="mono-label text-xs text-body">
          Eklemek istediğin bir şey var mı?
        </label>
        <textarea
          id="qmessage"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Opsiyonel"
          className="mt-2 w-full resize-none rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="chamfer wa-pulse inline-flex items-center gap-2 bg-wa px-6 py-3.5 text-sm font-medium text-wa-ink transition-colors duration-150 hover:bg-[#1fbd5a]"
      >
        WhatsApp&apos;ta teklif iste
      </button>
      <p className="text-xs text-body/70">
        Ücretsiz, taahhüt yok. Gönder&apos;e basınca WhatsApp&apos;ta bu
        bilgilerle doldurulmuş bir mesaj açılır.
      </p>
    </form>
  );
}
