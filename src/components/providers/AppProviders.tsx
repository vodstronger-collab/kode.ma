import { cookies, headers } from "next/headers";
import { GeoPricingProvider } from "@/context/GeoPricingContext";
import { GEO_COUNTRY_COOKIE, normalizeCountryCode } from "@/lib/geo";

export async function AppProviders({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const countryCode = normalizeCountryCode(
    cookieStore.get(GEO_COUNTRY_COOKIE)?.value ?? headerStore.get("x-kode-country") ?? "MA",
  );

  return <GeoPricingProvider countryCode={countryCode}>{children}</GeoPricingProvider>;
}
