import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/functional-medicine-cost")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://novaweightandwellness.com/functional-medicine-cost" }],
    meta: [
      { title: "How Much Does Functional Medicine Cost? | Novaleo Weight & Wellness" },
      { name: "description", content: "Transparent functional medicine pricing at Novaleo Weight & Wellness: free assessment call, $47 Clarity Session, $97 Root Cause Intake, $454 lab panel, and the $3,995 six-month program." },
      { property: "og:title", content: "How Much Does Functional Medicine Cost? | Novaleo Weight & Wellness" },
      { property: "og:description", content: "Transparent functional medicine pricing at Novaleo Weight & Wellness: free assessment call, $47 Clarity Session, $97 Root Cause Intake, $454 lab panel, and the $3,995 six-month program." },
      { property: "og:url", content: "https://novaweightandwellness.com/functional-medicine-cost" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "How Much Does Functional Medicine Cost? | Novaleo Weight & Wellness" },
      { name: "twitter:description", content: "Transparent functional medicine pricing at Novaleo Weight & Wellness: free assessment call, $47 Clarity Session, $97 Root Cause Intake, $454 lab panel, and the $3,995 six-month program." },
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
                name: "How Much Does Functional Medicine Cost? | Novaleo Weight & Wellness",
                description: "Transparent functional medicine pricing at Novaleo Weight & Wellness: free assessment call, $47 Clarity Session, $97 Root Cause Intake, $454 lab panel, and the $3,995 six-month program.",
                url: "https://novaweightandwellness.com/functional-medicine-cost",
                about: { "@type": "MedicalBusiness", name: "Novaleo Weight & Wellness", url: "https://novaweightandwellness.com" },
              },
              {
                "@type": "FAQPage",
                mainEntity: [{"@type": "Question", "name": "Do you take insurance?", "acceptedAnswer": {"@type": "Answer", "text": "No. FSA, HSA, credit, and debit cards are accepted."}}, {"@type": "Question", "name": "Is the $47 Clarity Session the same as the $97 intake?", "acceptedAnswer": {"@type": "Answer", "text": "No. The Clarity Session is 30 minutes and $47. The Root Cause Intake is 60 minutes and $97. They are different offers."}}, {"@type": "Question", "name": "What is the refund policy?", "acceptedAnswer": {"@type": "Answer", "text": "Due to the digital and service-based nature of programs, consultations, and wellness services, all sales are final and no refunds will be issued. See the Contact page FAQ for the full wording."}}, {"@type": "Question", "name": "Does the lab panel count toward the program?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The lab panel price is credited toward The Root Cause Restoration Program if you enroll within 30 days, as stated on the Services page."}}],
              },
            ],
          }),
        }}
      />
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">Novaleo Weight &amp; Wellness · Michigan &amp; Wisconsin telehealth</div>
        <h1 className="text-5xl md:text-6xl leading-[1.05] max-w-3xl">How much does functional medicine cost?</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">Prices are listed here in one place, so you do not have to piece them together from blog posts. If a price changes, this page and the Services page should change together. No insurance is accepted. FSA, HSA, credit, and debit cards are accepted.</p>
        <p className="mt-4 text-sm text-muted-foreground max-w-2xl leading-relaxed">
          This page is educational. It does not replace medical advice, and any treatment decision
          follows an individual evaluation.
        </p>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">What this care includes</h2>
        <ul className="grid md:grid-cols-2 gap-5">
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Free Assessment Call: free, informational, no obligation</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Clarity Session: $47, 30 minutes, a separate paid session</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Root Cause Intake: $97, 60 minutes, full health history and a personalized starting plan</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">Root Cause Lab Panel: $454, including written insights on your results</li>
          <li className="rounded-xl border border-border bg-card p-6 text-foreground/85 leading-relaxed">The Root Cause Restoration Program: $3,995, six months, intentionally limited to four clients at a time</li>
        </ul>
      </section>
      <section className="container-prose pb-16">
        <h2 className="text-3xl md:text-4xl mb-8">Frequently asked questions</h2>
        <div className="space-y-6 max-w-2xl">
          <div><h3 className="text-xl text-primary">Do you take insurance?</h3><p className="mt-2 text-foreground/80 leading-relaxed">No. FSA, HSA, credit, and debit cards are accepted.</p></div>
          <div><h3 className="text-xl text-primary">Is the $47 Clarity Session the same as the $97 intake?</h3><p className="mt-2 text-foreground/80 leading-relaxed">No. The Clarity Session is 30 minutes and $47. The Root Cause Intake is 60 minutes and $97. They are different offers.</p></div>
          <div><h3 className="text-xl text-primary">What is the refund policy?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Due to the digital and service-based nature of programs, consultations, and wellness services, all sales are final and no refunds will be issued. See the Contact page FAQ for the full wording.</p></div>
          <div><h3 className="text-xl text-primary">Does the lab panel count toward the program?</h3><p className="mt-2 text-foreground/80 leading-relaxed">Yes. The lab panel price is credited toward The Root Cause Restoration Program if you enroll within 30 days, as stated on the Services page.</p></div>
        </div>
      </section>
      <section className="bg-muted/60 border-y border-border">
        <div className="container-prose py-16">
          <h2 className="text-3xl md:text-4xl">Ready to decide?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            <Link to="/services" className="text-primary underline">Services and pricing</Link>
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
