"use client";

import { useEffect, useState } from "react";

import { countryLabel, lookupCountry } from "@/lib/country-centroids";
import { REGION_PINS } from "@/lib/geo-project";
import { COUNTRY_BY_CODE, MAP_H, MAP_W, WORLD_COUNTRIES, projectLatLon } from "@/lib/world-paths";

const POLL_MS = 15_000;
const STAGE_RATIO = MAP_W / MAP_H;

/** Origin node the connection beams converge on (St. Louis, MO). */
const HUB = projectLatLon(38.63, -90.2);

type Location = { country: string; region: string; city: string; count: number; lat?: number; lon?: number };
type VisitEvent = { ts: number; country: string; region: string; city: string };
type Stats = {
  total: number;
  uniques?: number;
  countries: Array<{ code: string; count: number }>;
  locations?: Location[];
  events?: VisitEvent[];
};
type State =
  | { status: "loading" }
  | { status: "unconfigured"; message?: string }
  | { status: "error"; message?: string }
  | { status: "ready"; stats: Stats; fetchedAt: Date };

/** Pure I/O: resolves to the next view state, never touches React state itself. */
async function fetchState(): Promise<State> {
  try {
    const response = await fetch("/api/visit", { cache: "no-store" });
    if (response.status === 503) {
      const body = (await response.json()) as { error?: string };
      return { status: "unconfigured", message: body.error };
    }
    if (!response.ok) {
      return { status: "error", message: "Could not load visitor stats." };
    }
    return { status: "ready", stats: (await response.json()) as Stats, fetchedAt: new Date() };
  } catch {
    return { status: "error", message: "Could not reach the analytics endpoint." };
  }
}

/** Map position for a country: shape centroid, else projected reference point (covers SG, HK, …). */
function countryPoint(code: string): readonly [number, number] | null {
  const shape = COUNTRY_BY_CODE.get(code);
  if (shape) return shape.centroid;
  const centroid = lookupCountry(code);
  if (centroid) return projectLatLon(centroid.lat, centroid.lon);
  return null;
}

function displayName(code: string): string {
  return COUNTRY_BY_CODE.get(code)?.name ?? countryLabel(code);
}

/** Countries whose Natural Earth bbox frames badly (distant islands/territories). */
const ZOOM_OVERRIDES: Record<string, readonly [number, number, number, number]> = {
  // Continental US: Alaska + Hawaii stretch the bbox until the mainland is tiny.
  US: [24, -125, 49.5, -66.5],
  // European France (overseas territories pull the bbox to South America).
  FR: [41, -5.5, 51.5, 10],
  NL: [50.5, 3, 53.8, 7.5],
  NZ: [-47.5, 166, -34, 179],
};

/** viewBox framing a country, padded and widened to the stage aspect ratio. */
function zoomWindow(code: string): string {
  const override = ZOOM_OVERRIDES[code];
  const shape = COUNTRY_BY_CODE.get(code);
  let x1: number, y1: number, x2: number, y2: number;
  if (override) {
    const [s0, w0, n0, e0] = override;
    [x1, y1] = projectLatLon(n0, w0);
    [x2, y2] = projectLatLon(s0, e0);
  } else if (shape) {
    [x1, y1, x2, y2] = shape.bbox;
  } else {
    const point = countryPoint(code) ?? [MAP_W / 2, MAP_H / 2];
    x1 = point[0] - 30; y1 = point[1] - 16; x2 = point[0] + 30; y2 = point[1] + 16;
  }
  const padX = (x2 - x1) * 0.12 + 6;
  const padY = (y2 - y1) * 0.12 + 6;
  x1 -= padX; y1 -= padY; x2 += padX; y2 += padY;
  const w = x2 - x1;
  const h = y2 - y1;
  if (w / h > STAGE_RATIO) {
    const grow = (w / STAGE_RATIO - h) / 2;
    y1 -= grow; y2 += grow;
  } else {
    const grow = (h * STAGE_RATIO - w) / 2;
    x1 -= grow; x2 += grow;
  }
  return `${x1.toFixed(1)} ${y1.toFixed(1)} ${(x2 - x1).toFixed(1)} ${(y2 - y1).toFixed(1)}`;
}

