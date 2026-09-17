import { cookies, headers } from "next/headers";
import { GEO_COUNTRY_COOKIE, normalizeCountryCode } from "@/lib/geo";

/** Country for the current request (middleware cookie / Vercel header). */
export async function getRequestCountry(): Promise<string> {
  const cookieStore = await cookies();
  const headerStore = await headers();
  return normalizeCountryCode(
    cookieStore.get(GEO_COUNTRY_COOKIE)?.value ?? headerStore.get("x-kode-country") ?? "MA",
  );
}
