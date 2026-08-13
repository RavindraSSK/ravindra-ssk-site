import type { ReactNode } from "react";

const TOKEN = /\*\*(.+?)\*\*|\*(.+?)\*/g;

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
    if (match[1] != null) {
      nodes.push(<strong key={key}>{match[1]}</strong>);
    } else if (match[2] != null) {
      nodes.push(<em key={key}>{match[2]}</em>);
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
