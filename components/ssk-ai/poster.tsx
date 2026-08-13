import type { SskAiIssuePoster } from "@/lib/ssk-ai/types";

function NetworkMotif() {
  return (
    <svg
      className="ssk-poster__motif"
      viewBox="0 0 280 340"
      role="img"
      aria-label="Five specialized nodes joined by routing lines into one network"
    >
      <title>Specialized cooperating intelligence</title>
      <defs>
        <linearGradient id="ssk-node-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--ssk-accent, #1b2d5f)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--ssk-accent, #1b2d5f)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="currentColor" strokeWidth="1.15" opacity="0.72">
        <path d="M78 86 C118 120, 128 148, 142 188" />
        <path d="M142 188 C168 150, 186 128, 214 96" />
        <path d="M142 188 C128 230, 118 258, 96 292" />
        <path d="M142 188 C176 236, 198 262, 228 278" />
        <path d="M78 86 C132 70, 176 74, 214 96" />
        <path d="M96 292 C150 250, 190 248, 228 278" />
      </g>
      {/* Very large — frontier scale */}
      <circle cx="78" cy="86" r="38" fill="url(#ssk-node-fill)" stroke="currentColor" strokeWidth="1.6" />
      {/* Large */}
      <circle cx="214" cy="96" r="26" fill="url(#ssk-node-fill)" stroke="currentColor" strokeWidth="1.5" />
      {/* Small executor */}
      <circle cx="96" cy="292" r="12" fill="url(#ssk-node-fill)" stroke="currentColor" strokeWidth="1.4" />
      {/* Medium behind a thin gate */}
      <g>
        <line x1="208" y1="248" x2="208" y2="308" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="228" cy="278" r="18" fill="url(#ssk-node-fill)" stroke="currentColor" strokeWidth="1.5" />
      </g>
      {/* Aperture mark — multimodal */}
      <g transform="translate(142 188)">
        <circle r="20" fill="url(#ssk-node-fill)" stroke="currentColor" strokeWidth="1.5" />
        <circle r="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M0 -14 L4 -4 L14 0 L4 4 L0 14 L-4 4 L-14 0 L-4 -4 Z" fill="none" stroke="currentColor" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function SskAiPoster({
  poster,
  datePublished,
  className,
}: {
  poster: SskAiIssuePoster;
  datePublished?: string;
  className?: string;
}) {
  return (
    <div className={className ? `ssk-poster ${className}` : "ssk-poster"}>
      <div className="ssk-poster__band">
        <p className="ssk-poster__brand">{poster.brand}</p>
        <p className="ssk-poster__date">
          <time dateTime={datePublished}>{poster.dateLabel}</time>
        </p>
      </div>
      <div className="ssk-poster__intro">
        <p className="ssk-poster__title">{poster.title}</p>
        <p className="ssk-poster__theme">{poster.theme}</p>
      </div>
      <div className="ssk-poster__body">
        <ol className="ssk-poster__headlines">
          {poster.headlines.map((headline, index) => (
            <li key={headline}>
              <span className="ssk-poster__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{headline}</span>
            </li>
          ))}
        </ol>
        <div className="ssk-poster__visual">
          <NetworkMotif />
        </div>
      </div>
    </div>
  );
}
