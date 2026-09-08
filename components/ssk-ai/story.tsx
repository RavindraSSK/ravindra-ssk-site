import { CodedDiagram } from "@/components/ssk-ai/diagrams";
import { AmieVisual } from "@/components/ssk-ai/amie-visual";
import { RichText, richText } from "@/components/ssk-ai/rich-text";
import type { SskAiStory, StoryBlockLabels, StoryCopy, StoryVisualPlacement } from "@/lib/ssk-ai/types";

export const DEFAULT_STORY_LABELS: StoryBlockLabels = {
  happened: "What happened?",
  new: "What's actually new?",
  matters: "Why it matters",
  applications: "Practical Applications",
  example: "Real-World Example",
  takeaway: "Developer Takeaway",
};

function Badge({
  label,
  value,
  note,
  tone,
}: {
  label: string;
  value: string;
  note?: string;
  tone?: "status" | "type" | "build";
}) {
  return (
    <span className={tone ? `ssk-badge ssk-badge--${tone}` : "ssk-badge"}>
      <span className="ssk-badge__label">{label}</span>
      <span className="ssk-badge__value">{value}</span>
      {note ? <span className="ssk-badge__note">{note}</span> : null}
    </span>
  );
}

/** One paragraph or several, each rendered as its own `.ssk-prose` paragraph. */
function Paragraphs({ text }: { text: StoryCopy }) {
  const paragraphs = Array.isArray(text) ? text : [text];
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <RichText key={`${index}-${paragraph.slice(0, 32)}`} text={paragraph} className="ssk-prose" />
      ))}
    </>
  );
}

function Applications({ story }: { story: SskAiStory }) {
  const demonstrated = story.applications.filter((item) => item.kind === "demonstrated");
  const potential = story.applications.filter((item) => item.kind === "potential");

  return (
    <div className="ssk-apps">
      <div className="ssk-apps__col ssk-apps__col--demonstrated">
        <h4 className="ssk-apps__heading">Demonstrated / Stated applications</h4>
        <ul>
          {demonstrated.map((item) => (
            <li key={item.text}>
              {item.text}
              {item.attribution ? <span className="ssk-apps__note"> ({item.attribution})</span> : null}
            </li>
          ))}
        </ul>
      </div>
      <div className="ssk-apps__col ssk-apps__col--potential">
        <h4 className="ssk-apps__heading">Potential applications</h4>
        <ul>
          {potential.map((item) => (
            <li key={item.text}>
              {item.text}
              {item.attribution ? <span className="ssk-apps__note"> ({item.attribution})</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SourceLinks({ links }: { links?: SskAiStory["source"]["links"] }) {
  if (!links || links.length === 0) return null;
  return (
    <ul className="ssk-source__links list-reset">
      {links.map((link) => (
        <li key={link.href}>
          <a className="inline-link" href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function StoryVisualBlock({ story, sizes }: { story: SskAiStory; sizes?: string }) {
  if (story.visual.kind === "coded-diagram") {
    return <CodedDiagram id={story.visual.diagram} caption={story.visual.caption} />;
  }
  return <AmieVisual visual={story.visual} sizes={sizes} />;
}

export function StorySection({
  story,
  labels,
  visualPlacement = "aside",
}: {
  story: SskAiStory;
  labels?: Partial<StoryBlockLabels>;
  visualPlacement?: StoryVisualPlacement;
}) {
  const rank = String(story.rank).padStart(2, "0");
  const heading = { ...DEFAULT_STORY_LABELS, ...labels };
  const lead = visualPlacement === "lead";

  return (
    <section className="ssk-story" id={story.id} aria-labelledby={`${story.id}-title`}>
      <header className="ssk-story__header">
        <p className="ssk-story__rank" aria-hidden="true">
          {rank}
        </p>
        <div className="ssk-story__heading">
          <h2 id={`${story.id}-title`} className="ssk-story__title">
            <span className="sr-only">Story {story.rank}. </span>
            {story.headline}
          </h2>
          <div className="ssk-story__badges">
            <Badge label="STATUS" value={story.status} tone="status" />
            <Badge label="TYPE" value={story.type} tone="type" />
            <Badge
              label="BUILDABILITY"
              value={story.buildability}
              note={story.buildabilityNote}
              tone="build"
            />
          </div>
          <ul className="ssk-story__tags" aria-label="Audience tags">
            {story.audienceTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </header>

      {lead ? (
        // The story image directly under its header and status line, at the full
        // width of the story card, before the copy begins.
        <div className="ssk-story__lead">
          <StoryVisualBlock story={story} sizes="(max-width: 1180px) 100vw, 1100px" />
        </div>
      ) : null}

      <div className="ssk-story__grid">
        <div className="ssk-story__prose">
          <section className="ssk-block" aria-labelledby={`${story.id}-happened`}>
            <h3 id={`${story.id}-happened`}>{heading.happened}</h3>
            <Paragraphs text={story.whatHappened} />
          </section>
          {story.whatsActuallyNew && story.whatsActuallyNew.length > 0 ? (
            <section className="ssk-block" aria-labelledby={`${story.id}-new`}>
              <h3 id={`${story.id}-new`}>{heading.new}</h3>
              <Paragraphs text={story.whatsActuallyNew} />
            </section>
          ) : null}
          <section className="ssk-block" aria-labelledby={`${story.id}-matters`}>
            <h3 id={`${story.id}-matters`}>{heading.matters}</h3>
            <Paragraphs text={story.whyItMatters} />
          </section>
          <section className="ssk-block" aria-labelledby={`${story.id}-apps`}>
            <h3 id={`${story.id}-apps`}>{heading.applications}</h3>
            <Applications story={story} />
          </section>
          <section className="ssk-block" aria-labelledby={`${story.id}-example`}>
            <h3 id={`${story.id}-example`}>{heading.example}</h3>
            <Paragraphs text={story.realWorldExample} />
          </section>
          <section className="ssk-block" aria-labelledby={`${story.id}-takeaway`}>
            <h3 id={`${story.id}-takeaway`}>{heading.takeaway}</h3>
            <Paragraphs text={story.developerTakeaway} />
          </section>
        </div>

        <aside className="ssk-story__aside">
          <div className="ssk-bcr" aria-label="Before, change, result">
            <div>
              <p className="ssk-bcr__label">Before</p>
              <p>{story.beforeChangeResult.before}</p>
            </div>
            <div>
              <p className="ssk-bcr__label">Change</p>
              <p>{story.beforeChangeResult.change}</p>
            </div>
            <div>
              <p className="ssk-bcr__label">Result</p>
              <p>{story.beforeChangeResult.result}</p>
            </div>
          </div>
          {lead ? null : <StoryVisualBlock story={story} />}
        </aside>
      </div>

      <details className="ssk-source">
        <summary>
          Source attribution — {story.source.heading}
        </summary>
        <p>{richText(story.source.body)}</p>
        <SourceLinks links={story.source.links} />
      </details>
    </section>
  );
}
