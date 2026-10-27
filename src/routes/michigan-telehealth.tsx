import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/michigan-telehealth")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://novaweightandwellness.com/michigan-telehealth" }],
    meta: [
      { title: "Functional Medicine Telehealth in Michigan | Novaleo Weight & Wellness" },
      { name: "description", content: "Telehealth functional medicine across Michigan: Grand Rapids, Detroit, Ann Arbor, Lansing, Kalamazoo, and rural Michigan, with labs drawn locally and visits by secure video." },
      { property: "og:title", content: "Functional Medicine Telehealth in Michigan | Novaleo Weight & Wellness" },
      { property: "og:description", content: "Telehealth functional medicine across Michigan: Grand Rapids, Detroit, Ann Arbor, Lansing, Kalamazoo, and rural Michigan, with labs drawn locally and visits by secure video." },
      { property: "og:url", content: "https://novaweightandwellness.com/michigan-telehealth" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Functional Medicine Telehealth in Michigan | Novaleo Weight & Wellness" },
      { name: "twitter:description", content: "Telehealth functional medicine across Michigan: Grand Rapids, Detroit, Ann Arbor, Lansing, Kalamazoo, and rural Michigan, with labs drawn locally and visits by secure video." },
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
                name: "Functional Medicine Telehealth in Michigan | Novaleo Weight & Wellness",
                description: "Telehealth functional medicine across Michigan: Grand Rapids, Detroit, Ann Arbor, Lansing, Kalamazoo, and rural Michigan, with labs drawn locally and visits by secure video.",
                url: "https://novaweightandwellness.com/michigan-telehealth",
                about: { "@type": "MedicalBusiness", name: "Novaleo Weight & Wellness", url: "https://novaweightandwellness.com" },
              },
              {
                "@type": "FAQPage",
                mainEntity: [{"@type": "Question", "name": "Do I need to come to Grand Rapids in person?", "acceptedAnswer": {"@type": "Answer", "text": "No. Care is delivered by telehealth, with labs drawn locally near you."}}, {"@type": "Question", "name": "Which Michigan cities do you serve?", "acceptedAnswer": {"@type": "Answer", "text": "Grand Rapids, Detroit, Ann Arbor, Lansing, Kalamazoo, and smaller and rural communities across Michigan."}}, {"@type": "Question", "name": "What is the first step?", "acceptedAnswer": {"@type": "Answer", "text": "A free assessment call, or the 60-minute $97 Root Cause Intake."}}],
              },
            ],
          }),
        }}
      />
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">Novaleo Weight &amp; Wellness · Michigan &amp; Wisconsin telehealth</div>
        <h1 className="text-5xl md:text-6xl leading-[1.05] max-w-3xl">Functional medicine telehealth in Michigan.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">You do not need to live in Grand Rapids to get this care, and you do not need to travel for a specialist visit. Visits happen by secure video, labs are drawn locally near you, and the same evaluation process applies whether you are in Detroit, Traverse City, Marquette, or a smaller town.</p>
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
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">A Grand Rapids practice address, with statewide telehealth service</li>
        </ul>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">Frequently asked questions</h2>
        <div className="space-y-6 max-w-2xl">
          <div><h3 className="text-xl text-primary">Do I need to come to Grand Rapids in person?</h3><p className="mt-2 text-foreground/80 leading-relaxed">No. Care is delivered by telehealth, with labs drawn locally near you.</p></div>
          <div><h3 className="text-xl text-primary">Which Michigan cities do you serve?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Grand Rapids, Detroit, Ann Arbor, Lansing, Kalamazoo, and smaller and rural communities across Michigan.</p></div>
          <div><h3 className="text-xl text-primary">What is the first step?</h3><p className="mt-2 text-foreground/80 leading-relaxed">A free assessment call, or the 60-minute $97 Root Cause Intake.</p></div>
        </div>
      </section>
      <section className="bg-muted/60 border-y border-border">
        <div className="container-prose py-16">
          <h2 className="text-3xl md:text-4xl">Read the guide, then decide</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            <Link to="/blog/medical-weight-loss-hormone-therapy-michigan-wisconsin-cities" className="text-primary underline">Medical Weight Loss and Hormone Therapy: The Michigan & Wisconsin City Guide</Link>
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
