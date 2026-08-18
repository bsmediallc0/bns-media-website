"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export default function AdminSidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();

  // app.bnsmedia.co gibi bir alt alan adındaysak middleware path'i içeride
  // /admin'e çeviriyor ama tarayıcıdaki gerçek path hiç /admin görmüyor —
  // usePathname() bunu yansıtır. Linkleri buna göre kuruyoruz ki
  // app.bnsmedia.co/leads gibi temiz kalsın, /admin/leads'e sıçramasın.
  const isAppSubdomain = !pathname.startsWith("/admin");
  const base = isAppSubdomain ? "" : "/admin";
  const links = [
    { href: base || "/", label: "Genel Bakış" },
    { href: `${base}/leads`, label: "Talepler" },
    { href: `${base}/seo`, label: "SEO Takibi" },
  ];

  const handleLogout = async () => {
    const supabase = getSupabaseBrowserClient();
    await supabase?.auth.signOut();
    router.push(isAppSubdomain ? "/login" : "/admin/login");
    router.refresh();
  };

  return (
    <aside className="flex w-56 shrink-0 flex-col justify-between border-r border-line bg-white px-4 py-6">
      <div>
        <span className="font-display px-2 text-lg text-ink">B&amp;S Media</span>
        <nav className="mt-8 flex flex-col gap-1">
          {links.map((link) => {
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
