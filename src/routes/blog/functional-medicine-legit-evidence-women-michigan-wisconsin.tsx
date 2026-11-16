import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BlogLayout } from "@/components/blog/BlogLayout";

import heroImg from "@/assets/blog/functional-medicine-legit-hero-woman-laptop-grand-rapids-kitchen-evening.webp";
import receiptsImg from "@/assets/blog/functional-medicine-receipts-supplement-bottles-lab-report-counter.webp";
import journalImg from "@/assets/blog/functional-medicine-evidence-journal-articles-madison-library.webp";
import telehealthKalamazooImg from "@/assets/blog/functional-medicine-telehealth-visit-kalamazoo-home-office.webp";
import historyImg from "@/assets/blog/functional-medicine-history-university-journal-stacks-ann-arbor.webp";
import pharmacyAisleImg from "@/assets/blog/functional-medicine-pharmacy-aisle-comparing-supplement-bottles.webp";
import unhurriedImg from "@/assets/blog/functional-medicine-unhurried-visit-marquette-office-snow.webp";
import researchChartsImg from "@/assets/blog/functional-medicine-research-charts-laptop-clinical-journal.webp";
import clevelandInfographic from "@/assets/blog/functional-medicine-cleveland-clinic-2019-study-results-infographic.webp";
import rushedRoomImg from "@/assets/blog/functional-medicine-rushed-exam-room-wall-clock.webp";
import tiersInfographic from "@/assets/blog/functional-medicine-evidence-tiers-framework-infographic.webp";
import strengthImg from "@/assets/blog/functional-medicine-strength-training-wisconsin-basement-gym.webp";
import dppInfographic from "@/assets/blog/diabetes-prevention-program-lifestyle-vs-metformin-infographic.webp";
import marketImg from "@/assets/blog/functional-medicine-ann-arbor-farmers-market-vegetables.webp";
import mealPrepImg from "@/assets/blog/functional-medicine-meal-prep-detroit-kitchen.webp";
import sleepImg from "@/assets/blog/functional-medicine-restful-sleep-lake-cottage-bedroom.webp";
import tubesImg from "@/assets/blog/functional-medicine-blood-collection-tubes-lab-rack.webp";
import kitsImg from "@/assets/blog/functional-medicine-at-home-test-kits-kitchen-counter.webp";
import tickImg from "@/assets/blog/functional-medicine-wisconsin-trail-tick-check-lyme.webp";
import lymeInfographic from "@/assets/blog/wisconsin-lyme-disease-cases-2025-record-infographic.webp";
import supplementShelfImg from "@/assets/blog/functional-medicine-crowded-supplement-shelf-pill-organizer.webp";
import pharmacistImg from "@/assets/blog/functional-medicine-pharmacist-medication-list-consultation.webp";
import credentialsImg from "@/assets/blog/functional-medicine-nurse-practitioner-credentials-grand-rapids-office.webp";
import verifyInfographic from "@/assets/blog/verify-your-provider-four-checks-infographic.webp";
import budgetImg from "@/assets/blog/functional-medicine-budgeting-milwaukee-kitchen-hsa-card.webp";
import frontDeskImg from "@/assets/blog/functional-medicine-clinic-front-desk-clipboard-tablet.webp";
import upRoadImg from "@/assets/blog/functional-medicine-upper-peninsula-snowy-road-farmhouse.webp";
import shortageInfographic from "@/assets/blog/michigan-wisconsin-primary-care-shortage-need-met-infographic.webp";
import unheardImg from "@/assets/blog/functional-medicine-rushed-visit-doctor-typing-patient-unheard.webp";
import screeningImg from "@/assets/blog/functional-medicine-primary-care-screening-checklist-exam-room.webp";
import questionsImg from "@/assets/blog/functional-medicine-writing-questions-before-appointment.webp";
import flagsInfographic from "@/assets/blog/functional-medicine-green-flags-red-flags-infographic.webp";
import npVideoImg from "@/assets/blog/functional-medicine-nurse-practitioner-video-visit-home-office.webp";
import fourWomenImg from "@/assets/blog/functional-medicine-four-women-door-county-porch-coffee.webp";
import phoneImg from "@/assets/blog/functional-medicine-phone-call-notes-madison-kitchen.webp";
import folderImg from "@/assets/blog/functional-medicine-organizing-lab-printouts-folder.webp";
import sunroomImg from "@/assets/blog/functional-medicine-sunroom-planner-snow-michigan.webp";
import listImg from "@/assets/blog/functional-medicine-crossing-items-off-list.webp";
import dinerImg from "@/assets/blog/functional-medicine-friends-diner-booth-wisconsin.webp";
import lighthouseImg from "@/assets/blog/functional-medicine-lake-michigan-lighthouse-fog.webp";
import porchSwingImg from "@/assets/blog/functional-medicine-porch-swing-phone-michigan-autumn.webp";
import dockImg from "@/assets/blog/functional-medicine-dock-sunrise-lake-michigan-woman.webp";
import handPlanImg from "@/assets/blog/functional-medicine-hand-one-page-plan-to-primary-care-doctor.webp";
import forkTrailImg from "@/assets/blog/functional-medicine-forest-trail-fork-michigan-autumn.webp";

const SLUG = "functional-medicine-legit-evidence-women-michigan-wisconsin";
const PAGE_URL = `https://novaweightandwellness.com/blog/${SLUG}`;
const PAGE_TITLE =
  "Is Functional Medicine Legit? An Honest, Evidence-Based Answer for Women in Michigan and Wisconsin";

export const Route = createFileRoute(
  "/blog/functional-medicine-legit-evidence-women-michigan-wisconsin",
)({
  head: () => ({
    links: [{ rel: "canonical", href: PAGE_URL }],
    meta: [
      { title: "Is Functional Medicine Legit? An Honest MI & WI Guide | Novaleo" },
      {
        name: "description",
        content:
          "Is functional medicine legit? An honest, evidence-based answer for women in Michigan and Wisconsin: what holds up, what does not, and how to vet any provider.",
      },
      { property: "og:title", content: PAGE_TITLE },
      {
        property: "og:description",
        content:
          "A candid, fully referenced guide for Michigan and Wisconsin women: the evidence for and against functional medicine, which tests and claims hold up, what it costs, and how to check any practice before you pay.",
      },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      {
        name: "twitter:description",
        content:
          "The evidence for and against functional medicine, graded claim by claim, written for women in Michigan and Wisconsin.",
      },
      { name: "twitter:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
    ],
  }),
  component: BlogComponent,
});

/* ---------- Small presentational helpers (identical markup to the other pillar posts) ---------- */

const P = ({ children }: { children: ReactNode }) => (
  <p className="text-lg leading-relaxed text-foreground/85 mb-5">{children}</p>
);

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">{children}</h2>
);

const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">{children}</h3>
);

const UL = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc pl-6 space-y-2 mb-6 text-lg leading-relaxed text-foreground/85">
    {children}
  </ul>
);

const OL = ({ children }: { children: ReactNode }) => (
  <ol className="list-decimal pl-6 space-y-2 mb-6 text-lg leading-relaxed text-foreground/85">
    {children}
  </ol>
);

const Quote = ({ children }: { children: ReactNode }) => (
  <p className="text-lg leading-relaxed text-foreground/85 mb-5 italic border-l-4 border-secondary/40 pl-6 my-8">
    {children}
  </p>
);

const Callout = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="bg-muted/60 border border-border rounded-xl p-6 my-8">
    <p className="font-display text-xl text-primary mb-3">{title}</p>
    <div className="text-base leading-relaxed text-foreground/80 space-y-3">{children}</div>
  </div>
);

const Fig = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="my-8">
    <img
      src={src}
      alt={alt}
      className="rounded-2xl shadow-lg w-full"
      width={800}
      height={450}
      loading="lazy"
    />
    {caption && (
      <figcaption className="mt-3 text-sm text-foreground/60 text-center">{caption}</figcaption>
    )}
  </figure>
);

const PL = ({ slug, children }: { slug: string; children: ReactNode }) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <Link to={`/blog/${slug}` as any} className="text-secondary font-semibold hover:underline">
    {children}
  </Link>
);

const SL = ({ to, children }: { to: string; children: ReactNode }) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <Link to={to as any} className="text-secondary font-semibold hover:underline">
    {children}
  </Link>
);

const X = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-secondary font-semibold hover:underline"
  >
    {children}
  </a>
);

/** Numbered citation that jumps to the matching entry in the References list. */
const C = ({ n }: { n: number | number[] }) => {
  const list = Array.isArray(n) ? n : [n];
  return (
    <sup className="ml-0.5 text-xs">
      {list.map((num, i) => (
        <span key={num}>
          {i > 0 && ","}
          <a href={`#ref-${num}`} className="text-secondary hover:underline">
            [{num}]
          </a>
        </span>
      ))}
    </sup>
  );
};

const Cta = ({ heading, body }: { heading: string; body: string }) => (
  <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-8 my-12">
    <p className="font-display text-xl text-primary mb-3">{heading}</p>
    <p className="text-foreground/70 mb-5">{body}</p>
    <Link to="/book-free-assessment-call" className="btn-gold">
      Book Free Assessment Call
    </Link>
  </div>
);

