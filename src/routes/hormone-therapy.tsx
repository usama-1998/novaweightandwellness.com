import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/hormone-therapy")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://novaweightandwellness.com/hormone-therapy" }],
    meta: [
      { title: "Hormone Therapy in Michigan & Wisconsin | Novaleo Weight & Wellness" },
      { name: "description", content: "Bioidentical hormone therapy for women in Michigan and Wisconsin: risks, benefits, delivery methods, candidacy, and what monitoring looks like, with telehealth care from Grand Rapids." },
      { property: "og:title", content: "Hormone Therapy in Michigan & Wisconsin | Novaleo Weight & Wellness" },
      { property: "og:description", content: "Bioidentical hormone therapy for women in Michigan and Wisconsin: risks, benefits, delivery methods, candidacy, and what monitoring looks like, with telehealth care from Grand Rapids." },
      { property: "og:url", content: "https://novaweightandwellness.com/hormone-therapy" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hormone Therapy in Michigan & Wisconsin | Novaleo Weight & Wellness" },
      { name: "twitter:description", content: "Bioidentical hormone therapy for women in Michigan and Wisconsin: risks, benefits, delivery methods, candidacy, and what monitoring looks like, with telehealth care from Grand Rapids." },
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
                name: "Hormone Therapy in Michigan & Wisconsin | Novaleo Weight & Wellness",
                description: "Bioidentical hormone therapy for women in Michigan and Wisconsin: risks, benefits, delivery methods, candidacy, and what monitoring looks like, with telehealth care from Grand Rapids.",
                url: "https://novaweightandwellness.com/hormone-therapy",
                about: { "@type": "MedicalBusiness", name: "Novaleo Weight & Wellness", url: "https://novaweightandwellness.com" },
              },
              {
                "@type": "FAQPage",
                mainEntity: [{"@type": "Question", "name": "Is hormone therapy right for everyone?", "acceptedAnswer": {"@type": "Answer", "text": "No. Candidacy depends on your history, risks, and goals, and is discussed in the intake before any treatment plan is agreed."}}, {"@type": "Question", "name": "What is bioidentical hormone therapy?", "acceptedAnswer": {"@type": "Answer", "text": "It refers to hormones that are molecularly identical to those the body makes. The guide linked below explains what the 2002 WHI study actually found, and what later research clarified."}}, {"@type": "Question", "name": "Where is care available?", "acceptedAnswer": {"@type": "Answer", "text": "Via telehealth in Michigan and Wisconsin. Labs are drawn locally near you."}}],
              },
            ],
          }),
        }}
      />
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">Novaleo Weight &amp; Wellness · Michigan &amp; Wisconsin telehealth</div>
        <h1 className="text-5xl md:text-6xl leading-[1.05] max-w-3xl">Hormone therapy.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">Hormone therapy is not one decision. It is a series of decisions: whether it fits you, which delivery method fits your life, what dose to start with, and how to monitor it. That is why this service starts with a comprehensive evaluation, not a standard protocol.</p>
        <p className="mt-4 text-sm text-muted-foreground max-w-2xl leading-relaxed">
          This page is educational. It does not replace medical advice, and any treatment decision
          follows an individual evaluation.
        </p>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">What this care includes</h2>
        <ul className="grid md:grid-cols-2 gap-5">
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">A candidacy discussion that covers personal and family history, not only symptoms</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Delivery methods compared, including what each method means day to day</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Baseline testing and ongoing monitoring</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">A plan that also addresses sleep, nutrition, stress, and metabolic health</li>
        </ul>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">Frequently asked questions</h2>
        <div className="space-y-6 max-w-2xl">
          <div><h3 className="text-xl text-primary">Is hormone therapy right for everyone?</h3><p className="mt-2 text-foreground/80 leading-relaxed">No. Candidacy depends on your history, risks, and goals, and is discussed in the intake before any treatment plan is agreed.</p></div>
          <div><h3 className="text-xl text-primary">What is bioidentical hormone therapy?</h3><p className="mt-2 text-foreground/80 leading-relaxed">It refers to hormones that are molecularly identical to those the body makes. The guide linked below explains what the 2002 WHI study actually found, and what later research clarified.</p></div>
          <div><h3 className="text-xl text-primary">Where is care available?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Via telehealth in Michigan and Wisconsin. Labs are drawn locally near you.</p></div>
        </div>
      </section>
      <section className="bg-muted/60 border-y border-border">
        <div className="container-prose py-16">
          <h2 className="text-3xl md:text-4xl">Read the guide, then decide</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            <Link to="/blog/bioidentical-hormone-therapy-guide-michigan-wisconsin" className="text-primary underline">The Complete Guide to Bioidentical Hormone Therapy</Link>
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
