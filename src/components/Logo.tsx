import Link from "next/link";

export function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Kode — Accueil">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#002395] shadow-sm ring-1 ring-[#001a6e]/40 transition group-hover:bg-[#001a6e]">
        <PowerIconTriColor />
      </span>
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          light ? "text-white" : "text-[var(--heading)]"
        }`}
      >
        Kode
      </span>
    </Link>
  );
}

function PowerIconTriColor() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      {/* Cercle ouvert en blanc */}
      <path
        d="M7.05 6.85A7 7 0 0 0 5 12a7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-2.05-5.15"
        stroke="#ffffff"
        strokeWidth="2.35"
        strokeLinecap="round"
      />
      {/* Trait d'allumage en rouge */}
      <line
        x1="12"
        y1="4"
        x2="12"
        y2="12.5"
        stroke="#ed2939"
        strokeWidth="2.35"
        strokeLinecap="round"
      />
    </svg>
  );
}
