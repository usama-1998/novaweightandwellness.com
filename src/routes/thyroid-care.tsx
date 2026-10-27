import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/thyroid-care")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://novaweightandwellness.com/thyroid-care" }],
    meta: [
      { title: "Thyroid Care in Michigan & Wisconsin | Novaleo Weight & Wellness" },
      { name: "description", content: "Thyroid care for women in Michigan and Wisconsin whose TSH is normal but who still feel exhausted, cold, or stuck: full thyroid panels, T4 to T3 conversion, and Hashimoto's evaluation." },
      { property: "og:title", content: "Thyroid Care in Michigan & Wisconsin | Novaleo Weight & Wellness" },
      { property: "og:description", content: "Thyroid care for women in Michigan and Wisconsin whose TSH is normal but who still feel exhausted, cold, or stuck: full thyroid panels, T4 to T3 conversion, and Hashimoto's evaluation." },
      { property: "og:url", content: "https://novaweightandwellness.com/thyroid-care" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Thyroid Care in Michigan & Wisconsin | Novaleo Weight & Wellness" },
      { name: "twitter:description", content: "Thyroid care for women in Michigan and Wisconsin whose TSH is normal but who still feel exhausted, cold, or stuck: full thyroid panels, T4 to T3 conversion, and Hashimoto's evaluation." },
      { name: "twitter:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalWebPage",
                name: "Thyroid Care in Michigan & Wisconsin | Novaleo Weight & Wellness",
                description: "Thyroid care for women in Michigan and Wisconsin whose TSH is normal but who still feel exhausted, cold, or stuck: full thyroid panels, T4 to T3 conversion, and Hashimoto's evaluation.",
                url: "https://novaweightandwellness.com/thyroid-care",
                about: { "@type": "MedicalBusiness", name: "Novaleo Weight & Wellness", url: "https://novaweightandwellness.com" },
              },
              {
                "@type": "FAQPage",
                mainEntity: [{"@type": "Question", "name": "My TSH is normal. Can you still help?", "acceptedAnswer": {"@type": "Answer", "text": "Often, yes. Normal ranges are based on population averages, not optimal health. A full panel can reveal patterns a single TSH value misses."}}, {"@type": "Question", "name": "What labs are included?", "acceptedAnswer": {"@type": "Answer", "text": "The $454 Root Cause Lab Panel includes full thyroid testing alongside nutrients, lipids, blood sugar, liver, and inflammation markers."}}, {"@type": "Question", "name": "Do you treat Hashimoto's?", "acceptedAnswer": {"@type": "Answer", "text": "Autoimmune thyroid patterns are evaluated alongside conventional care, with attention to root drivers such as gut health, nutrients, and inflammation."}}],
              },
            ],
          }),
        }}
      />
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">Novaleo Weight &amp; Wellness · Michigan &amp; Wisconsin telehealth</div>
        <h1 className="text-5xl md:text-6xl leading-[1.05] max-w-3xl">Thyroid care.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">If your TSH is normal and you still feel freezing, exhausted, or unable to lose weight, the problem may not be that nothing is wrong. It may be that the usual test did not look far enough. A full thyroid picture includes Free T3, Free T4, antibodies, and conversion, not TSH alone.</p>
        <p className="mt-4 text-sm text-muted-foreground max-w-2xl leading-relaxed">
          This page is educational. It does not replace medical advice, and any treatment decision
          follows an individual evaluation.
        </p>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">What this care includes</h2>
        <ul className="grid md:grid-cols-2 gap-5">
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Full thyroid mapping, including Free T3, Free T4, and TPO antibodies</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">T4 to T3 conversion and Hashimoto's evaluation</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">How thyroid, hormones, gut, nutrients, and stress interact</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">A plan based on your full panel, not a single lab value</li>
        </ul>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">Frequently asked questions</h2>
        <div className="space-y-6 max-w-2xl">
          <div><h3 className="text-xl text-primary">My TSH is normal. Can you still help?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Often, yes. Normal ranges are based on population averages, not optimal health. A full panel can reveal patterns a single TSH value misses.</p></div>
          <div><h3 className="text-xl text-primary">What labs are included?</h3><p className="mt-2 text-foreground/80 leading-relaxed">The $454 Root Cause Lab Panel includes full thyroid testing alongside nutrients, lipids, blood sugar, liver, and inflammation markers.</p></div>
          <div><h3 className="text-xl text-primary">Do you treat Hashimoto's?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Autoimmune thyroid patterns are evaluated alongside conventional care, with attention to root drivers such as gut health, nutrients, and inflammation.</p></div>
        </div>
      </section>
      <section className="bg-muted/60 border-y border-border">
        <div className="container-prose py-16">
          <h2 className="text-3xl md:text-4xl">Read the guide, then decide</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            <Link to="/blog/normal-tsh-hypothyroid-symptoms-michigan-wisconsin" className="text-primary underline">Normal TSH But Still Exhausted? A Root Cause Thyroid Guide</Link>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book-free-assessment-call" className="btn-gold">Book Free Assessment Call</Link>
            <Link to="/services" className="btn-ghost">See services and pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
