import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/perimenopause-menopause-care")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://novaweightandwellness.com/perimenopause-menopause-care" }],
    meta: [
      { title: "Perimenopause & Menopause Care in MI & WI | Novaleo Weight & Wellness" },
      { name: "description", content: "Perimenopause and menopause care for women in Michigan and Wisconsin: brain fog, sleep disruption, weight resistance, hot flashes, mood changes, and hormone evaluation by telehealth." },
      { property: "og:title", content: "Perimenopause & Menopause Care in MI & WI | Novaleo Weight & Wellness" },
      { property: "og:description", content: "Perimenopause and menopause care for women in Michigan and Wisconsin: brain fog, sleep disruption, weight resistance, hot flashes, mood changes, and hormone evaluation by telehealth." },
      { property: "og:url", content: "https://novaweightandwellness.com/perimenopause-menopause-care" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Perimenopause & Menopause Care in MI & WI | Novaleo Weight & Wellness" },
      { name: "twitter:description", content: "Perimenopause and menopause care for women in Michigan and Wisconsin: brain fog, sleep disruption, weight resistance, hot flashes, mood changes, and hormone evaluation by telehealth." },
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
                name: "Perimenopause & Menopause Care in MI & WI | Novaleo Weight & Wellness",
                description: "Perimenopause and menopause care for women in Michigan and Wisconsin: brain fog, sleep disruption, weight resistance, hot flashes, mood changes, and hormone evaluation by telehealth.",
                url: "https://novaweightandwellness.com/perimenopause-menopause-care",
                about: { "@type": "MedicalBusiness", name: "Novaleo Weight & Wellness", url: "https://novaweightandwellness.com" },
              },
              {
                "@type": "FAQPage",
                mainEntity: [{"@type": "Question", "name": "Can perimenopause start in my 30s?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hormonal variability can begin in the mid-30s while cycles are still regular. The perimenopause guide linked below explains the early signs clinicians often miss."}}, {"@type": "Question", "name": "Is brain fog a sign of something serious?", "acceptedAnswer": {"@type": "Answer", "text": "Most perimenopausal brain fog has a hormonal explanation, but persistent or worsening memory concerns should always be evaluated directly with a clinician."}}, {"@type": "Question", "name": "What is the first step?", "acceptedAnswer": {"@type": "Answer", "text": "A free assessment call, or the 60-minute $97 Root Cause Intake if you want to start with a full evaluation."}}],
              },
            ],
          }),
        }}
      />
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">Novaleo Weight &amp; Wellness · Michigan &amp; Wisconsin telehealth</div>
        <h1 className="text-5xl md:text-6xl leading-[1.05] max-w-3xl">Perimenopause and menopause care.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">Perimenopause does not start at 50, and it does not look the same for every woman. Brain fog, 3am waking, new anxiety, weight resistance, and irregular cycles can all arrive while periods are still regular. Care here starts by mapping what is actually changing, rather than treating each symptom in isolation.</p>
        <p className="mt-4 text-sm text-muted-foreground max-w-2xl leading-relaxed">
          This page is educational. It does not replace medical advice, and any treatment decision
          follows an individual evaluation.
        </p>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">What this care includes</h2>
        <ul className="grid md:grid-cols-2 gap-5">
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Hormone, thyroid, metabolic, and cortisol evaluation as one connected picture</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Brain fog, sleep, mood, and weight addressed together, not as separate problems</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">A plan for the transition and for life after menopause, including bones, heart, sleep, and gut health</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Telehealth visits that fit a working schedule</li>
        </ul>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">Frequently asked questions</h2>
        <div className="space-y-6 max-w-2xl">
          <div><h3 className="text-xl text-primary">Can perimenopause start in my 30s?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Yes. Hormonal variability can begin in the mid-30s while cycles are still regular. The perimenopause guide linked below explains the early signs clinicians often miss.</p></div>
          <div><h3 className="text-xl text-primary">Is brain fog a sign of something serious?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Most perimenopausal brain fog has a hormonal explanation, but persistent or worsening memory concerns should always be evaluated directly with a clinician.</p></div>
          <div><h3 className="text-xl text-primary">What is the first step?</h3><p className="mt-2 text-foreground/80 leading-relaxed">A free assessment call, or the 60-minute $97 Root Cause Intake if you want to start with a full evaluation.</p></div>
        </div>
      </section>
      <section className="bg-muted/60 border-y border-border">
        <div className="container-prose py-16">
          <h2 className="text-3xl md:text-4xl">Read the guide, then decide</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            <Link to="/blog/perimenopause-brain-fog-memory-michigan-wisconsin" className="text-primary underline">Perimenopausal Brain Fog vs. Something More Serious</Link>
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
