export const GEO_COUNTRY_COOKIE = "kode_country";

/** Default / unknown → Morocco */
export function normalizeCountryCode(code: string | null | undefined): string {
  if (!code) return "MA";
  const normalized = code.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(normalized)) return "MA";
  if (normalized === "XX" || normalized === "T1") return "MA";
  return normalized;
}

/** Hero image: local for MA (LCP), compact CDN otherwise, kode.png fallback path via UI */
export function getHeroFlagImageUrl(countryCode: string): string {
  const code = normalizeCountryCode(countryCode).toLowerCase();
  if (code === "ma") return "/flags/ma.svg";
  return `https://flagcdn.com/w640/${code}.png`;
}

export function isLocalHeroImage(url: string): boolean {
  return url.startsWith("/");
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
