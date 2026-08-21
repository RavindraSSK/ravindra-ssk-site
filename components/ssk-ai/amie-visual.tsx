import Image from "next/image";

import { isEditorialImageAvailable } from "@/lib/ssk-ai";
import type { StoryVisual } from "@/lib/ssk-ai/types";

type EditorialImage = Extract<StoryVisual, { kind: "editorial-image" }>;

export function AmieVisual({
  visual,
  sizes = "(max-width: 720px) 100vw, 720px",
}: {
  visual: EditorialImage;
  sizes?: string;
}) {
  const available = isEditorialImageAvailable(visual.src);

  return (
    <figure className="ssk-figure ssk-figure--photo">
      {available ? (
        <Image
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          sizes={sizes}
          className="ssk-amie__image"
        />
      ) : (
        <div className="ssk-amie" role="img" aria-label={visual.alt}>
          <div className="ssk-amie__scene" aria-hidden="true">
            <span className="ssk-amie__window" />
            <span className="ssk-amie__desk" />
            <span className="ssk-amie__person" />
            <span className="ssk-amie__laptop" />
          </div>
          <div className="ssk-amie__copy">
            <p className="ssk-amie__kicker">Editorial image forthcoming</p>
            <p className="ssk-amie__hint">{visual.description}</p>
          </div>
        </div>
      )}
      <figcaption>{visual.caption}</figcaption>
    </figure>
  );
}
