import { getPageContent, type SiteContentKey } from "@/lib/site-content";

export function StaticPage({ page }: { page: SiteContentKey }) {
  return <main id="main-content" className="page-shell" dangerouslySetInnerHTML={{ __html: getPageContent(page) }} />;
}
