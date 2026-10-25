import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Cache Components + Partial Prefetching: the rendering model Next.js
  // recommends for every app as of 16.4. The site is fully static, which
  // app/[locale]/layout.tsx enforces with `ensureStatic`.
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      // The features content now lives on /services (under "The quality behind
      // every build"). Keep this path working for old links and search results.
      { source: "/features", destination: "/services", permanent: true },
      // The estimator now lives at /estimate.
      { source: "/calculator", destination: "/estimate", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
