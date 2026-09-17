import { whatsappUrl } from "@/lib/constants";
import type { PricingPack } from "@/lib/pricing";

const flagThemes = {
  pro: {
    card: "border-[#002395] bg-[#002395] shadow-[0_16px_40px_rgba(0,35,149,0.25)]",
    stripe: "bg-[#001a6e]",
    title: "!text-white",
    price: "!text-white",
    period: "!text-white",
    feature: "!text-white",
    check: "!text-white",
    badge: "bg-white !text-[#002395]",
    button:
      "w-full inline-flex items-center justify-center rounded-[0.65rem] bg-white px-4 py-3 font-bold !text-[#002395] transition hover:bg-[#e8eefc]",
  },
  ultra: {
    card: "border-[#002395]/25 bg-white shadow-[0_16px_40px_rgba(12,18,40,0.1)]",
    stripe: "bg-[#e8eefc]",
    title: "!text-[#002395]",
    price: "!text-[#002395]",
    period: "!text-[#002395]/70",
    feature: "!text-[#002395]",
    check: "!text-[#002395]",
    badge: "bg-[#002395] !text-white",
    button:
      "w-full inline-flex items-center justify-center rounded-[0.65rem] bg-[#002395] px-4 py-3 font-bold !text-white transition hover:bg-[#001a6e]",
  },
  vip: {
    // Rouge vif d’origine (1re maquette)
    card: "border-[#ed2939] bg-[#ed2939] shadow-[0_16px_40px_rgba(237,41,57,0.25)]",
    stripe: "bg-[#c81e2c]",
    title: "!text-white",
    price: "!text-white",
    period: "!text-white",
    feature: "!text-white",
    check: "!text-white",
    badge: "bg-white !text-[#ed2939]",
    button:
      "w-full inline-flex items-center justify-center rounded-[0.65rem] bg-white px-4 py-3 font-bold !text-[#ed2939] transition hover:bg-[#fde8ea]",
  },
} as const;

function themeFor(id: string) {
  if (id === "pro") return flagThemes.pro;
  if (id === "vip") return flagThemes.vip;
  return flagThemes.ultra;
}

export function PricingCard({ pack }: { pack: PricingPack }) {
  const theme = themeFor(pack.id);

  return (
    <article className={`relative flex h-full flex-col overflow-hidden rounded-2xl border-2 p-6 ${theme.card}`}>
      <div className={`absolute inset-x-0 top-0 h-2 ${theme.stripe}`} aria-hidden />

      {pack.badge ? (
        <span className={`absolute right-4 mt-4 rounded-md px-3 py-1 text-xs font-bold ${theme.badge}`}>
          {pack.badge}
        </span>
      ) : null}

      <h3 className={`mt-2 font-display text-xl font-bold ${theme.title}`}>{pack.name}</h3>
      <p className="mt-4 flex items-end gap-1">
        <span className={`font-display text-4xl font-bold ${theme.price}`}>{pack.price}</span>
        <span className={`mb-1 text-sm ${theme.period}`}>
          {pack.currency}
          {pack.period}
        </span>
      </p>
      <ul className="mt-6 flex-1 space-y-2.5 text-sm">
        {pack.features.map((feature) => (
          <li key={feature} className={`flex gap-2 ${theme.feature}`}>
            <span className={theme.check}>✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={whatsappUrl(pack.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 ${theme.button}`}
      >
        Commander
      </a>
    </article>
  );
}
