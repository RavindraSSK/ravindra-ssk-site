/**
 * The newsroom calendar — a month grid where every day resolves to something to read.
 *
 * Resolution order for a clicked day, which is the whole point of the component:
 *
 *   1. A story filed on that exact date  -> that story, inside its edition
 *   2. Otherwise the weekly edition covering that day
 *   3. Otherwise that month's recap, if one has been published
 *   4. Otherwise nothing — the window is scheduled but unwritten, and the cell says so
 *
 * Rule 4 is why cells carry their state rather than just an href: a day with no edition
 * behind it must look inert before it is clicked, not lead somewhere and disappoint.
 *
 * Grids are built at build time from the editions that exist. Like schedule.ts this
 * never reads the clock — "today" is marked by the client after mount, so the rendered
 * HTML stays identical between builds.
 */

import type { SskAiIssue } from "./types";
import {
  daysInMonth,
  formatLongDate,
  getMonthEditionWindows,
  getWeeklyWindowForDate,
  monthName,
} from "./schedule";

export type DayState =
  /** A story was filed on this exact day. */
  | "story"
  /** No story this day, but the week it belongs to has been published. */
  | "edition"
  /** Only the month recap covers it. */
  | "monthly"
  /** The window exists on the calendar but its edition has not been written. */
  | "scheduled"
  /** Padding cell from the neighbouring month. */
  | "outside";

export type DayStory = {
  id: string;
  headline: string;
  type: string;
};

export type DayCell = {
  iso: string;
  day: number;
  inMonth: boolean;
  state: DayState;
  href: string | null;
  /** "Week 2 · August 8–14, 2026" */
  windowLabel: string;
  editionTitle: string | null;
  /** "Out August 12, 2026" / "Due August 22, 2026" */
  timing: string;
  stories: DayStory[];
};

