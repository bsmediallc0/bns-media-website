"use client";

import { useState, type FormEvent } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type Status = "idle" | "submitting" | "sent";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("submitting");

    const supabase = getSupabaseBrowserClient();
    if (supabase) {
      const { error: insertError } = await supabase.from("leads").insert({
        source: "contact_form",
        name,
        phone,
        email,
        message,
        meta: { subject, path: window.location.pathname },
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
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D5BBF" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-display mt-5 text-2xl text-ink">Mesajın bize ulaştı.</p>
        <p className="mt-2 max-w-xs text-[15px] text-body">
          Anında seninle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mono-label text-xs text-body">
          Adın
        </label>
        <input
          id="name"
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
          <label htmlFor="phone" className="mono-label text-xs text-body">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0 (5XX) XXX XX XX"
            className="mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mono-label text-xs text-body">
            E-posta
          </label>
          <input
            id="email"
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
        <label htmlFor="subject" className="mono-label text-xs text-body">
          Konu
        </label>
        <input
          id="subject"
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Ne hakkında yazmak istiyorsun?"
          className="mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="mono-label text-xs text-body">
          Mesajın
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Kısaca ne konuşmak istersin?"
          className="mt-2 w-full resize-none rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none"
        />
      </div>

      {error && <p className="text-xs text-[#B4423B]">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="chamfer w-full bg-ink py-3.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-navy-2 disabled:opacity-60"
      >
        {status === "submitting" ? "Gönderiliyor..." : "Gönder"}
      </button>
    </form>
  );
}
