import { TrialForm } from "@/components/TrialForm";
import { getPricingPacks } from "@/lib/pricing";
import { getRequestCountry } from "@/lib/request-geo";

export async function TrialFormSection() {
  const countryCode = await getRequestCountry();
  return <TrialForm packs={getPricingPacks(countryCode)} />;
}
