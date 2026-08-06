"use client";

import { createBrowserClient } from "@supabase/ssr";

// TODO(Berk): Supabase projesi bağlanınca .env.local'e
// NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_ANON_KEY ekle.
// İkisi de yoksa null dönüyoruz — formlar ve panel bunu bilip nazikçe
// eski davranışa (fake "gönderildi" / WhatsApp yönlendirme) düşüyor,
// site kırılmıyor.
export function getSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createBrowserClient(url, anonKey);
}
