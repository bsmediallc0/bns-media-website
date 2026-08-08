"use client";

import { useState, type FormEvent } from "react";
import { SERVICES, SYSTEM_PICKS } from "@/lib/site";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const ALL_OPTIONS = [...SYSTEM_PICKS, ...SERVICES];

type Status = "idle" | "submitting" | "sent";

export default function QuoteForm() {
  const [choiceId, setChoiceId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!choiceId) {
      setError("Lütfen önce bir sistem ya da hizmet seç.");
      return;
    }
    const choice = ALL_OPTIONS.find((s) => s.id === choiceId)!;
    setError("");
    setStatus("submitting");

    const supabase = getSupabaseBrowserClient();
    if (supabase) {
      const { error: insertError } = await supabase.from("leads").insert({
        source: "quote_form",
        name,
        phone,
        email,
        message,
        meta: { choice: choice.name, path: window.location.pathname },
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
      <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-8 text-center sm:p-10">
        <div className="chamfer flex h-12 w-12 items-center justify-center bg-tint">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1D5BBF"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-display mt-5 text-2xl text-ink">
          Talebin bize ulaştı.
        </p>
        <p className="mt-2 max-w-xs text-[15px] text-body">
          Anında seninle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <p className="mono-label text-xs text-body">Hangi sistemle ilgileniyorsun?</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {SYSTEM_PICKS.map((s) => {
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
        disabled={status === "submitting"}
        className="chamfer inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-navy-2 disabled:opacity-60"
      >
        {status === "submitting" ? "Gönderiliyor..." : "Ücretsiz Teklif Al"}
      </button>
      <p className="text-xs text-body/70">
        Ücretsiz, taahhüt yok. Gönder&apos;e basınca anında sana dönüş
        yaparız.
      </p>
    </form>
  );
}
