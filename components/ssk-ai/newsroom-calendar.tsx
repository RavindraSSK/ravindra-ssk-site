"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import type { DayCell, MonthCalendar } from "@/lib/ssk-ai/calendar";
import { WEEKDAY_LABELS } from "@/lib/ssk-ai/calendar";
import { formatLongDate } from "@/lib/ssk-ai/schedule";

/**
 * The newsroom calendar. Click a day and it takes you to the news for that day:
 * a story filed that date jumps straight to it inside its edition, a quieter day
 * inside a published week opens that week's edition, and a day whose edition is
 * still unwritten selects instead of navigating — the brief panel explains what
 * is due and when, so no click ever dead-ends.
 *
 * Hover and keyboard focus preview a day in the brief panel without navigating;
 * Enter or click follows it. Arrow keys move through the grid (roving tabindex),
 * PageUp/PageDown page months. "Today" is stamped after mount so server HTML
 * stays deterministic.
 */
export function NewsroomCalendar({
  months,
  initialIndex,
  initialSelected,
}: {
  months: MonthCalendar[];
  initialIndex: number;
  initialSelected: string | null;
}) {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const [selected, setSelected] = useState<string | null>(initialSelected);
  const [today, setToday] = useState<string | null>(null);
  const [focusDay, setFocusDay] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const month = months[index];

  useEffect(() => {
    // Deferred a frame (same pattern as SiteChrome's theme sync) so the "today" ring
    // paints as a client enhancement after hydration rather than a synchronous
    // setState inside the effect body.
    const frame = requestAnimationFrame(() => {
      const now = new Date();
      setToday(
        `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`,
      );
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const cellByIso = useMemo(() => {
    const map = new Map<string, DayCell>();
    for (const entry of months) {
      for (const week of entry.weeks) {
        for (const cell of week) {
          if (cell.inMonth) map.set(cell.iso, cell);
        }
      }
    }
    return map;
  }, [months]);

  const selectedCell = selected ? (cellByIso.get(selected) ?? null) : null;

  const monthDays = useMemo(
    () => month.weeks.flat().filter((cell) => cell.inMonth),
    [month],
  );

  // Roving tabindex target: the focused day if it is in view, else the selected day,
  // else the first day of the month.
  const tabStop =
    (focusDay && monthDays.some((cell) => cell.iso === focusDay) && focusDay) ||
    (selected && monthDays.some((cell) => cell.iso === selected) && selected) ||
    monthDays[0]?.iso;

  function page(delta: number) {
    setDirection(delta);
    setIndex((value) => Math.min(months.length - 1, Math.max(0, value + delta)));
  }

  function focusIso(iso: string) {
    setFocusDay(iso);
    requestAnimationFrame(() => {
      gridRef.current
        ?.querySelector<HTMLElement>(`[data-iso="${iso}"]`)
        ?.focus();
    });
  }

  function moveFocus(fromIso: string, deltaDays: number) {
    const [y, m, d] = fromIso.split("-").map(Number);
    const target = new Date(Date.UTC(y, m - 1, d + deltaDays));
    const iso = `${target.getUTCFullYear()}-${String(target.getUTCMonth() + 1).padStart(2, "0")}-${String(
      target.getUTCDate(),
    ).padStart(2, "0")}`;

    const targetIndex = months.findIndex(
      (entry) => entry.year === target.getUTCFullYear() && entry.month === target.getUTCMonth() + 1,
    );
    if (targetIndex === -1) return;

    if (targetIndex !== index) {
      setDirection(targetIndex > index ? 1 : -1);
      setIndex(targetIndex);
    }
    setSelected(iso);
    focusIso(iso);
  }

  function onGridKeyDown(event: React.KeyboardEvent) {
    const iso = (event.target as HTMLElement).dataset.iso;
    if (!iso) return;
    const moves: Record<string, number> = {
      ArrowRight: 1,
      ArrowLeft: -1,
      ArrowDown: 7,
      ArrowUp: -7,
    };
    if (event.key in moves) {
      event.preventDefault();
      moveFocus(iso, moves[event.key]);
    } else if (event.key === "PageDown") {
      event.preventDefault();
      page(1);
    } else if (event.key === "PageUp") {
      event.preventDefault();
      page(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      moveFocus(iso, 1 - Number(iso.slice(8)));
    }
  }

  function activate(cell: DayCell) {
    setSelected(cell.iso);
    if (cell.href) {
      router.push(cell.href);
    }
  }

  function dayAriaLabel(cell: DayCell) {
    const date = formatLongDate(cell.iso);
    if (cell.state === "story") {
      const count = cell.stories.length;
      return `${date} — ${count} ${count === 1 ? "story" : "stories"} filed. Opens the first story.`;
    }
    if (cell.state === "edition" || cell.state === "monthly") {
      return `${date} — covered by ${cell.editionTitle ?? "a published edition"}. Opens the edition.`;
    }
    return `${date} — edition not yet published. ${cell.timing}.`;
  }

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.26, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="ssk-newsroom">
      <div className="ssk-newsroom__calendar card">
        <div className="ssk-newsroom__toolbar">
          <div className="ssk-newsroom__month" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={month.label}
                className="ssk-newsroom__month-label"
                initial={{ opacity: 0, y: direction * 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction * -8 }}
                transition={transition}
              >
                {month.label}
              </motion.span>
            </AnimatePresence>
            <span className="ssk-newsroom__month-meta">
              {month.totals.stories} {month.totals.stories === 1 ? "story" : "stories"} ·{" "}
              {month.totals.published} days covered
            </span>
          </div>
          <div className="ssk-newsroom__nav">
            <button
              type="button"
              className="ssk-newsroom__nav-button"
              onClick={() => page(-1)}
              disabled={index === 0}
              aria-label="Previous month"
            >
              <ChevronLeft size={17} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="ssk-newsroom__nav-button"
              onClick={() => page(1)}
              disabled={index === months.length - 1}
              aria-label="Next month"
            >
              <ChevronRight size={17} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="ssk-newsroom__weekdays" aria-hidden="true">
          {WEEKDAY_LABELS.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={month.label}
            ref={gridRef}
            className="ssk-newsroom__grid"
            role="grid"
            aria-label={`${month.label} newsroom calendar`}
            onKeyDown={onGridKeyDown}
            initial={{ opacity: 0, x: direction * 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -18 }}
            transition={transition}
          >
            {month.weeks.map((week, weekIndex) => (
              <div role="row" className="ssk-newsroom__row" key={`${month.label}-${weekIndex}`}>
                {week.map((cell) =>
                  cell.inMonth ? (
                    <div role="gridcell" key={cell.iso} className="ssk-newsroom__cellwrap">
                      <button
                        type="button"
                        data-iso={cell.iso}
                        className={[
                          "ssk-newsroom__day",
                          `is-${cell.state}`,
                          selected === cell.iso ? "is-selected" : "",
                          today === cell.iso ? "is-today" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        tabIndex={cell.iso === tabStop ? 0 : -1}
                        aria-label={dayAriaLabel(cell)}
                        aria-current={today === cell.iso ? "date" : undefined}
                        onClick={() => activate(cell)}
                        onMouseEnter={() => setSelected(cell.iso)}
                        onFocus={() => {
                          setSelected(cell.iso);
                          setFocusDay(cell.iso);
                        }}
                      >
                        <span className="ssk-newsroom__daynum">{cell.day}</span>
                        {cell.stories.length > 0 ? (
                          <span className="ssk-newsroom__dots" aria-hidden="true">
                            {cell.stories.slice(0, 3).map((story) => (
                              <i key={story.id} />
                            ))}
                          </span>
                        ) : null}
                      </button>
                    </div>
                  ) : (
                    <div role="gridcell" key={cell.iso} className="ssk-newsroom__cellwrap">
                      <span className="ssk-newsroom__day is-outside" aria-hidden="true">
                        <span className="ssk-newsroom__daynum">{cell.day}</span>
                      </span>
                    </div>
                  ),
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="ssk-newsroom__legend" aria-hidden="true">
          <span className="ssk-newsroom__legend-item">
            <i className="ssk-newsroom__swatch ssk-newsroom__swatch--story" /> Story filed
          </span>
          <span className="ssk-newsroom__legend-item">
            <i className="ssk-newsroom__swatch ssk-newsroom__swatch--edition" /> Week covered
          </span>
          <span className="ssk-newsroom__legend-item">
            <i className="ssk-newsroom__swatch ssk-newsroom__swatch--scheduled" /> Awaiting edition
          </span>
        </div>
      </div>

      <aside className="ssk-newsroom__brief card" aria-label="Day brief" aria-live="polite">
        {selectedCell ? (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedCell.iso}
              className="ssk-newsroom__brief-body"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
              transition={transition}
            >
              <p className="ssk-newsroom__brief-kicker">Day brief</p>
              <p className="ssk-newsroom__brief-date">{formatLongDate(selectedCell.iso)}</p>
              <p className="ssk-newsroom__brief-window">{selectedCell.windowLabel}</p>

              {selectedCell.stories.length > 0 ? (
                <ul className="ssk-newsroom__stories list-reset">
                  {selectedCell.stories.map((story) => (
                    <li key={story.id}>
                      <Link
                        className="ssk-newsroom__story"
                        href={`${selectedCell.href?.split("#")[0]}#${story.id}`}
                      >
                        <span className="ssk-newsroom__story-type">{story.type}</span>
                        <span className="ssk-newsroom__story-headline">
                          {story.headline}
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : selectedCell.state === "scheduled" ? (
                <p className="ssk-newsroom__brief-empty">
                  Nothing filed yet — this window&apos;s edition is being put together. {selectedCell.timing}.
                </p>
              ) : (
                <p className="ssk-newsroom__brief-empty">
                  No story dated this exact day. The week&apos;s edition carries its full context.
                </p>
              )}

              {selectedCell.href ? (
                <Link className="button button--primary ssk-newsroom__brief-cta" href={selectedCell.href}>
                  <span>
                    {selectedCell.stories.length > 0 ? "Read the day’s news" : "Read the week’s edition"}
                  </span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              ) : null}
              {selectedCell.editionTitle ? (
                <p className="ssk-newsroom__brief-edition">
                  In <strong>{selectedCell.editionTitle}</strong> · {selectedCell.timing}
                </p>
              ) : null}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="ssk-newsroom__brief-body">
            <p className="ssk-newsroom__brief-kicker">Day brief</p>
            <p className="ssk-newsroom__brief-empty">Pick a date to see what was filed that day.</p>
          </div>
        )}
      </aside>
    </div>
  );
}
