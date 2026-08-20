/**
 * Approximate country centroids (ISO 3166-1 alpha-2 -> name + lat/lon), used to
 * plot visitor dots on an equirectangular projection.
 *
 * Coordinates are rounded to whole degrees; they position a dot, they are not
 * survey data. Countries missing from this table still appear in the ranked
 * list on the analytics page — they simply are not plotted on the map.
 */
export type Centroid = { name: string; lat: number; lon: number };

export const COUNTRY_CENTROIDS: Record<string, Centroid> = {
  AE: { name: "United Arab Emirates", lat: 24, lon: 54 },
  AR: { name: "Argentina", lat: -34, lon: -64 },
  AT: { name: "Austria", lat: 47, lon: 14 },
  AU: { name: "Australia", lat: -25, lon: 133 },
  BD: { name: "Bangladesh", lat: 24, lon: 90 },
  BE: { name: "Belgium", lat: 51, lon: 4 },
  BG: { name: "Bulgaria", lat: 43, lon: 25 },
  BR: { name: "Brazil", lat: -10, lon: -55 },
  CA: { name: "Canada", lat: 56, lon: -106 },
  CH: { name: "Switzerland", lat: 47, lon: 8 },
  CL: { name: "Chile", lat: -30, lon: -71 },
  CN: { name: "China", lat: 35, lon: 105 },
  CO: { name: "Colombia", lat: 4, lon: -73 },
  CZ: { name: "Czechia", lat: 50, lon: 15 },
  DE: { name: "Germany", lat: 51, lon: 10 },
  DK: { name: "Denmark", lat: 56, lon: 10 },
  EG: { name: "Egypt", lat: 27, lon: 30 },
  ES: { name: "Spain", lat: 40, lon: -4 },
  FI: { name: "Finland", lat: 64, lon: 26 },
  FR: { name: "France", lat: 46, lon: 2 },
  GB: { name: "United Kingdom", lat: 54, lon: -2 },
  GR: { name: "Greece", lat: 39, lon: 22 },
  HK: { name: "Hong Kong", lat: 22, lon: 114 },
  HU: { name: "Hungary", lat: 47, lon: 20 },
  ID: { name: "Indonesia", lat: -1, lon: 114 },
  IE: { name: "Ireland", lat: 53, lon: -8 },
  IL: { name: "Israel", lat: 31, lon: 35 },
  IN: { name: "India", lat: 21, lon: 78 },
  IQ: { name: "Iraq", lat: 33, lon: 44 },
  IR: { name: "Iran", lat: 32, lon: 53 },
  IT: { name: "Italy", lat: 43, lon: 12 },
  JP: { name: "Japan", lat: 36, lon: 138 },
  KE: { name: "Kenya", lat: 0, lon: 38 },
  KR: { name: "South Korea", lat: 36, lon: 128 },
  LK: { name: "Sri Lanka", lat: 7, lon: 81 },
  MA: { name: "Morocco", lat: 32, lon: -6 },
  MX: { name: "Mexico", lat: 23, lon: -102 },
  MY: { name: "Malaysia", lat: 4, lon: 102 },
  NG: { name: "Nigeria", lat: 9, lon: 8 },
  NL: { name: "Netherlands", lat: 52, lon: 5 },
  NO: { name: "Norway", lat: 61, lon: 9 },
  NP: { name: "Nepal", lat: 28, lon: 84 },
  NZ: { name: "New Zealand", lat: -41, lon: 174 },
  PE: { name: "Peru", lat: -10, lon: -76 },
  PH: { name: "Philippines", lat: 13, lon: 122 },
  PK: { name: "Pakistan", lat: 30, lon: 70 },
  PL: { name: "Poland", lat: 52, lon: 19 },
  PT: { name: "Portugal", lat: 39, lon: -8 },
  RO: { name: "Romania", lat: 46, lon: 25 },
  RS: { name: "Serbia", lat: 44, lon: 21 },
  RU: { name: "Russia", lat: 60, lon: 100 },
  SA: { name: "Saudi Arabia", lat: 24, lon: 45 },
  SE: { name: "Sweden", lat: 62, lon: 15 },
  SG: { name: "Singapore", lat: 1, lon: 104 },
  TH: { name: "Thailand", lat: 15, lon: 101 },
  TR: { name: "Türkiye", lat: 39, lon: 35 },
  TW: { name: "Taiwan", lat: 24, lon: 121 },
  UA: { name: "Ukraine", lat: 49, lon: 32 },
  US: { name: "United States", lat: 38, lon: -97 },
  VN: { name: "Vietnam", lat: 16, lon: 108 },
  ZA: { name: "South Africa", lat: -29, lon: 24 },
};

export function lookupCountry(code: string): Centroid | null {
  return COUNTRY_CENTROIDS[code] ?? null;
}

export function countryLabel(code: string): string {
  if (code === "ZZ") return "Unknown";
  return COUNTRY_CENTROIDS[code]?.name ?? code;
}
