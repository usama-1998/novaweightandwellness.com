import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import PaidClaritySession from '@/components/PaidClaritySession';

export const Route = createFileRoute('/clarity-session')({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://novaweightandwellness.com/clarity-session" },
    ],
    meta: [
      { title: "Book a Clarity Session | Novaleo Weight & Wellness" },
      {
        name: "description",
        content:
          "Schedule your $47 30-minute Clarity Session with Kathryn Long, NP-C. Available via telehealth in Michigan and Wisconsin.",
      },
      { property: "og:title", content: "Book a Clarity Session | Novaleo" },
      {
        property: "og:description",
        content: "Schedule your $47 30-minute Clarity Session with Kathryn Long, NP-C. Telehealth in MI & WI.",
      },
      { property: "og:url", content: "https://novaweightandwellness.com/clarity-session" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Book a Clarity Session | Novaleo" },
      { name: "twitter:description", content: "Schedule your $47 30-minute Clarity Session with Kathryn Long, NP-C. Telehealth in MI & WI." },
      { name: "twitter:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
    ],
  }),
  component: ClaritySessionPage,
});

const PageStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    .blob-shape {
      animation: float 12s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
      50% { transform: translateY(-20px) scale(1.05) rotate(2deg); }
    }
  `}} />
);

const OrganicBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#FDFBF7]">
    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 blob-shape" />
    <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-60 blob-shape" style={{animationDelay: '2s'}} />
  </div>
);

function ClaritySessionPage() {
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', goal: '' });

  const dates = [
    { day: 'Mon', date: '15', month: 'Jun', full: 'June 15, 2026' },
  ];
  const times = ['9:00 AM'];

  const submitBooking = () => {
    setStep(3);
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "How is this different from the $97 intake?", acceptedAnswer: { "@type": "Answer", text: "The Clarity Session is 30 minutes and $47. The Root Cause Intake is 60 minutes and $97, with a full health history and a personalized starting plan." } }, { "@type": "Question", name: "Is this a medical visit?", acceptedAnswer: { "@type": "Answer", text: "This page describes a consultation session. Bring your questions about symptoms, labs, and next steps." } }, { "@type": "Question", name: "Where is it available?", acceptedAnswer: { "@type": "Answer", text: "Via telehealth in Michigan and Wisconsin." } }] }) }} />
    <main className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center relative p-0 md:p-6">
      <h1 className="sr-only">Book a Clarity Session</h1>
      <PageStyles />
      <OrganicBackground />
      
      <div className="relative w-full max-w-2xl overflow-y-auto h-[100dvh] max-h-[100dvh] md:h-auto md:max-h-[90vh] rounded-none md:rounded-3xl bg-white md:bg-transparent shadow-2xl">
        <PaidClaritySession
          step={step}
          setStep={setStep}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
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
        <h2 className="text-3xl md:text-4xl text-primary">What is the $47 Clarity Session?</h2>
        <p className="mt-4 text-foreground/80 leading-relaxed max-w-2xl">
          A 30-minute paid session with Kathryn Long, NP-C, via telehealth in Michigan and
          Wisconsin. It is different from the free assessment call, and different from the
          60-minute $97 Root Cause Intake. If you are unsure which starting point fits you,
          book the free assessment call first.
        </p>
        <h3 className="mt-10 text-2xl text-primary">Frequently asked questions</h3>
        <div className="mt-4 space-y-4 max-w-2xl text-foreground/80 leading-relaxed">
          <p><strong className="text-foreground">How is this different from the $97 intake?</strong> The Clarity Session is 30 minutes and $47. The Root Cause Intake is 60 minutes and $97, with a full health history and a personalized starting plan.</p>
          <p><strong className="text-foreground">Is this a medical visit?</strong> This page describes a consultation session. Bring your questions about symptoms, labs, and next steps.</p>
          <p><strong className="text-foreground">Where is it available?</strong> Via telehealth in Michigan and Wisconsin.</p>
        </div>
      </section>
    </main>
    </>
  );
}
