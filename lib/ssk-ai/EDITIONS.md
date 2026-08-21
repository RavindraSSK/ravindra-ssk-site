# Publishing a Tech News edition

Every edition of SSK AI Hub → Tech News is one TypeScript file exporting one
`SskAiIssue`. Nothing is generated, scraped, or auto-summarised: an edition exists
because it was written, and a calendar slot stays marked **Scheduled** on
`/ssk-ai/tech-news` until its file lands.

## The cadence

| Coverage window | Publishes | Edition kind |
| --- | --- | --- |
| Days 1–7 | 8th | `weekly` |
| Days 8–14 | 15th | `weekly` |
| Days 15–21 | 22nd | `weekly` |
| Days 22–end of month | 1st of the next month | `weekly` |
| Whole month, 1–end | Last day of the month | `monthly` |

A week's stories are gathered while the window runs and go out the morning after it
closes, the way a paper dates an edition rather than a feed timestamping a post. The
monthly edition is a recap that reads the month as one arc — it is not a concatenation
of the four weeklies.

The rules live in `lib/ssk-ai/schedule.ts` (`CADENCE_RULES`, `getMonthEditionWindows`).
They are pure date arithmetic in UTC with no reference to the current clock, so the
desk page renders identically on every build.

## Adding an edition

1. **Copy the template.** `lib/ssk-ai/issue-2026-08-12.ts` is the reference
   implementation; every field in `SskAiIssue` (`lib/ssk-ai/types.ts`) is exercised
   there. Name the new file `issue-YYYY-MM-DD.ts` after its publish date.
   `lib/ssk-ai/issue-2026-08-08.ts` additionally exercises the optional fields: an
   edition `hero` image, clickable `source.links`, and a per-edition
   `featuredProject.diagram`. Editorial images live in `public/ssk-ai/<publish-date>/`;
   an image declared before its file lands renders the designed
   "editorial image forthcoming" state rather than breaking.

2. **Fill in the `edition` block.** This is what places the edition on the calendar:

   ```ts
   edition: {
     kind: "weekly",          // or "monthly"
     number: 2,               // sequential within its kind
     volume: 1,               // bumped once a year
     periodStart: "2026-08-15",
     periodEnd: "2026-08-21",
     periodLabel: "August 15–21, 2026",
   },
   ```

   `periodEnd` is what `buildMonthPlan` matches against, so it decides which window on
   the desk the edition fills. State the window you actually covered — the matcher
   accepts any period ending inside a window rather than forcing the canonical
   boundaries.

3. **Register it.** Import the export in `lib/ssk-ai/index.ts` and add it to `ISSUES`.
   Sorting, the archive, the calendar, `generateStaticParams`, the sitemap, and the
   Open Graph image all read from that one array.

4. **Check it renders.** `npm run dev`, then `/ssk-ai/tech-news` — the new edition
   should be the current one, and its calendar slot should flip from Scheduled to
   Published.

## Editorial rules

- **Every story carries its source.** `story.source` is not optional and is rendered
  under "Sources & Verification" on the edition page. If a claim cannot be attributed,
  it does not go in.
- **Separate demonstrated from potential.** `StoryApplication.kind` is
  `"demonstrated"` or `"potential"`; a capability someone has shown and a capability
  someone might build are not the same claim, and the page marks them differently.
- **`buildability` is a judgement, so say whose.** Use `buildabilityNote` when the
  rating needs a caveat (gated access, unreleased weights, licence limits).
- **Don't retro-fit old editions to the grid.** The August 12, 2026 edition predates
  the calendar and covers August 6–12; its `edition` block says so rather than being
  rounded to 8–14.

## Tech Content, for contrast

The other desk, `/ssk-ai/tech-content`, is long-form and has no schedule. Its index is
driven by `lib/ssk-ai/tech-content.ts` and each article body is static HTML in
`ssk-ai/tech-content/<slug>.html`. To add one: write the HTML (copy the structure of an
existing file — the app only reads what is inside `<main>`), add the entry to
`techContentArticles`, and the index card, route, metadata, JSON-LD, and sitemap entry
follow from it.
