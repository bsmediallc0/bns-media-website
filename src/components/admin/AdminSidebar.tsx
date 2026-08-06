"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const LINKS = [
  { href: "/admin", label: "Genel Bakış" },
  { href: "/admin/leads", label: "Talepler" },
  { href: "/admin/seo", label: "SEO Takibi" },
] as const;

export default function AdminSidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = getSupabaseBrowserClient();
    await supabase?.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <aside className="flex w-56 shrink-0 flex-col justify-between border-r border-line bg-white px-4 py-6">
      <div>
        <span className="font-display px-2 text-lg text-ink">B&amp;S Media</span>
        <nav className="mt-8 flex flex-col gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-2.5 text-sm transition-colors duration-150 ${
                  active ? "bg-tint font-medium text-ink" : "text-body hover:bg-mist"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-line pt-4">
        <p className="truncate px-2 text-xs text-body/70">{email}</p>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-2 w-full rounded-xl px-3 py-2.5 text-left text-sm text-body transition-colors duration-150 hover:bg-mist"
        >
          Çıkış yap
        </button>
      </div>
    </aside>
  );
}
