import type { ReactNode } from "react";

/**
 * Inline markup accepted in edition copy: `**bold**`, `*italic*` and
 * `[label](https://…)` citation links. Links open in a new tab so a reader can
 * check a primary source without losing their place in the edition.
 */
const TOKEN = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\*\*(.+?)\*\*|\*(.+?)\*/g;

export function richText(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  const pattern = new RegExp(TOKEN.source, "g");
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] != null && match[2] != null) {
      nodes.push(
        <a key={key} className="ssk-cite" href={match[2]} target="_blank" rel="noopener noreferrer">
          {match[1]}
        </a>,
      );
    } else if (match[3] != null) {
      nodes.push(<strong key={key}>{match[3]}</strong>);
    } else if (match[4] != null) {
      nodes.push(<em key={key}>{match[4]}</em>);
    }
    key += 1;
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function RichText({
  text,
  as: Tag = "p",
  className,
}: {
  text: string;
  as?: "p" | "span" | "li" | "h3" | "h4";
  className?: string;
}) {
  return <Tag className={className}>{richText(text)}</Tag>;
}
