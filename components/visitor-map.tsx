"use client";

import { useEffect, useState } from "react";

import { countryLabel, lookupCountry } from "@/lib/country-centroids";

const MAP_W = 720;
const MAP_H = 360;
const POLL_MS = 15_000;

type Stats = { total: number; countries: Array<{ code: string; count: number }> };
type State = { status: "loading" | "ready" | "unconfigured" | "error"; stats?: Stats; message?: string };

/** Equirectangular projection onto the MAP_W x MAP_H viewBox. */
function project(lat: number, lon: number) {
  return { x: ((lon + 180) / 360) * MAP_W, y: ((90 - lat) / 180) * MAP_H };
}

function graticule() {
  const lines = [];
  for (let lon = -150; lon <= 150; lon += 30) {
    const { x } = project(0, lon);
    lines.push(<line key={`m${lon}`} x1={x} y1={0} x2={x} y2={MAP_H} />);
  }
  for (let lat = -60; lat <= 60; lat += 30) {
    const { y } = project(lat, 0);
    lines.push(<line key={`p${lat}`} x1={0} y1={y} x2={MAP_W} y2={y} />);
  }
  return lines;
}

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
    return { status: "ready", stats: (await response.json()) as Stats };
  } catch {
    return { status: "error", message: "Could not reach the analytics endpoint." };
  }
}

export function VisitorMap() {
  const [state, setState] = useState<State>({ status: "loading" });

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
    return <p className="visitor-map__note">Loading live visitor data…</p>;
  }

  if (state.status === "unconfigured") {
    return (
      <div className="visitor-map__note visitor-map__note--setup">
        <p>{state.message}</p>
        <p>
          Create a Vercel KV (or Upstash Redis) store, then add <code>KV_REST_API_URL</code> and{" "}
          <code>KV_REST_API_TOKEN</code> to this project&rsquo;s environment variables and redeploy.
        </p>
      </div>
    );
  }

  if (state.status === "error" || !state.stats) {
    return <p className="visitor-map__note">{state.message ?? "Visitor data unavailable."}</p>;
  }

  const { total, countries } = state.stats;
  const plotted = countries.filter((c) => lookupCountry(c.code));
  const peak = plotted.reduce((max, c) => Math.max(max, c.count), 0) || 1;

  return (
    <div className="visitor-map">
      <div className="visitor-map__stats">
        <div className="visitor-map__stat">
          <span className="visitor-map__value">{total.toLocaleString()}</span>
          <span className="visitor-map__label">Total visits</span>
        </div>
        <div className="visitor-map__stat">
          <span className="visitor-map__value">{countries.length.toLocaleString()}</span>
          <span className="visitor-map__label">Countries</span>
        </div>
        <p className="visitor-map__live" aria-live="polite">
          <span className="visitor-map__pulse" aria-hidden="true" /> Live · refreshes every 15s
        </p>
      </div>

      <svg
        className="visitor-map__canvas"
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        role="img"
        aria-label={`World map showing visitors from ${countries.length} countries`}
      >
        <g className="visitor-map__grid">{graticule()}</g>
        <g>
          {plotted.map(({ code, count }) => {
            const centroid = lookupCountry(code);
            if (!centroid) return null;
            const { x, y } = project(centroid.lat, centroid.lon);
            const r = 3 + Math.sqrt(count / peak) * 15;
            return (
              <g key={code} className="visitor-map__dot">
                <circle cx={x} cy={y} r={r} />
                <title>{`${centroid.name}: ${count.toLocaleString()} visit${count === 1 ? "" : "s"}`}</title>
              </g>
            );
          })}
        </g>
      </svg>

      {countries.length > 0 ? (
        <ol className="visitor-map__list">
          {countries.slice(0, 12).map(({ code, count }) => (
            <li key={code}>
              <span>{countryLabel(code)}</span>
              <span className="visitor-map__bar" style={{ "--share": `${(count / peak) * 100}%` } as React.CSSProperties} />
              <span>{count.toLocaleString()}</span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="visitor-map__note">No visits recorded yet — the first page view will appear here.</p>
      )}
    </div>
  );
}
