import Image from "next/image";
import Link from "next/link";

import { NewsroomCalendar } from "@/components/ssk-ai/newsroom-calendar";
import { SskAiPoster } from "@/components/ssk-ai/poster";
import { getIssuePath, isEditorialImageAvailable, SSK_AI_HUB, TECH_NEWS, type SskAiIssue } from "@/lib/ssk-ai";
import type { MonthCalendar } from "@/lib/ssk-ai/calendar";
import type { EditorialImageVisual } from "@/lib/ssk-ai/types";
import { CADENCE_RULES, formatLongDate, monthName, type PlannedEdition } from "@/lib/ssk-ai/schedule";

function editionLabel(issue: SskAiIssue) {
  return issue.edition.kind === "monthly" ? "Month in review" : `Weekly No. ${issue.edition.number}`;
}

/** The edition's hero artwork, when it has one and the file actually exists. */
function editionArt(issue: SskAiIssue): EditorialImageVisual | null {
  return issue.hero && isEditorialImageAvailable(issue.hero.src) ? issue.hero : null;
}

export function EditionCard({ issue, featured = false }: { issue: SskAiIssue; featured?: boolean }) {
  const href = getIssuePath(issue);
  const art = editionArt(issue);

  return (
    <article className={featured ? "card ssk-edition ssk-edition--front" : "card ssk-edition"}>
      <div className="ssk-edition__rule">
        <span className="meta-pill">{editionLabel(issue)}</span>
        <span className="ssk-edition__period">{issue.edition.periodLabel}</span>
      </div>
      {art ? (
        // Decorative duplicate of the title link: hidden from the accessibility
        // tree and the tab order so the card is announced once, via its title.
        <Link className="ssk-edition__media" href={href} aria-hidden="true" tabIndex={-1}>
          <Image
            src={art.src}
            alt=""
            width={art.width}
            height={art.height}
            sizes={featured ? "(max-width: 780px) 100vw, 1100px" : "(max-width: 780px) 100vw, 420px"}
          />
        </Link>
      ) : null}
      <h3 className="ssk-edition__title">
        <Link href={href}>{issue.cardTitle}</Link>
      </h3>
      <p className="ssk-edition__theme">{issue.theme}</p>
      {featured ? (
        <SskAiPoster poster={issue.poster} datePublished={issue.datePublished} className="ssk-poster--card" />
      ) : null}
      <p className="ssk-edition__byline">
        Published <time dateTime={issue.datePublished}>{formatLongDate(issue.datePublished)}</time>
        <span aria-hidden="true"> · </span>
        {issue.stories.length} {issue.stories.length === 1 ? "story" : "stories"}
      </p>
      <Link className={featured ? "button button--primary" : "inline-link"} href={href}>
        <span>Read this edition</span>
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

function PublishingCalendar({
  year,
  month,
  windows,
  artBySlug,
}: {
  year: number;
  month: number;
  windows: PlannedEdition[];
  artBySlug: ReadonlyMap<string, EditorialImageVisual>;
}) {
  return (
    <div className="ssk-calendar">
      <div className="ssk-calendar__head">
        <h2 id="ssk-calendar-title" className="ssk-hub__section-title">
          {monthName(month)} {year} desk
        </h2>
        <p className="ssk-calendar__note">
          Every window this month, and what is filling it. A window stays marked scheduled until its edition is
          written — nothing is auto-generated.
        </p>
      </div>
      <ol className="ssk-calendar__list list-reset">
        {windows.map((window) => {
          const art = window.slug ? artBySlug.get(window.slug) : undefined;
          return (
          <li className={`ssk-calendar__slot is-${window.status}`} key={`${window.kind}-${window.index}`}>
            {art && window.slug ? (
              <Link
                className="ssk-calendar__media"
                href={`${TECH_NEWS.path}/${window.slug}`}
                aria-hidden="true"
                tabIndex={-1}
              >
                <Image src={art.src} alt="" width={art.width} height={art.height} sizes="(max-width: 720px) 100vw, 320px" />
              </Link>
            ) : null}
            <div className="ssk-calendar__slot-head">
              <span className="ssk-calendar__label">{window.label}</span>
              <span className={`ssk-calendar__status ssk-calendar__status--${window.status}`}>
                {window.status === "published" ? "Published" : "Scheduled"}
              </span>
            </div>
            <p className="ssk-calendar__period">{window.periodLabel}</p>
            <p className="ssk-calendar__due">
              {window.status === "published" ? "Out" : "Due"} {formatLongDate(window.publishOn)}
            </p>
            {window.slug && window.title ? (
              <Link className="ssk-calendar__link" href={`${TECH_NEWS.path}/${window.slug}`}>
                {window.title}
              </Link>
            ) : (
              <p className="ssk-calendar__empty">Awaiting the edition for this window.</p>
            )}
          </li>
          );
        })}
      </ol>
    </div>
  );
}

export function TechNewsDesk({
  issues,
  plan,
  calendar,
}: {
  issues: readonly SskAiIssue[];
  plan: { year: number; month: number; windows: PlannedEdition[] };
  calendar: { months: MonthCalendar[]; initialIndex: number; initialSelected: string | null };
}) {
  const [latest, ...previous] = issues;
  const artBySlug = new Map(
    issues.flatMap((issue) => {
      const art = editionArt(issue);
      return art ? [[issue.slug, art] as const] : [];
    }),
  );

  return (
    <main id="main-content" className="page-shell ssk-page ssk-hub">
      <section className="section section--tight">
        <div className="container">
          <p className="ssk-kicker">
            <Link href={SSK_AI_HUB.path}>{SSK_AI_HUB.name}</Link>
            <span aria-hidden="true"> · </span>
            {TECH_NEWS.name}
          </p>
          <div className="ssk-masthead ssk-masthead--news">
            <p className="ssk-masthead__rule">
              <span>Vol. {latest ? latest.edition.volume : 1}</span>
              <span aria-hidden="true">·</span>
              <span>{issues.length} editions</span>
              <span aria-hidden="true">·</span>
              <span>Weekly &amp; monthly</span>
            </p>
            <h1 className="ssk-masthead__title">{TECH_NEWS.name}</h1>
            <p className="ssk-masthead__tagline">{TECH_NEWS.tagline}</p>
          </div>
          <p className="ssk-hub__intro">{TECH_NEWS.blurb}</p>
        </div>
      </section>

      {latest ? (
        <section className="section section--tight" aria-labelledby="ssk-front-title">
          <div className="container">
            <h2 id="ssk-front-title" className="ssk-hub__section-title">
              Current edition
            </h2>
            <EditionCard issue={latest} featured />
          </div>
        </section>
      ) : null}

      <section className="section section--tight" aria-labelledby="ssk-newsroom-title">
        <div className="container">
          <h2 id="ssk-newsroom-title" className="ssk-hub__section-title">
            Browse by date
          </h2>
          <p className="ssk-newsroom__note">
            Every day resolves to its news: a date with a story jumps straight to it, a quieter day opens the
            week&apos;s edition, and an unwritten window says when its edition is due.
          </p>
          <NewsroomCalendar {...calendar} />
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="ssk-calendar-title">
        <div className="container">
          <PublishingCalendar {...plan} artBySlug={artBySlug} />
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="ssk-cadence-title">
        <div className="container">
          <h2 id="ssk-cadence-title" className="ssk-hub__section-title">
            How this desk publishes
          </h2>
          {/* The table has a hard minimum width and scrolls horizontally on a phone.
              A scroll container that only a mouse or finger can move is a keyboard
              trap for its content (WCAG 2.1.1), so it takes focus and announces itself
              as a region. */}
          <div className="card ssk-cadence" tabIndex={0} role="region" aria-label="Publishing cadence">
            <table className="ssk-cadence__table">
              <caption className="ssk-cadence__caption">
                News is collected while its window runs and goes out the morning after the window closes, the way a
                paper dates an edition rather than a feed timestamping a post.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Coverage window</th>
                  <th scope="col">Publishes</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                {CADENCE_RULES.map((rule) => (
                  <tr key={rule.window}>
                    <th scope="row">{rule.window}</th>
                    <td>{rule.publishes}</td>
                    <td>{rule.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {previous.length > 0 ? (
        <section className="section section--tight" aria-labelledby="ssk-archive-title">
          <div className="container">
            <h2 id="ssk-archive-title" className="ssk-hub__section-title">
              Archive
            </h2>
            <div className="ssk-edition-grid">
              {previous.map((issue) => (
                <EditionCard key={issue.slug} issue={issue} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
