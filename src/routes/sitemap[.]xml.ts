import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://novaweightandwellness.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/about", priority: "0.8", changefreq: "monthly" },
          { path: "/approach", priority: "0.8", changefreq: "monthly" },
          { path: "/services", priority: "0.9", changefreq: "weekly" },
          { path: "/what-we-treat", priority: "0.8", changefreq: "weekly" },
          { path: "/contact", priority: "0.9", changefreq: "monthly" },
          { path: "/blog", priority: "0.8", changefreq: "weekly" },
          { path: "/blog/normal-tsh-hypothyroid-symptoms-michigan-wisconsin", priority: "1.0", changefreq: "monthly" },
          { path: "/blog/medical-weight-loss-hormone-therapy-michigan-wisconsin-cities", priority: "1.0", changefreq: "monthly" },
          { path: "/blog/perimenopause-brain-fog-memory-michigan-wisconsin", priority: "1.0", changefreq: "monthly" },
          { path: "/blog/pcos-weight-resistance-women-30s-michigan-wisconsin", priority: "1.0", changefreq: "monthly" },
          { path: "/blog/hormonal-sleep-anxiety-women-michigan-wisconsin", priority: "1.0", changefreq: "monthly" },
          { path: "/blog/bioidentical-hormone-therapy-guide-michigan-wisconsin", priority: "1.0", changefreq: "monthly" },
          { path: "/blog/perimenopause-in-your-30s-michigan-wisconsin", priority: "1.0", changefreq: "monthly" },
          { path: "/blog/ozempic-not-working-michigan-wisconsin-women", priority: "1.0", changefreq: "monthly" },
          { path: "/blog/why-michigan-women-over-40-cant-lose-weight-feel-exhausted", priority: "0.9", changefreq: "monthly" },
          { path: "/blog/gaining-weight-exhausted-after-40-wisconsin-women", priority: "0.9", changefreq: "monthly" },
          { path: "/blog/the-ultimate-guide-to-hormones-and-weight-resistance-over-40", priority: "0.9", changefreq: "monthly" },
          { path: "/free-15-min-call-with-katie", priority: "0.9", changefreq: "monthly" },
          { path: "/clarity-session", priority: "0.8", changefreq: "monthly" },
          { path: "/free-guide", priority: "0.7", changefreq: "monthly" },
          { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
          { path: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
        ];
        const urls = entries.map(
          (e) =>
            `  <url><loc>${BASE_URL}${e.path}</loc><lastmod>${today}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
