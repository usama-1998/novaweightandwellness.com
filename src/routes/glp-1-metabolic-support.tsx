import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/glp-1-metabolic-support")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://novaweightandwellness.com/glp-1-metabolic-support" }],
    meta: [
      { title: "GLP-1 and Metabolic Support | Novaleo Weight & Wellness" },
      { name: "description", content: "GLP-1 and metabolic support for women in Michigan and Wisconsin: why weight loss stalls on GLP-1 medication, what testing checks first, and how a root-cause plan differs from a prescription alone." },
      { property: "og:title", content: "GLP-1 and Metabolic Support | Novaleo Weight & Wellness" },
      { property: "og:description", content: "GLP-1 and metabolic support for women in Michigan and Wisconsin: why weight loss stalls on GLP-1 medication, what testing checks first, and how a root-cause plan differs from a prescription alone." },
      { property: "og:url", content: "https://novaweightandwellness.com/glp-1-metabolic-support" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "GLP-1 and Metabolic Support | Novaleo Weight & Wellness" },
      { name: "twitter:description", content: "GLP-1 and metabolic support for women in Michigan and Wisconsin: why weight loss stalls on GLP-1 medication, what testing checks first, and how a root-cause plan differs from a prescription alone." },
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
                name: "GLP-1 and Metabolic Support | Novaleo Weight & Wellness",
                description: "GLP-1 and metabolic support for women in Michigan and Wisconsin: why weight loss stalls on GLP-1 medication, what testing checks first, and how a root-cause plan differs from a prescription alone.",
                url: "https://novaweightandwellness.com/glp-1-metabolic-support",
                about: { "@type": "MedicalBusiness", name: "Novaleo Weight & Wellness", url: "https://novaweightandwellness.com" },
              },
              {
                "@type": "FAQPage",
                mainEntity: [{"@type": "Question", "name": "Do you prescribe GLP-1 medication?", "acceptedAnswer": {"@type": "Answer", "text": "Prescribing decisions are made after an individual evaluation. This page does not promise a prescription, and any medication decision depends on your history, labs, and clinical suitability."}}, {"@type": "Question", "name": "Why would weight loss stall on Ozempic?", "acceptedAnswer": {"@type": "Answer", "text": "Common contributors include thyroid dysfunction, perimenopause hormones, insulin resistance, muscle loss, and nutrient depletion. Testing helps separate those causes instead of guessing."}}, {"@type": "Question", "name": "What does the $454 lab panel check?", "acceptedAnswer": {"@type": "Answer", "text": "Nutrients, full thyroid, lipids and Lipoprotein(a), blood sugar, liver, and inflammation markers. See the Services page for the full list."}}],
              },
            ],
          }),
        }}
      />
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">Novaleo Weight &amp; Wellness · Michigan &amp; Wisconsin telehealth</div>
        <h1 className="text-5xl md:text-6xl leading-[1.05] max-w-3xl">GLP-1 and metabolic support.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">GLP-1 medication can help, and it can also stall. When weight loss plateaus, the usual next step is not simply a higher dose. Thyroid, hormones, insulin resistance, muscle loss, nutrient depletion, and sleep can all blunt the response, and none of those show up on a prescription alone.</p>
        <p className="mt-4 text-sm text-muted-foreground max-w-2xl leading-relaxed">
          This page is educational. It does not replace medical advice, and any treatment decision
          follows an individual evaluation.
        </p>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">What this care includes</h2>
        <ul className="grid md:grid-cols-2 gap-5">
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">A full evaluation before or alongside GLP-1 care, including thyroid, insulin, and metabolic markers</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Why plateaus happen, and what to check before changing a dose</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Muscle, nutrition, and metabolic strength, so weight loss is not only scale loss</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Ongoing monitoring and plan adjustments, not a one-time prescription</li>
        </ul>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">Frequently asked questions</h2>
        <div className="space-y-6 max-w-2xl">
          <div><h3 className="text-xl text-primary">Do you prescribe GLP-1 medication?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Prescribing decisions are made after an individual evaluation. This page does not promise a prescription, and any medication decision depends on your history, labs, and clinical suitability.</p></div>
          <div><h3 className="text-xl text-primary">Why would weight loss stall on Ozempic?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Common contributors include thyroid dysfunction, perimenopause hormones, insulin resistance, muscle loss, and nutrient depletion. Testing helps separate those causes instead of guessing.</p></div>
          <div><h3 className="text-xl text-primary">What does the $454 lab panel check?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Nutrients, full thyroid, lipids and Lipoprotein(a), blood sugar, liver, and inflammation markers. See the Services page for the full list.</p></div>
        </div>
      </section>
      <section className="bg-muted/60 border-y border-border">
        <div className="container-prose py-16">
          <h2 className="text-3xl md:text-4xl">Read the guide, then decide</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            <Link to="/blog/ozempic-not-working-michigan-wisconsin-women" className="text-primary underline">Why Am I Not Losing Weight on Ozempic?</Link>
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
