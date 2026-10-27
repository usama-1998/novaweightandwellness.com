import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import BookingVariantA from '@/components/BookingVariantA';

export const Route = createFileRoute('/book-free-assessment-call')({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://novaweightandwellness.com/book-free-assessment-call" },
    ],
    meta: [
      { title: "Book a Free Assessment Call | Novaleo Weight & Wellness" },
      {
        name: "description",
        content:
          "Schedule your complimentary assessment call with one of our practitioners. Available via telehealth in Michigan and Wisconsin.",
      },
      { property: "og:title", content: "Book a Free Assessment Call | Novaleo" },
      {
        property: "og:description",
        content: "Schedule your complimentary assessment call with one of our practitioners.",
      },
      { property: "og:url", content: "https://novaweightandwellness.com/book-free-assessment-call" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Book a Free Assessment Call | Novaleo" },
      { name: "twitter:description", content: "Schedule your complimentary assessment call with one of our practitioners." },
      { name: "twitter:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
    ],
  }),
  component: AssessmentPage,
});



function AssessmentPage() {
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', goal: '' });

  const dates = [
    { day: 'Mon', date: '15', month: 'Jun', full: 'June 15, 2026' },
    { day: 'Tue', date: '16', month: 'Jun', full: 'June 16, 2026' },
    { day: 'Wed', date: '17', month: 'Jun', full: 'June 17, 2026' },
    { day: 'Thu', date: '18', month: 'Jun', full: 'June 18, 2026' },
    { day: 'Fri', date: '19', month: 'Jun', full: 'June 19, 2026' },
  ];

  const times = ['9:00 AM', '10:30 AM', '1:00 PM', '2:45 PM', '4:00 PM'];

  const submitBooking = () => {
    setStep(3);
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Is the call really free?", acceptedAnswer: { "@type": "Answer", text: "Yes. There is no cost and no obligation to book anything after." } }, { "@type": "Question", name: "Is this a medical visit?", acceptedAnswer: { "@type": "Answer", text: "No. This is an informational, non-clinical conversation." } }, { "@type": "Question", name: "What happens next?", acceptedAnswer: { "@type": "Answer", text: "You will leave with clarity on the process, pricing, and whether this is the right fit. The paid next step, if you choose it, is the $97 Root Cause Intake." } }, { "@type": "Question", name: "Where is care available?", acceptedAnswer: { "@type": "Answer", text: "Via telehealth in Michigan and Wisconsin." } }] }) }} />
    <main className="min-h-screen flex flex-col items-center justify-start md:justify-center relative p-0 md:p-8 bg-white">
      <h1 className="sr-only">Book a Free Assessment Call</h1>
      <div className={`w-full max-w-2xl mx-auto relative z-10 flex flex-col min-h-screen md:min-h-0 bg-white`}>
        <BookingVariantA
          step={step}
          setStep={setStep}
          selectedDate={selectedDate}
          setSelectedDate={(d) => { setSelectedDate(d); setSelectedTime(null); }}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          formData={formData}
          setFormData={setFormData}
          dates={dates}
          times={times}
          submitBooking={submitBooking}
        />
      </div>
      <section className="container-prose py-16">
        <h2 className="text-3xl md:text-4xl text-primary">What is the Free Assessment Call?</h2>
        <p className="mt-4 text-foreground/80 leading-relaxed max-w-2xl">
          A short, no-cost conversation to answer your questions, explain how functional medicine
          works here, and help you decide your next step. It is informational only: no medical
          advice is given on this call. If you decide to move forward, the next step is usually
          the 60-minute $97 Root Cause Intake, which is a different, paid session from the
          separate 30-minute $47 Clarity Session.
        </p>
        <h3 className="mt-10 text-2xl text-primary">Frequently asked questions</h3>
        <div className="mt-4 space-y-4 max-w-2xl text-foreground/80 leading-relaxed">
          <p><strong className="text-foreground">Is the call really free?</strong> Yes. There is no cost and no obligation to book anything after.</p>
          <p><strong className="text-foreground">Is this a medical visit?</strong> No. This is an informational, non-clinical conversation.</p>
          <p><strong className="text-foreground">What happens next?</strong> You will leave with clarity on the process, pricing, and whether this is the right fit. The paid next step, if you choose it, is the $97 Root Cause Intake.</p>
          <p><strong className="text-foreground">Where is care available?</strong> Via telehealth in Michigan and Wisconsin.</p>
        </div>
      </section>
    </main>
    </>
  );
}
