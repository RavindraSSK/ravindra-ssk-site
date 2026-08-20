/**
 * The Tech News publishing calendar.
 *
 * SSK AI Hub's news desk runs on a newspaper cadence rather than a rolling feed: a
 * week's stories are collected while the week runs and go out as one dated edition the
 * morning after it closes, and the month closes with a single recap of the whole month.
 *
 *   Week 1   days  1–7    published on the 8th
 *   Week 2   days  8–14   published on the 15th
 *   Week 3   days 15–21   published on the 22nd
 *   Week 4   days 22–end  published on the 1st of the following month
 *   Month    days  1–end  published on the last day of the month
 *
 * Everything here is pure date arithmetic in UTC with no reference to the current
 * clock, so a page that renders a calendar stays byte-identical between builds. Which
 * windows are *filled* is decided by comparing against the editions that actually
 * exist (see `buildMonthPlan`), never by asking what today's date is.
 */

export type EditionKind = "weekly" | "monthly";

export type EditionWindow = {
  kind: EditionKind;
  /** 1-4 for weekly windows, 0 for the month recap. */
  index: number;
  year: number;
  /** 1-12. */
  month: number;
  /** Inclusive ISO date (YYYY-MM-DD) of the first day covered. */
  periodStart: string;
  /** Inclusive ISO date of the last day covered. */
  periodEnd: string;
  /** ISO date the edition is due to go out. */
  publishOn: string;
  /** "Week 1" / "Month in review". */
  label: string;
  /** "August 1–7, 2026". */
  periodLabel: string;
};

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

function iso(year: number, month: number, day: number) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function daysInMonth(year: number, month: number) {
  // Day 0 of the next month is the last day of this one.
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

function nextDay(year: number, month: number, day: number) {
  const date = new Date(Date.UTC(year, month - 1, day + 1));
  return iso(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
}

export function monthName(month: number) {
  return MONTH_NAMES[month - 1];
}

/** "August 1–7, 2026", or "July 28 – August 3, 2026" if a window ever spans months. */
export function formatPeriodLabel(periodStart: string, periodEnd: string) {
  const [startYear, startMonth, startDay] = periodStart.split("-").map(Number);
  const [endYear, endMonth, endDay] = periodEnd.split("-").map(Number);

  if (startYear === endYear && startMonth === endMonth) {
    return `${monthName(startMonth)} ${startDay}–${endDay}, ${endYear}`;
  }

  if (startYear === endYear) {
    return `${monthName(startMonth)} ${startDay} – ${monthName(endMonth)} ${endDay}, ${endYear}`;
  }

  return `${monthName(startMonth)} ${startDay}, ${startYear} – ${monthName(endMonth)} ${endDay}, ${endYear}`;
}

/** "August 12, 2026" */
export function formatLongDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return `${monthName(month)} ${day}, ${year}`;
}

const WEEK_STARTS = [1, 8, 15, 22] as const;

/** The four weekly windows and the month recap, in publishing order. */
export function getMonthEditionWindows(year: number, month: number): EditionWindow[] {
  const lastDay = daysInMonth(year, month);

  const weekly: EditionWindow[] = WEEK_STARTS.map((start, position) => {
    const index = position + 1;
    const end = index === WEEK_STARTS.length ? lastDay : start + 6;
    const periodStart = iso(year, month, start);
    const periodEnd = iso(year, month, end);

    return {
      kind: "weekly" as const,
      index,
      year,
      month,
      periodStart,
      periodEnd,
      // The edition lands the morning after its window closes, which rolls into the
      // next month for week 4.
      publishOn: nextDay(year, month, end),
      label: `Week ${index}`,
      periodLabel: formatPeriodLabel(periodStart, periodEnd),
    };
  });

  const periodStart = iso(year, month, 1);
  const periodEnd = iso(year, month, lastDay);
  const monthly: EditionWindow = {
    kind: "monthly",
    index: 0,
    year,
    month,
    periodStart,
    periodEnd,
    publishOn: periodEnd,
    label: "Month in review",
    periodLabel: `${monthName(month)} ${year}`,
  };

  return [...weekly, monthly];
}

/** The window a given day's news belongs to. */
export function getWeeklyWindowForDate(isoDate: string): EditionWindow {
  const [year, month, day] = isoDate.split("-").map(Number);
  const windows = getMonthEditionWindows(year, month).filter((window) => window.kind === "weekly");
  const match = windows.find(
    (window) => day >= Number(window.periodStart.slice(8)) && day <= Number(window.periodEnd.slice(8)),
  );
  // Every day of every month falls inside one of the four windows by construction.
  return match ?? windows[windows.length - 1];
}

export type PlannedEdition = EditionWindow & {
  /** Slug of the edition filling this window, when one has been published. */
  slug?: string;
  title?: string;
  status: "published" | "scheduled";
};

/**
 * Lay published editions onto a month's windows.
 *
 * An edition claims the window its coverage period ends in, so a weekly edition dated
 * mid-window (the inaugural August 6–12 briefing, for one) still lands in the right slot
 * instead of being dropped for not matching the canonical 1–7 / 8–14 boundaries.
 */
export function buildMonthPlan(
  year: number,
  month: number,
  editions: readonly { slug: string; cardTitle: string; edition: { kind: EditionKind; periodEnd: string } }[],
): PlannedEdition[] {
  return getMonthEditionWindows(year, month).map((window) => {
    const match = editions.find((candidate) => {
      if (candidate.edition.kind !== window.kind) return false;
      if (window.kind === "monthly") {
        return candidate.edition.periodEnd.slice(0, 7) === window.periodEnd.slice(0, 7);
      }
      return (
        candidate.edition.periodEnd >= window.periodStart && candidate.edition.periodEnd <= window.periodEnd
      );
    });

    return match
      ? { ...window, slug: match.slug, title: match.cardTitle, status: "published" as const }
      : { ...window, status: "scheduled" as const };
  });
}

/** Plain-language cadence, rendered on the Tech News desk. */
export const CADENCE_RULES = [
  { window: "Days 1–7", publishes: "8th", note: "First week of the month, out the morning after it closes." },
  { window: "Days 8–14", publishes: "15th", note: "Second week, same next-morning rule." },
  { window: "Days 15–21", publishes: "22nd", note: "Third week." },
  { window: "Days 22–end", publishes: "1st", note: "Final week, carried into the first of the next month." },
  {
    window: "Whole month",
    publishes: "Last day",
    note: "One recap that reads the month as a single arc rather than four separate weeks.",
  },
] as const;
