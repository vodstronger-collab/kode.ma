export const GEO_COUNTRY_COOKIE = "kode_country";

/** Default / unknown → Morocco */
export function normalizeCountryCode(code: string | null | undefined): string {
  if (!code) return "MA";
  const normalized = code.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(normalized)) return "MA";
  if (normalized === "XX" || normalized === "T1") return "MA";
  return normalized;
}

/** Wide PNG flag for hero (flagcdn) */
export function getHeroFlagImageUrl(countryCode: string): string {
  return `https://flagcdn.com/w1280/${normalizeCountryCode(countryCode).toLowerCase()}.png`;
}

export function getCountryNameFr(countryCode: string): string {
  try {
    return new Intl.DisplayNames(["fr"], { type: "region" }).of(normalizeCountryCode(countryCode)) ?? countryCode;
  } catch {
    return countryCode;
  }
}

export function isMorocco(countryCode: string): boolean {
  return normalizeCountryCode(countryCode) === "MA";
}
