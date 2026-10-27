import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/wisconsin-telehealth")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://novaweightandwellness.com/wisconsin-telehealth" }],
    meta: [
      { title: "Functional Medicine Telehealth in Wisconsin | Novaleo Weight & Wellness" },
      { name: "description", content: "Telehealth functional medicine across Wisconsin: Milwaukee, Madison, Green Bay, and rural Wisconsin, with labs drawn locally and visits by secure video." },
      { property: "og:title", content: "Functional Medicine Telehealth in Wisconsin | Novaleo Weight & Wellness" },
      { property: "og:description", content: "Telehealth functional medicine across Wisconsin: Milwaukee, Madison, Green Bay, and rural Wisconsin, with labs drawn locally and visits by secure video." },
      { property: "og:url", content: "https://novaweightandwellness.com/wisconsin-telehealth" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Functional Medicine Telehealth in Wisconsin | Novaleo Weight & Wellness" },
      { name: "twitter:description", content: "Telehealth functional medicine across Wisconsin: Milwaukee, Madison, Green Bay, and rural Wisconsin, with labs drawn locally and visits by secure video." },
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
                name: "Functional Medicine Telehealth in Wisconsin | Novaleo Weight & Wellness",
                description: "Telehealth functional medicine across Wisconsin: Milwaukee, Madison, Green Bay, and rural Wisconsin, with labs drawn locally and visits by secure video.",
                url: "https://novaweightandwellness.com/wisconsin-telehealth",
                about: { "@type": "MedicalBusiness", name: "Novaleo Weight & Wellness", url: "https://novaweightandwellness.com" },
              },
              {
                "@type": "FAQPage",
                mainEntity: [{"@type": "Question", "name": "Do I need to travel to Michigan for care?", "acceptedAnswer": {"@type": "Answer", "text": "No. Care is delivered by telehealth, with labs drawn locally near you in Wisconsin."}}, {"@type": "Question", "name": "Which Wisconsin cities do you serve?", "acceptedAnswer": {"@type": "Answer", "text": "Milwaukee, Madison, Green Bay, and smaller and rural communities across Wisconsin."}}, {"@type": "Question", "name": "What is the first step?", "acceptedAnswer": {"@type": "Answer", "text": "A free assessment call, or the 60-minute $97 Root Cause Intake."}}],
              },
            ],
          }),
        }}
      />
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">Novaleo Weight &amp; Wellness · Michigan &amp; Wisconsin telehealth</div>
        <h1 className="text-5xl md:text-6xl leading-[1.05] max-w-3xl">Functional medicine telehealth in Wisconsin.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">Wisconsin women over 40 often hear the same story: labs are normal, but exhaustion, stubborn weight, and brain fog are not. Telehealth care means that story does not depend on where you live, whether you are in Milwaukee, Madison, Green Bay, Eau Claire, or a smaller community.</p>
        <p className="mt-4 text-sm text-muted-foreground max-w-2xl leading-relaxed">
          This page is educational. It does not replace medical advice, and any treatment decision
          follows an individual evaluation.
        </p>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">What this care includes</h2>
        <ul className="grid md:grid-cols-2 gap-5">
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Telehealth visits from your laptop or phone, built for a working schedule</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Labs drawn locally, with written insights on your results</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Care for fatigue, brain fog, hormone imbalance, thyroid, and weight resistance</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">The same evaluation process as in Michigan, without travel for a specialist visit</li>
        </ul>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">Frequently asked questions</h2>
        <div className="space-y-6 max-w-2xl">
          <div><h3 className="text-xl text-primary">Do I need to travel to Michigan for care?</h3><p className="mt-2 text-foreground/80 leading-relaxed">No. Care is delivered by telehealth, with labs drawn locally near you in Wisconsin.</p></div>
          <div><h3 className="text-xl text-primary">Which Wisconsin cities do you serve?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Milwaukee, Madison, Green Bay, and smaller and rural communities across Wisconsin.</p></div>
          <div><h3 className="text-xl text-primary">What is the first step?</h3><p className="mt-2 text-foreground/80 leading-relaxed">A free assessment call, or the 60-minute $97 Root Cause Intake.</p></div>
        </div>
      </section>
      <section className="bg-muted/60 border-y border-border">
        <div className="container-prose py-16">
          <h2 className="text-3xl md:text-4xl">Read the guide, then decide</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            <Link to="/blog/gaining-weight-exhausted-after-40-wisconsin-women" className="text-primary underline">Gaining Weight and Exhausted After 40? What Every Wisconsin Woman Needs to Know</Link>
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