export type MonthCalendar = {
  year: number;
  month: number;
  /** "August 2026" */
  label: string;
  /** Six rows of seven, Sunday-first, padded with neighbouring-month cells. */
  weeks: DayCell[][];
  /** Day counts for the month header. */
  totals: { stories: number; published: number };
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

export const WEEKDAY_LABELS = WEEKDAYS;

function iso(year: number, month: number, day: number) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/** Sunday = 0, for the given calendar date, in UTC so it cannot shift by timezone. */
function weekdayOf(year: number, month: number, day: number) {
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

function shiftMonth(year: number, month: number, delta: number) {
  const base = new Date(Date.UTC(year, month - 1 + delta, 1));
  return { year: base.getUTCFullYear(), month: base.getUTCMonth() + 1 };
}

function outsideCell(year: number, month: number, day: number): DayCell {
  return {
    iso: iso(year, month, day),
    day,
    inMonth: false,
    state: "outside",
    href: null,
    windowLabel: "",
    editionTitle: null,
    timing: "",
    stories: [],
  };
}

function findWeekly(issues: readonly SskAiIssue[], periodStart: string, periodEnd: string) {
  return issues.find(
    (issue) =>
      issue.edition.kind === "weekly" &&
      issue.edition.periodEnd >= periodStart &&
      issue.edition.periodEnd <= periodEnd,
  );
}

function findMonthly(issues: readonly SskAiIssue[], yearMonth: string) {
  return issues.find(
    (issue) => issue.edition.kind === "monthly" && issue.edition.periodEnd.slice(0, 7) === yearMonth,
  );
}

function buildDay(
  year: number,
  month: number,
  day: number,
  issues: readonly SskAiIssue[],
  basePath: string,
): DayCell {
  const date = iso(year, month, day);
  const window = getWeeklyWindowForDate(date);
  const windowLabel = `${window.label} · ${window.periodLabel}`;

  const weekly = findWeekly(issues, window.periodStart, window.periodEnd);
  const monthly = findMonthly(issues, date.slice(0, 7));
  const edition = weekly ?? monthly;

  if (!edition) {
    return {
      iso: date,
      day,
      inMonth: true,
      state: "scheduled",
      href: null,
      windowLabel,
      editionTitle: null,
      timing: `Due ${formatLongDate(window.publishOn)}`,
      stories: [],
    };
  }

  const stories = edition.stories
    .filter((story) => story.date === date)
    .map((story) => ({ id: story.id, headline: story.headline, type: story.type }));

  const editionHref = `${basePath}/${edition.slug}`;

  return {
    iso: date,
    day,
    inMonth: true,
    state: stories.length > 0 ? "story" : weekly ? "edition" : "monthly",
    href: stories.length > 0 ? `${editionHref}#${stories[0].id}` : editionHref,
    windowLabel,
    editionTitle: edition.cardTitle,
    timing: `Out ${formatLongDate(edition.datePublished)}`,
    stories,
  };
}

export function buildMonthCalendar(
  year: number,
  month: number,
  issues: readonly SskAiIssue[],
  basePath: string,
): MonthCalendar {
  const lastDay = daysInMonth(year, month);
  const days: DayCell[] = [];

  const leading = weekdayOf(year, month, 1);
  const previous = shiftMonth(year, month, -1);
  const previousLast = daysInMonth(previous.year, previous.month);
  for (let i = leading; i > 0; i -= 1) {
    days.push(outsideCell(previous.year, previous.month, previousLast - i + 1));
  }

  for (let day = 1; day <= lastDay; day += 1) {
    days.push(buildDay(year, month, day, issues, basePath));
  }

  const next = shiftMonth(year, month, 1);
  // Always six rows, so paging months never changes the grid's height.
  let trailing = 1;
  while (days.length < 42) {
    days.push(outsideCell(next.year, next.month, trailing));
    trailing += 1;
  }

  const weeks: DayCell[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const inMonth = days.filter((cell) => cell.inMonth);
  return {
    year,
    month,
    label: `${monthName(month)} ${year}`,
    weeks,
    totals: {
      stories: inMonth.reduce((sum, cell) => sum + cell.stories.length, 0),
      published: inMonth.filter((cell) => cell.state !== "scheduled").length,
    },
  };
}

/**
 * Every month the calendar can page through: the first edition's month up to one month
 * past the newest, so the reader can see what is coming as well as what exists.
 */
export function buildCalendarRange(issues: readonly SskAiIssue[], basePath: string): MonthCalendar[] {
  if (issues.length === 0) return [];

  const periods = issues.map((issue) => issue.edition.periodEnd.slice(0, 7)).sort();
  const [startYear, startMonth] = periods[0].split("-").map(Number);
  const [endYear, endMonth] = periods[periods.length - 1].split("-").map(Number);
  const last = shiftMonth(endYear, endMonth, 1);

  const months: MonthCalendar[] = [];
  let cursor = { year: startYear, month: startMonth };
  // Bounded by construction; the guard is a backstop against a malformed period string.
  while (months.length < 240) {
    months.push(buildMonthCalendar(cursor.year, cursor.month, issues, basePath));
    if (cursor.year === last.year && cursor.month === last.month) break;
    cursor = shiftMonth(cursor.year, cursor.month, 1);
  }

  return months;
}

/** The month a reader should land on: the one the newest edition covers. */
export function defaultMonthIndex(months: readonly MonthCalendar[], issues: readonly SskAiIssue[]) {
  if (issues.length === 0 || months.length === 0) return 0;
  const newest = [...issues].sort((a, b) => b.datePublished.localeCompare(a.datePublished))[0];
  const [year, month] = newest.edition.periodEnd.split("-").map(Number);
  const index = months.findIndex((entry) => entry.year === year && entry.month === month);
  return index === -1 ? 0 : index;
}

/** The day the brief panel opens on: the newest day that actually has a story. */
export function defaultSelectedDate(months: readonly MonthCalendar[]) {
  let latest: string | null = null;
  for (const month of months) {
    for (const week of month.weeks) {
      for (const cell of week) {
        if (cell.inMonth && cell.stories.length > 0 && (latest === null || cell.iso > latest)) {
          latest = cell.iso;
        }
      }
    }
  }
  return latest;
}
