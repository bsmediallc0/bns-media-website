"use client";

import { useTransition } from "react";
import { deleteSeoRequest, toggleSeoStatus } from "@/app/admin/(dashboard)/seo/actions";

export type SeoRequest = {
  id: string;
  created_at: string;
  site: string;
  request: string;
  status: string;
  notes: string | null;
};

export default function SeoRequestRow({ item }: { item: SeoRequest }) {
  const [isPending, startTransition] = useTransition();
  const done = item.status === "yapildi";

  return (
    <div className="flex items-start gap-4 border-b border-line px-4 py-4 last:border-0">
      <button
        type="button"
        disabled={isPending}
        onClick={() => startTransition(() => toggleSeoStatus(item.id, item.status))}
        aria-pressed={done}
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors duration-150 ${
          done ? "border-blue bg-blue text-white" : "border-line bg-white"
        }`}
      >
        {done && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <div className="flex-1">
        <p className={`text-sm font-medium ${done ? "text-body/50 line-through" : "text-ink"}`}>{item.request}</p>
        <p className="mt-0.5 text-xs text-body/60">
          {item.site} · {new Date(item.created_at).toLocaleDateString("tr-TR")}
        </p>
      </div>

      <button
        type="button"
        disabled={isPending}
        onClick={() => startTransition(() => deleteSeoRequest(item.id))}
        className="text-xs text-body/40 transition-colors duration-150 hover:text-[#B4423B]"
      >
        Sil
      </button>
    </div>
  );
}
