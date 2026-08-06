import fs from "fs";
import path from "path";

const EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

function findImage(id: string, kind: "desktop" | "mobile"): string | null {
  for (const ext of EXTENSIONS) {
    const file = `${id}-${kind}.${ext}`;
    const full = path.join(process.cwd(), "public", "references", file);
    if (fs.existsSync(full)) return `/references/${file}`;
  }
  return null;
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-navy-2">
      <span className="mono-label px-2 text-center text-[10px] leading-relaxed text-white/60">
        {label}
      </span>
    </div>
  );
}

/**
 * Gerçek cihaz maketleri: MacBook tarzı dizüstü + modern iPhone.
 * Ekran görüntüleri public/references/{id}-desktop.* ve {id}-mobile.*
 * içine bırakılınca otomatik gösterilir.
 */
export default function DeviceShowcase({
  id,
  domain,
}: {
  id: string;
  domain: string;
}) {
  const desktop = findImage(id, "desktop");
  const mobile = findImage(id, "mobile");

  return (
    <div className="flex items-end gap-3 sm:gap-5">
      {/* ---------- Dizüstü ---------- */}
      <div className="min-w-0 flex-1">
        {/* Kapak */}
        <div className="relative rounded-t-xl bg-gradient-to-b from-[#39404e] to-[#20262f] p-[6px] pb-[7px] shadow-[0_22px_45px_-18px_rgba(10,16,26,0.65)] sm:rounded-t-2xl sm:p-2">
          {/* Kamera */}
          <span
            aria-hidden="true"
            className="absolute top-[3px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/30 sm:top-[5px]"
          />
          <div className="relative overflow-hidden rounded-md bg-[#0d1218] sm:rounded-lg">
            {/* Tarayıcı çubuğu */}
            <div className="flex items-center gap-1.5 bg-[#171d26] px-2.5 py-1.5 sm:px-3 sm:py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57] sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e] sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#28c840] sm:h-2 sm:w-2" />
              <span className="mono-label ml-1.5 flex-1 truncate rounded-full bg-white/[0.07] px-2 py-[3px] text-center text-[9px] text-white/55 sm:ml-2 sm:text-[10px]">
                {domain}
              </span>
            </div>
            <div className="aspect-[16/10]">
              {desktop ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={desktop}
                  alt={`${domain} — masaüstü görünüm`}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <Placeholder label="PC görünümü yakında" />
              )}
            </div>
            {/* Ekran parlaması */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent"
            />
          </div>
        </div>

        {/* Menteşe ve taban — kapaktan biraz geniş, gerçek dizüstü gibi */}
        <div className="relative -mx-[1.5%] h-2 rounded-b-lg bg-gradient-to-b from-[#4a5364] via-[#333b48] to-[#1c222b] shadow-[0_10px_20px_-8px_rgba(10,16,26,0.6)] sm:h-3 sm:rounded-b-xl">
          <span
            aria-hidden="true"
            className="absolute top-0 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-b-md bg-black/35 sm:h-1 sm:w-16"
          />
        </div>
      </div>

      {/* ---------- iPhone ---------- */}
      <div className="relative w-[27%] shrink-0 sm:w-[25%]">
        {/* Yan tuşlar */}
        <span
          aria-hidden="true"
          className="absolute top-[16%] -left-[2px] h-[4%] w-[2px] rounded-l bg-[#39404e]"
        />
        <span
          aria-hidden="true"
          className="absolute top-[23%] -left-[2px] h-[7%] w-[2px] rounded-l bg-[#39404e]"
        />
        <span
          aria-hidden="true"
          className="absolute top-[32%] -left-[2px] h-[7%] w-[2px] rounded-l bg-[#39404e]"
        />
        <span
          aria-hidden="true"
          className="absolute top-[26%] -right-[2px] h-[10%] w-[2px] rounded-r bg-[#39404e]"
        />

        {/* Gövde */}
        <div className="rounded-[1.4rem] bg-gradient-to-br from-[#5a6473] via-[#2b323d] to-[#454e5c] p-[2px] shadow-[0_22px_45px_-18px_rgba(10,16,26,0.7)] sm:rounded-[2rem] sm:p-[3px]">
          <div className="relative overflow-hidden rounded-[1.25rem] bg-black sm:rounded-[1.85rem]">
            <div className="aspect-[9/19.5]">
              {mobile ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={mobile}
                  alt={`${domain} — mobil görünüm`}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <Placeholder label="Mobil" />
              )}
            </div>

            {/* Dynamic Island */}
            <span
              aria-hidden="true"
              className="absolute top-[1.6%] left-1/2 h-[3.4%] w-[34%] -translate-x-1/2 rounded-full bg-black"
            />

            {/* Ana ekran çubuğu */}
            <span
              aria-hidden="true"
              className="absolute bottom-[1%] left-1/2 h-[0.5%] w-[32%] -translate-x-1/2 rounded-full bg-white/70"
            />

            {/* Ekran parlaması */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
