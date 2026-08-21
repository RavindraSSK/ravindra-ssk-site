/**
 * Subdivision centroids for the analytics drill-down, keyed "CC-RR"
 * (ISO 3166-2): [lat, lon, display name]. Project with projectLatLon from
 * lib/world-paths.ts. Countries not listed here still drill down to a
 * ranked state list — they just get an aggregate map marker instead of
 * per-state pins. Extend per country as needed.
 */
export const REGION_PINS: Record<string, readonly [number, number, string]> = {
  // United States (50 states + DC)
  "US-AL": [32.8, -86.8, "Alabama"], "US-AK": [64.7, -152.3, "Alaska"], "US-AZ": [34.3, -111.7, "Arizona"],
  "US-AR": [34.9, -92.4, "Arkansas"], "US-CA": [37.2, -119.5, "California"], "US-CO": [39.0, -105.5, "Colorado"],
  "US-CT": [41.6, -72.7, "Connecticut"], "US-DE": [39.0, -75.5, "Delaware"], "US-DC": [38.9, -77.0, "Washington, D.C."],
  "US-FL": [28.6, -82.4, "Florida"], "US-GA": [32.6, -83.4, "Georgia"], "US-HI": [20.3, -156.4, "Hawaii"],
  "US-ID": [44.4, -114.6, "Idaho"], "US-IL": [40.0, -89.2, "Illinois"], "US-IN": [39.9, -86.3, "Indiana"],
  "US-IA": [42.1, -93.5, "Iowa"], "US-KS": [38.5, -98.4, "Kansas"], "US-KY": [37.5, -85.3, "Kentucky"],
  "US-LA": [31.0, -92.0, "Louisiana"], "US-ME": [45.4, -69.2, "Maine"], "US-MD": [39.0, -76.8, "Maryland"],
  "US-MA": [42.3, -71.8, "Massachusetts"], "US-MI": [44.3, -85.4, "Michigan"], "US-MN": [46.3, -94.3, "Minnesota"],
  "US-MS": [32.7, -89.7, "Mississippi"], "US-MO": [38.4, -92.5, "Missouri"], "US-MT": [47.1, -109.6, "Montana"],
  "US-NE": [41.5, -99.8, "Nebraska"], "US-NV": [39.3, -116.6, "Nevada"], "US-NH": [43.7, -71.6, "New Hampshire"],
  "US-NJ": [40.2, -74.7, "New Jersey"], "US-NM": [34.4, -106.1, "New Mexico"], "US-NY": [42.9, -75.5, "New York"],
  "US-NC": [35.5, -79.4, "North Carolina"], "US-ND": [47.5, -100.5, "North Dakota"], "US-OH": [40.3, -82.8, "Ohio"],
  "US-OK": [35.6, -97.5, "Oklahoma"], "US-OR": [43.9, -120.6, "Oregon"], "US-PA": [40.9, -77.8, "Pennsylvania"],
  "US-RI": [41.7, -71.6, "Rhode Island"], "US-SC": [33.9, -80.9, "South Carolina"], "US-SD": [44.4, -100.2, "South Dakota"],
  "US-TN": [35.9, -86.4, "Tennessee"], "US-TX": [31.5, -99.3, "Texas"], "US-UT": [39.3, -111.7, "Utah"],
  "US-VT": [44.1, -72.7, "Vermont"], "US-VA": [37.5, -78.9, "Virginia"], "US-WA": [47.4, -120.4, "Washington"],
  "US-WV": [38.6, -80.6, "West Virginia"], "US-WI": [44.6, -89.7, "Wisconsin"], "US-WY": [43.0, -107.6, "Wyoming"],
  // India (states + major union territories)
  "IN-AP": [15.9, 79.7, "Andhra Pradesh"], "IN-AR": [28.2, 94.7, "Arunachal Pradesh"], "IN-AS": [26.2, 92.9, "Assam"],
  "IN-BR": [25.7, 85.6, "Bihar"], "IN-CT": [21.3, 82.0, "Chhattisgarh"], "IN-DL": [28.6, 77.2, "Delhi"],
  "IN-GA": [15.4, 74.0, "Goa"], "IN-GJ": [22.7, 71.6, "Gujarat"], "IN-HR": [29.2, 76.3, "Haryana"],
  "IN-HP": [31.9, 77.2, "Himachal Pradesh"], "IN-JH": [23.7, 85.6, "Jharkhand"], "IN-JK": [33.8, 75.0, "Jammu and Kashmir"],
  "IN-KA": [14.8, 75.9, "Karnataka"], "IN-KL": [10.5, 76.3, "Kerala"], "IN-MP": [23.5, 78.3, "Madhya Pradesh"],
  "IN-MH": [19.5, 75.9, "Maharashtra"], "IN-MN": [24.7, 93.9, "Manipur"], "IN-ML": [25.5, 91.3, "Meghalaya"],
  "IN-MZ": [23.3, 92.8, "Mizoram"], "IN-NL": [26.1, 94.5, "Nagaland"], "IN-OR": [20.5, 84.4, "Odisha"],
  "IN-PB": [30.8, 75.4, "Punjab"], "IN-PY": [11.9, 79.8, "Puducherry"], "IN-RJ": [26.6, 73.8, "Rajasthan"],
  "IN-SK": [27.6, 88.5, "Sikkim"], "IN-TN": [11.0, 78.4, "Tamil Nadu"], "IN-TG": [17.8, 79.0, "Telangana"],
  "IN-TR": [23.7, 91.7, "Tripura"], "IN-UP": [27.0, 80.7, "Uttar Pradesh"], "IN-UT": [30.1, 79.2, "Uttarakhand"],
  "IN-WB": [23.8, 87.9, "West Bengal"],
};
