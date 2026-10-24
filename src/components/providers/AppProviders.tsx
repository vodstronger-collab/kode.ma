import { GeoPricingProvider } from "@/context/GeoPricingContext";
import { getRequestCountry } from "@/lib/request-geo";

export async function AppProviders({ children }: { children: React.ReactNode }) {
  const countryCode = await getRequestCountry();
  return <GeoPricingProvider countryCode={countryCode}>{children}</GeoPricingProvider>;
}
