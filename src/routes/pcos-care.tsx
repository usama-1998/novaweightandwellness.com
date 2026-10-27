import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pcos-care")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://novaweightandwellness.com/pcos-care" }],
    meta: [
      { title: "PCOS Care in Michigan & Wisconsin | Novaleo Weight & Wellness" },
      { name: "description", content: "PCOS care for women in their 30s in Michigan and Wisconsin: insulin resistance, weight resistance, irregular cycles, and androgen symptoms, evaluated with comprehensive testing." },
      { property: "og:title", content: "PCOS Care in Michigan & Wisconsin | Novaleo Weight & Wellness" },
      { property: "og:description", content: "PCOS care for women in their 30s in Michigan and Wisconsin: insulin resistance, weight resistance, irregular cycles, and androgen symptoms, evaluated with comprehensive testing." },
      { property: "og:url", content: "https://novaweightandwellness.com/pcos-care" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PCOS Care in Michigan & Wisconsin | Novaleo Weight & Wellness" },
      { name: "twitter:description", content: "PCOS care for women in their 30s in Michigan and Wisconsin: insulin resistance, weight resistance, irregular cycles, and androgen symptoms, evaluated with comprehensive testing." },
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
                name: "PCOS Care in Michigan & Wisconsin | Novaleo Weight & Wellness",
                description: "PCOS care for women in their 30s in Michigan and Wisconsin: insulin resistance, weight resistance, irregular cycles, and androgen symptoms, evaluated with comprehensive testing.",
                url: "https://novaweightandwellness.com/pcos-care",
                about: { "@type": "MedicalBusiness", name: "Novaleo Weight & Wellness", url: "https://novaweightandwellness.com" },
              },
              {
                "@type": "FAQPage",
                mainEntity: [{"@type": "Question", "name": "Can PCOS only be diagnosed by a clinician?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. A checklist is a starting point for conversation and testing, not a diagnostic tool. Formal diagnosis requires a licensed clinician."}}, {"@type": "Question", "name": "Is this fertility guidance?", "acceptedAnswer": {"@type": "Answer", "text": "No. This page focuses on weight and metabolic management. Fertility questions should be discussed directly in care."}}, {"@type": "Question", "name": "What is the first step?", "acceptedAnswer": {"@type": "Answer", "text": "A free assessment call, or the 60-minute $97 Root Cause Intake for a full evaluation."}}],
              },
            ],
          }),
        }}
      />
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">Novaleo Weight &amp; Wellness · Michigan &amp; Wisconsin telehealth</div>
        <h1 className="text-5xl md:text-6xl leading-[1.05] max-w-3xl">PCOS care.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">PCOS is often diagnosed years ago and then never properly managed, or never diagnosed at all. Weight resistance in PCOS is rarely about willpower. It is usually an insulin-androgen cycle that works against eating less and moving more, until that cycle is addressed directly.</p>
        <p className="mt-4 text-sm text-muted-foreground max-w-2xl leading-relaxed">
          This page is educational. It does not replace medical advice, and any treatment decision
          follows an individual evaluation.
        </p>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">What this care includes</h2>
        <ul className="grid md:grid-cols-2 gap-5">
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Comprehensive testing for insulin resistance, androgens, thyroid, and metabolic health</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">A plan for weight resistance that addresses the insulin-androgen cycle, not only calories</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Support for cycles, skin, hair, sleep, and mood symptoms as part of one picture</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Care that also considers perimenopause layering on top of PCOS in your late 30s and 40s</li>
        </ul>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">Frequently asked questions</h2>
        <div className="space-y-6 max-w-2xl">
          <div><h3 className="text-xl text-primary">Can PCOS only be diagnosed by a clinician?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Yes. A checklist is a starting point for conversation and testing, not a diagnostic tool. Formal diagnosis requires a licensed clinician.</p></div>
          <div><h3 className="text-xl text-primary">Is this fertility guidance?</h3><p className="mt-2 text-foreground/80 leading-relaxed">No. This page focuses on weight and metabolic management. Fertility questions should be discussed directly in care.</p></div>
          <div><h3 className="text-xl text-primary">What is the first step?</h3><p className="mt-2 text-foreground/80 leading-relaxed">A free assessment call, or the 60-minute $97 Root Cause Intake for a full evaluation.</p></div>
        </div>
      </section>
      <section className="bg-muted/60 border-y border-border">
        <div className="container-prose py-16">
          <h2 className="text-3xl md:text-4xl">Read the guide, then decide</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            <Link to="/blog/pcos-weight-resistance-women-30s-michigan-wisconsin" className="text-primary underline">PCOS in Your 30s: Why Weight Loss Feels Impossible</Link>
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
