"use client";

import { useEffect, useMemo, useState } from "react";

import { countryLabel } from "@/lib/country-centroids";
import { COUNTRY_PINS, DOT_MAP_H, DOT_MAP_W, LAND_DOTS } from "@/lib/world-dots";

const POLL_MS = 15_000;

/** Origin node the connection beams converge on (St. Louis, MO). */
const HUB: readonly [number, number] = [28, 21.7];

type Location = { country: string; region: string; city: string; count: number };
type Stats = {
  total: number;
  countries: Array<{ code: string; count: number }>;
  locations?: Location[];
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

/** Quadratic arc between two grid points, bowed upward like a flight path. */
function arcPath(a: readonly [number, number], b: readonly [number, number]): string {
  const [x1, y1] = a;
  const [x2, y2] = b;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy) || 1;
  const lift = Math.min(13, 3 + dist * 0.32);
  let px = -dy / dist;
  let py = dx / dist;
  if (py > 0) {
    px = -px;
    py = -py;
  }
  const cx = (x1 + x2) / 2 + px * lift;
  const cy = (y1 + y2) / 2 + py * lift;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

/** Deterministic PRNG so the ambient background traffic is stable per mount. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Faint decorative arcs between random landmass points — background noise for the board. */
function useAmbientArcs(count: number) {
  return useMemo(() => {
    const rand = mulberry32(1304);
    const arcs: Array<{ d: string; dur: number; delay: number }> = [];
    let guard = 0;
    while (arcs.length < count && guard < 200) {
      guard += 1;
      const a = LAND_DOTS[Math.floor(rand() * LAND_DOTS.length)];
      const b = LAND_DOTS[Math.floor(rand() * LAND_DOTS.length)];
      if (Math.hypot(a[0] - b[0], a[1] - b[1]) < 22) continue;
      arcs.push({ d: arcPath(a, b), dur: 7 + rand() * 8, delay: -rand() * 12 });
    }
    return arcs;
  }, [count]);
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function utcClock(date: Date) {
  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`;
}

export function VisitorMap() {
  const [state, setState] = useState<State>({ status: "loading" });
  const ambient = useAmbientArcs(7);

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
  const plotted = countries.filter((c) => COUNTRY_PINS[c.code]);
  const peak = countries.reduce((max, c) => Math.max(max, c.count), 0) || 1;
  const top = countries[0];

  return (
    <div className="vmap">
      <div className="vmap__readouts">
        <div className="vmap__readout">
          <span className="vmap__readout-label">Total visits</span>
          <span className="vmap__readout-value">{total.toLocaleString()}</span>
        </div>
        <div className="vmap__readout">
          <span className="vmap__readout-label">Countries</span>
          <span className="vmap__readout-value">{countries.length.toLocaleString()}</span>
        </div>
        <div className="vmap__readout">
          <span className="vmap__readout-label">Top node</span>
          <span className="vmap__readout-value">
            {locations[0]?.city || locations[0]?.region || (top ? top.code : "——")}
          </span>
        </div>
        <div className="vmap__readout">
          <span className="vmap__readout-label">Uplink</span>
          <span className="vmap__readout-value vmap__readout-value--ok" aria-live="polite">
            <span className="vmap__blip" aria-hidden="true" /> 15s
          </span>
        </div>
      </div>

      <div className="vmap__stage">
        <svg
          className="vmap__canvas"
          viewBox={`-2 -2 ${DOT_MAP_W + 4} ${DOT_MAP_H + 4}`}
          role="img"
          aria-label={`World map showing live visitor connections from ${countries.length} countries`}
        >
          <defs>
            <linearGradient id="vmap-arc" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#28f2a0" stopOpacity="0" />
              <stop offset="0.5" stopColor="#28f2a0" stopOpacity="0.9" />
              <stop offset="1" stopColor="#59f5ff" stopOpacity="0.9" />
            </linearGradient>
            <radialGradient id="vmap-hub" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#b9ffe0" />
              <stop offset="1" stopColor="#28f2a0" stopOpacity="0" />
            </radialGradient>
            <filter id="vmap-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="0.7" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Landmass dot matrix */}
          <g className="vmap__land">
            {LAND_DOTS.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={0.32} />
            ))}
          </g>

          {/* Ambient background traffic (decorative) */}
          <g className="vmap__ambient" aria-hidden="true">
            {ambient.map((arc, i) => (
              <path
                key={i}
                d={arc.d}
                pathLength={100}
                style={{ animationDuration: `${arc.dur}s`, animationDelay: `${arc.delay}s` }}
              />
            ))}
          </g>

          {/* Live connection beams: each visitor country -> origin node */}
          <g className="vmap__beams" aria-hidden="true">
            {plotted.map(({ code }, i) => {
              const pin = COUNTRY_PINS[code];
              const d = arcPath(pin, HUB);
              return (
                <g key={code}>
                  <path className="vmap__beam" d={d} pathLength={100} filter="url(#vmap-glow)" />
                  <circle
                    className="vmap__packet"
                    r={0.62}
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

          {/* Origin node */}
          <g className="vmap__hubnode" aria-hidden="true">
            <circle cx={HUB[0]} cy={HUB[1]} r={4.5} fill="url(#vmap-hub)" opacity={0.35} />
            <circle className="vmap__hub-ring" cx={HUB[0]} cy={HUB[1]} r={1} />
            <circle cx={HUB[0]} cy={HUB[1]} r={0.75} className="vmap__hub-core" />
          </g>

          {/* Visitor nodes with radar pings */}
          <g>
            {plotted.map(({ code, count }, i) => {
              const [x, y] = COUNTRY_PINS[code];
              const r = 0.8 + Math.sqrt(count / peak) * 1.3;
              return (
                <g key={code} className="vmap__node">
                  <circle
                    className="vmap__ping"
                    cx={x}
                    cy={y}
                    r={r}
                    style={{ animationDelay: `${(i % 6) * 0.4}s` }}
                  />
                  <circle
                    className="vmap__ping vmap__ping--late"
                    cx={x}
                    cy={y}
                    r={r}
                    style={{ animationDelay: `${(i % 6) * 0.4 + 1.1}s` }}
                  />
                  <circle className="vmap__node-core" cx={x} cy={y} r={r} filter="url(#vmap-glow)" />
                  <title>{`${countryLabel(code)}: ${count.toLocaleString()} visit${count === 1 ? "" : "s"}`}</title>
                </g>
              );
            })}
          </g>
        </svg>
        <div className="vmap__scan" aria-hidden="true" />
        <span className="vmap__corner vmap__corner--tl" aria-hidden="true" />
        <span className="vmap__corner vmap__corner--tr" aria-hidden="true" />
        <span className="vmap__corner vmap__corner--bl" aria-hidden="true" />
        <span className="vmap__corner vmap__corner--br" aria-hidden="true" />
      </div>

      <div className="vmap__bottom">
        <div className="vmap__log" role="log" aria-label="Connection log">
          <p className="vmap__log-line vmap__log-line--dim">{`> ${clock} UTC ── uplink sync ok · ${total.toLocaleString()} packets total`}</p>
          {countries.slice(0, 6).map(({ code, count }) => (
            <p key={code} className="vmap__log-line">
              {`> ${clock} UTC ── inbound ▸ ${code} · ${countryLabel(code)} · ${count.toLocaleString()} visit${count === 1 ? "" : "s"}`}
            </p>
          ))}
          {countries.length === 0 ? (
            <p className="vmap__log-line">{"> awaiting first inbound connection…"}</p>
          ) : null}
          <p className="vmap__log-line" aria-hidden="true">
            {"> "}
            <span className="vmap__cursor" />
          </p>
        </div>

        {countries.length > 0 ? (
          <ol className="vmap__rank" aria-label="Visits by country">
            {countries.slice(0, 10).map(({ code, count }) => (
              <li key={code}>
                <span className="vmap__rank-code">{code}</span>
                <span className="vmap__rank-name">{countryLabel(code)}</span>
                <span className="vmap__rank-bar" style={{ "--share": `${(count / peak) * 100}%` } as React.CSSProperties} />
                <span className="vmap__rank-count">{count.toLocaleString()}</span>
              </li>
            ))}
          </ol>
        ) : null}

        {locations.length > 0 ? (
          <ol className="vmap__rank vmap__rank--cities" aria-label="Visits by city">
            {locations.slice(0, 10).map(({ country, region, city, count }) => {
              const label = [city, region].filter(Boolean).join(", ") || countryLabel(country);
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
