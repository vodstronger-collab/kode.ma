"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import {
  getCountryNameFr,
  getHeroFlagImageUrl,
  normalizeCountryCode,
} from "@/lib/geo";
import { getPricingPacks, type PricingPack } from "@/lib/pricing";

export type GeoPricingState = {
  countryCode: string;
  countryName: string;
  heroImageUrl: string;
  currentPacks: PricingPack[];
};

const GeoPricingContext = createContext<GeoPricingState | null>(null);

export function GeoPricingProvider({
  countryCode: initialCountry,
  children,
}: {
  countryCode: string;
  children: ReactNode;
}) {
  const value = useMemo<GeoPricingState>(() => {
    const countryCode = normalizeCountryCode(initialCountry);
    return {
      countryCode,
      countryName: getCountryNameFr(countryCode),
      heroImageUrl: getHeroFlagImageUrl(countryCode),
      currentPacks: getPricingPacks(countryCode),
    };
  }, [initialCountry]);

  return (
    <GeoPricingContext.Provider value={value}>{children}</GeoPricingContext.Provider>
  );
}

const FALLBACK: GeoPricingState = {
  countryCode: "MA",
  countryName: "Maroc",
  heroImageUrl: getHeroFlagImageUrl("MA"),
  currentPacks: getPricingPacks("MA"),
};

export function useGeoPricing(): GeoPricingState {
  return useContext(GeoPricingContext) ?? FALLBACK;
}
