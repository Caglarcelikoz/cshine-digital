import { notFound } from "next/navigation";

// Next.js only renders app/[locale]/not-found.tsx when notFound() is called
// from a route, not for unmatched URLs. This catch-all turns every unknown path
// under a locale (/bogus, /nl/bestaatniet) into that localized 404.

// ensureStatic requires at least one complete param set; prerendering a single
// placeholder path is enough for the 404 shell.
export function generateStaticParams() {
  return [{ rest: ["404"] }];
}

export default function CatchAllPage() {
  notFound();
}
