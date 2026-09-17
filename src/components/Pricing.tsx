import { TrustBadge } from "@/components/TrustBadge";
import { PricingCard } from "@/components/PricingCard";
import { compareRows, getPricingPacks } from "@/lib/pricing";
import { getRequestCountry } from "@/lib/request-geo";

export async function Pricing({
  showHeader = true,
  id = "tarifs",
}: {
  showHeader?: boolean;
  id?: string;
}) {
  const countryCode = await getRequestCountry();
  const currentPacks = getPricingPacks(countryCode);

  return (
    <section id={id} className="section-pad !py-16">
      <div className="container-site">
        {showHeader ? (
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Tarifs 2026</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[var(--heading)] sm:text-4xl">
              Des forfaits clairs, sans essai gratuit
            </h2>
            <div className="mt-6 flex justify-center">
              <TrustBadge />
            </div>
          </div>
        ) : null}

        <div className={`grid gap-5 lg:grid-cols-3 ${showHeader ? "mt-10" : ""}`}>
          {currentPacks.map((pack) => (
            <PricingCard key={pack.id} pack={pack} />
          ))}
        </div>

        <div className="mt-12 overflow-x-auto">
          <h3 className="mb-4 font-display text-lg font-bold text-[var(--heading)]">
            Comparer les packs
          </h3>
          <table className="w-full min-w-[640px] overflow-hidden rounded-2xl border border-black/8 bg-white text-left text-sm">
            <thead className="bg-[#002395] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Critère</th>
                <th className="px-4 py-3 font-semibold">Pro</th>
                <th className="px-4 py-3 font-semibold">Ultra</th>
                <th className="px-4 py-3 font-semibold">VIP</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.label} className="border-t border-black/5">
                  <td className="px-4 py-3 font-medium text-[var(--heading)]">{row.label}</td>
                  <td className="muted px-4 py-3">{row.pro}</td>
                  <td className="muted px-4 py-3">{row.ultra}</td>
                  <td className="muted px-4 py-3">{row.vip}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted mt-3 text-xs">* Appareils non simultanés.</p>
        </div>
      </div>
    </section>
  );
}
