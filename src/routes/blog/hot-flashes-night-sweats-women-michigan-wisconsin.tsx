import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BlogLayout } from "@/components/blog/BlogLayout";

import heroImg from "@/assets/blog/hot-flashes-night-sweats-hero-woman-awake-michigan.webp";
import workImg from "@/assets/blog/hot-flashes-at-work-detroit-office-woman.webp";
import bedroomImg from "@/assets/blog/cool-sleep-bedroom-setup-night-sweats.webp";
import thermostatImg from "@/assets/blog/hypothalamus-thermoneutral-zone-illustration.webp";
import telehealthImg from "@/assets/blog/hot-flashes-telehealth-visit-wisconsin-farmhouse.webp";
import labImg from "@/assets/blog/hot-flashes-lab-draw-hormone-thyroid-panel.webp";
import winterImg from "@/assets/blog/wisconsin-winter-open-window-hot-flash-relief.webp";
import summerImg from "@/assets/blog/michigan-summer-humidity-hot-flash-lake-michigan.webp";
import diaryImg from "@/assets/blog/hot-flash-symptom-diary-flat-lay.webp";
import mindBodyImg from "@/assets/blog/cbt-hypnosis-paced-breathing-hot-flashes-michigan-home.webp";
import relievedImg from "@/assets/blog/women-walking-lake-michigan-dunes-relief.webp";
import fridgeImg from "@/assets/blog/hot-flash-cooling-at-open-refrigerator-kitchen.webp";
import coffeeShopImg from "@/assets/blog/women-talking-candidly-wisconsin-coffee-shop.webp";
import countryRoadImg from "@/assets/blog/long-country-road-wisconsin-autumn-duration.webp";
import bloodPressureImg from "@/assets/blog/home-blood-pressure-check-kitchen-table.webp";
import examImg from "@/assets/blog/clinician-examining-night-sweats-patient.webp";
import smartwatchImg from "@/assets/blog/woman-checking-heart-rate-smartwatch-desk.webp";
import supperClubImg from "@/assets/blog/wisconsin-supper-club-fish-fry-old-fashioned.webp";
import duneStairsImg from "@/assets/blog/wooden-dune-stairs-lake-michigan-treatment-ladder.webp";
import pharmacistImg from "@/assets/blog/pharmacist-consultation-hormone-therapy.webp";
import pillOrganizerImg from "@/assets/blog/pill-organizer-kitchen-counter-nonhormonal-options.webp";
import coopAisleImg from "@/assets/blog/midwest-co-op-supplement-aisle-reading-label.webp";
import procedureRoomImg from "@/assets/blog/calm-outpatient-procedure-room-winter-light.webp";
import milwaukeeWomenImg from "@/assets/blog/three-women-milwaukee-lakefront-supportive.webp";
import partnerImg from "@/assets/blog/couple-bedroom-partner-support-night-sweats.webp";
import fourMugsImg from "@/assets/blog/four-womens-hands-mugs-round-table.webp";
import advocateImg from "@/assets/blog/woman-advocating-with-notebook-nurse-practitioner.webp";
import grandRapidsVisitImg from "@/assets/blog/grand-rapids-apartment-telehealth-first-visit.webp";
import calendarImg from "@/assets/blog/kitchen-wall-calendar-twelve-week-plan.webp";
import blackboardImg from "@/assets/blog/wiping-blackboard-clean-retiring-myths.webp";
import libraryImg from "@/assets/blog/michigan-library-woman-forming-question-faq.webp";
import glossaryImg from "@/assets/blog/reference-book-reading-glasses-glossary-desk.webp";

const SLUG = "hot-flashes-night-sweats-women-michigan-wisconsin";
const PAGE_URL = `https://novaweightandwellness.com/blog/${SLUG}`;
const PAGE_TITLE =
  "Hot Flashes and Night Sweats: The Complete Evidence-Based Guide for Women in Michigan and Wisconsin";

