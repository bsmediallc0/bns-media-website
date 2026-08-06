import fs from "fs";
import path from "path";

export type MediaEntry = {
  no: string;
  /** Kartta görünen sabit görsel (video varsa onun posteri). */
  src: string;
  /** Doluysa kart tıklanınca oynatılacak video. */
  videoSrc?: string;
  phase: string;
};

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const VIDEO_EXT = new Set([".mp4", ".webm"]);

function listFiles(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", folder);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir);
}

/**
 * Dosya adından sıra ve etiket üretir:
 *   "01-kaba-yapi.mp4" -> no "01", phase "Kaba yapi"
 *   "3.jpg"            -> no "03", etiket yok
 */
function parseName(base: string, index: number) {
  const match = base.match(/^(\d+)[-_\s]*(.*)$/);
  const no = match
    ? match[1].padStart(2, "0")
    : String(index + 1).padStart(2, "0");
  const raw = (match ? match[2] : base).replace(/[-_]+/g, " ").trim();
  const phase = raw ? raw.charAt(0).toLocaleUpperCase("tr") + raw.slice(1) : "";
  return { no, phase };
}

function buildEntries(folder: string): MediaEntry[] {
  const files = listFiles(folder);

  // Aynı isimli görsel + video varsa görsel, videonun posteri olur.
  const posters = new Map<string, string>();
  for (const f of files) {
    if (IMAGE_EXT.has(path.extname(f).toLowerCase())) {
      posters.set(path.basename(f, path.extname(f)), f);
    }
  }

  const videos = files.filter((f) =>
    VIDEO_EXT.has(path.extname(f).toLowerCase()),
  );
  const usedAsPoster = new Set<string>();
  for (const v of videos) {
    const base = path.basename(v, path.extname(v));
    if (posters.has(base)) usedAsPoster.add(posters.get(base)!);
  }

  const standaloneImages = files.filter(
    (f) => IMAGE_EXT.has(path.extname(f).toLowerCase()) && !usedAsPoster.has(f),
  );

  const items = [
    ...videos.map((f) => ({ file: f, video: true })),
    ...standaloneImages.map((f) => ({ file: f, video: false })),
  ].sort((a, b) =>
    a.file.localeCompare(b.file, "tr", { numeric: true, sensitivity: "base" }),
  );

  return items.map((item, i) => {
    const base = path.basename(item.file, path.extname(item.file));
    const { no, phase } = parseName(base, i);

    if (!item.video) {
      return { no, phase, src: `/${folder}/${item.file}` };
    }

    const poster = posters.get(base);
    return {
      no,
      phase,
      // Poster yoksa tarayıcı videonun ilk karesini gösterir.
      src: poster ? `/${folder}/${poster}` : "",
      videoSrc: `/${folder}/${item.file}`,
    };
  });
}

/**
 * public/{primaryFolder} klasöründen medya listesi üretir; boşsa
 * public/{fallbackFolder} klasörüne düşer (verilmişse).
 */
export function getMediaEntries(
  primaryFolder: string,
  fallbackFolder?: string,
): MediaEntry[] {
  const primary = buildEntries(primaryFolder);
  if (primary.length) return primary;
  return fallbackFolder ? buildEntries(fallbackFolder) : [];
}
