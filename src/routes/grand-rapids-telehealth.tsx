import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/grand-rapids-telehealth")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://novaweightandwellness.com/grand-rapids-telehealth" }],
    meta: [
      { title: "Functional Medicine in Grand Rapids, MI | Novaleo Weight & Wellness" },
      { name: "description", content: "Novaleo Weight & Wellness in Grand Rapids, Michigan: telehealth functional medicine for fatigue, brain fog, hormones, thyroid, and weight resistance, at 1805 Leonard St NE, Grand Rapids, MI 49505." },
      { property: "og:title", content: "Functional Medicine in Grand Rapids, MI | Novaleo Weight & Wellness" },
      { property: "og:description", content: "Novaleo Weight & Wellness in Grand Rapids, Michigan: telehealth functional medicine for fatigue, brain fog, hormones, thyroid, and weight resistance, at 1805 Leonard St NE, Grand Rapids, MI 49505." },
      { property: "og:url", content: "https://novaweightandwellness.com/grand-rapids-telehealth" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Functional Medicine in Grand Rapids, MI | Novaleo Weight & Wellness" },
      { name: "twitter:description", content: "Novaleo Weight & Wellness in Grand Rapids, Michigan: telehealth functional medicine for fatigue, brain fog, hormones, thyroid, and weight resistance, at 1805 Leonard St NE, Grand Rapids, MI 49505." },
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
                name: "Functional Medicine in Grand Rapids, MI | Novaleo Weight & Wellness",
                description: "Novaleo Weight & Wellness in Grand Rapids, Michigan: telehealth functional medicine for fatigue, brain fog, hormones, thyroid, and weight resistance, at 1805 Leonard St NE, Grand Rapids, MI 49505.",
                url: "https://novaweightandwellness.com/grand-rapids-telehealth",
                about: { "@type": "MedicalBusiness", name: "Novaleo Weight & Wellness", url: "https://novaweightandwellness.com" },
              },
              {
                "@type": "FAQPage",
                mainEntity: [{"@type": "Question", "name": "Where are you located?", "acceptedAnswer": {"@type": "Answer", "text": "1805 Leonard St NE, Grand Rapids, MI 49505. Care is delivered by telehealth across Michigan and Wisconsin."}}, {"@type": "Question", "name": "Can I visit in person?", "acceptedAnswer": {"@type": "Answer", "text": "Visits are telehealth visits by secure video. Contact us by phone or email to confirm the right starting point for you."}}, {"@type": "Question", "name": "What is the first step?", "acceptedAnswer": {"@type": "Answer", "text": "A free assessment call, or the 60-minute $97 Root Cause Intake."}}],
              },
            ],
          }),
        }}
      />
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">Novaleo Weight &amp; Wellness · Michigan &amp; Wisconsin telehealth</div>
        <h1 className="text-5xl md:text-6xl leading-[1.05] max-w-3xl">Functional medicine in Grand Rapids.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">Novaleo is based at 1805 Leonard St NE, Grand Rapids, MI 49505, and serves Michigan and Wisconsin by telehealth. If you live in Grand Rapids or West Michigan, you get the same local-lab, video-visit model as patients statewide, without a long drive to a specialist.</p>
        <p className="mt-4 text-sm text-muted-foreground max-w-2xl leading-relaxed">
          This page is educational. It does not replace medical advice, and any treatment decision
          follows an individual evaluation.
        </p>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">What this care includes</h2>
        <ul className="grid md:grid-cols-2 gap-5">
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Practice address: 1805 Leonard St NE, Grand Rapids, MI 49505</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Phone: 1-616-801-4648, email: Katie@novaweightandwellness.com</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Telehealth visits, with labs drawn locally near you</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">West Michigan coverage including Grand Rapids, Kalamazoo, and surrounding communities</li>
        </ul>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">Frequently asked questions</h2>
        <div className="space-y-6 max-w-2xl">
          <div><h3 className="text-xl text-primary">Where are you located?</h3><p className="mt-2 text-foreground/80 leading-relaxed">1805 Leonard St NE, Grand Rapids, MI 49505. Care is delivered by telehealth across Michigan and Wisconsin.</p></div>
          <div><h3 className="text-xl text-primary">Can I visit in person?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Visits are telehealth visits by secure video. Contact us by phone or email to confirm the right starting point for you.</p></div>
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
