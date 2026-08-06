"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Item = { q: string; a: string };

export default function FaqAccordion({ items }: { items: readonly Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <Reveal key={item.q} delay={i * 50}>
            <div
              className={`rounded-3xl transition-colors duration-200 ${open ? "bg-tint" : "bg-white"}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center gap-4 px-5 py-3.5 text-left"
              >
                <span className="flex-1 text-[15px] font-medium text-ink">{item.q}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D5BBF"
                  strokeWidth="2"
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-[14px] leading-relaxed text-body">{item.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
