import { getPageContent, type SiteContentKey } from "@/lib/site-content";

export function StaticPage({ page }: { page: SiteContentKey }) {
  return <main className="page-shell" dangerouslySetInnerHTML={{ __html: getPageContent(page) }} />;
}