/** Quadratic arc between two points, bowed upward like a flight path. */
function arcPath(a: readonly [number, number], b: readonly [number, number]): string {
  const [x1, y1] = a;
  const [x2, y2] = b;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy) || 1;
  const lift = Math.min(110, 25 + dist * 0.3);
  let px = -dy / dist;
  let py = dx / dist;
  if (py > 0) {
    px = -px;
    py = -py;
  }
  const cx = (x1 + x2) / 2 + px * lift;
  const cy = (y1 + y2) / 2 + py * lift;
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function utcClock(date: Date) {
  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`;
}

/** "14:31" in the viewer's timezone, with the date prefixed once it is not today. */
function localStamp(ts: number, now: number) {
  const d = new Date(ts);
  const time = d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", hour12: false });
  const sameDay = new Date(ts).toDateString() === new Date(now).toDateString();
  return sameDay ? time : `${d.toLocaleDateString(undefined, { month: "short", day: "numeric" })} ${time}`;
}

function relativeAgo(ts: number, now: number) {
  const s = Math.max(0, Math.floor((now - ts) / 1000));
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

export function VisitorMap() {
  const [state, setState] = useState<State>({ status: "loading" });
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const tick = () => {
      void fetchState().then((next) => {
        if (!cancelled) setState(next);
      });
    };

    tick();
    const timer = setInterval(tick, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, []);

  // Esc leaves the country drill-down from anywhere on the page.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  if (state.status === "loading") {
    return (
      <div className="vmap__note" role="status">
        <span className="vmap__cursor" aria-hidden="true" /> ESTABLISHING DATA-LINK…
      </div>
    );
  }

  if (state.status === "unconfigured") {
    return (
      <div className="vmap__note vmap__note--setup">
        <p>{state.message}</p>
        <p>
          Create a Vercel KV (or Upstash Redis) store, then add <code>KV_REST_API_URL</code> and{" "}
          <code>KV_REST_API_TOKEN</code> to this project&rsquo;s environment variables and redeploy.
        </p>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="vmap__note" role="status">
        ▲ LINK DOWN — {state.message ?? "visitor data unavailable."} Retrying…
      </div>
    );
  }

  const { total, countries } = state.stats;
  const locations = state.stats.locations ?? [];
  const clock = utcClock(state.fetchedAt);
  const countByCode = new Map(countries.map((c) => [c.code, c.count]));
  const peak = countries.reduce((max, c) => Math.max(max, c.count), 0) || 1;
  const top = countries[0];

  // Drill-down: aggregate the selected country's visits by state/region.
  const drill = selected
    ? (() => {
        const inCountry = locations.filter((l) => l.country === selected);
        const byRegion = new Map<string, { count: number; cities: Map<string, number> }>();
        for (const l of inCountry) {
          const key = l.region || "??";
          const entry = byRegion.get(key) ?? { count: 0, cities: new Map<string, number>() };
          entry.count += l.count;
          if (l.city) entry.cities.set(l.city, (entry.cities.get(l.city) ?? 0) + l.count);
          byRegion.set(key, entry);
        }
        const regions = [...byRegion.entries()]
          .map(([code, { count, cities }]) => ({
            code,
            count,
            name: REGION_PINS[`${selected}-${code}`]?.[2] ?? code,
            pin: REGION_PINS[`${selected}-${code}`],
            topCity: [...cities.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "",
          }))
          .sort((a, b) => b.count - a.count);
        const countryTotal = countByCode.get(selected) ?? 0;
        const located = inCountry.reduce((sum, l) => sum + l.count, 0);

        // Preferred: exact-coordinate points (every country). Fallback: state
        // centroid pins for regions whose rows predate coordinate capture.
        const points = inCountry
          .filter((l): l is Location & { lat: number; lon: number } => l.lat !== undefined && l.lon !== undefined)
          .map((l) => ({
            key: `${l.region}|${l.city}|${l.lat}|${l.lon}`,
            label: l.city || l.region || "?",
            detail: [l.city, REGION_PINS[`${selected}-${l.region}`]?.[2] ?? l.region].filter(Boolean).join(", "),
            count: l.count,
            lat: l.lat,
            lon: l.lon,
          }));
        const geoRegions = new Set(
          inCountry.filter((l) => l.lat !== undefined).map((l) => l.region || "??"),
        );
        const pinned = regions.filter((r) => r.pin && !geoRegions.has(r.code));
        return {
          regions,
          countryTotal,
          unlocated: Math.max(0, countryTotal - located),
          unpinnedCount: regions.filter((r) => !r.pin).reduce((sum, r) => sum + r.count, 0),
          pinned,
          points,
        };
      })()
    : null;
  const regionPeak = drill?.regions[0]?.count || 1;
  const viewBox = selected ? zoomWindow(selected) : `0 0 ${MAP_W} ${MAP_H}`;
  // Keep marks legible at any zoom: scale by window width.
  const zoomScale = selected ? Number(viewBox.split(" ")[2]) / MAP_W : 1;

  const visitorShapes = countries
    .map(({ code, count }) => ({ code, count, point: countryPoint(code) }))
    .filter((c): c is { code: string; count: number; point: readonly [number, number] } => c.point !== null);

  return (
    <div className="vmap">
      <div className="vmap__readouts">
        <div className="vmap__readout">
          <span className="vmap__readout-label">Total visits</span>
          <span className="vmap__readout-value">{total.toLocaleString()}</span>
        </div>
        <div className="vmap__readout">
          <span className="vmap__readout-label">Unique visitors</span>
          <span className="vmap__readout-value">{(state.stats.uniques ?? 0).toLocaleString()}</span>
        </div>
        <div className="vmap__readout">
          <span className="vmap__readout-label">Countries</span>
          <span className="vmap__readout-value">{countries.length.toLocaleString()}</span>
        </div>
        <div className="vmap__readout">
          <span className="vmap__readout-label">{selected ? "Viewing" : "Top node"}</span>
          <span className="vmap__readout-value">
            {selected ? displayName(selected) : locations[0]?.city || locations[0]?.region || (top ? top.code : "——")}
          </span>
        </div>
        <div className="vmap__readout">
          <span className="vmap__readout-label">Last visit</span>
          <span className="vmap__readout-value vmap__readout-value--ok" aria-live="polite">
            <span className="vmap__blip" aria-hidden="true" />{" "}
            {state.stats.events?.[0] ? relativeAgo(state.stats.events[0].ts, state.fetchedAt.getTime()) : "——"}
          </span>
        </div>
      </div>

      <div className="vmap__stage">
        <svg
          className="vmap__canvas"
          viewBox={viewBox}
          role="img"
          aria-label={
            selected
              ? `Map of ${displayName(selected)} showing visits by state`
              : `World map showing live visitor connections from ${countries.length} countries`
          }
        >
          <defs>
            <radialGradient id="vmap-ocean" cx="0.5" cy="0.42" r="0.75">
              <stop offset="0" stopColor="#0e2036" />
              <stop offset="1" stopColor="#060d18" />
            </radialGradient>
            <linearGradient id="vmap-hot" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#155e4b" />
              <stop offset="1" stopColor="#1d4ed8" />
            </linearGradient>
            <radialGradient id="vmap-hub" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#b9ffe0" />
              <stop offset="1" stopColor="#28f2a0" stopOpacity="0" />
            </radialGradient>
            <filter id="vmap-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation={5 * zoomScale} result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Ocean: clicking it leaves the drill-down */}
          <rect
            x={-MAP_W}
            y={-MAP_H}
            width={MAP_W * 3}
            height={MAP_H * 3}
            fill="url(#vmap-ocean)"
            onClick={() => setSelected(null)}
          />

          {/* Country landmasses */}
          <g className="vmap__countries">
            {WORLD_COUNTRIES.map(({ code, d }) => {
              const count = countByCode.get(code) ?? 0;
              const active = count > 0;
              const isSelected = code === selected;
              const intensity = active ? 0.25 + 0.55 * Math.sqrt(count / peak) : 0;
              return (
                <path
                  key={code}
                  d={d}
                  className={[
                    "vmap__country",
                    active ? "vmap__country--active" : "",
                    isSelected ? "vmap__country--selected" : "",
                    selected && !isSelected ? "vmap__country--dim" : "",
                  ].join(" ")}
                  style={active && !isSelected ? { fillOpacity: intensity } : undefined}
                  role={active ? "button" : undefined}
                  tabIndex={active ? 0 : undefined}
                  aria-label={active ? `Show states for ${displayName(code)} (${count} visits)` : undefined}
                  onClick={
                    active
                      ? (e) => {
                          e.stopPropagation();
                          setSelected(code);
                        }
                      : undefined
                  }
                  onKeyDown={
                    active
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setSelected(code);
                          }
                        }
                      : undefined
                  }
                >
                  <title>
                    {active
                      ? `${displayName(code)}: ${count.toLocaleString()} visit${count === 1 ? "" : "s"} — click to view states`
                      : displayName(code)}
                  </title>
                </path>
              );
            })}
          </g>

          {/* World view: connection beams + country nodes */}
          {!selected ? (
            <>
              <g className="vmap__beams" aria-hidden="true">
                {visitorShapes.map(({ code, point }, i) => {
                  const d = arcPath(point, HUB);
                  return (
                    <g key={code}>
                      <path className="vmap__beam" d={d} pathLength={100} />
                      <circle
                        className="vmap__packet"
                        r={3.2}
                        style={{
                          offsetPath: `path("${d}")`,
                          animationDuration: `${3.2 + (i % 5) * 0.55}s`,
                          animationDelay: `${-(i * 1.1)}s`,
                        }}
                      />
                    </g>
                  );
                })}
              </g>

              <g className="vmap__hubnode" aria-hidden="true">
                <circle cx={HUB[0]} cy={HUB[1]} r={26} fill="url(#vmap-hub)" opacity={0.3} />
                <circle className="vmap__hub-ring" cx={HUB[0]} cy={HUB[1]} r={6} />
                <circle cx={HUB[0]} cy={HUB[1]} r={4} className="vmap__hub-core" />
              </g>

              <g aria-hidden="true">
                {visitorShapes.map(({ code, count, point }, i) => {
                  const r = 4 + Math.sqrt(count / peak) * 8;
                  return (
                    <g key={code} className="vmap__node">
                      <circle className="vmap__ping" cx={point[0]} cy={point[1]} r={r} style={{ animationDelay: `${(i % 6) * 0.4}s` }} />
                      <circle className="vmap__node-core" cx={point[0]} cy={point[1]} r={r} filter="url(#vmap-glow)" />
                    </g>
                  );
                })}
              </g>
            </>
          ) : null}

          {/* Drill view: state pins, plus an aggregate marker for visits without a pinned state */}
          {drill && selected ? (
            <g>
              {drill.points.map(({ key, label, detail, count, lat, lon }, i) => {
                const [x, y] = projectLatLon(lat, lon);
                const pointPeak = drill.points[0] ? Math.max(...drill.points.map((pt) => pt.count)) : 1;
                const r = (5 + Math.sqrt(count / pointPeak) * 9) * zoomScale;
                return (
                  <g key={key} className="vmap__node">
                    <circle className="vmap__ping" cx={x} cy={y} r={r} style={{ animationDelay: `${(i % 6) * 0.4}s` }} />
                    <circle className="vmap__node-core" cx={x} cy={y} r={r} filter="url(#vmap-glow)" />
                    <text className="vmap__region-label" x={x} y={y - r - 5 * zoomScale} style={{ fontSize: `${13 * zoomScale}px` }}>
                      {label}
                    </text>
                    <title>{`${detail || label}: ${count.toLocaleString()} visit${count === 1 ? "" : "s"}`}</title>
                  </g>
                );
              })}
              {drill.pinned.map(({ code, count, name, pin, topCity }, i) => {
                const [x, y] = projectLatLon(pin![0], pin![1]);
                const r = (5 + Math.sqrt(count / regionPeak) * 9) * zoomScale;
                return (
                  <g key={code} className="vmap__node">
                    <circle className="vmap__ping" cx={x} cy={y} r={r} style={{ animationDelay: `${(i % 6) * 0.4}s` }} />
                    <circle className="vmap__node-core" cx={x} cy={y} r={r} filter="url(#vmap-glow)" />
                    <text className="vmap__region-label" x={x} y={y - r - 5 * zoomScale} style={{ fontSize: `${13 * zoomScale}px` }}>
                      {code}
                    </text>
                    <title>{`${name}${topCity ? ` (top city: ${topCity})` : ""}: ${count.toLocaleString()} visit${count === 1 ? "" : "s"}`}</title>
                  </g>
                );
              })}
              {drill.points.length === 0 && drill.pinned.length === 0 && (drill.unpinnedCount > 0 || drill.unlocated > 0) ? (
                (() => {
                  const point = countryPoint(selected);
                  if (!point) return null;
                  const r = 9 * zoomScale;
                  return (
                    <g className="vmap__node">
                      <circle className="vmap__ping" cx={point[0]} cy={point[1]} r={r} />
                      <circle className="vmap__node-core" cx={point[0]} cy={point[1]} r={r} filter="url(#vmap-glow)" />
                      <title>{`${displayName(selected)}: ${drill.countryTotal.toLocaleString()} visits — see the state list below`}</title>
                    </g>
                  );
                })()
              ) : null}
            </g>
          ) : null}
        </svg>

        {selected ? (
          <button type="button" className="vmap__back" onClick={() => setSelected(null)}>
            ◂ WORLD VIEW
          </button>
        ) : null}
        {selected ? (
          <span className="vmap__stage-title">
            {displayName(selected).toUpperCase()} · {drill?.countryTotal.toLocaleString()} VISITS
          </span>
        ) : null}
        <span className="vmap__corner vmap__corner--tl" aria-hidden="true" />
        <span className="vmap__corner vmap__corner--tr" aria-hidden="true" />
        <span className="vmap__corner vmap__corner--bl" aria-hidden="true" />
        <span className="vmap__corner vmap__corner--br" aria-hidden="true" />
      </div>

      <div className="vmap__bottom">
        <div className="vmap__log" role="log" aria-label="Recent visits, most recent first, times shown in your timezone">
          <p className="vmap__log-line vmap__log-line--dim">{`> ${clock} UTC ── uplink sync ok · ${total.toLocaleString()} visits total · times below are your local time`}</p>
          {(state.stats.events ?? []).slice(0, 10).map(({ ts, country, region, city }) => {
            const place = [city, region].filter(Boolean).join(", ") || displayName(country);
            return (
              <p key={`${ts}-${country}-${city}`} className="vmap__log-line">
                {`> ${localStamp(ts, state.fetchedAt.getTime())} ── inbound ▸ ${place} · ${country} · ${relativeAgo(ts, state.fetchedAt.getTime())}`}
              </p>
            );
          })}
          {(state.stats.events ?? []).length === 0 ? (
            <p className="vmap__log-line">{"> awaiting first inbound connection…"}</p>
          ) : null}
          <p className="vmap__log-line" aria-hidden="true">
            {"> "}
            <span className="vmap__cursor" />
          </p>
        </div>

        {drill && selected ? (
          <ol className="vmap__rank" aria-label={`Visits by state in ${displayName(selected)}`}>
            {drill.regions.slice(0, 12).map(({ code, count, name, topCity }) => (
              <li key={code}>
                <span className="vmap__rank-code">{code}</span>
                <span className="vmap__rank-name">{name}{topCity ? ` · ${topCity}` : ""}</span>
                <span className="vmap__rank-bar" style={{ "--share": `${(count / regionPeak) * 100}%` } as React.CSSProperties} />
                <span className="vmap__rank-count">{count.toLocaleString()}</span>
              </li>
            ))}
            {drill.unlocated > 0 ? (
              <li>
                <span className="vmap__rank-code">··</span>
                <span className="vmap__rank-name">state not recorded</span>
                <span className="vmap__rank-bar" style={{ "--share": `${(drill.unlocated / regionPeak) * 100}%` } as React.CSSProperties} />
                <span className="vmap__rank-count">{drill.unlocated.toLocaleString()}</span>
              </li>
            ) : null}
            {drill.regions.length === 0 ? (
              <li className="vmap__rank-note">
                <span className="vmap__rank-name">
                  {drill.unlocated > 0
                    ? `these ${drill.unlocated.toLocaleString()} visit${drill.unlocated === 1 ? "" : "s"} arrived before state-level tracking was enabled — new visits will appear here with their state and city`
                    : "no visits recorded from this country since state-level tracking was enabled"}
                </span>
              </li>
            ) : null}
          </ol>
        ) : countries.length > 0 ? (
          <ol className="vmap__rank" aria-label="Visits by country">
            {countries.slice(0, 10).map(({ code, count }) => (
              <li key={code}>
                <span className="vmap__rank-code">{code}</span>
                <span className="vmap__rank-name">{displayName(code)}</span>
                <span className="vmap__rank-bar" style={{ "--share": `${(count / peak) * 100}%` } as React.CSSProperties} />
                <span className="vmap__rank-count">{count.toLocaleString()}</span>
              </li>
            ))}
          </ol>
        ) : null}

        {!selected && locations.length > 0 ? (
          <ol className="vmap__rank vmap__rank--cities" aria-label="Visits by city">
            {locations.slice(0, 10).map(({ country, region, city, count }) => {
              const label = [city, region].filter(Boolean).join(", ") || displayName(country);
              const key = `${country}|${region}|${city}`;
              const cityPeak = locations[0]?.count || 1;
              return (
                <li key={key}>
                  <span className="vmap__rank-code">{country}</span>
                  <span className="vmap__rank-name">{label}</span>
                  <span className="vmap__rank-bar" style={{ "--share": `${(count / cityPeak) * 100}%` } as React.CSSProperties} />
                  <span className="vmap__rank-count">{count.toLocaleString()}</span>
                </li>
              );
            })}
          </ol>
        ) : null}
      </div>
    </div>
  );
}
