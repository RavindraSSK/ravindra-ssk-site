import { CodedDiagram } from "@/components/ssk-ai/diagrams";
import { AmieVisual } from "@/components/ssk-ai/amie-visual";
import { RichText, richText } from "@/components/ssk-ai/rich-text";
import type { SskAiStory } from "@/lib/ssk-ai/types";

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

function StoryVisualBlock({ story }: { story: SskAiStory }) {
  if (story.visual.kind === "coded-diagram") {
    return <CodedDiagram id={story.visual.diagram} caption={story.visual.caption} />;
  }
  return <AmieVisual visual={story.visual} />;
}

export function StorySection({ story }: { story: SskAiStory }) {
  const rank = String(story.rank).padStart(2, "0");

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

      <div className="ssk-story__grid">
        <div className="ssk-story__prose">
          <section className="ssk-block" aria-labelledby={`${story.id}-happened`}>
            <h3 id={`${story.id}-happened`}>What happened?</h3>
            {story.whatHappened.map((paragraph) => (
              <RichText key={paragraph.slice(0, 48)} text={paragraph} className="ssk-prose" />
            ))}
          </section>
          <section className="ssk-block" aria-labelledby={`${story.id}-new`}>
            <h3 id={`${story.id}-new`}>What&apos;s actually new?</h3>
            {story.whatsActuallyNew.map((paragraph) => (
              <RichText key={paragraph.slice(0, 48)} text={paragraph} className="ssk-prose" />
            ))}
          </section>
          <section className="ssk-block" aria-labelledby={`${story.id}-matters`}>
            <h3 id={`${story.id}-matters`}>Why it matters</h3>
            <RichText text={story.whyItMatters} className="ssk-prose" />
          </section>
          <section className="ssk-block" aria-labelledby={`${story.id}-apps`}>
            <h3 id={`${story.id}-apps`}>Practical Applications</h3>
            <Applications story={story} />
          </section>
          <section className="ssk-block" aria-labelledby={`${story.id}-example`}>
            <h3 id={`${story.id}-example`}>Real-World Example</h3>
            <RichText text={story.realWorldExample} className="ssk-prose" />
          </section>
          <section className="ssk-block" aria-labelledby={`${story.id}-takeaway`}>
            <h3 id={`${story.id}-takeaway`}>Developer Takeaway</h3>
            <RichText text={story.developerTakeaway} className="ssk-prose" />
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
          <StoryVisualBlock story={story} />
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
