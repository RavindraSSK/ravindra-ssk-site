/**
 * The SSK AI Hub newsletter lives on LinkedIn, so every surface that publishes
 * an edition points readers at the same follow URL through this one component.
 */
const LINKEDIN_NEWSLETTER_URL =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7499897597944410112";

export function LinkedInSubscribe({ className }: { className?: string }) {
  return (
    <div className={className ? `ssk-subscribe ${className}` : "ssk-subscribe"}>
      <p className="ssk-subscribe__note">Get the next SSK AI Hub briefing directly on LinkedIn.</p>
      <a
        className="ssk-subscribe__button"
        href={LINKEDIN_NEWSLETTER_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Subscribe on LinkedIn
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}
