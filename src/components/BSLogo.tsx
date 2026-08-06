import Link from "next/link";

export default function BSLogo() {
  return (
    <Link
      href="/"
      className="flex flex-col items-center gap-1 no-underline sm:items-end"
    >
      <span className="font-sans text-[8px] uppercase tracking-[0.5em] text-white/30">
        Dijital Sistem Stüdyosu
      </span>

      <div className="flex items-center gap-4">
        <div className="hidden h-[1px] w-16 bg-sky md:block" />
        <span className="font-display text-2xl italic uppercase tracking-[0.1em] text-white md:text-3xl">
          B&amp;S <span className="text-sky">Media</span>
        </span>
      </div>

      <span className="text-[7px] uppercase tracking-[0.6em] text-white/30">
        Designed to Define
      </span>
    </Link>
  );
}
