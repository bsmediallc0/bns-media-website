-- B&S Media admin paneli için temel şema.
-- Supabase Dashboard > SQL Editor içine yapıştırıp çalıştır.

-- ── leads ─────────────────────────────────────────────────────────────
-- Sitedeki 3 formdan (LeadForm, ContactForm, QuoteForm) gelen talepler.
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null,              -- 'lead_form' | 'contact_form' | 'quote_form'
  name text,
  phone text,
  email text,
  message text,
  meta jsonb,                        -- sayfa yolu, seçilen sistem/sektör vb. serbest alan
  status text not null default 'yeni' -- 'yeni' | 'iletisime_gecildi' | 'kazanildi' | 'kaybedildi'
);

alter table leads enable row level security;

-- Herkes (anon, formu dolduran ziyaretçi) yeni kayıt ekleyebilir.
create policy "leads: anon insert" on leads
  for insert to anon
  with check (true);

-- Sadece giriş yapmış (senin) hesabın okuyup güncelleyebilir/silebilir.
create policy "leads: admin select" on leads
  for select to authenticated
  using (true);

create policy "leads: admin update" on leads
  for update to authenticated
  using (true);

create policy "leads: admin delete" on leads
  for delete to authenticated
  using (true);

-- ── seo_requests ──────────────────────────────────────────────────────
-- SEO yapılandırma taleplerinin takibi — tamamen admin-only.
create table if not exists seo_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  site text not null,                -- örn. "RezerveOS", "VitrinOS", "Genel"
  request text not null,             -- ne talep edildi
  status text not null default 'bekliyor', -- 'bekliyor' | 'yapildi'
  notes text
);

alter table seo_requests enable row level security;

create policy "seo_requests: admin all" on seo_requests
  for all to authenticated
  using (true)
  with check (true);