const Table = ({ head, rows }: { head: string[]; rows: ReactNode[][] }) => (
  <div className="overflow-x-auto my-8 rounded-2xl border border-border">
    <table className="w-full text-left border-collapse text-base">
      <thead>
        <tr className="bg-primary/5">
          {head.map((h, i) => (
            <th key={i} className="p-4 font-display text-primary border-b border-border">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-foreground/80">
        {rows.map((row, ri) => (
          <tr key={ri} className="border-b border-border last:border-b-0">
            {row.map((cell, ci) => (
              <td key={ci} className={`p-4 align-top ${ci === 0 ? "font-semibold" : ""}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const tocItems = [
  { id: "the-question-you-are-afraid-to-ask", label: "The Question You Are Afraid to Ask" },
  { id: "the-short-answer", label: "The Short Answer, Before the Long One" },
  { id: "what-functional-medicine-actually-is", label: "What Functional Medicine Actually Is" },
  { id: "where-the-term-came-from", label: "Where the Term Came From" },
  { id: "why-skepticism-is-reasonable", label: "Why Skepticism Is Reasonable" },
  { id: "what-the-approach-gets-right", label: "What the Approach Gets Right" },
  {
    id: "what-the-evidence-says-about-the-model",
    label: "What the Evidence Says About the Model Itself",
  },
  { id: "is-it-the-medicine-or-the-time", label: "Is It the Medicine or the Time?" },
  { id: "a-framework-for-grading-every-claim", label: "A Framework for Grading Every Claim" },
  { id: "what-holds-up-lifestyle-medicine", label: "What Holds Up: Lifestyle Medicine" },
  { id: "what-holds-up-basic-testing", label: "What Holds Up: Thoughtful Basic Testing" },
  { id: "what-is-contested-specialty-testing", label: "What Is Contested: Specialty Testing" },
  { id: "what-is-unsupported-or-harmful", label: "What Is Unsupported or Harmful" },
  {
    id: "supplements-where-money-is-wasted",
    label: "Supplements: Where Money Is Wasted and Where Risk Hides",
  },
  { id: "training-credentials-and-regulation", label: "Training, Credentials, and Regulation" },
  { id: "cost-and-insurance", label: "Cost, Insurance, and the Cash-Pay Reality" },
  {
    id: "business-models-and-conflicts-of-interest",
    label: "Business Models and Conflicts of Interest",
  },
  { id: "michigan-and-wisconsin-landscape", label: "The Michigan and Wisconsin Landscape" },
  { id: "when-conventional-care-fails-women", label: "When Conventional Care Fails Women" },
  { id: "when-to-start-with-conventional-care", label: "When to Start With Conventional Care" },
  { id: "condition-by-condition-reality-check", label: "A Condition-by-Condition Reality Check" },
  { id: "seven-questions-to-ask-any-practice", label: "Seven Questions to Ask Any Practice" },
  { id: "green-flags-and-red-flags", label: "Green Flags and Red Flags" },
  { id: "how-we-answer-these-questions", label: "How We Answer These Questions" },
  { id: "four-women-four-outcomes", label: "Four Women, Four Outcomes" },
  { id: "preparing-for-a-first-visit", label: "Preparing for a First Visit With Any Practice" },
  {
    id: "talking-with-your-primary-care-clinician",
    label: "Talking With Your Primary Care Clinician",
  },
  { id: "a-30-day-plan-to-evaluate-a-practice", label: "A 30-Day Plan to Evaluate a Practice" },
  { id: "myths-on-both-sides", label: "Myths on Both Sides" },
  { id: "what-the-research-cannot-tell-us", label: "What the Research Cannot Tell Us" },
  { id: "comprehensive-faq", label: "Comprehensive FAQ" },
  { id: "glossary", label: "Glossary" },
  { id: "closing-katies-note", label: "A Personal Note from Katie" },
  { id: "references", label: "References" },
];

function BlogComponent() {
  return (
    <BlogLayout
      title={PAGE_TITLE}
      author="Kathryn Long, NP-C"
      date="2026-11-16"
      readTime="118 min read"
      heroImg={heroImg}
      heroAlt="Woman in her late 40s at a wooden kitchen table in a Grand Rapids, Michigan bungalow at dusk, laptop open and notebook beside her, reading with a thoughtful and slightly skeptical expression"
      tocItems={tocItems}
      slug={SLUG}
      breadcrumbTitle="Is Functional Medicine Legit?"
      faqSchema={faqSchema}
      relatedPosts={[
        {
          slug: "normal-tsh-hypothyroid-symptoms-michigan-wisconsin",
          title:
            "My TSH Is 'Normal' But I'm Freezing, Losing Hair, and Exhausted: Why Standard Thyroid Tests Fail Women in Their 30s and 40s",
        },
        {
          slug: "food-sensitivity-testing-mrt-michigan-wisconsin-women",
          title:
            "Why 'Healthy' Foods Might Be Making You Sick: The Honest Guide to MRT Food Sensitivity Testing",
        },
        {
          slug: "medical-weight-loss-hormone-therapy-michigan-wisconsin-cities",
          title:
            "Medical Weight Loss and Hormone Therapy: A City-by-City Guide for Michigan and Wisconsin",
        },
      ]}
    >
      {/* Disclaimer */}
      <div className="bg-muted/60 border border-border rounded-xl p-5 mb-10 text-sm text-foreground/70 leading-relaxed">
        <strong className="text-foreground/90">Informational purposes only.</strong> This article is
        written for educational purposes and does not constitute medical advice. It evaluates a
        style of healthcare, not your individual situation, and it cannot replace an examination by
        a licensed clinician who knows your history. Symptoms such as chest pain, shortness of
        breath, sudden weakness, severe headache, unexplained weight loss, bleeding after menopause,
        or a new breast lump need prompt conventional evaluation, not a wellness consultation. The
        composite patient stories are illustrative and are not real individuals. This content was
        written by Kathryn Long, NP-C and is intended for review by a licensed clinician before any
        clinical application, with particular attention to the sections that describe our own
        practice, the evidence summaries, and the guidance on when to seek conventional care.
      </div>

      {/* Section 1 */}
      <section id="the-question-you-are-afraid-to-ask">
        <H2>The Question You Are Afraid to Ask</H2>
        <P>
          It is 10:40 on a Tuesday night in November, and a woman is sitting at her kitchen table in
          Grand Rapids with a laptop open and a cup of tea going cold beside it. The dishwasher is
          running. Upstairs, her teenager is pretending to be asleep. She is forty-nine, she runs
          operations for a regional distribution company, and for the past fourteen months she has
          been doing something she never expected to do, which is spending a meaningful part of her
          income on her own health in a way her insurance card does not recognize.
        </P>
        <P>
          She has just typed a sentence into the search bar that she would not say out loud to the
          people who recommended the practice in the first place:{" "}
          <em>Is functional medicine a scam?</em>
        </P>
        <P>
          Here is how she got here. A little over a year ago she was exhausted in a way that sleep
          did not touch. She was gaining weight around her middle despite walking every morning. Her
          mind felt slower, her periods had started arriving at strange intervals, and her primary
          care provider, a kind person with a fifteen-minute slot and a full waiting room, had run a
          standard panel, told her the results were "normal," and suggested she consider an
          antidepressant. She did not feel depressed. She felt like a person whose body had quietly
          changed the rules. A friend told her about a functional medicine practice. The first visit
          lasted an hour and a half. Someone asked her about her childhood, her sleep, her stress,
          her bowels, her cycle, and what she ate on a Wednesday. For the first time in years she
          felt heard. She signed up for a package.
        </P>
        <P>
          Fourteen months later she is on eleven supplements. She has had a stool test, a saliva
          test, a urine hormone test, and a food sensitivity panel. Her sleep is better, and she is
          not sure why. Her weight has not changed much. Last month her gastroenterologist glanced
          at the stool report her practitioner had ordered and said, politely, that it did not
          change what he would do. She has receipts for nearly two thousand four hundred dollars, a
          pill organizer the size of a shoebox, and a quiet, growing suspicion that she may have
          been sold something. She also has a nagging fear that is harder to say: that if she asks
          the question and the answer is yes, she will have to go back to being the woman who was
          told everything looked normal.
        </P>
        <Fig
          src={receiptsImg}
          alt="A woman's hands sorting paper receipts beside a printed lab report and several amber supplement bottles on a kitchen counter in front of a snowy Michigan backyard"
          caption="The receipts, the bottles, and the lab report. Many women reach this moment without ever being given a straight answer about what worked."
        />
        <P>
          She is a composite of women I have met, and her question deserves a straight answer from
          someone who will not flinch from it. I am a nurse practitioner who practices functional
          medicine, which means I have an obvious conflict of interest in writing this, and I want
          to name that at the start rather than hope you will not notice. A person with a financial
          stake in a field is the least neutral possible narrator of its strengths. So I am going to
          make you four promises, and you are welcome to hold me to each of them as you read.
        </P>
        <OL>
          <li>
            Every factual claim in this article is tied to a source you can open and read yourself,
            and the sources are listed at the end with links. Where a claim comes from a secondary
            source because the primary one was not available, I say so.
          </li>
          <li>
            Where the evidence is thin, I will say it is thin, including for tests and approaches
            that I use in my own work.
          </li>
          <li>
            I will tell you the situations in which you should skip a practice like mine entirely
            and start with conventional medicine.
          </li>
          <li>
            I will give you a way to check any practice, including ours, before you pay it a dollar.
          </li>
        </OL>
        <P>
          The honest answer to her question is not a clean yes or a clean no, and anyone who gives
          you one, in either direction, is selling something. The honest answer has parts. Some of
          what functional medicine does is simply good medicine, delivered with more time than most
          health systems allow. Some of it rests on tests and diagnoses that mainstream
          endocrinology, allergy, and infectious disease organizations have looked at and rejected.
          Some of it has never been properly studied, and the studies that do exist are small,
          early, and mixed. And much of the difference between a trustworthy practice and a
          predatory one has little to do with the label on the door and everything to do with how a
          particular clinician behaves.
        </P>
        <P>
          This guide is written for women living in Michigan and Wisconsin, and that is not a
          marketing flourish. It shapes the answer. The two states license clinicians differently,
          the distances between rural homes and specialists are real, a Wisconsin tick season now
          sets records, and many of you are weighing a telehealth practice precisely because the
          nearest endocrinologist is a three-hour drive and a four-month wait away. Those realities
          change what a good decision looks like, and I will come back to them in detail.
        </P>
        <P>
          If you only have five minutes, read the next section, which gives the verdict first. If
          you have longer, read in order. The structure is deliberate: what the approach is, why
          skepticism is reasonable, what the evidence actually shows, a way to grade any individual
          claim, what holds up and what does not, how to judge cost and credentials, and then a
          practical set of questions and checks you can use this week.
        </P>
      </section>

      {/* Section 2 */}
      <section id="the-short-answer">
        <H2>The Short Answer, Before the Long One</H2>
        <Fig
          src={journalImg}
          alt="A woman in her early 50s reading printed medical journal articles with a yellow highlighter at a long wooden table in a university library in Madison, Wisconsin, with the state capitol visible through tall windows"
          caption="Reading the primary sources is the right instinct. This article points you to each one."
        />
        <P>
          Functional medicine is not a scam, and it is not a proven system of care. It is a label
          for a way of practicing, and the label tells you far less than the behavior of the
          individual clinician behind it. Both halves of that sentence matter, and I will take them
          one at a time.
        </P>
        <P>
          It is not a scam in the sense that its core habits are sound. Taking a long history,
          treating sleep, nutrition, movement, and stress as medicine rather than as afterthoughts,
          looking carefully for treatable contributors to symptoms, and giving a patient enough time
          to explain herself are all things that the evidence supports and that busy systems
          struggle to deliver. A{" "}
          <X href="https://doi.org/10.1016/j.amjmed.2026.08.021">
            commentary published in 2026 in <em>The American Journal of Medicine</em>
          </X>
          , written by academic physicians who are openly critical of functional medicine as a
          model, acknowledges the point directly: many of the interventions used in functional
          medicine, including nutrition, exercise, sleep, and stress management, are evidence based.
          <C n={5} />
        </P>
        <P>
          It is not a proven system in the sense that the evidence for the model as a whole, as a
          distinct way of diagnosing and treating disease, is limited. The same commentary says so
          plainly, and it adds a concern that every woman considering a practice should hold in
          mind, which is that functional medicine's diagnostic strategies, with their reliance on
          nonstandard laboratory testing, may contribute to low-value testing, care cascades, and
          health inequities through substantial out-of-pocket costs.
          <C n={5} /> The best-known study of the model, from the Cleveland Clinic, found an early,
          modest benefit in patient-reported physical health compared with ordinary primary care, a
          benefit that was no longer statistically significant at twelve months, in a design that
          cannot separate the model from the type of patient who chooses it.
          <C n={1} /> A randomized pilot trial from the same program, published in 2026, found no
          significant improvement over usual care for people with type 2 diabetes, in a study too
          small to settle anything.
          <C n={2} />
        </P>
        <Callout title="Key takeaways">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Functional medicine is a way of practicing, not a licensed profession or a medical
              specialty. The{" "}
              <X href="https://www.abms.org/member-boards/specialty-subspecialty-certificates/">
                American Board of Medical Specialties
              </X>{" "}
              does not list it, or integrative medicine, among the 38 specialties and 90
              subspecialties its member boards certify.
              <C n={30} />
            </li>
            <li>
              The strongest parts of the approach are the ones it shares with mainstream medicine:
              lifestyle treatment, careful history-taking, and thoughtful use of standard tests. The
              Diabetes Prevention Program showed that structured lifestyle change cut new type 2
              diabetes by 58 percent, more than metformin did.
              <C n={8} />
            </li>
            <li>
              The weakest parts are specialty tests and diagnoses with poor validation. "Adrenal
              fatigue" has been reviewed and found to have no substantiation as a medical condition.
              <C n={19} /> IgG food panels are advised against by allergy and immunology
              organizations.
              <C n={11} />
              <C n={12} /> Commercial serum zonulin assays were found not to detect actual zonulin.
              <C n={13} />
            </li>
            <li>
              Evidence for the model as a whole is early and mixed: one retrospective cohort with a
              modest early benefit,
              <C n={1} /> one small randomized pilot with no significant difference,
              <C n={2} /> and one randomized coaching trial that found no overall difference between
              groups.
              <C n={3} />
            </li>
            <li>
              Part of any benefit may come from time, attention, and a trusting relationship, which
              are real therapeutic ingredients but not proof that the tests or protocols did the
              work.
              <C n={6} />
            </li>
            <li>
              The most important questions are practical: Is the clinician licensed where you live?
              Are the prices and refund terms clear? Does the practice explain what each test can
              and cannot tell you? Will they send you to a conventional clinician for red-flag
              symptoms? These can be answered before you pay.
            </li>
            <li>
              Some situations call for conventional care first, including chest pain, unexplained
              weight loss, bleeding after menopause, a breast lump, and overdue cancer screening.
            </li>
          </ul>
        </Callout>
        <P>
          So what does a thoughtful woman do with a verdict that is partly yes and partly no? She
          stops asking whether the whole category is legitimate and starts asking about the specific
          claim and the specific clinician in front of her. A better question than "Is functional
          medicine legit?" is "Which of the things this person is proposing have good evidence,
          which have weak evidence, how much will it cost, and what will we do if it does not work?"
          The rest of this guide gives you the tools to answer that, claim by claim.
        </P>
        <P>
          I will also ask you to hold two ideas at once, because they are both true and the internet
          pushes you to choose a side. First, the women who come to practices like mine are very
          often telling the truth when they say they were dismissed, and the system that dismissed
          them deserves real criticism. Second, being failed by a rushed system does not make every
          alternative trustworthy. A supplement company with a slick intake form can fail you too,
          just more expensively. Skepticism and compassion are not opposites. Good care requires
          both.
        </P>
      </section>

      {/* Section 3 */}
      <section id="what-functional-medicine-actually-is">
        <H2>What Functional Medicine Actually Is</H2>
        <Fig
          src={telehealthKalamazooImg}
          alt="A woman in her mid-40s at a home office desk in a Kalamazoo, Michigan bungalow on a video call with a clinician, with a notebook, pen, and houseplant beside her"
          caption="A typical first telehealth visit in a functional medicine practice is long, structured around your history, and rarely rushed."
        />
        <P>
          Before you can judge a thing fairly, you need to describe it fairly, and functional
          medicine suffers from descriptions written either by its fans or by its enemies. Let me
          try to describe it the way a neutral observer who had watched hundreds of visits would.
        </P>
        <H3>The stated philosophy</H3>
        <P>
          Functional medicine presents itself as a systems-oriented, personalized model of care that
          looks for the underlying drivers of chronic symptoms rather than treating each symptom in
          isolation. Its proponents describe disease as a disturbance in biological function, and
          they organize assessment around interacting systems such as the gut, the immune system,
          hormones, and energy metabolism, rather than around the organ-specialty boundaries that
          structure conventional medicine. In the 2019 Cleveland Clinic study that remains the
          best-known test of the model, the authors describe functional medicine as providing "a
          unique operating system to reverse illness, promote health, and optimize function."
          <C n={1} /> The critics who wrote the 2026 commentary describe the same model in more
          cautious terms, as a clinical model built on the premise that chronic disease reflects
          disturbances in biological function, seeking individualized "root causes" through
          systems-based assessment, specialized diagnostic constructs, and nonstandard laboratory
          testing.
          <C n={5} />
        </P>
        <P>
          Notice that both descriptions are accurate. They differ in emphasis, and the difference in
          emphasis is the entire debate. The first stresses the aspiration. The second stresses the
          method and its risks.
        </P>
        <H3>What it looks like in practice</H3>
        <P>
          In practice, a functional medicine episode of care usually has a recognizable shape,
          though quality varies enormously from one clinic to the next.
        </P>
        <UL>
          <li>
            <strong>A long intake.</strong> Often sixty to ninety minutes, covering a detailed
            timeline of when symptoms began and what else was happening in your life, along with
            sleep, nutrition, stress, bowel habits, menstrual history, medications, supplements, and
            family history.
          </li>
          <li>
            <strong>Laboratory testing.</strong> This ranges from standard blood work, such as a
            full thyroid panel, ferritin, vitamin D, a lipid panel, and a hemoglobin A1c, to
            specialty tests that conventional clinicians rarely order, such as comprehensive stool
            analyses, urine or saliva hormone-metabolite panels, food sensitivity panels, and
            organic acid profiles.
          </li>
          <li>
            <strong>A plan built mainly from lifestyle changes.</strong> Dietary changes, sleep
            routines, movement, and stress practices usually form the backbone, and this is the part
            of the model with the strongest evidence behind it.
          </li>
          <li>
            <strong>Supplements and sometimes prescriptions.</strong> Targeted nutrients,
            botanicals, and, in practices with prescribing clinicians, medications such as thyroid
            hormone or hormone therapy.
          </li>
          <li>
            <strong>Follow-up and retesting.</strong> Scheduled check-ins, repeat labs, and
            adjustments.
          </li>
        </UL>
        <P>
          If you read that list slowly, you can already see where the legitimate and the
          questionable parts live. The long intake, the lifestyle plan, and the follow-up are sound.
          Standard labs ordered for a reason are sound. The specialty tests and the open-ended
          supplement list are where scrutiny belongs.
        </P>
        <H3>What it is not</H3>
        <P>Three clarifications prevent a lot of confusion.</P>
        <P>
          First, functional medicine is not a licensed profession. There is no "functional medicine
          license." The people who practice it hold ordinary licenses, such as physician, nurse
          practitioner, physician assistant, chiropractor, naturopathic doctor, dietitian, or health
          coach, and the license determines what they are legally permitted to do. A training
          certificate in functional medicine is an educational credential, not a license and not a
          board certification, and I will unpack that distinction fully in the section on
          credentials.
        </P>
        <P>
          Second, it is not a recognized medical specialty. The American Board of Medical
          Specialties, the umbrella organization for the 24 member boards that certify physician
          specialists in the United States, describes 38 specialties and 90 subspecialties on its
          public list. Neither functional medicine nor integrative medicine appears on it.
          <C n={30} /> That is a fact, not an insult. Many valuable kinds of care, from health
          coaching to physical therapy to nutrition counseling, are not physician specialties. But
          it does mean that there is no standardized, externally audited exam that tells you a
          clinician has mastered functional medicine as a discipline.
        </P>
        <P>
          Third, functional medicine and integrative medicine are not the same thing, even though
          they are constantly confused. The 2026 commentary is explicit about this. It describes
          integrative medicine as an academic discipline grounded in evidence-based medicine,
          whole-person care, and interdisciplinary collaboration that incorporates evidence-informed
          complementary practices within conventional standards of diagnosis and management, and it
          describes functional medicine as a distinct clinical model with its own diagnostic
          constructs.
          <C n={5} /> Whether you agree with that framing or not, it is worth knowing that academic
          integrative programs and commercial functional medicine practices are different animals,
          and that a university clinic offering acupuncture or mind-body medicine is not the same
          thing as a cash-pay clinic running a battery of specialty tests.
        </P>
        <Quote>
          A label tells you where someone trained their attention. It does not tell you whether they
          use evidence, whether they refer out, or whether they are honest about what they do not
          know.
        </Quote>
        <P>
          With the description settled, the next question is where all of this came from, because
          the history explains some of the strengths and most of the controversies.
        </P>
      </section>

      {/* Section 4 */}
      <section id="where-the-term-came-from">
        <H2>Where the Term Came From</H2>
        <Fig
          src={historyImg}
          alt="Tall wooden shelves of old bound medical and science journals in a university library in Ann Arbor, Michigan, with a lone researcher reading at a table in the distance"
          caption="Medical ideas travel from journals to marketing faster than the evidence does, in every direction."
        />
        <P>
          The <X href="https://ifm.org/about/founders">Institute for Functional Medicine</X>, the
          organization that did the most to popularize the term and that trains clinicians in its
          framework, was founded in 1991 by Susan and Jeffrey Bland.
          <C n={31} /> Its founders were drawing on older currents in nutritional biochemistry and
          on a growing frustration, shared by many clinicians and patients, with a healthcare system
          that was superb at emergencies and acute infections and far less capable with the slow,
          tangled chronic conditions that now dominate adult life. The premise that chronic illness
          often reflects accumulated disturbances in nutrition, inflammation, stress physiology, and
          environmental exposure, rather than a single broken part, is not crazy. It resonates with
          real epidemiology. The difficulty is that a plausible premise is not the same as a
          validated method, and the history of medicine is full of beautiful hypotheses that fell
          apart on contact with a good trial.
        </P>
        <P>
          Over the following decades, the term spread far beyond its founders. It was adopted by
          physicians, nurse practitioners, chiropractors, naturopaths, dietitians, and a great many
          coaches. Some of those practitioners kept a close connection to conventional medicine,
          ordered mainly standard tests, and used the framework as a way of organizing a thorough,
          patient-centered conversation. Others built businesses around proprietary supplement
          lines, expensive packages, and tests that no mainstream guideline endorses. Because the
          term is not licensed or protected, all of them can use it. That single fact is why this
          question is so hard to answer in general.
        </P>
        <P>
          A turning point for public perception was the entry of a major academic medical center.
          The Cleveland Clinic established a Center for Functional Medicine, and researchers there
          published the 2019 cohort study that is still the most cited evidence for the model.
          <C n={1} /> That gave the field a credibility it had not previously enjoyed, and it also,
          importantly, gave critics something concrete to examine. We will examine it closely in the
          evidence section, because what the study showed and what it is often said to have shown
          are not quite the same.
        </P>
        <H3>Why the movement found an audience</H3>
        <P>
          It is worth being honest about why people went looking in the first place, because the
          demand did not come from nowhere. Primary care visits are short. A 2021 analysis of more
          than 21 million primary care visits in the United States found that the average exam
          lasted 18 minutes, and that visits scheduled for 10 or 15 minutes were more likely to run
          over their allotted time.
          <C n={7} /> Eighteen minutes is not enough time to understand a woman whose fatigue,
          weight change, sleep disruption, and irregular cycles are tangled together in the years
          around perimenopause. Specialists are siloed. A cardiologist looks at your heart, an
          endocrinologist looks at your thyroid, a gastroenterologist looks at your gut, and nobody
          is paid to look at the whole woman sitting in the room. Into that gap stepped a movement
          that promised to take time, to connect the dots, and to treat the person rather than the
          chart.
        </P>
        <P>
          That promise was, and remains, deeply appealing, and in the hands of a careful clinician
          it can be fulfilled. But a gap in the market is also an opportunity, and not everyone who
          walked into it was careful. Understanding both facts at once, that the need is real and
          that the field has attracted some bad actors, is the starting point for judging any
          individual practice.
        </P>
        <H3>The academic landscape in our two states</H3>
        <P>
          If you live in Michigan or Wisconsin, you have access to something worth knowing about.
          Both states' flagship university health systems run academic integrative health programs,
          housed in departments of family medicine. UW Health in Madison offers integrative health
          and wellness services through clinics staffed by doctors and advanced practitioners who
          specialize in integrative health and family medicine, and it notes plainly that primary
          care services are not available at its integrative health clinics.
          <C n={39} /> Michigan Medicine in Ann Arbor runs an Integrative Family Medicine program
          within the University of Michigan Department of Family Medicine.
          <C n={40} /> I mention these not as endorsements of any particular treatment, but because
          they illustrate the distinction the 2026 commentary draws: an academic integrative program
          operates inside the standards and governance of a university medical center, which is a
          different arrangement from an independent cash-pay practice. Neither is automatically
          better, but they are not interchangeable, and knowing that a university option exists
          gives you a point of comparison when you evaluate any independent practice, including
          mine.
        </P>
        <P>
          With the origins and the audience in view, we can turn to the question at the heart of
          this guide. Why do reasonable, informed people look at functional medicine and feel
          skeptical? The answer is not that they are closed-minded. The answer is that several of
          their objections are correct.
        </P>
      </section>

      {/* Section 5 */}
      <section id="why-skepticism-is-reasonable">
        <H2>Why Skepticism Is Reasonable</H2>
        <Fig
          src={pharmacyAisleImg}
          alt="A woman in her late 40s in a Midwest pharmacy supplement aisle comparing two supplement bottles with a thoughtful, skeptical expression"
          caption="Walking the supplement aisle with a healthy dose of doubt is a good instinct, not a character flaw."
        />
        <P>
          If you are skeptical of functional medicine, I do not want to talk you out of it. I want
          to help you aim it. Skepticism applied evenly to everything is exhausting and not very
          useful. Skepticism applied precisely, to the specific claims that have earned it, is one
          of the most valuable health tools you can own. Here are the objections that I think are
          fair, each one tied to evidence, and each one something you can check.
        </P>
        <H3>The label is unprotected and the training is unstandardized</H3>
        <P>
          Anyone can say they practice functional medicine. There is no state license, no board exam
          administered by an independent specialty board, and no external audit of what a
          practitioner knows. The ABMS, which certifies physician specialists through its 24 member
          boards, does not list functional medicine or integrative medicine among its 38 specialties
          and 90 subspecialties.
          <C n={30} /> A weekend course, a certificate program, and a decade of rigorous training
          can all produce a business card with the same words on it. When you meet a practitioner,
          the thing to evaluate is the underlying license and training, not the phrase.
        </P>
        <H3>Some of the tests have not earned the confidence placed in them</H3>
        <P>
          Functional medicine is often distinguished from conventional care by the tests it orders,
          and several of those tests have been examined and found wanting. Testing for food-specific
          IgG antibodies is a clear example. A task force of the European Academy of Allergy and
          Clinical Immunology reviewed the question and concluded in 2008 that IgG4 testing against
          foods is not recommended as a diagnostic tool, noting that these antibodies indicate
          repeated exposure to food proteins rather than a factor that induces hypersensitivity.
          <C n={11} /> The American Academy of Allergy, Asthma and Immunology continues to advise
          against IgG food testing and describes it on its patient page as a myth, stating that the
          test has never been scientifically proven to do what it claims.
          <C n={12} /> A widely marketed blood test for "zonulin," promoted as a marker of leaky
          gut, was examined in a 2019 study that found the commercial assays were not detecting
          actual zonulin at all, but other proteins, with the authors advising caution in using the
          measurement.
          <C n={13} /> Even a test as mainstream as fasting insulin has a measurement problem: when
          the American Diabetes Association convened a workgroup to compare twelve commercial
          insulin methods from nine manufacturers, the variation between assays ranged from 12 to 66
          percent, with a median of 24 percent.
          <C n={14} /> I will return to each of these in the testing sections, because the details
          matter, and because some of these limitations apply to tests I have used myself.
        </P>
        <H3>Some of the diagnoses are not real</H3>
        <P>
          The most striking example is "adrenal fatigue," a term still widely used in wellness
          circles to describe exhaustion supposedly caused by overworked adrenal glands. A 2016
          systematic review screened 3,470 articles, identified 58 studies that met its criteria,
          and concluded that there is no substantiation that adrenal fatigue is an actual medical
          condition, calling it a myth.
          <C n={19} /> The{" "}
          <X href="https://www.endocrine.org/patient-engagement/endocrine-library/adrenal-fatigue">
            Endocrine Society's patient education page
          </X>{" "}
          says the same thing in plain language: no scientific proof exists to support adrenal
          fatigue as a true medical condition, and the concern is that if you are told you have it,
          the real cause of your symptoms may not be found and treated.
          <C n={20} /> This does not mean your exhaustion is imaginary, and it does not mean your
          adrenal glands cannot malfunction. Real adrenal disease, such as primary adrenal
          insufficiency, is well characterized and has a professional society guideline for its
          diagnosis and treatment.
          <C n={21} /> It means that a made-up diagnosis can stand in the way of finding the real
          one.
        </P>
        <H3>The cost is borne by you, and the testing can cascade</H3>
        <P>
          The 2026 commentary points to something that every woman on a budget should hear:
          nonstandard testing can lead to low-value testing, care cascades, and inequity through
          substantial out-of-pocket costs.
          <C n={5} /> A care cascade is what happens when one questionable result leads to another
          test, then a treatment, then a monitoring test for the treatment, and so on, each step
          reasonable on its own and the whole sequence expensive and sometimes harmful. Most
          functional medicine is not covered by insurance, so the cost lands directly on the
          patient, and the person least able to afford a wrong turn is the person most likely to be
          sold a long one.
        </P>
        <H3>Supplements are not regulated like drugs</H3>
        <P>
          Many functional medicine plans include supplements, and the regulatory picture surprises
          most people. The <X href="https://www.fda.gov/food/dietary-supplements">FDA explains</X>{" "}
          that dietary supplement firms are responsible for evaluating the safety and labeling of
          their products before marketing, and that the agency can act against an adulterated or
          misbranded product only after it reaches the market.
          <C n={27} /> That is a very different system from the one that governs prescription drugs.
          The consequences are not hypothetical. A study using national surveillance data estimated
          about 23,000 emergency department visits and about 2,150 hospitalizations per year in the
          United States attributable to supplement-related adverse events, with weight-loss and
          energy products especially implicated.
          <C n={25} /> And a research symposium sponsored by a liver disease society and the
          National Institutes of Health reported that herbal and dietary supplements now account for
          about 20 percent of cases of drug-induced liver injury in the United States, with green
          tea extract and multi-ingredient nutritional products among the major culprits.
          <C n={26} /> None of that means supplements are bad. It means that a long supplement list
          is a risk that should be justified, not a default.
        </P>
        <H3>The evidence for the model is early</H3>
        <P>
          As the next sections will show in detail, the studies of functional medicine as a whole
          are few, small, and mixed. That is not a reason to dismiss the field, but it is a reason
          to be skeptical of anyone who tells you the model is proven.
        </P>
        <H3>The marketing can be fear-based</H3>
        <P>
          There is a recognizable style in wellness marketing that uses fear and certainty to sell:
          "everyone has leaky gut and does not know it," "this one toxin is destroying your health,"
          "your doctors will never tell you this." These claims travel because fear and certainty
          are more attention-grabbing than nuance. They produce anxious patients who buy products to
          relieve anxiety that the marketing itself created. When you see that style, whether on a
          website, in a podcast, or in a consultation, treat it as a signal to slow down.
        </P>
        <H3>"Root cause" can overpromise</H3>
        <P>
          Finally, a subtler objection. The phrase "root cause" implies that most chronic conditions
          have a single fixable origin that conventional medicine overlooked. Sometimes that is
          true. A woman with fatigue may truly have untreated iron deficiency or a thyroid problem
          that a first look missed. But many chronic conditions are the product of genetics, age,
          environment, hormones, and chance, and no amount of testing will find a single root. A
          model that promises a root cause can leave patients feeling that when they do not recover
          fully, it must be their fault, because they did not follow the protocol well enough. That
          is a harm of its own, and a good clinician guards against it.
        </P>
        <Callout title="The pattern behind the fair objections">
          <p>
            Notice that each of these objections is about a specific behavior, not the entire field:
            unvalidated tests, invented diagnoses, unjustified cost, unnecessary supplements, fear
            marketing, overpromising. A practice can avoid every one of them. A practice can also
            commit all of them. That is why the rest of this guide gives you ways to evaluate the
            practice rather than the label.
          </p>
        </Callout>
      </section>

      {/* Section 6 */}
      <section id="what-the-approach-gets-right">
        <H2>What the Approach Gets Right</H2>
        <Fig
          src={unhurriedImg}
          alt="A nurse practitioner in her 50s and a patient in her 40s sitting across a small round table in a bright office in Marquette, Michigan, in an unhurried conversation with snowy pine trees visible through the window"
          caption="Time to listen is not a luxury. It is a clinical tool that many systems do not have the time to use."
        />
        <P>
          Fairness requires that I give the other side the same rigor, because there are real
          strengths here, and a woman who dismisses them would be making her own error.
        </P>
        <H3>Time</H3>
        <P>
          The single most defensible feature of a good functional medicine practice is that the
          clinician has time. The average primary care exam is 18 minutes, and in that window a
          clinician must review the chart, address the complaint, document, order tests, and manage
          whatever else the patient raised.
          <C n={7} /> A woman in the years around perimenopause, who may have five overlapping
          symptoms and a decade of changes to describe, is poorly served by that structure through
          no fault of the clinician. A ninety-minute first visit is not magic, but it changes what
          can be discovered. Patterns across sleep, cycle, mood, digestion, and energy become
          visible only when someone has time to ask about all of them.
        </P>
        <H3>Whole-person history</H3>
        <P>
          Functional medicine intake forms are long, and while the length can feel excessive, it
          reflects a real clinical insight. Symptoms in midlife women rarely live in a single organ
          system. Hot flashes interrupt sleep, which worsens mood and appetite regulation, which
          affects weight, which affects blood sugar, which affects energy. Conventional care,
          organized by specialty, is structurally poor at tracing those loops. A clinician who asks
          about all of it is doing something valuable even before ordering a single test.
        </P>
        <H3>Lifestyle treated as treatment</H3>
        <P>
          Conventional medicine pays lip service to lifestyle and then writes a prescription,
          because the prescription pad is what the reimbursement system supports. Functional
          medicine puts food, movement, sleep, and stress at the center of the plan. The commentary
          that criticizes the model still concedes that nutrition, exercise, sleep, and stress
          management are evidence based.
          <C n={5} /> The central trial of lifestyle treatment, the Diabetes Prevention Program,
          enrolled 3,234 adults at high risk and found that a structured lifestyle program reduced
          the incidence of type 2 diabetes by 58 percent, compared with 31 percent for metformin,
          with lifestyle significantly more effective than the drug.
          <C n={8} /> If a practice builds its plan around that kind of evidence-based behavior
          change, it is standing on solid ground.
        </P>
        <H3>Willingness to question a single number</H3>
        <P>
          Good functional medicine clinicians are right to treat a single reference range with
          humility. Reference ranges are statistical constructs, and a result that is "normal" in a
          population can still be wrong for the person in front of you. Thyroid care illustrates
          this. The American Thyroid Association's 2014 guideline concluded that levothyroxine
          should remain the standard of care and that there is no consistently strong evidence that
          alternatives are superior, but it also noted that some patients feel unwell on
          levothyroxine alone and called for better biomarkers of euthyroidism to supplement the
          thyrotropin measurement.
          <C n={16} /> That is a measured statement from a mainstream society that there is more to
          learn beyond a single TSH value. A clinician who takes that gap seriously, without
          overreaching, is doing what good practice requires. I wrote about this in detail in our
          guide to{" "}
          <PL slug="normal-tsh-hypothyroid-symptoms-michigan-wisconsin">
            normal TSH and hypothyroid symptoms
          </PL>
          .
        </P>
        <H3>Attention to the midlife transition</H3>
        <P>
          For women in their late thirties through their fifties, there is a particularly strong
          case for a clinician who takes the hormonal transition seriously. Perimenopause is one of
          the most under-addressed phases in conventional care, and women often arrive having been
          told that sleep disruption, brain fog, and mood change are stress, aging, or depression. A
          thoughtful clinician who recognizes the pattern, tests appropriately, and discusses
          options with candor can change a woman's life. We explore this in depth in our guides to{" "}
          <PL slug="perimenopause-in-your-30s-michigan-wisconsin">
            perimenopause in your thirties
          </PL>
          ,{" "}
          <PL slug="perimenopause-brain-fog-memory-michigan-wisconsin">perimenopausal brain fog</PL>
          , and{" "}
          <PL slug="hot-flashes-night-sweats-women-michigan-wisconsin">
            hot flashes and night sweats
          </PL>
          .
        </P>
        <H3>An encouraging, but early, signal in women</H3>
        <P>
          One small study is worth noting because it was conducted in the group this guide is
          written for. A 28-week pilot in middle-aged women evaluated a functional medicine approach
          to stress, fatigue, and digestive symptoms and reported significant improvements in many
          stress, fatigue, and quality-of-life measures.
          <C n={4} /> I want to be careful with it. It was a pilot, it was not a randomized trial,
          and improvements in an uncontrolled group can reflect time, attention, and regression to
          the mean as easily as the specific protocol. It is encouraging, not conclusive. But it is
          the kind of study that justifies a better one.
        </P>
        <P>
          When you add these strengths together, the case for the approach is not that it has proven
          a new theory of disease. The case is that it delivers time, attention, and
          lifestyle-centered care to people who are not getting them elsewhere, and that this
          combination, delivered honestly, helps many women feel better. The next section asks
          whether the research supports going further than that.
        </P>
      </section>

      {/* Section 7 */}
      <section id="what-the-evidence-says-about-the-model">
        <H2>What the Evidence Says About the Model Itself</H2>
        <Fig
          src={researchChartsImg}
          alt="A laptop showing abstract colorful bar charts beside an open clinical journal and a coffee cup on a desk in a hospital research office"
          caption="Reading a study well means looking past the headline to the design, the comparison group, and the follow-up."
        />
        <P>
          Now to the question you most want answered: has anyone actually tested whether functional
          medicine, as a whole, works better than ordinary care? Yes, a few groups have tried. The
          results are worth reading slowly, because they are neither the triumph its advocates
          describe nor the failure its critics imply.
        </P>
        <H3>The Cleveland Clinic cohort study, 2019</H3>
        <P>
          The most cited study is a{" "}
          <X href="https://doi.org/10.1001/jamanetworkopen.2019.14017">
            retrospective cohort published in <em>JAMA Network Open</em> in 2019
          </X>
          , by Beidelschies and colleagues at the Cleveland Clinic.
          <C n={1} /> The researchers compared patients treated at the Cleveland Clinic Center for
          Functional Medicine with patients treated at Cleveland Clinic family health centers
          between April 2015 and March 2017. Across both groups there were 7,252 patients: 1,595 at
          the functional medicine center and 5,657 at family health centers. About two-thirds, 65.9
          percent, were women, and the average age was 54.
        </P>
        <P>
          The main outcome was the change in a patient-reported measure called PROMIS Global
          Physical Health, scored as a T-score with a mean of 50, at six months. Among 398 pairs of
          patients matched on a statistical score, the functional medicine group improved by an
          average of 1.59 points and the family health group by 0.33 points, a difference that was
          statistically significant (P = .004).
          <C n={1} /> At twelve months, the functional medicine patients showed improvement similar
          to that seen at six months, but the comparison with the family health group was not
          significant. In a subgroup with data at both six and twelve months, the difference favored
          functional medicine again, 2.61 versus 0.25 points, in just 91 matched pairs.
          <C n={1} />
        </P>
        <Fig
          src={clevelandInfographic}
          alt="Infographic summarizing the 2019 Cleveland Clinic functional medicine cohort study, showing the six-month change in PROMIS Global Physical Health of 1.59 points for the functional medicine center versus 0.33 for family health centers, with notes on the design and limits"
          caption="The best-known study of the functional medicine model: a modest early difference, with important limits."
        />
        <H3>How to read those numbers</H3>
        <P>
          Three things matter when you interpret this study, and the authors themselves acknowledge
          the central one, writing that prospective studies are warranted to confirm the findings.
          <C n={1} />
        </P>
        <P>
          <strong>The size of the difference is small.</strong> T-scores are standardized so that
          ten points represent one standard deviation, which means a difference of about 1.3 points
          is a fraction of a standard deviation. It is statistically detectable in a large sample,
          and it may be real, but it is not a dramatic transformation.
        </P>
        <P>
          <strong>The durable comparison was not significant.</strong> The twelve-month comparison,
          which asks whether the benefit lasted, did not reach significance. The subgroup analysis
          that did reach significance was restricted to patients who happened to have data at both
          time points, which is a selected group.
        </P>
        <P>
          <strong>The design cannot separate the model from the patient.</strong> This was not a
          randomized trial. Patients who seek out a specialty center differ from patients who walk
          into a family health center, in motivation, in what they believe, in the nature of their
          problems, and in ways no statistical match fully captures. A retrospective cohort can show
          an association. It cannot prove that the care caused the change.
        </P>
        <P>
          None of this makes the study worthless. It makes it a reasonable early signal that
          deserves follow-up, and it is a good example of why "a study showed" is the beginning of a
          question rather than the end of one.
        </P>
        <H3>The first randomized pilot, 2026</H3>
        <P>
          The follow-up evidence from the same program is a randomized trial, and it is sobering. In
          a 24-month, open-label randomized pilot published in 2026, adults with type 2 diabetes
          were assigned either to a functional medicine approach, which combined intensive lifestyle
          modification and tailored dietary supplements with usual care, or to conventional
          endocrinology management alone.
          <C n={2} /> Of 107 people screened, 34 were randomized to functional medicine and 37 to
          usual care, and only 47 completed the study. The primary endpoint, a combination of
          insulin discontinuation without a rise in hemoglobin A1c, or an A1c below 7 percent at
          twelve months, was reached by 15.8 percent of the functional medicine group and 11.1
          percent of the usual care group, a difference that was not statistically significant (P =
          0.68). The secondary measures, including A1c change, insulin dose, hypoglycemia, weight,
          and quality of life, also did not differ significantly between arms. The authors concluded
          that adding the functional medicine approach did not significantly improve glycemic,
          metabolic, or quality-of-life outcomes compared with usual care in people with type 2
          diabetes.
          <C n={2} />
        </P>
        <P>
          A caution is essential here, and I want to apply it to both sides. This was a small pilot,
          with a high dropout rate, in an older population with established diabetes, a very
          different group from the midlife women this guide addresses. A null result in a small
          pilot does not prove the approach fails. But it also means that the one randomized test of
          the model against usual care in a chronic disease did not find an advantage, and an honest
          summary has to include that.
        </P>
        <H3>A randomized coaching trial, 2024</H3>
        <P>
          A third study tested a narrower question. In a 10-week randomized trial, 125 healthcare
          professionals followed an elimination diet either with five sessions of functional
          medicine health coaching or on their own.
          <C n={3} /> Both groups improved on patient-reported health measures, and in the primary
          analysis there was no difference between groups. The authors found that among participants
          who began with more symptoms, the coaching group showed larger improvements in mental
          health and symptom scores. That subgroup finding is interesting, but a subgroup finding in
          a trial whose main comparison was null is a hypothesis for the next study, not a
          conclusion. What the trial does show is how much people improved on a self-guided
          elimination diet alone, which is a useful reminder that the active ingredient may be the
          behavior, not the supervision.
        </P>
        <H3>Cost and claims studies</H3>
        <P>
          A few observational studies have examined health plan costs among people receiving
          functional medicine care, such as a 2024 analysis of pharmacy claims among school district
          employees with musculoskeletal disorders.
          <C n={42} /> Observational cost comparisons are vulnerable to the same selection problems
          as the Cleveland cohort and are better treated as hypothesis-generating than as proof of
          savings.
        </P>
        <Table
          head={["Study", "Design", "Who was studied", "What it found", "Main limit"]}
          rows={[
            [
              "Beidelschies, 2019",
              "Retrospective cohort, propensity matched",
              "7,252 adults, 65.9% women, mean age 54",
              "Six-month physical health score improved 1.59 vs 0.33 points (P = .004)",
              "Not randomized; 12-month comparison not significant",
            ],
            [
              "Eldib, 2026",
              "Randomized, open-label pilot, 24 months",
              "71 randomized adults with type 2 diabetes; 47 completed",
              "No significant difference in glycemic, metabolic, or quality-of-life outcomes",
              "Small, high dropout, older population",
            ],
            [
              "D'Adamo, 2024",
              "Randomized coaching trial, 10 weeks",
              "125 healthcare professionals",
              "No between-group difference in the primary analysis; both arms improved",
              "Short; relatively healthy sample",
            ],
            [
              "Cutshall, 2016",
              "28-week pilot",
              "Middle-aged women with stress, fatigue, digestive complaints",
              "Improvements in many stress, fatigue, and quality-of-life measures",
              "Pilot, no randomized comparison group described",
            ],
          ]}
        />
        <H3>The honest summary</H3>
        <P>
          Putting the studies together, the evidence so far shows: a modest, early association with
          better patient-reported physical health in one large observational study, a null result in
          one small randomized pilot, a null primary result in one short randomized coaching trial,
          and encouraging but uncontrolled results in a small pilot in women. The studies I reviewed
          measure patient-reported quality of life, glycemic control, and symptom scores. I am not
          aware of a trial in this literature that measures hard outcomes such as heart attacks,
          fractures, or mortality, and if one exists I would welcome it. That is not the profile of
          a proven model. It is also not the profile of a debunked one. It is the profile of a field
          that has produced hypotheses and has not yet produced the large, well-designed, adequately
          powered trials that would settle them.
        </P>
        <P>
          In the 2026 commentary, the authors argue that new clinical frameworks should meet the
          same standards of evidence and clinical validity expected throughout medicine.
          <C n={5} /> I agree with them, and I think most thoughtful functional medicine clinicians
          do too. A field that believes in its approach should want it tested.
        </P>
      </section>

      {/* Section 8 */}
      <section id="is-it-the-medicine-or-the-time">
        <H2>Is It the Medicine or the Time?</H2>
        <Fig
          src={rushedRoomImg}
          alt="An empty primary care exam room with an exam table, a computer on a rolling stand, and a wall clock prominently in frame showing about twelve minutes past the hour"
          caption="The clock is one of the most powerful and least discussed factors in why women feel unheard."
        />
        <P>
          If many women feel better under functional medicine care, why? That question is more
          interesting than it sounds, and the honest answer is that we usually cannot tell which
          element is responsible. A woman who starts a practice like mine gets, all at once, a long
          conversation, a new set of food and sleep habits, a few supplements, some lab results that
          explain things, a sense of being taken seriously, and a plan. Any one of those could be
          doing the work.
        </P>
        <H3>What a placebo experiment teaches</H3>
        <P>
          One of the clearest experiments on this topic was not about functional medicine at all. In
          a{" "}
          <X href="https://doi.org/10.1136/bmj.39524.439618.25">
            2008 randomized trial published in the <em>BMJ</em>
          </X>
          , researchers studied 262 adults, 76 percent of them women, who had irritable bowel
          syndrome.
          <C n={6} /> For three weeks, patients were assigned to a waiting list, to sham acupuncture
          delivered in a minimal way, or to the same sham acupuncture delivered by a practitioner
          who deliberately offered warmth, attention, and confidence. The proportion of patients
          reporting adequate relief of symptoms rose in a stepwise pattern: 28 percent on the
          waiting list, 44 percent in the limited sham group, and 62 percent in the group whose
          practitioner relationship was augmented. The authors concluded that nonspecific effects
          can produce statistically and clinically significant outcomes, and that the
          patient-practitioner relationship was the most robust component.
          <C n={6} />
        </P>
        <P>
          Read that carefully, because it cuts in two directions. It means that warmth, attention,
          and confidence are not trivial. They are powerful, measurable contributors to symptom
          relief, and a clinician who provides them is delivering something real. It also means that
          a woman who feels better after an hour and a half with a caring practitioner cannot
          conclude from that alone that the stool test, the supplement, or the protocol is what
          helped. The relationship, the validation, and the sense of control may have done a large
          share of the work.
        </P>
        <H3>Why this matters for your decisions</H3>
        <P>
          None of this is a criticism of women who feel better. Feeling better is the point, and the
          therapeutic relationship is a legitimate part of medicine. But it has a practical
          consequence for how you spend your money. If the time and attention are a main active
          ingredient, then you should be able to buy them without also buying an expensive set of
          tests and a large supplement stack whose value you cannot separate from the relationship.
        </P>
        <P>
          That is one reason I think the entry price of a practice matters. A thirty-minute paid
          session at $47 or a sixty-minute intake at $97 buys you time, a thorough history, and a
          plan for next steps at modest cost, and it lets you judge the clinician and the approach
          before committing to a six-month program. We publish those prices, along with the $454 lab
          panel and the $3,995 six-month program, on our{" "}
          <SL to="/functional-medicine-cost">pricing page</SL>, and you can compare the options
          without a sales conversation. I raise our own numbers here not as an advertisement but
          because transparency about price is itself one of the most reliable signals of an honest
          practice, a point I return to later.
        </P>
        <H3>A decision rule for unbundling</H3>
        <P>
          Here is a practical rule you can apply to any practice, including mine. After the first
          two or three months of care, take each component of your plan and ask three questions
          about it.
        </P>
        <OL>
          <li>
            <strong>What is this for?</strong> Can the clinician name the specific symptom, result,
            or goal that it targets?
          </li>
          <li>
            <strong>How will we know if it is working?</strong> Is there a measurable change, such
            as a lab value, a symptom score, a sleep log, or a functional goal, and by when?
          </li>
          <li>
            <strong>What happens if it is not working?</strong> Is the plan to stop it, or to add
            something else?
          </li>
        </OL>
        <P>
          Keep the components that have a clear purpose, a way to measure the result, and an exit
          plan. Question the components that fail those tests. If the answer to "what is this for"
          is a general phrase like "to support your gut" or "to balance your hormones," that is a
          prompt to ask for specifics. A good clinician will welcome the questions. The relationship
          that Kaptchuk and colleagues identified as so powerful is strengthened, not weakened, by a
          patient who asks them.
        </P>
      </section>

      {/* Section 9 */}
      <section id="a-framework-for-grading-every-claim">
        <H2>A Framework for Grading Every Claim</H2>
        <Fig
          src={tiersInfographic}
          alt="Infographic with four tiers for grading functional medicine claims: Tier 1 Established, Tier 2 Supported with limits, Tier 3 Contested, and Tier 4 Unsupported or harmful, each with examples"
          caption="Separate the philosophy from the individual tools, then grade each tool on its own evidence."
        />
        <P>
          The central mistake in most arguments about functional medicine is treating it as one
          thing that is either true or false. It is a bundle. Inside the bundle are practices with
          excellent evidence, practices with partial evidence, practices with weak or disputed
          evidence, and a few practices the evidence argues against. If you accept or reject the
          bundle as a whole, you will be wrong about most of its contents. A more useful move is to
          unbundle it and grade each part on its own merits.
        </P>
        <P>
          Here is the framework I use, and that I would encourage you to use with any practitioner,
          including me. It has four tiers.
        </P>
        <Table
          head={["Tier", "What it means", "Examples covered in this guide", "How to act"]}
          rows={[
            [
              "Tier 1: Established",
              "Backed by guidelines from major professional bodies or large, well-designed trials",
              <>
                Structured lifestyle change to prevent type 2 diabetes
                <C n={8} />; CBT-I as first-line treatment for chronic insomnia
                <C n={10} />; TSH-based thyroid evaluation with levothyroxine as standard treatment
                <C n={16} />
              </>,
              "Reasonable to expect from any competent clinician. Use them.",
            ],
            [
              "Tier 2: Supported, with limits",
              "Real evidence, narrower or more qualified than popular claims suggest",
              <>
                Mediterranean-style eating, whose major trial was retracted and republished in 2018
                <C n={9} />; vitamin D supplementation for defined groups rather than everyone
                <C n={17} />
              </>,
              "Use with a clear goal and an honest understanding of the limits.",
            ],
            [
              "Tier 3: Contested",
              "Weak, disputed, or poorly standardized validation",
              <>
                Food-specific IgG panels
                <C n={[11, 12]} />; serum zonulin assays
                <C n={13} />; fasting insulin interpretation across assays
                <C n={[14, 15]} />; saliva cortisol patterns offered as proof of "adrenal" problems
                <C n={19} />
              </>,
              "Treat results as, at most, one clue. Never as a diagnosis or a reason for an expensive protocol.",
            ],
            [
              "Tier 4: Unsupported or harmful",
              "The evidence points against it, or the practice carries meaningful risk without benefit",
              <>
                "Adrenal fatigue" as a diagnosis
                <C n={[19, 20]} />; additional antibiotics for lingering nonspecific symptoms after
                standard Lyme treatment
                <C n={22} />; unsupervised multi-ingredient supplement stacks
                <C n={[25, 26]} />
              </>,
              "Decline, and look for a different practitioner if this is central to the plan.",
            ],
          ]}
        />
        <P>
          The bracketed numbers in the table point to the references at the end of this guide. If
          you do nothing else with this section, notice that the tiers do not map onto
          "conventional" and "functional." Tier 1 contains items that functional medicine clinicians
          use every day, such as lifestyle treatment and standard thyroid testing, and Tier 3 and
          Tier 4 contain items that some conventional clinicians also use, such as unnecessary
          vitamin D screening in healthy adults or antibiotics for vague symptoms.
        </P>
        <H3>Five questions to ask about any claim</H3>
        <P>
          To place a claim into a tier, you do not need a medical degree. You need five questions,
          which a good clinician should be glad to answer.
        </P>
        <OL>
          <li>
            <strong>What exactly is this supposed to do for me?</strong> A specific symptom or goal
            is a good answer. "Support," "balance," and "detox" are not.
          </li>
          <li>
            <strong>How do we know it works?</strong> Is there a randomized trial, a guideline, or
            at least a plausible mechanism with human data? Or is the support mostly a company's
            brochure and patient testimonials?
          </li>
          <li>
            <strong>Was it tested in people like me?</strong> A result in elderly men with diabetes
            does not automatically apply to a forty-eight-year-old woman in perimenopause, and the
            reverse is also true.
          </li>
          <li>
            <strong>Who profits if I say yes?</strong> This is not an accusation. It is a normal
            question about incentives that every informed consumer should ask of every seller of
            anything.
          </li>
          <li>
            <strong>What does it cost, in dollars and in risk, if it turns out not to work?</strong>{" "}
            Cheap, low-risk interventions deserve more benefit of the doubt than expensive or risky
            ones.
          </li>
        </OL>
        <P>
          If a practitioner cannot answer these questions in a way that satisfies you, you have
          learned something important about how that practice thinks, regardless of the tier. The
          following sections apply the framework to specific areas, starting with what holds up.
        </P>
      </section>

      {/* Section 10 */}
      <section id="what-holds-up-lifestyle-medicine">
        <H2>What Holds Up: Lifestyle Medicine</H2>
        <Fig
          src={strengthImg}
          alt="A woman in her late 40s performing a goblet squat with a kettlebell in a basement home gym in Wisconsin with morning light from a small window"
          caption="Behavior change is the best-supported tool in the entire functional medicine toolbox."
        />
        <P>
          If I had to place one bet on which part of functional medicine is most reliably
          legitimate, it would be lifestyle treatment. The reason is not that functional medicine
          invented it. It is that lifestyle treatment has the strongest evidence of anything in the
          toolbox, and a practice that takes the time to deliver it well is delivering something
          proven.
        </P>
        <H3>The landmark evidence: preventing diabetes</H3>
        <P>
          The <X href="https://doi.org/10.1056/NEJMoa012512">Diabetes Prevention Program</X>,
          published in 2002 in the <em>New England Journal of Medicine</em>, is the cleanest
          demonstration that structured lifestyle change can rival or beat a drug. Researchers
          randomly assigned 3,234 adults with elevated blood sugar to placebo, to metformin, or to a
          lifestyle program with goals of at least 7 percent weight loss and at least 150 minutes of
          physical activity per week. The participants had an average age of 51 and an average body
          mass index of 34, and 68 percent were women. After an average follow-up of 2.8 years, the
          lifestyle intervention had reduced the incidence of diabetes by 58 percent and metformin
          by 31 percent, and the lifestyle program was significantly more effective than metformin.
          <C n={8} /> To prevent one case of diabetes over three years, about seven people needed to
          join the lifestyle program, compared with about fourteen who needed to take metformin.
          <C n={8} />
        </P>
        <Fig
          src={dppInfographic}
          alt="Bar chart infographic of the Diabetes Prevention Program showing a 58 percent reduction in new type 2 diabetes with a lifestyle program versus 31 percent with metformin, among 3,234 adults, 68 percent women"
          caption="Lifestyle change beat metformin in the largest trial of diabetes prevention."
        />
        <P>
          I place this result at the center of the case for the lifestyle-first approach for a
          simple reason: it is a randomized trial, it is large, the effect is big, and the
          population included mostly women in midlife. When a practice tells you that food,
          movement, and weight management are medicine, this is the evidence they should be pointing
          to. It is also an honest reminder that these programs worked because they were structured,
          supervised, and sustained, not because someone handed out a pamphlet.
        </P>
        <H3>A lesson in humility from the Mediterranean diet</H3>
        <P>
          The Mediterranean diet is another cornerstone of lifestyle medicine, and the story of its
          flagship trial is a useful lesson in how science corrects itself. The PREDIMED trial,
          published in the <em>New England Journal of Medicine</em> in 2013, reported that a
          Mediterranean diet supplemented with extra-virgin olive oil or nuts reduced cardiovascular
          events. In 2018, the journal retracted and republished the paper after investigators found
          irregularities in how some participants had been randomized, and the republished analysis,
          which accounted for the problem, was issued along with the retraction notice.
          <C n={9} /> I include this not to undermine the diet, which remains well supported by a
          wide range of other evidence, but to model the right attitude. A good study can have
          flaws, a flaw can be found and addressed, and the honest response is to say so openly.
          When a practitioner presents any single trial as final, they are showing you they have not
          read the history of their own field.
        </P>
        <H3>Sleep as a treatable condition</H3>
        <P>
          Sleep is the area where lifestyle treatment is most clearly stronger than the prescription
          pad. The{" "}
          <X href="https://doi.org/10.7326/M15-2175">
            American College of Physicians issued a guideline in 2016
          </X>{" "}
          recommending that all adults with chronic insomnia receive cognitive behavioral therapy
          for insomnia, known as CBT-I, as the initial treatment, a strong recommendation based on
          moderate-quality evidence.
          <C n={10} /> Medications were relegated to a shared decision-making discussion for people
          in whom CBT-I alone was unsuccessful.
          <C n={10} /> That is a mainstream professional society telling every clinician to start
          with a behavioral therapy before reaching for a sleeping pill, which is exactly what the
          functional medicine instinct about sleep would predict. A woman in perimenopause who
          cannot sleep is sometimes offered a sleeping pill first, when the better first step is a
          structured behavioral program, often combined with evaluation of hormonal and other
          contributors. We explore the hormonal side in our guide to{" "}
          <PL slug="hormonal-sleep-anxiety-women-michigan-wisconsin">hormonal sleep and anxiety</PL>
          .
        </P>
        <Fig
          src={sleepImg}
          alt="A woman asleep peacefully in a cozy lake cottage bedroom under a quilt with a book and glass of water on the nightstand in soft early light"
          caption="CBT-I is the first-line treatment for chronic insomnia according to the American College of Physicians."
        />
        <H3>Food, movement, and the Michigan and Wisconsin calendar</H3>
        <P>
          Lifestyle advice only works if it fits the life you actually live, and in the Upper
          Midwest that includes long winters. A walking plan that assumes sunny mornings will fail
          in January. A produce-heavy plan that ignores what is available between November and April
          will fail too. The practical version of lifestyle medicine for our region leans on frozen
          vegetables, winter squash, root vegetables, cold-water fish, canned beans, a strength
          routine that can be done in a basement or a spare bedroom, and indoor movement that does
          not depend on weather. Michigan and Wisconsin also offer a lot to work with in the other
          seasons: farmers markets that stretch from spring to late autumn, community-supported
          agriculture shares, and trails and shorelines that make daily walking easier to sustain.
        </P>
        <Fig
          src={marketImg}
          alt="A woman in her 50s buying fresh squash, kale, and apples from a farmers market stall in Ann Arbor, Michigan on a sunny autumn morning"
          caption="Seasonal food in the Great Lakes states, from farmers markets to winter storage vegetables."
        />
        <Fig
          src={mealPrepImg}
          alt="A woman meal prepping colorful balanced lunches with protein and vegetables in glass containers at a Detroit kitchen counter with the skyline visible through the window"
          caption="Meal planning that fits a working week matters more than perfect ingredients."
        />
        <P>
          For women in the second half of life, strength training deserves special mention because
          muscle and bone decline accelerate around menopause, and resistance training has good
          evidence behind it. We cover protein, progressive strength work, and bone loading in
          detail in our{" "}
          <PL slug="menopause-postmenopause-weight-bones-heart-hot-flashes-michigan-wisconsin">
            guide to menopause after 50
          </PL>{" "}
          and in the{" "}
          <PL slug="menopause-weight-gain-michigan-wisconsin">menopause weight gain guide</PL>,
          including how to move safely through a Michigan or Wisconsin winter.
        </P>
        <H3>What lifestyle medicine cannot do</H3>
        <P>
          One caution belongs here. Lifestyle treatment is powerful, but it is not a cure for
          everything, and a practice that implies otherwise is overpromising. Diet and exercise will
          not reverse a failing thyroid gland, correct a genetic lipid disorder, or replace a
          medication that a person genuinely needs. The DPP prevented diabetes in many people, but
          it did not prevent it in all of them. When a clinician tells you that your condition is
          entirely a matter of willpower and food choices, treat that as a red flag about their
          judgment, not as encouragement. The best lifestyle-first practices combine behavior change
          with the full range of conventional tools when the situation calls for them.
        </P>
      </section>

      {/* Section 11 */}
      <section id="what-holds-up-basic-testing">
        <H2>What Holds Up: Thoughtful Basic Testing</H2>
        <Fig
          src={tubesImg}
          alt="Close-up of a rack of blood collection tubes with colored caps on a clean laboratory counter with a gloved hand softly out of focus"
          caption="Ordinary blood tests, ordered for a reason and interpreted carefully, are the workhorse of good evaluation."
        />
        <P>
          The second legitimate pillar is the careful use of ordinary laboratory tests. Much of what
          functional medicine clinicians order is the same blood work any internist would recognize:
          a thyroid panel, hemoglobin A1c, a lipid panel, iron studies, vitamin levels. The
          difference is often not the test but the decision to look, the time to interpret, and the
          willingness to ask what a result means for a particular woman. Even so, each of these
          tests has its own evidence profile, and a few have subtleties that matter.
        </P>
        <H3>Thyroid testing</H3>
        <P>
          The central issue in thyroid care is whether a normal TSH rules out a thyroid problem as a
          cause of symptoms. The honest answer sits between two popular extremes. The American
          Thyroid Association's 2014 guideline on hypothyroidism treatment is clear that
          levothyroxine remains the standard of care and that no strong evidence shows combination
          therapies or desiccated thyroid are superior.
          <C n={16} /> At the same time, the same guideline acknowledges that some patients remain
          unwell on treatment and calls for better biomarkers to supplement the TSH.
          <C n={16} /> A reasonable clinician orders a TSH and free T4, and may add thyroid
          antibodies when the history suggests autoimmune disease, and then interprets the results
          in light of symptoms, age, medications, and other conditions. Ordering a full panel is
          defensible. Promising a woman that an out-of-range reverse T3 explains her fatigue and
          treating it with a prescription or a supplement is considerably harder to defend. Our{" "}
          <PL slug="normal-tsh-hypothyroid-symptoms-michigan-wisconsin">thyroid guide</PL> and our{" "}
          <SL to="/thyroid-care">thyroid care page</SL> walk through how we approach this, including
          where the evidence is stronger and weaker.
        </P>
        <H3>Blood sugar and fasting insulin</H3>
        <P>
          Hemoglobin A1c and fasting glucose are standard tests with established roles. Fasting
          insulin is more complicated, and it is a good example of a test that is widely used in
          functional medicine and also deserves a caveat. Insulin measurements are not standardized
          across laboratories in the way that glucose is. The American Diabetes Association
          workgroup that compared twelve commercial insulin methods from nine manufacturers found
          among-assay variation of 12 to 66 percent, with a median of 24 percent, and a common
          reference material did not fix the disagreement.
          <C n={14} /> A follow-up analysis found that for seven of ten methods, the bias compared
          with a reference method exceeded 15.5 percent in 36 to 100 percent of individual samples.
          <C n={15} /> The practical meaning is that an insulin number from one laboratory may not
          be directly comparable to a cutoff derived from another. A fasting insulin result can
          still be a useful clue, particularly when it is markedly high and fits the clinical
          picture, and tracking your own results over time at the same laboratory is more reliable
          than comparing to a universal cutoff. But anyone who tells you that a single insulin value
          proves you have a particular metabolic condition is claiming more than the measurement can
          support.
        </P>
        <H3>Vitamin D</H3>
        <P>
          Vitamin D is one of the most commonly ordered and most commonly misunderstood tests in
          functional medicine, and it matters in the Upper Midwest, where winter sunlight is
          limited. Here is what the mainstream guidance says. The{" "}
          <X href="https://doi.org/10.1210/clinem/dgae290">
            Endocrine Society's 2024 guideline on vitamin D
          </X>{" "}
          for the prevention of disease suggests empiric vitamin D supplementation for children and
          adolescents, for adults aged 75 and older, for people who are pregnant, and for people
          with high-risk prediabetes, and it suggests against empiric supplementation above the
          current recommended intake in healthy adults younger than 75. It also suggests against
          routine 25-hydroxyvitamin D testing in the absence of established indications, and it
          notes that optimal blood levels for specific health benefits still need research.
          <C n={17} /> The{" "}
          <X href="https://doi.org/10.1001/jama.2021.3069">U.S. Preventive Services Task Force</X>{" "}
          similarly concluded in 2021 that the evidence is insufficient to assess the benefits and
          harms of screening for vitamin D deficiency in asymptomatic adults.
          <C n={18} />
        </P>
        <P>
          That does not make vitamin D testing wrong for every woman. The guideline applies to
          people without established indications, and a woman with risk factors, malabsorption, bone
          disease, or symptoms may have a legitimate reason for testing and treatment. It does mean
          that higher target ranges, such as the 50 to 80 ng/mL some functional practices favor, are
          a matter of clinical judgment rather than guideline consensus, and where other articles on
          this site cite such ranges, I would ask you to read them in that spirit. I would rather
          give you the mainstream guidance and let you weigh it than pretend a more aggressive
          target is settled science.
        </P>
        <H3>Iron, B12, and other nutrient markers</H3>
        <P>
          Ferritin and B12 are common and useful tests, and there are real situations in which a
          woman with fatigue, hair shedding, or heavy periods is helped by finding iron deficiency.
          I have discussed those situations in detail in our{" "}
          <PL slug="hair-loss-women-35-to-55-michigan-wisconsin">
            guide to hair loss in women 35 to 55
          </PL>
          , including the frank point that there is no trial-derived ideal ferritin target for hair.
          The principle for all nutrient testing is the same: test when a symptom, a history, or a
          risk factor gives you a reason, treat deficiency when you find it, and recheck to confirm
          it improved. Avoid supplementing blindly based on a general sense that "most women are
          low."
        </P>
        <H3>A caution about biotin and your lab results</H3>
        <P>
          One subtle risk of supplements applies directly to testing. High-dose biotin, which is
          commonly taken for hair, skin, and nails, can interfere with some laboratory assays and
          produce falsely high or falsely low results. The FDA issued safety communications about
          this in 2017 and updated its warning in 2019, noting that thyroid tests and cardiac
          troponin tests can be affected.
          <C n={28} /> If you take biotin, tell your clinician and the laboratory, and ask whether
          you should pause it for several days before a blood draw. This is the kind of detail that
          separates a careful practice from a careless one.
        </P>
        <H3>How to test thoughtfully</H3>
        <P>
          If I could change one habit across all of medicine, conventional and functional, it would
          be to attach a question to every test before it is ordered. A thoughtful testing plan has
          four features.
        </P>
        <UL>
          <li>
            <strong>A reason.</strong> Each test is tied to a symptom, a history, or a risk factor.
          </li>
          <li>
            <strong>A decision it can change.</strong> The clinician can say what they would do if
            the result were high, low, or normal.
          </li>
          <li>
            <strong>A reasonable scope.</strong> A focused panel of common, treatable contributors
            beats a battery of eighty markers with no plan for interpreting them.
          </li>
          <li>
            <strong>A plan to recheck.</strong> Repeat testing happens when it will change
            management, not on autopilot.
          </li>
        </UL>
        <P>
          Our own Root Cause Lab Panel, priced at $454, is built around common markers: vitamin D,
          B12, ferritin, zinc, and red blood cell magnesium; TSH, free T3, free T4, and thyroid
          peroxidase antibodies; a lipid panel and lipoprotein(a); fasting glucose, hemoglobin A1c,
          and fasting insulin; liver enzymes; and the inflammation markers hs-CRP and homocysteine.
          Every one of those is a standard laboratory test, ordered through a commercial laboratory,
          not an exotic assay. I will be candid, though, that some broad-panel markers, such as
          homocysteine and hs-CRP, are more useful for context than as direct treatment targets, and
          that is exactly why I would encourage you to ask what any result would change before you
          pay for it. Details are on our <SL to="/services">services page</SL>.
        </P>
      </section>

      {/* Section 12 */}
      <section id="what-is-contested-specialty-testing">
        <H2>What Is Contested: Specialty Testing</H2>
        <Fig
          src={kitsImg}
          alt="Several plain unbranded at-home test kit boxes and small collection tubes lined up on a kitchen counter in a Midwestern home in morning window light"
          caption="At-home and specialty kits can be convenient. Convenience is not the same as validity."
        />
        <P>
          Now to the tests that give the field its reputation, for better and worse. I will walk
          through the main categories in order, and I will be explicit about which ones I use and
          what weight I put on them. This is where I think honesty from a practitioner matters most,
          because it is precisely here that a patient cannot judge for herself.
        </P>
        <H3>Food-specific IgG panels</H3>
        <P>
          The blood test that reports IgG antibodies to dozens or hundreds of foods is among the
          most heavily marketed tests in this space and among the least supported. The EAACI task
          force that reviewed it concluded that testing for IgG4 against foods is not recommended as
          a diagnostic tool, in part because many samples are positive without corresponding
          clinical symptoms and because IgG4 mainly reflects repeated exposure to food proteins, not
          a cause of hypersensitivity.
          <C n={11} /> The{" "}
          <X href="https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/igg-food-test">
            AAAAI
          </X>{" "}
          recommends against using IgG testing to diagnose food allergies or food intolerances, and
          it has done so for years as part of its contribution to a national campaign against
          low-value testing.
          <C n={12} /> If a practitioner offers you an IgG panel and tells you the foods you reacted
          to are the cause of your symptoms, you are being sold a test that the leading allergy and
          immunology organizations advise against.
        </P>
        <P>
          The Mediator Release Test, or MRT, which we discuss at length in our{" "}
          <PL slug="food-sensitivity-testing-mrt-michigan-wisconsin-women">
            guide to MRT food sensitivity testing
          </PL>
          , is a different technology that measures a different thing, the release of inflammatory
          mediators from white blood cells exposed to food extracts, rather than antibody levels.
          Its supporting evidence is more limited than that for conventional allergy testing, which
          I say plainly in that guide. I treat it as a tool for building a structured elimination
          diet for women with persistent symptoms, not as a diagnosis, and I would ask you to hold
          any result from it with the same caution.
        </P>
        <H3>Serum zonulin and "leaky gut"</H3>
        <P>
          The existence of increased intestinal permeability is not in dispute as a physiological
          phenomenon, and there is a legitimate research literature on it. The problem is the
          commercial blood test. In the 2019 study that examined commercial zonulin assays, the
          researchers used mass spectrometry to identify what the kits actually detected and found
          it was not zonulin but other proteins, including haptoglobin and complement C3. They
          concluded that current commercial assays do not detect the actual protein, and advised
          caution in interpreting the measurement.
          <C n={13} /> If a practice orders a serum zonulin level and tells you that an elevated
          result proves you have leaky gut, you now know why to be skeptical. This is the reason our{" "}
          <PL slug="leaky-gut-mucosal-barrier-test-michigan-wisconsin-women">
            guide to testing for leaky gut
          </PL>{" "}
          devotes an entire section to why that particular blood test fails, and explains what we
          use instead and the limits of that approach.
        </P>
        <H3>Cortisol, "adrenal" panels, and hormone-metabolite tests</H3>
        <P>
          Saliva and urine tests that map cortisol and sex-hormone metabolites across the day are
          popular in this field. The question is what the results mean for symptoms. In the
          systematic review that concluded "adrenal fatigue" does not exist, the authors found
          conflicting results across studies regardless of the quality of the cortisol tests, and
          noted that the methodology used in many of them was not endorsed by endocrinologists.
          <C n={19} /> That does not mean these tests are meaningless in every setting. It means
          that a pattern on a saliva cortisol curve is not a validated diagnosis for exhaustion, and
          that a treatment protocol built on that pattern alone rests on weak ground. I explain how
          I think about cortisol and stress physiology, and where it is on firmer footing, in the{" "}
          <PL slug="cortisol-hpa-axis-burnout-michigan-wisconsin-women">
            cortisol and HPA axis guide
          </PL>
          .
        </P>
        <P>
          Our free guide, and our practice, do make use of tests in this category, including
          urine-based hormone-metabolite panels. I use them selectively, I tell patients exactly how
          much weight to put on them, and I do not use them to diagnose a condition that mainstream
          endocrinology does not recognize. If you encounter a practice that does the opposite, that
          is information about the practice.
        </P>
        <H3>Comprehensive stool analyses</H3>
        <P>
          Stool-based microbiome and pathogen panels are a legitimate area of active research, and
          they can occasionally identify something that explains symptoms. They also produce long
          lists of findings, such as the presence of certain organisms at certain levels, whose
          clinical significance is uncertain, and the temptation to treat every flagged item with
          antimicrobials or supplements is a classic path to cost and to unnecessary treatment. I
          use stool testing as one piece of a larger evaluation, and the gut guide on this site
          states clearly that conventional gastrointestinal care remains essential for red-flag
          symptoms such as bleeding, unintentional weight loss, and persistent changes in bowel
          habits. Read our{" "}
          <PL slug="gut-health-hormones-women-michigan-wisconsin">complete gut health guide</PL> for
          how those boundaries are drawn.
        </P>
        <H3>The 2026 commentary's concern, in plain language</H3>
        <P>
          The critics who wrote the American Journal of Medicine commentary argue that the
          diagnostic strategies of functional medicine can lead to low-value testing and care
          cascades because they rely on specialized diagnostic constructs and nonstandard testing.
          <C n={5} /> I think that concern is fair, and I would add a practical corollary: the more
          unusual the test, the more important it is that the practitioner can explain exactly what
          the result will and will not change. If the answer is vague, the test is probably serving
          the business more than the patient.
        </P>
        <Table
          head={[
            "Test or claim",
            "What it is promoted for",
            "What the evidence says",
            "How to treat a result",
          ]}
          rows={[
            [
              "Food-specific IgG panels",
              "Identifying foods that cause symptoms",
              <>
                EAACI advised against IgG4 testing in 2008
                <C n={11} />; AAAAI recommends against it
                <C n={12} />
              </>,
              "Do not use as a diagnosis or a basis for restrictive diets",
            ],
            [
              "Serum zonulin",
              "Diagnosing leaky gut",
              <>
                Commercial assays did not detect actual zonulin in a 2019 study
                <C n={13} />
              </>,
              "Disregard as a diagnostic marker",
            ],
            [
              "Fasting insulin",
              "Detecting early insulin resistance",
              <>
                Assays disagree widely between manufacturers
                <C n={[14, 15]} />; useful as a clue, not a verdict
              </>,
              "Track at one laboratory over time; interpret with the whole picture",
            ],
            [
              "Saliva cortisol curves",
              <>Diagnosing "adrenal" dysfunction</>,
              <>
                Conflicting results; methods not endorsed by endocrinologists in the reviewed
                studies
                <C n={19} />
              </>,
              <>
                Do not accept "adrenal fatigue" as a diagnosis; see an endocrinologist if adrenal
                disease is a real question
              </>,
            ],
            [
              "Vitamin D level",
              "Optimizing health",
              <>
                No routine testing in healthy adults per Endocrine Society; USPSTF finds
                insufficient evidence
                <C n={[17, 18]} />
              </>,
              "Test when there is a reason; avoid chasing high targets without one",
            ],
            [
              "Standard thyroid panel",
              "Evaluating thyroid symptoms",
              <>
                TSH-based care is standard; better biomarkers still needed
                <C n={16} />
              </>,
              'Reasonable; interpret in context rather than by narrow "optimal" ranges alone',
            ],
          ]}
        />
      </section>

      {/* Section 13 */}
      <section id="what-is-unsupported-or-harmful">
        <H2>What Is Unsupported or Harmful</H2>
        <Fig
          src={tickImg}
          alt="A woman in her 40s on a wooded trail in northern Wisconsin in early summer carefully checking her forearm for ticks among tall grass and ferns"
          caption="Tick season in the Great Lakes states is real, and so is the controversy about how lingering symptoms should be treated."
        />
        <P>
          The fourth tier deserves its own section, because these are the practices that can cause
          real harm or can quietly keep you from the diagnosis you need. I will cover three, in
          increasing order of how directly they affect women in our two states.
        </P>
        <H3>"Adrenal fatigue" as a diagnosis</H3>
        <P>
          I mentioned this earlier and will keep it brief. The Endocrine Society, the professional
          body for endocrinologists, states that no scientific proof exists that adrenal fatigue is
          a true medical condition.
          <C n={20} /> A systematic review of 58 studies reached the same conclusion.
          <C n={19} /> The harm is not that it is a harmless wellness metaphor. The harm is that a
          woman told she has "adrenal fatigue" is typically then prescribed adrenal glandulars,
          high-dose supplements, or a cortisol-targeting protocol, and she stops looking for the
          real explanation for her exhaustion. That could be anemia, a thyroid problem, sleep apnea,
          depression, perimenopause, a medication effect, or in rare cases real adrenal disease such
          as primary adrenal insufficiency, which has a professional guideline for diagnosis and is
          treatable.
          <C n={21} /> Stress physiology and burnout are real, and I take them seriously in the{" "}
          <PL slug="cortisol-hpa-axis-burnout-michigan-wisconsin-women">cortisol guide</PL>, but
          they are different from a disease called adrenal fatigue, and the distinction matters.
        </P>
        <H3>"Chronic Lyme disease" and prolonged antibiotics</H3>
        <P>
          This is the most dangerous controversy in this territory, and it is especially relevant
          here. Lyme disease is common and growing in the Upper Midwest. The{" "}
          <X href="https://www.dhs.wisconsin.gov/tickborne/lyme/data.htm">
            Wisconsin Department of Health Services
          </X>{" "}
          reports that the state had 8,929 cases of Lyme disease in 2025, the highest on record, and
          that about 5,300 cases were reported per year on average from 2020 through 2024.
          <C n={24} /> If you hike, garden, hunt, or live near wooded or grassy edges in northern
          Michigan or anywhere in Wisconsin, this is not an abstract concern.
        </P>
        <Fig
          src={lymeInfographic}
          alt="Infographic showing Wisconsin reported an average of about 5,300 Lyme disease cases per year from 2020 to 2024 and a record 8,929 cases in 2025"
          caption="Lyme disease is common in Wisconsin and reaching record levels. That makes accurate information about it more important, not less."
        />
        <P>
          What the evidence says about treatment is clear on the part that matters here. The{" "}
          <X href="https://www.cdc.gov/lyme/hcp/clinical-care/">
            Centers for Disease Control and Prevention
          </X>{" "}
          states that most people diagnosed with Lyme disease recover completely when treated with
          two to four weeks of antibiotics, that some can have prolonged symptoms such as fatigue,
          body aches, and difficulty thinking, that the cause of those symptoms is currently
          unknown, and that the science around prolonged symptoms is limited and evolving.
          <C n={23} /> The{" "}
          <X href="https://www.idsociety.org/practice-guideline/lyme-disease/">
            2020 clinical practice guideline from the Infectious Diseases Society of America, the
            American Academy of Neurology, and the American College of Rheumatology
          </X>{" "}
          addresses lingering symptoms directly. For patients who have persistent or recurring
          nonspecific symptoms such as fatigue, pain, or cognitive impairment following recommended
          treatment for Lyme disease, but who lack objective evidence of reinfection or treatment
          failure, the panel recommends against additional antibiotic therapy. It rated that a
          strong recommendation based on moderate-quality evidence.
          <C n={22} /> The guideline also notes that in one systematic study, more than half of
          patients previously given the diagnosis of chronic Lyme disease actually had other
          specific disorders, and it observes that prolonged intravenous antibiotic therapy for
          symptoms after initial treatment has been associated with documented deaths.
          <C n={22} />
        </P>
        <P>
          I want to be precise about what this means and what it does not. It does not mean your
          lingering symptoms are not real. They are real, and they deserve a careful workup for
          other causes, supportive care, and attention to sleep, pain, and function. It does not
          mean you should avoid prompt treatment for a tick bite or a new rash, which is
          time-sensitive and effective. It does mean that if a practitioner diagnoses you with
          "chronic Lyme" on the basis of symptoms and a nonstandard test and recommends months of
          antibiotics or an elaborate antimicrobial protocol, that plan runs against the strongest
          guideline in the field, and the harms of prolonged antibiotics are well documented. If you
          suspect Lyme, see a conventional clinician, ideally one who works with infectious disease,
          early, and get the standard treatment. If you are told you have an unusual form of it
          after the standard course, ask for a second opinion from an infectious disease or
          rheumatology specialist before accepting a long antimicrobial plan.
        </P>
        <H3>Supplement stacks without a reason</H3>
        <P>
          The third category is the long, undifferentiated supplement list. The risks documented in
          the emergency department and liver injury literature that I described earlier are real,
          <C n={25} />
          <C n={26} /> and they are higher when many products are taken together, when the
          ingredients are not well characterized, and when no one is checking for interactions or
          kidney and liver function. A practitioner who starts you on twelve products at the first
          visit, with no stated goal for each, is not practicing evidence-based medicine, regardless
          of what they call it. The next section gives you a way to handle supplements safely,
          whether you take them on your own or under guidance.
        </P>
        <H3>The common thread</H3>
        <P>
          Across all three of these, the thread is the same. Each takes a real symptom, such as
          exhaustion or lingering pain, and attaches a confident explanation that sits outside
          mainstream evidence. And each risks delaying the right diagnosis or exposing the patient
          to harm from the treatment. That is the heart of why this fourth tier exists, and why the
          best protection is not cynicism toward every alternative idea but a willingness to ask, of
          any confident explanation, what the evidence is and what else it might be.
        </P>
      </section>

      <Cta
        heading="Not sure which of your own tests and supplements hold up?"
        body="Bring your lab results and your supplement list to a free assessment call. We will help you sort what has real evidence behind it from what does not."
      />

      {/* Section 14 */}
      <section id="supplements-where-money-is-wasted">
        <H2>Supplements: Where Money Is Wasted and Where Risk Hides</H2>
        <Fig
          src={supplementShelfImg}
          alt="A bathroom shelf crowded with many supplement bottles, a weekly pill organizer, and a glass of water in early morning light"
          caption="More bottles do not mean better care. Every product on the shelf should have a reason."
        />
        <P>
          Supplements deserve their own section because they are where functional medicine most
          often touches your wallet and your body at the same time, and because the rules that
          protect you here are weaker than most women assume. I will start with how the system
          works, then give you a practical protocol.
        </P>
        <H3>How supplements are regulated</H3>
        <P>
          The FDA explains that firms producing dietary supplements are responsible for evaluating
          the safety and labeling of their products before marketing them, and that the FDA has
          authority to act against an adulterated or misbranded supplement after it reaches the
          market.
          <C n={27} /> That is a post-market system. It is not the pre-market review that applies to
          prescription drugs, in which a manufacturer must demonstrate safety and effectiveness to
          the agency before selling a product. A consumer shopping for a supplement is therefore
          depending on the manufacturer's quality control and on her own judgment to a much greater
          degree than she would with a prescription.
        </P>
        <H3>What the harm data show</H3>
        <P>
          It is easy to assume that anything sold in a health food store is gentle. The data say
          otherwise. In an analysis of national surveillance data covering 2004 through 2013,
          researchers estimated 23,005 emergency department visits per year in the United States
          attributable to adverse events related to dietary supplements, resulting in about 2,154
          hospitalizations per year.
          <C n={25} /> Supplements for weight loss and energy were commonly implicated, and
          weight-loss or energy products caused nearly 72 percent of the supplement-related events
          that involved palpitations, chest pain, or a racing heart.
          <C n={25} /> Separately, a review published in <em>Hepatology</em> reported that herbal
          and dietary supplement injury now accounts for about 20 percent of cases of hepatotoxicity
          in the United States, with the major agents including anabolic steroids marketed as
          bodybuilding supplements, green tea extract, and multi-ingredient nutritional supplements,
          and with the majority of cases being due to multi-ingredient products in which the
          responsible component is usually unknown.
          <C n={26} />
        </P>
        <P>
          I do not share those numbers to frighten you off supplements. Many are used safely, and
          some have a clear role. I share them because the safety of any specific product depends on
          what is in it, at what dose, in combination with what else, and in which person, and
          because those variables are exactly what a long, unmonitored supplement list tends to
          ignore.
        </P>
        <H3>Where supplements have a clear role</H3>
        <P>
          There are situations in which a supplement is well justified. Vitamin D is recommended by
          the Endocrine Society for defined groups, including children, adults aged 75 and older,
          pregnant people, and those with high-risk prediabetes.
          <C n={17} /> A documented deficiency, such as low ferritin with iron deficiency, low B12,
          or low vitamin D in a person with a reason to test, is a reasonable target for correction.
          In each of these, there is a reason, a measurable goal, and a way to confirm the problem
          is resolved. That is the pattern to look for.
        </P>
        <H3>A safer way to use supplements</H3>
        <P>
          Whether you take supplements on your own or under a practitioner's guidance, these habits
          reduce risk and waste.
        </P>
        <OL>
          <li>
            <strong>Insist on a reason for every product.</strong> If a practitioner cannot name the
            symptom, lab value, or goal it addresses, ask them to explain or to remove it.
          </li>
          <li>
            <strong>Add one thing at a time.</strong> If you start six products on the same day and
            feel better or worse, you will never know which one was responsible.
          </li>
          <li>
            <strong>Bring every bottle to your pharmacist.</strong> A pharmacist can check for
            interactions with your prescription medications, which is a service most women never
            use. Supplements and medications can interact, and this check costs nothing.
          </li>
          <li>
            <strong>
              Be especially cautious with weight-loss, energy, and "fat burner" products,
            </strong>{" "}
            which were the leading culprits in the emergency department data.
            <C n={25} />
          </li>
          <li>
            <strong>Be cautious with concentrated botanical extracts,</strong> such as green tea
            extract, which has been linked to liver injury.
            <C n={26} />
          </li>
          <li>
            <strong>Tell your clinician and your laboratory about biotin</strong> before blood work,
            because it can distort thyroid and cardiac tests.
            <C n={28} />
          </li>
          <li>
            <strong>Tell every clinician what you take,</strong> including a surgeon or
            anesthesiologist before any procedure.
          </li>
          <li>
            <strong>Set a review date.</strong> At ninety days, review each supplement against the
            three questions from earlier: what is it for, how will we know it is working, and what
            happens if it is not.
          </li>
          <li>
            <strong>Set a monthly budget</strong> and treat it as a ceiling. A plan that cannot be
            sustained at that level will not be sustained.
          </li>
        </OL>
        <Fig
          src={pharmacistImg}
          alt="A woman in her late 40s at a small-town Midwest drugstore consultation counter speaking with a pharmacist in a white coat about her medication list"
          caption="A pharmacist can screen your supplements and prescriptions for interactions at no charge. Most women never ask."
        />
        <Callout title="A simple rule of thumb">
          <p>
            If your supplement list is longer than your ability to explain it to a friend in two
            sentences each, it is probably too long. A good plan is one you can understand, afford,
            and defend.
          </p>
        </Callout>
      </section>

      {/* Section 15 */}
      <section id="training-credentials-and-regulation">
        <H2>Training, Credentials, and Regulation</H2>
        <Fig
          src={credentialsImg}
          alt="A nurse practitioner in her 50s seated at a tidy desk with a laptop in a Grand Rapids, Michigan office with framed certificates on the wall behind her and a stethoscope on the desk"
          caption="Ask any clinician to explain their license, their certifications, and what each one means."
        />
        <P>
          Because the phrase "functional medicine" does not tell you who is treating you, the single
          most useful thing you can do is to find out what the person actually is. This is not about
          prestige. It is about scope, accountability, and the ability to complain if something goes
          wrong.
        </P>
        <H3>Three different things people confuse</H3>
        <P>
          A license, a board certification, and a training certificate are three different things,
          and a practice's marketing often blurs them.
        </P>
        <UL>
          <li>
            <strong>A license</strong> is a legal permission granted by a state to practice a
            profession, such as medicine, nursing, or dietetics. It defines what you are allowed to
            do, includes a disciplinary process, and can be looked up by the public. If someone
            practices without a license where they should have one, that is illegal.
          </li>
          <li>
            <strong>A board certification</strong> is a credential awarded by a certifying
            organization after demonstrating knowledge, usually through an examination. Physician
            specialties are certified by the member boards of the American Board of Medical
            Specialties, and nurse practitioners are certified in their population focus by national
            certifying bodies. Functional medicine is not among the ABMS specialties or
            subspecialties.
            <C n={30} />
          </li>
          <li>
            <strong>A training certificate</strong> is evidence that someone completed an
            educational program. Many organizations offer functional medicine programs, and they can
            be valuable education. They are not licenses, and they are not specialty board
            certifications.
          </li>
        </UL>
        <P>
          If a practitioner lists a string of letters after their name, ask what each one is, who
          awards it, and whether it is a license, a board certification, or a certificate of
          completion. A confident, honest practitioner will answer without defensiveness.
        </P>
        <H3>Who can practice, and what they can do</H3>
        <P>
          Functional medicine is practiced by a range of license holders: physicians, nurse
          practitioners, physician assistants, chiropractors, naturopathic doctors where they are
          licensed, dietitians, and health coaches, among others. What each of them is permitted to
          do, such as diagnose conditions, prescribe medication, or order laboratory tests, is
          determined by state law and varies from state to state. That is why it is important to
          know the license behind the label and to check the rules of your own state rather than
          assuming that one state's scope of practice applies in another.
        </P>
        <P>
          I am a nurse practitioner. My national certification is NP-C, I have more than twenty
          years in clinical healthcare, and I am certified in medical weight management. I mention
          these not to impress you but because they are the sort of facts you should ask any
          clinician to state, and then verify. Our <SL to="/about">about page</SL> gives my
          background.
        </P>
        <H3>Telehealth and state lines</H3>
        <P>
          Many women in Michigan and Wisconsin see functional medicine clinicians by telehealth. As
          a general rule, a clinician must hold a license in the state where the patient is located
          at the time of the visit, so a practitioner licensed only in another state is not
          permitted to treat you while you are at home in Michigan or Wisconsin. Confirm this
          directly with the state licensing board rather than relying on a website's assurance.
          Novaleo is licensed to provide telehealth in both states, and we describe how that works
          on our <SL to="/michigan-telehealth">Michigan telehealth</SL> and{" "}
          <SL to="/wisconsin-telehealth">Wisconsin telehealth</SL> pages, but the point stands for
          any practice you consider: verify it.
        </P>
        <H3>How to verify, in about ten minutes</H3>
        <Fig
          src={verifyInfographic}
          alt="Infographic with four numbered checks before a first visit: verify the license, confirm the credential, confirm state coverage for telehealth, and ask about the plan including fees and refund policy"
          caption="Four checks that take about ten minutes and protect you from most of the avoidable problems."
        />
        <OL>
          <li>
            <strong>Look up the license.</strong> In Wisconsin, the{" "}
            <X href="https://dsps.wi.gov/">Department of Safety and Professional Services</X> offers
            a public credential look-up.
            <C n={37} /> In Michigan, the{" "}
            <X href="https://www.michigan.gov/lara">
              Department of Licensing and Regulatory Affairs
            </X>{" "}
            provides license verification and information on filing complaints.
            <C n={38} /> Check that the license is active, in the right profession, and free of
            discipline.
          </li>
          <li>
            <strong>Ask about each credential.</strong> Request the full name of the certifying body
            and whether it is a license, a board certification, or a certificate of training.
          </li>
          <li>
            <strong>Confirm the clinician is licensed where you will be during the visit.</strong>{" "}
            This matters most for telehealth.
          </li>
          <li>
            <strong>Ask about the plan in writing.</strong> Request the fee schedule, what is and is
            not included in any package, the cost of any laboratory testing, and the refund policy
            before you pay.
          </li>
        </OL>
        <P>
          Wisconsin's Department of Safety and Professional Services also describes how to file a
          complaint against a licensed professional, and Michigan's licensing department has a
          parallel process.
          <C n={37} />
          <C n={38} /> Knowing that these channels exist is part of what makes licensed care
          different from an unregulated service. If a practice offers advice that they claim is
          protected from any oversight, that is a reason to walk away.
        </P>
      </section>

      {/* Section 16 */}
      <section id="cost-and-insurance">
        <H2>Cost, Insurance, and the Cash-Pay Reality</H2>
        <Fig
          src={budgetImg}
          alt="A woman at a kitchen table in a Milwaukee, Wisconsin home with a laptop, calculator, debit card, and papers, concentrating on household budgeting in evening lamp light"
          caption="Before you commit, do the math for six months, not just the first visit."
        />
        <P>
          Money is the part of this decision that women most often feel awkward discussing, and it
          is also the part most likely to determine whether a good experience turns into a regret. I
          will be direct.
        </P>
        <H3>Why most functional medicine is outside insurance</H3>
        <P>
          Most functional medicine practices operate on a cash-pay basis, which means insurance does
          not pay for the visits, and the patient is the payer. A cash-pay model allows long
          appointments and flexibility, which many patients value. It also moves the full financial
          burden onto you and removes the check that an insurer provides on what is billed. The 2026
          commentary specifically flags substantial out-of-pocket costs as a source of inequity
          associated with this model.
          <C n={5} /> I think that is a fair concern, and it is one reason I take transparency about
          price so seriously.
        </P>
        <H3>What a transparent price list looks like</H3>
        <P>
          Our fees are published. A free assessment call lets you ask questions without paying. A
          30-minute Clarity Session is $47, and a 60-minute Root Cause Intake is $97. The Root Cause
          Lab Panel is $454, including written insights on your results, and it is credited toward
          the program if you enroll within 30 days. The Root Cause Restoration Program is $3,995 for
          six months and is limited to four clients at a time. We do not take insurance, and we
          accept FSA and HSA cards, as well as credit and debit cards. You can see all of it on our{" "}
          <SL to="/functional-medicine-cost">cost page</SL>.
        </P>
        <P>
          I also want to be honest about our refund policy, because it is the kind of detail that
          surprises people after the fact. Our published terms state that all sales are final and no
          refunds are issued. You should know that before you book, and you should ask every
          practice you consider for its refund policy in writing. A practice that is vague about
          refunds is making a decision you should factor into your own.
        </P>
        <H3>FSA and HSA accounts</H3>
        <P>
          Many women assume that because they have a health savings account or flexible spending
          account, everything a clinician recommends is eligible. The rules are more specific. The{" "}
          <X href="https://www.irs.gov/publications/p502">
            Internal Revenue Service, in its guide to medical and dental expenses
          </X>
          , states that you cannot include the cost of nutritional supplements, vitamins, or herbal
          supplements unless they are recommended by a medical practitioner as treatment for a
          specific medical condition diagnosed by a physician, because these items are generally
          taken to maintain ordinary good health and are not for medical care.
          <C n={29} /> The publication also says expenses that are merely beneficial to general
          health do not qualify.
          <C n={29} /> That means that a supplement taken for "general wellness" is generally not an
          eligible expense, while a supplement for a documented deficiency, with documentation from
          a clinician, may be. Eligibility is ultimately determined by your plan administrator, so
          ask them before you assume.
        </P>
        <H3>A six-month cost worksheet</H3>
        <P>
          The most reliable protection against financial regret is to total the real cost before
          committing. For any practice, write down the following and add it up.
        </P>
        <UL>
          <li>
            The cost of the first visit and each follow-up visit, and how many follow-ups are
            expected in six months.
          </li>
          <li>
            The cost of laboratory testing, including repeat testing, and whether the lab fees are
            included or billed separately.
          </li>
          <li>
            The expected monthly cost of supplements and whether you are required to buy them from
            the practice.
          </li>
          <li>Any membership, program, or package fee, and what it includes.</li>
          <li>The refund and cancellation terms.</li>
        </UL>
        <P>
          Compare the total with what you could get elsewhere. A visit with your primary care
          clinician, a referral to an endocrinologist or gynecologist, and laboratory tests ordered
          through your insurance may cover part of what you need for far less money. In many cases
          the most sensible approach combines the two: use your insurance for what it covers, and
          pay out of pocket only for the time and the additional work you value. If you have recent
          results from your primary care provider, bring them, so that you do not pay to repeat
          tests that were done last month.
        </P>
        <P>
          Finally, treat cost as a clinical variable. A plan that you cannot afford to complete is a
          plan that will fail, and a good clinician will help you design a version of the plan that
          fits your budget. If a practitioner cannot or will not adjust the plan to your means, they
          are selling a product, not providing care.
        </P>
      </section>

      {/* Section 17 */}
      <section id="business-models-and-conflicts-of-interest">
        <H2>Business Models and Conflicts of Interest</H2>
        <Fig
          src={frontDeskImg}
          alt="A clinic reception counter in a modern Midwestern wellness office with a clipboard and a tablet on the counter and a green plant, calm and professional"
          caption="How a practice earns its revenue shapes what it recommends, in every part of medicine."
        />
        <P>
          Every healthcare business has incentives, and conventional medicine has plenty of its own,
          from fee-for-service billing that rewards volume to pharmaceutical relationships that
          shape prescribing. Pretending that functional medicine is uniquely conflicted would be
          unfair. But it is worth understanding the specific incentive structures you are likely to
          encounter, because they affect what you are offered.
        </P>
        <H3>The models you will see</H3>
        <Table
          head={["Business model", "What is good about it", "What to watch for"]}
          rows={[
            [
              "Fee-for-service visits",
              "You pay for time and expertise; the incentive is aligned with conversation, not product",
              "Visit fees can add up; ask how many follow-ups to expect",
            ],
            [
              "Membership or program packages",
              "Predictable cost; often includes messaging and follow-up",
              "Prepaying large amounts; unclear refund terms; paying for services you do not use",
            ],
            [
              "Selling supplements through the practice",
              "Convenience; the practice can control quality",
              "A financial incentive to recommend products; pressure to buy only from the practice; mark-ups",
            ],
            [
              "Laboratory packages",
              "Bundled pricing for panels; fewer separate bills",
              "Large batteries of tests with no plan for interpretation; paying for tests you did not need",
            ],
            [
              "Affiliate or commission arrangements",
              "Sometimes disclosed transparently",
              "Recommendations that are really advertisements; undisclosed relationships with companies",
            ],
            [
              "Coaching and add-on programs",
              "Behavior change support has evidence behind it",
              "Overlap with what the clinician should already be providing; cost",
            ],
          ]}
        />
        <P>
          None of these models is automatically unethical. Many careful practices use some of them.
          The difference between an honest practice and a predatory one is whether the incentives
          are disclosed, whether the recommendations would be the same if no one profited from them,
          and whether the patient can decline a product without penalty.
        </P>
        <H3>Questions that surface conflicts</H3>
        <P>
          You do not need to be accusatory. You can ask these questions in a friendly, curious tone,
          and the way a practice answers will tell you a great deal.
        </P>
        <OL>
          <li>
            Do you sell any of the supplements you recommend, and do I have to buy them from you?
          </li>
          <li>
            Do you receive any payment, discount, or commission from the laboratories or companies
            whose products you recommend?
          </li>
          <li>
            Which of the tests you are proposing are standard tests, and which are specialty tests
            that would not be recommended in a typical primary care visit?
          </li>
          <li>
            If I said no to the supplements and only changed my food, sleep, and movement, would you
            still work with me?
          </li>
          <li>What would you recommend if the test results came back completely normal?</li>
        </OL>
        <P>
          I will answer each of these for you on a first call, and I would think less of you if you
          did not ask. The last question is especially revealing. A practice that has a plan for a
          normal result, such as continuing with lifestyle changes, rechecking in a few months, or
          referring for another evaluation, is oriented toward your wellbeing. A practice for which
          a normal result is a problem is oriented toward selling the next product.
        </P>
        <P>
          For further guidance on evaluating any practice, including how cost and testing fit
          together, see the provider-evaluation section of our{" "}
          <PL slug="medical-weight-loss-hormone-therapy-michigan-wisconsin-cities">
            city-by-city guide to medical weight loss and hormone therapy in Michigan and Wisconsin
          </PL>
          , which describes what a trustworthy root-cause provider looks like regardless of where
          you live.
        </P>
      </section>

      {/* Section 18 */}
      <section id="michigan-and-wisconsin-landscape">
        <H2>The Michigan and Wisconsin Landscape</H2>
        <Fig
          src={upRoadImg}
          alt="A quiet two-lane road through a snowy pine forest in Michigan's Upper Peninsula with a small farmhouse in the distance and smoke rising from its chimney"
          caption="For many women in the Upper Peninsula and rural Wisconsin, the nearest specialist is a long, winter drive away."
        />
        <P>
          The question of whether functional medicine is legitimate is partly a national question
          and partly a local one. For women in our two states, the local part matters more than most
          national articles acknowledge.
        </P>
        <H3>Why so many women look beyond a conventional visit</H3>
        <P>
          Access is a real driver. The Health Resources and Services Administration designates areas
          with too few primary care clinicians, and the{" "}
          <X href="https://www.kff.org/other/state-indicator/primary-care-health-professional-shortage-areas-hpsas/">
            Kaiser Family Foundation
          </X>{" "}
          reports the data by state. As of December 31, 2025, Michigan had 280 primary care
          shortage-area designations covering about 2.63 million people, with 47.5 percent of the
          primary care need in those areas met, and it would need about 464 more practitioners to
          remove the designations. Wisconsin had 175 designations covering about 2.01 million
          people, with 66 percent of the need met, and it would need about 223 more practitioners.
          <C n={32} />
        </P>
        <Fig
          src={shortageInfographic}
          alt="Infographic comparing Michigan and Wisconsin primary care shortage data: Michigan 47.5 percent of need met with 280 designations and Wisconsin 66.0 percent with 175 designations"
          caption="Primary care gaps are wider in Michigan than in Wisconsin, and significant in both."
        />
        <P>
          Those numbers help explain why many Michigan and Wisconsin women, particularly in rural
          counties, the Upper Peninsula, and the Driftless region of southwest Wisconsin, turn to
          telehealth for care that they cannot easily find nearby. They also explain why it matters
          so much that the telehealth practice be a good one. When a clinic is your main access
          point for specialized thinking, the cost of a mistake rises, because there may be no
          second opinion within a reasonable drive.
        </P>
        <H3>What you can find from universities and health systems</H3>
        <P>
          Both states' flagship health systems offer academic integrative programs, which are a
          different kind of option from a cash-pay functional medicine practice.{" "}
          <X href="https://www.uwhealth.org/thestudio">UW Health in Madison</X> operates integrative
          health and wellness clinics, and notes that primary care services are not provided there.
          <C n={39} />{" "}
          <X href="https://medschool.umich.edu/departments/family-medicine/programs/integrative-family-medicine">
            Michigan Medicine in Ann Arbor
          </X>{" "}
          offers an Integrative Family Medicine program in the Department of Family Medicine.
          <C n={40} /> If an academic referral is feasible for you, it can be a useful second
          opinion. If it is not, because of distance, waiting lists, or what the program does and
          does not offer, a well-run independent telehealth practice can fill part of the gap.
        </P>
        <H3>The Lyme and tick landscape, again</H3>
        <P>
          Wisconsin's record Lyme year, with 8,929 cases reported in 2025,
          <C n={24} /> is a reminder that the Upper Midwest has its own distinctive infectious
          disease landscape, and it is one reason that a practitioner in our region should be
          familiar with the standard guidelines on tick-borne illness. If a practice that serves our
          region cannot describe the standard approach to Lyme and the reasons for avoiding
          prolonged antibiotics after standard treatment, that tells you something.
          <C n={22} />
        </P>
        <H3>Licensing and telehealth across two states</H3>
        <P>
          A clinician serving both states must hold licensure in each, and the licensing boards
          differ. You can verify a Michigan clinician through the state's licensing department
          <C n={38} /> and a Wisconsin clinician through the Department of Safety and Professional
          Services.
          <C n={37} /> If you live in one state and spend part of the year in the other, which many
          families do, ask how the practice handles care when you are physically located across the
          border, because the clinician generally must be licensed where you are during the visit.
        </P>
        <H3>Where our own pages can help</H3>
        <P>
          If you are weighing a telehealth practice in our region, our location pages explain how
          care works for <SL to="/michigan-telehealth">Michigan</SL>,{" "}
          <SL to="/wisconsin-telehealth">Wisconsin</SL>, and{" "}
          <SL to="/grand-rapids-telehealth">Grand Rapids</SL>, and our{" "}
          <PL slug="medical-weight-loss-hormone-therapy-michigan-wisconsin-cities">
            city-by-city guide
          </PL>{" "}
          covers Grand Rapids, Metro Detroit, Ann Arbor, Lansing, Kalamazoo, Milwaukee, Madison,
          Green Bay, and the smaller communities in between. We wrote those guides so that you can
          see for yourself how the practicalities of lab draws, licensing, and follow-up work in
          your corner of the Great Lakes.
        </P>
      </section>

      <Cta
        heading="Want to see how this approach holds up on your own questions?"
        body="Our free assessment call is a no-pressure conversation. Bring your questions about evidence, cost, and credentials, and we will answer them directly before you decide anything."
      />

      {/* Section 19 */}
      <section id="when-conventional-care-fails-women">
        <H2>When Conventional Care Fails Women</H2>
        <Fig
          src={unheardImg}
          alt="Over-the-shoulder view of a woman in her late 40s sitting in an exam room while a doctor types at a computer with his back partly turned toward her, the woman looking tired and unheard"
          caption="Being unheard is a clinical problem, not just a customer service problem."
        />
        <P>
          I have spent this guide being hard on functional medicine, because that is what the
          question demands. Fairness requires that I be equally honest about the other side, because
          the reason functional medicine exists as a market is that conventional care has, for many
          women, genuinely fallen short. If you are drawn to alternatives, it is not because you
          were gullible. It is often because you were not listened to.
        </P>
        <H3>The structure of the problem</H3>
        <P>
          Part of it is time. When the average primary care exam lasts 18 minutes, and a substantial
          share of visits run over their scheduled slot, a clinician faces an impossible task with a
          patient who has several overlapping complaints.
          <C n={7} /> Part of it is how the system is built, with specialists focused on single
          organs and few people paid to integrate across them. And part of it, uncomfortably, may be
          about how medicine has historically listened to women.
        </P>
        <H3>What the research on sex differences shows</H3>
        <P>
          The research on sex differences in diagnosis and treatment is more developed than many
          people realize, and I want to describe it carefully rather than overstate it. A{" "}
          <X href="https://doi.org/10.1038/s41467-019-08475-9">
            2019 study in <em>Nature Communications</em>
          </X>{" "}
          analyzed hospital data for the entire Danish population and found that, for the majority
          of diagnoses, incidence differed between men and women, and that the age at first
          diagnosis was typically lower for men than for women.
          <C n={33} /> The authors argued that the findings point to the need for greater attention
          to sex-stratified medicine. That study does not prove that women are diagnosed later
          because of bias. Biology, health-seeking behavior, and many other factors could
          contribute. It does show that sex differences in the diagnostic journey are measurable and
          widespread.
        </P>
        <P>
          A 2001 paper in the <em>Journal of Law, Medicine and Ethics</em>, titled "The girl who
          cried pain: a bias against women in the treatment of pain," examined sex differences in
          how pain is treated, and a 2022 paper in the same journal asked whether sex-based
          disparities in the experience and treatment of pain still exist.
          <C n={34} />
          <C n={41} /> I cite these not to claim that every clinician dismisses women, which would
          be false and unfair to the many excellent ones. I cite them because sex differences in the
          diagnostic journey and in pain care are a recognized subject of research, not just
          anecdote, and because they help explain why so many women arrive at my practice already
          convinced that they will not be believed.
        </P>
        <H3>The midlife gap</H3>
        <P>
          For women in their late thirties through their fifties, the problem has a specific shape.
          Perimenopause, the years of hormonal transition before the final menstrual period,
          produces sleep disruption, mood changes, brain fog, irregular cycles, and changes in body
          composition, and it is a phase that many women report being told is stress, depression, or
          normal aging. This is one of the reasons we have written so many guides on the topic,
          including the one on{" "}
          <PL slug="perimenopause-in-your-30s-michigan-wisconsin">
            perimenopause starting in your thirties
          </PL>
          , in which we explain why symptoms appearing earlier than expected are often missed.
        </P>
        <H3>The balance to keep</H3>
        <P>
          Having said all that, I want to protect you from a conclusion that feels natural but is
          wrong. Being dismissed by one clinician does not mean the answer was wrong. Sometimes a
          "normal" result is both accurate and good news, and some symptoms, including some real and
          distressing ones, do not have a laboratory signature. A functional practice that treats
          every normal result as evidence of a hidden problem is making the opposite error from the
          clinician who dismisses everything. The goal is not a clinician who always finds
          something. It is a clinician who takes your symptoms seriously and tells you the truth
          about what the evidence supports.
        </P>
        <H3>How to get more from a conventional visit</H3>
        <P>
          If you want to improve your odds with a conventional clinician, a few habits help, and
          they are worth using whether or not you ever see a functional medicine practitioner.
        </P>
        <UL>
          <li>
            <strong>Lead with the one or two issues that matter most</strong> rather than a long
            list, and ask for a follow-up visit for the rest.
          </li>
          <li>
            <strong>Bring a one-page timeline</strong> of when symptoms began, how they have
            changed, and what else was happening in your life.
          </li>
          <li>
            <strong>Say what you are afraid of.</strong> "I am worried this is something serious"
            gives the clinician information that changes how they respond.
          </li>
          <li>
            <strong>Ask what would change the plan.</strong> "What would you do if this were your
            mother?" is a useful question.
          </li>
          <li>
            <strong>Ask for the plan in writing,</strong> including what to do if symptoms do not
            improve and when to return.
          </li>
          <li>
            <strong>Ask for a referral</strong> when your concern is outside the clinician's scope,
            and ask what the wait time is.
          </li>
        </UL>
        <P>
          These steps do not fix a structural problem, but they shift the odds. They also make you a
          better partner for any practitioner you work with later.
        </P>
      </section>

      {/* Section 20 */}
      <section id="when-to-start-with-conventional-care">
        <H2>When to Start With Conventional Care</H2>
        <Fig
          src={screeningImg}
          alt="A primary care physician in a white coat and a woman in her late 40s seated in a bright exam room reviewing a screening checklist together on a clipboard"
          caption="Some things belong with a conventional clinician first, and cancer screening is one of them."
        />
        <P>
          I told you at the start that I would say when not to come to a practice like mine, and
          this is that section. The principle is simple: a wellness practice, whatever it is called,
          is not the right place to begin for a symptom that could signal an urgent or dangerous
          condition, and it is not a substitute for routine screening.
        </P>
        <H3>Symptoms that need prompt conventional evaluation</H3>
        <P>
          The following should lead you to an urgent care clinic, an emergency department, or your
          primary care clinician right away, not to a functional medicine intake.
        </P>
        <UL>
          <li>
            Chest pain or pressure, shortness of breath, or a rapid or irregular heartbeat that is
            new or severe.
          </li>
          <li>
            Sudden weakness, numbness, facial drooping, trouble speaking, or vision loss, which can
            signal a stroke.
          </li>
          <li>A sudden, severe headache unlike any you have had before.</li>
          <li>Unexplained weight loss, drenching night sweats with fever, or persistent fevers.</li>
          <li>Any vaginal bleeding after menopause, which always warrants prompt evaluation.</li>
          <li>A new breast lump, nipple discharge, or skin change.</li>
          <li>Blood in the stool, black stools, or persistent changes in bowel habits.</li>
          <li>
            A rash that looks like an expanding red patch after a tick bite, or a fever and flu-like
            illness after outdoor exposure in tick season.
          </li>
          <li>
            Thoughts of harming yourself. In the United States, you can call or text 988, the{" "}
            <X href="https://988lifeline.org/">Suicide and Crisis Lifeline</X>, at any hour.
          </li>
        </UL>
        <P>
          A good functional medicine practice will tell you this on the first call. If a practice
          instead tells you that these symptoms can be sorted out with a supplement plan, leave.
        </P>
        <H3>Screening is not the same as testing</H3>
        <P>
          One of the most common ways a wellness practice can do harm, without anyone intending it,
          is by creating the impression that an extensive set of blood tests replaces standard
          cancer screening. It does not. Blood panels do not detect breast, colon, or cervical
          cancer.
        </P>
        <P>
          For colorectal cancer, the{" "}
          <X href="https://doi.org/10.1001/jama.2021.6238">U.S. Preventive Services Task Force</X>{" "}
          recommends screening for average-risk adults aged 45 to 49 (a B recommendation) and for
          adults aged 50 to 75 (an A recommendation).
          <C n={35} /> For breast cancer, the Task Force's 2024 recommendation is biennial screening
          mammography for women aged 40 to 74.
          <C n={36} /> If you are in these age groups and you are not up to date, please talk with
          your primary care clinician about scheduling, whichever other care you pursue. A practice
          that discourages screening, or that suggests an alternative that it claims is equivalent,
          is making a serious mistake.
        </P>
        <Table
          head={["Situation", "Where to start", "Why"]}
          rows={[
            [
              "Chest pain, stroke symptoms, severe headache, suicidal thoughts",
              "Emergency care or 988",
              "Time-sensitive and potentially life-threatening",
            ],
            [
              "New breast lump, bleeding after menopause, blood in the stool, unexplained weight loss",
              "Primary care or the relevant specialist, promptly",
              "Could signal cancer or another serious condition that needs standard evaluation",
            ],
            [
              "Due for mammogram or colorectal screening",
              "Primary care or the screening service",
              "Screening has strong evidence; blood panels do not replace it",
            ],
            [
              "Suspected tick-borne illness",
              "Primary care or urgent care, early",
              "Prompt standard treatment is effective and guidelines are clear",
            ],
            [
              "Fatigue, brain fog, weight change, sleep disruption, and irregular cycles with unremarkable first tests",
              "Either a conventional or a functional practice, ideally both",
              "Multifactorial symptoms may benefit from time and a broader look",
            ],
            [
              "Perimenopause or menopause symptoms",
              "A clinician with menopause expertise, conventional or functional",
              "Hormone therapy and symptom management are well-studied topics",
            ],
          ]}
        />
        <H3>When a functional practice can be a good first or second stop</H3>
        <P>
          It would be a mistake to take this section as a case against functional care. There is a
          broad middle where a thoughtful functional practice is a reasonable choice: persistent
          fatigue, sleep disruption, weight change, brain fog, digestive symptoms, and the cluster
          of changes that arrive with perimenopause, particularly after an initial conventional
          workup has not explained them. The best arrangement for many women is both. Keep your
          primary care clinician informed, keep up with screening, bring your functional results to
          your conventional clinicians, and let each side check the other.
        </P>
        <P>
          Our <SL to="/what-we-treat">conditions page</SL> lists what we work on, and our{" "}
          <SL to="/approach">approach page</SL> describes how we coordinate. In every case, we
          encourage patients to keep their conventional care in place.
        </P>
      </section>

      {/* Section: Condition-by-condition */}
      <section id="condition-by-condition-reality-check">
        <H2>A Condition-by-Condition Reality Check</H2>
        <Fig
          src={forkTrailImg}
          alt="A woman in her 50s seen from behind pausing where a forest trail forks into two paths among maple and birch trees in Michigan in soft golden autumn light"
          caption="For each concern, there is usually a sensible first step and a sensible next one."
        />
        <P>
          General principles are useful, but most women reading this are thinking about a specific
          problem. So here is a condition-by-condition reality check for the concerns I hear about
          most often. For each, I describe a sensible place to start, where a thoughtful functional
          approach can add something, and where to be careful. These are not diagnoses or treatment
          plans, and they are written within the limits of the evidence summarized above.
        </P>
        <H3>Persistent fatigue</H3>
        <P>
          <strong>Start here:</strong> a conventional evaluation that reviews your medications,
          sleep, mood, and basic laboratory tests, with attention to anemia, thyroid function, and
          blood sugar. Fatigue has a long list of treatable causes, and some deserve prompt
          attention, such as sleep apnea, depression, and anemia.
        </P>
        <P>
          <strong>Where a functional approach can add:</strong> time to untangle overlapping
          contributors, and a plan that treats sleep, nutrition, movement, and stress as medicine.
          If insomnia is part of the picture, CBT-I is the first-line treatment recommended by the
          American College of Physicians.
          <C n={10} />
        </P>
        <P>
          <strong>Be careful about:</strong> a diagnosis of "adrenal fatigue," which is not
          recognized and can distract from the real cause,
          <C n={[19, 20]} /> and any protocol that treats exhaustion as a supplement problem. Our{" "}
          <PL slug="cortisol-hpa-axis-burnout-michigan-wisconsin-women">
            cortisol and burnout guide
          </PL>{" "}
          goes deeper on what is and is not supported.
        </P>
        <H3>Brain fog and memory changes</H3>
        <P>
          <strong>Start here:</strong> your primary care clinician, especially if the changes are
          progressive, severe, or interfering with safety at work or at home. Medication effects,
          sleep problems, mood disorders, thyroid disease, and other conditions can all affect
          thinking.
        </P>
        <P>
          <strong>Where a functional approach can add:</strong> attention to sleep, hormonal timing
          in perimenopause, nutrition, and stress, and the time to track patterns. Our guide to{" "}
          <PL slug="perimenopause-brain-fog-memory-michigan-wisconsin">perimenopausal brain fog</PL>{" "}
          describes how to distinguish common hormonal fog from changes that call for a different
          kind of evaluation.
        </P>
        <P>
          <strong>Be careful about:</strong> expensive supplement protocols that promise to restore
          memory, and about any practitioner who dismisses progressive symptoms as "just hormones."
        </P>
        <H3>Weight resistance and midlife weight gain</H3>
        <P>
          <strong>Start here:</strong> a conversation with a clinician who will look at the full
          picture, including sleep, medications, thyroid function, and blood sugar, and who can
          discuss both lifestyle and medical options.
        </P>
        <P>
          <strong>Where a functional approach can add:</strong> structured lifestyle treatment,
          which has the strongest evidence in the field. In the Diabetes Prevention Program, a
          program aiming for at least 7 percent weight loss and 150 minutes of activity per week
          reduced new diabetes by 58 percent.
          <C n={8} /> Strength training, protein, and sleep deserve attention in midlife, as our
          guides to <PL slug="menopause-weight-gain-michigan-wisconsin">menopause weight gain</PL>{" "}
          and <PL slug="ozempic-not-working-michigan-wisconsin-women">GLP-1 plateaus</PL> explain.
        </P>
        <P>
          <strong>Be careful about:</strong> single-number explanations. A fasting insulin value
          from one laboratory is not a precise measure that can be compared against a universal
          cutoff,
          <C n={14} /> and no test result should be used to promise that weight will come off.
        </P>
        <H3>Thyroid symptoms</H3>
        <P>
          <strong>Start here:</strong> a TSH and free T4, with thyroid antibodies if the history
          suggests autoimmune thyroid disease. The American Thyroid Association guideline treats
          levothyroxine as the standard of care for hypothyroidism.
          <C n={16} />
        </P>
        <P>
          <strong>Where a functional approach can add:</strong> a closer look at symptoms,
          medications, nutrients, and other contributors when results sit in a gray zone, and a
          willingness to take persistent symptoms seriously. The same guideline acknowledges that
          some patients remain unwell on levothyroxine and that better biomarkers are needed.
          <C n={16} /> See our <SL to="/thyroid-care">thyroid care page</SL>.
        </P>
        <P>
          <strong>Be careful about:</strong> claims that combination therapy or desiccated thyroid
          is clearly superior, since the guideline found no consistently strong evidence that it is,
          <C n={16} /> and about treating reverse T3 or other secondary markers in isolation.
        </P>
        <H3>Perimenopause and menopause symptoms</H3>
        <P>
          <strong>Start here:</strong> a clinician who is comfortable discussing the menopause
          transition, whether conventional or functional. Heavy or unusual bleeding needs
          evaluation, and any bleeding after menopause needs prompt attention.
        </P>
        <P>
          <strong>Where a functional approach can add:</strong> time to connect sleep, mood, cycle
          changes, and body composition, and to discuss options with candor. Our guides to{" "}
          <PL slug="perimenopause-in-your-30s-michigan-wisconsin">
            perimenopause in your thirties
          </PL>
          ,{" "}
          <PL slug="hot-flashes-night-sweats-women-michigan-wisconsin">
            hot flashes and night sweats
          </PL>
          ,{" "}
          <PL slug="bioidentical-hormone-therapy-guide-michigan-wisconsin">
            bioidentical hormone therapy
          </PL>
          , and{" "}
          <PL slug="menopause-postmenopause-weight-bones-heart-hot-flashes-michigan-wisconsin">
            menopause after 50
          </PL>{" "}
          cover the evidence in detail, and our{" "}
          <SL to="/perimenopause-menopause-care">perimenopause and menopause care page</SL> explains
          how we approach it.
        </P>
        <P>
          <strong>Be careful about:</strong> hormone testing that claims to identify exactly when
          you will reach menopause, and any plan that dismisses standard evidence on the benefits
          and risks of hormone therapy in either direction.
        </P>
        <H3>Digestive symptoms</H3>
        <P>
          <strong>Start here:</strong> a conventional evaluation first if you have red-flag features
          such as bleeding, black stools, unintentional weight loss, persistent vomiting, or a
          significant change in bowel habits. Colorectal cancer screening is recommended starting at
          45 for average-risk adults.
          <C n={35} />
        </P>
        <P>
          <strong>Where a functional approach can add:</strong> dietary pattern work, attention to
          stress and sleep, and selective testing once serious causes are addressed. Our{" "}
          <PL slug="gut-health-hormones-women-michigan-wisconsin">gut health guide</PL> draws these
          boundaries.
        </P>
        <P>
          <strong>Be careful about:</strong> food IgG panels, which allergy and immunology
          organizations advise against,
          <C n={[11, 12]} /> and serum zonulin tests, which did not detect actual zonulin in a 2019
          study.
          <C n={13} />
        </P>
        <H3>Sleep and anxiety</H3>
        <P>
          <strong>Start here:</strong> a mental health professional or primary care clinician,
          particularly if anxiety or low mood is significant. If you are in crisis or thinking about
          harming yourself, call or text 988.
        </P>
        <P>
          <strong>Where a functional approach can add:</strong> evaluation of hormonal and other
          contributors to sleep disruption, alongside therapy. CBT-I is first-line for chronic
          insomnia.
          <C n={10} /> See our guide to{" "}
          <PL slug="hormonal-sleep-anxiety-women-michigan-wisconsin">hormonal sleep and anxiety</PL>
          .
        </P>
        <P>
          <strong>Be careful about:</strong> any plan that positions hormones or supplements as a
          replacement for mental health care.
        </P>
        <H3>Hair shedding and thinning</H3>
        <P>
          <strong>Start here:</strong> a clinician who will examine your scalp and check common
          contributors such as thyroid function and iron stores, and a dermatologist if there are
          signs of scarring or patchy loss.
        </P>
        <P>
          <strong>Where a functional approach can add:</strong> a broader look at nutrition, stress,
          medications, and hormonal changes. Our{" "}
          <PL slug="hair-loss-women-35-to-55-michigan-wisconsin">hair loss guide</PL> covers this,
          including the frank point that there is no trial-derived ideal ferritin level for hair.
        </P>
        <P>
          <strong>Be careful about:</strong> high-dose biotin, which can interfere with some
          laboratory tests.
          <C n={28} />
        </P>
        <H3>Possible tick-borne illness</H3>
        <P>
          <strong>Start here:</strong> a conventional clinician, early. Prompt treatment is
          effective, and most people treated with two to four weeks of antibiotics recover
          completely.
          <C n={23} />
        </P>
        <P>
          <strong>Where a functional approach can add:</strong> supportive care for lingering
          symptoms, including sleep, pain, and function, after other causes have been evaluated.
        </P>
        <P>
          <strong>Be careful about:</strong> a "chronic Lyme" diagnosis and prolonged antibiotics,
          which the 2020 guideline recommends against for persistent nonspecific symptoms without
          objective evidence of ongoing infection.
          <C n={22} />
        </P>
        <Callout title="The pattern across all of these">
          <p>
            In every case, the safest route is the same: rule out the serious and the treatable
            first, use lifestyle treatment generously, and use specialty testing and supplements
            sparingly and with a clear purpose. That sequence works whether you see a conventional
            clinician, a functional medicine clinician, or both.
          </p>
        </Callout>
      </section>

      {/* Section 21 */}
      <section id="seven-questions-to-ask-any-practice">
        <H2>Seven Questions to Ask Any Practice</H2>
        <Fig
          src={questionsImg}
          alt="A woman's hand writing a numbered list of questions in a notebook at a kitchen table before a doctor's appointment with a laptop and a mug of tea nearby"
          caption="Write your questions down before the call. It changes the conversation."
        />
        <P>
          Here is the practical core of this guide: seven questions you can ask any functional
          medicine practice, before you pay, with a description of what a good answer sounds like
          and what should worry you. You can ask them on a free call, by email, or at the start of a
          first visit. Print this section if it helps.
        </P>
        <H3>1. What are your license and certifications, and how can I verify them?</H3>
        <P>
          <strong>A good answer</strong> gives you the name of the license, the state, and the
          certifying bodies for each credential, and invites you to look them up.{" "}
          <strong>A worrying answer</strong> is a list of acronyms without explanation, evasion
          about the underlying license, or irritation at being asked. The verification steps are in
          the credentials section.
        </P>
        <H3>2. What will you do if my tests come back normal?</H3>
        <P>
          <strong>A good answer</strong> describes a plan: continue the lifestyle changes, recheck
          at a defined time, consider other explanations, or refer for another evaluation.{" "}
          <strong>A worrying answer</strong> suggests that a normal result means more testing, a
          different kind of test, or that your "functional" results will find a problem where
          conventional tests did not.
        </P>
        <H3>
          3. Which of the tests you recommend are standard, and which are specialty tests, and what
          is the evidence for the specialty ones?
        </H3>
        <P>
          <strong>A good answer</strong> separates the two categories, can describe what each
          specialty test can and cannot tell you, and acknowledges where evidence is limited.{" "}
          <strong>A worrying answer</strong> is a confident claim that every test is essential, or
          testimonials in place of evidence. If the practice proposes food IgG panels, serum
          zonulin, or "adrenal" saliva curves as diagnostic, you now know what the evidence says
          about them.
          <C n={[11, 12, 13, 19]} />
        </P>
        <H3>
          4. How will we decide whether this is working, and when will we stop something that is
          not?
        </H3>
        <P>
          <strong>A good answer</strong> names measurable markers, such as symptom scores, sleep
          logs, lab values, or a functional goal, and a time frame for review.{" "}
          <strong>A worrying answer</strong> is open-ended, with no point at which anything would be
          judged a failure.
        </P>
        <H3>5. Do you sell what you recommend, and do I have to buy it from you?</H3>
        <P>
          <strong>A good answer</strong> is direct and transparent, discloses any financial
          relationship, and makes clear that you can source recommendations elsewhere.{" "}
          <strong>A worrying answer</strong> is vagueness, defensiveness, or pressure to buy only
          through the practice.
        </P>
        <H3>
          6. When will you refer me to a conventional clinician, and will you coordinate with my
          primary care provider?
        </H3>
        <P>
          <strong>A good answer</strong> names the situations that trigger a referral, such as
          red-flag symptoms or findings outside the practice's scope, and welcomes communication
          with your other clinicians. <strong>A worrying answer</strong> casts conventional medicine
          as the enemy or discourages you from seeing your doctor or keeping up with screening.
        </P>
        <H3>7. What will the whole thing cost, in writing, including the refund policy?</H3>
        <P>
          <strong>A good answer</strong> is a clear, itemized fee schedule, an honest estimate of
          follow-ups and laboratory costs, and a refund policy stated up front.{" "}
          <strong>A worrying answer</strong> is a high-pressure sale, a large prepayment with
          unclear terms, or an inability to estimate costs.
        </P>
        <Callout title="Why these seven work">
          <p>
            Each question tests a different part of an honest practice: credentials, humility about
            evidence, honest use of tests, accountability, conflicts of interest, willingness to
            refer, and financial transparency. A practice that answers all seven well is likely to
            be trustworthy regardless of what it calls itself. A practice that stumbles on several
            is telling you who it is.
          </p>
        </Callout>
      </section>

      {/* Section 22 */}
      <section id="green-flags-and-red-flags">
        <H2>Green Flags and Red Flags</H2>
        <Fig
          src={flagsInfographic}
          alt="Two-column infographic of green flags and red flags in a functional medicine practice, with green flags including published prices and verifiable licensure and red flags including promises of cure and diagnosing adrenal fatigue"
          caption="No single flag is proof. A pattern of them tells you what you need to know."
        />
        <P>
          The seven questions give you answers. This section gives you a faster screen, for when you
          are reading a website or watching a first call and want to know what to notice. Remember
          that no single flag settles anything. Look for patterns.
        </P>
        <H3>Green flags</H3>
        <UL>
          <li>
            <strong>Published prices.</strong> A practice that tells you what it costs before you
            book is showing respect for your decision.
          </li>
          <li>
            <strong>A license you can look up.</strong> The practitioner readily gives you the
            license and credential information.
          </li>
          <li>
            <strong>Candor about evidence.</strong> They tell you what is well established, what is
            uncertain, and what is mostly hope.
          </li>
          <li>
            <strong>Acknowledging the limits of testing.</strong> They explain that a test result is
            a piece of information, not a verdict.
          </li>
          <li>
            <strong>Referral for red flags.</strong> They tell you when to see a conventional
            clinician and whether they coordinate.
          </li>
          <li>
            <strong>Current screening.</strong> They ask about mammograms, colon screening, and
            other routine care.
          </li>
          <li>
            <strong>A short list to start.</strong> They begin with a few changes, not twenty.
          </li>
          <li>
            <strong>Room for "no."</strong> You can decline a test or a product without penalty.
          </li>
        </UL>
        <H3>Red flags</H3>
        <UL>
          <li>
            <strong>Promises to cure or "reverse" everything.</strong> Real medicine uses
            probabilities and honest limits.
          </li>
          <li>
            <strong>Diagnosing "adrenal fatigue."</strong> This signals that the practice relies on
            a diagnosis that endocrinology does not recognize.
            <C n={[19, 20]} />
          </li>
          <li>
            <strong>A long supplement list at the first visit.</strong> Especially if each product
            is not tied to a goal.
          </li>
          <li>
            <strong>Pressure to prepay large packages</strong> or a countdown timer on a "special
            offer."
          </li>
          <li>
            <strong>Discouraging screening or standard care,</strong> including mammograms, or
            characterizing your doctors as the enemy.
          </li>
          <li>
            <strong>Large test batteries with no plan,</strong> or tests whose results cannot change
            what happens next.
          </li>
          <li>
            <strong>Treating a normal test as a failure of the test.</strong> Not every symptom has
            a laboratory signature.
          </li>
          <li>
            <strong>Dismissing all of your previous clinicians wholesale,</strong> which is a way of
            creating dependency.
          </li>
          <li>
            <strong>Fear-based marketing.</strong> "Everyone has this and does not know it" is a
            sales line, not an observation.
          </li>
          <li>
            <strong>Treating prolonged antibiotics for lingering symptoms as routine.</strong>{" "}
            Guidelines recommend against it.
            <C n={22} />
          </li>
        </UL>
        <P>
          Use these as a conversation starter, not a verdict. If you see several red flags and few
          green ones, trust that. If you see mostly green flags and one or two yellow ones, ask
          about them directly. You are entitled to a practice that makes you feel safe asking.
        </P>
      </section>

      {/* Section 23 */}
      <section id="how-we-answer-these-questions">
        <H2>How We Answer These Questions</H2>
        <Fig
          src={npVideoImg}
          alt="A nurse practitioner in her 50s at a desk in a warm home office in Grand Rapids, Michigan smiling slightly while looking at a laptop video call with a bookshelf behind her"
          caption="Hold us to the same standard you would apply to any other practice."
        />
        <P>
          It would be unfair to give you seven questions and then decline to answer them myself.
          Here is how Novaleo Weight and Wellness answers each, based on our published information,
          with the caveat that the best test of any claim is to ask us directly on a call and to
          check what we tell you.
        </P>
        <H3>License and certifications</H3>
        <P>
          I am a board-certified nurse practitioner with the NP-C credential, I have more than
          twenty years of experience in clinical healthcare, and I am certified in medical weight
          management. Novaleo provides telehealth care to women in Michigan and Wisconsin, and you
          can verify licensure through each state's licensing authority using the steps above. Our{" "}
          <SL to="/about">about page</SL> has the details.
        </P>
        <H3>If your tests are normal</H3>
        <P>
          A normal result does not end the conversation, and it also does not mean we keep searching
          until something looks abnormal. It means we look at the rest of the picture: sleep, food,
          movement, stress, hormonal timing, medications, and other explanations, and we agree on
          what to change, how long to wait, and when to recheck. If the picture points to something
          that belongs with another clinician, we refer you to one.
        </P>
        <H3>Standard tests and specialty tests</H3>
        <P>
          Our Root Cause Lab Panel consists of standard laboratory tests, as listed in the testing
          section. We also use some specialty tests selectively, and our free guide names two, the
          DUTCH hormone-metabolite test and the GI-MAP stool test. Our guides to MRT testing, leaky
          gut testing, and gut health explain the limits of the evidence for those tests, and I
          would ask you to read them as seriously as the parts that make the case for them. I do not
          use food IgG panels or serum zonulin as diagnostic tests, and I do not diagnose "adrenal
          fatigue."
        </P>
        <H3>How we decide whether something is working</H3>
        <P>
          We set goals at the start, which might include sleep, energy, weight, cycle changes,
          digestive symptoms, or specific lab values, and we review them at follow-up visits. The
          Root Cause Restoration Program is structured around four areas: nutrition and blood sugar
          stability, sleep and circadian rhythm, stress and nervous system regulation, and movement
          and metabolic strength. Each of those areas has evidence behind it, as the lifestyle
          section above explains, and each can be tracked.
        </P>
        <H3>What we sell</H3>
        <P>
          The program lists supplement recommendations and nutrition guidance among its components.
          Ask us, before you pay, whether you must purchase anything through us and whether anyone
          receives any compensation for a recommendation. I will answer directly, and you should
          walk away from any practice, including ours, that will not.
        </P>
        <H3>When we refer you out</H3>
        <P>
          Red-flag symptoms, overdue screening, and findings that need a specialist go to
          conventional care, and we encourage every patient to keep their primary care relationship
          in place. The guides on this site list the red flags that call for conventional evaluation
          in each area, and this article's earlier section lists them for the whole body.
        </P>
        <H3>Cost and refunds</H3>
        <P>
          Our fees are published on our <SL to="/functional-medicine-cost">cost page</SL>: a free
          assessment call, a $47 Clarity Session, a $97 Root Cause Intake, a $454 Root Cause Lab
          Panel, and a $3,995 six-month program limited to four clients at a time. We do not accept
          insurance, and we accept FSA and HSA cards as well as credit and debit cards. Our terms
          state that all sales are final and that no refunds are issued, so please read them before
          booking and ask any question that is not clear.
        </P>
        <H3>What we are not</H3>
        <P>
          We are not a replacement for your primary care clinician, we are not an emergency service,
          we are not an insurance-covered practice, and we do not claim that functional medicine has
          been proven as a complete model of care. We offer time, thorough evaluation,
          evidence-based lifestyle treatment, and thoughtful use of testing, and we try to be honest
          about everything beyond that. If that is what you are looking for, you can start with a{" "}
          <SL to="/book-free-assessment-call">free assessment call</SL>, or with a{" "}
          <SL to="/clarity-session">Clarity Session</SL> if you prefer a longer first conversation.
        </P>
        <Cta
          heading="Hold us to the seven questions"
          body="Book a free assessment call and ask us every question in this guide. If our answers do not satisfy you, you will have lost nothing and learned a lot."
        />
      </section>

      {/* Section 24 */}
      <section id="four-women-four-outcomes">
        <H2>Four Women, Four Outcomes</H2>
        <Fig
          src={fourWomenImg}
          alt="Four women in their 40s and 50s sharing coffee on the porch of a cabin in Door County, Wisconsin in early autumn, laughing and talking under wool blankets"
          caption="Four composite stories. The same label on the door can lead to very different experiences."
        />
        <P>
          The principles in this guide can feel abstract, so here are four composite stories, each
          assembled from patterns I have seen and none describing a real individual. The names,
          towns, and details are invented. They are intentionally different in how they turned out,
          because the honest answer to "is functional medicine legit?" is that the outcome depends
          on the practice, the patient, and the problem.
        </P>
        <H3>Marlene, 51, Grand Rapids: the long supplement list</H3>
        <P>
          Marlene is the woman from the beginning of this guide. After fourteen months, she is
          taking eleven supplements, has spent close to $2,400, and cannot say which of them is
          doing anything. Her sleep has improved, her weight has not moved, and her
          gastroenterologist was unmoved by her stool report.
        </P>
        <P>
          When she brought everything, bottles, results, and receipts, to a new clinician, the
          clinician did something simple. They went through the list one product at a time and asked
          the three questions: what is it for, how will we know if it is working, and what happens
          if it is not. For seven of the eleven, no one could give a clear answer. Those were
          paused, one or two at a time, over several weeks. The two with a documented rationale,
          vitamin D in a woman who had a measured deficiency and iron for a low ferritin, were kept.
          The clinician also noticed that her sleep had improved around the same time she had
          stopped drinking coffee after noon and begun a consistent bedtime, which had been part of
          the first plan. The supplements were not the likeliest explanation.
        </P>
        <P>
          Marlene did not conclude that the first practice was a scam. She concluded that the first
          practice had given her time and attention she valued, and had also sold her more than she
          needed. Her monthly cost fell by more than half. Her next step was a conversation, which
          she had avoided for two years, about whether her irregular cycles and sleep changes were
          perimenopause. What she learned from the experience was to ask what each thing was for
          before she paid for it.
        </P>
        <H3>Teresa, 44, Madison: the heavy periods</H3>
        <P>
          Teresa went to a functional medicine practice for fatigue, brain fog, and hair shedding.
          She was thoughtful about her choices and had done her reading. The practitioner took a
          detailed history, ordered a broad but standard panel, and found a very low ferritin and
          mildly low hemoglobin. In the history, Teresa had mentioned that her periods had become
          very heavy over the past year, with clots, and that she had been soaking through
          protection every couple of hours.
        </P>
        <P>
          The practitioner did what a good one does. They told her that heavy bleeding with iron
          deficiency needed a gynecologic evaluation, not a supplement plan. They wrote a letter to
          her primary care provider, helped her get an appointment, and asked for the results. The
          workup found a structural cause that was treated conventionally. Her ferritin was repleted
          under the guidance of her gynecologist, and her fatigue and hair shedding improved over
          several months.
        </P>
        <Fig
          src={phoneImg}
          alt="A woman in her 50s speaking on the phone at a kitchen island in a Madison, Wisconsin home, writing notes on a pad with a calendar on the wall behind her"
          caption="A good practice knows when the right next call is to someone else."
        />
        <P>
          This is the best-case version of the model: a long history revealed what a short visit
          might have missed, and the practitioner had the integrity to refer instead of treating.
          The long conversation was the valuable part, and the right referral was the thing that
          fixed the problem. Notice that the improvement did not come from a specialty test or a
          proprietary protocol.
        </P>
        <H3>Joan, 56, Marquette: the Lyme diagnosis</H3>
        <P>
          Joan lives in the Upper Peninsula, loves to be outdoors, and had a tick bite some years
          earlier that she remembers vaguely. She has been tired for a long time, with aching
          joints, poor sleep, and low mood. A practitioner she found online told her, after a
          nonstandard test, that she had chronic Lyme disease, and put her on a prolonged course of
          antibiotics along with a series of supplements. Three months in, she felt worse:
          persistent diarrhea, more fatigue, and new anxiety about whether she would ever recover.
        </P>
        <P>
          A friend who is a nurse urged her to get a second opinion at an academic medical center.
          The infectious disease clinician reviewed her records and explained that the standard
          guidance recommends against additional antibiotic therapy for persistent nonspecific
          symptoms in the absence of objective evidence of ongoing infection, and that in one
          systematic study more than half of the people given a chronic Lyme diagnosis turned out to
          have other specific disorders.
          <C n={22} /> A sleep study found significant sleep apnea. Her mood symptoms, which had
          been dismissed as part of "the infection," were evaluated and treated. Her joint pain was
          assessed and found to be consistent with osteoarthritis and menopause-related changes
          rather than infection.
        </P>
        <P>
          Joan's symptoms were real the whole time. What changed was that they were finally pursued
          with standard tools. She also learned that a long drive to an academic center was worth it
          for a second opinion, and that telehealth follow-up with a clinician who coordinated with
          that center made ongoing care manageable from home.
        </P>
        <H3>Priya, 41, Milwaukee: when it works</H3>
        <P>
          Priya came to a functional practice with fatigue, trouble sleeping, shorter cycles, mood
          changes, and a family history of thyroid disease. The first visit lasted ninety minutes.
          The clinician reviewed her history, ordered standard thyroid tests including antibodies,
          ferritin, a metabolic panel, and a lipid panel, and asked about her mammogram and routine
          screening, which she was due for. She was offered a short list: a sleep routine drawn from
          CBT-I principles, a strength routine she could do at home, dietary changes, vitamin D
          based on a measured low value, and a plan to recheck in twelve weeks. She was told which
          tests the practice would not order and why, and given the full cost of the plan in
          writing.
        </P>
        <P>
          At twelve weeks, her sleep had improved, her energy was better, her cycle pattern was
          clearer, and her thyroid antibody result was being followed by her primary care clinician
          as well. She had her mammogram. She had a clear sense of what she would do if things
          changed.
        </P>
        <P>
          I include Priya not as a promise that this will happen to you, but as a picture of what a
          well-run version looks like: standard tests, a short list, a measurable plan, an honest
          price, current screening, and coordination with her other clinician. And even in her case,
          I would be cautious about crediting any single part of the plan. The time, the structure,
          and the sense of being taken seriously all contributed, as the Kaptchuk trial would
          predict.
          <C n={6} />
        </P>
        <H3>What the four stories teach</H3>
        <UL>
          <li>
            <strong>The label does not predict the experience.</strong> Marlene and Priya both saw
            "functional medicine" practices, and the quality of their care differed.
          </li>
          <li>
            <strong>The best moments are often not exotic.</strong> Teresa's turning point was a
            good history and an appropriate referral. Priya's was a short, measurable plan.
          </li>
          <li>
            <strong>The worst moments involve overconfidence.</strong> Joan's harm came from an
            unvalidated diagnosis and a treatment that guidelines advise against.
            <C n={22} />
          </li>
          <li>
            <strong>Second opinions are a feature.</strong> In all four stories, a conventional
            clinician helped, and in two of them a second opinion changed the plan.
          </li>
          <li>
            <strong>You can recover from a wrong turn.</strong> Marlene and Joan both made costly
            detours and both ended up better because they were willing to ask hard questions.
          </li>
        </UL>
      </section>

      {/* Section 25 */}
      <section id="preparing-for-a-first-visit">
        <H2>Preparing for a First Visit With Any Practice</H2>
        <Fig
          src={folderImg}
          alt="A woman organizing a folder of lab printouts and a handwritten supplement list on a desk with colored sticky tabs and a pen in afternoon light"
          caption="An organized folder helps any clinician, conventional or functional, see you more clearly."
        />
        <P>
          You will get more from any first visit, with any clinician, if you walk in prepared. The
          preparation also protects you, because it gives you the information to judge what you are
          being told. Here is the checklist I give women who book with us, which works equally well
          anywhere.
        </P>
        <H3>Gather</H3>
        <UL>
          <li>
            <strong>A one-page timeline.</strong> When did each symptom begin? What changed around
            then, such as a move, a loss, a pregnancy, an illness, a medication, or a life stress?
            What have you already tried?
          </li>
          <li>
            <strong>Every medication and supplement you take,</strong> with doses. Bring the
            bottles, or take clear photos of the labels.
          </li>
          <li>
            <strong>Recent lab results</strong> from the past two or three years, especially thyroid
            tests, blood counts, iron studies, and lipid and glucose results, so you do not pay to
            repeat them.
          </li>
          <li>
            <strong>Family history</strong> of thyroid disease, autoimmune disease, early menopause,
            heart disease, osteoporosis, and cancers.
          </li>
          <li>
            <strong>Your screening dates:</strong> the most recent mammogram, colorectal screening,
            cervical screening, and bone density test if you have had one.
          </li>
          <li>
            <strong>Your cycle history,</strong> if you are still menstruating, including changes in
            length, heaviness, and regularity.
          </li>
        </UL>
        <H3>Decide</H3>
        <UL>
          <li>
            <strong>Your top two goals.</strong> What would "better" look like in practical terms?
            Sleeping through the night? Getting through a workday without a crash? Fewer hot
            flashes?
          </li>
          <li>
            <strong>Your budget ceiling,</strong> including a number for supplements and a number
            for testing, and a point at which you will pause and reassess.
          </li>
          <li>
            <strong>Your non-negotiables.</strong> Perhaps you do not want to start a medication, or
            you want to keep your primary care provider involved.
          </li>
        </UL>
        <H3>Ask</H3>
        <P>
          Bring the seven questions from earlier. Add any specific questions about your situation,
          and write the answers down. If the clinician is using a term you do not know, ask them to
          explain it. Good clinicians welcome this.
        </P>
        <H3>After the visit</H3>
        <OL>
          <li>Ask for the plan in writing, including each recommendation and its purpose.</li>
          <li>Ask for copies of all test results and the reasoning behind any specialty tests.</li>
          <li>
            Share the plan with your primary care clinician, especially if it includes a
            prescription.
          </li>
          <li>Start with one or two changes, not everything at once.</li>
          <li>Schedule the review in your calendar, with the three questions ready.</li>
        </OL>
      </section>

      {/* Section: Talking with your primary care clinician */}
      <section id="talking-with-your-primary-care-clinician">
        <H2>Talking With Your Primary Care Clinician About Your Plan</H2>
        <Fig
          src={handPlanImg}
          alt="A woman in her late 40s in a primary care office handing a printed one-page summary to her physician while both lean in and collaborate in a calm, respectful exchange"
          caption="A one-page summary makes it easier for any two clinicians to work on the same side."
        />
        <P>
          Many women feel awkward telling their regular doctor that they are also working with a
          functional medicine practice. They worry about being judged, or about the conversation
          becoming a debate. That reluctance is understandable, and it is also costly, because the
          best protection you have against an unnecessary test, a risky supplement interaction, or a
          missed diagnosis is two clinicians who know what the other is doing. Here is how to make
          the conversation easier.
        </P>
        <H3>Why it matters</H3>
        <P>
          Your primary care clinician is the one who knows your long-term history, manages your
          prescriptions, orders your screening, and will see you in an emergency. A functional
          medicine clinician may know you in more detail on a given day but, in many practices, sees
          you less often and may not have your full records. When they do not communicate, you
          become the messenger, and important details can fall through the gaps: a new supplement
          that interacts with a medication, a lab value that deserved a follow-up, or a screening
          that has not been done.
        </P>
        <H3>What to bring and what to say</H3>
        <P>
          The simplest tool is a one-page summary. It should fit on a single sheet and include the
          following.
        </P>
        <UL>
          <li>
            <strong>Why you sought additional care,</strong> in one or two sentences, for example "I
            wanted more time to look at my fatigue, sleep, and cycle changes."
          </li>
          <li>
            <strong>What was tested and the results,</strong> including any specialty tests, with
            copies of the reports attached.
          </li>
          <li>
            <strong>Every medication and supplement you now take,</strong> with doses and start
            dates.
          </li>
          <li>
            <strong>What the plan is,</strong> in simple bullets, with the purpose and the review
            date of each component.
          </li>
          <li>
            <strong>The questions you would like your primary care clinician's input on.</strong>
          </li>
        </UL>
        <P>
          Then say something like this: "I am working with another practice on some of these
          symptoms. I want to keep you informed and I value your opinion. Could you look at this
          plan and tell me if anything concerns you, and let me know if there are tests you would
          want that I have not had?" That language invites collaboration instead of a verdict, and
          it gives your clinician an easy way to say yes.
        </P>
        <H3>If your clinician has concerns</H3>
        <P>
          Listen. A primary care clinician who is skeptical of a specific test or supplement may be
          right, and some of their concerns, such as those about IgG food panels or serum zonulin,
          are supported by professional societies and published studies.
          <C n={[11, 12, 13]} /> Ask what specifically concerns them, what evidence they would point
          to, and what they would suggest instead. If their objection is to the whole field, rather
          than to a specific item, you can ask them to focus on the parts of the plan that raise
          safety questions, since those are the ones that matter most.
        </P>
        <P>
          You can also take their concerns back to the other practice and ask for a response. A good
          functional medicine clinician will engage with a thoughtful objection, and if they will
          not, you have learned something.
        </P>
        <H3>If your clinician is dismissive</H3>
        <P>
          The reverse can happen too. A primary care clinician may wave away your concerns, refuse
          to look at your results, or discourage you from pursuing anything outside the conventional
          path. That response is not helpful, and it is one of the reasons many women look
          elsewhere. You are allowed to calmly ask them to review the plan for safety, to ask for
          the standard tests they would recommend, and to request a referral if your problem is
          outside their scope. If you do not feel heard, you can seek another primary care
          clinician. The goal is a partnership in which both sides take your symptoms seriously and
          are honest about what they do not know.
        </P>
        <H3>Keep screening and prescriptions in one place</H3>
        <P>
          As a rule, keep screening mammograms, colorectal screening, cervical screening, and bone
          density tests coordinated through your primary care clinician or the relevant specialist,
          because they are the ones who will follow up on abnormal results.
          <C n={[35, 36]} /> Keep prescription management clear as well. If more than one clinician
          prescribes for you, make sure each knows the others' prescriptions, and make sure your
          pharmacist has the complete list. At Novaleo, we encourage every patient to bring recent
          results from their primary care clinician and to share our plans with them, and our{" "}
          <SL to="/approach">approach page</SL> describes how care is coordinated.
        </P>
      </section>

      {/* Section 26 */}
      <section id="a-30-day-plan-to-evaluate-a-practice">
        <H2>A 30-Day Plan to Evaluate a Practice</H2>
        <Fig
          src={sunroomImg}
          alt="A woman journaling in a bright sunroom with a planner open on her lap while snow falls outside large windows in Michigan, with a cup of tea beside her"
          caption="Thirty days is enough to judge whether a practice is honest, organized, and a good fit."
        />
        <P>
          A first month is long enough to tell a great deal about a practice, and short enough that
          you have not committed much. Here is a simple plan that you can use with any practice,
          including ours, to decide whether to continue.
        </P>
        <H3>Week 1: Check before you pay</H3>
        <UL>
          <li>
            Verify the clinician's license through the Michigan or Wisconsin licensing authority.
            <C n={[37, 38]} />
          </li>
          <li>Read the price list, the refund policy, and any terms you are asked to sign.</li>
          <li>Ask the seven questions, ideally in writing.</li>
          <li>Decide your budget ceiling and write it down.</li>
        </UL>
        <H3>Week 2: The first visit</H3>
        <UL>
          <li>Bring your folder and your questions.</li>
          <li>
            Notice how you are treated: Are you given time? Are you interrupted? Do you feel judged?
          </li>
          <li>
            Notice what you are offered: a short list or a long one? Standard tests or exotic ones?
          </li>
          <li>Leave with a written plan and a cost estimate.</li>
        </UL>
        <H3>Week 3: Try it, one change at a time</H3>
        <UL>
          <li>
            Start the first one or two changes. Keep a simple log of symptoms, sleep, and energy.
          </li>
          <li>Hold off on additional products until you can tell what the first changes did.</li>
          <li>Share the plan with your primary care clinician.</li>
        </UL>
        <H3>Week 4: Review and decide</H3>
        <UL>
          <li>Score the practice using the scorecard below.</li>
          <li>Decide whether to continue as planned, modify the plan, or stop.</li>
          <li>If you continue, set a 90-day review with measurable goals.</li>
        </UL>
        <H3>The scorecard</H3>
        <Table
          head={["Criterion", "Question to ask yourself", "Score 1 to 5"]}
          rows={[
            [
              "Honesty",
              "Did the practitioner tell me what is uncertain, including about their own tests?",
              "",
            ],
            [
              "Clarity",
              "Can I explain what each part of my plan is for, and how we will know it is working?",
              "",
            ],
            ["Safety", "Did they ask about red flags, screening, and my other clinicians?", ""],
            ["Value", "Does the cost match what I received, and was it what I was told?", ""],
            ["Respect", "Did I feel heard, and could I say no without pressure?", ""],
          ]}
        />
        <P>
          If the total is high, you have probably found a good practice, and you can continue with a
          clear plan and a budget. If the total is low, or if any single answer is a firm "no" on
          safety or honesty, trust that and move on. You have spent a month and a modest amount of
          money, and you have learned what you need. That is a good trade.
        </P>
      </section>

      {/* Section 27 */}
      <section id="myths-on-both-sides">
        <H2>Myths on Both Sides</H2>
        <Fig
          src={listImg}
          alt="A woman's hand crossing items off a handwritten list with a pen on a wooden table beside a coffee mug"
          caption="Some beliefs deserve to be crossed off the list, whichever side of the debate they come from."
        />
        <P>
          Debates about functional medicine generate myths in both directions. Here are twelve, with
          the corrections.
        </P>
        <H3>Myth 1: "Functional medicine is all pseudoscience."</H3>
        <P>
          It is not. Much of what it does, from nutrition and exercise to sleep and stress
          management, is evidence-based, as even its critics acknowledge.
          <C n={5} /> The legitimate criticism is aimed at specific tests, diagnoses, and the lack
          of validation for the model as a whole, not at lifestyle treatment itself.
        </P>
        <H3>Myth 2: "Cleveland Clinic studies prove it works."</H3>
        <P>
          They do not. The cohort study found a modest early benefit that was not significant at
          twelve months in a nonrandomized design,
          <C n={1} /> and the randomized pilot found no significant difference from usual care in
          type 2 diabetes.
          <C n={2} /> The studies are encouraging as a start, and they are not proof.
        </P>
        <H3>Myth 3: "Conventional doctors do not care about root causes."</H3>
        <P>
          Most do. They are working inside a system that gives them 18 minutes per visit.
          <C n={7} /> The failure is usually structural, not moral, and many conventional clinicians
          practice thoughtful, whole-person medicine.
        </P>
        <H3>Myth 4: "If my labs are normal, nothing is wrong."</H3>
        <P>
          Normal results are valuable and often reassuring, but many real symptoms, including some
          caused by hormonal transitions, sleep disorders, and depression, do not have a laboratory
          signature. Being told your labs are normal does not mean your symptoms are imaginary.
        </P>
        <H3>Myth 5: "More tests mean better care."</H3>
        <P>
          The reverse can be true. Low-value testing and care cascades are recognized problems, and
          a test is only useful if its result can change what happens next.
          <C n={5} />
        </P>
        <H3>Myth 6: "Natural supplements are safe."</H3>
        <P>
          Natural does not mean safe. Dietary supplements are associated with an estimated 23,000
          emergency department visits a year in the United States,
          <C n={25} /> and supplement-related liver injury accounts for about 20 percent of
          drug-induced liver injury cases.
          <C n={26} /> They are regulated after reaching the market, not before.
          <C n={27} />
        </P>
        <H3>Myth 7: "A practitioner with more letters after their name is better."</H3>
        <P>
          Letters are not quality. Some credentials are board certifications, some are licenses, and
          some are training certificates. Ask what each one means, and focus on the license and the
          conduct.
        </P>
        <H3>Myth 8: "If insurance does not cover it, it must be a scam."</H3>
        <P>
          Insurance coverage is determined by payment systems, not only by evidence. Many valuable
          services are not covered. That said, the absence of insurance review means you need to
          scrutinize cost and value more carefully yourself.
        </P>
        <H3>Myth 9: "Leaky gut is made up."</H3>
        <P>
          Intestinal permeability is a real physiological concept with a real research literature.
          What is shaky is the commercial blood test marketed to diagnose it, which a 2019 study
          found was not detecting actual zonulin.
          <C n={13} /> The concept and the test are different questions.
        </P>
        <H3>Myth 10: "Adrenal fatigue is real because I feel exhausted."</H3>
        <P>
          Your exhaustion is real. The diagnosis of "adrenal fatigue" is not recognized, and a
          systematic review concluded there is no substantiation for it.
          <C n={19} />
          <C n={20} /> Exhaustion deserves a proper workup for the many treatable conditions that
          can cause it.
        </P>
        <H3>Myth 11: "I should avoid conventional medicine entirely."</H3>
        <P>
          Please do not. Screening, emergency care, infectious disease management, and surgical and
          specialist care are areas where conventional medicine is strongest. The best outcomes
          usually come from using both sides well.
        </P>
        <H3>Myth 12: "I feel better, so the protocol worked."</H3>
        <P>
          Feeling better is the goal, but it does not prove which part of the plan helped. Warmth,
          attention, and a trusting relationship are powerful in their own right,
          <C n={6} /> and the improvement may also reflect time and natural fluctuation. This is why
          unbundling a plan is worthwhile.
        </P>
        <Fig
          src={dinerImg}
          alt="Two women friends in their 40s in a diner booth in Wisconsin, one showing the other something on her phone, with coffee and pie on the table"
          caption="Friends are one of the most powerful sources of health advice, for better and worse. Share this checklist with the ones who ask."
        />
      </section>

      {/* Section 28 */}
      <section id="what-the-research-cannot-tell-us">
        <H2>What the Research Cannot Tell Us</H2>
        <Fig
          src={lighthouseImg}
          alt="A lighthouse on the shore of Lake Michigan emerging from morning fog over calm water in soft gray and gold light"
          caption="Some questions are still in the fog. Naming them honestly is part of practicing honestly."
        />
        <P>
          A guide that claims certainty about a field this young would be dishonest, so let me end
          the substantive part of this article by naming what we do not know.
        </P>
        <H3>We do not know whether the model as a whole improves hard outcomes</H3>
        <P>
          The studies I reviewed measure patient-reported quality of life, glycemic markers, and
          symptoms. We do not have trials showing that a functional medicine model reduces heart
          attacks, fractures, hospitalizations, or mortality compared with usual care. Such trials
          would be large, long, and expensive, and they have not been done in this field as far as I
          am aware.
        </P>
        <H3>We do not know which components matter</H3>
        <P>
          When a woman improves, which part helped? The long conversation, the lifestyle plan, the
          supplements, the tests, the sense of control, or simple passage of time? A well-designed
          trial would dismantle the model into its components and test them. The coaching trial is a
          small step in that direction.
          <C n={3} /> It found that both groups improved on an elimination diet, which suggests that
          the behavior itself may carry much of the benefit.
        </P>
        <H3>We do not know how much practices vary</H3>
        <P>
          Because the term is unprotected, the quality of functional medicine practices varies
          enormously. A study of a single academic center's program tells us little about a
          strip-mall clinic selling a proprietary supplement line, and vice versa. Averages hide a
          lot.
        </P>
        <H3>We do not know how well the findings apply to midlife women in particular</H3>
        <P>
          The best-known cohort included many women and was older on average, with a mean age of 54,
          <C n={1} /> and the randomized pilot was in older adults with diabetes.
          <C n={2} /> There is a pilot in middle-aged women,
          <C n={4} /> but we lack a randomized trial of a functional medicine approach for the
          symptoms most of my patients bring, such as perimenopausal sleep disruption, fatigue, and
          weight change. That is a research gap, and I would be glad to see it filled.
        </P>
        <H3>What better research would look like</H3>
        <UL>
          <li>
            <strong>Randomized, pragmatic trials</strong> comparing functional medicine care with
            usual care in midlife women, with pre-registered outcomes.
          </li>
          <li>
            <strong>Component studies</strong> that separate the effects of time and relationship,
            lifestyle coaching, standard testing, specialty testing, and supplements.
          </li>
          <li>
            <strong>Longer follow-up,</strong> at least twelve to twenty-four months, with attention
            to cost and to harms.
          </li>
          <li>
            <strong>Independent replication</strong> outside the programs that developed the model.
          </li>
          <li>
            <strong>Transparent reporting</strong> of null results as well as positive ones.
          </li>
        </UL>
        <H3>The honest bottom line</H3>
        <P>
          As of November 2026, the best reading of the evidence is that functional medicine is an
          unproven model whose strongest components are shared with mainstream medicine and whose
          most distinctive components, its specialty tests and diagnostic constructs, are the least
          well supported. It deserves to be tested, not dismissed or celebrated. In the meantime,
          the most reliable way to protect yourself is to evaluate the specific practice, the
          specific claim, and the specific cost, using the tools in this guide. Recommendations and
          regulations change, so confirm current details with your clinician and with the official
          sources listed in the references.
        </P>
      </section>

      {/* Section 29: FAQ */}
      <section id="comprehensive-faq">
        <H2>Comprehensive FAQ: Your Questions Answered</H2>
        <Fig
          src={porchSwingImg}
          alt="A woman in her late 40s on a porch swing in Michigan in autumn holding a phone and a mug, looking thoughtful with maple trees and golden light behind her"
          caption="Questions we hear most often from women in Michigan and Wisconsin."
        />
        <div className="space-y-8">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="text-xl md:text-2xl font-display text-primary mb-3">{f.q}</h3>
              <p className="text-lg leading-relaxed text-foreground/85">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 30: Glossary */}
      <section id="glossary">
        <H2>Glossary</H2>
        <P>Plain-language definitions for the terms used in this guide.</P>
        <dl className="space-y-4 text-lg leading-relaxed text-foreground/85">
          {glossary.map((g) => (
            <div key={g.term}>
              <dt className="font-display text-primary">{g.term}</dt>
              <dd className="text-foreground/80">{g.def}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Section 31: Closing */}
      <section id="closing-katies-note">
        <H2>A Personal Note from Katie</H2>
        <Fig
          src={dockImg}
          alt="A woman in her 50s standing on a wooden dock at sunrise on Lake Michigan wrapped in a cardigan and looking out over calm water"
          caption="Whatever you decide, decide it with your eyes open."
        />
        <P>
          If you have read all the way to here, you have read more about functional medicine than
          most people who practice it. I did not write it this way to defend my profession, and I
          did not write it to attack it. I wrote it because of the woman at the kitchen table at
          10:40 on a Tuesday night, typing a question into a search bar that she was afraid to say
          out loud.
        </P>
        <P>
          I have been that woman. I know what it is like to be tired in a way that sleep does not
          touch, to be told everything looks normal, and to wonder whether the problem is you. That
          experience is a large part of why I do this work, and it is also why I think I owe you the
          most uncomfortable version of the truth. The truth is that a field built to listen to
          women who were not being heard has also, at times, taken advantage of the very fact that
          they were desperate to be heard. Both things are real. A good practice holds both in mind.
        </P>
        <P>
          I want you to leave this guide with three things. The first is a way of thinking: unbundle
          the label, grade each claim, and ask what it is for, how you will know, and what happens
          if it does not work. The second is a set of tools: the seven questions, the green and red
          flags, the verification steps, the cost worksheet, and the thirty-day plan. The third is
          permission. You have permission to ask a practitioner anything. You have permission to say
          no to a test or a product. You have permission to get a second opinion, to keep your
          regular doctor, and to leave a practice that makes you feel uneasy.
        </P>
        <P>
          I also want you to know what this guide cannot do. It cannot examine you. It cannot tell
          you whether the symptoms you are living with are perimenopause, a thyroid problem, sleep
          apnea, iron deficiency, or something else entirely. It cannot replace a clinician who
          knows your history, and it cannot guarantee that any practice, including mine, will be
          right for you. What it can do is help you walk into any consultation, with any clinician,
          as an informed and confident participant instead of a hopeful bystander.
        </P>
        <P>
          If you would like to ask me these questions yourself, I would be glad to hear them. You
          can book a <SL to="/book-free-assessment-call">free assessment call</SL>, learn how we
          work on our <SL to="/approach">approach page</SL>, or read more about the conditions we
          help with on our <SL to="/what-we-treat">conditions page</SL>. If we are not the right
          fit, I will tell you, and I will try to point you toward something that is. And if you
          want something to read next, our <SL to="/free-guide">free guide</SL> explains why so many
          women are told their labs are normal while still feeling unwell.
        </P>
        <P>With respect and warmth,</P>
        <P>
          <em>Katie</em>
        </P>
      </section>

      {/* Final CTA */}
      <section className="bg-primary rounded-2xl p-8 md:p-12 text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          Ready to Ask the Hard Questions?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          You have done the reading. Now bring your questions about evidence, credentials, and cost
          to a free assessment call. It is a low-pressure next step, not a commitment.
        </p>
        <Link to="/book-free-assessment-call" className="btn-gold text-lg px-8 py-4">
          Book Free Assessment Call
        </Link>
      </section>

      {/* References */}
      <section id="references" className="border-t border-foreground/10 pt-8 mt-4 mb-8">
        <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">
          References
        </p>
        <ol className="space-y-3 text-sm text-foreground/60">
          {refs.map((r) => (
            <li key={r.n} id={`ref-${r.n}`} className="scroll-mt-24">
              <span className="font-semibold text-foreground/70">[{r.n}]</span> {r.cite}{" "}
              <em>{r.journal}</em> {r.detail}{" "}
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                {r.label ?? "View source"}
              </a>
              {r.extra?.map((e) => (
                <span key={e.href}>
                  {" | "}
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    {e.label}
                  </a>
                </span>
              ))}
            </li>
          ))}
        </ol>
        <p className="text-sm text-foreground/60 mt-6">
          Information reflects the sources cited as of November 2026. Guidelines, regulations, and
          prices change, so confirm current details with your clinician, with the official state
          licensing boards, and with the original sources listed above. Some government and
          professional society websites block automated access; they are linked as published and
          open normally in a web browser.
        </p>
      </section>
    </BlogLayout>
  );
}

/* ---------- Data: FAQ (used for both the page and the FAQPage schema) ---------- */

const faqs: { q: string; a: string }[] = [
  {
    q: "Is functional medicine legit?",
    a: `It depends on what you mean by the question. Functional medicine is not a licensed profession or a recognized medical specialty, and the evidence for it as a complete model of care is early and mixed. But many of its core practices, including long appointments, careful histories, and lifestyle treatment, are evidence based, and a well-run practice can deliver real value. The most useful question is not whether the label is legitimate but whether a specific practice is licensed, honest about evidence, transparent about cost, and willing to refer you to conventional care when needed. A 2026 commentary by critics of the model still acknowledges that nutrition, exercise, sleep, and stress management are evidence based [5]. The same commentary says evidence validating functional medicine as a distinct diagnostic and therapeutic model remains limited [5].`,
  },
  {
    q: "Is functional medicine a real medical specialty?",
    a: `No. The American Board of Medical Specialties, whose 24 member boards certify physician specialists, lists 38 specialties and 90 subspecialties, and neither functional medicine nor integrative medicine appears among them [30]. There is no functional medicine license either. The people who practice it hold ordinary licenses, such as physician, nurse practitioner, physician assistant, dietitian, or others, and what they are allowed to do depends on that license and on state law. Training programs in functional medicine exist and can be valuable, but a training certificate is not a state license and not a specialty board certification.`,
  },
  {
    q: "Is functional medicine evidence based?",
    a: `Parts of it are and parts are not. Lifestyle treatment has strong evidence, such as the Diabetes Prevention Program, in which a structured lifestyle program reduced new type 2 diabetes by 58 percent compared with 31 percent for metformin [8]. Some of its tests and diagnoses have weak or negative evidence, including food IgG panels [11, 12], commercial serum zonulin assays [13], and the diagnosis of adrenal fatigue [19, 20]. Studies of the model as a whole are few and early: a retrospective cohort with a modest early benefit [1], a small randomized pilot with no significant difference [2], and a coaching trial with no difference in its primary analysis [3].`,
  },
  {
    q: "What did the Cleveland Clinic study actually find?",
    a: `The 2019 study in JAMA Network Open compared 1,595 patients at the Cleveland Clinic Center for Functional Medicine with 5,657 patients at family health centers. At six months, among 398 matched pairs, patient-reported physical health improved by 1.59 points in the functional medicine group versus 0.33 points in the family health group, a statistically significant difference [1]. At twelve months, the comparison was not significant [1]. It was a retrospective, nonrandomized study, so it cannot prove that the care caused the difference, and the authors called for prospective studies to confirm the findings [1].`,
  },
  {
    q: "Is functional medicine the same as integrative medicine?",
    a: `They are often confused but are not the same. A 2026 commentary in The American Journal of Medicine describes integrative medicine as an academic discipline that incorporates evidence-informed complementary practices within conventional standards of diagnosis and management, and functional medicine as a distinct clinical model built around root-cause assessment, specialized diagnostic constructs, and nonstandard laboratory testing [5]. In Michigan and Wisconsin, the flagship university health systems run academic integrative programs, such as UW Health's integrative health clinics in Madison [39] and Michigan Medicine's Integrative Family Medicine program in Ann Arbor [40]. Those are a different arrangement from an independent cash-pay functional medicine practice.`,
  },
  {
    q: "Who can practice functional medicine, and how do I verify a license?",
    a: `Anyone with a health license, and some without, can use the phrase, because it is not protected. That is why you should verify the underlying license. In Wisconsin, the Department of Safety and Professional Services offers a public credential look-up and a process for filing complaints [37]. In Michigan, the Department of Licensing and Regulatory Affairs handles license verification and complaints [38]. Check that the license is active, matches the profession claimed, and has no discipline. Then ask what each additional credential means, who awards it, and whether it is a license, a board certification, or a certificate of training. For telehealth, confirm that the clinician is licensed in the state where you are located during the visit.`,
  },
  {
    q: "Is functional medicine covered by insurance?",
    a: `Usually not. Most functional medicine practices, including ours, operate outside insurance on a cash-pay basis, which allows longer visits but places the full cost on the patient. The 2026 commentary flags substantial out-of-pocket costs as a source of inequity [5]. If cost is a concern, you can use your insurance for what it covers, such as primary care visits, screening, and standard laboratory tests ordered by your insurance-participating clinicians, and pay out of pocket only for the additional time and services you value. Ask any practice for an itemized estimate before you commit.`,
  },
  {
    q: "Can I use my HSA or FSA for functional medicine?",
    a: `Possibly for visits and laboratory testing, depending on your plan, but supplements are more restricted. The IRS states that you cannot include the cost of nutritional supplements, vitamins, or herbal supplements as medical expenses unless they are recommended by a medical practitioner as treatment for a specific medical condition diagnosed by a physician, because they are generally taken to maintain ordinary good health [29]. Expenses that are merely beneficial to general health do not qualify [29]. Your plan administrator makes the final determination, so check with them first. We accept FSA and HSA cards for our services.`,
  },
  {
    q: "How much does functional medicine cost?",
    a: `It varies widely, which is why you should get an itemized estimate before you commit. Costs usually include visits, laboratory testing, supplements, and sometimes a program fee. At Novaleo, fees are published: a free assessment call, a $47 Clarity Session, a $97 Root Cause Intake, a $454 Root Cause Lab Panel, and a $3,995 six-month program limited to four clients. We do not accept insurance, and our terms state that all sales are final. A useful exercise for any practice is to total the expected cost over six months, including follow-ups, repeat testing, and supplements, and to compare it with your budget.`,
  },
  {
    q: "Are the tests used in functional medicine reliable?",
    a: `It depends on the test. Standard tests, such as a thyroid panel, hemoglobin A1c, ferritin, and lipid panel, are widely used and well understood. Some specialty tests have significant limitations. Food-specific IgG testing is advised against by allergy and immunology organizations [11, 12]. Commercial serum zonulin assays were found not to detect actual zonulin [13]. Fasting insulin assays from different manufacturers disagree substantially, with among-assay variation of 12 to 66 percent in one comparison [14]. A good practice will tell you which of its tests are standard, which are specialty, and what a result can and cannot tell you.`,
  },
  {
    q: "Is adrenal fatigue real?",
    a: `Adrenal fatigue as a medical diagnosis is not recognized. A 2016 systematic review of 58 eligible studies concluded that there is no substantiation that it is an actual medical condition [19], and the Endocrine Society states that no scientific proof exists to support it [20]. Your exhaustion can be absolutely real, and real adrenal diseases such as primary adrenal insufficiency exist and are treatable [21]. The concern is that a made-up diagnosis can keep you from finding the real cause, which may be iron deficiency, thyroid disease, sleep apnea, depression, perimenopause, or something else.`,
  },
  {
    q: "Is leaky gut real?",
    a: `Increased intestinal permeability is a real physiological concept with an active research literature. The problem is the claim that a particular commercial blood test can diagnose it. A 2019 study found that commercial serum zonulin assays were not detecting actual zonulin but other proteins, and the authors advised caution in interpreting the measurement [13]. Symptoms that people attribute to leaky gut, such as bloating, fatigue, and food reactions, are real and deserve evaluation, but they have many possible causes. Our guide to testing for leaky gut explains the controversy in detail and the limits of what we can test.`,
  },
  {
    q: "Are IgG food sensitivity tests accurate?",
    a: `The leading allergy and immunology organizations advise against them. A European task force concluded in 2008 that testing for food-specific IgG4 is not recommended as a diagnostic tool, because the antibodies reflect exposure rather than causing reactions [11]. The American Academy of Allergy, Asthma and Immunology describes IgG food panels as a myth and recommends against using them to diagnose food allergies or intolerances [12]. If you suspect a food is causing symptoms, a structured elimination diet with careful reintroduction, ideally guided by a clinician or dietitian, is a commonly recommended alternative, and it is worth discussing with your own clinician.`,
  },
  {
    q: "Is chronic Lyme disease real?",
    a: `Lyme disease is real and common in Wisconsin, which reported a record 8,929 cases in 2025 [24]. Most people treated promptly with two to four weeks of antibiotics recover completely, though some have prolonged symptoms whose cause is unknown [23]. The 2020 guideline from the Infectious Diseases Society of America, the American Academy of Neurology, and the American College of Rheumatology recommends against additional antibiotic therapy for persistent nonspecific symptoms such as fatigue, pain, or cognitive impairment after treatment, in the absence of objective evidence of reinfection or treatment failure [22]. If you have lingering symptoms, they deserve a workup for other causes and supportive care. Be cautious about any plan that involves months of antibiotics.`,
  },
  {
    q: "Are supplements safe?",
    a: `Many are used safely, but they are not risk free and they are regulated differently from drugs. The FDA notes that firms are responsible for evaluating safety and labeling before marketing, and that the agency acts against adulterated or misbranded products after they reach the market [27]. A national analysis estimated about 23,000 emergency department visits a year related to supplement adverse events, with weight-loss and energy products especially implicated [25], and supplements account for about 20 percent of drug-induced liver injury cases in the United States [26]. Tell every clinician what you take, ask your pharmacist about interactions, and make sure each product has a clear purpose.`,
  },
  {
    q: "Should I stop seeing my regular doctor if I start functional medicine?",
    a: `No. Keep your primary care clinician, share your plan and results with them, and stay current with screening. The U.S. Preventive Services Task Force recommends colorectal cancer screening for average-risk adults from age 45 [35] and biennial mammography for women aged 40 to 74 [36], and blood panels do not replace either. The best results for many women come from combining both approaches, with each side checking the other. A practice that discourages you from seeing your doctor or from getting standard screening is a practice to leave.`,
  },
  {
    q: "When should I skip functional medicine and go to conventional care?",
    a: `For symptoms that could signal something urgent or serious: chest pain or pressure, shortness of breath, sudden weakness or trouble speaking, a sudden severe headache, unexplained weight loss, any bleeding after menopause, a new breast lump, blood in the stool, or thoughts of harming yourself. In the United States, you can call or text 988 at any time. A rash after a tick bite or a flu-like illness in tick season also deserves prompt conventional care. A good functional medicine practice will tell you the same on your first call.`,
  },
  {
    q: "How do I know if a functional medicine practice is trustworthy?",
    a: `Look at behavior, not the label. Green flags include published prices, a license you can look up, honesty about the limits of evidence, referral for red-flag symptoms, attention to current screening, a short list to start, and room to say no. Red flags include promises to cure everything, diagnosing adrenal fatigue, a long supplement list at the first visit, pressure to prepay large packages, discouraging standard care, large test batteries with no plan, and fear-based marketing. This article gives you seven questions to ask any practice and a thirty-day plan for evaluating one.`,
  },
  {
    q: "Can functional medicine help with perimenopause and menopause symptoms?",
    a: `A thoughtful clinician can help, because many women in these years are under-served in short conventional visits. Good care includes a careful history, appropriate testing, lifestyle treatment, and a candid discussion of options, including hormone therapy where appropriate, with attention to evidence and individual risk. The evidence for the functional medicine model specifically in perimenopause is limited, though a small pilot in middle-aged women reported improvements in stress, fatigue, and quality-of-life measures [4]. Our guides to perimenopause in your thirties, brain fog, hot flashes, and menopause after 50 go through the evidence in depth.`,
  },
  {
    q: "Is telehealth functional medicine as good as an in-person visit?",
    a: `For many parts of care, such as taking a history, reviewing results, building a lifestyle plan, and follow-up, telehealth works well and removes the barrier of distance. It cannot replace a physical examination, an imaging study, or emergency care, and a practice should be clear about what it will refer to in-person clinicians. Telehealth also matters in our region, where many women live far from specialists: as of December 2025, Michigan had 280 primary care shortage-area designations and Wisconsin 175 [32]. Confirm that the clinician is licensed in the state where you are located during the visit.`,
  },
  {
    q: "What happens at a first visit with Novaleo?",
    a: `You can start with a free assessment call to ask questions, a 30-minute Clarity Session at $47, or a 60-minute Root Cause Intake at $97. The intake covers your health history, current symptoms, lifestyle, nutrition, stress, sleep, and prior labs, and ends with a personalized starting plan. If testing is appropriate, the Root Cause Lab Panel at $454 includes written insights on your results. We encourage you to bring your recent labs, your medication and supplement list, and your questions, and to keep your primary care clinician informed.`,
  },
  {
    q: "What if I try it and it does not work?",
    a: `Then you should be able to say so and change course, and a good practice will help you do it. Before you start, agree on what success looks like and when you will review it, such as at thirty and ninety days. If the plan is not working, the options are to modify it, to stop components that lack a clear purpose, to seek a second opinion, or to end the relationship. Remember that our terms state that all sales are final, so check the refund policy of any practice in advance. Knowing the exit terms before you begin is part of choosing well.`,
  },
  {
    q: "How long should I give a plan before deciding?",
    a: `Long enough to judge, short enough to limit cost. For lifestyle changes such as sleep routines and strength training, many people need several weeks to notice changes. For laboratory markers, a recheck at about twelve weeks is common. A reasonable approach is a thirty-day check on how the practice treats you and a ninety-day check on whether the plan is moving your goals. If you see no measurable change at ninety days and no clear explanation for why, it is reasonable to revise the plan, get a second opinion, or stop.`,
  },
  {
    q: "Did you write this article to sell your services?",
    a: `I am a nurse practitioner who practices functional medicine, so I have an obvious conflict of interest, and I said so at the beginning of the article. That is why every factual claim is tied to a source listed in the references, why I included evidence that is unfavorable to the model, and why I described when not to use a practice like ours. You do not have to take my word for any of it. Read the sources, check the license of any clinician you consider, and ask the seven questions of everyone, including me.`,
  },
];

const glossary: { term: string; def: string }[] = [
  {
    term: "Functional medicine",
    def: "A clinical approach that emphasizes identifying and addressing underlying drivers of chronic symptoms through a long history, systems-based assessment, lifestyle treatment, and often specialty testing and supplements. It is not a licensed profession or a recognized medical specialty.",
  },
  {
    term: "Integrative medicine",
    def: "An academic discipline that combines conventional medicine with evidence-informed complementary approaches within standards of diagnosis and management. It is distinct from functional medicine in how its proponents and critics describe the two.",
  },
  {
    term: "Root cause",
    def: "The underlying driver of a symptom or condition. The term is useful for describing a search for treatable contributors but can overpromise when a condition has many causes.",
  },
  {
    term: "License",
    def: "A legal permission granted by a state to practice a profession. It defines what a clinician may do and can be looked up through the state licensing authority.",
  },
  {
    term: "Board certification",
    def: "A credential awarded by a certifying organization after an examination or equivalent demonstration of knowledge. It is different from both a license and a training certificate.",
  },
  {
    term: "ABMS",
    def: "The American Board of Medical Specialties, the organization whose 24 member boards certify physician specialists in the United States.",
  },
  {
    term: "NP-C",
    def: "A credential held by some board-certified nurse practitioners, awarded through national certification.",
  },
  {
    term: "Retrospective cohort study",
    def: "A study that looks back at existing records of groups of patients and compares outcomes. It can show associations but cannot prove that a treatment caused the difference.",
  },
  {
    term: "Propensity score matching",
    def: "A statistical method that pairs patients who are similar on measured characteristics so that groups can be compared more fairly in a nonrandomized study. It cannot account for characteristics that were not measured.",
  },
  {
    term: "Randomized controlled trial",
    def: "A study in which participants are randomly assigned to different treatments, which reduces the chance that differences between groups explain the results.",
  },
  {
    term: "Pilot study",
    def: "A small preliminary study designed to test feasibility and generate hypotheses. Its results are suggestive rather than conclusive.",
  },
  {
    term: "PROMIS",
    def: "The Patient-Reported Outcomes Measurement Information System, a set of standardized questionnaires used to measure aspects of health such as physical and mental function.",
  },
  {
    term: "T-score (PROMIS)",
    def: "A standardized score with an average of 50 in which 10 points represent one standard deviation, used to express patient-reported measures on a common scale.",
  },
  {
    term: "Nonspecific effects",
    def: "Improvements that come from the context of care, such as attention, warmth, expectation, and the clinician relationship, rather than from the specific treatment.",
  },
  {
    term: "Care cascade",
    def: "A chain of tests and treatments set off by an initial, often unnecessary or ambiguous, finding. Each step may seem reasonable, but the sequence can be costly and sometimes harmful.",
  },
  {
    term: "Low-value care",
    def: "Tests or treatments that are unlikely to benefit the patient given the evidence, or whose potential harms or costs outweigh their benefits.",
  },
  {
    term: "IgG food panel",
    def: "A blood test that measures immunoglobulin G antibodies to many foods. Allergy and immunology organizations advise against using it to diagnose food allergy or intolerance.",
  },
  {
    term: "MRT (Mediator Release Test)",
    def: "A blood test that measures the release of inflammatory mediators from white blood cells exposed to food extracts. It is a different technology from IgG testing, and its evidence base is more limited than conventional allergy testing.",
  },
  {
    term: "Zonulin",
    def: "A protein discussed in research on intestinal permeability. Commercial blood assays marketed to measure it were found in one study not to detect the actual protein.",
  },
  {
    term: "Fasting insulin",
    def: "The level of insulin in the blood after an overnight fast. It can be a useful clue but is measured differently by different laboratory methods, which limits universal cutoffs.",
  },
  {
    term: "Hemoglobin A1c",
    def: "A blood test reflecting average blood sugar over the previous two to three months, used to screen for and monitor diabetes.",
  },
  {
    term: "TSH",
    def: "Thyroid-stimulating hormone, made by the pituitary gland. It is the standard first test for evaluating thyroid function.",
  },
  {
    term: "Ferritin",
    def: "A blood protein that reflects the body's iron stores. Low ferritin can indicate iron deficiency.",
  },
  {
    term: "CBT-I",
    def: "Cognitive behavioral therapy for insomnia, a structured behavioral treatment recommended as the first-line treatment for chronic insomnia in adults.",
  },
  {
    term: "Empiric supplementation",
    def: "Taking a supplement without first testing for a deficiency, as defined in the Endocrine Society's vitamin D guideline as intake above the recommended dietary intake without testing.",
  },
  {
    term: "Health professional shortage area",
    def: "A federal designation for a geographic area, population group, or facility with too few health professionals relative to need. Percent of need met describes how much of the needed workforce is present.",
  },
  {
    term: "Telehealth licensure",
    def: "The requirement that a clinician be licensed in the state where the patient is located at the time of a virtual visit.",
  },
];

/* ---------- Data: References ---------- */

type Ref = {
  n: number;
  cite: string;
  journal: string;
  detail: string;
  href: string;
  label?: string;
  extra?: { href: string; label: string }[];
};

const refs: Ref[] = [
  {
    n: 1,
    cite: 'Beidelschies M, Alejandro-Rodriguez M, Ji X, Lapin B, Hanaway P, Rothberg MB. "Association of the functional medicine model of care with patient-reported health-related quality-of-life outcomes."',
    journal: "JAMA Network Open.",
    detail: "2019;2(10):e1914017.",
    href: "https://doi.org/10.1001/jamanetworkopen.2019.14017",
  },
  {
    n: 2,
    cite: 'Eldib M, Hatipoglu B, Beidelschies M, Alejandro-Rodriguez M, Xiao H, Rothberg M, et al. "A functional medicine approach to diabetes control and quality of life: an open-label randomized pilot study."',
    journal: "Journal of Clinical and Translational Endocrinology.",
    detail: "2026;44:100437.",
    href: "https://doi.org/10.1016/j.jcte.2026.100437",
  },
  {
    n: 3,
    cite: 'D\'Adamo CR, Kaplan MB, Campbell PS, et al. "Functional medicine health coaching improved elimination diet compliance and patient-reported health outcomes: results from a randomized controlled trial."',
    journal: "Medicine (Baltimore).",
    detail: "2024;103(8):e37148.",
    href: "https://doi.org/10.1097/MD.0000000000037148",
  },
  {
    n: 4,
    cite: 'Cutshall SM, Bergstrom LR, Kalish DJ. "Evaluation of a functional medicine approach to treating fatigue, stress, and digestive issues in women."',
    journal: "Complementary Therapies in Clinical Practice.",
    detail: "2016;23:75-81.",
    href: "https://doi.org/10.1016/j.ctcp.2016.03.005",
  },
  {
    n: 5,
    cite: 'Soffer GK, Loy M, Bierman S, Weil A. "Drawing a line between integrative and functional medicine."',
    journal: "The American Journal of Medicine.",
    detail: "2026.",
    href: "https://doi.org/10.1016/j.amjmed.2026.08.021",
  },
  {
    n: 6,
    cite: 'Kaptchuk TJ, Kelley JM, Conboy LA, et al. "Components of placebo effect: randomised controlled trial in patients with irritable bowel syndrome."',
    journal: "BMJ.",
    detail: "2008;336(7651):999-1003.",
    href: "https://doi.org/10.1136/bmj.39524.439618.25",
  },
  {
    n: 7,
    cite: 'Neprash HT, Everhart A, McAlpine D, Smith LB, Sheridan B, Cross DA. "Measuring primary care exam length using electronic health record data."',
    journal: "Medical Care.",
    detail: "2021;59(1):62-66.",
    href: "https://doi.org/10.1097/MLR.0000000000001450",
  },
  {
    n: 8,
    cite: 'Knowler WC, Barrett-Connor E, Fowler SE, et al; Diabetes Prevention Program Research Group. "Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin."',
    journal: "New England Journal of Medicine.",
    detail: "2002;346(6):393-403.",
    href: "https://doi.org/10.1056/NEJMoa012512",
  },
  {
    n: 9,
    cite: 'Estruch R, Ros E, Salas-Salvado J, et al. "Primary prevention of cardiovascular disease with a Mediterranean diet supplemented with extra-virgin olive oil or nuts" (republication after retraction of the 2013 article).',
    journal: "New England Journal of Medicine.",
    detail: "2018;378(25):e34.",
    href: "https://doi.org/10.1056/NEJMoa1800389",
    label: "Republished article",
    extra: [
      {
        href: "https://doi.org/10.1056/NEJMc1806491",
        label: "Retraction and republication notice",
      },
    ],
  },
  {
    n: 10,
    cite: 'Qaseem A, Kansagara D, Forciea MA, Cooke M, Denberg TD; Clinical Guidelines Committee of the American College of Physicians. "Management of chronic insomnia disorder in adults: a clinical practice guideline from the American College of Physicians."',
    journal: "Annals of Internal Medicine.",
    detail: "2016;165(2):125-133.",
    href: "https://doi.org/10.7326/M15-2175",
  },
  {
    n: 11,
    cite: 'Stapel SO, Asero R, Ballmer-Weber BK, et al. "Testing for IgG4 against foods is not recommended as a diagnostic tool: EAACI Task Force Report."',
    journal: "Allergy.",
    detail: "2008;63(7):793-796.",
    href: "https://doi.org/10.1111/j.1398-9995.2008.01705.x",
  },
  {
    n: 12,
    cite: "American Academy of Allergy, Asthma and Immunology. The myth of IgG food panel testing. Patient resource page.",
    journal: "",
    detail: "",
    href: "https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/igg-food-test",
  },
  {
    n: 13,
    cite: 'Ajamian M, Steer D, Rosella G, Gibson PR. "Serum zonulin as a marker of intestinal mucosal barrier function: may not be what it seems."',
    journal: "PLoS One.",
    detail: "2019;14(1):e0210728.",
    href: "https://doi.org/10.1371/journal.pone.0210728",
  },
  {
    n: 14,
    cite: 'Marcovina S, Bowsher RR, Miller WG, et al. "Standardization of insulin immunoassays: report of the American Diabetes Association Workgroup."',
    journal: "Clinical Chemistry.",
    detail: "2007;53(4):711-716.",
    href: "https://doi.org/10.1373/clinchem.2006.082214",
  },
  {
    n: 15,
    cite: 'Miller WG, Thienpont LM, Van Uytfanghe K, et al. "Toward standardization of insulin immunoassays."',
    journal: "Clinical Chemistry.",
    detail: "2009;55(5):1011-1018.",
    href: "https://doi.org/10.1373/clinchem.2008.118380",
  },
  {
    n: 16,
    cite: 'Jonklaas J, Bianco AC, Bauer AJ, et al. "Guidelines for the treatment of hypothyroidism: prepared by the American Thyroid Association Task Force on Thyroid Hormone Replacement."',
    journal: "Thyroid.",
    detail: "2014;24(12):1670-1751.",
    href: "https://doi.org/10.1089/thy.2014.0028",
  },
  {
    n: 17,
    cite: 'Demay MB, Pittas AG, Bikle DD, et al. "Vitamin D for the prevention of disease: an Endocrine Society clinical practice guideline."',
    journal: "Journal of Clinical Endocrinology & Metabolism.",
    detail: "2024;109(8):1907-1947.",
    href: "https://doi.org/10.1210/clinem/dgae290",
  },
  {
    n: 18,
    cite: 'US Preventive Services Task Force; Krist AH, Davidson KW, Mangione CM, et al. "Screening for vitamin D deficiency in adults: US Preventive Services Task Force recommendation statement."',
    journal: "JAMA.",
    detail: "2021;325(14):1436-1442.",
    href: "https://doi.org/10.1001/jama.2021.3069",
  },
  {
    n: 19,
    cite: 'Cadegiani FA, Kater CE. "Adrenal fatigue does not exist: a systematic review."',
    journal: "BMC Endocrine Disorders.",
    detail: "2016;16(1):48.",
    href: "https://doi.org/10.1186/s12902-016-0128-4",
  },
  {
    n: 20,
    cite: "Endocrine Society. Adrenal fatigue. Endocrine Library patient resource, January 25, 2022.",
    journal: "",
    detail: "",
    href: "https://www.endocrine.org/patient-engagement/endocrine-library/adrenal-fatigue",
  },
  {
    n: 21,
    cite: 'Bornstein SR, Allolio B, Arlt W, et al. "Diagnosis and treatment of primary adrenal insufficiency: an Endocrine Society clinical practice guideline."',
    journal: "Journal of Clinical Endocrinology & Metabolism.",
    detail: "2016;101(2):364-389.",
    href: "https://doi.org/10.1210/jc.2015-1710",
  },
  {
    n: 22,
    cite: 'Lantos PM, Rumbaugh J, Bockenstedt LK, et al. "Clinical practice guidelines by the Infectious Diseases Society of America (IDSA), American Academy of Neurology (AAN), and American College of Rheumatology (ACR): 2020 guidelines for the prevention, diagnosis, and treatment of Lyme disease."',
    journal: "Clinical Infectious Diseases.",
    detail: "2021;72(1):e1-e48.",
    href: "https://doi.org/10.1093/cid/ciaa1215",
    label: "Journal article",
    extra: [
      {
        href: "https://www.idsociety.org/practice-guideline/lyme-disease/",
        label: "Full guideline text (IDSA)",
      },
    ],
  },
  {
    n: 23,
    cite: "Centers for Disease Control and Prevention. Lyme disease: clinical care for health care providers (prolonged symptoms). Page updated August 17, 2026.",
    journal: "",
    detail: "",
    href: "https://www.cdc.gov/lyme/hcp/clinical-care/",
  },
  {
    n: 24,
    cite: "Wisconsin Department of Health Services. Lyme disease: Wisconsin data. Page revised September 10, 2026.",
    journal: "",
    detail: "",
    href: "https://www.dhs.wisconsin.gov/tickborne/lyme/data.htm",
  },
  {
    n: 25,
    cite: 'Geller AI, Shehab N, Weidle NJ, et al. "Emergency department visits for adverse events related to dietary supplements."',
    journal: "New England Journal of Medicine.",
    detail: "2015;373(16):1531-1540.",
    href: "https://doi.org/10.1056/NEJMsa1504267",
  },
  {
    n: 26,
    cite: 'Navarro VJ, Khan I, Bjornsson E, Seeff LB, Serrano J, Hoofnagle JH. "Liver injury from herbal and dietary supplements."',
    journal: "Hepatology.",
    detail: "2017;65(1):363-373.",
    href: "https://doi.org/10.1002/hep.28813",
  },
  {
    n: 27,
    cite: "U.S. Food and Drug Administration. Dietary supplements.",
    journal: "",
    detail: "",
    href: "https://www.fda.gov/food/dietary-supplements",
  },
  {
    n: 28,
    cite: "Lab Tests Online. FDA warns that biotin may affect some lab test results (summary of the FDA safety communications of 2017, updated 2019).",
    journal: "",
    detail: "",
    href: "https://labtestsonline.org/news/fda-warns-biotin-may-affect-some-lab-test-results",
  },
  {
    n: 29,
    cite: "Internal Revenue Service. Publication 502: Medical and Dental Expenses (nutritional supplements; expenses for general health).",
    journal: "",
    detail: "",
    href: "https://www.irs.gov/publications/p502",
  },
  {
    n: 30,
    cite: "American Board of Medical Specialties. Specialty and subspecialty certificates (38 specialties and 90 subspecialties certified by 24 member boards).",
    journal: "",
    detail: "",
    href: "https://www.abms.org/member-boards/specialty-subspecialty-certificates/",
  },
  {
    n: 31,
    cite: "Institute for Functional Medicine. About: founders.",
    journal: "",
    detail: "",
    href: "https://ifm.org/about/founders",
  },
  {
    n: 32,
    cite: "Kaiser Family Foundation. Primary care health professional shortage areas (HPSAs), by state. Data from the Health Resources and Services Administration, as of December 31, 2025.",
    journal: "",
    detail: "",
    href: "https://www.kff.org/other/state-indicator/primary-care-health-professional-shortage-areas-hpsas/",
  },
  {
    n: 33,
    cite: 'Westergaard D, Moseley P, Sorup FKH, Baldi P, Brunak S. "Population-wide analysis of differences in disease progression patterns in men and women."',
    journal: "Nature Communications.",
    detail: "2019;10(1):666.",
    href: "https://doi.org/10.1038/s41467-019-08475-9",
  },
  {
    n: 34,
    cite: 'Hoffmann DE, Tarzian AJ. "The girl who cried pain: a bias against women in the treatment of pain."',
    journal: "Journal of Law, Medicine & Ethics.",
    detail: "2001;29(1):13-27.",
    href: "https://doi.org/10.1111/j.1748-720x.2001.tb00037.x",
  },
  {
    n: 35,
    cite: 'US Preventive Services Task Force; Davidson KW, Barry MJ, Mangione CM, et al. "Screening for colorectal cancer: US Preventive Services Task Force recommendation statement."',
    journal: "JAMA.",
    detail: "2021;325(19):1965-1977.",
    href: "https://doi.org/10.1001/jama.2021.6238",
  },
  {
    n: 36,
    cite: 'US Preventive Services Task Force; Nicholson WK, Silverstein M, Wong JB, et al. "Screening for breast cancer: US Preventive Services Task Force recommendation statement."',
    journal: "JAMA.",
    detail: "2024;331(22):1918-1930.",
    href: "https://doi.org/10.1001/jama.2024.5534",
  },
  {
    n: 37,
    cite: "Wisconsin Department of Safety and Professional Services. Look up a credential, and file a complaint.",
    journal: "",
    detail: "",
    href: "https://dsps.wi.gov/",
    label: "Credential look-up",
    extra: [
      {
        href: "https://dsps.wi.gov/seeking-information/file-a-complaint/",
        label: "File a complaint",
      },
    ],
  },
  {
    n: 38,
    cite: "Michigan Department of Licensing and Regulatory Affairs (LARA). License verification and complaint information.",
    journal: "",
    detail: "",
    href: "https://www.michigan.gov/lara",
  },
  {
    n: 39,
    cite: "UW Health. Integrative health and wellness services, Madison, Wisconsin.",
    journal: "",
    detail: "",
    href: "https://www.uwhealth.org/thestudio",
  },
  {
    n: 40,
    cite: "University of Michigan Medical School, Department of Family Medicine. Integrative Family Medicine program.",
    journal: "",
    detail: "",
    href: "https://medschool.umich.edu/departments/family-medicine/programs/integrative-family-medicine",
  },
  {
    n: 41,
    cite: 'Hoffmann DE, Fillingim RB, Veasley C. "The woman who cried pain: do sex-based disparities still exist in the experience and treatment of pain?"',
    journal: "Journal of Law, Medicine & Ethics.",
    detail: "2022;50(3):519-541.",
    href: "https://doi.org/10.1017/jme.2022.91",
  },
  {
    n: 42,
    cite: 'D\'Adamo CR, Grebinsky K, Roedersheimer G, et al. "Functional medicine care was associated with lower pharmacy claims costs among Ashland School District employee health plan participants with musculoskeletal disorders."',
    journal: "Alternative Therapies in Health and Medicine.",
    detail: "2024;30(10):34-38.",
    href: "https://pubmed.ncbi.nlm.nih.gov/39316541/",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};