export const Route = createFileRoute("/blog/hot-flashes-night-sweats-women-michigan-wisconsin")({
  head: () => ({
    links: [{ rel: "canonical", href: PAGE_URL }],
    meta: [
      { title: "Hot Flashes & Night Sweats: MI & WI Women's Guide | Novaleo" },
      {
        name: "description",
        content:
          "Hot flashes and night sweats in Michigan or Wisconsin? An evidence-based guide to why they happen, how long they last, what works, and when to get checked.",
      },
      { property: "og:title", content: PAGE_TITLE },
      {
        property: "og:description",
        content:
          "A complete, honest guide for Michigan and Wisconsin women: the science of hot flashes, the real timeline, every treatment option graded by evidence, and when night sweats are not menopause.",
      },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image-v6.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      {
        name: "twitter:description",
        content:
          "Why hot flashes and night sweats happen, how long they last, and what actually works, written for women in Michigan and Wisconsin.",
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
  { id: "three-twelve-am", label: "3:12 AM, Somewhere Between Traverse City and Green Bay" },
  {
    id: "what-hot-flashes-and-night-sweats-are",
    label: "What a Hot Flash and a Night Sweat Actually Are",
  },
  {
    id: "the-science-of-the-narrowed-zone",
    label: "The Science: Your Brain's Thermostat Gets Twitchy",
  },
  { id: "how-common-and-when-they-start", label: "How Common They Are and When They Start" },
  { id: "how-long-they-last", label: "How Long Hot Flashes Last (The Honest Answer)" },
  { id: "why-they-matter-beyond-discomfort", label: "Why They Matter Beyond Discomfort" },
  { id: "michigan-wisconsin-seasons", label: "Michigan and Wisconsin: A Year of Hot Flashes" },
  {
    id: "night-sweats-when-its-not-menopause",
    label: "Night Sweats When It Might Not Be Menopause",
  },
  { id: "hot-flash-mimics", label: "Conditions That Mimic Hot Flashes" },
  { id: "triggers-what-the-evidence-says", label: "Triggers: What the Evidence Actually Says" },
  { id: "tracking-your-symptoms", label: "Tracking Your Symptoms" },
  { id: "testing-what-helps", label: "Testing: What Helps and What Does Not" },
  { id: "the-treatment-ladder", label: "The Treatment Ladder at a Glance" },
  { id: "cooling-and-lifestyle", label: "Cooling Strategies and Lifestyle" },
  { id: "cbt-hypnosis-mind-body", label: "CBT, Clinical Hypnosis, and Mind-Body Tools" },
  { id: "hormone-therapy", label: "Hormone Therapy: The Most Effective Option" },
  { id: "non-hormonal-prescriptions", label: "Non-Hormonal Prescription Options" },
  { id: "supplements-and-herbs", label: "Supplements and Herbal Remedies" },
  { id: "procedures-and-devices", label: "Procedures, Acupuncture, and Devices" },
  { id: "special-situations", label: "Special Situations" },
  { id: "partners-family-and-work", label: "Talking With Your Partner, Family, and Workplace" },
  { id: "four-women-four-paths", label: "Four Women, Four Different Paths" },
  { id: "michigan-wisconsin-access", label: "Getting Care in Michigan and Wisconsin" },
  { id: "advocating-for-yourself", label: "How to Advocate for Yourself at the Appointment" },
  { id: "what-a-first-visit-looks-like", label: "What a First Visit With Us Looks Like" },
  { id: "twelve-week-plan", label: "A 12-Week Plan You Can Start Today" },
  { id: "common-myths", label: "Myths Worth Retiring" },
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
      date="2026-10-09"
      readTime="70 min read"
      heroImg={heroImg}
      heroAlt="Woman in her late 40s sitting on the edge of her bed at night in a Michigan lake house, flushed and awake with a night sweat, fan on the dresser and snowy pines outside the window"
      tocItems={tocItems}
      slug={SLUG}
      breadcrumbTitle="Hot Flashes and Night Sweats Guide"
      faqSchema={faqSchema}
      relatedPosts={[
        {
          slug: "hormonal-sleep-anxiety-women-michigan-wisconsin",
          title:
            "Why Can't I Sleep Anymore? The Hormonal Reason Behind Sleepless Nights and New Anxiety",
        },
        {
          slug: "bioidentical-hormone-therapy-guide-michigan-wisconsin",
          title:
            "The Complete Guide to Bioidentical Hormone Therapy: Risks, Benefits, and What Actually Happens",
        },
        {
          slug: "perimenopause-in-your-30s-michigan-wisconsin",
          title:
            "Perimenopause Isn't Just an Over-40 Thing: The Complete Guide for Women in Their Mid-30s",
        },
      ]}
    >
      {/* Disclaimer */}
      <div className="bg-muted/60 border border-border rounded-xl p-5 mb-10 text-sm text-foreground/70 leading-relaxed">
        <strong className="text-foreground/90">Informational purposes only.</strong> This article is
        written for educational purposes and does not constitute medical advice. Hot flashes and
        night sweats usually reflect the menopause transition, but they can also signal thyroid
        disease, infection, medication effects, sleep apnea, or other conditions that deserve a
        proper evaluation. Decisions about hormone therapy or any prescription should be made with
        your licensed healthcare provider, based on your personal and family history. This content
        was written by Kathryn Long, NP-C and is intended for review by a licensed clinician before
        any clinical application, with particular attention to the sections on hormone therapy,
        prescription options, and night sweats that are not menopause.
      </div>

      {/* Section 1 */}
      <section id="three-twelve-am">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-2 mb-6">
          3:12 AM, Somewhere Between Traverse City and Green Bay
        </h2>
        <P>
          It is 3:12 in the morning in a house on a lake somewhere in northern Michigan, and a woman
          is sitting on the edge of her bed with her feet on the cold hardwood. A minute ago she was
          asleep. Now she is awake, and her whole body feels as though someone opened an oven door
          in the middle of the room. Heat is climbing up her chest, her neck, her face. Her scalp is
          wet. The T-shirt she went to bed in is stuck to her back, and the sheets are damp enough
          that she pushes them off with her foot. Outside the window the pines are heavy with snow
          and the thermostat on the hallway wall says sixty-six degrees. She knows, with the
          particular certainty of a person who has done this before, that in about four minutes she
          will be shivering.
        </P>
        <P>
          She is forty-eight. She is not sick, at least not in the way she would have recognized a
          year ago. She changes her shirt, flips the pillow to the cool side, drinks half a glass of
          water, and lies back down. She does the math on how many hours of sleep remain. Then,
          somewhere around 4:30, it happens again.
        </P>
        <P>
          In the morning she will drive to a clinic or an office or a classroom, and she will not
          mention any of this, because it is not the kind of thing you lead with. If she says
          anything at all to her primary care provider, it will be a half sentence at the end of a
          visit about something else. "I've been having some hot flashes." The answer, in my
          experience, is usually some version of a reassuring nod and a handout, or the suggestion
          that she keep the bedroom cooler, or the news that it is "just menopause" and will pass.
          Sometimes it is a prescription. More often than most women expect, it is nothing at all.
        </P>
        <P>
          Now picture a second woman, this one in Wausau, fifty-one, a project manager, sitting
          through a budget meeting with her cardigan folded over the back of her chair. A flush
          spreads up her neck and she keeps her voice level and her face neutral, which is a skill
          she has been practicing for three years. A third woman, in a glass conference room above
          downtown Detroit, quietly holds a cold bottle of water against the side of her neck while
          a colleague finishes a sentence. A fourth, in a farmhouse outside Eau Claire, throws open
          the bedroom window in January, steam rising off the radiator beneath it, and stands in the
          draft with her eyes closed.
        </P>
        <P>
          These are composite pictures, built from conversations I have had many times over more
          than twenty years of clinical practice rather than from any single patient. But if you are
          reading this article, you probably recognized at least one of them. You may have
          recognized all four.
        </P>
        <Fig
          src={workImg}
          alt="Professional woman in her mid-40s in a Detroit office fanning her neck with a folder during a hot flash, glass of ice water beside her laptop"
          caption="Hot flashes do not wait for a convenient moment. For many women, the workday is when they hit hardest."
        />
        <P>
          Here is what I want you to know before we go any further. Hot flashes and night sweats are
          not a character flaw, a failure of discipline, or an inevitable cost of aging that must be
          silently endured. They are the visible edge of a real, measurable change in how the brain
          regulates body temperature. They are extremely common, affecting up to 80 percent of women
          during the menopause transition.
          <C n={1} /> They last far longer than most women are told, for a median of more than seven
          years in the largest long-term study we have.
          <C n={3} /> And, importantly, we now have more effective treatments than at any point in
          history, including two brand-new non-hormonal medications that target the exact brain
          circuit responsible.
          <C n={[26, 28]} />
        </P>
        <P>
          This is the longest article we have published, and I wrote it that way on purpose. Most of
          what you will find online about hot flashes is either a thin list of tips ("wear layers,
          avoid spicy food") or a sales page for a supplement. Neither helps you decide what to do
          at 3:12 in the morning. What helps is the whole picture: what is actually happening in
          your body, how long it is likely to last, what the evidence says about every option on the
          table, what is worth trying first, what is not worth your money, and when night sweats are
          not menopause at all.
        </P>
        <P>
          I am going to be honest about two things up front. First, nearly all of the large
          scientific studies cited here were national or international, not specific to Michigan or
          Wisconsin. Where a finding comes from a study that included a Michigan research center, I
          will say so, and where I am applying a national finding to life in the Great Lakes region
          by reasoning rather than by data, I will say that too. Second, I am a nurse practitioner,
          not a researcher, and my job in this article is to translate the evidence faithfully and
          add what I have learned from sitting across from hundreds of women in their 40s and 50s.
          Every statistic in these pages comes with a reference at the bottom.
        </P>
        <P>
          Throughout, I will point you to other articles on this site that go deeper on adjacent
          topics: the hormonal mechanics of 3am waking in our{" "}
          <PL slug="hormonal-sleep-anxiety-women-michigan-wisconsin">sleep and anxiety guide</PL>,
          the details of hormone delivery methods in our{" "}
          <PL slug="bioidentical-hormone-therapy-guide-michigan-wisconsin">
            bioidentical hormone therapy guide
          </PL>
          , the early stages of the transition in our{" "}
          <PL slug="perimenopause-in-your-30s-michigan-wisconsin">
            perimenopause in your 30s guide
          </PL>
          , and how to tell a thyroid problem from a hormonal one in our{" "}
          <PL slug="normal-tsh-hypothyroid-symptoms-michigan-wisconsin">thyroid guide</PL>. I will
          not repeat their explanations here. This article has its own job: to give you the complete
          picture of hot flashes and night sweats themselves.
        </P>
        <Callout title="What you will learn in this guide">
          <UL>
            <li>
              What a hot flash and a night sweat actually are, and why your brain triggers them.
            </li>
            <li>How common they are, when they start, and how long they realistically last.</li>
            <li>Why they matter for sleep, mood, heart health, and bones, not just comfort.</li>
            <li>
              How Michigan and Wisconsin seasons change the picture, from July humidity to January
              forced air.
            </li>
            <li>When night sweats point to something other than menopause, and what to do.</li>
            <li>
              Every treatment option, graded by evidence: lifestyle, CBT and hypnosis, hormone
              therapy, non-hormonal prescriptions, supplements, and procedures.
            </li>
            <li>How to find real help in Michigan and Wisconsin, including by telehealth.</li>
          </UL>
        </Callout>
      </section>

      {/* Section 2 */}
      <section id="what-hot-flashes-and-night-sweats-are">
        <H2>What a Hot Flash and a Night Sweat Actually Are</H2>
        <Fig
          src={fridgeImg}
          alt="Woman in her mid-40s in a sunny Midwestern kitchen leaning into the open refrigerator to cool her flushed face and neck during a hot flash"
          caption="Many women describe a flash as a sudden wave of heat they want to step away from, right now."
        />
        <P>
          Clinicians use the term <strong>vasomotor symptoms</strong>, often abbreviated VMS, to
          describe hot flashes and night sweats together. The name comes from the blood vessels
          (vaso) and the nerve signals that control them (motor). It is a more accurate description
          than "hot flash," because what you feel as heat is the visible result of your body trying
          to dump heat it believes it has too much of.
        </P>
        <P>
          The Mayo Clinic describes a hot flash as a sudden feeling of warmth in the upper body,
          most often affecting the face, neck, and chest, sometimes with sweating, and sometimes
          followed by a chill as the body loses heat. A single episode usually lasts between one and
          five minutes.
          <C n={43} /> Research physiologists describe it more precisely as a rapid and exaggerated
          heat-dissipation response, made up of profuse sweating, dilation of the blood vessels near
          the skin surface, and a feeling of intense internal heat.
          <C n={7} />
        </P>
        <P>
          A <strong>night sweat</strong> is simply a hot flash that happens while you are asleep, or
          that wakes you. The reason the two are grouped together is that they are generated by the
          same mechanism. The reason they feel so different is context. A hot flash at your desk is
          embarrassing. A night sweat at 3am is exhausting, because it fragments your sleep, soaks
          your sleepwear and sheets, and is often followed by a cold, clammy chill that makes
          falling back asleep nearly impossible.
        </P>
        <H3>What women actually describe</H3>
        <P>
          The clinical definition is tidy. The real experience is not. Here are the descriptions I
          hear most often, in women's own words, paraphrased:
        </P>
        <UL>
          <li>
            "A wave of heat that starts in my chest and rolls up into my face, and my heart is
            pounding."
          </li>
          <li>
            "I feel like I'm being lit from the inside, and then ten seconds later I'm freezing."
          </li>
          <li>
            "I wake up with my hair soaked and the pillow wet, and I have to change my shirt."
          </li>
          <li>
            "It's not really sweat at first. It's a prickly, flushed, almost panicky feeling that
            sweat follows."
          </li>
          <li>"My face goes red and everyone can see it, or at least it feels like they can."</li>
          <li>
            "I don't actually get drenched. I just get hot, kick off the covers, and then pull them
            back on twenty minutes later."
          </li>
        </UL>
        <P>
          That last description deserves emphasis, because it is the one women most often dismiss.
          Not every hot flash is dramatic. Some women never sweat visibly at all. They experience a
          sudden internal heat, a flushed feeling, or a restless, kicking-off-the-blankets pattern
          at night, and because it does not match the movie version of a hot flash, they assume it
          cannot be one. In our{" "}
          <PL slug="hormonal-sleep-anxiety-women-michigan-wisconsin">sleep and anxiety guide</PL> we
          describe this milder, easy-to-miss temperature-regulation disruption, and it can show up
          months or years before a woman would call herself someone who has hot flashes.
        </P>
        <H3>The accompanying symptoms most people are not warned about</H3>
        <P>
          Hot flashes often arrive with company. Many women report a racing or pounding heart at the
          start of an episode, a brief wave of anxiety or dread, tingling, lightheadedness, or a
          sense of pressure in the chest. Some describe the chill that follows as the worst part.
          Because palpitations and sudden dread overlap with panic attacks and with certain heart
          rhythm problems, women are sometimes sent down the wrong diagnostic road, or reassured
          without anyone asking whether the episodes are timed with the heat. If your heart races
          every time a flush starts, tell your provider exactly that. It is a useful clue.
        </P>
        <H3>Hot flash, hot flush, vasomotor symptom: what to call it</H3>
        <P>
          You will see all three terms. "Hot flush" is the more common phrasing in the United
          Kingdom and in much of the older research literature. "Hot flash" is the American term.
          "Vasomotor symptoms" is the term used in clinical guidelines and in drug labels. They
          refer to the same phenomenon. When you search for research or talk with a provider, any of
          them will be understood.
        </P>
        <P>
          It also helps to know what hot flashes are not. They are not a sign that you are "burning
          off" toxins. They are not a reflection of how healthy you are. They are not a
          psychological weakness. And they are not, in any scientifically meaningful sense, caused
          by your thermostat at home being set too high. The next section explains what is.
        </P>
      </section>

      {/* Section 3 */}
      <section id="the-science-of-the-narrowed-zone">
        <H2>The Science: Your Brain's Thermostat Gets Twitchy</H2>
        <P>
          For most of the twentieth century, the standard explanation for hot flashes was simple and
          wrong: estrogen drops, so you get hot flashes. The truth is more interesting, and
          understanding it will make every treatment decision later in this article make more sense.
        </P>
        <H3>Your body has a comfort band, not a single set point</H3>
        <P>
          Think of your core body temperature the way you think of the thermostat in your house. If
          you set the furnace to turn on at 69 degrees and the air conditioner to turn on at 71, the
          two degrees in between is a zone where nothing happens. The house drifts a little warmer
          or cooler without any intervention. Your body works the same way. Between a lower
          threshold, where you start to shiver, and an upper threshold, where you start to sweat,
          there is a stretch of core temperature where your body does nothing at all. Physiologists
          call this the <strong>thermoneutral zone</strong>, or sometimes the null zone.
        </P>
        <P>
          In a classic laboratory study, Robert Freedman and Wanda Krell measured the thresholds for
          sweating and shivering in postmenopausal women with and without hot flashes. Using core
          temperature readings, they found that women with hot flashes had a thermoneutral zone of
          essentially zero, about 0.0 degrees Celsius, compared with about 0.4 degrees Celsius in
          women without symptoms.
          <C n={6} /> In plain terms, the comfort band had collapsed. The furnace and the air
          conditioner were set to the same temperature, and the system was flipping between them at
          the slightest nudge.
        </P>
        <Fig
          src={thermostatImg}
          alt="Illustration of the hypothalamus in the brain connected to a thermostat dial showing a very narrow comfortable temperature band between cool blue and warm orange zones"
          caption="A narrowed thermoneutral zone: the brain's comfort band shrinks, so tiny temperature changes trigger a full heat-dissipation response."
        />
        <P>
          That nudge turns out to be tiny. In the same line of research, most hot flashes were
          preceded by a small rise in core body temperature, on the order of a fraction of a degree,
          that a woman with a normal comfort band would never notice.
          <C n={[8, 6]} /> Inside a collapsed comfort band, that small rise is enough to cross the
          sweating threshold. The body responds as though it were overheating: skin blood vessels
          dilate, heat floods to the surface, sweat glands fire, and you feel the heat. The chill
          afterward is simply the result of dumping that heat. You have actually cooled off a little
          too much.
        </P>
        <P>
          This single idea explains a lot of what women notice. It explains why a hot room, a heavy
          comforter, a warm drink, or a stressful moment can set off a flash: each nudges core
          temperature or sympathetic nervous system activity just enough. It explains why the same
          woman can be fine one hour and flash three times the next. And it explains why hot flashes
          tend to cluster in the late afternoon and evening, when core body temperature naturally
          peaks. In one study using 24-hour monitoring, the circadian rhythm of hot flashes peaked
          at about 6:25 in the evening.
          <C n={8} /> If your worst hours are the commute home and the dinner rush, that is why.
        </P>
        <H3>
          Why the zone narrows: the role of estrogen, norepinephrine, and a handful of neurons
        </H3>
        <P>
          So why does the comfort band collapse? Estrogen is part of the story, but not the whole
          story. Freedman noted in his review that the decline in estrogen is not by itself
          sufficient to explain their occurrence.
          <C n={9} /> Estrogen falls in every woman who goes through menopause, yet roughly one
          woman in five does not have significant hot flashes, so something else has to be involved.
        </P>
        <P>
          Two pieces of that something else are now reasonably well understood. The first is
          increased activity of the sympathetic nervous system, the "fight or flight" system,
          mediated in part through norepinephrine acting on alpha-2 receptors in the brain. Higher
          sympathetic activation narrows the thermoneutral zone.
          <C n={[7, 9]} /> This is one reason stress, anxiety, and poor sleep can make hot flashes
          worse, and one reason some non-hormonal medications that calm that system, such as certain
          antidepressants and gabapentin, can help.
        </P>
        <P>
          The second piece is a small cluster of nerve cells deep in the hypothalamus, the part of
          the brain that governs temperature, appetite, and sleep. These cells are called{" "}
          <strong>KNDy neurons</strong> (pronounced "candy"), named for three chemicals they make:
          kisspeptin, neurokinin B, and dynorphin. Estrogen normally keeps these neurons in check.
          Back in 1991, researchers examining the brains of postmenopausal women found that these
          neurons had enlarged and were making more neurokinin B than in younger women.
          <C n={11} /> When estrogen falls, the brakes come off. The neurons become overactive and
          release neurokinin B onto the neighboring temperature-control center in the preoptic area
          of the hypothalamus, where it disrupts normal temperature regulation.
          <C n={1} />
        </P>
        <P>
          In 2018, a team at the University of Washington demonstrated the circuit directly in mice.
          Artificially activating these neurons produced the classic heat-dissipation response, with
          skin blood vessel dilation and a drop in core temperature, and blocking the neurokinin B
          receptor in the preoptic area abolished it. The response was stronger after the ovaries
          were removed.
          <C n={10} /> It is rare for a symptom that has been dismissed for centuries to have such a
          clean mechanism.
        </P>
        <Callout title="Why this matters for treatment">
          <p>
            That mechanism is not just a scientific curiosity. It is why a drug that blocks the
            neurokinin B receptor can reduce hot flashes, and it is the basis for the two new
            non-hormonal medications, fezolinetant and elinzanetant, that we will cover in detail
            later.
            <C n={[12, 13, 26, 28]} /> It is also why estrogen works: it restores the brakes on the
            same system.
          </p>
        </Callout>
        <H3>Why they strike at night</H3>
        <P>
          Night sweats are not a separate phenomenon. They are hot flashes that happen to be timed
          with sleep, and several features of sleep make them more likely to be noticed and more
          disruptive. Your core temperature has a natural daily rhythm: it falls during the night to
          its lowest point in the early morning hours, then rises again toward wake time. Bedding,
          sleepwear, and a warm bedroom trap heat around a body that is working hard to shed it. And
          during sleep you have no ability to adjust. You cannot step out of the room, peel off a
          layer, or splash cold water on your face. You wake up in the middle of the response and
          have to deal with the aftermath.
        </P>
        <P>
          Freedman has also observed that hot flashes are responsible for some, but not all, of the
          sleep disturbance women report during menopause.
          <C n={7} /> That distinction matters. If you are waking at 3am and there is no heat or
          sweat, the cause may be something else, such as the cortisol and progesterone changes we
          describe in our{" "}
          <PL slug="hormonal-sleep-anxiety-women-michigan-wisconsin">sleep and anxiety guide</PL>,
          or sleep apnea. And if you are waking drenched but your sleep is still terrible even after
          the sweats are controlled, other contributors are probably in play. Untangling which is
          which is exactly what a thoughtful evaluation is for.
        </P>
        <H3>What the science does not yet explain</H3>
        <P>
          I want to be careful not to oversell any of this. There are real gaps. We do not fully
          understand why some women have severe, long-lasting hot flashes while others have almost
          none, despite similar hormone levels. We do not fully understand the role of body fat,
          genetics, and stress physiology in setting a woman's individual thermoneutral zone. And
          the original thermoneutral zone studies were small laboratory studies, with a dozen or so
          symptomatic women, though the finding has been consistent across later work.
          <C n={[6, 9]} /> The science is solid enough to guide treatment. It is not so complete
          that anyone, including me, can tell you exactly how your own brain is behaving. That is
          why we treat the whole picture and not just a lab value.
        </P>
      </section>

      {/* Section 4 */}
      <section id="how-common-and-when-they-start">
        <H2>How Common They Are and When They Start</H2>
        <Fig
          src={coffeeShopImg}
          alt="Five women of different ages and backgrounds laughing and talking openly around a table in a cozy Wisconsin coffee shop"
          caption="If you are in your 40s or 50s, you are far from alone. Up to 80 percent of women have hot flashes."
        />
        <P>
          The North American Menopause Society (NAMS, which is now called The Menopause Society)
          describes hot flashes and night sweats as the most common symptoms of menopause, occurring
          in up to 80 percent of women going through the transition.
          <C n={1} /> Freedman's earlier review put the figure at about 75 percent of perimenopausal
          and postmenopausal women in Western countries.
          <C n={9} /> Either way, the practical translation is the same: if you are in your 40s or
          50s and you are having hot flashes, you are in the large majority, and if you are not
          having them, you are in the minority that does not.
        </P>
        <H3>They usually begin before your periods stop</H3>
        <P>
          This is the single most common misconception I correct. Many women believe hot flashes
          start after their last period. In fact, they typically begin years earlier, during
          perimenopause, the transition that can begin in the late 30s or early 40s and often runs
          for several years before the final period.
        </P>
        <P>
          The best data we have comes from the Study of Women's Health Across the Nation, known as
          SWAN, a long-running U.S. study that followed more than 3,300 women through the menopause
          transition at seven research centers, including one run by the University of Michigan.
          <C n={[3, 45]} /> In one SWAN analysis, researchers asked 955 women to record their
          symptoms on a monthly calendar for ten years. Five to ten years before the final menstrual
          period, roughly 20 percent of women reported hot flashes and night sweats in any given
          month, and about 40 percent reported trouble sleeping. The prevalence began rising about
          four years before the final period, and at the time of the final period itself, about 60
          percent reported hot flashes and about 40 percent reported night sweats.
          <C n={5} />
        </P>
        <P>
          Read that twice. Twenty percent of women were reporting hot flashes or night sweats five
          to ten years before their final period. If your final period arrives around age 51, that
          means a meaningful number of women are noticing these symptoms in their early 40s, and
          some in their late 30s. It also means a woman in her early 40s who tells her doctor she
          has night sweats and is told she is "too young for menopause" has been given a statement
          that is true and unhelpful. She is probably not in menopause. She may very well be in
          perimenopause, and the night sweats are real. We explore the earliest stages of this
          transition in our{" "}
          <PL slug="perimenopause-in-your-30s-michigan-wisconsin">
            guide to perimenopause in your 30s
          </PL>
          .
        </P>
        <H3>The strongest single predictor is where you are in the transition</H3>
        <P>
          An earlier SWAN analysis by Ellen Gold and colleagues looked at 3,198 women across the
          transition and asked what predicted vasomotor symptoms. The strongest association by far
          was menopausal status itself. Women in late perimenopause had more than six times the odds
          of reporting symptoms compared with premenopausal women (adjusted odds ratio 6.64), and
          symptoms were reported nearly as often after the final period.
          <C n={4} /> In other words, the intensity of this experience rises sharply as ovarian
          hormone production becomes erratic, peaks around the final menstrual period, and stays
          high for some time afterward.
        </P>
        <Table
          head={["Factor", "What SWAN found", "What it may mean"]}
          rows={[
            [
              "Menopausal stage",
              "Late perimenopause had about 6.6 times the odds of symptoms versus premenopause",
              "Symptoms track hormonal instability, not just low estrogen",
            ],
            [
              "Race and ethnicity",
              "Highest odds of reporting symptoms among African American women (adjusted OR 1.63)",
              "Important for Detroit, Flint, Milwaukee, and other communities with large Black populations",
            ],
            [
              "Education",
              "Less than a college education was associated with higher odds (adjusted OR 1.91)",
              "Likely a marker of stress, work conditions, and access to care, not biology (my interpretation)",
            ],
            [
              "Body mass index",
              "Each additional BMI unit raised odds slightly (adjusted OR 1.03 per unit)",
              "A modest but real association; see the weight section later",
            ],
            [
              "Smoking",
              "Current smoking raised odds (adjusted OR 1.63)",
              "One of the more modifiable risk factors",
            ],
            [
              "Anxiety symptoms",
              "Anxiety at baseline had the largest odds ratio of the lifestyle and mood factors (adjusted OR 3.10)",
              "Anxiety and hot flashes likely feed each other; direction is hard to prove",
            ],
          ]}
        />
        <P>
          A word of caution about that table. These are associations in a population, not
          predictions for any one woman. A woman who has never smoked, is at a healthy weight, and
          has no anxiety can still have severe hot flashes, and a woman with every risk factor can
          sail through with none. What the table tells us is that the problem is not random. Hot
          flashes are patterned by biology, circumstances, and stress, and that is good news because
          some of those factors can be changed.
        </P>
        <H3>The other 20 percent</H3>
        <P>
          Roughly one woman in five does not have significant hot flashes. We do not fully
          understand why. It is not simply a matter of estrogen levels, and there is no known
          behavior that reliably protects you. If you are one of them, count your blessings and
          still read the rest of this article, because it covers night sweats that are not hormonal,
          and because your friends and sisters will ask you what you know.
        </P>
        <H3>What this means in Michigan and Wisconsin</H3>
        <P>
          Nothing in the science suggests hot flashes are more common or less common in the Great
          Lakes region than elsewhere, and I will not invent a claim that they are. What is true is
          that the region's population includes several groups the SWAN data identify as having
          higher rates or longer duration of symptoms, including large Black communities in Detroit,
          Flint, and Milwaukee. It is also true that many women across both states work in settings
          where a hot flash is hard to hide: hospital floors and clinics, classrooms, manufacturing
          and food processing plants, offices with fixed dress codes, and farm and agricultural work
          where heat and physical labor stack on top of one another.
        </P>
        <P>
          It is also true that access matters. In a state with a lot of long drives, a woman in the
          Upper Peninsula or the Driftless Area of Wisconsin who is told to "come back in six months
          if it's still bothering you" may in practice have no one to come back to. We cover that
          practical problem, and how telehealth solves a good part of it, in the section on getting
          care in Michigan and Wisconsin.
        </P>
        <P>
          If your hot flashes come with stubborn weight gain and exhaustion, our regional guides on
          why{" "}
          <PL slug="why-michigan-women-over-40-cant-lose-weight-feel-exhausted">
            Michigan women over 40 struggle with weight and exhaustion
          </PL>{" "}
          and what{" "}
          <PL slug="gaining-weight-exhausted-after-40-wisconsin-women">
            Wisconsin women over 40 need to know
          </PL>{" "}
          pick up where this article leaves off.
        </P>
      </section>

      {/* Section 5 */}
      <section id="how-long-they-last">
        <H2>How Long Hot Flashes Last (The Honest Answer)</H2>
        <Fig
          src={countryRoadImg}
          alt="Woman in her early 50s walking alone along a long gravel road through autumn fields in rural Wisconsin at dusk"
          caption="The median course is more than seven years, so it helps to plan for the long road, not the next few weeks."
        />
        <P>
          If there is one section of this article I wish every woman could read in her mid-40s, it
          is this one. The most common reassurance women receive about hot flashes is that they are
          temporary and will pass in a year or two. That is not what the best data show.
        </P>
        <H3>What SWAN found</H3>
        <P>
          In 2015, Nancy Avis and colleagues published the largest and most careful analysis of how
          long vasomotor symptoms last, using SWAN data. They followed 1,449 women who reported
          frequent symptoms, defined as hot flashes or night sweats on six or more days in the
          previous two weeks, across a median of 13 study visits per woman.
          <C n={3} /> Their findings were sobering:
        </P>
        <UL>
          <li>
            The <strong>median total duration</strong> of frequent vasomotor symptoms was{" "}
            <strong>7.4 years</strong>. Half of the women had symptoms for longer than that.
          </li>
          <li>
            Among women for whom a final menstrual period could be identified, symptoms persisted a
            median of <strong>4.5 years after the final period</strong>.
          </li>
          <li>
            Women who first reported symptoms while still premenopausal or in early perimenopause
            had the longest course: a median total duration of more than <strong>11.8 years</strong>
            , with symptoms persisting a median of 9.4 years after the final period.
          </li>
          <li>
            Women who first reported symptoms after menopause had the shortest course, a median of{" "}
            <strong>3.4 years</strong>.
          </li>
          <li>
            African American women had the longest total duration, a median of{" "}
            <strong>10.1 years</strong>, longer than every other group studied.
          </li>
          <li>
            Longer duration was also associated with younger age at first report, lower education,
            higher perceived stress, greater sensitivity to physical symptoms, and more anxiety and
            depressive symptoms at the time symptoms began.
          </li>
        </UL>
        <P>
          The 2023 NAMS position statement summarizes the same literature in simpler terms: symptoms
          last a mean of 7 to 9 years, and in about one-third of women they can last more than 10
          years.
          <C n={1} />
        </P>
        <H3>Why the timing of onset matters so much</H3>
        <P>
          The finding that women who start early have the longest course deserves its own paragraph,
          because it runs against intuition. You would think that a woman who starts flashing at 42
          would be done sooner than a woman who starts at 52. The opposite is true. A woman whose
          symptoms begin before her periods have even become irregular is, statistically, signing up
          for a decade or more of them. Women who first report symptoms after menopause tend to have
          a shorter run.
        </P>
        <P>
          I do not want to scare anyone. These are medians across a large population, and individual
          courses vary widely. But the practical implication is clear. If your hot flashes started
          early, you are statistically more likely to be dealing with this for a long time, and the
          argument for finding something that works, instead of simply outlasting it, gets stronger
          rather than weaker.
        </P>
        <H3>What a median really means</H3>
        <P>
          A median of 7.4 years does not mean "7.4 years for you." It means that when you line up
          all the women in the study from shortest to longest duration, the woman in the middle had
          symptoms for 7.4 years. Half had a shorter course, half had a longer one. A median also
          hides the long tail: the NAMS figure that one in three women has symptoms for more than 10
          years describes a very large number of women, and many of them will not have been warned.
        </P>
        <H3>"It ends when your periods stop" is wrong</H3>
        <P>
          Perhaps the most important correction is this one. Many women assume that once they have
          gone twelve months without a period, the hot flashes will wind down. In the SWAN data, the
          median woman was still having frequent hot flashes four and a half years after her final
          period. Some women in the early-onset group were still having them nearly a decade later.
          <C n={3} /> Menopause is not the finish line. For many women it is the midpoint.
        </P>
        <Callout title="Why 'just wait it out' is a real decision, not a default">
          <p>
            When a clinician tells you to wait it out, they are, intentionally or not, choosing a
            plan that statistically involves about seven years of interrupted sleep and daytime
            flushing, and sometimes much longer. For some women, with mild symptoms and good coping,
            that is a perfectly reasonable choice. For many others, it is a choice made without
            anyone explaining what it means. You deserve to make that choice knowingly.
          </p>
        </Callout>
        <H3>Does it ever just stop?</H3>
        <P>
          For most women, yes: hot flashes do eventually ease, and many are able to stop treatment
          at some point and find that symptoms are gentler or gone. But the course varies widely,
          from a few years to more than a decade, and there is no way to predict exactly when for
          any one woman. A reasonable approach is to treat symptoms effectively while they are
          bothersome, reassess periodically with your provider, and consider a trial of dose
          reduction or stopping when circumstances allow. The NAMS hormone therapy statement
          explicitly supports this approach, recommending that longer durations of therapy be tied
          to documented indications, such as persistent vasomotor symptoms, with shared
          decision-making and periodic reevaluation.
          <C n={2} />
        </P>
        <Cta
          heading="Wondering how long your own symptoms might last, and what would help?"
          body="A free assessment call is a straightforward conversation about your symptoms, your timeline, and whether a deeper look makes sense for you. No pressure and no commitment."
        />
      </section>

      {/* Section 6 */}
      <section id="why-they-matter-beyond-discomfort">
        <H2>Why They Matter Beyond Discomfort</H2>
        <Fig
          src={bloodPressureImg}
          alt="Woman in her early 50s at a Michigan kitchen table taking her blood pressure at home with a notebook and coffee beside her"
          caption="Persistent hot flashes are a good reason to check blood pressure, lipids, blood sugar, and bone health."
        />
        <P>
          Some women are embarrassed to bring up hot flashes because they feel the complaint is
          trivial: uncomfortable, certainly, but not serious. I want to push back on that, gently
          and firmly. Hot flashes are a quality-of-life problem, a sleep problem, and, according to
          a growing body of research, possibly a signal about future health. None of those make them
          trivial.
        </P>
        <H3>Sleep, mood, and the compounding effect</H3>
        <P>
          Waking soaked at 2am, again at 4am, and again at 5:30 is not just annoying. It is
          cumulative sleep loss, and sleep loss amplifies nearly everything else women in this stage
          of life are already dealing with: irritability, difficulty concentrating, cravings, low
          mood, and anxiety. The relationship between hot flashes and anxiety runs in both
          directions. SWAN found that anxiety symptoms at baseline predicted higher odds of later
          vasomotor symptoms,
          <C n={4} /> and the NAMS review notes that women with more anxiety show a higher placebo
          response in treatment trials.
          <C n={1} /> It is genuinely hard to say which comes first in an individual woman, and that
          is part of why the best treatment plans often address sleep and stress alongside the heat.
        </P>
        <P>
          If your night sweats come with a racing heart and a flood of dread at 3am, the mechanisms
          in our{" "}
          <PL slug="hormonal-sleep-anxiety-women-michigan-wisconsin">sleep and anxiety guide</PL>{" "}
          may be part of your picture too. And if low mood or hopelessness has crept in alongside
          the physical symptoms, please say so to a licensed professional. If you ever feel unsafe
          or in crisis, call or text 988, the Suicide and Crisis Lifeline, any time.{" "}
          <X href="https://988lifeline.org/">Learn more at 988lifeline.org</X>.
        </P>
        <H3>What the research says about your heart</H3>
        <P>
          This is the part of the research I want you to understand clearly and not be frightened
          by. In 2021, Rebecca Thurston and colleagues published an analysis of 3,083 SWAN women,
          aged 42 to 52 at the start, who were followed for up to 22 years with regular visits. They
          tracked how often women had hot flashes and night sweats and whether they later had a
          heart attack, stroke, heart failure, or revascularization procedure. Over the follow-up,
          231 cardiovascular events occurred.
          <C n={20} />
        </P>
        <P>
          After adjusting for demographics, medications, and standard cardiovascular risk factors,
          women with frequent symptoms at the start (six or more days in two weeks) had a 51 percent
          higher risk of later cardiovascular events than women with no symptoms (hazard ratio 1.51,
          95 percent confidence interval 1.05 to 2.17). Women whose frequent symptoms persisted over
          time, defined as frequent symptoms at more than one-third of visits, had a 77 percent
          higher risk (hazard ratio 1.77, 1.33 to 2.35).
          <C n={20} /> The authors concluded that vasomotor symptoms may represent a novel,
          female-specific cardiovascular risk factor.
        </P>
        <P>
          Here is what that does and does not mean. It means that frequent, persistent hot flashes
          are associated with a higher risk of later cardiovascular disease, independent of the
          usual risk factors. It does not mean hot flashes cause heart disease, and it does not mean
          treating hot flashes will lower your risk. No trial has shown that. The American Heart
          Association's 2020 scientific statement on the menopause transition makes a related and
          broader point: midlife is a period of accelerating cardiovascular risk, with unfavorable
          changes in body composition, lipids, and vascular health, and a critical window for
          monitoring and prevention.
          <C n={21} />
        </P>
        <P>
          The practical translation is simple. If you have frequent or persistent hot flashes, treat
          them as a reason to look at your cardiovascular numbers, not as a reason to panic: blood
          pressure, a lipid panel, fasting glucose or A1c, and your family history. Our Root Cause
          Lab Panel includes a lipid panel with Lp(a), fasting glucose, hemoglobin A1c, fasting
          insulin, and hs-CRP for exactly this reason. You can read more about how we use these
          numbers in the{" "}
          <PL slug="the-ultimate-guide-to-hormones-and-weight-resistance-over-40">
            ultimate guide to hormones and weight resistance over 40
          </PL>
          .
        </P>
        <H3>What the research says about your bones</H3>
        <P>
          A second line of evidence concerns bone. In a Women's Health Initiative analysis of 23,573
          women aged 50 to 79 who were not using hormone therapy, Carolyn Crandall and colleagues
          found that women with moderate or severe vasomotor symptoms at baseline had a higher risk
          of hip fracture over about eight years of follow-up (adjusted hazard ratio 1.78, 95
          percent confidence interval 1.20 to 2.64). They also had slightly lower bone mineral
          density at the femoral neck and lumbar spine, by about 0.015 and 0.016 g/cm squared
          respectively. There was no association with vertebral fractures.
          <C n={22} />
        </P>
        <P>
          Again, this is an observational association, and the authors were appropriately cautious
          about mechanism. It does not prove that hot flashes weaken bones. What it suggests is that
          women with bothersome vasomotor symptoms may deserve a closer look at bone health. The
          NAMS 2022 hormone therapy statement notes that hormone therapy has been shown to prevent
          bone loss and fracture, which is one of several considerations when a woman and her
          provider decide whether it is appropriate.
          <C n={2} /> If you are in perimenopause or postmenopause with significant symptoms, it is
          reasonable to ask your provider whether a bone density scan or other bone-health measures
          make sense for you, particularly given how limited winter sunlight is in our region. We
          discuss that seasonal pattern in our{" "}
          <PL slug="normal-tsh-hypothyroid-symptoms-michigan-wisconsin">thyroid guide</PL>.
        </P>
        <H3>The honest bottom line</H3>
        <P>
          Hot flashes are common, they are real, and they are not trivial. They interrupt sleep,
          they affect mood and work, and in a meaningful subset of women they are associated with
          future cardiovascular and bone risk. That is not a reason for fear. It is a reason to take
          them seriously, to look at the whole woman rather than the symptom in isolation, and to
          choose a plan intentionally.
        </P>
      </section>

      {/* Section 7 */}
      <section id="michigan-wisconsin-seasons">
        <H2>Michigan and Wisconsin: A Year of Hot Flashes</H2>
        <P>
          Living in the Great Lakes region means living in four genuinely different climates in one
          calendar year. You can go from a humid, 90-degree afternoon in July to a minus-ten
          windchill in January, and your home, car, and workplace are engineered to push back
          against each extreme. For a woman with a narrowed thermoneutral zone, that matters more
          than it would for most people. This section is where the guide becomes specific to where
          you live.
        </P>
        <H3>What the research says about seasons</H3>
        <P>
          Surprisingly few studies have looked at whether the time of year changes menopausal
          symptoms, but one important analysis did. Siobán Harlow and colleagues used the SWAN
          menstrual calendar substudy, in which 955 women recorded symptoms month by month for a
          decade, to ask whether symptoms vary with the seasons. They did. Hot flashes and trouble
          sleeping peaked in <strong>July</strong> and bottomed out in <strong>January</strong>. The
          peak for night sweats arrived about a month earlier. Compared with the seasonal low, the
          odds of hot flashes were 66 percent higher at the seasonal peak, the odds of night sweats
          were 50 percent higher, and the odds of trouble sleeping were 24 percent higher.
          <C n={5} />
        </P>
        <P>
          Let me be clear about the limits. This was a national cohort, not a Michigan or Wisconsin
          study, although one of the SWAN research centers is run by the University of Michigan.
          <C n={[5, 45]} /> I am not aware of a study that has measured seasonal variation in hot
          flashes specifically in the Great Lakes states. What I can offer is clinical reasoning: in
          a region with hot, humid summers and cold winters, where women spend a lot of time moving
          between very different indoor and outdoor temperatures, the seasonal pattern is plausibly
          at least as noticeable here as anywhere. It is also entirely consistent with what women in
          both states tell me every June, when they arrive saying some version of "it was fine all
          winter, and then the weather changed."
        </P>
        <H3>Summer: heat, humidity, and the long evening</H3>
        <Fig
          src={summerImg}
          alt="Woman in a linen shirt on a bench near a Lake Michigan pier on a hot humid July afternoon holding an iced drink against her neck with a handheld fan beside her"
          caption="July is statistically the peak month for hot flashes. Shade, a cold drink, and a handheld fan are small tools that add up."
        />
        <P>
          Michigan and Wisconsin summers are not Arizona summers. The temperature may only reach the
          mid-80s on many days, with hotter stretches in heat waves, but humidity changes the
          equation. When the air is already saturated with moisture, sweat evaporates more slowly,
          and the body's main cooling mechanism becomes less efficient. For a woman whose body is
          already hyper-reactive to small temperature increases, a sticky day in the mid-80s can
          feel far more punishing than the number on the thermometer suggests. The nights matter
          too. Warm nights without relief mean a bedroom that never fully cools, and that is when
          night sweats peak.
        </P>
        <P>
          The summer calendar in this region is also built around exactly the situations that
          provoke flashes: outdoor weddings and graduation parties, county and state fairs, the
          Cherry Festival in Traverse City, Summerfest in Milwaukee, fish boils in Door County,
          pontoon boats and cottage weekends, kids' soccer tournaments with no shade, and Fourth of
          July barbecues. Here is what I suggest to women who dread these events:
        </P>
        <UL>
          <li>
            <strong>Dress in breathable layers you can remove.</strong> Natural fibers such as
            cotton and linen, and technical moisture-wicking fabrics, release heat better than
            polyester blends. Sleeveless or loose tops beat anything that pulls over the head.
          </li>
          <li>
            <strong>Carry a cooling kit.</strong> A small handheld fan, a cooling towel, a cold
            water bottle, and a pack of face wipes weigh almost nothing. Cold water on the wrists,
            neck, and the insides of the elbows cools blood near the surface.
          </li>
          <li>
            <strong>Choose your seat.</strong> Shade, a breeze, and proximity to an exit all reduce
            the odds of a flush turning into an ordeal.
          </li>
          <li>
            <strong>Time the heavy lifting.</strong> If you can garden, walk, or run errands in the
            early morning or after sunset, you avoid stacking exercise heat on top of ambient heat.
          </li>
          <li>
            <strong>Make the bedroom the coolest room in the house.</strong> A window air
            conditioner in the bedroom, a fan pulling cooler air from another room or the outdoors
            after sunset, blackout curtains on the sunny side, and lightweight bedding can change
            the night.
          </li>
        </UL>
        <P>
          One honest caveat. The 2023 NAMS position statement lists cooling techniques as not
          recommended as a treatment, because there is no strong clinical-trial evidence that they
          reduce how often hot flashes occur.
          <C n={1} /> That is a statement about trial evidence for treating the underlying symptom,
          not a judgment that cooling is pointless. A fan will not change your biology, but it can
          change how a flash feels and how quickly you recover. I use these tools as comfort
          measures while we address the underlying problem, not as a substitute for treatment.
        </P>
        <H3>Winter: forced air, wool coats, and the great indoor-outdoor swing</H3>
        <Fig
          src={winterImg}
          alt="Woman in light cotton sleepwear standing at an open window in a Wisconsin farmhouse in winter, breathing cold air with snow-covered fields and birch trees at dawn outside"
          caption="Throwing open a window in January is a very Midwestern way to manage a night sweat. A bed fan or dual-zone electric blanket can do the same job more gently."
        />
        <P>
          January is statistically the easiest month for hot flashes, which is a small mercy, but
          winter has its own challenges. The big one is the transition. You step out of a 5-degree
          morning into a car with heated seats and a heater blasting, walk into a 74-degree office
          or classroom wearing a parka, and spend the next hour with your core temperature climbing.
          For a narrowed comfort band, that is a perfect setup. The same is true of restaurant
          booths, church services, school gyms during winter concerts, and airplane cabins.
        </P>
        <P>
          Houses in both states are heated, often aggressively. Forced-air furnaces, boilers with
          radiators, wood stoves, and in older farmhouses, a bedroom directly above a heating source
          can run warm through the night. Add flannel sheets, a wool blanket, and a down comforter,
          the classic Great Lakes winter bed, and you have created an insulating cocoon around a
          body that is trying to dump heat.
        </P>
        <UL>
          <li>
            <strong>Dress in removable layers, always.</strong> A coat you can unzip, a cardigan you
            can drop, a scarf you can pull off. The goal is that no single layer is trapping heat
            you cannot release.
          </li>
          <li>
            <strong>Rethink the winter bed.</strong> Layer with several lighter covers rather than
            one heavy one, so you can shed one at 2am without fully uncovering. Swap flannel for
            breathable cotton or linen, and consider a mattress pad or sheets designed to wick
            moisture.
          </li>
          <li>
            <strong>Use dual-control electric blankets or a bed fan if you share a bed.</strong>{" "}
            These appear on the NAMS list of cooling techniques women commonly try, and they solve a
            real problem: one partner needs heat and the other is on fire.
          </li>
          <li>
            <strong>Turn the thermostat down at night.</strong> Many women find that a cooler
            bedroom helps, and this is one of the easiest changes to test for a week or two.
          </li>
          <li>
            <strong>Keep a dry change of sleepwear and a towel at the bedside.</strong> A damp shirt
            against your back turns a short flash into a long chill. Swapping it in thirty seconds
            makes it much easier to fall back asleep.
          </li>
        </UL>
        <P>
          A word about Upper Peninsula and northern Wisconsin sauna culture, because I get asked.
          Saunas are part of the heritage and daily life for many families in both regions, and many
          women love them. They are also, by design, a heat load, and a heat load on a narrowed
          thermoneutral zone can easily trigger a flash. Some women find the post-sauna cool-down a
          relief, others find it brings on a wave of flushing. If you enjoy your sauna, there is no
          reason to give it up, but it is reasonable to learn how your body responds and to avoid
          going from a hot session straight to bed. If you have any heart condition, low blood
          pressure, or are on medication that affects blood pressure, ask your provider first.
        </P>
        <H3>Shoulder seasons, and the light</H3>
        <P>
          Spring and fall are generally the milder stretch, but the swings can be dramatic: a
          35-degree morning followed by a 70-degree afternoon is a challenging day for any narrowed
          comfort band. Fall also brings shorter days, which affects sleep, mood, and vitamin D. If
          you find your mood dipping in late fall alongside the hot flashes, it may be a mix of
          hormonal and seasonal factors, and it is worth naming both to your provider. Our{" "}
          <PL slug="gaining-weight-exhausted-after-40-wisconsin-women">Wisconsin guide</PL>{" "}
          discusses the low-light, low-vitamin-D season and the overlap between seasonal mood
          changes and perimenopause, and our{" "}
          <PL slug="normal-tsh-hypothyroid-symptoms-michigan-wisconsin">thyroid guide</PL> covers
          the winter vitamin D question in depth.
        </P>
        <H3>Plan treatment around the calendar</H3>
        <P>
          Here is a practical idea that almost nobody mentions. If you know that summer is your
          worst season, it makes sense to start or adjust treatment in late winter or spring, not in
          the middle of a July heat wave. Non-hormonal medications typically start working within
          about two weeks, according to the NAMS review,
          <C n={1} /> and early changes in sleep and hot flash frequency on hormone therapy are
          often noticeable in the first several weeks, with fuller benefit over two to three months,
          as we describe in our{" "}
          <PL slug="bioidentical-hormone-therapy-guide-michigan-wisconsin">BHRT guide</PL>. Starting
          in April rather than July means you are usually settled before the seasonal peak arrives.
        </P>
        <Table
          head={["Season", "Typical challenge in Michigan and Wisconsin", "Practical adjustments"]}
          rows={[
            [
              "Summer (June to August)",
              "Heat and humidity, warm nights, outdoor events, little air conditioning in older homes",
              "Cooling kit, bedroom A/C or fan, breathable fabrics, shade, early-morning activity, start or tune treatment before June",
            ],
            [
              "Fall (September to November)",
              "Wide daily temperature swings, shorter days, return of heating",
              "Removable layers, adjust bedding gradually, check vitamin D, watch for mood dips",
            ],
            [
              "Winter (December to February)",
              "Overheated buildings, parkas indoors, heavy bedding, forced air or wood heat",
              "Layers you can shed, lighter bedding, dual-control blankets, cooler thermostat at night",
            ],
            [
              "Spring (March to May)",
              "Unpredictable swings, damp chill, start of seasonal symptom climb",
              "Good season to begin or adjust treatment; get labs and a plan in place before summer",
            ],
          ]}
        />
      </section>

      {/* Section 8 */}
      <section id="night-sweats-when-its-not-menopause">
        <H2>Night Sweats When It Might Not Be Menopause</H2>
        <Fig
          src={examImg}
          alt="Female clinician gently examining the neck of a woman in her late 40s in a bright primary care exam room"
          caption="A good evaluation starts with a history and an exam, not an assumption."
        />
        <P>
          This is the most important safety section in the article, and I want to handle it
          carefully. For most women in their 40s and 50s with night sweats and other signs of the
          menopause transition, the cause is the menopause transition. But night sweats are also a
          non-specific symptom, and every once in a while they are the first sign of something that
          needs attention. A good clinician holds both possibilities in mind.
        </P>
        <H3>What the medical literature says about night sweats in general</H3>
        <P>
          Night sweats are common outside of menopause. A systematic review by Mold and colleagues
          found that reported prevalence ranged from about 10 percent among older primary care
          patients to about 60 percent among women on an obstetrics inpatient unit. Encouragingly,
          the life expectancy of primary care patients who reported night sweats did not appear to
          be reduced. The reviewers' bottom line was that night sweats appear to be a non-specific
          symptom, and that many questions about their causes, evaluation, and management remain
          unanswered.
          <C n={24} />
        </P>
        <P>
          A widely cited clinical review by Viera and colleagues in{" "}
          <em>American Family Physician</em> lays out the differential. Tuberculosis and lymphoma
          are the diseases in which night sweats are a dominant symptom, but these are infrequently
          the cause in modern practice. Other diagnoses to consider include HIV infection,
          gastroesophageal reflux disease, obstructive sleep apnea, hyperthyroidism, hypoglycemia,
          and several less common conditions. Certain medications, including some antihypertensives
          and antipyretics, and substances such as alcohol and other drugs, can cause night sweats.
          The authors note that serious causes can be excluded with a thorough history, physical
          examination, and directed laboratory and imaging studies.
          <C n={23} />
        </P>
        <P>
          I am summarizing that literature not to frighten you but to establish something that gets
          lost in the rush to label every night sweat "menopause": a good evaluation takes a
          history. It asks about fevers, weight changes, cough, medications, alcohol, sleep quality,
          and other symptoms. It does not simply assume.
        </P>
        <H3>Red flags: when to be seen promptly</H3>
        <P>
          The following are not signs that something terrible is going on. They are signs that your
          night sweats deserve a prompt, individualized evaluation, not a watch-and-wait approach.
          In my practice I want to hear about any of these, and I would want you to call your
          primary care provider or an urgent care clinic promptly if you have them. This list
          reflects standard clinical judgment and the differential in the reviews above, not a
          validated scoring tool.
        </P>
        <UL>
          <li>
            <strong>Fever</strong> or measured temperatures above normal, especially with chills or
            shaking, or night sweats that come with a feeling of being generally ill.
          </li>
          <li>
            <strong>Unexplained weight loss</strong> that you did not intend, especially if combined
            with fatigue or loss of appetite.
          </li>
          <li>
            <strong>A persistent cough</strong>, coughing up blood, chest pain, or shortness of
            breath.
          </li>
          <li>
            <strong>New lumps or swollen glands</strong> in the neck, armpit, or groin.
          </li>
          <li>
            <strong>Drenching night sweats with no change in your periods</strong> and no daytime
            flashes, especially if you are under 40 or otherwise do not fit a menopausal pattern.
          </li>
          <li>
            <strong>New severe fatigue, bone pain, easy bruising, or recurrent infections.</strong>
          </li>
          <li>
            <strong>Palpitations, tremor, and weight loss together</strong>, which can point to an
            overactive thyroid.
          </li>
          <li>
            <strong>Recent travel, new medications, or an outdoor exposure</strong> that worries
            you, such as a tick bite or clearing brush and rotting wood.
          </li>
        </UL>
        <Callout title="If you have any red flag">
          <p>
            Do not wait for this article, an online quiz, or a telehealth appointment next week.
            Call your primary care provider, an urgent care clinic, or if you feel very unwell,
            emergency care. Telehealth is excellent for many things, but a fever with drenching
            sweats and weight loss needs an in-person exam and possibly imaging and labs.
          </p>
        </Callout>
        <H3>Two infections to know about if you live in the Great Lakes region</H3>
        <P>
          Most of the conditions in the differential are uncommon in any region. But there are two
          infections that are more relevant to the Upper Midwest than to many other parts of the
          country, and because night sweats appear in their symptom lists, I think Michigan and
          Wisconsin women should know the names.
        </P>
        <P>
          <strong>Blastomycosis</strong> is a fungal infection caused by <em>Blastomyces</em>, a
          fungus that lives in moist soil and decaying wood and leaves. The Centers for Disease
          Control and Prevention lists night sweats among its symptoms, along with fever, cough,
          shortness of breath, muscle aches, weight loss, and fatigue, and says symptoms usually
          start between three weeks and three months after breathing in spores.
          <C n={38} /> The CDC notes the fungus is most common around the Ohio and Mississippi River
          valleys, the Great Lakes, the St. Lawrence River, and the western United States, and says
          northern Wisconsin and Minnesota may be hyperendemic.
          <C n={38} /> Michigan's health department says that in Michigan the fungus lives most
          often in areas surrounding the Great Lakes, and that some wooded outdoor activities,
          including forestry work, hunting, and camping, increase exposure risk.
          <C n={39} /> A 2023 CDC report on a blastomycosis cluster in St. Croix County, Wisconsin,
          states that Wisconsin reports the highest incidence of <em>Blastomyces</em> infection in
          the country, an estimated 2.1 cases per 100,000 residents per year.
          <C n={40} />
        </P>
        <P>
          <strong>Babesiosis</strong> is a parasitic infection of red blood cells spread by
          blacklegged ticks. The CDC lists sweats among its flu-like symptoms, along with fever,
          chills, headache, body aches, loss of appetite, nausea, and fatigue, and notes that many
          people do not feel sick at all and that symptoms can take weeks or months to develop.
          <C n={41} /> A CDC surveillance report describes babesiosis as endemic to the northeastern
          and upper midwestern United States, with Wisconsin one of the established upper Midwest
          states.
          <C n={42} />
        </P>
        <P>
          I want to keep this proportionate. These are uncommon, and the great majority of Michigan
          and Wisconsin women with night sweats in their late 40s are experiencing perimenopause.
          But if your night sweats come with fever, cough, new fatigue, or began after outdoor
          exposure, such as clearing brush, digging, heavy yard work, or a tick bite, say so
          explicitly. It is exactly the kind of information that changes what test to order.
        </P>
        <H3>Medications that can cause or worsen night sweats</H3>
        <P>
          Your medication list is often the quickest answer, and it is the part of the history that
          is most often skipped. A partial list of categories worth reviewing with your pharmacist
          or prescriber includes:
        </P>
        <UL>
          <li>
            <strong>Antidepressants,</strong> particularly SSRIs and SNRIs, which commonly cause
            sweating. (A paradox worth knowing: the same drug class is also used to treat hot
            flashes. The effect is dose and drug-specific, and it can go either way.) Mold's review
            notes that alpha-adrenergic blockers may reduce night sweats in patients taking
            serotonin reuptake inhibitors, but that is a decision for your prescriber, not something
            to try on your own.
            <C n={24} />
          </li>
          <li>
            <strong>Hormone-blocking cancer therapies,</strong> such as tamoxifen and aromatase
            inhibitors. Hot flashes and night sweats affect 65 to 85 percent of women after breast
            cancer treatment.
            <C n={37} />
          </li>
          <li>
            <strong>Antipyretics and some blood pressure medications,</strong> which Viera and
            colleagues list among drugs that can cause night sweats.
            <C n={23} />
          </li>
          <li>
            <strong>Alcohol,</strong> which can cause sweating and fragmented sleep, discussed more
            below.
          </li>
          <li>
            <strong>Diabetes medications</strong> that can cause overnight low blood sugar, which
            produces sweating and often a racing heart.
          </li>
        </UL>
        <P>
          Never stop a prescription because you suspect it is causing night sweats. Stopping
          antidepressants, blood pressure medication, or cancer therapy abruptly can be harmful.
          Bring the question to your prescriber and let them help you decide.
        </P>
        <H3>What a sensible evaluation looks like</H3>
        <P>
          For a woman in her 40s or 50s with night sweats, cycle changes, daytime hot flashes, and
          no red flags, the pattern itself is usually diagnostic. Even then, I recommend a baseline
          screen for the most common non-menopausal causes, because treating menopause when you also
          have an overactive thyroid or untreated sleep apnea is a recipe for frustration. The
          reviews above suggest the following initial approach for night sweats that are not clearly
          explained: a careful history and physical examination, and then directed testing, which
          for unexplained cases may include a complete blood count, a thyroid-stimulating hormone
          test, inflammatory markers, and screening for infection, with imaging when indicated by
          symptoms.
          <C n={23} /> Which tests make sense for you depends entirely on your history, which is
          exactly why I ask so many questions at a first visit.
        </P>
        <Table
          head={["Possible cause", "Clues that point toward it", "Typical next step"]}
          rows={[
            [
              "Perimenopause or menopause",
              "Age in the 40s or 50s, cycle changes, daytime flashes, waves of heat with a chill afterward",
              "Symptom diary, basic labs to rule out mimics, treatment discussion",
            ],
            [
              "Overactive thyroid",
              "Heat intolerance all day, racing heart, tremor, weight loss despite eating",
              "TSH and free T4, plus a full thyroid evaluation",
            ],
            [
              "Sleep apnea",
              "Loud snoring, gasping, morning headaches, daytime sleepiness, high blood pressure",
              "Sleep study referral",
            ],
            [
              "Acid reflux at night",
              "Burning, sour taste, cough on lying down, sweating that comes with the reflux",
              "Evaluation and treatment of reflux",
            ],
            [
              "Low blood sugar overnight",
              "Shaky, hungry, racing heart at the time of waking; diabetes medications; alcohol with dinner",
              "Review medications and meals; glucose testing",
            ],
            [
              "Medication effect",
              "Sweats began after starting or changing a drug",
              "Prescriber review; do not stop on your own",
            ],
            [
              "Infection (including TB, blastomycosis, babesiosis)",
              "Fever, cough, weight loss, exposures, fatigue, symptoms after outdoor work or tick exposure",
              "Prompt in-person evaluation",
            ],
            [
              "Lymphoma or other serious illness",
              "Drenching sweats with fever, weight loss, swollen glands, or severe fatigue",
              "Prompt in-person evaluation and imaging as indicated",
            ],
          ]}
        />
        <P>
          Notice that the first row is menopause, and it is the most likely. But the other rows are
          why we do not simply guess. In my experience, women feel better about the whole process
          when they know the common alternatives were ruled out, instead of wondering for months
          whether something was missed.
        </P>
      </section>

      {/* Section 9 */}
      <section id="hot-flash-mimics">
        <H2>Conditions That Mimic Hot Flashes</H2>
        <Fig
          src={smartwatchImg}
          alt="Flushed woman in her late 40s at a home office desk glancing at her smartwatch heart rate while holding a glass of water"
          caption="Heat and a racing heart can come from the thyroid, anxiety, or blood sugar, not only from hot flashes."
        />
        <P>
          Night sweats are not the only symptom with lookalikes. Daytime flushing, heat intolerance,
          and sudden surges of warmth can also have non-menopausal causes. Here is how I think about
          telling them apart.
        </P>
        <H3>The typical hot flash fingerprint</H3>
        <P>
          A menopausal hot flash tends to have a recognizable signature. It begins suddenly, often
          within seconds. The heat starts in the chest, neck, or face. Sweating, flushing, and
          sometimes palpitations follow. The whole episode usually lasts between about one and five
          minutes,
          <C n={43} /> and it is often followed by a chill. Then it ends, and you feel basically
          normal until the next one. If your symptom looks like that, in a woman in her 40s or 50s,
          menopause is the likely explanation.
        </P>
        <P>
          If, instead, you feel hot all day and cannot cool down, lose weight without trying, feel
          shaky or jittery, and have a racing heart at rest, think thyroid. An overactive thyroid
          causes heat intolerance and sweating, and the symptoms are steady rather than wave-like. A
          TSH and free T4 are simple blood tests. Underactive thyroid is the opposite problem, with
          cold intolerance, but thyroid disease of any kind is common in women of this age and can
          travel with perimenopause, which is why we cover it thoroughly in our{" "}
          <PL slug="normal-tsh-hypothyroid-symptoms-michigan-wisconsin">thyroid guide</PL>.
        </P>
        <H3>Anxiety and panic attacks</H3>
        <P>
          Panic attacks and hot flashes share a lot of symptoms: a surge of heat, sweating, a racing
          heart, a feeling of dread. When a woman tells me she is having panic attacks that began in
          her mid-40s with no history of anxiety, I ask what happens first. If the heat comes first
          and the dread follows, hot flashes are likely the trigger. If the worry comes first and
          the heat follows, anxiety may be the driver. Often the two are tangled together, and both
          deserve attention. We explore this overlap in the{" "}
          <PL slug="hormonal-sleep-anxiety-women-michigan-wisconsin">sleep and anxiety guide</PL>.
        </P>
        <H3>Blood sugar crashes</H3>
        <P>
          A drop in blood sugar produces sweating, shakiness, hunger, and a racing heart, which can
          feel like a hot flash to someone who is not sure what she is feeling. This is especially
          relevant overnight and in the late afternoon, and in women who skip meals, drink alcohol
          with a light dinner, or take diabetes medications. If your episodes cluster before meals,
          improve when you eat, or come with intense hunger and shakiness, ask about blood sugar.
          The insulin and glucose patterns that underlie this are covered in our{" "}
          <PL slug="the-ultimate-guide-to-hormones-and-weight-resistance-over-40">
            ultimate guide
          </PL>{" "}
          and in the blood sugar section of the sleep and anxiety guide.
        </P>
        <H3>Other lookalikes</H3>
        <UL>
          <li>
            <strong>Flushing from other causes.</strong> Rosacea, alcohol flush reactions, spicy
            food, and certain medications can all cause facial redness and warmth without the full
            heat-dissipation response.
          </li>
          <li>
            <strong>Birth control and IUDs.</strong> Hormonal contraception can mask or delay the
            appearance of perimenopausal symptoms, and symptoms sometimes appear when a woman stops.
            We discuss this in the FAQ of our guide to perimenopause in your 30s.
          </li>
          <li>
            <strong>PCOS.</strong> Women with PCOS who come off the pill in their late 30s sometimes
            have new hot flashes, and the difference between a PCOS flare and early perimenopause is
            subtle. Our{" "}
            <PL slug="pcos-weight-resistance-women-30s-michigan-wisconsin">PCOS guide</PL> includes
            a comparison of the two.
          </li>
          <li>
            <strong>Rare conditions.</strong> A few uncommon hormone-producing tumors and other
            diseases cause episodic flushing and sweating. They are rare, which is why they are
            considered after the common explanations have been checked.
            <C n={23} />
          </li>
        </UL>
        <P>
          If you are not sure which of these fits you, that is not a failure. It is exactly what a
          good history is for. The most useful thing you can bring to an appointment is a short
          diary of when episodes happen, how long they last, what you were doing, and what else you
          felt. We will get to that in the tracking section.
        </P>
      </section>

      {/* Section 10 */}
      <section id="triggers-what-the-evidence-says">
        <H2>Triggers: What the Evidence Actually Says</H2>
        <Fig
          src={supperClubImg}
          alt="Wisconsin supper club table with a Friday fish fry, an old fashioned cocktail, and coffee under warm amber light"
          caption="Great Lakes food and drink culture is part of life here. The goal is to learn your own triggers, not to give up everything."
        />
        <P>
          Almost every handout about hot flashes includes the same list: avoid alcohol, caffeine,
          spicy food, hot drinks, and stress. It is repeated so confidently that most women assume
          it is well established. I want to give you the accurate version, because the accurate
          version will save you from needless restriction and guilt.
        </P>
        <H3>What the 2023 NAMS statement concluded</H3>
        <P>
          The NAMS panel reviewed the literature on avoiding triggers. They found one
          cross-sectional study of 4,595 Chinese women that reported a positive association between
          alcohol intake and vasomotor symptoms, but that association was not reported in other
          studies, including the Melbourne Women's Midlife Health Project. And they found that there
          are no clinical trials assessing whether avoiding triggers actually relieves hot flashes.
          Their classification was Level II, limited or inconsistent evidence, and not recommended
          as a treatment.
          <C n={1} />
        </P>
        <P>
          Read that carefully. It does not say triggers are a myth. It says that nobody has done the
          experiments to show that avoidance helps, and that the observational evidence is mixed.
          That is consistent with what I see: some women have clear, repeatable triggers, and others
          cannot find any pattern no matter how carefully they look.
        </P>
        <H3>The risk factors that do have better data</H3>
        <P>
          The SWAN analysis by Gold and colleagues gives us firmer ground on a handful of factors.
          Current smoking was associated with higher odds of vasomotor symptoms (adjusted odds ratio
          1.63), higher body mass index was associated with higher odds, and anxiety symptoms were
          strongly associated with them.
          <C n={4} /> Smoking is the most modifiable of these, and if you smoke, quitting is one of
          the best things you can do for your heart, bones, lungs, and cancer risk at this stage of
          life, whatever happens to your hot flashes. The weight question is more nuanced, and we
          cover it in the lifestyle section.
        </P>
        <H3>Heat load and sympathetic activation: the plausible mechanisms</H3>
        <P>
          Because hot flashes are triggered by small rises in core temperature acting within a
          narrow comfort band,
          <C n={[6, 8]} /> anything that raises core temperature or sympathetic nervous system
          activity is a plausible trigger. That includes hot rooms, heavy bedding, hot showers or
          baths, hot tubs, saunas, tight or synthetic clothing, hot beverages, exercise, and
          emotional stress. The mechanism is plausible and matches many women's experience, which is
          why I take their trigger reports seriously even though the trials are not there.
        </P>
        <H3>The Great Lakes drinking culture, honestly</H3>
        <P>
          Alcohol deserves a direct conversation, because in Michigan and Wisconsin it is woven into
          social life in a way that makes it hard to discuss without sounding judgmental. A Friday
          fish fry with an old fashioned, a Wisconsin supper club, a Michigan craft brewery tour, a
          tailgate, a cottage weekend, a wedding, a book club with wine. None of that is a moral
          failing, and I am not going to tell you to give it up.
        </P>
        <P>
          What I will tell you is what the evidence supports. The link between alcohol and hot
          flashes themselves is inconsistent across studies, as the NAMS review notes.
          <C n={1} /> But alcohol has several well-known effects that matter at night. It can cause
          sweating, it fragments sleep, and clinical reviews list it among substances that can cause
          night sweats independently of menopause.
          <C n={23} /> In our{" "}
          <PL slug="hormonal-sleep-anxiety-women-michigan-wisconsin">sleep and anxiety guide</PL> we
          also explain how evening alcohol can cause a rebound drop in blood sugar several hours
          later, which triggers the cortisol and adrenaline release that wakes women at 2 or 3am. So
          if you wake up drenched on the nights you have wine with dinner and sleep through on the
          nights you do not, it is entirely possible the alcohol is doing part of the damage even if
          your hormones are doing the rest. The only way to know is to test it, which brings me to
          the next point.
        </P>
        <H3>How to run your own trigger experiment</H3>
        <P>
          Rather than eliminating everything at once, which is miserable and tells you nothing, use
          a structured approach. The method below takes about six weeks and uses the symptom diary
          described in the next section.
        </P>
        <OL>
          <li>
            <strong>Weeks 1 and 2: baseline.</strong> Change nothing. Record every flash and night
            sweat, along with what you ate, drank, and did in the preceding hours.
          </li>
          <li>
            <strong>Weeks 3 and 4: change one thing.</strong> Pick the single most suspect trigger.
            Perhaps it is the evening glass of wine, the afternoon latte, or the heavy duvet. Change
            only that. Everything else stays the same.
          </li>
          <li>
            <strong>Weeks 5 and 6: compare.</strong> Look at the diary. Did frequency, intensity, or
            night waking change? If yes, you have found a lever. If no, put it back and test
            something else.
          </li>
        </OL>
        <P>
          Be wary of any plan that requires you to give up everything you enjoy. Restriction is
          rarely sustainable, and the evidence that it works is thin. The goal is to find the one or
          two changes that make a visible difference for you, and keep them.
        </P>
        <H3>What about exercise?</H3>
        <P>
          This surprises many women. The NAMS review found that observational studies suggest women
          who exercise regularly report fewer hot flashes, but that other studies found no
          relationship, that exercise can actually trigger a flash in symptomatic women, and that
          when randomized trials were pooled, exercise had no effect on hot flash frequency. In a
          pooled analysis of four MsFLASH trials, exercise and yoga led to smaller improvements than
          other interventions and were not recommended as single treatments for hot flashes.
          <C n={1} />
        </P>
        <P>
          That is not a reason to stop exercising. The same review explicitly notes that exercise
          and yoga have other health benefits, and for women in this decade of life, strength
          training, walking, and cardiovascular fitness protect bones, muscle, heart, mood, and
          sleep. We discuss muscle and metabolic benefits in our{" "}
          <PL slug="ozempic-not-working-michigan-wisconsin-women">GLP-1 guide</PL>. What it means is
          that you should exercise for those reasons, expect it to help your sleep and mood, and not
          expect it to be a hot flash treatment on its own. Practically, it also helps to avoid
          intense exercise in the two hours before bed, to cool down gradually afterward, and to
          dress in layers you can remove.
        </P>
      </section>

      {/* Section 11 */}
      <section id="tracking-your-symptoms">
        <H2>Tracking Your Symptoms</H2>
        <Fig
          src={diaryImg}
          alt="Flat lay of an open symptom diary notebook with columns for day and night, a pen, herbal tea, a glass of water, reading glasses, and a smartphone on a wooden table"
          caption="A simple two-week diary turns vague suffering into usable information."
        />
        <P>
          If I could give every woman one homework assignment before her first appointment, it would
          be this one. A symptom diary is the most useful, least expensive tool in menopause care.
          It turns "I get a lot of hot flashes" into a pattern a clinician can act on, it reveals
          triggers you did not know you had, and it gives you a baseline so you can tell whether a
          treatment is working.
        </P>
        <P>
          This is not just my opinion. In clinical trials, vasomotor symptoms are measured with
          daily electronic diaries, and the NAMS review repeatedly flags studies that relied on
          symptom checklists, rather than diaries, as a limitation.
          <C n={1} /> Diaries are the standard because memory is unreliable. Most of us remember the
          worst night and forget the rest, and our memory of symptoms is colored by our mood.
        </P>
        <H3>What to record</H3>
        <UL>
          <li>
            <strong>Time of each hot flash or night sweat,</strong> as best you can estimate. Even
            "afternoon" or "woke at about 3" is useful.
          </li>
          <li>
            <strong>Severity.</strong> Regulators and clinical trials commonly grade vasomotor
            symptoms as mild (a sensation of heat without sweating), moderate (heat with sweating,
            but you can continue what you are doing), or severe (heat with sweating that makes you
            stop what you are doing).
            <C n={46} /> Use the same scale each time.
          </li>
          <li>
            <strong>Duration,</strong> roughly. Under one minute, a few minutes, or longer.
          </li>
          <li>
            <strong>Context.</strong> Where you were, what you had eaten or drunk, whether you were
            stressed, how warm the room was.
          </li>
          <li>
            <strong>Sleep.</strong> What time you woke, whether you needed to change clothing or
            sheets, and how you felt in the morning.
          </li>
          <li>
            <strong>Your cycle,</strong> if you still have one: bleeding days, heaviness, and any
            cycle length changes.
          </li>
          <li>
            <strong>Mood and anxiety,</strong> on a simple one-to-five scale each day.
          </li>
          <li>
            <strong>Alcohol, caffeine, medications, and supplements,</strong> including anything
            new.
          </li>
          <li>
            <strong>Bedroom temperature,</strong> if you have a thermometer, or just "warm, cool, or
            very cool."
          </li>
        </UL>
        <H3>A simple two-week template</H3>
        <Table
          head={[
            "Date",
            "Time",
            "Severity (mild, moderate, severe)",
            "Context or trigger",
            "Sleep note",
          ]}
          rows={[
            [
              "Mon 10/12",
              "3:10 AM",
              "Severe, changed shirt",
              "Wine at dinner, warm room",
              "Awake 40 min",
            ],
            ["Tue 10/13", "4:00 PM", "Moderate", "Stressful meeting", "Slept through"],
            ["Wed 10/14", "11:30 PM", "Mild", "After hot shower", "Fell asleep late"],
          ]}
        />
        <P>
          A paper notebook works perfectly, and so does the notes app on your phone. What matters is
          that you do it daily for two weeks. At the end, count your total episodes, note the worst
          times of day, and circle anything that repeated. That one page can change the conversation
          with your provider.
        </P>
        <H3>How to use the diary at your appointment</H3>
        <P>
          Bring it, and lead with the headline. "I am having about six flashes a day and waking
          soaked three nights a week, and it has been going on for eight months." Then hand over the
          diary. Women who do this tend to be taken more seriously, because they are giving the
          clinician what they need. If you have been dismissed in the past, this also quietly shifts
          the dynamic. You are presenting data.
        </P>
      </section>

      {/* Section 12 */}
      <section id="testing-what-helps">
        <H2>Testing: What Helps and What Does Not</H2>
        <Fig
          src={labImg}
          alt="Woman in her late 40s having blood drawn by a phlebotomist in navy scrubs at a bright outpatient laboratory for a hormone, thyroid, and metabolic lab panel"
          caption="Lab testing for hot flashes is mostly about ruling out look-alikes and creating a safe baseline for treatment."
        />
        <P>
          Few topics generate more confusion, and more expensive, unhelpful testing, than lab work
          for hot flashes. Let me be direct about what testing can and cannot do.
        </P>
        <H3>Hot flashes are diagnosed clinically</H3>
        <P>
          For a woman in her mid-40s or older with typical symptoms, the diagnosis of perimenopause
          is made from the story, not a blood test. The UK's National Institute for Health and Care
          Excellence guideline on menopause, for example, advises that perimenopause and menopause
          be identified without laboratory tests in otherwise healthy people aged 45 and over, and
          specifically advises against using estradiol, AMH, inhibin, or antral follicle count for
          this purpose in that age group. The reasoning is that hormone levels fluctuate widely
          during perimenopause, so a single value can look normal one week and menopausal the next,
          and knowing it would not change management. For ages 40 to 45 with symptoms and cycle
          changes, the guideline suggests FSH may be considered, and for those under 40 it can be
          considered when premature ovarian insufficiency is suspected.
          <C n={44} />
        </P>
        <P>
          I raise this because I want you to know that a "normal" FSH or estradiol does not mean
          your hot flashes are not hormonal, and an "abnormal" one does not tell us how long they
          will last or how bad they will be. If a clinician orders a single estradiol level and
          tells you that your normal result means perimenopause is not the issue, that is a
          misreading of what the test can do. Women in this situation come to me often.
        </P>
        <H3>What testing is actually for</H3>
        <P>
          Labs are valuable for three other reasons. First, to rule out look-alikes. Second, to
          create a safe baseline before treatment. Third, to look at the bigger health picture,
          because the midlife transition is a window when cardiovascular, metabolic, and bone risks
          accelerate.
          <C n={21} />
        </P>
        <UL>
          <li>
            <strong>Thyroid.</strong> TSH and free T4 to rule out an overactive thyroid, and a
            fuller thyroid evaluation if your symptoms suggest it. We explain why TSH alone can
            mislead in our{" "}
            <PL slug="normal-tsh-hypothyroid-symptoms-michigan-wisconsin">thyroid guide</PL>.
          </li>
          <li>
            <strong>Blood count and ferritin.</strong> Anemia and low iron stores cause fatigue and
            can worsen how you tolerate everything else.
          </li>
          <li>
            <strong>Blood sugar.</strong> Fasting glucose, A1c, and fasting insulin, because
            overnight lows and insulin resistance both affect sweating, sleep, and weight.
          </li>
          <li>
            <strong>Liver tests.</strong> Both newer non-hormonal medications require baseline liver
            testing before you start. For elinzanetant, the label calls for ALT, AST, alkaline
            phosphatase, and bilirubin before starting treatment.
            <C n={28} /> For fezolinetant, the FDA requires liver blood tests before starting and
            regular testing afterward.
            <C n={27} />
          </li>
          <li>
            <strong>Lipids and cardiovascular markers.</strong> A lipid panel, and where appropriate
            Lp(a) and hs-CRP, in light of the cardiovascular associations we discussed.
          </li>
          <li>
            <strong>Vitamin D and B12.</strong> Particularly relevant in a region where winter
            sunlight is limited.
          </li>
          <li>
            <strong>A pregnancy test when relevant.</strong> The elinzanetant label requires
            excluding pregnancy before starting.
            <C n={28} />
          </li>
        </UL>
        <P>
          Before any hormone therapy, a proper baseline also includes a personal and family history
          review, blood pressure, and up-to-date age-appropriate screening, as we describe in the
          testing section of our{" "}
          <PL slug="bioidentical-hormone-therapy-guide-michigan-wisconsin">BHRT guide</PL>.
        </P>
        <H3>What our Root Cause Lab Panel covers</H3>
        <P>
          For women who work with us, our signature Root Cause Lab Panel covers most of the
          categories above in a single fasting draw. It includes vitamin D, B12, ferritin, zinc, and
          RBC magnesium; TSH, free T3, free T4, and TPO antibodies; a lipid panel with
          lipoprotein(a); fasting glucose, hemoglobin A1c, and fasting insulin; a hepatic function
          panel and GGT; and hs-CRP and homocysteine. It is $454, includes written insights on your
          results, and results typically take about two weeks after the draw. The cost is credited
          toward our Root Cause Restoration Program if you enroll within 30 days. Depending on your
          history, we may add other testing. We cover the full range and pricing on our{" "}
          <SL to="/services">services page</SL>.
        </P>
        <P>
          I also want to be honest about something. No test, ours or anyone's, tells you how severe
          your hot flashes will become or when they will end. I do not order extensive hormone
          panels to prove what the story already shows. I order labs to find what the story might be
          hiding and to make sure that whatever treatment we choose is safe for you.
        </P>
        <H3>Telehealth and the lab draw</H3>
        <P>
          One of the practical advantages of working remotely, particularly in a state with long
          rural distances, is that the lab work happens at a draw site near you, and the review
          happens by video. We cover how this works across Michigan and Wisconsin in our{" "}
          <PL slug="medical-weight-loss-hormone-therapy-michigan-wisconsin-cities">
            city-by-city guide
          </PL>
          .
        </P>
      </section>

      {/* Section 13 */}
      <section id="the-treatment-ladder">
        <H2>The Treatment Ladder at a Glance</H2>
        <Fig
          src={duneStairsImg}
          alt="Woman in her late 40s climbing a long wooden staircase up a sand dune on the Lake Michigan shore at sunrise"
          caption="Treatment is a step-by-step climb. You can start where it makes sense for you and adjust as you go."
        />
        <P>
          Before we go deep on each option, here is the overview. The table below summarizes what
          the 2023 NAMS nonhormone position statement and the 2022 hormone therapy statement say,
          what the best trial evidence shows, and the main caveats. I have included the two newer
          drugs, fezolinetant and elinzanetant, even though elinzanetant was still in development
          when the NAMS statement was written.
        </P>
        <Table
          head={["Option", "Evidence rating", "How well it works (best evidence)", "Main caveats"]}
          rows={[
            [
              "Hormone therapy (estrogen, with progestogen if you have a uterus)",
              "NAMS 2022: most effective treatment for vasomotor symptoms",
              "Cochrane review: about 75 percent reduction in hot flash frequency versus placebo",
              "Not for everyone; risks depend on type, dose, route, and timing; individualized decision",
            ],
            [
              "Clinical hypnosis",
              "NAMS 2023: recommended, Level I",
              "Trial of 187 women: 74 percent reduction in hot flashes versus 17 percent with attention control",
              "Requires a trained clinician or program and several sessions of practice",
            ],
            [
              "Cognitive behavioral therapy (CBT)",
              "NAMS 2023: recommended, Level I",
              "Reduces how much hot flashes bother and interfere; 65 to 78 percent reached a clinically significant improvement in problem ratings in two trials",
              "Reduces bother more reliably than frequency; needs a trained provider or guided self-help program",
            ],
            [
              "SSRIs and SNRIs (including paroxetine 7.5 mg)",
              "NAMS 2023: recommended, Level I",
              "Hot flash reductions of 25 to 69 percent across drugs; comparable to low-dose oral estradiol in one pooled analysis",
              "Side effects; interactions, notably paroxetine and fluoxetine with tamoxifen; stopping suddenly can cause withdrawal",
            ],
            [
              "Gabapentin",
              "NAMS 2023: recommended, Level I",
              "900 mg per day improved frequency and severity; higher doses similar to estrogen in severity scores",
              "Drowsiness and dizziness; useful at bedtime for night sweats",
            ],
            [
              "Fezolinetant (Veozah)",
              "NAMS 2023: recommended, Level I; FDA approved 2023",
              "Reduced frequency and severity versus placebo in phase 3 trials",
              "Boxed warning for rare serious liver injury; liver blood tests required",
            ],
            [
              "Elinzanetant (Lynkuet)",
              "FDA approved October 2025; not yet in the 2023 NAMS recommendations",
              "OASIS trials: significant reductions in frequency and severity, with improved sleep disturbance",
              "Daytime drowsiness; liver testing; pregnancy contraindication; drug interactions",
            ],
            [
              "Oxybutynin",
              "NAMS 2023: recommended, Levels I to II",
              "Randomized trials showed improvement in moderate to severe symptoms",
              "Dry mouth; anticholinergic cognitive concerns, mainly in older adults",
            ],
            [
              "Weight loss (when overweight)",
              "NAMS 2023: recommended, Levels II to III (may be considered)",
              "Behavioral program improved bothersome flushing in a 338-woman trial",
              "Evidence limited; works better earlier in the transition",
            ],
            [
              "Stellate ganglion block",
              "NAMS 2023: recommended, Levels II to III (may be considered)",
              "Small sham-controlled trial and open-label studies showed benefit",
              "Invasive procedure; limited availability; select patients",
            ],
            [
              "Cooling, avoiding triggers, exercise, yoga, mindfulness, paced breathing, relaxation",
              "NAMS 2023: not recommended as treatments",
              "No consistent reduction in frequency in controlled trials",
              "Can still help comfort, sleep, and general health",
            ],
            [
              "Supplements, herbs, soy, black cohosh, acupuncture, cannabinoids, clonidine, pregabalin",
              "NAMS 2023: not recommended",
              "Mixed or negative evidence, large placebo effects",
              "Purity and safety concerns; cost; delay in effective treatment",
            ],
          ]}
        />
        <P>
          That table is a compass, not a prescription. The best option for you depends on how severe
          and bothersome your symptoms are, your personal and family medical history, your
          preferences about hormones, what else is going on in your health, and what is available to
          you.
        </P>
        <Callout title="Why you will hear so many success stories about things that do not work">
          <p>
            The NAMS review points out that placebo response rates in nonhormone hot flash trials
            range from 20 to 66 percent, and that women with more anxiety show an even higher
            response to placebo.
            <C n={1} /> Hot flashes naturally fluctuate, they also tend to improve around any new
            intervention, and there is a powerful hope effect. So when your friend swears by a
            supplement, she may be sincere and still be reporting a placebo effect and the natural
            ebb and flow of her symptoms. Good trials control for this. That is why the rating
            system matters.
          </p>
        </Callout>
        <H3>Matching the option to the person</H3>
        <P>
          Here is how I think through the decision with women, and how the evidence supports it.
          This is a framework, not a flowchart.
        </P>
        <UL>
          <li>
            <strong>
              Bothersome, moderate to severe symptoms, no contraindications, and within about ten
              years of menopause or under 60:
            </strong>{" "}
            hormone therapy is the most effective option, and the NAMS 2022 statement says the
            benefit-risk ratio is favorable for these women.
            <C n={2} /> It deserves a serious conversation.
          </li>
          <li>
            <strong>Hormones are not an option or you prefer not to take them:</strong> the
            non-hormonal medications, CBT, and clinical hypnosis are all supported by Level I
            evidence, and the newer neurokinin-targeted drugs are a major advance.
          </li>
          <li>
            <strong>Night sweats and insomnia are the main problem:</strong> bedtime-dosed options
            such as low-dose paroxetine, gabapentin, or elinzanetant are worth discussing, along
            with CBT for insomnia. In a MsFLASH pooled analysis, women with hot flashes and insomnia
            improved with CBT for insomnia.
            <C n={[1, 36]} />
          </li>
          <li>
            <strong>Anxiety or low mood travels with the hot flashes:</strong> SSRIs and SNRIs, and
            CBT, can treat both. In that same pooled analysis, women with hot flashes and
            psychosocial complaints improved with antidepressants or CBT for insomnia.
            <C n={[1, 36]} />
          </li>
          <li>
            <strong>Symptoms are mild and mostly a nuisance:</strong> cooling strategies, trigger
            experiments, and watchful waiting are reasonable, with a plan to revisit if things
            change.
          </li>
          <li>
            <strong>History of breast cancer or on hormone-blocking therapy:</strong> non-hormonal
            options, with careful attention to drug interactions, are the starting point. See the
            special situations section.
          </li>
        </UL>
        <P>
          The most important point is that you are choosing among real options, and choosing among
          them is a partnership, not a verdict handed down to you.
        </P>
      </section>

      {/* Section 14 */}
      <section id="cooling-and-lifestyle">
        <H2>Cooling Strategies and Lifestyle</H2>
        <P>
          Let me begin this section with the honest framing. The NAMS panel did not recommend
          cooling techniques, trigger avoidance, exercise, dietary modification, or mindfulness as
          treatments for hot flashes, because the trial evidence does not show that they reliably
          reduce how often hot flashes occur.
          <C n={1} /> I am going to cover them anyway, for three reasons. They are low-risk and
          low-cost. They can change how a hot flash feels and how well you sleep, which is what many
          women care about most. And a few of them, notably weight loss and CBT for insomnia, have
          real support. I just want you to hold them in the right category: comfort and health
          measures, not cures.
        </P>
        <H3>Build a night-sweat-proof bedroom</H3>
        <Fig
          src={bedroomImg}
          alt="Cool, well-prepared Midwest bedroom with layered sage cotton bedding, a tower fan, a carafe of ice water on the nightstand, and a folded spare nightgown on a chair"
          caption="A bedroom set up so that a night sweat is a 60-second inconvenience instead of a 90-minute ordeal."
        />
        <P>
          Here is the setup I recommend to women who are waking soaked. It is not glamorous, but it
          works for the thing it is meant to do, which is shorten the disruption.
        </P>
        <UL>
          <li>
            <strong>Cool the room before you get in.</strong> Many women sleep better in a bedroom
            that feels a little cool when they first lie down. If your thermostat or window air
            conditioner allows, test a few degrees lower for a week.
          </li>
          <li>
            <strong>Use layers, not one heavy cover.</strong> A sheet, a light blanket, and a
            comforter at the foot of the bed let you shed one at a time. The NAMS review lists fans,
            cold packs under the pillow, turning the pillow to the cool side, and dual-control
            electric blankets among the techniques women commonly use.
            <C n={1} />
          </li>
          <li>
            <strong>Choose breathable fabrics.</strong> Cotton, linen, bamboo-derived fabrics, and
            moisture-wicking sleepwear and sheets move moisture away from the skin. Polyester
            bedding and flannel are common culprits.
          </li>
          <li>
            <strong>Put a fan where it can reach you.</strong> A bedside or tower fan, or a bed fan
            that blows under the covers, speeds the cool-down that follows a flash.
          </li>
          <li>
            <strong>Keep the emergency kit within reach.</strong> A glass or carafe of ice water, a
            dry shirt, a small towel, and a cooling gel pack or washcloth in a nearby cooler. Wiping
            your neck and chest and changing your shirt is often what lets you fall back asleep.
          </li>
          <li>
            <strong>Separate bedding temperatures if you share a bed.</strong> Two single comforters
            or a dual-zone blanket prevent the nightly negotiation.
          </li>
        </UL>
        <P>
          A small pilot study of 20 postmenopausal women reported improvements in self-reported
          sleep problems and hot flashes over four weeks with a forehead cooling device plus sleep
          hygiene instructions, though it was uncontrolled and small.
          <C n={1} /> I mention it not to endorse a device, but to illustrate that cooling the body
          during sleep is at least a reasonable direction for future research.
        </P>
        <H3>Treat the insomnia directly: CBT for insomnia</H3>
        <P>
          Sleep problems in menopause are not always caused by hot flashes. As we noted, hot flashes
          account for some but not all of the sleep disturbance women report.
          <C n={7} /> That is why one of the best-supported interventions for women with both hot
          flashes and insomnia is not a hot flash treatment at all: it is cognitive behavioral
          therapy for insomnia, usually shortened to CBT-I. In the MsFLASH pooled analysis described
          in the NAMS statement, women with both vasomotor symptoms and insomnia improved with CBT
          for insomnia.
          <C n={[1, 36]} /> It teaches consistent sleep and wake timing, reduces time spent awake in
          bed, and addresses the worry about sleep that keeps the cycle going.
        </P>
        <P>
          CBT-I is best delivered by a trained clinician or a structured program, because some of
          its components, such as limiting time in bed, need to be done thoughtfully. If you are
          interested, ask your provider for a referral, since many therapists and programs now offer
          it by video. It pairs particularly well with the 3am-waking strategies we describe in the{" "}
          <PL slug="hormonal-sleep-anxiety-women-michigan-wisconsin">sleep and anxiety guide</PL>.
        </P>
        <H3>Weight and hot flashes: what the evidence supports</H3>
        <P>
          This is a delicate topic, so let me be careful. Many women have been told to lose weight
          for every symptom they have. I do not want to add to that. But in the specific case of hot
          flashes, there is evidence worth knowing. The SWAN data show that each additional unit of
          body mass index is associated with slightly higher odds of vasomotor symptoms.
          <C n={4} /> The NAMS review notes that women with obesity are more likely to report more
          frequent and severe hot flashes, that behavioral weight loss interventions in randomized
          trials have been associated with decreased vasomotor symptoms, and that adiposity may act
          as a risk factor earlier in the transition, in perimenopause and early postmenopause, but
          less so later.
          <C n={1} />
        </P>
        <P>
          The key trial is Alison Huang's six-month randomized study of 338 overweight or obese
          women with urinary incontinence. Among the women who were bothered by hot flashes at
          baseline, an intensive behavioral weight-loss program led to greater improvement in
          bothersome flushing than a health education program. Each 5 kg of weight loss was
          associated with improvement in flushing (odds ratio 1.32), and each 5 cm reduction in
          abdominal circumference was likewise associated with improvement.
          <C n={19} /> NAMS rates weight loss as a Level II to III option that may be considered,
          with the caveat that the studies are small or secondary analyses.
          <C n={1} />
        </P>
        <P>
          What does this mean practically? If you are carrying extra weight and your hot flashes are
          severe, meaningful, sustained weight loss may help, especially earlier in the transition.
          But I would not make weight loss the only plan, and I would never frame it as the reason
          you have symptoms. Many thin women have severe hot flashes, and many women with higher
          weights have none. Weight management in midlife is also hormonally and metabolically more
          complicated than calories in and out, which is what our{" "}
          <PL slug="the-ultimate-guide-to-hormones-and-weight-resistance-over-40">
            ultimate guide to hormones and weight resistance
          </PL>{" "}
          is about. If you are using or considering a GLP-1 medication, our{" "}
          <PL slug="ozempic-not-working-michigan-wisconsin-women">GLP-1 guide</PL> explains how to
          protect muscle and metabolism. I am not aware of trial data showing that GLP-1 medications
          directly treat hot flashes, so I would not choose one for that purpose.
        </P>
        <H3>Food: what we know and what we do not</H3>
        <P>
          The NAMS panel rated dietary modification as Level III, consensus and expert opinion only,
          and not recommended as a treatment, noting that research on diet and vasomotor symptoms is
          limited.
          <C n={1} /> There are interesting signals. A randomized trial of 84 postmenopausal women
          with frequent hot flashes found an 88 percent reduction in moderate to severe symptoms
          after twelve weeks on a low-fat, plant-based diet with a half-cup of cooked soybeans
          daily, compared with a 34 percent reduction in the control group. A cohort study
          associated high-fat and high-sugar diets with an increased risk of hot flashes.
          <C n={1} /> These are intriguing but small or observational, and the panel did not
          consider them sufficient to recommend.
        </P>
        <P>
          My own approach is pragmatic. I do not prescribe a diet for hot flashes. I do care about
          steady blood sugar, adequate protein, and not eating a very heavy meal right before bed,
          because overnight glucose swings can wake you in a sweat, as we discuss in the sleep
          guide. The classic Great Lakes dinner, such as a Friday fish fry with beer, a late brat
          and potato salad, or a heavy casserole at 8:30, is not wrong, but if you are waking at 2am
          it may be worth testing an earlier, lighter, protein-forward dinner for two weeks using
          the diary.
        </P>
        <H3>Stress, mindfulness, and the nervous system</H3>
        <P>
          Because heightened sympathetic nervous system activity narrows the thermoneutral zone,
          lowering that activity is a logical target.
          <C n={[7, 9]} /> The evidence for specific practices is less encouraging than the logic.
          In the NAMS review, a trial of mindfulness based stress reduction in 110 women with five
          or more moderate to severe hot flashes a day showed greater reductions in bother (about 22
          percent versus 10 percent) than a waitlist control, but the difference was only marginally
          significant, and the panel did not recommend it for hot flashes specifically.
          <C n={1} /> That does not mean mindfulness is useless. Studies of mindfulness for the
          whole constellation of menopausal symptoms, including anxiety, depression, and sleep
          disturbance, have generally shown positive effects. It means that if hot flashes are your
          main target, the stronger evidence is for CBT and clinical hypnosis, which we turn to
          next.
        </P>
        <H3>The 60-second hot flash first-aid routine</H3>
        <P>
          Finally, a tiny routine that I teach almost every woman, because it keeps a flash from
          snowballing into panic or embarrassment. It is not a treatment. It is a way of staying in
          charge of the moment.
        </P>
        <OL>
          <li>
            <strong>Name it.</strong> Quietly tell yourself, "This is a hot flash. It will pass in a
            few minutes." This simple reframing is a core component of CBT for hot flashes.
          </li>
          <li>
            <strong>Cool the pulse points.</strong> Cold water or a cold pack on the wrists, neck,
            or the insides of the elbows.
          </li>
          <li>
            <strong>Shed a layer</strong> if you can, and move toward cooler air, a fan, or an open
            window.
          </li>
          <li>
            <strong>Sip cold water</strong> slowly.
          </li>
          <li>
            <strong>Let your shoulders drop</strong> and exhale slowly. You do not need to count
            breaths. You are simply refusing to add a panic response on top of the flash.
          </li>
        </OL>
      </section>

      {/* Section 15 */}
      <section id="cbt-hypnosis-mind-body">
        <H2>CBT, Clinical Hypnosis, and Mind-Body Tools</H2>
        <Fig
          src={mindBodyImg}
          alt="Woman on a living room sofa in a Michigan home wearing headphones with eyes closed and one hand on her abdomen, practicing guided relaxation on an autumn evening"
          caption="Clinical hypnosis and CBT are two of the best-supported non-drug treatments for hot flashes."
        />
        <P>
          Women often react to the idea of CBT or hypnosis for hot flashes with some version of "so
          you're telling me it's in my head?" It is exactly the opposite. These treatments are
          effective precisely because hot flashes are a real, brain-mediated physiological event,
          and because the brain can be trained, to a meaningful degree, to change how it reacts to
          and interprets that event. The NAMS panel rates both as Level I, the strongest category,
          and recommends them.
          <C n={1} /> If you do not want hormones, cannot take them, or want to add to them, they
          deserve a seat at the table.
        </P>
        <H3>Cognitive behavioral therapy for hot flashes</H3>
        <P>
          CBT for hot flashes is a specific, structured program, not generic talk therapy. The
          version tested in the MENOS trials in the United Kingdom included education about the
          physiology of hot flashes and how thoughts and emotions affect the perception of physical
          sensations, training in relaxation and paced breathing, and cognitive and behavioral
          strategies, such as identifying and challenging unhelpful beliefs about hot flashes and
          monitoring and modifying triggers.
          <C n={1} />
        </P>
        <P>
          The evidence is solid. MENOS 1 randomized 96 breast cancer survivors and found that group
          CBT reduced how much hot flashes and night sweats were rated as a problem compared with
          usual care.
          <C n={37} /> MENOS 2 randomized 140 perimenopausal and postmenopausal women without a
          breast cancer history, all having ten or more problematic hot flashes or night sweats a
          week, to group CBT, guided self-help CBT, or no treatment, and found that both CBT formats
          significantly reduced problem ratings at six weeks.
          <C n={18} /> According to the NAMS review, the improvements were maintained at 26 weeks,
          and 65 to 78 percent of women in the CBT groups reached a clinically significant
          improvement, compared with far fewer in usual care.
          <C n={1} /> Later studies extended the approach to nurse-delivered and internet-delivered
          formats and to women with depressed mood.
        </P>
        <P>
          There are two honest caveats. First, CBT works more reliably on how much hot flashes
          bother and interfere with your life than on how many you have. Some studies showed little
          change in frequency. If frequency reduction is your goal, hypnosis or medication may be a
          better match. Second, many of the studies used waitlist or usual-care controls, which are
          less rigorous than controls matched for time and attention, so the effect may be somewhat
          smaller than headline numbers suggest.
          <C n={1} /> Even so, the body of evidence is consistent.
        </P>
        <H3>Clinical hypnosis</H3>
        <P>
          Clinical hypnosis is, for me, the most underused treatment in menopause medicine. It
          involves a deeply relaxed state, individualized imagery, and suggestion, and it has been
          used for decades for pain and anxiety. The key trial, by Gary Elkins and colleagues,
          randomized 187 postmenopausal women who had at least seven hot flashes a day to five
          weekly sessions of clinical hypnosis or a structured-attention control, plus daily
          self-hypnosis practice at home. After twelve weeks, subjectively reported hot flash
          frequency fell by 74 percent in the hypnosis group versus 17 percent in controls. Hot
          flash scores, which combine frequency and severity, fell by 80 percent versus 15 percent.
          And importantly, physiologically measured hot flashes, recorded by a skin conductance
          monitor rather than a diary, fell by 57 percent versus 10 percent.
          <C n={[17, 1]} />
        </P>
        <P>
          A smaller trial in 60 women with a history of breast cancer also found that clinical
          hypnosis was significantly better than no treatment at reducing hot flashes and improving
          mood and sleep.
          <C n={1} /> A follow-up analysis of the larger trial found that the effect was not
          explained by women's expectations about whether hypnosis would work.
          <C n={1} /> That matters, because it is the first thing skeptics assume. The NAMS review
          notes that the program can be delivered by a trained provider or through a smartphone app.
          <C n={1} />
        </P>
        <H3>What a hypnosis program actually involves</H3>
        <P>
          Clinical hypnosis for hot flashes is not stage hypnosis. You are awake and in control. A
          trained clinician, usually a psychologist, counselor, nurse, or physician with training in
          clinical hypnosis, guides you to a relaxed state and uses imagery associated with cooling,
          such as a cool mountain stream, a breeze across the lake, or a snowy field. You then
          practice, by recording or app, once or twice daily. The Great Lakes offer a rich
          vocabulary of cooling imagery, from standing in cold Lake Superior water to a January
          morning in the Northwoods. Women who have grown up near the lakes often take to it
          quickly.
        </P>
        <P>
          Ask your provider for a referral to a licensed health professional with training in
          clinical hypnosis. The American Society of Clinical Hypnosis, whose members must be
          licensed health care professionals, offers a public directory of certified practitioners.{" "}
          <X href="https://www.asch.net/Public/CertificationInformation/FindACertifiedProfessional.aspx">
            Search the ASCH directory
          </X>
          . The society itself notes that certification is not a guarantee of quality, so it is
          worth verifying a practitioner's state license as well. Many practitioners offer sessions
          by video, which matters in states with long rural distances.
        </P>
        <H3>Paced breathing, relaxation, and mindfulness: the surprising verdict</H3>
        <P>
          This one surprises almost everyone. Slow, paced breathing was reported to reduce hot
          flashes in several small laboratory studies, and it appears in nearly every handout. But
          two larger trials did not confirm it. In a randomized trial of 208 women, paced
          respiration was no better than shallow breathing or usual care for reducing hot flash
          frequency, severity, bother, or interference, and in a trial of 92 women it was no better
          than usual breathing. The NAMS panel rated paced respiration Level I, meaning good and
          consistent evidence, but not recommended, as it is unlikely to help hot flashes.
          <C n={1} /> Applied relaxation and mindfulness have limited and inconsistent evidence and
          are likewise not recommended as treatments for hot flashes.
          <C n={1} />
        </P>
        <P>
          Slow breathing is still a perfectly good way to calm a stress response, and it is part of
          CBT packages, which have good evidence as a whole. Think of it as a useful ingredient in a
          larger program, not as a stand-alone cure for hot flashes.
        </P>
        <H3>Which to choose?</H3>
        <Table
          head={["", "Clinical hypnosis", "CBT for hot flashes"]}
          rows={[
            [
              "Best evidence",
              "Large trial showing about 74 percent reduction in frequency, also measured physiologically",
              "Multiple trials showing reduced bother and interference, maintained at 26 weeks",
            ],
            [
              "What it changes most",
              "Frequency and severity",
              "How much flashes bother you, sleep, mood",
            ],
            [
              "Time commitment",
              "About five weekly sessions plus daily practice",
              "Group or guided self-help programs over several weeks",
            ],
            [
              "Good fit if",
              "You want a drug-free option and are willing to practice daily",
              "Anxiety, insomnia, or distress travel with your hot flashes",
            ],
            [
              "Combine with",
              "Lifestyle changes, or medication if needed",
              "CBT for insomnia, medication, or hormone therapy",
            ],
          ]}
        />
        <P>
          Both can be combined with every other option in this article, including hormone therapy.
          For women who want the least medication possible, or who are in a stage of life where
          adding a prescription feels like one too many, they are a serious first-line choice.
        </P>
      </section>

      {/* Section 16 */}
      <section id="hormone-therapy">
        <H2>Hormone Therapy: The Most Effective Option</H2>
        <Fig
          src={pharmacistImg}
          alt="Woman in her early 50s consulting with a friendly pharmacist at a bright pharmacy counter"
          caption="Hormone therapy is a prescription decision made with your provider, with your pharmacist as part of the team."
        />
        <P>
          We have a more detailed treatment of hormone therapy, including the Women's Health
          Initiative, delivery methods, pellets, compounding, and candidacy, in our{" "}
          <PL slug="bioidentical-hormone-therapy-guide-michigan-wisconsin">complete BHRT guide</PL>.
          This section will focus on one question: how well does hormone therapy treat hot flashes
          and night sweats, for whom, and with what trade-offs?
        </P>
        <H3>How well it works</H3>
        <P>
          Both the North American Menopause Society and the Endocrine Society state that hormone
          therapy is the most effective treatment for vasomotor symptoms.
          <C n={[2, 25]} /> The numbers back that up. A Cochrane systematic review of 24 randomized
          placebo-controlled trials with more than 3,300 participants found that oral hormone
          therapy reduced weekly hot flash frequency by about 75 percent relative to placebo, and
          significantly reduced severity as well.
          <C n={15} />
        </P>
        <P>
          A more recent trial gives a clearer picture of how it stacks up against a non-hormonal
          drug. The MsFLASH trial by Hadine Joffe and colleagues randomized 339 perimenopausal and
          postmenopausal women with at least two bothersome hot flashes or night sweats a day (mean
          of 8.1 per day at baseline) to low-dose oral estradiol 0.5 mg, extended-release
          venlafaxine 75 mg, or placebo for eight weeks. Estradiol reduced symptoms by 52.9 percent,
          venlafaxine by 47.6 percent, and placebo by 28.6 percent. The differences versus placebo
          were 2.3 fewer episodes a day for estradiol and 1.8 for venlafaxine, and treatment
          satisfaction was 70 percent for estradiol, 51 percent for venlafaxine, and 38 percent for
          placebo.
          <C n={16} />
        </P>
        <P>
          Notice two things. The placebo group improved by nearly 29 percent, which tells you how
          much of the apparent effect of any hot flash treatment is expectation and natural
          fluctuation. And the estradiol dose in that trial was fixed and low. The NAMS review
          points out that neither trial allowed dose escalation, and that with escalation estradiol
          would be expected to provide roughly a 77 percent improvement on average.
          <C n={1} /> In clinical practice, doses are adjusted to the individual woman.
        </P>
        <H3>Who is a good candidate</H3>
        <P>
          The NAMS 2022 position statement says that for women younger than 60, or within 10 years
          of menopause onset, who have no contraindications, the benefit-risk ratio is favorable for
          treating bothersome vasomotor symptoms and preventing bone loss. For women who start more
          than 10 years after menopause onset or after age 60, the benefit-risk ratio appears less
          favorable because of greater absolute risks of coronary heart disease, stroke, venous
          thromboembolism, and dementia.
          <C n={2} /> The Endocrine Society's guideline reaches a similar conclusion: benefits may
          exceed risks for most symptomatic postmenopausal women under 60 or within 10 years of
          menopause onset, with therapy individualized based on clinical factors and preferences.
          <C n={25} />
        </P>
        <P>
          This is often called the timing hypothesis, and it is the single most important concept
          for women who have been told that hormone therapy is dangerous. We unpack where that fear
          came from, including the 2002 WHI results, in our{" "}
          <PL slug="bioidentical-hormone-therapy-guide-michigan-wisconsin">BHRT guide</PL>. The
          short version is that the original trial enrolled women whose average age was 63, many a
          decade or more past menopause, and the risks look different for a healthy 50-year-old with
          bothersome symptoms.
        </P>
        <Callout title="Important: what hormone therapy is not for">
          <p>
            The Endocrine Society guideline is clear that current evidence does not justify using
            hormone therapy to prevent coronary heart disease, breast cancer, or dementia.
            <C n={25} /> The reasons to use it are symptom relief, bone protection in appropriate
            women, and quality of life.
          </p>
        </Callout>
        <H3>What changed in the FDA's stance in 2025 and 2026</H3>
        <P>
          You may have seen headlines about the FDA removing the "black box" warning from menopausal
          hormone therapy. Here is what actually happened, as best I can document it from the FDA's
          own announcements.
        </P>
        <P>
          On November 10, 2025, the Department of Health and Human Services and the FDA announced
          they were starting to revise the safety labeling of menopausal hormone therapy products,
          asking manufacturers to remove the language about cardiovascular disease, breast cancer,
          and probable dementia from the boxed warning, and to remove the recommendation to use the
          lowest effective dose for the shortest amount of time. The same notice asked for new
          language supporting consideration of hormone therapy for moderate to severe hot flashes in
          women under 60 or within 10 years of menopause, while keeping the cardiovascular and
          breast cancer information in the labeling as a whole.
          <C n={29} /> The FDA also said it would retain the boxed warning about endometrial cancer
          for systemic estrogen-alone products, which makes sense because estrogen without a
          progestogen in a woman with a uterus raises that risk.
          <C n={29} /> On February 12, 2026, the FDA announced that it had approved labeling changes
          for the first six products, spanning systemic combination therapy, estrogen-alone therapy,
          progestogen-alone therapy, and topical vaginal estrogen, and that 29 companies had
          submitted proposed changes at the agency's request.
          <C n={30} /> The agency's stated rationale cited randomized studies showing that women who
          start therapy within 10 years of the onset of menopause, generally before age 60, have
          reduced all-cause mortality and fractures.
          <C n={30} />
        </P>
        <P>
          Two clarifications. First, this is a labeling change, not a declaration that hormone
          therapy is risk-free. NAMS emphasizes that risks vary by type, dose, duration, route of
          administration, timing of initiation, and whether a progestogen is used,
          <C n={2} /> and the decision remains individual. Second, the rollout is happening product
          by product. I could verify the first six approvals, but not every later one, so the
          current label for the specific product you are considering is what matters. Your
          prescriber can check it.
        </P>
        <H3>The practical details</H3>
        <UL>
          <li>
            <strong>If you have a uterus, you need a progestogen</strong> alongside estrogen to
            protect the lining of the uterus. If you do not, estrogen alone is typically used.
          </li>
          <li>
            <strong>Route matters.</strong> Estrogen can be given by patch, gel, or spray through
            the skin, or by mouth. Many clinicians prefer transdermal estrogen for many women, in
            part because of a lower clot risk. We review the evidence and the pros and cons of each
            delivery method in the BHRT guide.
          </li>
          <li>
            <strong>Micronized progesterone</strong>, a bioidentical form, is widely used and can
            have a calming, sleep-promoting effect for some women.
          </li>
          <li>
            <strong>Low-dose vaginal estrogen</strong> treats genitourinary symptoms such as vaginal
            dryness and painful sex, and the NAMS 2022 statement recommends it for those symptoms in
            women without indications for systemic therapy.
            <C n={2} /> It is a different tool for a different problem, and it is not a treatment
            for hot flashes.
          </li>
          <li>
            <strong>Expect adjustment.</strong> Doses often need tuning in the first several months.
            Many women notice early changes in sleep and hot flash frequency within the first weeks,
            with more consistent improvement by months two to three.
          </li>
          <li>
            <strong>Reevaluate regularly.</strong> The NAMS 2022 statement says longer durations of
            therapy should be tied to documented indications, such as persistent vasomotor symptoms,
            with shared decision-making and periodic reevaluation.
            <C n={2} />
          </li>
        </UL>
        <H3>Who should not take it</H3>
        <P>
          The 2023 NAMS nonhormone statement describes women who are not good candidates for hormone
          therapy because of contraindications, with estrogen-dependent cancers and cardiovascular
          disease given as examples.
          <C n={1} /> Active or recent breast cancer, a history of blood clots, stroke, or heart
          attack, unexplained vaginal bleeding, and active liver disease are the classic reasons for
          caution. A strong family history, migraine with aura, and several other situations call
          for a more individualized conversation, which we cover in the candidacy section of the
          BHRT guide. Do not rule yourself out based on a fear you inherited from a headline. And do
          not rule yourself in without a proper evaluation.
        </P>
        <H3>Compounded, "bioidentical," and pellets: a brief word</H3>
        <P>
          "Bioidentical" simply means molecularly identical to hormones your body makes, and
          FDA-approved bioidentical estradiol and micronized progesterone are available as patches,
          gels, and capsules. Custom-compounded preparations and pellets are a separate category
          with their own advantages and drawbacks, including dose flexibility but also variable
          absorption, the fact that pellets cannot be adjusted once placed, and generally no
          insurance coverage. We discuss all of this in detail in the{" "}
          <PL slug="bioidentical-hormone-therapy-guide-michigan-wisconsin">BHRT guide</PL>, and I
          will not repeat it here.
        </P>
        <Cta
          heading="Curious whether hormone therapy might be right for you?"
          body="A free assessment call is a low-pressure conversation about your symptoms, your history, and whether hormone therapy or another option fits. It is not a sales pitch and not a commitment."
        />
      </section>

      {/* Section 17 */}
      <section id="non-hormonal-prescriptions">
        <H2>Non-Hormonal Prescription Options</H2>
        <Fig
          src={pillOrganizerImg}
          alt="Woman in her late 40s filling a weekly pill organizer at a Michigan kitchen counter beside a glass of water and printed information"
          caption="Non-hormonal prescriptions work best with a clear plan for dosing, monitoring, and follow-up."
        />
        <P>
          For women who cannot take hormone therapy, do not want to, or want something in addition
          to it, there are now several well-studied non-hormonal prescription options. When the NAMS
          statement was written in early 2023, only two were FDA approved for hot flashes:
          paroxetine 7.5 mg and fezolinetant 45 mg. A third, elinzanetant, was approved in October
          2025. A handful of other medications, used off-label, also have good evidence.
          <C n={[1, 28]} /> Here is a plain-language tour of each.
        </P>
        <H3>Low-dose paroxetine (Brisdelle)</H3>
        <P>
          Paroxetine mesylate 7.5 mg, sold as Brisdelle, was the first non-hormonal medication
          approved by the FDA for moderate to severe hot flashes, in 2013. It is a low-dose version
          of an SSRI antidepressant, taken as a single 7.5 mg capsule at bedtime, and it is not an
          antidepressant dose. The label states that it is not indicated for any psychiatric
          condition, and that patients who need paroxetine for a psychiatric condition should switch
          to a different product.
          <C n={32} /> According to the NAMS review, hot flash severity and frequency improved for
          up to 24 months in the pivotal studies, along with improvements in sleep disruption,
          without weight gain or negative effects on libido.
          <C n={[1, 31]} />
        </P>
        <P>
          The big caution is for women taking tamoxifen. Paroxetine and fluoxetine strongly inhibit
          CYP2D6, the enzyme that converts tamoxifen into its most active form, so they are
          generally avoided in that situation. Safer SSRI and SNRI choices for women on tamoxifen
          include venlafaxine, desvenlafaxine, escitalopram, and citalopram.
          <C n={1} />
        </P>
        <H3>Other SSRIs and SNRIs</H3>
        <P>
          Several antidepressants at doses lower than or similar to those used for depression reduce
          hot flashes. The NAMS review found mild to moderate improvements, with hot flash
          reductions ranging from 25 to 69 percent across drugs, and found that paroxetine,
          escitalopram, citalopram, venlafaxine, and desvenlafaxine significantly reduced symptoms
          in large, double-blind trials, with duloxetine showing benefit in smaller studies.
          Sertraline and fluoxetine showed trends that were not statistically significant and are
          not recommended.
          <C n={1} /> A pooled analysis of three MsFLASH trials found that escitalopram 10 to 20 mg,
          oral estradiol 0.5 mg, and venlafaxine 75 mg produced comparable reductions in the
          frequency of hot flashes.
          <C n={[1, 33]} />
        </P>
        <P>
          Typical suggested dosing from the NAMS statement includes escitalopram 10 to 20 mg daily,
          citalopram 10 to 20 mg daily, venlafaxine 37.5 to 150 mg daily, and desvenlafaxine 100 to
          150 mg daily, each started low and increased as tolerated. Nausea or dizziness typically
          improves after one to two weeks, and onset of benefit is usually within about two weeks.
          <C n={1} /> These drugs are particularly appealing when hot flashes come with anxiety, low
          mood, or irritability, because they can treat both. They are not appropriate for everyone:
          contraindications include prior neuroleptic malignant syndrome, serotonin syndrome, and
          concurrent MAO inhibitors, and caution is advised with uncontrolled seizures, bipolar
          disorder, kidney or liver insufficiency, low sodium, and poorly controlled hypertension.
          They carry the standard antidepressant boxed warning regarding suicidal thinking in
          adolescents and children.
          <C n={1} /> Please do not stop an antidepressant suddenly. Work with the prescriber who
          started it.
        </P>
        <H3>Gabapentin</H3>
        <P>
          Gabapentin is an anti-seizure and nerve pain medication that, in several trials at 900 mg
          a day (300 mg three times daily), improved both the frequency and severity of hot flashes.
          In a placebo-controlled trial, a higher dose titrated to 2,400 mg a day was as beneficial
          as conjugated equine estrogens 0.625 mg for reducing hot flash severity scores, although
          side effects at that dose, including dizziness, headache, and disorientation, limited its
          usefulness.
          <C n={1} /> Common side effects include dizziness, unsteadiness, and drowsiness, typically
          in the first week, improving in the second and resolving by about week four.
          <C n={1} />
        </P>
        <P>
          Because drowsiness is the main side effect and the drug is short-acting, bedtime dosing is
          often a good fit for women whose main problem is night sweats and disrupted sleep. The
          NAMS suggested dosing is 900 to 2,400 mg a day in divided doses, started at 100 to 300 mg
          at night. As with all antiepileptic drugs, there is a standard warning about suicidal
          thoughts or behaviors.
          <C n={1} /> Because gabapentin itself causes drowsiness, it also deserves extra care when
          combined with alcohol or other sedating medications.
        </P>
        <H3>Oxybutynin</H3>
        <P>
          Oxybutynin is a medication for overactive bladder that happens to reduce sweating, and
          several randomized trials, including a double-blind trial of 150 women in the ACCRU
          SC-1603 study that included women with and without breast cancer, found it improved
          moderate to severe hot flashes.
          <C n={[34, 35]} /> NAMS rates it as Level I to II and recommends it. The usual side effect
          is dry mouth, with urinary difficulties also reported, and because long-term
          anticholinergic use may be associated with cognitive decline, particularly in older
          adults, it is generally a choice for shorter-term use or for women who can tolerate it and
          have no other risk factors.
          <C n={1} /> I mention it because it is inexpensive, and some women find it works well when
          other drugs do not.
        </P>
        <H3>Clonidine, pregabalin, and suvorexant</H3>
        <P>
          Three other drugs come up. NAMS does <strong>not</strong> recommend clonidine, because it
          is only modestly better than placebo and less effective than SSRIs, SNRIs, and gabapentin,
          with side effects including low blood pressure, dizziness, and sedation. It does not
          recommend pregabalin, because of side effects, weight gain, and its status as a controlled
          substance. And it does not recommend suvorexant, a sleep medication that reduced nighttime
          hot flashes in one small study, given limited data.
          <C n={1} /> If someone offers you one of these first, it is fair to ask why, and what the
          alternatives were.
        </P>
        <H3>Fezolinetant (Veozah)</H3>
        <P>
          Fezolinetant, approved by the FDA on May 12, 2023, was the first neurokinin 3 receptor
          antagonist approved for menopausal hot flashes.
          <C n={26} /> It works by blocking the receptor that neurokinin B uses to disrupt the
          temperature-control center, which is the circuit we described earlier. The dose is one 45
          mg tablet daily, taken at the same time each day, with or without food.
          <C n={26} />
        </P>
        <P>
          In SKYLIGHT 1, a phase 3 trial, women aged 40 to 65 with an average of seven or more
          moderate to severe hot flashes a day were randomized to placebo, fezolinetant 30 mg, or
          fezolinetant 45 mg. Both doses significantly reduced the frequency of hot flashes compared
          with placebo at week 4, and the NAMS review describes fezolinetant as more beneficial than
          placebo through 12 weeks of use.
          <C n={[1, 12]} /> The NAMS review rated fezolinetant Level I, recommended, and noted that
          early evidence suggests benefit for quality of life, distress about hot flashes, nighttime
          awakenings, and sleep quality.
          <C n={1} />
        </P>
        <Callout title="Fezolinetant and your liver: what you need to know">
          <p>
            In September 2024, the FDA added a warning about rare but serious liver injury after a
            report of a patient with elevated liver tests and symptoms of liver injury after about
            40 days of treatment. In December 2024, the FDA upgraded this to a Boxed Warning, its
            most prominent warning.
            <C n={27} />
          </p>
          <p>
            The FDA requires liver blood tests before you start and regular testing after you start.
            The FDA's own pages describe the early follow-up schedule in two slightly different
            ways, either monthly for the first two months and then at months 3, 6, and 9, or monthly
            for the first three months and then at months 6 and 9, so your prescriber will give you
            the exact schedule from the current label.
            <C n={27} />
          </p>
          <p>
            Stop the medication immediately and contact your prescriber if you develop symptoms that
            suggest liver trouble, which the FDA lists as unusual fatigue, nausea and vomiting,
            unusual itching, pale or light-colored stools, yellowing of the eyes or skin, dark
            urine, abdominal swelling, or pain in the upper right abdomen.
            <C n={27} /> The FDA's approval announcement also lists known cirrhosis, severe kidney
            impairment, and end-stage kidney disease as contraindications, and says fezolinetant
            cannot be used with CYP1A2 inhibitors.
            <C n={26} /> Check the current label for any updates.
          </p>
        </Callout>
        <P>
          The most common side effects reported to the FDA include abdominal pain, diarrhea,
          insomnia, back pain, hot flushes, and elevated liver enzymes.
          <C n={26} /> For women who cannot or will not take hormones, fezolinetant is a real
          advance. It simply needs the liver monitoring that goes with it.
        </P>
        <H3>Elinzanetant (Lynkuet)</H3>
        <P>
          Elinzanetant, approved by the FDA in October 2025, blocks both the neurokinin 3 and
          neurokinin 1 receptors and is taken once daily at bedtime. The FDA label gives the
          recommended dose as 120 mg (two 60 mg capsules) at about the same time each day, with or
          without food, swallowed whole.
          <C n={28} />
        </P>
        <P>
          In the two OASIS 1 and 2 phase 3 trials, postmenopausal women aged 40 to 65 with moderate
          to severe hot flashes were randomized to elinzanetant 120 mg or placebo. Elinzanetant
          significantly reduced frequency at week 4 and week 12 and also improved sleep disturbance
          and menopause-related quality of life.
          <C n={13} /> In the 52-week OASIS 3 trial of 628 women, the average change in daily
          moderate to severe hot flashes at week 12 was 5.4 fewer for elinzanetant and 3.5 fewer for
          placebo, a difference of 1.6 per day (95 percent confidence interval 1.1 to 2.0 fewer).
          <C n={14} />
        </P>
        <P>
          The label includes specifics you should know. Nervous system effects such as sleepiness,
          fatigue, dizziness, and vertigo occurred in 11.9 percent of women on elinzanetant versus
          3.5 percent on placebo across the OASIS trials, so you should be careful about driving
          until you know how it affects you. Across the 52-week OASIS 3 trial, headache (9.6 percent
          versus 7.0 percent), fatigue (7.3 versus 2.9 percent), dizziness (6.1 versus 1.9 percent),
          and sleepiness (5.1 versus 1.3 percent) were the most common adverse reactions.
          <C n={28} />
        </P>
        <UL>
          <li>
            <strong>Liver testing:</strong> baseline blood tests (ALT, AST, alkaline phosphatase,
            and bilirubin) before starting, with a repeat transaminase test three months after
            starting. Do not start if ALT or AST, or total bilirubin, is at least twice the upper
            limit of normal, and stop if transaminase elevations exceed five times the upper limit,
            or three times with a bilirubin above twice the limit.
            <C n={28} />
          </li>
          <li>
            <strong>Pregnancy:</strong> contraindicated in pregnancy, with a requirement to exclude
            pregnancy before starting and to use effective contraception during treatment and for
            two weeks after stopping.
            <C n={28} />
          </li>
          <li>
            <strong>Drug and food interactions:</strong> avoid grapefruit and grapefruit juice and
            strong CYP3A4-inhibiting drugs, avoid strong and moderate CYP3A4 inducers, and reduce
            the dose to 60 mg with moderate CYP3A4 inhibitors.
            <C n={28} />
          </li>
          <li>
            <strong>Other cautions:</strong> not recommended in end-stage kidney disease or moderate
            to severe liver impairment, and use caution with a history of seizures.
            <C n={28} />
          </li>
        </UL>
        <P>
          I want to be careful about one point. In the European Union, regulators authorized
          elinzanetant in November 2025 for hot flashes linked to menopause or caused by adjuvant
          endocrine therapy for breast cancer.
          <C n={50} /> The U.S. label I reviewed lists only the menopause indication, and I could
          not confirm that the FDA has approved the breast cancer indication. If that is your
          situation, ask your oncology team and prescriber about the current U.S. status, and do not
          assume.
        </P>
        <H3>At a glance: the prescription options</H3>
        <Table
          head={["Medication", "Typical dose", "Often a good fit when", "Key cautions"]}
          rows={[
            [
              "Paroxetine 7.5 mg (Brisdelle)",
              "7.5 mg at bedtime",
              "Night sweats with sleep disruption; you want an FDA-approved non-hormonal option",
              "Avoid with tamoxifen; antidepressant class cautions",
            ],
            [
              "Escitalopram, citalopram, venlafaxine, desvenlafaxine",
              "Escitalopram 10 to 20 mg; citalopram 10 to 20 mg; venlafaxine 37.5 to 150 mg; desvenlafaxine 100 to 150 mg",
              "Hot flashes with anxiety, low mood, or irritability; women on tamoxifen (choose carefully)",
              "Nausea, dizziness, sexual side effects; do not stop suddenly",
            ],
            [
              "Gabapentin",
              "900 to 2,400 mg per day, often mostly at bedtime",
              "Predominantly night sweats and insomnia",
              "Drowsiness, dizziness; use carefully with alcohol and sedatives",
            ],
            [
              "Oxybutynin",
              "2.5 to 5 mg twice daily, up to 15 mg extended-release",
              "Other options failed or are not tolerated",
              "Dry mouth; anticholinergic cognitive concerns, especially in older adults",
            ],
            [
              "Fezolinetant (Veozah)",
              "45 mg daily",
              "Moderate to severe hot flashes; cannot or will not use hormones",
              "Boxed warning for liver injury; scheduled liver tests; interactions",
            ],
            [
              "Elinzanetant (Lynkuet)",
              "120 mg at bedtime",
              "Moderate to severe hot flashes with sleep disturbance; cannot or will not use hormones",
              "Daytime drowsiness; liver tests; pregnancy contraindication; grapefruit and interaction limits",
            ],
          ]}
        />
        <P>
          A final practical point. Insurance coverage and out-of-pocket costs for the newer
          medications vary widely, so ask about coverage and pharmacy options before you decide, and
          do not assume that the first price quoted is the only one. I am glad to talk through these
          options with any woman who wants a prescription-based plan, and I will refer you to a
          specialist, such as a breast oncology team or a pain specialist, when that is the better
          choice for your situation.
        </P>
      </section>

      {/* Section 18 */}
      <section id="supplements-and-herbs">
        <H2>Supplements and Herbal Remedies</H2>
        <Fig
          src={coopAisleImg}
          alt="Woman in her early 50s reading the back of a supplement bottle with a skeptical expression in a Midwestern natural foods co-op"
          caption="Before you buy, ask what the trial evidence actually shows, and tell your provider what you take."
        />
        <P>
          Walk into any health food store or natural foods co-op in Ann Arbor, Madison, Traverse
          City, or Milwaukee, and there is an entire shelf devoted to menopause. I respect the
          tradition of herbal and nutritional medicine, and many Michigan and Wisconsin women have
          good relationships with the herbalists and co-ops in their communities. But I owe you the
          same honesty I would want. The evidence for these products as hot flash treatments is
          disappointing, and the NAMS panel put it plainly: given the lack of rigorous,
          evidence-based research supporting any over-the-counter supplements and herbal therapies
          for hot flashes, these remedies are not recommended.
          <C n={1} />
        </P>
        <P>
          The panel also noted something that every consumer should know: dietary supplements are
          marketed directly to consumers with claims about relieving symptoms, despite limited
          evidence, and there is no government regulation to ensure their purity and safety.
          <C n={1} /> Here is what the panel concluded about the most common ones.
        </P>
        <Table
          head={["Product", "What the NAMS 2023 review found", "Rating"]}
          rows={[
            [
              "Soy foods, soy extracts, equol",
              "Mixed results. Only about 35 percent of North American women can convert soy isoflavone daidzein to equol, and there is no commercially available test to tell who can.",
              "Level II, not recommended",
            ],
            [
              "Black cohosh",
              "A 2012 Cochrane review of 16 trials in 2,027 women found no significant difference from placebo in hot flash frequency; liver injury reports led to a recommended warning label.",
              "Level I, not recommended",
            ],
            [
              "Wild yam creams",
              "No benefit in a trial; tested creams often contained no yam, and many contained undisclosed steroids.",
              "Level II, not recommended",
            ],
            [
              "Dong quai",
              "No difference from placebo in a 24-week trial; safety concerns include photosensitivity and effects on blood clotting.",
              "Level II, not recommended",
            ],
            [
              "Evening primrose oil",
              "Did not beat placebo in a six-month trial.",
              "Level II, not recommended",
            ],
            [
              "Ginseng",
              "Several trials showed no benefit over placebo.",
              "Level I, not recommended",
            ],
            [
              "Chasteberry (Vitex)",
              "The largest and most rigorous trial found no difference from placebo.",
              "Level II, not recommended",
            ],
            [
              "Maca, milk thistle, pollen extract, ammonium succinate, rhubarb extract, Lactobacillus",
              "Limited, small, manufacturer-sponsored, or low-retention studies.",
              "Level II to III, not recommended",
            ],
            [
              "Omega-3 fatty acids",
              "Mixed: one small trial positive, a larger trial (177 women on omega-3 versus 178 on placebo) found no difference.",
              "Level III, not recommended",
            ],
            ["Vitamin E", "Little evidence of meaningful benefit.", "Level I, not recommended"],
            [
              "Cannabinoids",
              "More than one in four women has used cannabis for menopause symptoms, but there is almost no good-quality evidence for hot flashes.",
              "Level II, not recommended",
            ],
          ]}
        />
        <P>
          Two details in the review are worth highlighting. First, black cohosh is the most
          purchased botanical for menopause symptoms, and after reports of possible liver injury
          began appearing after 2000, an expert committee directed that black cohosh products carry
          a warning to discontinue use and consult a healthcare practitioner if you have a liver
          disorder or develop symptoms of liver trouble, such as abdominal pain, dark urine, or
          jaundice.
          <C n={1} /> Second, the supposed hormone-like benefit of wild yam cream is scientifically
          untenable: the body has no pathway to convert the diosgenin in yam into progesterone, and
          analyses have found some creams to contain undisclosed steroids.
          <C n={1} /> "Natural" does not mean safe, and it does not mean it works.
        </P>
        <H3>If you want to try one anyway</H3>
        <P>
          Some women will want to try a supplement regardless, and that is your right. Here is how I
          would do it safely.
        </P>
        <OL>
          <li>
            <strong>Tell your provider and pharmacist.</strong> Some herbs interact with
            medications, affect the liver, or are inappropriate with certain conditions or cancer
            treatments.
          </li>
          <li>
            <strong>Try one thing at a time,</strong> so you know what you are evaluating.
          </li>
          <li>
            <strong>Give it a fair, defined trial,</strong> twelve to sixteen weeks for most, since
            the NAMS review notes that more than 13 weeks may be needed to see half the maximum
            effect of soy, and use your diary to measure.
            <C n={1} />
          </li>
          <li>
            <strong>Choose products with third-party testing,</strong> such as a USP or NSF seal,
            because purity varies widely.
          </li>
          <li>
            <strong>Set a budget and a stop date.</strong> If the diary does not show a clear
            change, stop, and do not let months of hope delay treatment that works.
          </li>
          <li>
            <strong>Stop and call your provider</strong> if you develop dark urine, yellowing of the
            skin or eyes, abdominal pain, unusual bleeding, or new symptoms.
          </li>
        </OL>
        <P>
          The real risk of supplements is not usually that they harm you. It is that they cost money
          and, more importantly, months or years during which you could have been sleeping better. A
          hot flash trial with a 20 to 66 percent placebo response means a very large share of the
          satisfied customers are experiencing placebo effect and natural fluctuation.
          <C n={1} />
        </P>
      </section>

      {/* Section 19 */}
      <section id="procedures-and-devices">
        <H2>Procedures, Acupuncture, and Devices</H2>
        <Fig
          src={procedureRoomImg}
          alt="Calm, modern outpatient procedure room with a padded treatment chair, soft lighting, and a window with winter light"
          caption="Procedures such as a stellate ganglion block are done by specialists in a clinical setting."
        />
        <H3>Stellate ganglion block</H3>
        <P>
          A stellate ganglion block is an injection of local anesthetic near a cluster of nerves in
          the lower neck, widely used for certain pain conditions. It has emerged as a potential
          option for severe hot flashes, although the mechanism is not clear. In a small
          sham-controlled randomized trial of 40 women with natural or surgical menopause, the real
          procedure reduced self-reported intensity and frequency of moderate to very severe hot
          flashes over six months compared with a sham injection, and objective skin conductance
          measures fell by 21 percent at three months, while the sham group did not change.
          Open-label studies reported reductions of 45 to 90 percent.
          <C n={1} /> NAMS rates it Level II to III and says it may be considered for select women,
          with the caveat that it is a procedure with potential risks and that larger trials are
          ongoing.
          <C n={1} /> It is not something I perform, but I will refer women to a pain or anesthesia
          specialist when it is the right next step.
        </P>
        <H3>Acupuncture</H3>
        <P>
          Many women ask about acupuncture. The NAMS review found that most systematic reviews
          concluded acupuncture had little to no clinical benefit for hot flashes compared with sham
          needling, although it did appear to improve other menopause-related symptoms such as mood,
          sleep, and pain. Traditional acupuncture was rated Level I, not recommended, for hot
          flashes. Electroacupuncture showed some promise, including in one model-based
          meta-analysis that found its effect comparable to some medications, but the panel said it
          needs more rigorous study.
          <C n={1} /> If you enjoy acupuncture and find it relaxing, that has real value,
          particularly for sleep and mood. Just do not rely on it as your only treatment for severe
          hot flashes.
        </P>
        <H3>Devices and other technologies</H3>
        <P>
          The NAMS review did not recommend high-resolution relational resonance-based
          electroencephalic mirroring, a neurotechnology that has been studied in only a small
          uncontrolled group of 14 women, and found no clinical trials supporting chiropractic
          interventions for hot flashes.
          <C n={1} /> Small studies of forehead cooling devices are encouraging for sleep but are
          limited. Wearable cooling products and cooling pillows are low-risk comfort tools, and I
          have no objection to women trying them. I simply would not expect them to substitute for
          treatment.
        </P>
      </section>

      {/* Section 20 */}
      <section id="special-situations">
        <H2>Special Situations</H2>
        <Fig
          src={milwaukeeWomenImg}
          alt="Three women of different ages and backgrounds talking warmly on a Milwaukee lakefront path with the skyline behind them"
          caption="Your circumstances change the plan. Every woman's history deserves an individualized conversation."
        />
        <P>
          Some women's circumstances change the calculus. Here are the situations I am asked about
          most. These are summaries, and your own history always takes precedence.
        </P>
        <H3>If you have had breast cancer or take tamoxifen or an aromatase inhibitor</H3>
        <P>
          Hot flashes and night sweats are extremely common after breast cancer treatment. In the
          MENOS 1 trial introduction, the authors note that they affect 65 to 85 percent of women
          after breast cancer treatment.
          <C n={37} /> Systemic hormone therapy is generally not recommended after a personal
          history of breast cancer, as we discuss in the BHRT guide, so non-hormonal options are the
          starting point. CBT and clinical hypnosis both have strong trial evidence in breast cancer
          survivors specifically.
          <C n={1} /> Among medications, venlafaxine, desvenlafaxine, escitalopram, and citalopram
          are the safer antidepressant choices if you take tamoxifen, while paroxetine and
          fluoxetine should generally be avoided because of their effect on tamoxifen metabolism,
          and oxybutynin and gabapentin have been studied in women with breast cancer too.
          <C n={[1, 34]} /> Please coordinate every decision with your oncology team.
        </P>
        <H3>If you had a hysterectomy or your ovaries were removed</H3>
        <P>
          Removing both ovaries causes an abrupt drop in hormones, and hot flashes can be sudden and
          severe. SSRIs and SNRIs reduce vasomotor symptoms whether menopause is natural or
          surgical.
          <C n={1} /> A woman without a uterus does not need a progestogen alongside estrogen, which
          changes the hormone therapy picture, and we cover this in the BHRT guide's FAQ. If your
          ovaries were removed before the usual age of menopause, the situation is different from
          natural menopause, and I would want you to have an individualized discussion with a
          provider who understands menopause, not just rely on the rule of thumb about age 60. Our{" "}
          <PL slug="perimenopause-brain-fog-memory-michigan-wisconsin">brain fog guide</PL> also
          addresses surgical menopause in its FAQ.
        </P>
        <H3>If you are on birth control, or recently stopped</H3>
        <P>
          Hormonal contraception can mask the signs of perimenopause, including hot flashes, and
          symptoms sometimes surface when a woman stops. If you are in your late 30s or 40s and your
          hot flashes appeared after coming off the pill or an IUD, perimenopause is a real
          possibility, alongside PCOS and other causes. We discuss this in the FAQs of our{" "}
          <PL slug="perimenopause-in-your-30s-michigan-wisconsin">
            perimenopause in your 30s guide
          </PL>{" "}
          and our <PL slug="pcos-weight-resistance-women-30s-michigan-wisconsin">PCOS guide</PL>.
        </P>
        <H3>If you are under 40</H3>
        <P>
          Hot flashes and night sweats before 40 are not ordinary and deserve an evaluation. The
          NICE guideline notes that FSH testing is appropriate when premature ovarian insufficiency
          is suspected in a woman under 40, and that the diagnosis should not rest on a single blood
          test.
          <C n={44} /> Other causes, including thyroid disease, pregnancy, medications, and
          infection, should be considered. If you are under 40 and drenched at night, please do not
          let anyone tell you it is just stress.
        </P>
        <H3>If you are on a GLP-1 or in the middle of weight loss</H3>
        <P>
          Rapid weight loss, reduced eating, and changes in blood sugar can alter sweating and
          sleep, and the muscle-protection concerns we describe in our{" "}
          <PL slug="ozempic-not-working-michigan-wisconsin-women">GLP-1 guide</PL> apply regardless
          of hot flashes. If your night sweats began soon after starting a new medication, mention
          it to your prescriber rather than assuming the cause.
        </P>
        <H3>If you are Black, and have been told your symptoms are nothing</H3>
        <P>
          I want to say something plainly. In the SWAN data, African American women reported
          vasomotor symptoms more often and had the longest duration, a median of 10.1 years.
          <C n={[3, 4]} /> Women who bring this up and are told it is nothing are being underserved
          by a health system that has not caught up to the data. If you are in Detroit, Flint,
          Milwaukee, Racine, or anywhere else and you have been dismissed, bring the diary, bring
          the statistics from this article, and do not take silence for an answer. You are not
          complaining. You are reporting a medical condition with a documented, longer-than-average
          course.
        </P>
        <H3>If you work nights, on your feet, or in the heat</H3>
        <P>
          Nurses, factory workers, teachers, farm and food processing workers, and many others
          cannot step away when a flash hits. Practical adjustments, such as moisture-wicking base
          layers, a small clip-on fan, a cooling towel in a bag, and scheduling breaks when
          possible, help. Night shift workers have extra challenges because they sleep during the
          day, in a warmer, brighter house. A cool, dark bedroom with blackout curtains and a fan
          matters even more, and a CBT-I program tailored for shift work is worth asking about.
        </P>
        <H3>If you are over 60, or more than 10 years past menopause</H3>
        <P>
          The NAMS 2022 statement says the benefit-risk ratio of starting hormone therapy appears
          less favorable for these women,
          <C n={2} /> so the non-hormonal approaches in this article are often the better starting
          point. Persistent hot flashes at this stage are not unusual, since a meaningful fraction
          of women have symptoms for more than 10 years,
          <C n={1} /> and you deserve treatment, not dismissal.
        </P>
      </section>

      {/* Section: Partners, family, and work */}
      <section id="partners-family-and-work">
        <H2>Talking With Your Partner, Your Family, and Your Workplace</H2>
        <Fig
          src={partnerImg}
          alt="Middle-aged couple in a Michigan bedroom in the early morning, the man handing the woman a glass of water as she sits up in bed with separate light blankets nearby"
          caption="A little explanation and a few practical changes can take the friction out of shared nights."
        />
        <P>
          Hot flashes and night sweats are not a private experience, even when we try to keep them
          private. They show up in shared beds, shared thermostats, family dinners, and meetings. A
          surprising amount of the distress women describe to me is not the heat itself. It is the
          friction around it: the partner who keeps turning the heat up, the teenager who rolls
          their eyes, the colleague who comments on the fan, the manager who does not understand why
          you keep stepping out. This section is about reducing that friction, because less friction
          means less stress, and as we have seen, stress and anxiety are linked to more bothersome
          symptoms.
          <C n={[4, 7]} />
        </P>
        <H3>With your partner</H3>
        <P>
          The most useful thing you can do is explain what is actually happening, in plain language,
          and ask for specific help. Many partners genuinely do not know that a hot flash is a
          brain-mediated heat-dissipation response, that it can wake you drenched at 3am, or that
          the chill afterward is part of it. A short, matter-of-fact explanation lands better than a
          frustrated one at midnight. Something like: "My body's thermostat is misfiring. It is not
          about you, and it is not about the room. Here is what would help."
        </P>
        <UL>
          <li>
            <strong>Solve the bed, not the argument.</strong> Two lighter covers instead of one big
            comforter, a dual-zone blanket, or a fan on your side lets each of you sleep at your own
            temperature without anyone feeling blamed.
          </li>
          <li>
            <strong>Agree on a signal.</strong> A hand squeeze or a quiet word that means "hot
            flash, I'll be back in five minutes" saves a lot of confusion and worry, especially when
            the heart racing starts.
          </li>
          <li>
            <strong>Share the diary.</strong> Partners who see the pattern, such as the nights after
            wine or the weeks of high stress, tend to become allies rather than critics.
          </li>
          <li>
            <strong>Ask for what you need.</strong> That might be the thermostat a few degrees
            lower, help with the evening routine so you can get to bed earlier, or simply patience
            on a bad night.
          </li>
          <li>
            <strong>Bring them to a visit if you like.</strong> Many couples find that a clinician
            explaining the timeline and the options in one conversation changes the household
            dynamic.
          </li>
        </UL>
        <P>
          If hot flashes and sleep loss are affecting intimacy, mood, or your relationship, say so
          to your provider. Those are legitimate parts of the menopause transition, not things to
          endure in silence, and several of the treatments in this article address them directly.
        </P>
        <H3>With your children and extended family</H3>
        <P>
          Children, especially teenagers, are often more understanding than we expect when they are
          told the truth. A short, calm explanation, "my body's temperature control is changing
          during a stage of life called perimenopause, and it makes me hot and sometimes tired,"
          models openness about health and removes the mystery. If a parent or older relative is
          dismissive, it can help to remember that many women of earlier generations were given no
          information and no options at all. Their advice often reflects what they were told, not
          what we know now. You are allowed to set that gently aside.
        </P>
        <H3>At work</H3>
        <P>
          Work is where many women feel the most exposed, and where the quiet strategies matter
          most. I want to be careful here, because workplace policies vary a great deal between
          employers, and I am not able to give you legal advice. What I can offer is what women tell
          me has worked.
        </P>
        <UL>
          <li>
            <strong>Control what you can control.</strong> A small desk fan, a cold water bottle or
            insulated tumbler, a seat near a vent, window, or door, and layered clothing you can
            remove without drawing attention.
          </li>
          <li>
            <strong>Dress for removable layers.</strong> A blazer or cardigan over a breathable top
            gives you a graceful way to cool down in a meeting. In a uniformed job, ask whether a
            breathable base layer or an extra uniform top is allowed.
          </li>
          <li>
            <strong>Plan the hard moments.</strong> If you know a long meeting, presentation, or
            procedure is coming, eat lightly, skip the extra coffee if that is a trigger for you,
            and keep cold water nearby. Knowing you have a plan reduces the anxiety that can make a
            flash worse.
          </li>
          <li>
            <strong>Short, calm scripts.</strong> "Excuse me for a moment" is a complete sentence.
            If someone comments, "It's a medical thing, and I'm handling it" is both honest and
            enough.
          </li>
          <li>
            <strong>Consider a private conversation.</strong> Some women find that quietly telling a
            manager or human resources contact that they are managing a medical symptom, and asking
            for something specific such as control over a fan, a cooler workspace, or flexibility
            for a medical appointment, makes work easier. Whether and how you do that is entirely
            your call.
          </li>
          <li>
            <strong>Protect your sleep.</strong> The best workplace strategy is often a better
            night. That is one reason I take night sweats so seriously: fragmented sleep makes every
            workday harder.
          </li>
        </UL>
        <P>
          If you work nights or rotating shifts, in healthcare, manufacturing, food service, or
          other jobs with fixed environments and limited autonomy, the practical changes above
          matter even more, and so does a plan that treats the underlying symptoms. You should not
          have to choose between your job and your sleep.
        </P>
      </section>

      {/* Section 21 */}
      <section id="four-women-four-paths">
        <H2>Four Women, Four Different Paths</H2>
        <Fig
          src={fourMugsImg}
          alt="Top-down view of four women's hands of different ages and skin tones holding mugs around a round wooden table"
          caption="Four composite stories, four different paths to the same goal: better sleep and a plan that fits."
        />
        <P>
          Statistics tell you what is true on average. Stories help you see how the pieces fit
          together. The four women below are composites, built from patterns I see repeatedly in
          practice. They are not real individuals, details have been changed, and no outcome
          described here is a promise about what will happen to you. I include them because the same
          complaint, "I'm waking up drenched," leads to four genuinely different plans, and seeing
          that is the best antidote to the idea that there is one right answer.
        </P>
        <H3>Karen, 49, a night-shift nurse in Grand Rapids</H3>
        <P>
          Karen works three twelve-hour night shifts a week at a hospital and sleeps during the day
          in a bedroom that gets afternoon sun. Over the past year her periods have become
          irregular, she wakes drenched even on her days off, and on shift she has to step out of
          patient rooms to cool her face. She has been told twice to "try black cohosh."
        </P>
        <P>
          Her diary showed about five to six flashes a day and four soaked nights a week, with the
          worst clusters in the late afternoon before shifts and around 3am. Her baseline labs ruled
          out an overactive thyroid and showed a low ferritin, which we addressed separately. She
          had no personal or family history that made hormone therapy risky, was 49, and was clearly
          perimenopausal. We reviewed her options, including the ones in this article, and she chose
          to start a transdermal estradiol patch with oral micronized progesterone, after we
          discussed the risks, the timing evidence, and her preferences.
        </P>
        <P>
          At the same time she made the practical changes: blackout curtains and a bedroom fan, a
          layered bed, a dry shirt and ice water at the bedside, and a small clip-on fan for work.
          Her first follow-up at about six weeks focused on whether the dose was right, and we
          adjusted it. <strong>What this teaches:</strong> for a woman in the classic window with
          clear symptoms and no contraindications, hormone therapy is the most effective option, and
          the practical changes work alongside it, not instead of it.
        </P>
        <H3>Denise, 54, a bank manager in Detroit</H3>
        <P>
          Denise has had hot flashes for about nine years. They began in her mid-40s and never
          really stopped. She has high blood pressure, controlled with medication, and a mother who
          had a stroke in her 60s. She told me she had mentioned the flashes to three different
          clinicians and was told it was "normal" and would pass. Meanwhile she was sleeping five
          hours a night and snapping at colleagues.
        </P>
        <P>
          Her story matches the national data on duration, which is longest among African American
          women, with a median of 10.1 years in SWAN.
          <C n={3} /> We started by validating that her experience was real and well documented.
          Given her family history and blood pressure, we took a cautious, individualized view of
          systemic hormone therapy and talked through non-hormonal options. She was interested in
          the newer neurokinin-targeted drugs. After baseline liver tests were normal, and after we
          covered the label's cautions about liver monitoring, side effects, and drug interactions,
          she and her prescriber decided on a trial of one of them. We paired it with CBT for
          insomnia and discussed a cardiovascular risk review, because persistent hot flashes are
          associated with cardiovascular risk in the SWAN data, and she had other risk factors.
          <C n={20} />
        </P>
        <P>
          <strong>What this teaches:</strong> when hormones are not the obvious first choice, there
          are real, evidence-based alternatives, and a long symptom history is a reason to look at
          the whole picture, including heart health, not just the heat.
        </P>
        <H3>Lori, 51, a teacher near Eau Claire, breast cancer survivor on tamoxifen</H3>
        <P>
          Lori finished treatment for early-stage breast cancer two years ago and takes tamoxifen.
          Her hot flashes and night sweats are worse than anything she had before, and the thought
          of adding hormones is, understandably, off the table. She had been given paroxetine by a
          previous clinician, then told to stop because of her tamoxifen.
        </P>
        <P>
          That is a textbook example of the interaction in the NAMS statement: paroxetine and
          fluoxetine inhibit the enzyme that activates tamoxifen, so safer choices include
          venlafaxine and escitalopram.
          <C n={1} /> With her oncology team's agreement, we discussed venlafaxine, which has trial
          evidence behind it,
          <C n={16} /> alongside CBT and clinical hypnosis, both of which have been tested in breast
          cancer survivors.
          <C n={[1, 37]} /> Lori chose to begin with hypnosis through a telehealth practitioner and
          a low-dose SNRI, and to keep her oncologist in the loop at every step.{" "}
          <strong>What this teaches:</strong> a history of breast cancer does not mean there is
          nothing to try. It means the toolbox is different, and the coordination matters.
        </P>
        <H3>Amy, 43, a project manager in Traverse City</H3>
        <P>
          Amy's night sweats began four months ago. Her periods were still regular. She assumed it
          was perimenopause, and so did the first provider she saw. But as I took her history, a few
          other details emerged. She felt hot most of the day, not in waves. Her heart raced when
          she was sitting at her desk. She had lost about twelve pounds without trying. She was
          shaky and jittery. None of these fit the typical hot flash fingerprint.
        </P>
        <P>
          Basic labs showed a suppressed TSH and an elevated free T4, consistent with an overactive
          thyroid. We stopped the perimenopause discussion, referred her to an endocrinologist, and
          arranged follow-up. Her night sweats resolved with treatment of the thyroid. The lesson is
          exactly the one the clinical reviews make: night sweats are a non-specific symptom, and
          hyperthyroidism is on the list of common alternatives.
          <C n={[23, 24]} /> <strong>What this teaches:</strong> menopause is the most likely
          explanation for night sweats in a woman in her 40s, not the only one, and a basic screen
          is how you avoid the wrong plan.
        </P>
        <Callout title="What these four stories share">
          <p>
            None of them started with a supplement, a diet, or a guess. They started with a history,
            a diary, and a few targeted tests, then moved to a plan matched to the person. That
            sequence is what I would want for my own sister.
          </p>
        </Callout>
      </section>

      {/* Section 22 */}
      <section id="michigan-wisconsin-access">
        <H2>Getting Care in Michigan and Wisconsin</H2>
        <Fig
          src={telehealthImg}
          alt="Woman in her early 50s at a kitchen table in a Wisconsin farmhouse during a telehealth video visit with a nurse practitioner, symptom notebook and tea beside her, snowy field and red barn outside the window"
          caption="From a farmhouse kitchen in January to a downtown Grand Rapids apartment, a video visit puts a menopause-literate clinician where you are."
        />
        <P>
          Knowing what to do is half the battle. The other half, in a region with long distances and
          uneven access to menopause expertise, is actually getting it. Here is what I would want
          you to know.
        </P>
        <H3>Telehealth works, as long as your provider is licensed where you are</H3>
        <P>
          For both states, telehealth care requires that your provider hold an active license in the
          state where you are physically located at the time of the visit. That is the standard,
          legal structure, not a workaround. You can verify a provider's license, and learn about
          nurse practitioner practice, through the licensing boards: Michigan's Department of
          Licensing and Regulatory Affairs, <X href="https://www.michigan.gov/lara">LARA</X>, and
          Wisconsin's Department of Safety and Professional Services,{" "}
          <X href="https://dsps.wi.gov/a-z-professions-list/advanced-practice-nurse-prescriber/">
            DSPS
          </X>
          .<C n={[47, 48]} /> Novaleo Weight and Wellness serves women in both states, and our{" "}
          <PL slug="medical-weight-loss-hormone-therapy-michigan-wisconsin-cities">
            city-by-city guide
          </PL>{" "}
          walks through how licensing, lab draws, and prescriptions work from Grand Rapids to the
          Upper Peninsula and from Milwaukee to the Driftless Area.
        </P>
        <H3>What telehealth can and cannot do for hot flashes</H3>
        <UL>
          <li>
            <strong>It can:</strong> take a thorough history, review your diary, order labs at a
            draw site near you, discuss every option in this article, prescribe appropriately, send
            prescriptions to your pharmacy or by mail order, and manage follow-up and dose
            adjustments by video and secure message.
          </li>
          <li>
            <strong>It cannot:</strong> examine a lump, listen to your lungs, perform a procedure
            such as a stellate ganglion block, or replace emergency care. If you have fever,
            unexplained weight loss, cough, or a new lump, you need an in-person visit first.
          </li>
          <li>
            <strong>It should always:</strong> make it easy to coordinate with your primary care
            provider, your gynecologist, and, if relevant, your oncology team.
          </li>
        </UL>
        <H3>Rural Michigan and Wisconsin</H3>
        <P>
          If you live in the Upper Peninsula, the Thumb, the Northwoods, or the Driftless Area, a
          menopause specialist may be hours away, and the wait for an appointment may be months.
          That is exactly the gap telehealth fills. Lab draws happen at a local site, visits happen
          from your kitchen table, and prescriptions go to your local pharmacy or arrive by mail.
          Telehealth does not replace the value of a thorough, individualized workup. It removes
          geography as the reason that workup does not happen.
        </P>
        <H3>How to find a menopause-literate clinician</H3>
        <P>
          The Menopause Society, formerly the North American Menopause Society, maintains a
          directory of clinicians who have earned its Menopause Society Certified Practitioner
          (MSCP) credential, which requires passing a competency examination in menopause care.{" "}
          <X href="https://portal.menopause.org/NAMS/NAMS/Directory/Menopause-Practitioner.aspx">
            Search the NAMS practitioner directory
          </X>
          .<C n={49} /> A certified practitioner is a good sign, but it is not the only good sign.
          Many excellent clinicians have deep menopause experience without the credential, and the
          best test is how they answer your questions.
        </P>
        <H3>Questions to ask any provider about hot flashes</H3>
        <OL>
          <li>"What will you do to rule out other causes before assuming this is menopause?"</li>
          <li>
            "Which treatment options do you offer and discuss, including hormone therapy and
            non-hormonal medications, CBT, and hypnosis?"
          </li>
          <li>
            "How do you decide whether hormone therapy is right for someone? What would make me a
            poor candidate?"
          </li>
          <li>
            "If I do not want hormones, or cannot take them, what would you suggest, and what are
            the risks of each choice?"
          </li>
          <li>"What labs will you order, and why? Which results would change your plan?"</li>
          <li>"How will we know if the treatment is working, and when will we check in?"</li>
          <li>"What does this cost, including labs, visits, and medications?"</li>
          <li>"Who do you refer to when something is outside your scope?"</li>
        </OL>
        <P>
          Pay attention to how the answers feel. A clinician who listens, explains the evidence, and
          presents options without pressure is the one I would trust. A clinician who guarantees an
          outcome, pushes a single product, or dismisses your questions is a warning sign.
        </P>
      </section>

      {/* Section: Advocating for yourself */}
      <section id="advocating-for-yourself">
        <H2>How to Advocate for Yourself at the Appointment</H2>
        <Fig
          src={advocateImg}
          alt="Confident woman in her late 40s holding a notebook and speaking with a female nurse practitioner who listens and takes notes"
          caption="Preparation turns a rushed appointment into a real conversation."
        />
        <P>
          A great many women walk into an appointment about hot flashes with a rehearsed sentence,
          get about ninety seconds of the clinician's attention, and leave with a pamphlet. I do not
          say that to criticize any individual provider. Most are working inside schedules that
          leave very little room for a conversation this size. But it does mean that how you open
          the conversation matters, and a little preparation goes a long way.
        </P>
        <H3>Open with data, then ask a specific question</H3>
        <P>
          Lead with your diary headline, then make a clear request. For example: "I am having about
          six hot flashes a day and waking soaked three or four nights a week, and it has been going
          on for eight months. It is affecting my sleep and my work. I would like to talk about
          treatment options, including hormone therapy and non-hormonal medications, and I would
          like to make sure we have ruled out anything else that could be causing it." That one
          paragraph tells the clinician the severity, the duration, the impact, and what you want.
          It is hard to answer with a pamphlet.
        </P>
        <H3>What to say when you hear the common brush-offs</H3>
        <Table
          head={["If you hear", "You might say"]}
          rows={[
            [
              '"It\'s just menopause. It will pass."',
              "\"I understand it's common. In the SWAN study the median course was over seven years, so I'd like to talk about what we can do now.\"",
            ],
            [
              '"You\'re too young for perimenopause."',
              '"Studies show hot flashes and night sweats can begin years before the final period. Can we look at other causes and options rather than wait?"',
            ],
            [
              '"Let\'s check your FSH and estradiol."',
              '"I\'ve read that a single hormone level is not reliable for diagnosing perimenopause in women over 45. Could we focus on ruling out thyroid and other causes, and on treatment?"',
            ],
            [
              '"Hormone therapy is dangerous."',
              '"I\'d like to understand my personal risks. Current guidance says that for women under 60 or within 10 years of menopause without contraindications, the benefit-risk ratio is favorable. Can we go over my history?"',
            ],
            [
              '"Just try black cohosh or a supplement."',
              "\"The menopause society's 2023 review didn't recommend supplements for hot flashes. What evidence-based options would you suggest?\"",
            ],
            [
              '"Here\'s an antidepressant."',
              '"I know some SSRIs and SNRIs can help hot flashes. Which one, and why that one? Are there interactions with my other medications?"',
            ],
          ]}
        />
        <P>
          Each of those responses is polite and specific, and each anchors to a source this article
          has cited: the SWAN duration data,
          <C n={3} /> the evidence on early symptom onset,
          <C n={5} /> the NICE guidance on hormone testing,
          <C n={44} /> the NAMS hormone therapy statement,
          <C n={2} /> and the NAMS nonhormone statement.
          <C n={1} /> You do not need to argue. You need to ask the question that makes the
          clinician think.
        </P>
        <H3>When it is time to find someone else</H3>
        <P>
          Good clinicians welcome informed patients. If you have prepared, been polite, asked clear
          questions, and still been dismissed, it is reasonable to look elsewhere. Warning signs
          include a provider who will not discuss any treatment options, who dismisses your diary
          without reading it, who tells you hormone therapy is "never safe" without asking about
          your history, who pushes a single product, or who makes you feel foolish for asking. You
          can seek a second opinion, look for a clinician with menopause-specific training through
          the directory described above, or work with a telehealth practice, which gives you a wider
          pool than the nearest clinic.
        </P>
        <H3>Keep a record</H3>
        <P>
          After each visit, write down what you were told, what was recommended, what you decided,
          and when to follow up. Ask for your lab results and keep your own copy. If you ever change
          providers, that record saves time and prevents repeating tests. It also reinforces
          something important: you are the one person who is present for every part of your care.
        </P>
        <Callout title="A one-page checklist to bring with you">
          <UL>
            <li>Your two-week symptom diary, with a one-sentence headline.</li>
            <li>A list of all medications and supplements, including doses.</li>
            <li>
              Your family history of breast cancer, heart disease, blood clots, stroke, and
              osteoporosis.
            </li>
            <li>
              Recent lab results, mammogram dates, and any prior hormone or contraceptive use.
            </li>
            <li>
              Your top three goals, for example: sleep through the night, stop soaking my shirt at
              work, or understand my options.
            </li>
            <li>Your questions, written down, including the eight listed earlier in this guide.</li>
          </UL>
        </Callout>
      </section>

      {/* Section 23 */}
      <section id="what-a-first-visit-looks-like">
        <H2>What a First Visit With Us Looks Like</H2>
        <Fig
          src={grandRapidsVisitImg}
          alt="Woman in her early 50s on a sofa in a Grand Rapids apartment at dusk with a tablet showing a welcoming video call and city lights beyond the window"
          caption="A first visit can happen from your own living room, wherever you are in Michigan or Wisconsin."
        />
        <P>
          I am going to describe how we work in plain terms, because I believe you should know what
          you are signing up for before you do. This section is specific to Novaleo Weight and
          Wellness, and it is the one place in this article where I am describing my own practice
          rather than the general evidence.
        </P>
        <H3>Step one: a free assessment call</H3>
        <P>
          Our free <SL to="/book-free-assessment-call">assessment call</SL> is a short, no-cost
          video consultation where you tell me what is going on, ask your questions, and we decide
          together whether a deeper evaluation makes sense and what the next step should be. It is
          not a diagnosis, and it is not a sales pitch. If I think you need an in-person evaluation,
          for example because of any of the red flags in this article, I will tell you.
        </P>
        <H3>Step two: the Root Cause Intake</H3>
        <P>
          The 60-minute <SL to="/clarity-session">Root Cause Intake</SL> is $97 and is a
          comprehensive clinical assessment. We go deep into your health history, symptoms,
          lifestyle, nutrition, stress, sleep patterns, and any prior labs. For a woman with hot
          flashes and night sweats, that includes a careful review of your symptom diary, your cycle
          history, your medications and supplements, your family history, and screening for the red
          flags and look-alikes covered earlier. You leave with clarity about what is likely driving
          your symptoms and a personalized starting plan.
        </P>
        <H3>Step three: labs when they help</H3>
        <P>
          When testing makes sense, we order labs for you, typically our Root Cause Lab Panel
          described above, which requires overnight fasting, with results in about two weeks. We
          review the results together, in plain language, rather than handing you a printout.
        </P>
        <H3>Step four: a plan, and follow-up</H3>
        <P>
          Your plan might include lifestyle and sleep changes, referral for CBT or clinical
          hypnosis, a discussion of hormone therapy or a non-hormonal prescription, and a schedule
          for follow-up. For women who want ongoing, structured support, our{" "}
          <SL to="/services">Root Cause Restoration Program</SL> is a six-month program built around
          four non-negotiables: nutrition and blood sugar stability, sleep and circadian rhythm,
          stress and nervous system regulation, and movement and metabolic strength. It is
          intentionally limited to four clients at a time. You can read more about how we work on
          our <SL to="/approach">approach page</SL> and about me on the{" "}
          <SL to="/about">about page</SL>.
        </P>
        <H3>Cost and payment</H3>
        <P>
          We are a cash-pay practice and do not bill insurance. We accept FSA and HSA cards, credit
          cards, and debit cards, and you can see current pricing for every service on our{" "}
          <SL to="/services">services page</SL>. If you want to start learning before you book, our
          free guide, <SL to="/free-guide">What Your Labs Aren't Telling You</SL>, explains why
          standard lab results so often come back "normal" when you do not feel normal.
        </P>
        <H3>What we will not do</H3>
        <P>
          We will not promise that every symptom will vanish. We will not push a supplement because
          it has a margin. We will not tell you that a normal lab proves your symptoms are not real.
          And we will not hold you in a program if a different path, or a different clinician, would
          serve you better. If your night sweats look like something other than menopause, we will
          help you find the right in-person care quickly.
        </P>
        <Cta
          heading="Ready to stop guessing about your hot flashes and night sweats?"
          body="Book a free assessment call. We will talk through what you are experiencing, what might be driving it, and what a sensible next step looks like for you."
        />
      </section>

      {/* Section 24 */}
      <section id="twelve-week-plan">
        <H2>A 12-Week Plan You Can Start Today</H2>
        <Fig
          src={calendarImg}
          alt="Woman in athletic clothes marking a paper wall calendar covered in check marks and sticky notes in a bright kitchen, running shoes by the door"
          caption="Twelve weeks is long enough to test a plan and short enough to stay motivated."
        />
        <P>
          If you are overwhelmed by the options, this is the order in which I would proceed. It is
          designed to give you information early, protect you from dead ends, and put you in a good
          position to decide with your provider. Adjust it to your situation.
        </P>
        <Table
          head={["When", "What to do", "Why"]}
          rows={[
            [
              "Today",
              "Start your symptom diary. Set up the night-sweat-proof bedroom: layers, fan, dry shirt, ice water.",
              "You need a baseline, and comfort improvements cost almost nothing.",
            ],
            [
              "Weeks 1 to 2",
              "Keep the diary daily. Book an appointment. Write down your medications, supplements, family history, and any red flags.",
              "A good diary and a good history are the most useful things you can bring.",
            ],
            [
              "Weeks 2 to 3",
              "Get labs to rule out look-alikes and set a safe baseline: thyroid, blood count and ferritin, blood sugar, lipids, liver, vitamin D.",
              "Prevents treating menopause when something else is the cause, and is required before some prescriptions.",
            ],
            [
              "Weeks 3 to 4",
              "Change one suspected trigger or bedroom variable. Keep logging.",
              "A structured experiment tells you what actually matters for you.",
            ],
            [
              "Weeks 4 to 5",
              "Review the diary and labs with your provider. Decide among options: hormone therapy, non-hormonal prescription, CBT or hypnosis, or watchful waiting with lifestyle changes.",
              "A shared, informed decision, matched to your history and preferences.",
            ],
            [
              "Weeks 5 to 8",
              "Start your chosen treatment. Non-hormonal drugs usually begin working within about two weeks; hormone therapy often shows early change in 1 to 4 weeks. Keep the diary.",
              "Gives treatment a fair trial using the same measure as your baseline.",
            ],
            [
              "Weeks 8 to 10",
              "Follow-up visit: dose adjustment, side effects, sleep, mood. Add CBT for insomnia or hypnosis if sleep or distress persists.",
              "Most treatments need tuning, and women often need a second element.",
            ],
            [
              "Weeks 10 to 12",
              "Compare your diary against baseline. Decide whether to continue, adjust, or switch. Schedule follow-up and plan for seasonal changes.",
              "Turns a trial into a long-term plan. Remember that placebo response in hot flash trials is 20 to 66 percent, so look at the numbers, not just how you feel.",
            ],
          ]}
        />
        <P>
          Three things to remember as you go. First, this is a plan, not a pass-fail test. If
          something does not work, that is information. Second, the best plan is the one you can
          actually follow, so choose changes that fit your life in Michigan or Wisconsin, not a life
          you imagine for yourself. Third, if you hit a red flag at any point, stop and get seen in
          person. The timeline is not more important than your safety.
        </P>
      </section>

      {/* Section 25 */}
      <section id="common-myths">
        <H2>Myths Worth Retiring</H2>
        <Fig
          src={blackboardImg}
          alt="Woman in a sunlit farmhouse kitchen wiping a large blackboard clean, symbolizing clearing away myths"
          caption="Time to wipe the board clean on some persistent myths."
        />
        <P>
          Here are the misconceptions I hear most often, along with what the evidence says. If you
          have heard any of them, you have been given incomplete information, not lied to.
        </P>
        <H3>Myth: "Hot flashes last a year or two."</H3>
        <P>
          The median duration of frequent hot flashes in the SWAN study was 7.4 years, and for women
          who start early it was more than 11.8 years.
          <C n={3} />
        </P>
        <H3>Myth: "They stop when your periods stop."</H3>
        <P>
          The median woman in SWAN still had frequent hot flashes 4.5 years after her final period.
          <C n={3} /> Menopause is often the midpoint, not the finish line.
        </P>
        <H3>Myth: "If you don't have hot flashes, you're not perimenopausal."</H3>
        <P>
          In SWAN's monthly calendar data, trouble sleeping was reported by about 40 percent of
          women five to ten years before the final period, when only about 20 percent reported hot
          flashes or night sweats.
          <C n={5} /> Sleep changes and other symptoms commonly arrive first.
        </P>
        <H3>Myth: "A normal FSH or estradiol level means it's not menopause."</H3>
        <P>
          Hormone levels fluctuate widely in perimenopause, so a single normal value does not
          exclude it, which is why guidelines advise against using these tests to diagnose menopause
          in healthy women over 45.
          <C n={44} />
        </P>
        <H3>Myth: "Hormone therapy is always dangerous."</H3>
        <P>
          NAMS concludes that for women under 60 or within 10 years of menopause onset with no
          contraindications, the benefit-risk ratio is favorable for treating bothersome hot
          flashes.
          <C n={2} /> The risks depend on type, dose, route, timing, and individual history.
        </P>
        <H3>Myth: "Natural remedies are safer, and they work."</H3>
        <P>
          The NAMS panel did not recommend any over-the-counter supplement or herbal remedy for hot
          flashes, citing lack of rigorous evidence, mixed results, and unregulated purity.
          <C n={1} /> "Natural" is not the same as proven or safe.
        </P>
        <H3>Myth: "Hot flashes are just an annoyance."</H3>
        <P>
          They disrupt sleep and mood, and frequent, persistent hot flashes are associated with
          later cardiovascular events and with higher hip fracture risk in observational studies.
          <C n={[20, 22]} /> That is a reason to take them seriously, not a cause for alarm.
        </P>
        <H3>Myth: "It's all in your head, or just stress."</H3>
        <P>
          Hot flashes are generated by a defined neural circuit in the hypothalamus, and drugs that
          block that circuit reduce them.
          <C n={[10, 12, 13]} /> Stress can worsen them, but the mechanism is physiological.
        </P>
        <H3>Myth: "Night sweats always mean menopause."</H3>
        <P>
          Most of the time in a woman in her 40s or 50s they do. But night sweats are a non-specific
          symptom with a long differential, from thyroid disease to infection to medications.
          <C n={[23, 24]} />
        </P>
        <H3>Myth: "Lowering the thermostat will fix it."</H3>
        <P>
          A cooler bedroom can help you sleep and recover, but the NAMS panel found no strong
          evidence that cooling techniques reduce how often hot flashes happen.
          <C n={1} /> It is a comfort tool, not a treatment.
        </P>
        <H3>Myth: "Only overweight women get severe hot flashes."</H3>
        <P>
          Higher body mass index is associated with slightly higher odds,
          <C n={4} /> but many thin women have severe hot flashes and many heavier women have none.
          Weight is one factor among many, not a character explanation.
        </P>
        <H3>Myth: "If a treatment doesn't work in a month, nothing will."</H3>
        <P>
          Non-hormonal drugs usually act within about two weeks,
          <C n={1} /> while hormone therapy often takes up to two to three months for full effect,
          as we describe in our{" "}
          <PL slug="bioidentical-hormone-therapy-guide-michigan-wisconsin">BHRT guide</PL>, and dose
          adjustments are normal. Giving a treatment a structured trial, and adjusting, is how most
          women find what works.
        </P>
      </section>

      {/* Section 26: FAQ */}
      <section id="comprehensive-faq">
        <H2>Comprehensive FAQ: Your Questions Answered</H2>
        <Fig
          src={libraryImg}
          alt="Woman in her late 40s at a long wooden table in a quiet Michigan library with a laptop and open books, looking up thoughtfully"
          caption="Questions we hear most often from Michigan and Wisconsin women."
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

      {/* Section 27: Glossary */}
      <section id="glossary">
        <H2>Glossary</H2>
        <Fig
          src={glossaryImg}
          alt="Open reference book, pencil, reading glasses, and a cup of tea on a wooden desk by a window with soft winter light"
          caption="Plain-language definitions for the terms used in this guide."
        />
        <dl className="space-y-4 text-lg leading-relaxed text-foreground/85">
          {glossary.map((g) => (
            <div key={g.term}>
              <dt className="font-display text-primary">{g.term}</dt>
              <dd className="text-foreground/80">{g.def}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Section 28: Closing */}
      <section id="closing-katies-note">
        <H2>A Personal Note from Katie</H2>
        <Fig
          src={relievedImg}
          alt="Two women in their late 40s and early 50s laughing together on a wooded Lake Michigan dune trail in early fall"
          caption="The goal is not just fewer flashes. It is getting your nights, your days, and your confidence back."
        />
        <P>
          If you have read this far, you have read more about hot flashes and night sweats than most
          clinicians will read in a year. I did not write it this way to impress anyone. I wrote it
          this way because of the woman at 3:12 in the morning, sitting on the edge of her bed with
          her feet on the cold floor, wondering whether this is just her life now.
        </P>
        <P>
          It does not have to be. You now know that what you are experiencing is a real, measurable
          change in how your brain regulates temperature, not a weakness. You know it is common,
          that it typically starts earlier and lasts longer than anyone tells you, and that it can
          reflect something other than menopause often enough that a good evaluation matters. You
          know that hormone therapy remains the most effective treatment and that for the right
          woman it is a reasonable, evidence-based choice. You know that if it is not right for you,
          there are two new medications aimed at the exact brain circuit responsible, older
          medications that work, and two mind-body therapies with strong evidence. And you know
          which popular products the best evidence does not support.
        </P>
        <P>
          I also want you to know what this article cannot do. It cannot examine you. It cannot know
          your history. It cannot tell you whether your particular night sweats are menopause,
          thyroid, medication, or something else. Only a conversation, an exam when needed, and the
          right tests can do that. Use this article to prepare for that conversation, not to
          substitute for it.
        </P>
        <P>
          One more thing. Many of the women I work with tell me they waited years before asking for
          help, because they thought their symptoms were too minor, too normal, or too embarrassing
          to bring up. If that is you, please hear this: you are not complaining. You are reporting
          a medical condition with a well-documented course and well-studied treatments, and you
          deserve a clinician who takes it seriously. If you have been dismissed once, ask again. If
          you have been dismissed twice, find someone else.
        </P>
        <P>
          If you live in Michigan or Wisconsin, in a city or a small town, near a lake or far from
          one, I would be glad to be part of that conversation. Not to sell you on anything. Just to
          listen, look at the whole picture, and help you find a plan that fits your life.
        </P>
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-10 my-10 text-center">
          <p className="font-display text-2xl md:text-3xl text-primary mb-4">
            You deserve to sleep through the night again.
          </p>
          <p className="text-lg text-foreground/70 mb-6 max-w-xl mx-auto">
            Book your free assessment call. No pressure, no commitment, just a straightforward
            conversation about what you are experiencing and what could help.
          </p>
          <Link to="/book-free-assessment-call" className="btn-gold text-lg px-8 py-4">
            Book Free Assessment Call
          </Link>
        </div>

        <P>
          I have sat across from women in their 40s and 50s for more than twenty years, and the
          sentence I hear most often is not "I'm in pain" or "I'm scared." It is "I thought I was
          the only one." You are not. Hot flashes and night sweats touch most women, and the ones
          who suffer longest are often the ones who are too polite to make a fuss. Make a fuss. Keep
          the diary, ask the questions, and expect real answers.
        </P>
        <P>
          Your body is not betraying you. It is going through a transition that medicine has, for
          far too long, treated as a punchline. We know better now, and we have better tools. Reach
          out whenever you are ready.
        </P>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5 font-semibold">
          Katie Long, NP-C
          <br />
          <span className="font-normal text-foreground/70">
            Founder, Novaleo Weight and Wellness
          </span>
        </p>
      </section>

      {/* Author Bio */}
      <div className="border border-foreground/10 rounded-2xl p-8 mt-16 mb-12 flex flex-col sm:flex-row gap-6 items-start">
        <div className="shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="font-display text-primary text-2xl">KL</span>
        </div>
        <div>
          <h3 className="font-display text-xl text-primary mb-1">Kathryn Long, NP-C</h3>
          <p className="text-sm text-secondary font-semibold mb-3">
            Board-Certified Nurse Practitioner
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Katie is the founder of Novaleo Weight and Wellness, a telehealth functional medicine
            practice serving women in Michigan and Wisconsin. With over 20 years of healthcare
            experience, she specializes in helping women over 35 identify and address the root
            causes of weight resistance, hormonal imbalance, and metabolic dysfunction, including
            the hot flashes, night sweats, and sleep disruption that so often come with the
            menopause transition. Katie is committed to making thorough, evidence-based care
            accessible to women across both states, regardless of where they live.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <section className="bg-primary rounded-2xl p-8 md:p-12 text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          Ready for Real Answers About Your Hot Flashes?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          You have done the reading. Now let's talk about what it means for you specifically. Your
          free assessment call is a low-pressure next step, not a commitment.
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
          Regulatory and drug-label information reflects the sources cited as of October 2026.
          Labels and recommendations change, so confirm current details with your prescriber and the
          official FDA label for any medication you are considering.
        </p>
      </section>
    </BlogLayout>
  );
}

/* ---------- Data: FAQ (used for both the page and the FAQPage schema) ---------- */

const faqs: { q: string; a: string }[] = [
  {
    q: "How do I know if what I'm feeling is a hot flash?",
    a: `A typical hot flash begins suddenly, with heat in the chest, neck, or face, often with flushing, sweating, and sometimes a pounding heart, and usually lasts about one to five minutes, often followed by a chill. If instead you feel hot all day, lose weight without trying, or have a steady racing heart and tremor, an overactive thyroid or another cause is possible and worth testing for. A symptom diary makes the pattern much easier to recognize.`,
  },
  {
    q: "Can I have hot flashes in my late 30s or early 40s?",
    a: `Yes. In the SWAN study, about 20 percent of women reported hot flashes and night sweats five to ten years before their final menstrual period, and symptoms became more common about four years before it. That means many women notice them in their early 40s and some in their late 30s. If you are under 40 and having significant symptoms, it deserves a proper evaluation, because other causes and premature ovarian insufficiency need to be considered.`,
  },
  {
    q: "Do hot flashes mean I'm in menopause?",
    a: `Not necessarily. Menopause is defined as 12 consecutive months without a period, and hot flashes usually start earlier, during perimenopause. Many women have hot flashes for years while still having periods, and many continue to have them for years after their final period. Hot flashes also have non-menopausal causes, so the pattern, your age, and a basic evaluation all matter.`,
  },
  {
    q: "How long will my hot flashes last?",
    a: `On average, longer than most women are told. In SWAN, the median total duration of frequent hot flashes was 7.4 years, with a median of 4.5 years after the final menstrual period. Women whose symptoms began in early perimenopause had the longest course, a median of more than 11.8 years, and African American women had a median of 10.1 years. Your own course may be shorter or longer, which is why treating symptoms effectively is more useful than simply waiting.`,
  },
  {
    q: "Why are night sweats so much worse than daytime hot flashes?",
    a: `They are the same phenomenon, but at night you cannot adjust: you cannot step outside, remove a layer, or splash cold water on your face, and bedding traps heat around a body trying to shed it. The episode also interrupts sleep, and the chill that follows makes falling back asleep harder. Hot flashes explain some, but not all, of the sleep disturbance in menopause, so insomnia often needs its own attention.`,
  },
  {
    q: "Are night sweats a sign of cancer?",
    a: `Usually not. Night sweats are common and non-specific, and in women in their 40s and 50s with other signs of perimenopause they are most often hormonal. Lymphoma and tuberculosis are classic serious causes, but they are uncommon explanations in modern practice. Fever, unexplained weight loss, a persistent cough, new lumps, or severe fatigue alongside night sweats warrant prompt in-person evaluation.`,
  },
  {
    q: "Should I get my hormones tested to confirm perimenopause?",
    a: `For most healthy women over 45 with typical symptoms, no. Guidelines such as the UK's NICE guideline advise diagnosing perimenopause from symptoms without blood tests, because hormone levels fluctuate. Labs are more useful for ruling out look-alikes such as thyroid disease, checking blood sugar and lipids, and creating a safe baseline before treatment. For ages 40 to 45, or under 40 with suspected premature ovarian insufficiency, testing may play a larger role.`,
  },
  {
    q: "What is the most effective treatment for hot flashes?",
    a: `Hormone therapy. The North American Menopause Society and the Endocrine Society both identify it as the most effective treatment for vasomotor symptoms, and a Cochrane review found about a 75 percent reduction in hot flash frequency relative to placebo. It is not right for everyone, and the decision depends on your age, time since menopause, and personal and family history. Non-hormonal options, CBT, and clinical hypnosis also have strong evidence.`,
  },
  {
    q: "Is hormone therapy safe?",
    a: `For women under 60 or within 10 years of menopause onset without contraindications, the NAMS 2022 statement concludes that the benefit-risk ratio is favorable for treating bothersome hot flashes. For women who start later, the risks appear greater. Risk also varies by type, dose, route, and whether a progestogen is used. It is an individualized decision, and our BHRT guide covers the details, including the Women's Health Initiative.`,
  },
  {
    q: "Did the FDA remove the black box warning on hormone therapy?",
    a: `The FDA began the process in November 2025 and approved the first label changes for six products in February 2026, removing cardiovascular disease, breast cancer, and probable dementia language from their boxed warnings. The boxed warning about endometrial cancer for estrogen-alone products remains. The rollout is product by product, and risk still depends on timing, dose, route, and your history, so ask your prescriber about the current label for your specific product.`,
  },
  {
    q: "What can I take if I cannot take hormones?",
    a: `Several options have good evidence: low-dose paroxetine (Brisdelle), other SSRIs and SNRIs such as escitalopram and venlafaxine, gabapentin, oxybutynin, and the newer neurokinin-targeted drugs fezolinetant (Veozah) and elinzanetant (Lynkuet). CBT and clinical hypnosis are also rated Level I by NAMS. If you take tamoxifen, avoid paroxetine and fluoxetine and discuss safer choices with your oncology team.`,
  },
  {
    q: "What are Veozah and Lynkuet, and are they safe for my liver?",
    a: `Both block neurokinin receptors in the brain's temperature-control circuit. Veozah (fezolinetant) was approved in 2023 and carries a Boxed Warning for rare, serious liver injury, with required liver blood tests before and after starting. Lynkuet (elinzanetant), approved in October 2025, requires baseline liver tests and a repeat at three months, and its label cautions about drowsiness, pregnancy, and drug interactions. Report symptoms such as dark urine, yellowing of the skin, unusual fatigue, or upper right abdominal pain right away.`,
  },
  {
    q: "Do supplements like black cohosh, soy, or evening primrose work?",
    a: `The 2023 NAMS review did not recommend any over-the-counter supplement or herbal remedy for hot flashes. A Cochrane review of black cohosh found no significant benefit over placebo, soy results are mixed, and evening primrose, ginseng, and others showed no benefit in trials. Placebo response in hot flash trials ranges from 20 to 66 percent, which is why friends' success stories can be real and still misleading. If you try one, tell your provider and test it with a diary.`,
  },
  {
    q: "Do CBT and hypnosis really work, or is that just saying it's in my head?",
    a: `They work because hot flashes are real, brain-mediated events, and the brain can be trained. In a trial of 187 women, five sessions of clinical hypnosis reduced hot flashes by 74 percent versus 17 percent in controls, including on physiological monitoring. CBT trials show reduced bother and interference that lasted at least 26 weeks. NAMS rates both as Level I and recommends them.`,
  },
  {
    q: "Will losing weight help my hot flashes?",
    a: `It may, especially earlier in the transition. A six-month trial of 338 women found that intensive behavioral weight loss improved bothersome flushing, and NAMS lists weight loss as an option that may be considered. But many thin women have severe hot flashes, and weight is only one factor, so weight loss should not be the only plan or a source of blame.`,
  },
  {
    q: "Do alcohol, caffeine, and spicy food cause hot flashes?",
    a: `The evidence is mixed. NAMS found no clinical trials showing that avoiding triggers relieves hot flashes, and observational findings on alcohol are inconsistent. Still, alcohol can fragment sleep and cause night sweats on its own, and many women have personal triggers. A structured trigger experiment using a diary, changing one thing at a time, is the best way to find out what applies to you.`,
  },
  {
    q: "Why are my hot flashes worse in summer?",
    a: `In the SWAN monthly calendar study, hot flashes and trouble sleeping peaked in July and were lowest in January, with night sweats peaking about a month earlier. The odds of hot flashes were 66 percent higher at the seasonal peak than at the low. Heat and humidity add to the load on a narrowed thermoneutral zone, and warm nights make sleep worse. Starting or adjusting treatment in spring is often a smart plan.`,
  },
  {
    q: "What helps with hot flashes in Michigan and Wisconsin winters?",
    a: `Winter flashes are often triggered by overheated buildings and heavy layers. Dress in layers you can remove, lighten your bedding and swap flannel for breathable fabrics, lower the bedroom thermostat, use a dual-control blanket or bed fan if you share a bed, and keep a dry shirt and water at the bedside. These are comfort measures, not treatments, but they can shorten the disruption.`,
  },
  {
    q: "Can I get treatment for hot flashes through telehealth in Michigan and Wisconsin?",
    a: `Yes, as long as your provider is licensed in the state where you are physically located during the visit. Telehealth can cover history, diary review, lab orders at a local draw site, prescriptions, and follow-up. It cannot replace an in-person exam if you have red flags such as fever, weight loss, a cough, or a new lump. Novaleo serves women in both Michigan and Wisconsin.`,
  },
  {
    q: "What should I bring to my first appointment?",
    a: `A two-week symptom diary, a list of every medication and supplement, your family history of breast cancer, heart disease, blood clots, and osteoporosis, any recent labs, and a short list of questions. Lead with the headline, such as how many flashes a day and how many soaked nights a week, and how long it has been going on. That information changes the conversation.`,
  },
  {
    q: "Can anxiety cause hot flashes, or the other way around?",
    a: `Both can be true. In SWAN, anxiety symptoms were strongly associated with later vasomotor symptoms, and heightened sympathetic nervous system activity narrows the thermoneutral zone. Hot flashes with a racing heart can also trigger or mimic panic. If heat comes first and dread follows, hot flashes are likely driving it. SSRIs, SNRIs, and CBT can help both. If low mood persists, please talk to a licensed professional, and call or text 988 in a crisis.`,
  },
  {
    q: "I'm on tamoxifen or an aromatase inhibitor. What are my options?",
    a: `Systemic hormone therapy is generally not recommended after breast cancer, so the focus is non-hormonal. CBT and clinical hypnosis have been tested in breast cancer survivors, and venlafaxine, desvenlafaxine, escitalopram, citalopram, gabapentin, and oxybutynin have supporting evidence. Paroxetine and fluoxetine are generally avoided with tamoxifen because they inhibit CYP2D6. Coordinate every decision with your oncology team.`,
  },
  {
    q: "Do hot flashes raise my risk of heart disease or fractures?",
    a: `In observational studies, frequent and persistent hot flashes were associated with later cardiovascular events (hazard ratios of about 1.5 to 1.8 in SWAN) and moderate to severe hot flashes with a higher risk of hip fracture in the Women's Health Initiative (about 1.8). These are associations, not proof of cause, and no trial shows that treating hot flashes lowers these risks. They are a reason to check blood pressure, lipids, blood sugar, and bone health.`,
  },
  {
    q: "Can birth control hide perimenopause hot flashes?",
    a: `Yes. Hormonal contraception can mask the usual signs of perimenopause, and symptoms sometimes emerge when a woman stops. If you are in your late 30s or 40s and hot flashes appeared after stopping the pill or an IUD, perimenopause is possible, alongside PCOS and thyroid disease. A history and basic labs help sort it out.`,
  },
  {
    q: "When should I see a doctor right away?",
    a: `Seek prompt in-person care for night sweats with fever, unexplained weight loss, a persistent cough or coughing up blood, new lumps or swollen glands, severe fatigue, shortness of breath, or palpitations with tremor and weight loss. Also tell your clinician if you have had tick exposure or have done heavy outdoor work such as clearing brush, because infections such as babesiosis and blastomycosis, while uncommon, occur in the Upper Midwest.`,
  },
  {
    q: "Will hot flashes ever go away completely?",
    a: `For most women they eventually ease. The median course of frequent hot flashes in SWAN was 7.4 years, but about one in three women has symptoms for more than 10 years, so the timing varies widely and cannot be predicted for you. A sensible approach is to treat symptoms effectively while they bother you, review the plan regularly with your provider, and consider trying lower doses or stopping when circumstances allow.`,
  },
  {
    q: "Does exercise help hot flashes?",
    a: `Not as a stand-alone treatment. Pooled trial data found no effect of exercise on hot flash frequency, and exercise can trigger a flash in symptomatic women. But exercise protects your bones, heart, muscle, mood, and sleep, so keep doing it. Time workouts away from bedtime and cool down gradually.`,
  },
  {
    q: "How much does an evaluation at Novaleo cost?",
    a: `The assessment call is free. The 60-minute Root Cause Intake is $97, and our Root Cause Lab Panel is $454, credited toward the Root Cause Restoration Program if you enroll within 30 days. We are a cash-pay practice that accepts FSA and HSA cards, and current pricing is always on our services page.`,
  },
];

const glossary: { term: string; def: string }[] = [
  {
    term: "Vasomotor symptoms (VMS)",
    def: "The clinical term for hot flashes and night sweats, referring to the blood vessels and nerve signals that control body temperature.",
  },
  {
    term: "Thermoneutral zone",
    def: "The range of core body temperature between the sweating and shivering thresholds where the body takes no action. It narrows in women with hot flashes.",
  },
  {
    term: "KNDy neurons",
    def: "A cluster of hypothalamic neurons that produce kisspeptin, neurokinin B, and dynorphin. When estrogen falls, their overactivity is thought to trigger hot flashes.",
  },
  {
    term: "Neurokinin B (NKB)",
    def: "A signaling molecule released by KNDy neurons that acts on the brain's temperature-control center. Fezolinetant and elinzanetant block its receptors.",
  },
  {
    term: "Perimenopause",
    def: "The transition leading up to the final menstrual period, often lasting several years and marked by fluctuating hormones, changing cycles, and symptoms such as hot flashes and sleep disruption.",
  },
  {
    term: "Menopause",
    def: "The point in time 12 consecutive months after the final menstrual period. The years afterward are postmenopause.",
  },
  {
    term: "SWAN",
    def: "The Study of Women's Health Across the Nation, a long-running multi-site U.S. study of more than 3,300 women through the menopause transition.",
  },
  {
    term: "NAMS",
    def: "The North American Menopause Society, now called The Menopause Society, a professional organization that publishes evidence-based position statements on menopause care.",
  },
  {
    term: "Progestogen and micronized progesterone",
    def: "Progestogens protect the uterine lining when estrogen is used in a woman with a uterus. Micronized progesterone is a bioidentical form.",
  },
  {
    term: "Transdermal",
    def: "Delivered through the skin, as with estrogen patches, gels, or sprays.",
  },
  {
    term: "SSRI and SNRI",
    def: "Classes of antidepressants (selective serotonin reuptake inhibitors and serotonin-norepinephrine reuptake inhibitors) that, at certain doses, also reduce hot flashes.",
  },
  {
    term: "CBT and CBT-I",
    def: "Cognitive behavioral therapy, and its form for insomnia. CBT for hot flashes reduces how much they bother and interfere with life, and CBT-I treats insomnia directly.",
  },
  {
    term: "Clinical hypnosis",
    def: "A guided, deeply relaxed state using individualized imagery and suggestion, delivered by a trained clinician or app. Rated Level I for hot flashes by NAMS.",
  },
  {
    term: "Placebo response",
    def: "Improvement that occurs in people who receive an inactive treatment. In hot flash trials it ranges from 20 to 66 percent.",
  },
  {
    term: "Hazard ratio (HR)",
    def: "A measure of how much the risk of an event over time differs between groups. An HR of 1.5 means a 50 percent higher risk.",
  },
  {
    term: "Boxed warning",
    def: "The FDA's most prominent warning on a drug label, used to highlight serious risks.",
  },
];

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
    cite: 'The 2023 Nonhormone Therapy Position Statement of The North American Menopause Society Advisory Panel. "The 2023 nonhormone therapy position statement of The North American Menopause Society."',
    journal: "Menopause.",
    detail: "2023;30(6):573-590.",
    href: "https://doi.org/10.1097/GME.0000000000002200",
  },
  {
    n: 2,
    cite: 'The 2022 Hormone Therapy Position Statement of The North American Menopause Society Advisory Panel. "The 2022 hormone therapy position statement of The North American Menopause Society."',
    journal: "Menopause.",
    detail: "2022;29(7):767-794.",
    href: "https://doi.org/10.1097/GME.0000000000002028",
  },
  {
    n: 3,
    cite: 'Avis NE, Crawford SL, Greendale G, et al. "Duration of menopausal vasomotor symptoms over the menopause transition."',
    journal: "JAMA Internal Medicine.",
    detail: "2015;175(4):531-539.",
    href: "https://doi.org/10.1001/jamainternmed.2014.8063",
  },
  {
    n: 4,
    cite: 'Gold EB, Colvin A, Avis N, et al. "Longitudinal analysis of the association between vasomotor symptoms and race/ethnicity across the menopausal transition: Study of Women\'s Health Across the Nation."',
    journal: "American Journal of Public Health.",
    detail: "2006;96(7):1226-1235.",
    href: "https://doi.org/10.2105/AJPH.2005.066936",
  },
  {
    n: 5,
    cite: 'Harlow SD, Elliott MR, Bondarenko I, Thurston RC, Jackson EA. "Monthly variation of hot flashes, night sweats, and trouble sleeping: effect of season and proximity to the final menstrual period in the SWAN Menstrual Calendar substudy."',
    journal: "Menopause.",
    detail: "2020;27(1):5-13.",
    href: "https://doi.org/10.1097/GME.0000000000001420",
  },
  {
    n: 6,
    cite: 'Freedman RR, Krell W. "Reduced thermoregulatory null zone in postmenopausal women with hot flashes."',
    journal: "American Journal of Obstetrics and Gynecology.",
    detail: "1999;181(1):66-70.",
    href: "https://doi.org/10.1016/S0002-9378(99)70437-0",
  },
  {
    n: 7,
    cite: 'Freedman RR. "Menopausal hot flashes: mechanisms, endocrinology, treatment."',
    journal: "Journal of Steroid Biochemistry and Molecular Biology.",
    detail: "2014;142:115-120.",
    href: "https://doi.org/10.1016/j.jsbmb.2013.08.010",
  },
  {
    n: 8,
    cite: 'Freedman RR, Norton D, Woodward S, Cornelissen G. "Core body temperature and circadian rhythm of hot flashes in menopausal women."',
    journal: "Journal of Clinical Endocrinology & Metabolism.",
    detail: "1995;80(8):2354-2358.",
    href: "https://doi.org/10.1210/jcem.80.8.7629229",
  },
  {
    n: 9,
    cite: 'Freedman RR. "Hot flashes: behavioral treatments, mechanisms, and relation to sleep."',
    journal: "American Journal of Medicine.",
    detail: "2005;118(Suppl 12B):124-130.",
    href: "https://doi.org/10.1016/j.amjmed.2005.09.046",
  },
  {
    n: 10,
    cite: 'Padilla SL, Johnson CW, Barker FD, Patterson MA, Palmiter RD. "A neural circuit underlying the generation of hot flushes."',
    journal: "Cell Reports.",
    detail: "2018;24(2):271-277.",
    href: "https://doi.org/10.1016/j.celrep.2018.06.037",
  },
  {
    n: 11,
    cite: 'Rance NE, Young WS 3rd. "Hypertrophy and increased gene expression of neurons containing neurokinin-B and substance-P messenger ribonucleic acids in the hypothalami of postmenopausal women."',
    journal: "Endocrinology.",
    detail: "1991;128(5):2239-2247.",
    href: "https://doi.org/10.1210/endo-128-5-2239",
  },
  {
    n: 12,
    cite: 'Lederman S, Ottery FD, Cano A, et al. "Fezolinetant for treatment of moderate-to-severe vasomotor symptoms associated with menopause (SKYLIGHT 1): a phase 3 randomised controlled study."',
    journal: "The Lancet.",
    detail: "2023;401(10382):1091-1102.",
    href: "https://doi.org/10.1016/S0140-6736(23)00085-5",
  },
  {
    n: 13,
    cite: 'Pinkerton JV, Simon JA, Joffe H, et al. "Elinzanetant for the treatment of vasomotor symptoms associated with menopause: OASIS 1 and 2 randomized clinical trials."',
    journal: "JAMA.",
    detail: "2024. doi:10.1001/jama.2024.14618.",
    href: "https://doi.org/10.1001/jama.2024.14618",
  },
  {
    n: 14,
    cite: 'Panay N, Joffe H, Maki PM, et al. "Elinzanetant for the treatment of vasomotor symptoms associated with menopause: a phase 3 randomized clinical trial (OASIS 3)."',
    journal: "JAMA Internal Medicine.",
    detail: "2025;185(11):1319-1327.",
    href: "https://doi.org/10.1001/jamainternmed.2025.4421",
  },
  {
    n: 15,
    cite: 'Maclennan AH, Broadbent JL, Lester S, Moore V. "Oral oestrogen and combined oestrogen/progestogen therapy versus placebo for hot flushes."',
    journal: "Cochrane Database of Systematic Reviews.",
    detail: "2004;(4):CD002978.",
    href: "https://doi.org/10.1002/14651858.CD002978.pub2",
  },
  {
    n: 16,
    cite: 'Joffe H, Guthrie KA, LaCroix AZ, et al. "Low-dose estradiol and the serotonin-norepinephrine reuptake inhibitor venlafaxine for vasomotor symptoms: a randomized clinical trial."',
    journal: "JAMA Internal Medicine.",
    detail: "2014;174(7):1058-1066.",
    href: "https://doi.org/10.1001/jamainternmed.2014.1891",
  },
  {
    n: 17,
    cite: 'Elkins GR, Fisher WI, Johnson AK, Carpenter JS, Keith TZ. "Clinical hypnosis in the treatment of postmenopausal hot flashes: a randomized controlled trial."',
    journal: "Menopause.",
    detail: "2013;20(3):291-298.",
    href: "https://doi.org/10.1097/gme.0b013e31826ce3ed",
  },
  {
    n: 18,
    cite: 'Ayers B, Smith M, Hellier J, Mann E, Hunter MS. "Effectiveness of group and self-help cognitive behavior therapy in reducing problematic menopausal hot flushes and night sweats (MENOS 2): a randomized controlled trial."',
    journal: "Menopause.",
    detail: "2012;19(7):749-759.",
    href: "https://doi.org/10.1097/gme.0b013e31823fe835",
  },
  {
    n: 19,
    cite: 'Huang AJ, Subak LL, Wing R, et al. "An intensive behavioral weight loss intervention and hot flushes in women."',
    journal: "Archives of Internal Medicine.",
    detail: "2010;170(13):1161-1167.",
    href: "https://doi.org/10.1001/archinternmed.2010.162",
  },
  {
    n: 20,
    cite: 'Thurston RC, Aslanidou Vlachos HE, Derby CA, et al. "Menopausal vasomotor symptoms and risk of incident cardiovascular disease events in SWAN."',
    journal: "Journal of the American Heart Association.",
    detail: "2021;10(3):e017416.",
    href: "https://doi.org/10.1161/JAHA.120.017416",
  },
  {
    n: 21,
    cite: 'El Khoudary SR, Aggarwal B, Beckie TM, et al. "Menopause transition and cardiovascular disease risk: implications for timing of early prevention: a scientific statement from the American Heart Association."',
    journal: "Circulation.",
    detail: "2020;142(25):e506-e532.",
    href: "https://doi.org/10.1161/CIR.0000000000000912",
  },
  {
    n: 22,
    cite: 'Crandall CJ, Aragaki A, Cauley JA, et al. "Associations of menopausal vasomotor symptoms with fracture incidence."',
    journal: "Journal of Clinical Endocrinology & Metabolism.",
    detail: "2015;100(2):524-534.",
    href: "https://doi.org/10.1210/jc.2014-3062",
  },
  {
    n: 23,
    cite: 'Viera AJ, Bond MM, Yates SW. "Diagnosing night sweats."',
    journal: "American Family Physician.",
    detail: "2003;67(5):1019-1024.",
    href: "https://pubmed.ncbi.nlm.nih.gov/12643362/",
  },
  {
    n: 24,
    cite: 'Mold JW, Holtzclaw BJ, McCarthy L. "Night sweats: a systematic review of the literature."',
    journal: "Journal of the American Board of Family Medicine.",
    detail: "2012;25(6):878-893.",
    href: "https://doi.org/10.3122/jabfm.2012.06.120033",
  },
  {
    n: 25,
    cite: 'Stuenkel CA, Davis SR, Gompel A, et al. "Treatment of symptoms of the menopause: an Endocrine Society clinical practice guideline."',
    journal: "Journal of Clinical Endocrinology & Metabolism.",
    detail: "2015;100(11):3975-4011.",
    href: "https://doi.org/10.1210/jc.2015-2236",
  },
  {
    n: 26,
    cite: 'U.S. Food and Drug Administration. "FDA approves novel drug to treat moderate to severe hot flashes caused by menopause" (Veozah, fezolinetant). Press announcement, May 12, 2023.',
    journal: "",
    detail: "",
    href: "https://www.fda.gov/news-events/press-announcements/fda-approves-novel-drug-treat-moderate-severe-hot-flashes-caused-menopause",
  },
  {
    n: 27,
    cite: 'U.S. Food and Drug Administration. "FDA adds warning about rare occurrence of serious liver injury with use of Veozah (fezolinetant) for hot flashes due to menopause." Drug Safety Communication, September 12, 2024; updated December 16, 2024 with Boxed Warning.',
    journal: "",
    detail: "",
    href: "https://www.fda.gov/safety/medical-product-safety-information/fda-adds-warning-about-rare-occurrence-serious-liver-injury-use-veozah-fezolinetant-hot-flashes-due",
  },
  {
    n: 28,
    cite: "U.S. Food and Drug Administration. LYNKUET (elinzanetant) capsules, prescribing information. Revised 10/2025.",
    journal: "",
    detail: "",
    href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/219469s000lbl.pdf",
  },
  {
    n: 29,
    cite: 'U.S. Food and Drug Administration. "FDA requests labeling changes related to safety information to clarify the benefit/risk considerations for menopausal hormone therapies." Drug alert, November 10, 2025.',
    journal: "",
    detail: "",
    href: "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-requests-labeling-changes-related-safety-information-clarify-benefitrisk-considerations",
  },
  {
    n: 30,
    cite: 'U.S. Food and Drug Administration. "FDA approves labeling changes to menopausal hormone therapy products." Press announcement, February 12, 2026.',
    journal: "",
    detail: "",
    href: "https://www.fda.gov/news-events/press-announcements/fda-approves-labeling-changes-menopausal-hormone-therapy-products",
  },
  {
    n: 31,
    cite: 'Simon JA, Portman DJ, Kaunitz AM, et al. "Low-dose paroxetine 7.5 mg for menopausal vasomotor symptoms: two randomized controlled trials."',
    journal: "Menopause.",
    detail: "2013;20(10):1027-1035.",
    href: "https://doi.org/10.1097/GME.0b013e3182a66aa7",
  },
  {
    n: 32,
    cite: "U.S. Food and Drug Administration. BRISDELLE (paroxetine) capsules, prescribing information. Revised 2/2025.",
    journal: "",
    detail: "",
    href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/204516s009s014lbl.pdf",
  },
  {
    n: 33,
    cite: 'Guthrie KA, LaCroix AZ, Ensrud KE, et al. "Pooled analysis of six pharmacologic and nonpharmacologic interventions for vasomotor symptoms."',
    journal: "Obstetrics & Gynecology.",
    detail: "2015;126(2):413-422.",
    href: "https://doi.org/10.1097/AOG.0000000000000927",
  },
  {
    n: 34,
    cite: 'Leon-Ferre RA, Novotny PJ, Wolfe EG, et al. "Oxybutynin vs placebo for hot flashes in women with or without breast cancer: a randomized, double-blind clinical trial (ACCRU SC-1603)."',
    journal: "JNCI Cancer Spectrum.",
    detail: "2020;4(1):pkz088.",
    href: "https://doi.org/10.1093/jncics/pkz088",
  },
  {
    n: 35,
    cite: 'Simon JA, Gaines T, LaGuardia KD. "Extended-release oxybutynin therapy for vasomotor symptoms in women: a randomized clinical trial."',
    journal: "Menopause.",
    detail: "2016;23(11):1214-1221.",
    href: "https://doi.org/10.1097/GME.0000000000000773",
  },
  {
    n: 36,
    cite: 'Diem SJ, LaCroix AZ, Reed SD, et al. "Effects of pharmacologic and nonpharmacologic interventions on menopause-related quality of life: a pooled analysis of individual participant data from four MsFLASH trials."',
    journal: "Menopause.",
    detail: "2020;27(10):1126-1136.",
    href: "https://doi.org/10.1097/GME.0000000000001597",
  },
  {
    n: 37,
    cite: 'Mann E, Smith MJ, Hellier J, et al. "Cognitive behavioural treatment for women who have menopausal symptoms after breast cancer treatment (MENOS 1): a randomised controlled trial."',
    journal: "The Lancet Oncology.",
    detail: "2012;13(3):309-318.",
    href: "https://doi.org/10.1016/S1470-2045(11)70364-3",
  },
  {
    n: 38,
    cite: "Centers for Disease Control and Prevention. Blastomycosis: basics (symptoms), what causes blastomycosis (where it lives), and clinical overview for health care providers.",
    journal: "",
    detail: "",
    href: "https://www.cdc.gov/blastomycosis/about/index.html",
    label: "Basics",
    extra: [
      { href: "https://www.cdc.gov/blastomycosis/causes/index.html", label: "Causes" },
      {
        href: "https://www.cdc.gov/blastomycosis/hcp/clinical-overview/index.html",
        label: "Clinical overview",
      },
    ],
  },
  {
    n: 39,
    cite: "Michigan Department of Health and Human Services. Blastomycosis.",
    journal: "",
    detail: "",
    href: "https://www.michigan.gov/mdhhs/safety-injury-prev/environmental-health/topics/mitracking/blastomycosis",
  },
  {
    n: 40,
    cite: 'Segaloff HE, Wu K, Shaw S, et al. "Notes from the field: cluster of blastomycosis among neighborhood residents, St. Croix County, Wisconsin, 2022."',
    journal: "MMWR Morbidity and Mortality Weekly Report.",
    detail: "2023;72(13):348-349.",
    href: "https://www.cdc.gov/mmwr/volumes/72/wr/mm7213a5.htm",
  },
  {
    n: 41,
    cite: "Centers for Disease Control and Prevention. Babesiosis: signs and symptoms.",
    journal: "",
    detail: "",
    href: "https://www.cdc.gov/babesiosis/signs-symptoms/index.html",
  },
  {
    n: 42,
    cite: 'Stein E, Elbadawi LI, Kazmierczak J, Davis JP. "Babesiosis surveillance, Wisconsin, 2001-2015."',
    journal: "MMWR Morbidity and Mortality Weekly Report.",
    detail: "2017;66(26):687-691.",
    href: "https://doi.org/10.15585/mmwr.mm6626a2",
  },
  {
    n: 43,
    cite: "Mayo Clinic. Hot flashes: symptoms and causes.",
    journal: "",
    detail: "",
    href: "https://www.mayoclinic.org/diseases-conditions/hot-flashes/symptoms-causes/syc-20352790",
  },
  {
    n: 44,
    cite: "National Institute for Health and Care Excellence. Menopause: identification and management (NG23), recommendations.",
    journal: "",
    detail: "",
    href: "https://www.nice.org.uk/guidance/ng23/chapter/recommendations",
  },
  {
    n: 45,
    cite: "National Institute on Aging. Study of Women's Health Across the Nation (SWAN): study details and research centers.",
    journal: "",
    detail: "",
    href: "https://agingresearchbiobank.nia.nih.gov/studies/swan/details",
  },
  {
    n: 46,
    cite: "Astellas Pharma. Statistical Analysis Plan, SKYLIGHT 2 (NCT04003155), which defines mild, moderate, and severe vasomotor symptoms per the FDA Draft Guidance for Industry (2003) and the EMA CHMP Guideline (2005).",
    journal: "",
    detail: "",
    href: "https://cdn.clinicaltrials.gov/large-docs/55/NCT04003155/SAP_001.pdf",
  },
  {
    n: 47,
    cite: "Michigan Department of Licensing and Regulatory Affairs (LARA).",
    journal: "",
    detail: "",
    href: "https://www.michigan.gov/lara",
  },
  {
    n: 48,
    cite: "Wisconsin Department of Safety and Professional Services: Advanced Practice Nurse Prescriber.",
    journal: "",
    detail: "",
    href: "https://dsps.wi.gov/a-z-professions-list/advanced-practice-nurse-prescriber/",
  },
  {
    n: 49,
    cite: "The Menopause Society (formerly NAMS). Find a Menopause Practitioner directory.",
    journal: "",
    detail: "",
    href: "https://portal.menopause.org/NAMS/NAMS/Directory/Menopause-Practitioner.aspx",
  },
  {
    n: 50,
    cite: "European Medicines Agency. Lynkuet (elinzanetant): authorised indication, 17 November 2025.",
    journal: "",
    detail: "",
    href: "https://www.ema.europa.eu/en/medicines/human/EPAR/lynkuet",
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
