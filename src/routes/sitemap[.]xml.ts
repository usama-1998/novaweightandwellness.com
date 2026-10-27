import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://novaweightandwellness.com";

// Lastmod is 2026-10-26 for every page changed in this SEO refresh (the date
// this branch will be published), and 2026-10-12 for pages not changed in it:
// /approach and the two legal pages. Priority and changefreq are intentionally omitted:
// they add no ranking value. A shallow clone could not recover older per-file
// history, so do not backfill older dates without a full clone.
// Note: /michigan-discovery-call is a redirect to /book-free-assessment-call
// and is intentionally excluded, as is the removed /blog/hot-flashes-* URL,
// which is not a route in this repository and must not appear in the sitemap.

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", lastmod: "2026-10-26" },
          { path: "/about", lastmod: "2026-10-26" },
          { path: "/approach", lastmod: "2026-10-12" },
          { path: "/services", lastmod: "2026-10-26" },
          { path: "/what-we-treat", lastmod: "2026-10-26" },
          { path: "/contact", lastmod: "2026-10-26" },
          { path: "/blog", lastmod: "2026-10-26" },
          { path: "/blog/normal-tsh-hypothyroid-symptoms-michigan-wisconsin", lastmod: "2026-10-26" },
          { path: "/blog/medical-weight-loss-hormone-therapy-michigan-wisconsin-cities", lastmod: "2026-10-26" },
          { path: "/blog/perimenopause-brain-fog-memory-michigan-wisconsin", lastmod: "2026-10-26" },
          { path: "/blog/pcos-weight-resistance-women-30s-michigan-wisconsin", lastmod: "2026-10-26" },
          { path: "/blog/hormonal-sleep-anxiety-women-michigan-wisconsin", lastmod: "2026-10-26" },
          { path: "/blog/bioidentical-hormone-therapy-guide-michigan-wisconsin", lastmod: "2026-10-26" },
          { path: "/blog/perimenopause-in-your-30s-michigan-wisconsin", lastmod: "2026-10-26" },
          { path: "/blog/ozempic-not-working-michigan-wisconsin-women", lastmod: "2026-10-26" },
          { path: "/blog/why-michigan-women-over-40-cant-lose-weight-feel-exhausted", lastmod: "2026-10-26" },
          { path: "/blog/gaining-weight-exhausted-after-40-wisconsin-women", lastmod: "2026-10-26" },
          { path: "/blog/the-ultimate-guide-to-hormones-and-weight-resistance-over-40", lastmod: "2026-10-26" },
          { path: "/book-free-assessment-call", lastmod: "2026-10-26" },
          { path: "/clarity-session", lastmod: "2026-10-26" },
          { path: "/free-guide", lastmod: "2026-10-26" },
          { path: "/glp-1-metabolic-support", lastmod: "2026-10-26" },
          { path: "/hormone-therapy", lastmod: "2026-10-26" },
          { path: "/thyroid-care", lastmod: "2026-10-26" },
          { path: "/perimenopause-menopause-care", lastmod: "2026-10-26" },
          { path: "/pcos-care", lastmod: "2026-10-26" },
          { path: "/functional-medicine-cost", lastmod: "2026-10-26" },
          { path: "/michigan-telehealth", lastmod: "2026-10-26" },
          { path: "/wisconsin-telehealth", lastmod: "2026-10-26" },
          { path: "/grand-rapids-telehealth", lastmod: "2026-10-26" },
          { path: "/privacy-policy", lastmod: "2026-10-12" },
          { path: "/terms-of-service", lastmod: "2026-10-12" },
        ];
        const urls = entries.map(
          (e) =>
            `  <url><loc>${BASE_URL}${e.path}</loc><lastmod>${e.lastmod}</lastmod></url>`,
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
