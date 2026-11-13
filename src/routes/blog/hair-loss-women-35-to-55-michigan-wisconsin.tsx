import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogLayout } from "@/components/blog/BlogLayout";

import heroImg from "@/assets/blog/hair-loss-hero-woman-michigan-kitchen.webp";
import hairbrushImg from "@/assets/blog/hair-loss-hairbrush-winter-vanity.webp";
import dermExamImg from "@/assets/blog/hair-loss-dermatologist-scalp-exam.webp";
import labDrawImg from "@/assets/blog/hair-loss-ferritin-lab-draw.webp";
import reviewLabsImg from "@/assets/blog/hair-loss-reviewing-labs-wisconsin-winter.webp";
import nutritionImg from "@/assets/blog/hair-loss-protein-rich-midwest-nutrition.webp";
import telehealthImg from "@/assets/blog/hair-loss-telehealth-visit-michigan.webp";
import lakeImg from "@/assets/blog/hair-loss-lake-michigan-confidence.webp";
import naturalHairImg from "@/assets/blog/hair-loss-natural-hair-detroit-hairline.webp";
import porchImg from "@/assets/blog/hair-loss-wisconsin-porch-reflection.webp";
import flatlayImg from "@/assets/blog/hair-loss-nutrient-flatlay-notebook.webp";
import hairStrandsImg from "@/assets/blog/hair-loss-hair-strands-macro-growth-cycle.webp";
import checkPartImg from "@/assets/blog/hair-loss-checking-part-line-mirror.webp";
import calendarImg from "@/assets/blog/hair-loss-timeline-calendar-tracking.webp";
import crownImg from "@/assets/blog/hair-loss-part-line-crown-overhead.webp";
import lifeStagesImg from "@/assets/blog/hair-loss-three-women-wisconsin-lake.webp";
import postpartumImg from "@/assets/blog/hair-loss-postpartum-mother-michigan-nursery.webp";
import glucoseImg from "@/assets/blog/hair-loss-glucose-monitor-oatmeal.webp";
import strengthImg from "@/assets/blog/hair-loss-strength-training-snowy-wisconsin.webp";
import proteinPrepImg from "@/assets/blog/hair-loss-protein-breakfast-prep-glp1.webp";
import pillsImg from "@/assets/blog/hair-loss-pill-organizer-medication-list.webp";
import detangleImg from "@/assets/blog/hair-loss-gentle-detangling-hair-care.webp";
import trailImg from "@/assets/blog/hair-loss-trail-fork-decision-michigan.webp";
import highlightImg from "@/assets/blog/hair-loss-highlighting-lab-report.webp";
import topicalImg from "@/assets/blog/hair-loss-topical-scalp-treatment-dropper.webp";
import fourWomenImg from "@/assets/blog/hair-loss-four-women-farmers-market.webp";
import springWalkImg from "@/assets/blog/hair-loss-spring-walk-wisconsin-renewal.webp";
import mythsImg from "@/assets/blog/hair-loss-skeptical-reading-phone.webp";
import redFlagsImg from "@/assets/blog/hair-loss-dermatology-review-scalp-photo.webp";
import careTeamImg from "@/assets/blog/hair-loss-care-team-nurse-derm-dietitian.webp";
import preparePhotoImg from "@/assets/blog/hair-loss-photographing-part-line-prep.webp";
import faqImg from "@/assets/blog/hair-loss-questions-coffee-shop-wisconsin.webp";
import noteImg from "@/assets/blog/hair-loss-handwritten-note-lake-sunrise.webp";

export const Route = createFileRoute("/blog/hair-loss-women-35-to-55-michigan-wisconsin")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://novaweightandwellness.com/blog/hair-loss-women-35-to-55-michigan-wisconsin",
      },
    ],
    meta: [
      {
        title: "Hair Loss in Women 35-55: Root Causes | MI & WI | Novaleo",
      },
      {
        name: "description",
        content:
          "Hair thinning after 35? A root-cause guide to shedding, female pattern hair loss, iron, thyroid, hormones, and GLP-1 hair loss for Michigan and Wisconsin women.",
      },
      {
        property: "og:title",
        content:
          "Why Is My Hair Thinning? A Root-Cause Guide to Hair Loss in Women 35 to 55 in Michigan and Wisconsin",
      },
      {
        property: "og:description",
        content:
          "An honest, deeply sourced guide to why women in their late 30s, 40s, and early 50s lose hair, which causes are reversible, and what to test and treat first.",
      },
      {
        property: "og:url",
        content:
          "https://novaweightandwellness.com/blog/hair-loss-women-35-to-55-michigan-wisconsin",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:image",
        content: "https://novaweightandwellness.com/og-image-v6.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Hair Loss in Women 35-55: Root Causes | MI & WI | Novaleo",
      },
      {
        name: "twitter:description",
        content:
          "Why hair thins in midlife, which causes are reversible, and what to test first. For women in Michigan and Wisconsin.",
      },
      {
        name: "twitter:image",
        content: "https://novaweightandwellness.com/og-image-v6.jpg",
      },
    ],
  }),
  component: BlogComponent,
});

const tocItems = [
  { id: "the-hair-in-the-drain", label: "The Hair in the Drain" },
  { id: "how-hair-grows", label: "How Hair Actually Grows (and Why Loss Runs on a Delay)" },
  { id: "shedding-or-thinning", label: "Shedding or Thinning? How to Read What You See" },
  { id: "six-patterns", label: "The Six Patterns Behind Hair Loss in Women 35 to 55" },
  { id: "telogen-effluvium", label: "Telogen Effluvium: The Great Delayed Reaction" },
  {
    id: "female-pattern-hair-loss",
    label: "Female Pattern Hair Loss: The Slow Pattern That Gets Missed",
  },
  { id: "midlife-hormones", label: "Midlife Hormones and Your Scalp" },
  { id: "life-stages", label: "Perimenopause, Menopause, and Beyond: How Hair Changes by Stage" },
  { id: "pregnancy-postpartum", label: "Pregnancy, Postpartum, Loss, and Fertility Treatment" },
  { id: "iron-nutrients", label: "Ferritin, Iron, and the Nutrient Question" },
  { id: "eating-plan", label: "Eating for Your Follicles: A Practical Plan" },
  { id: "thyroid-insulin-stress", label: "Thyroid, Insulin, and the Stress Question" },
  { id: "sleep-movement", label: "Sleep, Movement, and Nervous System Support" },
  { id: "glp-1-hair", label: "GLP-1 Medications and Hair Shedding" },
  {
    id: "medications-conditions",
    label: "Medications, Surgery, and Medical Conditions: A Practical Checklist",
  },
  { id: "autoimmune-scarring", label: "Autoimmune and Scarring Causes You Cannot Afford to Miss" },
  { id: "hair-care-scalp", label: "Hair Care, Traction, and Scalp Health" },
  { id: "michigan-wisconsin-factors", label: "The Michigan and Wisconsin Factor" },
  { id: "where-to-start", label: "Where Should You Start? A Decision Guide" },
  { id: "evaluation", label: "What a Root-Cause Hair Loss Evaluation Looks Like" },
  { id: "reading-your-labs", label: "Reading Your Lab Results in Plain Language" },
  { id: "treatments", label: "Treatments: What the Evidence Actually Supports" },
  {
    id: "supplement-traps",
    label: "Supplements: What Helps, What Wastes Money, What Can Backfire",
  },
  { id: "four-women", label: "Four Women, Four Different Answers" },
  { id: "timeline", label: "The 12-Month Timeline: What Recovery Really Looks Like" },
  { id: "myths", label: "Twelve Myths About Women's Hair Loss" },
  { id: "red-flags", label: "Red Flags: When to See a Dermatologist Quickly" },
  { id: "emotional-weight", label: "The Emotional Weight of Thinning Hair" },
  {
    id: "choosing-provider",
    label: "Building Your Team and Choosing a Provider in Michigan or Wisconsin",
  },
  { id: "prepare", label: "How to Prepare for Your First Visit" },
  { id: "comprehensive-faq", label: "Comprehensive FAQ" },
  { id: "closing-katies-note", label: "A Personal Note from Katie" },
];

const LINK = "text-secondary font-semibold hover:underline";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-lg leading-relaxed text-foreground/85 mb-5">{children}</p>;
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3 mb-6 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-lg leading-relaxed text-foreground/85">
          <span className="text-secondary mt-1 shrink-0">&#9679;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function OL({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="space-y-3 mb-6 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-lg leading-relaxed text-foreground/85">
          <span className="text-secondary font-semibold shrink-0 w-6">{i + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function Fig({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-2xl shadow-lg w-full my-8"
      width={800}
      height={450}
      loading="lazy"
    />
  );
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-muted/60 border border-border rounded-2xl p-6 md:p-8 my-8">
      <p className="font-display text-xl text-primary mb-3">{title}</p>
      <div className="text-foreground/80 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function CTA({ title, body, button }: { title: string; body: string; button: string }) {
  return (
    <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-8 my-12">
      <p className="font-display text-xl text-primary mb-3">{title}</p>
      <p className="text-foreground/70 mb-5">{body}</p>
      <Link to="/free-15-min-call-with-katie" className="btn-gold">
        {button}
      </Link>
    </div>
  );
}

function DataTable({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto my-8 rounded-2xl border border-border">
      <table className="w-full text-left border-collapse text-base">
        <thead>
          <tr className="bg-primary/5">
            {head.map((h) => (
              <th key={h} className="p-4 font-display text-primary border-b border-border">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-foreground/80">
          {rows.map((row, i) => (
            <tr key={i} className={i < rows.length - 1 ? "border-b border-border" : ""}>
              {row.map((cell, j) => (
                <td key={j} className={j === 0 ? "p-4 font-semibold" : "p-4"}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function XL({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={LINK}>
      {children}
    </a>
  );
}

function Cite({ k }: { k: string }) {
  const n = REFS.findIndex((r) => r.key === k) + 1;
  return (
    <sup className="ml-0.5">
      <a
        href={`#ref-${n}`}
        className="text-secondary hover:underline"
        aria-label={`Reference ${n}`}
      >
        [{n}]
      </a>
    </sup>
  );
}

const REFS: { key: string; text: string; url: string; link: string }[] = [
  {
    key: "kearney2026",
    text: 'Kearney CA, Brinks AL, Lawrence CN, et al. "Androgenetic Alopecia in Women: A Narrative Review of Pathophysiology, Clinical Evaluation, and Treatments." American Journal of Clinical Dermatology. 2026;27(2):363-389.',
    url: "https://pubmed.ncbi.nlm.nih.gov/41714473/",
    link: "View study",
  },
  {
    key: "aad-fphl",
    text: 'American Academy of Dermatology Association. "Female Pattern Hair Loss."',
    url: "https://www.aad.org/public/diseases/hair-loss/types/female-pattern",
    link: "View page",
  },
  {
    key: "harrison2002",
    text: 'Harrison S, Sinclair R. "Telogen Effluvium." Clinical and Experimental Dermatology. 2002;27(5):389-395.',
    url: "https://pubmed.ncbi.nlm.nih.gov/12190639/",
    link: "View study",
  },
  {
    key: "almohanna2019",
    text: 'Almohanna HM, Ahmed AA, Tsatalis JP, Tosti A. "The Role of Vitamins and Minerals in Hair Loss: A Review." Dermatology and Therapy (Heidelberg). 2019;9(1):51-70.',
    url: "https://pubmed.ncbi.nlm.nih.gov/30547302/",
    link: "View study",
  },
  {
    key: "ludwig1977",
    text: 'Ludwig E. "Classification of the Types of Androgenetic Alopecia (Common Baldness) Occurring in the Female Sex." British Journal of Dermatology. 1977;97(3):247-254.',
    url: "https://pubmed.ncbi.nlm.nih.gov/921894/",
    link: "View study",
  },
  {
    key: "whiting1996",
    text: 'Whiting DA. "Chronic Telogen Effluvium: Increased Scalp Hair Shedding in Middle-Aged Women." Journal of the American Academy of Dermatology. 1996;35(6):899-906.',
    url: "https://pubmed.ncbi.nlm.nih.gov/8959948/",
    link: "View study",
  },
  {
    key: "asghar2020",
    text: 'Asghar F, Shamim N, Farooque U, Sheikh H, Aqeel R. "Telogen Effluvium: A Review of the Literature." Cureus. 2020;12(5):e8320.',
    url: "https://pubmed.ncbi.nlm.nih.gov/32607303/",
    link: "View study",
  },
  {
    key: "rushton2002",
    text: 'Rushton DH. "Nutritional Factors and Hair Loss." Clinical and Experimental Dermatology. 2002;27(5):396-404.',
    url: "https://pubmed.ncbi.nlm.nih.gov/12190640/",
    link: "View study",
  },
  {
    key: "yorulmaz2022",
    text: 'Yorulmaz A, Hayran Y, Ozdemir AK, et al. "Telogen Effluvium in Daily Practice: Patient Characteristics, Laboratory Parameters, and Treatment Modalities of 3028 Patients with Telogen Effluvium." Journal of Cosmetic Dermatology. 2022;21(6):2610-2617.',
    url: "https://pubmed.ncbi.nlm.nih.gov/34449961/",
    link: "View study",
  },
  {
    key: "kanti2018",
    text: 'Kanti V, Messenger A, Dobos G, et al. "Evidence-Based (S3) Guideline for the Treatment of Androgenetic Alopecia in Women and in Men, Short Version." Journal of the European Academy of Dermatology and Venereology. 2018;32(1):11-22.',
    url: "https://pubmed.ncbi.nlm.nih.gov/29178529/",
    link: "View study",
  },
  {
    key: "pratt2017",
    text: 'Pratt CH, King LE Jr, Messenger AG, Christiano AM, Sundberg JP. "Alopecia Areata." Nature Reviews Disease Primers. 2017;3:17011.',
    url: "https://pubmed.ncbi.nlm.nih.gov/28300084/",
    link: "View study",
  },
  {
    key: "trueb2021",
    text: 'Trüeb RM, Dutra Rezende H, Gavazzoni Dias MFR. "What Can the Hair Tell Us About COVID-19?" Experimental Dermatology. 2021;30(2):288-290.',
    url: "https://pubmed.ncbi.nlm.nih.gov/33316115/",
    link: "View study",
  },
  {
    key: "gizlenti2014",
    text: 'Gizlenti S, Ekmekci TR. "The Changes in the Hair Cycle During Gestation and the Post-Partum Period." Journal of the European Academy of Dermatology and Venereology. 2014;28(7):878-881.',
    url: "https://pubmed.ncbi.nlm.nih.gov/23682615/",
    link: "View study",
  },
  {
    key: "patel2013",
    text: 'Patel M, Harrison S, Sinclair R. "Drugs and Hair Loss." Dermatologic Clinics. 2013;31(1):67-73.',
    url: "https://pubmed.ncbi.nlm.nih.gov/23159177/",
    link: "View study",
  },
  {
    key: "choi2021",
    text: 'Choi S, Zhang B, Ma S, et al. "Corticosterone Inhibits GAS6 to Govern Hair Follicle Stem-Cell Quiescence." Nature. 2021;592(7854):428-432. (Mouse study.)',
    url: "https://pubmed.ncbi.nlm.nih.gov/33790465/",
    link: "View study",
  },
  {
    key: "norwood2001",
    text: 'Norwood OT. "Incidence of Female Androgenetic Alopecia (Female Pattern Alopecia)." Dermatologic Surgery. 2001;27(1):53-54.',
    url: "https://pubmed.ncbi.nlm.nih.gov/11231244/",
    link: "View study",
  },
  {
    key: "birch2001",
    text: 'Birch MP, Messenger JF, Messenger AG. "Hair Density, Hair Diameter and the Prevalence of Female Pattern Hair Loss." British Journal of Dermatology. 2001;144(2):297-304.',
    url: "https://pubmed.ncbi.nlm.nih.gov/11251562/",
    link: "View study",
  },
  {
    key: "afifi2017",
    text: 'Afifi L, Maranda EL, Zarei M, et al. "Low-Level Laser Therapy as a Treatment for Androgenetic Alopecia." Lasers in Surgery and Medicine. 2017;49(1):27-39.',
    url: "https://pubmed.ncbi.nlm.nih.gov/27114071/",
    link: "View study",
  },
  {
    key: "liu2025",
    text: 'Liu Y, Tosti A, Wang ECE, et al. "Androgenetic Alopecia." Nature Reviews Disease Primers. 2025;11(1):73.',
    url: "https://pubmed.ncbi.nlm.nih.gov/41068174/",
    link: "View study",
  },
  {
    key: "grymowicz2020",
    text: 'Grymowicz M, Rudnicka E, Podfigurna A, et al. "Hormonal Effects on Hair Follicles." International Journal of Molecular Sciences. 2020;21(15).',
    url: "https://pubmed.ncbi.nlm.nih.gov/32731328/",
    link: "View study",
  },
  {
    key: "mirmirani2011",
    text: "Mirmirani P. \"Hormonal Changes in Menopause: Do They Contribute to a 'Midlife Hair Crisis' in Women?\" British Journal of Dermatology. 2011;165(Suppl 3):7-11.",
    url: "https://pubmed.ncbi.nlm.nih.gov/22171679/",
    link: "View study",
  },
  {
    key: "desai2021",
    text: 'Desai K, Almeida B, Miteva M. "Understanding Hormonal Therapies: Overview for the Dermatologist Focused on Hair." Dermatology. 2021;237(5):786-791.',
    url: "https://pubmed.ncbi.nlm.nih.gov/33465769/",
    link: "View study",
  },
  {
    key: "nams2022",
    text: 'The 2022 Hormone Therapy Position Statement of The North American Menopause Society Advisory Panel. "The 2022 Hormone Therapy Position Statement of The North American Menopause Society." Menopause. 2022;29(7):767-794.',
    url: "https://pubmed.ncbi.nlm.nih.gov/35797481/",
    link: "View statement",
  },
  {
    key: "vano2014",
    text: 'Vañó-Galván S, Molina-Ruiz AM, Serrano-Falcon C, et al. "Frontal Fibrosing Alopecia: A Multicenter Review of 355 Patients." Journal of the American Academy of Dermatology. 2014;70(4):670-678.',
    url: "https://pubmed.ncbi.nlm.nih.gov/24508293/",
    link: "View study",
  },
  {
    key: "trost2006",
    text: 'Trost LB, Bergfeld WF, Calogeras E. "The Diagnosis and Treatment of Iron Deficiency and Its Potential Relationship to Hair Loss." Journal of the American Academy of Dermatology. 2006;54(5):824-844.',
    url: "https://pubmed.ncbi.nlm.nih.gov/16635664/",
    link: "View study",
  },
  {
    key: "cdc2002",
    text: 'Centers for Disease Control and Prevention. "Iron Deficiency, United States, 1999-2000." Morbidity and Mortality Weekly Report. 2002;51(40):897-899.',
    url: "https://pubmed.ncbi.nlm.nih.gov/12418542/",
    link: "View report",
  },
  {
    key: "rasheed2013",
    text: 'Rasheed H, Mahgoub D, Hegazy R, et al. "Serum Ferritin and Vitamin D in Female Hair Loss: Do They Play a Role?" Skin Pharmacology and Physiology. 2013;26(2):101-107.',
    url: "https://pubmed.ncbi.nlm.nih.gov/23428658/",
    link: "View study",
  },
  {
    key: "kantor2003",
    text: 'Kantor J, Kessler LJ, Brooks DG, Cotsarelis G. "Decreased Serum Ferritin Is Associated with Alopecia in Women." Journal of Investigative Dermatology. 2003;121(5):985-988.',
    url: "https://pubmed.ncbi.nlm.nih.gov/14708596/",
    link: "View study",
  },
  {
    key: "ahmed2026",
    text: 'Ahmed A, Alali A, Alahmadi M, et al. "Association Between Serum Trace Elements and Telogen Effluvium: A Systematic Review and Meta-Analysis." Skin Appendage Disorders. 2026 (published online March 18).',
    url: "https://pubmed.ncbi.nlm.nih.gov/42077991/",
    link: "View study",
  },
  {
    key: "webb1988",
    text: 'Webb AR, Kline L, Holick MF. "Influence of Season and Latitude on the Cutaneous Synthesis of Vitamin D3: Exposure to Winter Sunlight in Boston and Edmonton Will Not Promote Vitamin D3 Synthesis in Human Skin." Journal of Clinical Endocrinology and Metabolism. 1988;67(2):373-378.',
    url: "https://pubmed.ncbi.nlm.nih.gov/2839537/",
    link: "View study",
  },
  {
    key: "holick2011",
    text: 'Holick MF, Binkley NC, Bischoff-Ferrari HA, et al. "Evaluation, Treatment, and Prevention of Vitamin D Deficiency: An Endocrine Society Clinical Practice Guideline." Journal of Clinical Endocrinology and Metabolism. 2011;96(7):1911-1930.',
    url: "https://pubmed.ncbi.nlm.nih.gov/21646368/",
    link: "View guideline",
  },
  {
    key: "contreras2014",
    text: 'Contreras-Jurado C, Garcia-Serrano L, Martinez-Fernandez M, et al. "Impaired Hair Growth and Wound Healing in Mice Lacking Thyroid Hormone Receptors." PLoS One. 2014;9(9):e108137. (Mouse study.)',
    url: "https://pubmed.ncbi.nlm.nih.gov/25254665/",
    link: "View study",
  },
  {
    key: "motafeghi2026",
    text: 'Motafeghi F, Saei Ghare Naz M, Ramezani Tehrani F, Behboudi-Gandevani S. "Androgenetic Alopecia in Polycystic Ovary Syndrome: A Cutaneous Marker of Systemic Metabo-Inflammatory and Endocrine Dysfunction." Endocrine Connections. 2026;15(5).',
    url: "https://pubmed.ncbi.nlm.nih.gov/42096403/",
    link: "View study",
  },
  {
    key: "kyei2011",
    text: 'Kyei A, Bergfeld WF, Piliang M, Summers P. "Medical and Environmental Risk Factors for the Development of Central Centrifugal Cicatricial Alopecia: A Population Study." Archives of Dermatology. 2011;147(8):909-914.',
    url: "https://pubmed.ncbi.nlm.nih.gov/21482861/",
    link: "View study",
  },
  {
    key: "wegovy-label",
    text: "Novo Nordisk. Wegovy (semaglutide) prescribing information, Adverse Reactions: Hair Loss. DailyMed, U.S. National Library of Medicine. Accessed September 2026.",
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b",
    link: "View label",
  },
  {
    key: "zepbound-label",
    text: "Eli Lilly and Company. Zepbound (tirzepatide) prescribing information, Adverse Reactions: Hair Loss. DailyMed, U.S. National Library of Medicine. Accessed September 2026.",
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=487cd7e7-434c-4925-99fa-aa80b1cc776b",
    link: "View label",
  },
  {
    key: "viquez2026",
    text: 'Viquez Burboa GU, Flores Guillén MÁR, Duardo González VS. "GLP-1 Receptor Agonists and Alopecia: A Systematic Review and Meta-Analysis of Incidence, Risk, Subtypes, and Mechanisms." Skin Appendage Disorders. 2026 (published online June 30).',
    url: "https://pubmed.ncbi.nlm.nih.gov/42621629/",
    link: "View study",
  },
  {
    key: "gupta2026",
    text: 'Gupta AK, Teasell EM, Economopoulos V, Mirmirani P. "GLP-1 Therapies and Hair Loss: A Systematic Review of Current Evidence and Implications for Counseling." Science Progress. 2026;109(2).',
    url: "https://pubmed.ncbi.nlm.nih.gov/41998799/",
    link: "View study",
  },
  {
    key: "piraccini2026",
    text: 'Piraccini BM, Vañó-Galván S, Blume-Peytavi U, Ribet V, Mengeaud V. "Hair Loss in Patients on Glucagon-Like Peptide 1 Receptor Agonists: Understanding Risks and Managing Outcomes." Dermatology and Therapy (Heidelberg). 2026;16(7):3345-3360.',
    url: "https://pubmed.ncbi.nlm.nih.gov/42249225/",
    link: "View commentary",
  },
  {
    key: "chinisaz2026",
    text: 'Chinisaz F, Maleki T, Najjari K, Miratashi Yazdi SA. "Comparative Analysis of Postoperative Hair Loss and Micronutrient Deficiencies After One-Anastomosis Gastric Bypass Versus Sleeve Gastrectomy." Obesity Surgery. 2026;36(4):1804-1813.',
    url: "https://pubmed.ncbi.nlm.nih.gov/41894131/",
    link: "View study",
  },
  {
    key: "lysek2026",
    text: 'Lysek M, Putek J, Jastrzab-Miskiewicz B, et al. "Alopecia Areata as a Sentinel Condition for Systemic Autoimmunity: A Global Bidirectional Cohort Study." Dermatology. 2026 (published online August 14).',
    url: "https://pubmed.ncbi.nlm.nih.gov/42599844/",
    link: "View study",
  },
  {
    key: "olumiant-label",
    text: "Eli Lilly and Company. Olumiant (baricitinib) prescribing information, Indications: Alopecia Areata. DailyMed, U.S. National Library of Medicine. Accessed September 2026.",
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=866e9f35-9035-4581-a4b1-75a621ab55cf",
    link: "View label",
  },
  {
    key: "litfulo-label",
    text: "Pfizer. Litfulo (ritlecitinib) prescribing information, Indications: Severe Alopecia Areata. DailyMed, U.S. National Library of Medicine. Accessed September 2026.",
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1882f799-61b0-4813-965a-4910c4ae419c",
    link: "View label",
  },
  {
    key: "king2022",
    text: 'King B, Ohyama M, Kwon O, et al. "Two Phase 3 Trials of Baricitinib for Alopecia Areata." New England Journal of Medicine. 2022;386(18):1687-1699.',
    url: "https://pubmed.ncbi.nlm.nih.gov/35334197/",
    link: "View study",
  },
  {
    key: "king2023",
    text: 'King B, Zhang X, Harcha WG, et al. "Efficacy and Safety of Ritlecitinib in Adults and Adolescents with Alopecia Areata: A Randomised, Double-Blind, Multicentre, Phase 2b-3 Trial." The Lancet. 2023;401(10387):1518-1529.',
    url: "https://pubmed.ncbi.nlm.nih.gov/37062298/",
    link: "View study",
  },
  {
    key: "tang2026",
    text: 'Tang GT, Triwongwaranat D, de Souza Teixeira M, et al. "Clinicopathological Features and Treatment Outcomes of Fibrosing Alopecia in a Pattern Distribution: A Multicentre Cohort Study." Clinical and Experimental Dermatology. 2026;51(3):411-417.',
    url: "https://pubmed.ncbi.nlm.nih.gov/41066610/",
    link: "View study",
  },
  {
    key: "courtois1996",
    text: 'Courtois M, Loussouarn G, Hourseau S, Grollier JF. "Periodicity in the Growth and Shedding of Hair." British Journal of Dermatology. 1996;134(1):47-54. (Ten men followed over 8 to 14 years.)',
    url: "https://pubmed.ncbi.nlm.nih.gov/8745886/",
    link: "View study",
  },
  {
    key: "egle-arsenic",
    text: 'Michigan Department of Environment, Great Lakes, and Energy (EGLE). "Arsenic in Well Water."',
    url: "https://www.michigan.gov/egle/about/organization/drinking-water-and-environmental-health/water-well-construction/guidance-materials/arsenic-in-well-water",
    link: "View page",
  },
  {
    key: "dnr-arsenic",
    text: 'Wisconsin Department of Natural Resources. "Arsenic in Groundwater and Private Wells."',
    url: "https://dnr.wisconsin.gov/topic/groundwater/arsenic",
    link: "View page",
  },
  {
    key: "fda-biotin",
    text: 'U.S. Food and Drug Administration. "Biotin Interference with Troponin Lab Tests: Assays Subject to Biotin Interference."',
    url: "https://www.fda.gov/medical-devices/in-vitro-diagnostics/biotin-interference-troponin-lab-tests-assays-subject-biotin-interference",
    link: "View page",
  },
  {
    key: "elston2016",
    text: 'Elston MS, Sehgal S, Du Toit S, Yarndley T, Conaglen JV. "Factitious Graves\' Disease Due to Biotin Immunoassay Interference: A Case and Review of the Literature." Journal of Clinical Endocrinology and Metabolism. 2016;101(9):3251-3255.',
    url: "https://pubmed.ncbi.nlm.nih.gov/27362288/",
    link: "View study",
  },
  {
    key: "lucky2004",
    text: 'Lucky AW, Piacquadio DJ, Ditre CM, et al. "A Randomized, Placebo-Controlled Trial of 5% and 2% Topical Minoxidil Solutions in the Treatment of Female Pattern Hair Loss." Journal of the American Academy of Dermatology. 2004;50(4):541-553.',
    url: "https://pubmed.ncbi.nlm.nih.gov/15034503/",
    link: "View study",
  },
  {
    key: "blume2016",
    text: 'Blume-Peytavi U, Shapiro J, Messenger AG, et al. "Efficacy and Safety of Once-Daily Minoxidil Foam 5% Versus Twice-Daily Minoxidil Solution 2% in Female Pattern Hair Loss: A Phase III, Randomized, Investigator-Blinded Study." Journal of Drugs in Dermatology. 2016;15(7):883-889.',
    url: "https://pubmed.ncbi.nlm.nih.gov/27391640/",
    link: "View study",
  },
  {
    key: "randolph2021",
    text: 'Randolph M, Tosti A. "Oral Minoxidil Treatment for Hair Loss: A Review of Efficacy and Safety." Journal of the American Academy of Dermatology. 2021;84(3):737-746.',
    url: "https://pubmed.ncbi.nlm.nih.gov/32622136/",
    link: "View study",
  },
  {
    key: "vano2021",
    text: 'Vañó-Galván S, Pirmez R, Hermosa-Gelbard A, et al. "Safety of Low-Dose Oral Minoxidil for Hair Loss: A Multicenter Study of 1404 Patients." Journal of the American Academy of Dermatology. 2021;84(6):1644-1651.',
    url: "https://pubmed.ncbi.nlm.nih.gov/33639244/",
    link: "View study",
  },
  {
    key: "olsen2025",
    text: 'Olsen EA, Sinclair R, Hordinsky M, et al. "Summation and Recommendations for the Safe and Effective Use of Topical and Oral Minoxidil." Journal of the American Academy of Dermatology. 2025;93(2):457-465.',
    url: "https://pubmed.ncbi.nlm.nih.gov/40216195/",
    link: "View study",
  },
  {
    key: "famenini2015",
    text: 'Famenini S, Slaught C, Duan L, Goh C. "Demographics of Women with Female Pattern Hair Loss and the Effectiveness of Spironolactone Therapy." Journal of the American Academy of Dermatology. 2015;73(4):705-706.',
    url: "https://pubmed.ncbi.nlm.nih.gov/26369846/",
    link: "View letter",
  },
  {
    key: "anitua2025",
    text: 'Anitua E, Tierno R, Alkhraisat MH. "Platelet-Rich Plasma in the Management of Alopecia: A Systematic Review and Meta-Analysis of Clinical Evidence." Dermatology and Therapy (Heidelberg). 2025;15(11):3213-3252.',
    url: "https://pubmed.ncbi.nlm.nih.gov/40944844/",
    link: "View study",
  },
  {
    key: "panahi2015",
    text: 'Panahi Y, Taghizadeh M, Marzony ET, Sahebkar A. "Rosemary Oil vs Minoxidil 2% for the Treatment of Androgenetic Alopecia: A Randomized Comparative Trial." Skinmed. 2015;13(1):15-21.',
    url: "https://pubmed.ncbi.nlm.nih.gov/25842469/",
    link: "View study",
  },
  {
    key: "patel2017",
    text: 'Patel DP, Swink SM, Castelo-Soccio L. "A Review of the Use of Biotin for Hair Loss." Skin Appendage Disorders. 2017;3(3):166-169.',
    url: "https://pubmed.ncbi.nlm.nih.gov/28879195/",
    link: "View study",
  },
  {
    key: "stoffel2017",
    text: 'Stoffel NU, Cercamondi CI, Brittenham G, et al. "Iron Absorption from Oral Iron Supplements Given on Consecutive Versus Alternate Days and as Single Morning Doses Versus Twice-Daily Split Dosing in Iron-Depleted Women: Two Open-Label, Randomised Controlled Trials." Lancet Haematology. 2017;4(11):e524-e533.',
    url: "https://pubmed.ncbi.nlm.nih.gov/29032957/",
    link: "View study",
  },
  {
    key: "macfarquhar2010",
    text: 'MacFarquhar JK, Broussard DL, Melstrom P, et al. "Acute Selenium Toxicity Associated with a Dietary Supplement." Archives of Internal Medicine. 2010;170(3):256-261.',
    url: "https://pubmed.ncbi.nlm.nih.gov/20142570/",
    link: "View study",
  },
  {
    key: "ablon2021",
    text: 'Ablon G, Kogan S. "A Randomized, Double-Blind, Placebo-Controlled Study of a Nutraceutical Supplement for Promoting Hair Growth in Perimenopausal, Menopausal, and Postmenopausal Women with Thinning Hair." Journal of Drugs in Dermatology. 2021;20(1):55-61.',
    url: "https://pubmed.ncbi.nlm.nih.gov/33400421/",
    link: "View study",
  },
];

function BlogComponent() {
  return (
    <BlogLayout
      title="Why Is My Hair Thinning? A Root-Cause Guide to Hair Loss in Women 35 to 55 in Michigan and Wisconsin"
      author="Kathryn Long, NP-C"
      date="2026-09-29"
      readTime="61 min read"
      heroImg={heroImg}
      heroAlt="Woman in her mid 40s in a bright Michigan kitchen gently touching her hair at the temple while thoughtfully looking out the window on an autumn morning"
      tocItems={tocItems}
      slug="hair-loss-women-35-to-55-michigan-wisconsin"
      breadcrumbTitle="Hair Loss in Women 35 to 55"
      faqSchema={faqSchema}
      relatedPosts={[
        {
          slug: "normal-tsh-hypothyroid-symptoms-michigan-wisconsin",
          title:
            "My TSH is 'Normal' But I'm Freezing, Losing Hair, and Exhausted: Why Standard Thyroid Tests Fail Women in Their 30s & 40s",
        },
        {
          slug: "perimenopause-in-your-30s-michigan-wisconsin",
          title:
            "Perimenopause Isn't Just an Over-40 Thing: The Complete Guide for Women in Their Mid-30s",
        },
        {
          slug: "ozempic-not-working-michigan-wisconsin-women",
          title:
            "Why Am I Not Losing Weight on Ozempic? A Functional Medicine Perspective for Michigan and Wisconsin Women",
        },
      ]}
    >
      {/* Disclaimer */}
      <div className="bg-muted/60 border border-border rounded-xl p-5 mb-10 text-sm text-foreground/70 leading-relaxed">
        <strong className="text-foreground/90">Informational purposes only.</strong> This article is
        written for education and does not constitute medical advice, diagnosis, or treatment. Hair
        loss has many causes, some of them medical conditions that need an in-person scalp
        examination, so please use this guide to prepare for a conversation with a qualified
        clinician, not to replace one. The composite patient stories in this article are
        illustrative blends of common patterns and do not describe any single real person. Reference
        numbers in brackets link to the sources listed at the end.
      </div>

      <section id="the-hair-in-the-drain">
        <H2>The Hair in the Drain</H2>
        <P>
          It usually starts in the shower. You are standing there on an ordinary Tuesday morning in
          Grand Rapids, or Green Bay, or Marquette, and you look down and see more hair around the
          drain than you remember seeing before. You tell yourself it is nothing. You pull it out,
          rinse your hand, and carry on with your day. Then a week later you notice the hairbrush,
          and a month after that you catch a photo of yourself under bright light at a family event
          and realize that your part looks wider than it did last year. Nobody else seems to have
          noticed. You have noticed, and you cannot stop noticing.
        </P>
        <P>
          If that is where you are, I want to begin with three things that are true and that almost
          nobody says to women in this position.
        </P>
        <P>
          First, you are not being vain, and you are not overreacting. Hair is tied up with
          identity, with how you feel walking into a meeting, and with how you feel looking in the
          mirror at 6:15 in the morning before the day has started. Researchers who study women with
          hair loss consistently describe real psychological weight, including lower self-esteem and
          reduced quality of life, and a 2026 clinical review noted that these effects often exceed
          what is seen in men with the same condition.
          <Cite k="kearney2026" /> Feeling shaken by this is a normal response to a real change, not
          a character flaw.
        </P>
        <P>
          Second, hair loss in women between 35 and 55 is common, and it is rarely one thing. In my
          experience, and in the clinical literature, the most useful mental shift is to stop asking
          "why am I losing hair?" as though there is a single villain, and start asking "which of
          several overlapping processes are happening in my scalp right now, and which of them can
          be changed?" A woman can have a shedding episode triggered by a rough year, low iron
          stores from years of heavy periods, a genetic tendency toward thinning at the part line,
          and the early hormonal shifts of perimenopause all at once. Untangling those layers is the
          actual work.
        </P>
        <P>
          Third, and this is the one that matters most: many of the causes of hair loss in this age
          group are identifiable, and a meaningful share of them are reversible or at least
          treatable, but the window for the best results is often earlier than women expect. The
          American Academy of Dermatology puts it plainly for the most common form of hair loss in
          women, saying that treatment works best when started at the first sign of hair loss, and
          that a dermatologist's involvement matters because other common causes of hair loss can
          look a lot like it and each requires different treatment.
          <Cite k="aad-fphl" /> The trouble is that the usual path into care is slow. A woman
          notices the change, waits months hoping it will pass, mentions it to a primary care
          provider, has a thyroid test (TSH only) and a hemoglobin checked, is told her results are
          normal, and is sent home with reassurance and possibly a recommendation to try biotin. Six
          months to two years can pass that way.
        </P>
        <P>
          This guide is written to change that path. It is written for women in Michigan and
          Wisconsin between roughly 35 and 55 who are noticing more shedding, a widening part,
          thinner ponytails, or receding temples, and who want a thorough, honest, evidence-based
          explanation rather than a product pitch. It is also written with a particular respect for
          how much information is already out there. You have probably searched this topic at
          midnight. You have seen the influencer with the rosemary oil, the supplement ad with the
          before and after photos, the forum thread where everyone has a different theory. Some of
          what you found is useful. A lot of it is not. Part of my job here is to help you sort the
          two.
        </P>
        <Fig
          src={hairbrushImg}
          alt="Hairbrush on a bathroom vanity beside a notebook on a winter morning in Michigan, symbolizing noticing hair shedding and starting to track it"
        />
        <H3>What This Guide Covers</H3>
        <P>
          We will start with the biology of how hair grows, because nearly every confusing thing
          about hair loss becomes less confusing once you understand the hair cycle and, in
          particular, the delay between a trigger and the shedding it causes. We will then help you
          tell the difference between shedding and thinning, which are different problems with
          different answers. From there we walk through the six patterns that account for most hair
          loss in women in this age group, and we spend real time on the two most common: telogen
          effluvium and female pattern hair loss.
        </P>
        <P>
          Then we go into the root-cause layers that a good evaluation looks at: midlife hormones,
          iron and ferritin, vitamin D and other nutrients, thyroid function, insulin and blood
          sugar, and stress physiology. We give a full section to a newer and increasingly common
          cause of hair shedding, which is rapid weight loss on GLP-1 medications such as
          semaglutide and tirzepatide. We cover the autoimmune and scarring conditions that must not
          be missed, the everyday hair care and scalp factors that quietly make things worse, and
          the seasonal and regional factors specific to Michigan and Wisconsin. Finally we lay out
          what a thorough evaluation looks like, what treatments have real evidence behind them,
          which supplements help and which can backfire, what a realistic twelve month recovery
          looks like, and how to prepare for your first visit.
        </P>
        <P>
          Along the way I will be direct about what the research does not know. Hair science has
          real gaps, especially for women, who were historically underrepresented in hair loss
          trials. A 2026 review in the American Journal of Clinical Dermatology noted the paucity of
          randomized controlled trials for female androgenetic alopecia that actually include women,
          and the urgent need for more approved therapies for them.
          <Cite k="kearney2026" /> I will tell you where the evidence is strong, where it is thin,
          and where clinicians are working from experience and reasoned judgment rather than large
          trials. I think you deserve that honesty, and I have found that women who understand the
          limits of the evidence make better decisions and are far less likely to be taken in by
          promises that sound too good.
        </P>
        <P>
          One more note before we begin. If at any point while reading you find yourself matching a
          description in the section on red flags, particularly patchy bald spots, a scalp that
          burns, itches, or shows redness and scaling around the hair openings, or eyebrow and
          eyelash loss along with a receding hairline, please do not wait for a full evaluation to
          get a dermatologist's eyes on your scalp. Some forms of hair loss scar the follicle
          permanently, and early treatment is the only way to protect the hair you still have.
        </P>
      </section>

      <section id="how-hair-grows">
        <H2>How Hair Actually Grows (and Why Loss Runs on a Delay)</H2>
        <Fig
          src={hairStrandsImg}
          alt="Macro view of healthy hair strands in soft morning light illustrating the hair growth cycle"
        />
        <P>
          To understand hair loss you need one piece of biology, and it explains more than you would
          expect. Every hair on your head is growing out of a tiny organ called a follicle, and each
          follicle runs on its own repeating cycle rather than growing continuously. There are three
          main phases. Anagen is the growth phase, during which the follicle actively builds a hair
          shaft. On the scalp it can last for several years, which is why hair can grow long.
          Catagen is a brief transition phase, lasting a couple of weeks, during which growth stops
          and the lower part of the follicle shrinks back. Telogen is the resting phase, lasting
          roughly three months, at the end of which the old hair is shed and the follicle restarts
          and begins a new anagen phase, growing a fresh hair.
        </P>
        <P>
          On a healthy scalp the great majority of follicles, commonly cited as around 85 to 90
          percent, are in anagen at any given time, and the remainder are resting or transitioning.
          Because each follicle is on its own schedule, the cycle is asynchronous. A few follicles
          are shedding while most are growing, which is why healthy people lose some hair every day
          without ever looking thinner. Dermatologists commonly describe 50 to 100 shed hairs a day
          as within the normal range, although the number varies with hair length, thickness, and
          how often you wash and brush.
        </P>
        <H3>The Delay That Confuses Everyone</H3>
        <P>
          Here is the part that matters most for making sense of your own situation. When something
          disrupts the hair cycle, it does not cause immediate loss. Instead, follicles that were in
          growth phase get pushed prematurely into the resting phase. They then sit in telogen for
          roughly two to three months before the hair is finally released. The result is that the
          shedding you see today reflects something that happened, on average, two to four months
          ago.
        </P>
        <P>
          The dermatology literature has known this for a long time. The term telogen effluvium was
          coined by Kligman in 1961, and his working idea was that whatever the cause, the follicle
          tends to respond in a similar way, with premature termination of the growth phase.
          <Cite k="harrison2002" /> A useful consequence, noted by Harrison and Sinclair in their
          classic review, is that seeing telogen hair loss does not in itself tell you the cause. To
          find the cause you need a careful history to identify known triggers, biochemical
          investigations to exclude endocrine, nutritional, or autoimmune drivers, and in some cases
          a biopsy to identify the earliest stages of androgenetic alopecia.
          <Cite k="harrison2002" /> That is the intellectual foundation of a root-cause approach to
          hair, and it is why I will keep returning to the question of timing.
        </P>
        <P>
          This delay is the reason so many women feel gaslit by their own experience. You lost hair
          in September, but the illness, the crash diet, the surgery, the death in the family, or
          the medication change that triggered it happened in June. By the time the hair is in the
          drain, you have forgotten the trigger, your doctor has no reason to connect the two, and
          the stressful summer looks like ancient history. Part of a good hair loss evaluation is a
          patient, backward-looking timeline of the six months before the shedding started.
        </P>
        <H3>Why Hair Is So Sensitive to Everything</H3>
        <P>
          There is a reason hair is often the first place the body shows that something is off.
          Follicle matrix cells, the cells building the hair shaft, are among the fastest dividing
          cells in the entire body. That makes them highly demanding of energy, protein, iron, and
          other micronutrients, and highly responsive to hormonal and inflammatory signals. When the
          body faces a stress that requires resource triage, hair is not essential to survival, so
          it is one of the first non-essential processes to be dialed back. A 2019 review of
          vitamins and minerals in hair loss notes that micronutrients play major roles in the
          follicle cycle, in cellular turnover in the rapidly dividing cells of the follicle bulb,
          and in immune function around the follicle, while also noting that the exact role of each
          is still incompletely understood.
          <Cite k="almohanna2019" />
        </P>
        <P>
          This is worth repeating in plain language, because it changes how you should feel about
          your hair: shedding is often not a sign that your hair is failing, but a sign that your
          body made a triage decision. The follicles themselves are frequently intact and capable of
          regrowing once the underlying pressure is addressed. That is precisely why understanding
          the cause matters so much, and why the strategies that only cover up the symptom, whether
          that is a thickening shampoo or a fiber spray, cannot replace finding out what changed.
        </P>
        <H3>Hair Loss Is Not One Disease</H3>
        <P>
          The last piece of foundation is that "hair loss" is an umbrella for very different
          processes. In one, healthy follicles are shed early because of a temporary trigger, and
          the hair comes back. In another, follicles are gradually shrinking under the influence of
          genetics and hormones, so each new hair is thinner and shorter than the last. In another,
          the immune system attacks the follicle. In yet another, chronic inflammation destroys the
          follicle and replaces it with scar tissue. These have overlapping surface appearances but
          radically different implications and treatments, which is exactly why a woman who tries a
          treatment meant for one type while she has another can spend a year and a great deal of
          money getting nowhere.
        </P>
      </section>

      <section id="shedding-or-thinning">
        <H2>Shedding or Thinning? How to Read What You See</H2>
        <Fig
          src={checkPartImg}
          alt="Michigan woman using a handheld mirror to check her part line and tell shedding from thinning"
        />
        <P>
          The single most useful distinction you can make before you ever see a clinician is whether
          you are primarily noticing shedding or primarily noticing thinning. The two overlap, and
          many women have both, but they point in different directions.
        </P>
        <H3>Shedding: More Hair Coming Out</H3>
        <P>
          Shedding means more hair is leaving the scalp than usual. You notice it in the shower, on
          the brush, on your pillow, on your clothes, and in the car seat. Women describe handfuls,
          clumps, or a ponytail that has gotten noticeably thinner over just a few months. The
          density across the whole scalp may look diffusely lighter, without one specific area
          standing out. Shedding tends to have a fairly clear starting point, even if you have to
          think hard to find it. It is the hallmark of telogen effluvium.
        </P>
        <P>
          A detail that surprises many women: the hairs in a shedding episode often come out with a
          small white bulb at the root. That bulb is the club of a telogen hair, and it is a normal,
          healthy resting hair being released, not a sign of a damaged follicle. It looks alarming
          and is usually reassuring.
        </P>
        <H3>Thinning: Smaller Hair, Wider Part</H3>
        <P>
          Thinning is different. In thinning, the hairs are not necessarily falling out in large
          numbers. Instead, follicles are progressively shrinking, so each new hair grows in finer,
          shorter, and lighter than its predecessor, a process called miniaturization. The visible
          result is a part line that has slowly widened, a ponytail that has lost circumference over
          years, and more scalp showing at the crown or the top of the head. Thinning develops
          slowly, over many months to years, and it usually has no clear starting point. It is the
          hallmark of female pattern hair loss.
        </P>
        <P>
          The classic scale used by dermatologists to describe this pattern in women is the Ludwig
          classification, first published in 1977, which grades the widening of the central part
          with preservation of the frontal hairline.
          <Cite k="ludwig1977" /> The American Academy of Dermatology describes the same picture in
          plain language: the part often gets wider, and hair near the temples may recede.
          <Cite k="aad-fphl" />
        </P>
        <H3>A Side-by-Side Comparison</H3>
        <DataTable
          head={["Feature", "Shedding (telogen effluvium)", "Thinning (pattern hair loss)"]}
          rows={[
            ["Tempo", "Often abrupt, over weeks to a few months", "Gradual, over months to years"],
            [
              "What you notice",
              "Handfuls in the shower, on the brush, on the pillow",
              "Wider part, thinner ponytail, more scalp visible at the crown",
            ],
            [
              "Distribution",
              "Diffuse, all over the scalp",
              "Central part line and crown, hairline usually preserved",
            ],
            [
              "Has a starting point?",
              "Often, if you look 2 to 4 months back",
              "Rarely, it creeps in",
            ],
            [
              "Hair quality",
              "Normal hairs with white bulbs at the root",
              "Progressively finer, shorter, lighter hairs",
            ],
            [
              "Typical outlook",
              "Usually reversible once the trigger is removed",
              "Progressive without treatment, but often treatable",
            ],
          ]}
        />
        <P>
          Two important caveats. First, women very often have both at the same time, and this is one
          reason midlife hair loss is so confusing. A telogen effluvium can unmask an underlying
          pattern hair loss that was previously hidden, because the shedding makes a scalp that was
          already slightly thinning suddenly look sparse. Second, the pattern of shedding versus
          thinning is a starting hypothesis, not a diagnosis. Other conditions, including alopecia
          areata and scarring alopecias, can mimic each of these.
        </P>
        <H3>Why Chronic Shedding in Midlife Deserves Special Attention</H3>
        <P>
          One important entity to know about sits between these two. In 1996, dermatologist David
          Whiting described a group of 355 patients, 346 of them women, with diffuse thinning of
          scalp hair of unknown cause, and gave it the name chronic telogen effluvium. These
          patients typically reported abrupt onset increased shedding and thinning with a
          fluctuating course, showed diffuse thinning all over the scalp, and frequently had
          recession at both temples.
          <Cite k="whiting1996" /> This is a real and recognizable pattern in middle-aged women, and
          it is a reminder that "shedding for months without an obvious trigger" is a legitimate
          clinical story that deserves a proper work-up, not a shrug.
        </P>
        <H3>How Clinicians Actually Assess It</H3>
        <P>
          You cannot diagnose your own hair loss from the shower drain, and even a great phone photo
          has limits. Dermatologists and trained clinicians use several tools. Trichoscopy is a
          magnified, lit view of the scalp using a handheld device that reveals follicle openings,
          hair shaft variation, and signs of inflammation or scarring. Pull testing involves gentle
          traction on small groups of hairs to see how many release, which helps distinguish active
          shedding. Trichometric measurements assess hair density and diameter, and the presence of
          miniaturization. Reviews of telogen effluvium also describe hair wash tests, trichograms,
          phototrichograms, and, when the diagnosis is uncertain, scalp biopsy.
          <Cite k="asghar2020" />
          <Cite k="kearney2026" />
        </P>
        <P>
          Most women do not need a biopsy, and I do not want you to picture something dramatic. But
          it helps to know that the tools exist and to understand why a clinician may look at your
          scalp with a magnifier rather than just your hair. A specialist looking at the scalp is
          looking for things you cannot see: whether the follicle openings are preserved, whether
          hairs vary in thickness, whether there is redness or scale, and whether there is any sign
          of scarring.
        </P>
        <H3>What You Can Do This Week to Gather Useful Information</H3>
        <P>
          Before you see anyone, you can quietly collect the kind of information that makes an
          evaluation much more productive. Here is a practical set of steps.
        </P>
        <OL
          items={[
            <>
              Take a set of baseline photos in the same lighting: the part line from directly above,
              the crown from a mirror, both temples, and your ponytail or a standard hair tie wrap.
              Use the same spot near a window in the morning and repeat monthly. Photos beat memory
              every time.
            </>,
            <>
              Write a timeline going back at least twelve months: illnesses (including COVID or
              influenza), fevers, surgeries, dental work, new medications, new supplements, changes
              in birth control, pregnancies or losses, major stressors, big weight changes, and
              changes in diet, especially any period of eating much less.
            </>,
            <>
              Note your menstrual pattern: how heavy your periods are, how many days, and any change
              in cycle length. Heavy periods matter enormously for iron.
            </>,
            <>
              Keep a rough count of shed hairs for one week, always at the same time of day, such as
              when you brush before bed. The number is less important than the trend.
            </>,
            <>
              Do not change your shampooing routine dramatically. Rushton's review of nutritional
              factors in hair loss makes the point that many people reduce shampooing because they
              fear losing more hair, which simply increases the amount seen in subsequent washes and
              fuels the fear.
              <Cite k="rushton2002" /> Hairs that have already reached the end of the cycle will
              come out whenever you wash or brush, so washing does not cause the loss.
            </>,
            <>
              List every product on your scalp, including dry shampoo, styling products, and any
              supplements. Note in particular anything containing biotin, because it interferes with
              some lab tests, which we will come to.
            </>,
          ]}
        />
        <P>
          Bring this information to your first visit, whether it is with a dermatologist, your
          primary care clinician, or our practice. A woman who arrives with a timeline, photographs,
          and a medication list can often save one or two appointments and get to the right tests
          months sooner.
        </P>
      </section>

      <section id="six-patterns">
        <H2>The Six Patterns Behind Hair Loss in Women 35 to 55</H2>
        <P>
          When a woman in this age range comes to me with hair loss, I am mentally sorting her story
          into six buckets. They are not mutually exclusive, and she is very likely to sit in more
          than one. But naming them gives you a map, and a map is what most women are missing.
        </P>
        <Fig
          src={dermExamImg}
          alt="Dermatologist examining the part line of a woman in her late 40s with a dermatoscope in a Michigan clinic exam room"
        />
        <DataTable
          head={["Pattern", "What it looks like", "Core mechanism", "Usually reversible?"]}
          rows={[
            [
              "1. Acute telogen effluvium",
              "Sudden diffuse shedding, 2 to 4 months after a trigger",
              "Follicles pushed early into the resting phase",
              "Yes, if the trigger is removed",
            ],
            [
              "2. Chronic telogen effluvium",
              "Fluctuating diffuse shedding for more than about 6 months",
              "Ongoing or repeated triggers, or no trigger found",
              "Often, once drivers are found",
            ],
            [
              "3. Female pattern hair loss",
              "Wider part, thinner crown, preserved hairline",
              "Progressive follicle miniaturization",
              "Treatable and slowable, rarely fully reversed",
            ],
            [
              "4. Alopecia areata",
              "Round or oval bald patches, sometimes diffuse loss",
              "Autoimmune attack on the follicle",
              "Variable, often regrows, may relapse",
            ],
            [
              "5. Scarring alopecias",
              "Patchy or band-like loss, redness, scale, pain or itch",
              "Inflammation that destroys the follicle",
              "No, so early treatment protects what remains",
            ],
            [
              "6. Traction, breakage, and hair-shaft damage",
              "Loss at hairline or part edges, or broken short hairs",
              "Mechanical, chemical, or heat stress",
              "Often, if caught before scarring",
            ],
          ]}
        />
        <H3>What the Numbers Tell Us About Which Patterns Are Common</H3>
        <P>
          In large clinical series, telogen effluvium is one of the most common presentations. One
          retrospective study of 3,028 patients with telogen effluvium, described by its authors as
          the largest of its kind, was used to propose a diagnostic algorithm for the laboratory and
          clinical work-up.
          <Cite k="yorulmaz2022" /> Female pattern hair loss, in turn, is the single most common
          cause of chronic hair loss in women. A 2026 review in the American Journal of Clinical
          Dermatology states that androgenetic alopecia affects nearly 50 percent of women during
          their lifetime, yet remains underdiagnosed and undertreated.
          <Cite k="kearney2026" /> The European evidence-based guideline puts the figure for women
          at up to 42 percent.
          <Cite k="kanti2018" /> These figures vary by population and method, but the message is
          consistent: this is very common, and very often unaddressed.
        </P>
        <P>
          Alopecia areata affects nearly 2 percent of the general population at some point in life.
          <Cite k="pratt2017" /> Scarring alopecias are far less common overall, but some subtypes
          are concentrated in specific groups and age ranges, which is why we discuss them in their
          own section.
        </P>
        <H3>The Overlap Problem</H3>
        <P>
          I want to underline the point about overlap, because it is where many well-intentioned
          women go wrong. A woman with early female pattern hair loss goes through a stressful
          winter and develops a telogen effluvium on top. She sees a lot of shedding, panics, and
          assumes the shedding is the whole story. Six months later the shedding calms down, as
          telogen effluvium does, but her part is still wider than it was two years ago, because the
          underlying pattern thinning never went away. She concludes that the treatment she tried
          "did not work" or that "it never really grew back," when in truth two processes were in
          play and only one had resolved.
        </P>
        <P>
          Understanding that layering is one of the most valuable things a good clinician offers. It
          lets you set realistic expectations for each layer: the shedding layer should recover as
          triggers are removed, while the pattern layer needs its own long-term plan.
        </P>
        <P>
          For the next two sections, we take the two most common patterns in turn and look at them
          in detail.
        </P>
      </section>

      <section id="telogen-effluvium">
        <H2>Telogen Effluvium: The Great Delayed Reaction</H2>
        <Fig
          src={calendarImg}
          alt="Woman marking a wall calendar to track the timeline of triggers before a telogen effluvium shedding episode"
        />
        <P>
          Telogen effluvium is the medical name for excessive shedding of resting hairs. Reviews
          describe it as one of the most common causes of alopecia, with triggers that include
          drugs, physical trauma, and emotional and physiological stress, and it can present as
          acute or chronic hair fall.
          <Cite k="asghar2020" /> It is the pattern that produces the "I can't believe how much is
          in the drain" experience, and it is the pattern most likely to be fully reversible. The
          essential feature to remember is the delay between trigger and shedding, roughly two to
          four months.
        </P>
        <H3>The Most Common Triggers</H3>
        <P>
          Because the delay hides the cause, it helps to have a checklist. Here are the major
          categories clinicians look for.
        </P>
        <UL
          items={[
            <>
              <strong>Physical illness and fever.</strong> High fevers, influenza, pneumonia, and
              other significant infections are classic triggers. Postinfectious shedding after
              COVID-19 has been described in the literature, and clinicians who reviewed the hair
              findings of COVID-19 reported that the onset and intensity of shedding depended on how
              severe the illness had been, with complete recovery of hair afterward.
              <Cite k="trueb2021" /> If you had a rough illness last spring and are shedding now,
              this may be the whole story.
            </>,
            <>
              <strong>Surgery and anesthesia.</strong> Major surgery, hospitalization, and
              significant blood loss can all trigger a shedding episode.
            </>,
            <>
              <strong>Childbirth and the postpartum period.</strong> During pregnancy, more
              follicles remain in the growth phase for longer because of hormonal changes. After
              delivery, when hormones fall sharply, those follicles return to the resting phase,
              typically within three to six months, and shedding follows. One study that compared
              116 women at different stages of pregnancy and the postpartum year documented exactly
              this shift in the ratio of growing to resting hairs.
              <Cite k="gizlenti2014" /> For women in their late 30s, postpartum shedding can also
              unmask an underlying pattern hair loss.
            </>,
            <>
              <strong>Rapid weight loss and undereating.</strong> Crash diets, very low calorie or
              very low protein intake, prolonged fasting, bariatric surgery, and more recently rapid
              weight loss on GLP-1 medications are among the most frequent triggers I see in women
              in this age group. We give this its own section below.
            </>,
            <>
              <strong>Iron deficiency and other nutritional shortfalls.</strong> Low iron stores are
              one of the most common and most correctable contributors. We cover this in depth in
              the nutrient section.
            </>,
            <>
              <strong>Thyroid disease.</strong> Both underactive and overactive thyroid can change
              the hair cycle. See the thyroid section below.
            </>,
            <>
              <strong>Medications.</strong> A review of drugs and hair loss describes several
              mechanisms, including anagen arrest, telogen effluvium, and accentuation of
              androgenetic alopecia by androgens. Its authors also warn that fever, hemorrhage,
              severe illness, stress, and childbirth must be excluded as confounders before hair
              loss is blamed on a medication.
              <Cite k="patel2013" /> Drug classes commonly discussed include some blood thinners,
              retinoids, certain blood pressure medications, some antidepressants and
              anticonvulsants, high-dose vitamin A, and starting or stopping hormonal contraception.
              Never stop a prescribed medication on your own because of hair loss. Bring it to the
              prescriber.
            </>,
            <>
              <strong>Emotional stress and major life events.</strong> Divorce, bereavement, a job
              loss, and prolonged caregiving strain are all recognized triggers. The mechanism is
              not simply "stress makes hair fall out" in a vague sense. In mice, chronic stress
              raises corticosterone, the rodent equivalent of cortisol, which prolongs follicle stem
              cell quiescence and keeps follicles in an extended resting phase.
              <Cite k="choi2021" /> That is an animal study, and I want to be careful not to
              overstate what it proves in women, but it is a plausible biological pathway consistent
              with what clinicians see.
            </>,
          ]}
        />
        <H3>Acute Versus Chronic</H3>
        <P>
          By convention, telogen effluvium that resolves within about six months is called acute,
          and shedding that persists longer than that is called chronic. Chronic telogen effluvium,
          as Whiting described it, characteristically appears in women in midlife with a fluctuating
          course, and the shedding waxes and wanes.
          <Cite k="whiting1996" /> When shedding will not stop, the useful question is usually one
          of three: is there a persistent trigger I have not found (such as ongoing iron loss, a
          silent thyroid problem, or a medication), is there repeated triggering (one stressor after
          another, so the cycle never settles), or is this actually early pattern hair loss with a
          shedding component layered on top?
        </P>
        <Callout title="A useful rule of thumb from the literature">
          <p>
            Harrison and Sinclair noted that the duration of hair loss at presentation helps predict
            in which patients further investigation will have the greatest yield.
            <Cite k="harrison2002" /> In practice, this means that a woman who has been shedding for
            two or three months after a clear trigger often needs reassurance and time, while a
            woman who has been shedding for eight months with no clear trigger deserves a fuller
            investigation.
          </p>
        </Callout>
        <H3>What Recovery Looks Like</H3>
        <P>
          When the trigger is removed, shedding typically slows over a few months. Regrowth then
          begins, but hair grows only about a centimeter a month, so visible density takes a long
          time to return. In practical terms, you may see shedding slow at three to four months
          after the trigger resolves, tiny short "baby hairs" along the hairline and part around
          month four to six, and a return of meaningful density over nine to eighteen months. This
          is why so many women feel like nothing is happening: the biology is genuinely slow.
        </P>
        <P>
          A pattern I see often is what I call the false ending. A woman tells me her shedding has
          stopped, but her hair still looks thin. Both statements are true at once. The shedding has
          ended, but regrowth has not yet caught up. That is normal, and knowing it in advance
          prevents a lot of unnecessary panic.
        </P>
        <H3>Telogen Effluvium Is a Diagnosis of Exclusion for a Reason</H3>
        <P>
          It bears repeating that seeing a telogen shedding pattern does not tell you the cause. One
          large series of 3,028 patients found that, among those who were tested, a substantial
          share had low vitamin D, a meaningful share had low vitamin B12, about six percent of all
          patients had iron deficiency anemia, and about five percent had thyroid dysfunction.
          <Cite k="yorulmaz2022" /> Those numbers illustrate an important truth: the proportions are
          modest for any single cause, which is exactly why testing broadly, rather than guessing at
          one nutrient, is the sensible approach. It also shows that a clean thyroid test or a
          normal hemoglobin does not close the case.
        </P>
        <CTA
          title="Shedding that will not stop deserves more than a shrug."
          body="If you have been losing hair for more than a few months and have only had a TSH and a hemoglobin checked, a free 15-minute discovery call is a low-pressure way to talk through your timeline and decide what a more complete evaluation should include."
          button="Book Your Free 15-Minute Call"
        />
      </section>

      <section id="female-pattern-hair-loss">
        <H2>Female Pattern Hair Loss: The Slow Pattern That Gets Missed</H2>
        <Fig
          src={crownImg}
          alt="Overhead view of a widening central part line and crown in silver-blonde hair, typical of female pattern hair loss"
        />
        <P>
          Female pattern hair loss, also called androgenetic alopecia in women, is the most common
          cause of chronic hair loss in women worldwide, and it is also the one that women most
          often hear nothing helpful about. It is not baldness in the way people picture male
          pattern baldness. Women with this condition typically keep their frontal hairline and
          instead experience a gradual thinning across the top and crown of the scalp, with a
          widening part.
        </P>
        <H3>How Common Is It, Really?</H3>
        <P>
          The numbers depend on who was studied and how. In a classic study of 1,006 Caucasian women
          aged 20 and older, Norwood found female androgenetic alopecia to be quite common starting
          in the late 20s and reaching its peak after age 50.
          <Cite k="norwood2001" /> A study by Birch and colleagues of 377 women attending a general
          dermatology clinic found that 6 percent of women under 50 had female pattern hair loss,
          rising to 38 percent in women aged 70 and over.
          <Cite k="birch2001" /> A systematic review of laser therapy put the lifetime figure at
          about half of women by age 80.
          <Cite k="afifi2017" /> The European guideline cites up to 42 percent.
          <Cite k="kanti2018" /> And the AAD notes that it typically begins in midlife, in a woman's
          40s, 50s, or 60s.
          <Cite k="aad-fphl" />
        </P>
        <P>
          For our audience the take-home is this: if you are 35 to 55 and noticing gradual thinning
          at the part, you are in the age range where this becomes common, and you are not unusual.
          It is also worth knowing that the Norwood study was in Caucasian women only, and a 2025
          Nature Reviews Disease Primers article on androgenetic alopecia emphasizes that there is
          substantial ancestral variation in how this condition presents and who is affected.
          <Cite k="liu2025" /> Women of color deserve the same careful evaluation, and as we discuss
          in the scarring alopecia section, some conditions that mimic pattern loss are much more
          common in Black women.
        </P>
        <H3>What Is Actually Happening in the Follicle</H3>
        <P>
          In female pattern hair loss, susceptible follicles undergo progressive miniaturization.
          Per the 2026 review, androgens promote miniaturization by progressively shortening the
          anagen phase, while estrogens may provide a protective effect.
          <Cite k="kearney2026" /> Each cycle, the follicle produces a slightly shorter, finer hair
          than the previous one. Over years, thick pigmented terminal hairs are gradually replaced
          by thin, short, wispy vellus-like hairs, and hair density on the top of the scalp falls.
        </P>
        <P>
          In men, the story centers on androgen signaling in the follicle, and effective therapies
          target that pathway. In women, honesty compels me to say the biology is less settled. The
          2025 Nature Reviews article states plainly that while in men the condition is hypothesized
          to be caused by increased androgen signalling within susceptible follicles, the molecular
          basis of androgenetic alopecia in women remains undetermined.
          <Cite k="liu2025" /> Genome-wide studies have identified more than 380 genomic regions
          associated with the condition, including genes involved in androgen and WNT pathways.
          <Cite k="liu2025" /> Genetics matters enormously, and so does the hormonal environment,
          but in an individual woman the exact recipe is not fully understood.
        </P>
        <P>
          Birch and colleagues added a helpful piece of context that I often share with patients.
          Hair density in women is distributed as a normal variable, meaning it is a multifactorial
          trait like height. The average density in their study was about 293 hairs per square
          centimeter at age 35, falling to about 211 at age 70. Women who were diagnosed with female
          pattern hair loss generally had a density that fell below the mean but still within the
          range of normal, and the perception of hair loss depended on low density and also on hair
          diameter.
          <Cite k="birch2001" /> In plain English: there is no single threshold at which hair
          "counts" as thin. What matters is how it has changed for you, and how it looks and feels
          to you.
        </P>
        <H3>Why It Gets Missed</H3>
        <P>There are several reasons this pattern is so often overlooked in women.</P>
        <UL
          items={[
            <>
              <strong>It looks normal for a long time.</strong> A gradual reduction in density is
              invisible day to day. Women often notice it only in photographs or in hair salon
              comments.
            </>,
            <>
              <strong>Many clinicians simply do not examine the scalp.</strong> A standard primary
              care visit rarely includes trichoscopy or hair density assessment.
            </>,
            <>
              <strong>It gets blamed on stress or aging.</strong> Both can contribute, but "it's
              just stress" is not a diagnosis.
            </>,
            <>
              <strong>Blood tests are often normal.</strong> Most women with female pattern hair
              loss have normal routine labs, which leads to the classic "your labs are fine, so this
              is nothing" dismissal.
            </>,
            <>
              <strong>Treatments are often off-label and less familiar.</strong> Topical minoxidil
              is the only FDA-approved treatment for female androgenetic alopecia according to the
              2026 review, and other options are used off label, so many clinicians are simply not
              comfortable prescribing them.
              <Cite k="kearney2026" />
            </>,
          ]}
        />
        <H3>The Two Situations Where Blood Work Really Matters</H3>
        <P>
          Two clusters of women with pattern-type thinning deserve a more careful hormonal and
          metabolic look. The first is the woman with signs of excess androgens: acne, facial hair
          growth, irregular or absent periods, or a history that fits polycystic ovary syndrome
          (PCOS). PCOS is a common and underdiagnosed driver of pattern hair loss in younger women.
          If that sounds like you, our full guide to{" "}
          <Link to="/blog/pcos-weight-resistance-women-30s-michigan-wisconsin" className={LINK}>
            PCOS and weight resistance in your 30s
          </Link>{" "}
          explains the syndrome, its diagnostic criteria, and the insulin connection in detail, and
          hair thinning is one of the symptoms that women often report least willingly but most wish
          they had raised earlier.
        </P>
        <P>
          The second cluster is the woman whose thinning began or accelerated around the time her
          cycles started to change, her sleep worsened, and her mood or energy shifted. That is the
          perimenopausal pattern, and it deserves its own section, coming up next. If you are in
          your late 30s and have not yet considered that perimenopause could be involved, our guide
          to{" "}
          <Link to="/blog/perimenopause-in-your-30s-michigan-wisconsin" className={LINK}>
            perimenopause in your 30s
          </Link>{" "}
          is a good companion read.
        </P>
        <H3>What the Evidence Says About Early Treatment</H3>
        <P>
          A key principle in pattern hair loss is that treatment is generally aimed at slowing or
          stopping progression and encouraging some regrowth, not at restoring a teenage head of
          hair, and it works best the earlier it starts. This is why the AAD emphasizes starting at
          the first sign of loss.
          <Cite k="aad-fphl" /> It is also why waiting a year for it to "sort itself out" can cost
          you follicles that are easier to save now than later. We cover the specific treatments,
          with the evidence for each, in the treatment section.
        </P>
      </section>

      <section id="midlife-hormones">
        <H2>Midlife Hormones and Your Scalp</H2>
        <P>
          If there is one thing I wish every woman knew about her hair at 42, it is that the hair
          follicle is a hormone-responsive organ, and the hormonal ground beneath it is shifting in
          your late 30s, 40s, and early 50s. This does not mean that hormones are the only story,
          and it does not mean hormone therapy is a hair loss treatment. It means hormones are part
          of the context, and a thorough evaluation cannot ignore them.
        </P>
        <Fig
          src={porchImg}
          alt="Woman in her late 40s on a rural Wisconsin porch in autumn reflecting on midlife hormonal changes and thinning hair"
        />
        <H3>What Hormones Do at the Follicle</H3>
        <P>
          A 2020 review in the International Journal of Molecular Sciences summarizes what is known.
          Androgens, including testosterone, dihydrotestosterone (DHT), and their precursors DHEA-S
          and androstenedione, are the key factors in terminal hair growth; they bind to androgen
          receptors in the dermal papilla cells of the follicle, and most follicles require the
          enzyme 5-alpha reductase to convert testosterone into DHT. Estradiol can significantly
          alter the hair follicle growth and cycle by binding to estrogen receptors and influencing
          aromatase activity, the enzyme that converts androgen into estrogen. Progesterone, at the
          level of the follicle, decreases the conversion of testosterone into DHT. Prolactin has
          also been intensively studied, and its receptors have been detected in scalp skin.
          <Cite k="grymowicz2020" />
        </P>
        <P>
          That last set of details deserves a moment. It means that estrogen and progesterone, the
          two hormones that decline and fluctuate in perimenopause, are both plausibly protective at
          the scalp, one by influencing the growth cycle and the other by blunting the conversion of
          testosterone into its more potent form. As those buffers fall, the androgen signal to
          susceptible follicles can become relatively stronger, even when your absolute testosterone
          level has not risen. I want to be careful here: this is a reasonable mechanistic picture,
          not a proven account of what happens in every woman. But it fits the clinical experience
          of many midlife women, and it fits the observation in the 2026 review that estrogens may
          provide protective effects against follicular miniaturization.
          <Cite k="kearney2026" />
        </P>
        <H3>What Studies of Menopause and Hair Have Found</H3>
        <P>
          Dermatologist Paradi Mirmirani reviewed this question in a paper with the memorable title
          "Hormonal changes in menopause: do they contribute to a 'midlife hair crisis' in women?"
          Her review notes that, in a study of pre- and postmenopausal women without alopecia,
          menopausal status significantly influenced hair parameters, specifically the hair growth
          rate, the percentage of follicles in anagen, and hair diameter distributions, most notably
          in the frontal scalp. Hair density decreased with age but was not correlated with
          menopausal status, and the impact of the changing hair parameters appeared to be most
          notable in the mid-forties.
          <Cite k="mirmirani2011" />
        </P>
        <P>
          I find that pairing valuable. It tells us the menopausal transition can change the quality
          of the hair fiber, its growth speed, and its thickness, without necessarily changing the
          sheer number of follicles, and it tells us that the mid-forties may be an especially
          vulnerable window. That matches what many women describe: hair that is not just less
          abundant but also finer, drier, slower to grow, and less willing to hold a style.
        </P>
        <H3>The Perimenopausal Picture</H3>
        <P>
          Perimenopause is not a smooth decline. Progesterone tends to fall first as ovulation
          becomes irregular, estrogen swings unpredictably between high and low, and eventually
          settles at a lower baseline after the final period. During this stage women may also be
          dealing with disrupted sleep, higher stress reactivity, changes in insulin sensitivity,
          and shifts in iron status due to heavy or erratic bleeding. Each of those, independently,
          can push follicles toward shedding. This is why hair thinning is so common in the years
          around the transition, and why a pure "hormone panel" is never enough by itself.
        </P>
        <P>
          If your hair changes appeared alongside sleep disruption, night waking, or new anxiety,
          our guide on{" "}
          <Link to="/blog/hormonal-sleep-anxiety-women-michigan-wisconsin" className={LINK}>
            the hormonal reasons behind sleepless nights and new anxiety
          </Link>{" "}
          explains the cortisol and progesterone mechanics behind that cluster, and the same
          physiology is frequently working on your follicles. If the first thing you noticed was
          memory or concentration changes, our{" "}
          <Link to="/blog/perimenopause-brain-fog-memory-michigan-wisconsin" className={LINK}>
            perimenopause brain fog guide
          </Link>{" "}
          covers the same transition from the cognitive side.
        </P>
        <H3>Which Hormone Tests Are Worth Doing, and Which Are Not</H3>
        <P>
          Hormone testing for hair loss is a place where more is not better. In perimenopause,
          estradiol and FSH swing from day to day and even hour to hour, so a single random value is
          a poor guide, and the diagnosis of perimenopause is largely clinical, based on age,
          symptoms, and cycle pattern. What testing is most useful depends on your story.
        </P>
        <UL
          items={[
            <>
              <strong>If you have irregular cycles, acne, or excess facial or body hair:</strong>{" "}
              total and free testosterone, DHEA-S, SHBG (sex hormone binding globulin), and often
              thyroid function, prolactin, and a 17-hydroxyprogesterone screen to look for PCOS and
              related conditions. Fasting insulin and glucose belong on this list too.
            </>,
            <>
              <strong>If cycles are regular and hair has thinned gradually:</strong> a broader
              metabolic and nutrient screen usually yields more than a large hormone panel.
            </>,
            <>
              <strong>If you are on hormonal birth control or hormone therapy:</strong> the type and
              dose of the progestogen matters, and this should shape both the testing and the
              interpretation.
            </>,
          ]}
        />
        <P>
          A caution I want to state clearly: an androgen level that falls "within the normal range"
          does not rule out a role for androgens in your hair. Susceptibility of the follicle, not
          just the circulating level, drives pattern loss, which is part of why the condition can
          occur with completely normal blood tests.
        </P>
        <H3>Hormone Therapy and Hair: An Honest Answer</H3>
        <P>
          Women often ask whether starting hormone therapy will fix their hair. The honest answer is
          that hormone therapy is not an approved or established treatment for hair loss, and the
          research on its hair effects is limited and inconsistent. A dermatology review of hormonal
          therapies focused on hair concludes that the task of predicting effects is complicated by
          the paucity of data and discrepancy in the literature on the effect of specific
          hormone-receptor activities.
          <Cite k="desai2021" /> The details matter: different progestogens have different
          androgenic or antiandrogenic properties, so a regimen that helps one woman's scalp could
          be neutral or unhelpful for another's.
        </P>
        <P>
          The North American Menopause Society's 2022 position statement, which is the most recent
          comprehensive guidance from that organization, identifies hormone therapy as the most
          effective treatment for vasomotor symptoms and the genitourinary syndrome of menopause and
          notes it prevents bone loss and fracture. Hair is not on that list, and the statement
          emphasizes individualizing therapy by type, dose, duration, route, timing of initiation,
          and the use of a progestogen.
          <Cite k="nams2022" /> For a fuller and more balanced discussion of the benefits, risks,
          and delivery methods, see our{" "}
          <Link to="/blog/bioidentical-hormone-therapy-guide-michigan-wisconsin" className={LINK}>
            complete guide to bioidentical hormone therapy
          </Link>
          . If you start hormone therapy for another reason and notice your hair improves, that is a
          welcome bonus. It should not be the reason to start.
        </P>
        <P>
          There is one more caution I raise with every patient considering androgen-containing
          therapy, including testosterone: a review of drug-related hair loss notes that some
          medications can cause "accentuation of androgenetic alopecia by androgens."
          <Cite k="patel2013" /> In a woman who is genetically susceptible to pattern hair loss,
          more androgen signal can make thinning worse. This is a key reason to have a baseline of
          your hair pattern documented before starting any hormone regimen, and to review it at
          follow-up.
        </P>
        <H3>Birth Control, Starting and Stopping</H3>
        <P>
          Hormonal contraception is a frequent, underappreciated player. Starting, stopping, or
          switching a pill, patch, ring, or IUD can trigger a telogen effluvium in the following
          months, because the hormonal environment changes. Women who stop the pill in their late
          30s to try to conceive, or because of side effects, sometimes experience a shedding
          episode three to four months later that they never connect to the change. Some progestins
          are more androgenic than others, and some are antiandrogenic and are even used for pattern
          hair loss, as we discuss under treatments. This is a discussion to have with your
          prescriber, not a reason to stop anything abruptly.
        </P>
        <CTA
          title="Your hair and your hormones are telling the same story."
          body="If your thinning arrived alongside cycle changes, night waking, or new anxiety, a free discovery call is a good place to talk through whether perimenopause, iron, thyroid, or insulin is the most likely driver."
          button="Talk It Through With Katie"
        />
      </section>

      <section id="life-stages">
        <H2>Perimenopause, Menopause, and Beyond: How Hair Changes by Stage</H2>
        <Fig
          src={lifeStagesImg}
          alt="Three women in their 30s, 40s, and 50s laughing together on a Wisconsin lake dock in autumn, representing hair changes across life stages"
        />
        <P>
          The women who read this article range from 35 to 55 and beyond, and their hair is
          answering different questions at different stages. It helps to know which stage you are
          in, because the likely contributors, the tests worth doing, and the realistic goals all
          shift.
        </P>
        <H3>Early and Mid Perimenopause (Roughly Late 30s to Mid 40s)</H3>
        <P>
          This is the stage of fluctuation. Cycles may still be fairly regular, or may begin to
          shorten, lengthen, or skip. Progesterone tends to fall first, and estrogen swings between
          high and low. Hair changes at this stage are more often shedding-type, tied to sleep
          disruption, stress reactivity, changes in iron status from heavier or more erratic
          bleeding, and metabolic shifts. A review of the menopausal transition and hair found the
          influence of changing hormones on hair growth rate, the proportion of growing follicles,
          and hair diameter to be most notable in the mid-forties.
          <Cite k="mirmirani2011" /> This is also the stage in which underlying genetic tendencies
          toward pattern thinning often start to show. The most productive work is usually a broad
          evaluation and correcting what can be corrected.
        </P>
        <H3>Late Perimenopause and the Final Menstrual Period (Roughly Mid 40s to Early 50s)</H3>
        <P>
          As cycles space out and estrogen trends lower, the balance between androgens and estrogens
          at the follicle can shift further. The 2026 review notes that androgens promote follicular
          miniaturization while estrogens may have a protective effect,
          <Cite k="kearney2026" /> which helps explain why part widening and crown thinning become
          more noticeable for many women in this window. Hot flashes, night sweats, and sleep
          disruption are common, and their effect on stress physiology contributes indirectly. Women
          at this stage are the most likely to benefit from a coordinated look at hormones, iron,
          thyroid, and metabolic health, and to discuss early evidence-based pattern hair loss
          treatment.
        </P>
        <H3>Postmenopause (After 12 Months Without a Period)</H3>
        <P>
          After the final period, estrogen settles at a lower and more stable baseline. Hair often
          becomes finer, drier, and slower growing, and density continues to decline with age, as
          the Birch study showed across decades.
          <Cite k="birch2001" /> Pattern hair loss is common and, per the 2025 Nature Reviews
          article, frontal, mid-scalp, and crown follicles in postmenopausal women are susceptible
          to androgenetic alopecia.
          <Cite k="liu2025" /> Norwood found female androgenetic alopecia reaches its peak after age
          50.
          <Cite k="norwood2001" /> This is also the stage at which frontal fibrosing alopecia, a
          scarring condition, is most often seen, with a mean age of 61 in a large multicenter
          series.
          <Cite k="vano2014" /> A receding hairline with eyebrow thinning is a reason to see a
          dermatologist, not a reason to add another supplement.
        </P>
        <P>
          Iron deserves a special note in this stage. Menstrual blood loss has ended, so newly low
          iron stores in a postmenopausal woman are unusual, and as discussed earlier, the standard
          advice is to look for a source of blood loss, especially gastrointestinal, before assuming
          diet is the explanation.
          <Cite k="trost2006" />
        </P>
        <H3>Surgical or Early Menopause</H3>
        <P>
          Women who go through menopause abruptly, after removal of the ovaries, or early, before
          age 45, experience an abrupt or premature loss of estrogen. Many describe faster hair
          changes than their peers. The evidence specific to hair in this group is limited, so I
          rely on the same principles: evaluate for coexisting iron, thyroid, and metabolic
          contributors, discuss the broader health implications of early estrogen loss with a
          menopause-informed clinician, and treat pattern hair loss on its own merits. Hormone
          therapy in this group is often recommended for reasons beyond hair, and the North American
          Menopause Society position statement discusses those considerations.
          <Cite k="nams2022" />
        </P>
        <H3>A Stage-by-Stage Summary</H3>
        <DataTable
          head={["Stage", "Common hair pattern", "Worth checking", "Realistic goal"]}
          rows={[
            [
              "Early to mid perimenopause",
              "Diffuse shedding episodes; earliest widening of the part",
              "Ferritin, thyroid, vitamin D, insulin, sleep, cycle changes",
              "Remove drivers of shedding; document baseline",
            ],
            [
              "Late perimenopause",
              "Part widening, finer texture, crown thinning",
              "The above plus hormone context; scalp exam if any red flags",
              "Stabilize thinning; start evidence-based treatment early",
            ],
            [
              "Postmenopause",
              "Progressive pattern thinning; drier, finer hair; higher risk of frontal fibrosing alopecia",
              "Scalp exam; iron with cause if low; thyroid; vitamin D; metabolic health",
              "Slow progression; protect density; rule out scarring",
            ],
            [
              "Surgical or early menopause",
              "Often faster changes",
              "Full nutrient and thyroid screen; bone and cardiovascular counseling",
              "Address contributors and pattern loss in parallel",
            ],
          ]}
        />
      </section>

      <section id="pregnancy-postpartum">
        <H2>Pregnancy, Postpartum, Loss, and Fertility Treatment</H2>
        <Fig
          src={postpartumImg}
          alt="Mother holding her newborn in a Michigan nursery, illustrating postpartum hair shedding and recovery"
        />
        <P>
          For women in their late 30s and early 40s, reproductive events are among the most common
          and most overlooked hair loss triggers. If you have had a baby, a pregnancy loss, a course
          of fertility treatment, or a change in breastfeeding in the last year, the timeline of
          your hair may be sitting right in your reproductive history.
        </P>
        <H3>Postpartum Shedding: Normal, Until It Is Not</H3>
        <P>
          During pregnancy, higher estrogen levels keep more follicles in the growth phase for
          longer. After delivery, when hormones fall sharply, those follicles return to the resting
          phase and the extra hair is shed. A study comparing women at different stages of pregnancy
          and the postpartum year found that follicles return to the resting phase within about
          three to six months after delivery, and that women who were breastfeeding at four months
          postpartum had a higher proportion of growing hairs than those who were not.
          <Cite k="gizlenti2014" /> The practical message: postpartum shedding tends to begin around
          month three, peak around months four to five, and settle over the following months. For
          most women it is over, or clearly improving, by about a year.
        </P>
        <P>
          That is why I take it seriously when a woman tells me she is well past that point and
          still shedding heavily. In that case something else is usually going on. The most common
          contributors I look for are:
        </P>
        <UL
          items={[
            <>
              <strong>Depleted iron stores</strong> from pregnancy, delivery blood loss, heavy
              postpartum or returning periods, and breastfeeding, particularly after two pregnancies
              close together.
            </>,
            <>
              <strong>Thyroid changes.</strong> Postpartum thyroiditis is a recognized condition in
              which the thyroid becomes overactive and then underactive in the months after
              delivery. It can be subtle and is easy to attribute to new-parent exhaustion.
            </>,
            <>
              <strong>Low vitamin D and B12,</strong> particularly with a winter delivery in
              Michigan or Wisconsin.
            </>,
            <>
              <strong>Sleep deprivation and sustained stress,</strong> which are constant with a
              young child.
            </>,
            <>
              <strong>An unmasked pattern hair loss or underlying PCOS,</strong> since the hormonal
              swings of pregnancy can bring forward a tendency that was already there.
            </>,
            <>
              <strong>Inadequate nutrition,</strong> because many mothers eat on the run, skip
              meals, or diet aggressively to lose the weight.
            </>,
          ]}
        />
        <P>
          If you are a mother in your 30s who has been told for a year that "it's just postpartum,"
          I want you to hear that it is reasonable to ask for iron studies, thyroid tests, and a
          look at the whole picture. You do not need to wait until your child's second birthday to
          ask.
        </P>
        <H3>Pregnancy Loss and Fertility Treatment</H3>
        <P>
          A pregnancy loss involves a sudden hormonal shift, an emotional shock, and sometimes blood
          loss or a procedure, all of which are recognized triggers for telogen effluvium. It is a
          subject women rarely raise unprompted, partly because the grief is the main event and the
          hair seems trivial by comparison. It is not trivial to you if it is one more thing going
          wrong. I tell women in this situation that hair shedding three to four months after a loss
          is a well-understood physiological reaction and not a sign that something else is wrong
          with their bodies or a judgment on them.
        </P>
        <P>
          Fertility treatment can also affect hair. Medications that manipulate hormones, and the
          stress and sleep disruption of a treatment cycle, can trigger shedding. Some women stop
          hormonal birth control to try to conceive, and the resulting hormonal change can trigger a
          shedding episode several months later. If you are actively trying to conceive or are
          pregnant, please tell any clinician prescribing hair loss treatment. Several of the
          treatments discussed in this guide, including oral minoxidil, spironolactone, and
          finasteride, are not appropriate during pregnancy or when pregnancy is possible without
          effective contraception, and topical minoxidil should be avoided in pregnancy and
          breastfeeding.
        </P>
        <H3>Breastfeeding and Hair</H3>
        <P>
          Breastfeeding delays the return of estrogen fluctuation in some women and can prolong the
          hormonal environment that influences hair. In the same postpartum study, hair-cycle ratios
          differed between breastfeeding and non-breastfeeding mothers at four months.
          <Cite k="gizlenti2014" /> Breastfeeding also draws on iron, zinc, B12, and calories, which
          is why nutritional adequacy matters even more. Do not stop breastfeeding to protect your
          hair unless you are otherwise ready to. Do get your iron and thyroid checked.
        </P>
        <H3>When Your Cycle Returns and Your Hair Changes Again</H3>
        <P>
          Women often see a second wave of shedding when their periods return or after weaning, as
          hormones shift again. This second wave is usually milder than the first. It is also a
          common point at which underlying PCOS or early perimenopause becomes visible. Our guides
          to{" "}
          <Link to="/blog/pcos-weight-resistance-women-30s-michigan-wisconsin" className={LINK}>
            PCOS in your 30s
          </Link>{" "}
          and{" "}
          <Link to="/blog/perimenopause-in-your-30s-michigan-wisconsin" className={LINK}>
            perimenopause in your 30s
          </Link>{" "}
          are helpful reading for that moment, since the symptom lists overlap heavily and the right
          tests differ.
        </P>
      </section>

      <section id="iron-nutrients">
        <H2>Ferritin, Iron, and the Nutrient Question</H2>
        <P>
          If you have read anything about hair loss, you have read about ferritin. It is the most
          discussed lab in the hair conversation, and it is also one of the most misunderstood. So
          let us go slowly and honestly.
        </P>
        <Fig
          src={labDrawImg}
          alt="Phlebotomist preparing blood tubes at a lab draw station while a Michigan woman waits, for ferritin, vitamin D, and thyroid testing"
        />
        <H3>What Ferritin Is</H3>
        <P>
          Ferritin is the protein that stores iron inside your cells. A ferritin level in your blood
          reflects how much iron you have in reserve, like a savings account, while hemoglobin
          reflects the iron currently in circulation, like a checking account. You can have a normal
          hemoglobin and a nearly empty savings account for years. Trost and colleagues, in their
          review from the Cleveland Clinic, explain that hemoglobin can be used to screen for iron
          deficiency while serum ferritin can be used to confirm it, and they also point out an
          important complication: ferritin can rise with infection, inflammation, and some other
          conditions, which can make a low-normal ferritin look better than it really is.
          <Cite k="trost2006" /> This is one reason many clinicians order an inflammatory marker
          such as hs-CRP alongside it.
        </P>
        <H3>How Common Is Iron Deficiency in Women Like You?</H3>
        <P>
          Very. In premenopausal women, the most common causes of iron deficiency anemia are
          menstrual blood loss and pregnancy, as Trost and colleagues note.
          <Cite k="trost2006" /> A CDC analysis of national survey data from 1999 to 2000 found that
          iron deficiency affected about 9 to 16 percent of adolescent and adult females aged 12 to
          49, and was roughly two times higher among non-Hispanic Black and Mexican-American females
          (19 to 22 percent) than among non-Hispanic white females.
          <Cite k="cdc2002" /> Those data are a quarter century old, so I would not treat the
          percentages as current, but they establish that this is a common and unevenly distributed
          problem, and that many women who look healthy on paper are running low.
        </P>
        <H3>Does Low Ferritin Cause Hair Loss? What the Research Really Shows</H3>
        <P>
          This is where I want to earn your trust by not oversimplifying. The evidence is genuinely
          mixed, and the best clinicians hold two ideas at once.
        </P>
        <UL
          items={[
            <>
              <strong>The association is real.</strong> In a study of 80 women aged 18 to 45 with
              chronic telogen effluvium or female pattern hair loss and 40 matched controls, mean
              serum ferritin was 14.7 in the telogen effluvium group and 23.9 micrograms per liter
              in the pattern loss group, compared with 43.5 in controls, and the levels fell further
              as severity increased.
              <Cite k="rasheed2013" /> Kantor and colleagues found that mean ferritin was
              significantly lower in women with androgenetic alopecia (37.3 nanograms per
              milliliter) and alopecia areata (24.9) than in women without hair loss (59.5),
              although the telogen effluvium group in that smaller study did not differ
              significantly.
              <Cite k="kantor2003" /> A 2026 meta-analysis of studies of telogen effluvium found
              significantly lower ferritin levels in cases than in controls.
              <Cite k="ahmed2026" />
            </>,
            <>
              <strong>But proof of benefit from treating it is incomplete.</strong> Trost and
              colleagues concluded that there was insufficient evidence to recommend universal
              screening for iron deficiency in patients with hair loss, and insufficient evidence to
              recommend iron supplementation in patients with hair loss and iron deficiency in the
              absence of anemia; the decision, they wrote, should be based on clinical judgment.
              <Cite k="trost2006" />
            </>,
          ]}
        />
        <P>
          Both statements are true. Rushton, in a widely cited review of nutritional factors in hair
          loss, recommended a serum ferritin of 70 micrograms per liter as a target in people with
          increased shedding when the erythrocyte sedimentation rate is normal.
          <Cite k="rushton2002" /> Other researchers have proposed cut-offs closer to 30. The
          reality is that no one has definitively established the ideal ferritin for hair, and I
          distrust anyone who claims to know a precise magic number. What I do find persuasive,
          clinically, is this: a ferritin of 12 or 15, which many laboratories still label as within
          the reference range, is very hard to defend as adequate for a woman who is shedding, and a
          ferritin in the 20s deserves a closer look at why it is that low.
        </P>
        <H3>The Most Important Rule About Iron: Find the Reason</H3>
        <P>
          I want to be emphatic about this because it is a safety point. Low ferritin is a finding,
          not a diagnosis. Before treating it, the cause must be identified. Trost and colleagues
          state that if the patient is a man or postmenopausal woman, or has risk factors for blood
          loss, the patient should be evaluated for sources of blood loss, especially
          gastrointestinal, because iron deficiency in that group can signal serious conditions
          including colon cancer.
          <Cite k="trost2006" /> For the premenopausal woman, the usual suspects include:
        </P>
        <UL
          items={[
            <>Heavy or prolonged menstrual bleeding, including fibroids and adenomyosis</>,
            <>
              Low dietary iron intake, particularly in vegetarians, vegans, and women who have been
              dieting for years
            </>,
            <>
              Malabsorption, such as celiac disease, chronic gut inflammation, or long-term use of
              acid-suppressing medications
            </>,
            <>Frequent blood donation</>,
            <>Recent pregnancy, delivery, or breastfeeding</>,
            <>Rapid growth in athletes, particularly endurance runners</>,
          ]}
        />
        <P>
          For a woman who is postmenopausal or well into the transition and finds low iron for the
          first time, the conversation is different and the medical work-up must be more thorough.
          Never simply start high-dose iron on your own. It can cause constipation and stomach
          upset, it is dangerous in people with hemochromatosis, and it will mask a bleeding source
          that needs to be found.
        </P>
        <H3>How Iron Is Typically Repleted</H3>
        <P>
          Once the cause is understood, replenishment usually involves a combination of dietary iron
          and an oral iron supplement chosen and dosed by a clinician, with recheck labs after a few
          months. In practice: separate iron from coffee, tea, calcium, and thyroid medication
          (levothyroxine should typically be taken apart from iron by several hours); pair it with
          vitamin C; and expect that it takes many months, not weeks, to rebuild stores. Some women
          with malabsorption or intolerance require intravenous iron, which is a
          physician-supervised treatment. Hair responds slowly and late; it is common to see energy
          improve before shedding does.
        </P>
        <H3>Vitamin D: The Michigan and Wisconsin Angle</H3>
        <P>
          In the study by Rasheed and colleagues, serum vitamin D levels in women with telogen
          effluvium and pattern loss were dramatically lower than in controls, and the levels fell
          as severity increased.
          <Cite k="rasheed2013" /> The 2026 meta-analysis found significantly lower vitamin D in
          telogen effluvium cases.
          <Cite k="ahmed2026" /> In the 3,028-patient series, vitamin D deficiency or insufficiency
          was the single most frequent abnormality among those tested (72.2 percent).
          <Cite k="yorulmaz2022" /> Again, association is not proof of cause, but vitamin D plays
          roles in the hair follicle cycle, and it is inexpensive to test and easy to correct.
        </P>
        <P>
          For women living in Michigan and Wisconsin, latitude matters. A classic study by Webb,
          Kline, and Holick showed that in Boston (42.2 degrees north) sunlight from November
          through February produced no previtamin D3 in skin, and in Edmonton (52 degrees north)
          this ineffective winter extended from October through March.
          <Cite k="webb1988" /> Michigan and Wisconsin sit between roughly 42 and 48 degrees north,
          at or above Boston. In practical terms, from late autumn to early spring, the sun in the
          Great Lakes region is not going to give you meaningful vitamin D no matter how many walks
          you take. The Endocrine Society guideline suggests measuring 25-hydroxyvitamin D as the
          initial test in people at risk for deficiency and treating deficiency with vitamin D2 or
          D3.
          <Cite k="holick2011" /> The Society defines deficiency as a level below 20 nanograms per
          milliliter. Many functional medicine clinicians aim higher, and I do too for most
          patients, but I will be candid that there is no trial-derived, hair-specific ideal level.
        </P>
        <P>
          We discuss the same winter pattern, and how it interacts with thyroid function, in our{" "}
          <Link to="/blog/normal-tsh-hypothyroid-symptoms-michigan-wisconsin" className={LINK}>
            thyroid guide for Michigan and Wisconsin women
          </Link>
          , and with weight and energy in our{" "}
          <Link
            to="/blog/why-michigan-women-over-40-cant-lose-weight-feel-exhausted"
            className={LINK}
          >
            Michigan guide
          </Link>{" "}
          and{" "}
          <Link to="/blog/gaining-weight-exhausted-after-40-wisconsin-women" className={LINK}>
            Wisconsin guide
          </Link>
          .
        </P>
        <H3>Vitamin B12, Folate, and Zinc</H3>
        <P>
          In the large telogen effluvium series, roughly 31 percent of those tested had low vitamin
          B12, about 4 percent low folate, and about 2 percent low zinc.
          <Cite k="yorulmaz2022" /> B12 deficiency is more common in vegetarians and vegans, in
          women taking metformin or long-term acid suppressors, and in people with gut conditions.
          It is worth checking, and correcting if low, because it matters for far more than hair.
          Zinc is the supplement most women reach for first and the one where the evidence is
          weakest: Rushton's review found no evidence to support the popular view that low serum
          zinc concentrations cause hair loss.
          <Cite k="rushton2002" /> Zinc deficiency exists, but it is uncommon in the general
          population, and excessive zinc can interfere with copper. If a test shows a low level,
          treat it. If not, skip it.
        </P>
        <H3>Protein: The Overlooked Building Block</H3>
        <P>
          Hair is made of protein, primarily keratin. What we know about nutrition and hair comes
          mostly from studies of protein-energy malnutrition, starvation, and eating disorders, as
          Rushton notes, and in otherwise healthy people nutritional factors seem to matter in those
          with persistent increased shedding.
          <Cite k="rushton2002" /> In practice I see two groups at risk. The first is women who have
          been undereating for years, often in the name of weight loss, and whose protein intake is
          quietly low. The second is women on rapid weight loss regimens, including GLP-1
          medications, where appetite is suppressed and protein falls short. If that describes you,
          please read the GLP-1 section that follows and our detailed article on{" "}
          <Link to="/blog/ozempic-not-working-michigan-wisconsin-women" className={LINK}>
            why Ozempic stops working and how to protect muscle
          </Link>
          , which includes protein targets.
        </P>
        <H3>The Bigger Picture on Micronutrients</H3>
        <P>
          A 2019 review of the role of vitamins and minerals in hair loss concluded that
          micronutrients such as vitamins and minerals play an important but not entirely clear role
          in normal hair follicle development and immune function, that deficiency may represent a
          modifiable risk factor, and that large double-blind, placebo-controlled trials are still
          required to determine whether supplementation actually improves hair growth in people with
          both deficiency and non-scarring alopecia.
          <Cite k="almohanna2019" /> That is a fair summary of the field. The practical translation:
          measure, do not guess; correct real deficiencies; and be skeptical of mega-dose
          supplementation in the absence of one. We return to what can go wrong with supplements in
          a later section.
        </P>
      </section>

      <section id="eating-plan">
        <H2>Eating for Your Follicles: A Practical Plan</H2>

        <Fig
          src={nutritionImg}
          alt="Protein-rich Midwest meal of salmon, eggs, lentils, Greek yogurt, and Michigan cherries to support hair health"
        />
        <P>
          Nutrition advice about hair is easy to overcomplicate. There is no single "hair food," and
          no meal plan has been proven to regrow pattern hair loss. But the follicle is a demanding
          tissue, and the research consistently points to protein sufficiency, iron adequacy, and
          avoidance of prolonged restriction as the foundations. What follows is the practical
          translation I offer, rooted in ordinary food available to any household in Michigan or
          Wisconsin.
        </P>
        <H3>Start With Protein at Every Meal</H3>
        <P>
          Hair is built from protein, and reviews of nutrition and hair loss note that the
          best-established connections involve protein-energy malnutrition and restrictive eating.
          <Cite k="rushton2002" /> Many women in their 40s eat a light breakfast (coffee and a piece
          of fruit), a moderate lunch, and a large dinner, which concentrates protein in one meal. A
          commonly used practical target is roughly 25 to 30 grams of protein at each of three
          meals, adjusted for your body size, kidney health, and clinician guidance. It is more
          effective to spread protein across the day than to load it at night. If you are on a GLP-1
          medication, your target is likely higher, and the details are in our{" "}
          <Link to="/blog/ozempic-not-working-michigan-wisconsin-women" className={LINK}>
            GLP-1 muscle preservation article
          </Link>
          .
        </P>
        <P>
          Familiar sources of protein in our region include eggs, Greek yogurt, cottage cheese, and
          other dairy (Wisconsin has this covered), chicken, turkey, lean beef and venison, Great
          Lakes fish such as whitefish, walleye, and perch, wild-caught salmon, lentils, beans, tofu
          and tempeh, and nuts and seeds. A simple breakfast of eggs with vegetables and a piece of
          toast, or Greek yogurt with berries and pumpkin seeds, does more for your follicles than
          another cup of coffee.
        </P>
        <H3>Iron: Food First, Then Ask About Supplements</H3>
        <P>
          Iron in food comes in two forms. Heme iron, found in red meat, poultry, and fish, is well
          absorbed. Non-heme iron, found in lentils, beans, spinach, fortified cereals, and seeds,
          is less well absorbed, but absorption improves when eaten with vitamin C. Coffee, tea, and
          calcium taken at the same meal reduce absorption. Practical adjustments include:
        </P>
        <UL
          items={[
            <>
              Eat your iron-rich meals with something rich in vitamin C, such as bell peppers,
              citrus, strawberries, or Michigan cherries and blueberries.
            </>,
            <>
              Separate coffee and tea from your main iron sources by an hour or two, and avoid
              taking a calcium supplement with them.
            </>,
            <>
              If you eat little or no meat, plan iron intentionally and have your ferritin checked.
              Vegetarians and vegans are at higher risk of low stores.
            </>,
            <>Cooking in cast iron can add a little iron to foods, particularly acidic ones.</>,
            <>Do not supplement iron without knowing your level, as discussed earlier.</>,
          ]}
        />
        <H3>Do Not Under-Eat</H3>
        <P>
          One of the most common patterns I see is chronic under-eating in the name of weight
          management, combined with skipped meals, long gaps, and low protein. The follicle reads
          this as scarcity. If you are trying to lose weight, the goal is to lose it at a moderate
          pace, with high protein and adequate calories, and with strength training, not to lose it
          as fast as possible. Very low calorie diets are a well-recognized telogen effluvium
          trigger. Reviews of nutritional factors note that the best-established links come from
          starvation, protein-energy malnutrition, and eating disorders.
          <Cite k="rushton2002" />
        </P>
        <H3>Healthy Fats, Colorful Plants, and Blood Sugar Stability</H3>
        <P>
          Healthy fats, such as those found in salmon, olive oil, walnuts, flax, and avocado,
          support cell membranes and the skin barrier. A varied intake of vegetables and fruit
          provides the vitamins and minerals involved in follicle cell turnover. And meals built
          around protein, fiber, and healthy fat, and less around refined carbohydrates alone, tend
          to produce steadier blood sugar, which is relevant if insulin resistance is part of your
          picture. This is the same approach I describe in{" "}
          <Link
            to="/blog/the-ultimate-guide-to-hormones-and-weight-resistance-over-40"
            className={LINK}
          >
            our guide to hormones and weight resistance over 40
          </Link>
          .
        </P>
        <H3>A Sample Day</H3>
        <DataTable
          head={["Meal", "Example", "What it does for you"]}
          rows={[
            [
              "Breakfast",
              "Two or three eggs with sauteed spinach and peppers, plus berries",
              "Protein, iron, vitamin C, and a start to the day that is not just coffee",
            ],
            [
              "Lunch",
              "Lentil and roasted vegetable bowl with feta and pumpkin seeds, or a chicken salad",
              "Non-heme iron, fiber, zinc, and protein",
            ],
            [
              "Snack",
              "Greek yogurt or cottage cheese with cherries, or a handful of nuts",
              "Protein and a bridge to dinner",
            ],
            [
              "Dinner",
              "Baked whitefish or salmon, a starchy vegetable, and greens; or grass-fed beef with roasted vegetables",
              "Omega-3 fats, heme iron, and B12",
            ],
          ]}
        />
        <P>
          This is an illustration, not a prescription. If you have kidney disease, are pregnant or
          breastfeeding, have food allergies, or have a history of disordered eating, please work
          with a clinician or registered dietitian to personalize it.
        </P>
      </section>

      <section id="thyroid-insulin-stress">
        <H2>Thyroid, Insulin, and the Stress Question</H2>
        <Fig
          src={glucoseImg}
          alt="Forearm with a continuous glucose monitor beside a balanced breakfast bowl, illustrating insulin resistance and blood sugar in hair loss"
        />
        <P>
          Three metabolic systems come up in almost every evaluation I do for a woman in this age
          range with hair loss: thyroid function, insulin and blood sugar regulation, and the stress
          response. Each of them can influence the hair cycle, each is testable or at least
          assessable, and each is commonly under-evaluated in a standard visit.
        </P>
        <H3>Thyroid: Why "Normal" Does Not Always Mean Fine</H3>
        <P>
          The link between thyroid status and hair is old, well recognized, and biologically
          grounded. In a mouse study, animals lacking the main thyroid hormone receptors showed
          impaired hair cycling with decreased follicular cell proliferation, and hypothyroid mice
          showed the same, which the authors took as evidence that the hormone-bound receptors play
          an important role in hair growth.
          <Cite k="contreras2014" /> That is animal research, so I do not want to stretch it, but it
          matches what clinicians see: in hypothyroid patients, the skin is affected and hair loss
          is common.
        </P>
        <P>
          What women with an underactive thyroid describe is diffuse thinning across the scalp, hair
          that feels dry, coarse, and brittle, slow regrowth, and sometimes thinning of the outer
          third of the eyebrows. Overactive thyroid can also cause diffuse shedding and fine, soft
          hair. And thyroid medication that is out of balance in either direction can contribute. In
          the 3,028-patient telogen effluvium series, about 4.6 percent of patients had thyroid
          dysfunction, a modest but real fraction, and a reason thyroid testing belongs in the
          work-up of any persistent shedding.
          <Cite k="yorulmaz2022" />
        </P>
        <P>
          The problem is not that thyroid testing is skipped. It is that it is often too narrow. A
          TSH by itself can miss early autoimmune thyroid disease and problems of T4 to T3
          conversion. A more complete picture includes Free T4, Free T3, and thyroid peroxidase
          antibodies, which can identify Hashimoto's thyroiditis years before TSH moves out of
          range. If you would like to understand this in depth, including why a TSH in the upper
          part of the reference range can coexist with real symptoms, our full{" "}
          <Link to="/blog/normal-tsh-hypothyroid-symptoms-michigan-wisconsin" className={LINK}>
            guide to normal TSH and hypothyroid symptoms for Michigan and Wisconsin women
          </Link>{" "}
          covers the mechanics, the six thyroid patterns, and the recommended panel. Hair thinning
          and thyroid antibodies also travel together in alopecia areata, which we come back to
          below.
        </P>
        <P>
          One practical caution: if you are already taking thyroid hormone, do not adjust your dose
          because of hair loss. Bring your labs and timeline to the prescriber and let them
          interpret the trend. Also take iron, calcium, and magnesium supplements several hours
          apart from levothyroxine, since they can reduce its absorption.
        </P>
        <H3>Insulin and Blood Sugar: The Quiet Contributor</H3>
        <P>
          Insulin resistance is a metabolic state in which cells respond poorly to insulin, and the
          pancreas compensates by making more of it. It is extremely common in midlife, especially
          around the menopausal transition, and it is often invisible on standard labs because
          fasting glucose and even hemoglobin A1c can stay normal for years while fasting insulin is
          elevated.
        </P>
        <P>
          The strongest hair connection is through PCOS, where insulin resistance and elevated
          androgens reinforce each other. A 2026 review in Endocrine Connections describes
          androgenetic alopecia in PCOS as a prominent marker of systemic dysregulation, extending
          beyond simple hyperandrogenism, and proposes that insulin resistance and chronic low-grade
          inflammation converge with genetic susceptibility at the follicle. The authors are open
          that the complete pathophysiology remains incompletely understood.
          <Cite k="motafeghi2026" /> That fits how I see it clinically: insulin resistance is more a
          contributing amplifier than a sole cause of pattern hair loss, and hair may be one of its
          more visible early signals.
        </P>
        <P>
          There is a related signal in scarring hair loss. In a survey of 326 African American
          women, type 2 diabetes was significantly more common in women with central centrifugal
          cicatricial alopecia (CCCA), and the authors noted this is in line with a theory that
          scarring alopecias may reflect metabolic dysregulation.
          <Cite k="kyei2011" /> Again, that is an association from a single cross-sectional survey,
          not proof of cause. But it reinforces why I check glucose regulation in women with hair
          loss, especially when other clues are present: central abdominal weight gain, skin tags,
          dark velvety patches at the neck or armpits, strong cravings, energy crashes after meals,
          or a family history of type 2 diabetes.
        </P>
        <P>
          Fasting insulin, fasting glucose, and hemoglobin A1c together are far more informative
          than any one alone. Our foundational article on{" "}
          <Link
            to="/blog/the-ultimate-guide-to-hormones-and-weight-resistance-over-40"
            className={LINK}
          >
            hormones and weight resistance over 40
          </Link>{" "}
          walks through insulin resistance in detail, and it is often the same underlying issue that
          is quietly driving both the scale and the scalp.
        </P>
        <H3>The Stress Response: Real, but Often Overstated</H3>
        <P>
          Stress is the most cited and least examined explanation for hair loss. It is a real
          trigger, as we have seen, both from clinical observation of telogen effluvium after major
          life events and from mouse research showing that stress-level corticosterone can hold
          follicles in an extended resting phase.
          <Cite k="choi2021" /> But I want to draw a careful line between two things that get
          blurred online.
        </P>
        <P>
          One is stress as a clear trigger event: a bereavement, a divorce, a period of severe
          illness, a year of caregiving. That is well supported as a cause of telogen effluvium, and
          if it fits your timeline, it deserves weight. The other is a vague, unfalsifiable claim
          that your hair loss is due to "cortisol" or "adrenal fatigue" without any testing or
          reasoning. That line of thinking is common in wellness circles, and it can distract from
          treatable causes. Chronic stress physiology is real and worth assessing, particularly in
          women whose sleep is broken, whose blood sugar swings, and whose mood or anxiety has
          changed. But it is one layer, and it should be evaluated alongside the others, not in
          place of them.
        </P>
        <P>
          If sleep disruption and a wired-but-tired feeling ring true for you, our article on{" "}
          <Link to="/blog/hormonal-sleep-anxiety-women-michigan-wisconsin" className={LINK}>
            hormonal sleep and anxiety in women
          </Link>{" "}
          explains the overnight cortisol rhythm, the role of progesterone, and what a comprehensive
          assessment looks like. Improving sleep and nervous system regulation supports hair
          indirectly by removing a persistent physiological stressor.
        </P>
        <Callout title="How these three systems fit together">
          <p>
            Low iron stores, a sluggish thyroid, insulin resistance, and a stressed nervous system
            are not four separate problems. They interact. Iron deficiency worsens fatigue and can
            impair thyroid hormone metabolism; thyroid dysfunction changes how you handle blood
            sugar and cholesterol; insulin resistance and poor sleep feed each other; and all of
            them raise the cost of every additional stressor on the hair cycle. A root-cause
            evaluation looks at how they layer for you, not at a checklist of isolated numbers.
          </p>
        </Callout>
      </section>

      <section id="sleep-movement">
        <H2>Sleep, Movement, and Nervous System Support</H2>
        <Fig
          src={strengthImg}
          alt="Woman in her late 40s strength training at home beside a window with snowy Wisconsin pines"
        />
        <P>
          I want to be careful here, because "reduce your stress" is the least useful advice in
          medicine. It is also, when translated into something concrete, one of the more valuable.
          Let me describe what I actually mean, and be honest about what is and is not proven for
          hair.
        </P>
        <H3>What Is Known and What Is Not</H3>
        <P>
          There are few direct trials of sleep or exercise interventions for hair loss in women, and
          I would be misleading you if I claimed otherwise. What we have is indirect. Stress
          hormones can hold follicles in an extended resting phase in mice.
          <Cite k="choi2021" /> Sleep and stress physiology affect insulin sensitivity, appetite,
          and hormone balance, and those in turn are linked with pattern hair loss and PCOS.
          <Cite k="motafeghi2026" /> And telogen effluvium is triggered by physiological stress in
          humans.
          <Cite k="asghar2020" /> The reasoning is plausible, and the interventions carry little
          risk and large other benefits. That is enough for me to recommend them, while being honest
          that they are supportive measures and not proven hair treatments.
        </P>
        <H3>Sleep: The Foundation</H3>
        <P>
          Perimenopausal sleep disruption is common, and it is not simply a matter of habits. Night
          waking at 3 a.m., night sweats, and early morning anxiety often have hormonal roots that
          respond to a proper evaluation. If this is your experience, the article on the{" "}
          <Link to="/blog/hormonal-sleep-anxiety-women-michigan-wisconsin" className={LINK}>
            hormonal reasons behind sleepless nights and new anxiety
          </Link>{" "}
          explains the mechanics and what helps. In the meantime, a consistent wake time, morning
          light exposure (a real challenge in a Michigan or Wisconsin winter, where a light therapy
          lamp can help), a cool dark bedroom, limited alcohol, and protein at dinner are reasonable
          starting points.
        </P>
        <H3>Movement: Strength First</H3>
        <P>
          Resistance training two to three times a week supports muscle, insulin sensitivity, mood,
          and bone density, all of which matter through the menopausal transition. Walking daily
          supports sleep and stress regulation. Extreme endurance training combined with
          under-eating, on the other hand, can worsen hair shedding by adding to energy deficit and
          iron loss, particularly in runners with heavy periods. If you are a runner with low
          ferritin, this is a place to look.
        </P>
        <H3>Nervous System Regulation</H3>
        <P>
          Slow breathing practices, time outdoors, brief mid-day walks, social connection, and
          therapy all reduce the load on your stress response. For some women, the best "hair
          treatment" is fewer tasks. I mean that literally: protecting even one unscheduled hour a
          day has measurable effects on how people feel. The point is not to eliminate stress, which
          is impossible in modern life, but to give your body regular signals of safety.
        </P>
        <P>
          I also encourage women to be gentle with the fact that worrying about your hair is itself
          a stressor. Once you have a plan, let the plan carry some of the worry.
        </P>
      </section>

      <section id="glp-1-hair">
        <H2>GLP-1 Medications and Hair Shedding</H2>
        <Fig
          src={proteinPrepImg}
          alt="Woman preparing a protein-rich breakfast in a Michigan kitchen, a key habit for preventing GLP-1 related hair shedding"
        />
        <P>
          In my conversations with women over the last few years, no topic in hair loss has grown
          faster than shedding on GLP-1 medications such as semaglutide (Ozempic, Wegovy) and
          tirzepatide (Mounjaro, Zepbound). If this is you, I want to give you accurate information,
          because there is as much anxiety online as there is signal.
        </P>
        <H3>What the Drug Labels Themselves Say</H3>
        <P>
          Hair loss is not a rumor. It is listed as a common adverse reaction in the prescribing
          information for both drugs. The current Wegovy label reports that hair loss adverse
          reactions were associated with weight reduction, and that in a pool of studies, hair loss
          was reported in 3.3 percent of patients treated with the 2.4 mg dose (4 percent of women
          and 0.9 percent of men) versus 1 percent of patients on placebo (2 percent of women).
          <Cite k="wegovy-label" /> The current Zepbound label likewise states that hair loss
          adverse reactions were associated with weight reduction and that hair loss was reported
          more frequently in women than men: 7.1 percent of women versus 0.5 percent of men on the
          drug, compared with 1.3 percent of women on placebo.
          <Cite k="zepbound-label" />
        </P>
        <P>
          Notice the pattern: the label attributes hair loss to weight reduction, and women are
          affected more often than men. Those two facts are the key to understanding what is going
          on.
        </P>
        <H3>What the Broader Research Shows</H3>
        <P>
          Beyond clinical trial adverse event tables, several recent systematic reviews have pooled
          data from cohorts and drug-safety databases. A 2026 systematic review and meta-analysis of
          17 studies covering more than a million patient exposures found a pooled odds ratio of
          1.40 for any non-scarring alopecia among GLP-1 users, driven by telogen effluvium
          (adjusted OR 1.76) and androgenetic alopecia (adjusted OR 1.64) at 12 months, with no
          significant association for alopecia areata. Drug-safety signals were strongest for
          semaglutide and tirzepatide, and the authors concluded the association was primarily
          mediated by weight-loss-induced micronutrient deficiency and advised against premature
          discontinuation.
          <Cite k="viquez2026" />
        </P>
        <P>
          A separate 2026 systematic review found that semaglutide and tirzepatide showed the
          highest incidence of hair loss, that telogen effluvium and androgenetic alopecia were the
          predominant subtypes, that tirzepatide, which is associated with the greatest weight loss,
          was most often linked to telogen effluvium, and that women appeared to be
          disproportionately affected.
          <Cite k="gupta2026" /> A 2026 commentary in Dermatology and Therapy adds a note of
          restraint that I agree with: most of the evidence comes from database analyses and
          retrospective cohorts, no prospective, controlled studies have evaluated the question
          specifically, and causality has not been established, although rapid weight loss inducing
          telogen effluvium is a plausible mechanism.
          <Cite k="piraccini2026" />
        </P>
        <H3>Why It Happens</H3>
        <P>The most credible explanation is a combination of the following, and they compound.</P>
        <UL
          items={[
            <>
              <strong>Rapid weight loss itself is a physiological stressor.</strong> The body
              interprets a sudden, large energy deficit as a state of scarcity. Follicles are
              shifted toward the resting phase, and shedding follows a few months later, exactly
              like the crash diet pattern.
            </>,
            <>
              <strong>Reduced intake of protein and micronutrients.</strong> Appetite suppression
              means less of everything. Protein, iron, zinc, B12, and other nutrients can fall short
              without anyone noticing, particularly in women who were already borderline.
            </>,
            <>
              <strong>Loss of lean mass and shifts in hormone metabolism.</strong> Muscle loss and
              rapid changes in body fat can alter hormone balance.
            </>,
            <>
              <strong>Unmasking of underlying pattern hair loss or perimenopause.</strong> A woman
              in her 40s starting a GLP-1 is often also entering perimenopause. The shedding can
              bring forward a pattern that was already developing.
            </>,
          ]}
        />
        <H3>What to Expect, and When</H3>
        <P>
          The typical timeline mirrors any telogen effluvium: shedding begins roughly three to six
          months after starting the drug or after the most rapid phase of weight loss, peaks over a
          few months, and then gradually settles, with regrowth following. It often slows once
          weight stabilizes. The reassurance from the literature is that many cases are transient,
          but I have also seen women in whom the medication has unmasked a chronic issue that
          continues after the initial storm passes.
        </P>
        <H3>What Helps: A Protective Approach</H3>
        <OL
          items={[
            <>
              Get a baseline before or early in treatment. Ferritin, a complete blood count, vitamin
              D, B12, zinc, thyroid tests, and a look at your hair (with photographs) give you a
              starting point and let you catch deficiencies early.
            </>,
            <>
              Prioritize protein at every meal. Our article on{" "}
              <Link to="/blog/ozempic-not-working-michigan-wisconsin-women" className={LINK}>
                Ozempic and the muscle loss problem
              </Link>{" "}
              gives specific protein targets and a resistance training framework, which protect
              muscle and support hair at the same time.
            </>,
            <>
              Avoid extreme calorie restriction on top of the medication. The drug reduces appetite,
              but you can still choose nutrient-dense foods, and it matters that you do.
            </>,
            <>
              Consider the pace. Faster is not better for hair. Your prescriber can discuss dose
              titration and whether the rate of loss is appropriate for you.
            </>,
            <>
              Do not stop the drug abruptly on your own because of hair loss. Weight regain after
              stopping is well documented, and the meta-analysis authors specifically advised
              against premature discontinuation. Any decision to change your dose belongs in a
              conversation with the clinician who prescribes it.
            </>,
            <>
              Address pattern hair loss and perimenopause in parallel, rather than waiting for the
              shedding to stop before doing so.
            </>,
          ]}
        />
        <P>
          I have written more extensively about the broader picture of GLP-1 medications in midlife
          women, including why plateaus occur and what a combined protocol can look like, in{" "}
          <Link to="/blog/ozempic-not-working-michigan-wisconsin-women" className={LINK}>
            our full Ozempic guide for Michigan and Wisconsin women
          </Link>
          . If you live outside the large metro areas and wonder whether this kind of support is
          available to you by telehealth, see our{" "}
          <Link
            to="/blog/medical-weight-loss-hormone-therapy-michigan-wisconsin-cities"
            className={LINK}
          >
            city-by-city guide to medical weight loss and hormone therapy across Michigan and
            Wisconsin
          </Link>
          .
        </P>
      </section>

      <section id="medications-conditions">
        <H2>Medications, Surgery, and Medical Conditions: A Practical Checklist</H2>
        <Fig
          src={pillsImg}
          alt="Pill organizer, handwritten medication list, and reading glasses for reviewing medications that can affect hair"
        />
        <P>
          When a woman brings me a shedding story with no obvious trigger, I go back through a
          checklist of the less obvious things. This is the part of the evaluation where a patient
          often says, "Oh, I forgot about that." It is worth going through yourself before your
          visit.
        </P>
        <H3>Medications</H3>
        <P>
          A review of drugs and hair loss describes several distinct mechanisms: anagen arrest, in
          which growth stops abruptly; telogen effluvium, in which follicles are pushed into rest;
          and accentuation of androgenetic alopecia by androgens. It also cautions that a temporal
          association between starting a medication and hair loss does not prove the drug is
          responsible, since fever, severe illness, stress, and childbirth can all produce the same
          picture and must be excluded first.
          <Cite k="patel2013" /> That is a nuance worth keeping in mind in both directions. Do not
          assume your medication is the cause, and do not rule it out.
        </P>
        <P>
          Rather than a list of drug names, which changes as prescribing changes, here are the
          categories to bring up with your prescriber or pharmacist if your shedding began within a
          few months of a change.
        </P>
        <UL
          items={[
            <>
              Hormonal contraceptives and other hormone products: starting, stopping, or switching,
              and androgenic progestins.
            </>,
            <>Blood thinners and some cholesterol-lowering agents.</>,
            <>Certain blood pressure medications, including some beta blockers.</>,
            <>Some antidepressants, mood stabilizers, and anticonvulsants.</>,
            <>Retinoids and high-dose vitamin A products.</>,
            <>
              Medications that affect thyroid function or interact with thyroid hormone absorption.
            </>,
            <>Weight loss medications, including GLP-1 drugs, as discussed above.</>,
            <>
              Chemotherapy and endocrine therapies used after breast cancer, which can thin hair
              through different mechanisms.
            </>,
            <>
              Testosterone or DHEA products, which can accentuate pattern hair loss in susceptible
              women.
            </>,
          ]}
        />
        <P>
          The single most important rule: never stop a prescribed medication on your own. Some of
          these medications protect you from serious conditions, and a clinician can often adjust
          the dose, change the agent, or time the change. Bring the list and the timeline, and ask.
        </P>
        <H3>Surgery, Anesthesia, and Illness</H3>
        <P>
          Major surgery, prolonged illness, hospitalizations, and high fevers are classic telogen
          effluvium triggers. So is severe infection, and postinfectious shedding after COVID-19 has
          been observed to track with disease severity, with full recovery of hair.
          <Cite k="trueb2021" /> If you had surgery or a serious illness roughly two to four months
          before your shedding started, you may already have your answer.
        </P>
        <H3>Bariatric Surgery</H3>
        <P>
          Hair loss after metabolic and bariatric surgery is frequent and distressing. In a
          prospective study of 261 patients who had either one-anastomosis gastric bypass or sleeve
          gastrectomy, hair loss scores rose significantly at three months, peaking then before
          improving slightly by six months. Serum iron and zinc declined at three months, and
          reduced iron levels were strongly associated with hair loss.
          <Cite k="chinisaz2026" /> The pattern is typical of a rapid-weight-loss telogen effluvium
          with a nutritional component. If you have had bariatric surgery, protein, iron, zinc, B12,
          and folate should be monitored carefully and supplemented under the guidance of your
          surgical team.
        </P>
        <H3>Medical Conditions Worth Excluding</H3>
        <UL
          items={[
            <>
              <strong>Thyroid disease</strong> (underactive, overactive, and autoimmune).
            </>,
            <>
              <strong>Iron deficiency and other anemias,</strong> including from heavy periods or
              gut blood loss.
            </>,
            <>
              <strong>Celiac disease and other malabsorptive conditions,</strong> particularly when
              iron is low despite adequate intake.
            </>,
            <>
              <strong>PCOS and other causes of androgen excess.</strong>
            </>,
            <>
              <strong>Prediabetes and diabetes.</strong>
            </>,
            <>
              <strong>Autoimmune conditions</strong> including lupus, which can produce diffuse or
              scarring hair loss, and alopecia areata, which clusters with other autoimmune
              diseases.
              <Cite k="lysek2026" />
            </>,
            <>
              <strong>Chronic kidney or liver disease.</strong>
            </>,
            <>
              <strong>Eating disorders and restrictive eating,</strong> which are more common than
              many women or clinicians assume, and which can be hidden behind "dieting." Nutritional
              deficiency in starvation and eating disorders is among the best-documented causes of
              hair loss.
              <Cite k="rushton2002" /> If this touches you, please know that support exists and that
              you deserve it.
            </>,
            <>
              <strong>Syphilis and other infections,</strong> which are uncommon causes but are on
              the standard list of things to consider in unexplained patchy or diffuse loss.
            </>,
          ]}
        />
        <P>
          I do not want this list to alarm you. The great majority of women I see with shedding do
          not turn out to have any of the rarer conditions. But a good evaluation acknowledges the
          differential, tests for the ones the story suggests, and does not skip the possibility
          that something more significant sits behind the hair.
        </P>
      </section>

      <section id="autoimmune-scarring">
        <H2>Autoimmune and Scarring Causes You Cannot Afford to Miss</H2>
        <P>
          Most hair loss in women this age is non-scarring: the follicle is intact, and the hair can
          come back. But there is a smaller group of conditions in which the follicle is being
          attacked or destroyed, and for these the clock matters. I do not say this to frighten you.
          I say it because the mistake I see most often is a woman being told for a year that her
          patchy or band-like hair loss is "stress" when it is an inflammatory or scarring condition
          that needed a dermatologist months earlier.
        </P>
        <H3>Alopecia Areata</H3>
        <P>
          Alopecia areata is an autoimmune disorder in which the immune system attacks the growing
          follicle while preserving the follicle itself. It affects nearly 2 percent of the general
          population at some point in life and can produce well-defined round or oval patches of
          hair loss, diffuse thinning that mimics telogen effluvium, or, less commonly, total scalp
          or body hair loss.
          <Cite k="pratt2017" /> Patches often appear suddenly, sometimes noticed first by a
          hairdresser or a partner. The skin in the patch is typically smooth, without scale or
          scarring.
        </P>
        <P>
          Alopecia areata clusters with other autoimmune and endocrine conditions. A 2026
          retrospective cohort study of alopecia areata patients matched to controls found strong
          associations with endocrine, rheumatologic, dermatologic, gastrointestinal, and other
          autoimmune conditions, and that women with alopecia areata had higher risks of thyroid
          disease.
          <Cite k="lysek2026" /> That is why, when I see patchy hair loss in a woman, I always ask
          about thyroid history and check thyroid antibodies.
        </P>
        <P>
          Treatment is specialist territory and has changed dramatically. Two oral Janus kinase
          (JAK) inhibitors are now labeled for severe alopecia areata in the United States:
          baricitinib (Olumiant) and ritlecitinib (Litfulo).
          <Cite k="olumiant-label" />
          <Cite k="litfulo-label" /> In two phase 3 trials of baricitinib in adults with at least 50
          percent scalp hair loss, 38.8 and 35.9 percent of patients on the 4 mg dose reached a SALT
          score of 20 or less (meaning 80 percent or more scalp coverage) at week 36, versus 6.2 and
          3.3 percent on placebo.
          <Cite k="king2022" /> Ritlecitinib was tested in a phase 2b-3 trial of 718 patients aged
          12 and older with at least 50 percent scalp hair loss.
          <Cite k="king2023" /> These drugs carry meaningful risks, including serious infections,
          and are appropriate only under a dermatologist's care. For milder or patchy disease,
          dermatologists also have other well-established options such as injected corticosteroids.
        </P>
        <H3>Central Centrifugal Cicatricial Alopecia (CCCA)</H3>
        <Fig
          src={naturalHairImg}
          alt="Black woman in her mid 40s examining her hairline at a bathroom mirror in a Detroit-area home, illustrating early scalp evaluation for central hair thinning"
        />
        <P>
          CCCA is the most common form of scarring alopecia in African American women. It typically
          begins at the crown or central scalp and spreads outward, and because the early stage can
          look like simple thinning or a widening part, it is frequently misdiagnosed as female
          pattern hair loss or attributed to styling. A study of 326 African American women at two
          churches and a health fair in Cleveland, Ohio found that 28 percent had clinically evident
          central hair loss, and among those, 59 percent showed clinical signs consistent with
          scarring. Type 2 diabetes, bacterial scalp infections, and hairstyles associated with
          traction were significantly more common among women with CCCA.
          <Cite k="kyei2011" />
        </P>
        <P>
          This matters in our region. Metro Detroit, Flint, Saginaw, Grand Rapids, Milwaukee, and
          Racine all have substantial Black communities, and women in those communities deserve a
          clinician who takes central scalp thinning seriously, looks at the scalp with trichoscopy,
          and considers biopsy when the picture is not clear. If you have noticed the crown
          thinning, scalp tenderness, burning or itching, or a smooth, shiny appearance where
          follicle openings used to be, please see a dermatologist experienced in hair disorders in
          skin of color. Early treatment with anti-inflammatory therapy can prevent further
          permanent loss, and good evaluation is not the same thing as changing your hairstyle.
          Discussions about tension and heat are fair, but they should never substitute for a
          diagnosis.
        </P>
        <H3>Frontal Fibrosing Alopecia</H3>
        <P>
          Frontal fibrosing alopecia (FFA) is a scarring condition that recedes the frontal and
          temporal hairline, often with loss of eyebrows and sometimes eyelashes. It has
          historically been most associated with postmenopausal women, but women in their 40s and
          early 50s are affected too. In a multicenter review of 355 patients, 343 were women (49
          premenopausal) with a mean age of 61; eyelash loss, facial papules, and body hair
          involvement were associated with more severe disease; and antiandrogen medications such as
          finasteride and dutasteride, used in 31 percent of patients, produced improvement in 47
          percent and stabilization in 53 percent of those treated.
          <Cite k="vano2014" /> The lesson for you: a receding hairline with eyebrow loss in a woman
          of any age warrants a dermatologist, not a supplement.
        </P>
        <H3>Lichen Planopilaris and Fibrosing Alopecia in a Pattern Distribution</H3>
        <P>
          Lichen planopilaris is an inflammatory scarring condition that causes scalp itching,
          burning, or tenderness with redness and scale around the hair openings. A related, more
          subtle entity called fibrosing alopecia in a pattern distribution looks just like female
          pattern hair loss but is actually a lymphocytic scarring alopecia. In a 2026 multicenter
          cohort of 110 biopsy-proven cases, most patients were women (85.5 percent) with a mean age
          of onset of about 52, nearly all had loss of follicle openings on trichoscopy, and the
          authors warned the condition may be prone to misdiagnosis because of overlapping features
          with androgenetic alopecia. A combination of anti-inflammatory and hair-promoting
          treatments stabilized or improved hair density in many patients treated for a year or
          longer.
          <Cite k="tang2026" />
        </P>
        <Callout title="Why this section matters for the rest of the article">
          <p>
            Everything else in this guide, iron, thyroid, hormones, supplements, assumes a
            non-scarring process. If your scalp shows scarring, no amount of nutritional
            optimization will regrow follicles that have been destroyed. A trained eye on your scalp
            early is the one thing on this list that no blood test can replace.
          </p>
        </Callout>
      </section>

      <section id="hair-care-scalp">
        <H2>Hair Care, Traction, and Scalp Health</H2>
        <Fig
          src={detangleImg}
          alt="Woman gently detangling wavy hair with a wide-tooth comb, an example of gentle hair care to reduce breakage"
        />
        <P>
          Hair care is rarely the sole cause of significant hair loss in women, but it is a frequent
          contributor and the one factor entirely within your control. It also gets blamed too
          quickly. A woman with iron deficiency and early pattern loss is told to stop wearing a
          ponytail, which she does, and nothing changes, and she feels she was blamed.
        </P>
        <H3>Breakage Versus Shedding</H3>
        <P>
          Breakage is different from shedding. Shed hairs are full length with a small bulb at the
          end. Broken hairs are short, uneven lengths, often with split or blunt ends, and they
          accumulate around the perimeter and in the sink after styling. Breakage is a hair shaft
          problem. It happens when heat, chemical treatments, and tight styling weaken the strand.
          It can make hair look thinner and shorter without any change in follicle density. A
          clinician can tell the difference with a magnified look at the strands.
        </P>
        <H3>Traction and Tension</H3>
        <P>
          Prolonged pulling on the follicles can cause traction alopecia, which shows up along the
          hairline, temples, and part. In the Cleveland study of central hair loss, tight styles
          such as braids and weaves were significantly more common among women with CCCA.
          <Cite k="kyei2011" /> Practical guidance: avoid very tight ponytails, buns, braids, and
          extensions worn continuously; rotate positions; loosen anything that causes soreness or
          bumps at the follicle; give the scalp weeks of rest between heavy styles; and never sleep
          in tight styles. Early traction alopecia is reversible if you catch it before it scars.
        </P>
        <H3>Heat, Chemicals, and Coloring</H3>
        <P>
          Frequent flat ironing, curling, and blow-drying at high temperatures damages the cuticle.
          Bleaching, relaxers, and repeated highlighting can weaken hair enough to snap. Chemical
          burns of the scalp can cause temporary shedding and, if severe, scarring. Use heat
          protectants, lower the temperature, extend the time between chemical services, and
          consider a semi-permanent color or gloss during a recovery period.
        </P>
        <H3>Scalp Conditions That Look Like Hair Loss</H3>
        <P>
          Seborrheic dermatitis (flaking, redness, greasy scale), psoriasis of the scalp, and
          contact dermatitis from products can inflame the scalp and worsen shedding. Reviews of
          nutritional causes remind clinicians that eliminating scaling problems is an important
          part of managing hair loss.
          <Cite k="rushton2002" /> Ketoconazole shampoo or a similar antifungal wash can help
          flaking; persistent redness or plaque-like scale warrants a dermatology visit.
        </P>
        <P>
          Scalp pain or tenderness deserves a mention. Reviews of telogen effluvium describe
          trichodynia, a burning or tender scalp sensation, as a symptom of acute or chronic telogen
          effluvium.
          <Cite k="asghar2020" /> But scalp pain and burning also occur in scarring conditions such
          as lichen planopilaris, so do not assume it is harmless.
        </P>
        <H3>What Actually Helps Everyday Hair Care</H3>
        <UL
          items={[
            <>
              Wash as often as your scalp needs. Do not skip washes out of fear. Rushton's review
              makes the point that reducing shampooing because of fear of losing more hair only
              increases the number of hairs seen in later washes.
              <Cite k="rushton2002" />
            </>,
            <>
              Use a gentle sulfate-free shampoo if your scalp is dry or sensitive, and condition the
              lengths, not the scalp.
            </>,
            <>Detangle wet hair from the ends upward with a wide-tooth comb.</>,
            <>Limit heat, and use a heat protectant when you do use it.</>,
            <>Avoid pulling styles. Use scrunchies or soft bands, not tight elastics.</>,
            <>Protect hair at night with a loose braid or a silk or satin bonnet or pillowcase.</>,
            <>
              Be cautious with dry shampoo and heavy styling products that build up on the scalp.
            </>,
          ]}
        />
        <P>
          None of these will regrow hair you have lost to a hormonal or metabolic process. What they
          do is protect the hair you have, so that whatever medical work is done shows up as visible
          improvement and not as more breakage.
        </P>
      </section>

      <section id="michigan-wisconsin-factors">
        <H2>The Michigan and Wisconsin Factor</H2>
        <P>
          Hair loss is not a geography-specific condition, and I would be overreaching if I told you
          that living in the Great Lakes region causes it. But place shapes the context in which
          hair loss happens, and it definitely shapes how easily you can get a thorough evaluation.
          Here is what I think is worth knowing if you live in Michigan or Wisconsin, and what I
          would not want you to take on faith.
        </P>
        <Fig
          src={telehealthImg}
          alt="Michigan woman in her late 40s on a telehealth video visit with a nurse practitioner about hair loss during a snowy afternoon"
        />
        <H3>The Long Vitamin D Winter</H3>
        <P>
          We covered the latitude data earlier: at or north of Boston, winter sunlight does not
          produce vitamin D in skin for months on end.
          <Cite k="webb1988" /> For a woman in Kalamazoo, Green Bay, or Marquette, that means
          roughly November through March with essentially no sun-derived vitamin D, plus the gray,
          lake-effect skies that keep people indoors even when the sun angle would allow some
          synthesis. Add sunscreen use in summer, darker skin pigmentation (which reduces
          synthesis), and indoor work, and low vitamin D is very common in our region. Given the
          associations between low vitamin D and both telogen effluvium and pattern loss in the
          studies we reviewed, this is one of the most reasonable, practical things to test and
          correct.
        </P>
        <H3>Is There an Autumn Shed?</H3>
        <P>
          Many women in the Upper Midwest tell me their hair sheds more in the fall, and there is a
          small piece of science that supports the idea. In a study of ten men followed with
          repeated phototrichograms over 8 to 14 years, Courtois and colleagues found an annual
          periodicity in the proportion of hairs in telogen, with a maximum at the end of summer and
          the beginning of autumn, and they linked it to climatic factors such as sunshine hours.
          <Cite k="courtois1996" /> I want to be transparent about the limits: that was ten men, not
          a large study of women, and I would not lean on it heavily. But it is consistent with what
          many clinicians observe, and it suggests a sensible interpretation. A moderate increase in
          shedding in September and October that settles by the time the first snow falls is often a
          seasonal rhythm and not a disease. Shedding that is heavy, that lasts more than about
          three months, or that is accompanied by thinning at the part deserves a proper look.
        </P>
        <H3>Winter Scalp, Hats, and Dry Air</H3>
        <P>
          Cold, dry indoor heat and repeated hat wearing often get blamed for winter hair loss. The
          honest answer is that I am not aware of strong evidence that hats, static, or dry air
          cause true hair loss. What winter does do is dry the scalp and hair, increase itch and
          flaking, and increase breakage from friction and static, which can make hair look and feel
          thinner. A gentle scalp routine, a humidifier if your home air is very dry, and a soft,
          breathable hat lining are reasonable measures. If your scalp is intensely itchy, burning,
          or scaly, get it looked at, because that can be seborrheic dermatitis, psoriasis, or an
          inflammatory scarring condition, not just winter dryness.
        </P>
        <H3>A Note on Private Well Water</H3>
        <P>
          I include this with caution, because arsenic is not a common cause of hair loss and I do
          not want to feed anyone's anxiety. But if you live in a rural or exurban part of either
          state and use a private well, testing it is a good idea for many reasons that have nothing
          to do with hair. Michigan's Department of Environment, Great Lakes, and Energy (EGLE)
          notes that the EPA drinking water standard for arsenic is 10 micrograms per liter and
          recommends that if arsenic in a private well exceeds that level, the water not be used for
          drinking or cooking.
          <Cite k="egle-arsenic" /> Wisconsin's Department of Natural Resources describes arsenic as
          a naturally occurring element in soil and bedrock throughout the state and recommends that
          well owners test for it, with more frequent retesting in areas where it has been detected.
          <Cite k="dnr-arsenic" /> You cannot see, smell, or taste it. If you are worried, test the
          water and then talk to your clinician about the results.
        </P>
        <H3>Access: The Real Regional Factor</H3>
        <P>
          The largest geographic factor in hair loss care in our two states is not the climate. It
          is access. A woman in Grand Rapids, Ann Arbor, Detroit, Madison, or Milwaukee can usually
          reach a dermatology department in a large health system, although wait times can be long.
          A woman in the Upper Peninsula, the northern Lower Peninsula, Wisconsin's Northwoods, or
          the Driftless Area may face a long drive and few options. Meanwhile most women with hair
          loss do not need a dermatologist as their first stop. They need someone to take the
          history, order the right labs, and recognize when to send them on.
        </P>
        <P>
          That is where telehealth genuinely helps. Novaleo is a telehealth practice licensed to
          serve women across Michigan and Wisconsin. The history, the lab planning, the
          interpretation, the nutritional and hormonal work-up, and the follow-up can all happen by
          video. Labs are drawn at a local lab convenient to you. When something needs eyes on the
          scalp, an in-person exam, a biopsy, or a procedure like PRP, we help you decide what to
          bring to a dermatologist and when. Our{" "}
          <Link
            to="/blog/medical-weight-loss-hormone-therapy-michigan-wisconsin-cities"
            className={LINK}
          >
            city-by-city guide to telehealth care in Michigan and Wisconsin
          </Link>{" "}
          explains how the logistics work in practice, from Grand Rapids and Metro Detroit to
          Kalamazoo, Lansing, Madison, and Green Bay, and in smaller and rural communities.
        </P>
        <P>
          If you are considering seeing a dermatologist in person as well, large systems such as{" "}
          <XL href="https://www.uwhealth.org/dermatology">UW Health in Madison</XL> and{" "}
          <XL href="https://www.froedtert.com/dermatology">Froedtert in Milwaukee</XL> list
          dermatology services, and Michigan has comparable departments at academic and regional
          health systems. Ask specifically whether the practice has a clinician with hair disorder
          experience, since not all general dermatology visits include trichoscopy.
        </P>
        <CTA
          title="Live outside a big city? You do not have to drive three hours to get started."
          body="Telehealth handles the history, the lab plan, and the interpretation, and helps you decide if and when an in-person scalp exam is needed. Book a free 15-minute call to see how it works from your home in Michigan or Wisconsin."
          button="Book Your Free 15-Minute Call"
        />
      </section>

      <section id="where-to-start">
        <H2>Where Should You Start? A Decision Guide</H2>
        <Fig
          src={trailImg}
          alt="Woman at a fork in a northern Michigan forest trail deciding which path to take, symbolizing choosing a first step for hair loss"
        />
        <P>
          By this point you may be wondering how all of this translates into a first step. Here is
          the guide I would give a friend, organized by what you are seeing. It is not a substitute
          for medical care, but it should help you pick the right door.
        </P>
        <DataTable
          head={["If this describes you", "A sensible first step"]}
          rows={[
            [
              "Sudden heavy shedding for under three months, with a clear recent trigger (illness, surgery, crash diet, big stressor)",
              "Track shedding and take photos, get basic labs (ferritin, CBC, thyroid, vitamin D), address the trigger, and expect improvement over the next several months.",
            ],
            [
              "Shedding for more than three months with no clear trigger",
              "A full root-cause evaluation, including iron studies, thyroid, vitamin D, B12, blood sugar and insulin, and a medication and timeline review.",
            ],
            [
              "Gradual widening of the part or thinning at the crown over months to years",
              "Baseline photos, a broader evaluation for contributors, and an early discussion of evidence-based treatment such as minoxidil. Consider a dermatologist for confirmation.",
            ],
            [
              "Round bald patches, scalp burning or scale, a receding hairline with eyebrow loss, or a shiny smooth central scalp",
              "See a dermatologist in person soon, ideally one with hair disorder experience. Do not wait for labs.",
            ],
            [
              "Shedding on a GLP-1 medication with rapid weight loss",
              "Check ferritin, B12, vitamin D, and thyroid; raise protein; discuss pacing with your prescriber; do not stop the medication on your own.",
            ],
            [
              "Postpartum, under 12 months after delivery, moderate shedding",
              "Reassurance, iron and thyroid checks, good nutrition, and time. If shedding continues past a year, evaluate further.",
            ],
            [
              "Shedding alongside irregular cycles, poor sleep, night sweats, or mood changes in your late 30s to 50s",
              "A hormone-informed evaluation that considers perimenopause, PCOS, thyroid, and insulin together.",
            ],
            [
              "Hair loss and you are overwhelmed by information",
              "Book a short call and let someone help you sort the layers.",
            ],
          ]}
        />
        <P>
          Whatever door you choose, the principles are the same: gather your timeline, get your
          scalp seen when there are red flags, test broadly enough to find the correctable causes,
          treat pattern loss early and patiently, and protect the hair you have.
        </P>
      </section>

      <section id="evaluation">
        <H2>What a Root-Cause Hair Loss Evaluation Looks Like</H2>
        <P>
          Let me describe how I approach this so that you can judge for yourself whether an
          evaluation, wherever you get it, is thorough. The steps are the same in principle whether
          you see a dermatologist, a primary care physician, or a functional medicine practitioner.
          What differs is how completely each is done.
        </P>
        <Fig
          src={reviewLabsImg}
          alt="Wisconsin woman reviewing printed lab results beside her laptop on a snowy afternoon while planning a hair loss evaluation"
        />
        <H3>Step 1: The Timeline</H3>
        <P>
          This is the most valuable hour in the process. We go back at least a year and often
          longer. We map the onset of shedding or thinning against illnesses, fevers, surgeries,
          medication starts and stops, birth control changes, pregnancies and losses, weight changes
          and diets, life stressors, sleep, and menstrual patterns. We ask about hair in the family,
          particularly on the maternal and paternal sides, since pattern hair loss runs strongly in
          families. We ask about autoimmune conditions in you and in relatives. We ask about diet in
          detail: how much protein, how often you skip meals, whether you have eaten less for a long
          time. This is the step where a lot of cases quietly resolve into a clear story, because
          the trigger was there all along.
        </P>
        <H3>Step 2: A Look at the Hair and Scalp</H3>
        <P>
          You bring photographs, and we look at your scalp on video as well as we can, checking the
          part width, the temples and hairline, the crown, any patches, scale, or redness, and the
          appearance of the hairs. Telehealth has limits here, and I am honest about them. If a
          patient's story or images raise the possibility of a scarring alopecia, alopecia areata,
          or anything that cannot be resolved on video, I recommend an in-person dermatology visit
          with trichoscopy, and biopsy if indicated. I would rather send someone unnecessarily than
          miss a scarring process.
        </P>
        <H3>Step 3: Targeted Laboratory Testing</H3>
        <P>
          Testing should be chosen for the individual, not applied as a fixed script, but there is a
          core set that I find worth checking in most women with shedding or thinning in this age
          group.
        </P>
        <DataTable
          head={["Test", "Why it matters for hair"]}
          rows={[
            [
              "Ferritin (with a complete blood count, and often iron, TIBC, and saturation)",
              "Iron stores, a nutrient repeatedly associated with hair loss in women; CBC and iron studies help interpret ferritin and detect anemia",
            ],
            ["hs-CRP", "Inflammation can artificially raise ferritin, so CRP helps interpret it"],
            [
              "25-hydroxyvitamin D",
              "Low in most women in Michigan and Wisconsin in winter; associated with both shedding and pattern loss",
            ],
            [
              "Vitamin B12 (and folate when indicated)",
              "Common deficiency, particularly with metformin, acid suppressors, vegetarian diets, or gut disease",
            ],
            [
              "Zinc and RBC magnesium",
              "Uncommon deficiencies, but inexpensive to check and to correct if low",
            ],
            [
              "TSH, Free T4, Free T3, TPO antibodies",
              "Thyroid dysfunction and early autoimmune thyroid disease, often missed with TSH alone",
            ],
            [
              "Fasting glucose, hemoglobin A1c, fasting insulin",
              "Insulin resistance, which often precedes any change in glucose or A1c",
            ],
            [
              "Lipid panel, liver enzymes, homocysteine",
              "General metabolic context and methylation status",
            ],
            [
              "When the story fits: total and free testosterone, DHEA-S, SHBG, prolactin, estradiol, progesterone, FSH",
              "Androgen excess, PCOS, and perimenopausal patterns",
            ],
            [
              "When the story fits: celiac serology, antinuclear antibodies, syphilis screening",
              "Less common contributors when iron is stubbornly low, or when there are other autoimmune or infectious clues",
            ],
          ]}
        />
        <P>
          Our own{" "}
          <Link to="/services" className={LINK}>
            Root Cause Lab Panel
          </Link>{" "}
          includes the core nutrient, thyroid, blood sugar, liver, lipid, and inflammation markers:
          vitamin D, B12, ferritin, zinc, RBC magnesium, TSH, Free T3, Free T4, TPO antibodies, a
          lipid panel with lipoprotein(a), fasting glucose, hemoglobin A1c, fasting insulin, a
          hepatic function panel with GGT, hs-CRP, and homocysteine. It requires an overnight fast,
          and results typically take about two weeks. Additional targeted tests, such as sex
          hormones or a complete iron panel, are added when your history calls for them. That is how
          a 60-minute intake and a well-chosen panel can answer more than several piecemeal visits.
        </P>
        <H3>The Biotin Problem</H3>
        <P>
          If you take a hair, skin, and nails supplement, check the label for biotin. This matters
          for testing. The FDA has warned that biotin, often found in dietary supplements, can
          significantly interfere with certain lab tests and cause incorrect results that may go
          undetected, and it has continued to receive adverse event reports of falsely low troponin
          results, a test used to diagnose heart attacks.
          <Cite k="fda-biotin" /> Biotin is also a component of many immunoassays, and ingestion has
          been reported to interfere with both thyroid and non-thyroid tests, including a case of
          factitious Graves' disease caused by assay interference.
          <Cite k="elston2016" /> If you are taking biotin, tell whoever orders your labs and the
          lab itself, and ask how long to pause it before a blood draw. Many clinicians advise
          stopping for several days.
        </P>
        <H3>Tests I Do Not Rely On</H3>
        <P>
          I do not use hair mineral analysis to assess nutritional status, and I am wary of
          expensive "hair loss genetic tests" and generic online panels that are not connected to a
          clinician's interpretation. More testing is not always better testing. A modest,
          well-chosen set interpreted in the context of your story is more useful than a hundred
          markers with no plan.
        </P>
        <H3>Step 4: Reading the Results in Context</H3>
        <P>
          A lab result is not a verdict. It is a piece of evidence. A ferritin of 25 in a woman with
          heavy periods and a two-month shedding episode tells a different story from a ferritin of
          25 in a woman with no bleeding and pattern thinning of five years. A TSH of 3.8 in a woman
          with cold intolerance, constipation, and eyebrow thinning means something different than
          the same number in an asymptomatic woman. I use both conventional and narrower functional
          ranges, and I try to be explicit about which is which and why, because you deserve to
          understand my reasoning and not just receive numbers.
        </P>
        <H3>Step 5: A Layered, Sequenced Plan</H3>
        <P>The plan that follows is layered, and the order matters.</P>
        <OL
          items={[
            <>
              <strong>Remove or address triggers.</strong> Medications reviewed with the prescriber,
              rapid weight loss slowed and protein raised, illness recovered from, sleep and stress
              addressed.
            </>,
            <>
              <strong>Correct measurable deficiencies.</strong> Iron, vitamin D, B12, and others, to
              the extent the labs and history justify it, with a recheck in three months.
            </>,
            <>
              <strong>Treat contributing conditions.</strong> Thyroid dysfunction, insulin
              resistance, perimenopausal symptoms, PCOS.
            </>,
            <>
              <strong>Consider evidence-based hair treatments where appropriate.</strong> For
              pattern hair loss, this is where topical or oral options and specialist procedures
              come in (next section).
            </>,
            <>
              <strong>Protect and track.</strong> Gentle hair care, quarterly photographs, and a
              plan for what success looks like at 3, 6, and 12 months.
            </>,
          ]}
        />
        <P>
          For women who want this level of investigation as part of a broader plan for energy,
          weight, sleep, and hormones, our{" "}
          <Link to="/approach" className={LINK}>
            approach page
          </Link>{" "}
          describes how a 60-minute{" "}
          <Link to="/clarity-session" className={LINK}>
            Root Cause Intake
          </Link>{" "}
          and follow-up care work together, and the{" "}
          <Link to="/what-we-treat" className={LINK}>
            conditions we treat
          </Link>{" "}
          page shows how hair fits alongside fatigue, brain fog, thyroid, and metabolic health. We
          do not bill insurance, and care is paid for directly, with HSA and FSA payment accepted.
          The full details are on our{" "}
          <Link to="/services" className={LINK}>
            services page
          </Link>
          .
        </P>
      </section>

      <section id="reading-your-labs">
        <H2>Reading Your Lab Results in Plain Language</H2>
        <Fig
          src={highlightImg}
          alt="Woman highlighting a printed lab report beside a laptop to understand ferritin, vitamin D, and thyroid results"
        />
        <P>
          One of the most disempowering experiences in healthcare is receiving a portal message that
          says "your labs are normal" without any sense of what "normal" means or how it was
          decided. So let me demystify a few of the numbers most relevant to hair. I am not asking
          you to interpret your own results in isolation. I am asking you to become a better partner
          in the conversation.
        </P>
        <H3>What "Normal" Actually Means on a Lab Report</H3>
        <P>
          A laboratory reference range is typically defined statistically, as the range that covers
          about 95 percent of a reference population. It is not the range in which you feel best or
          in which your hair grows best. A value can be "in range" and still be low for you,
          particularly at the bottom of the range. Ranges also differ between laboratories, so when
          comparing results over time, use the same lab whenever possible and always look at the
          units.
        </P>
        <H3>Ferritin</H3>
        <P>
          Many laboratories list a lower limit for ferritin in women somewhere around 15 nanograms
          per milliliter, though this varies. The hair research points to higher numbers than that.
          Studies of women with hair loss found mean ferritin levels in the teens to the 20s in
          those with telogen effluvium or pattern loss, compared with the 40s in controls, and
          proposed cut-offs near 28 to 29 micrograms per liter.
          <Cite k="rasheed2013" /> Rushton recommended 70 micrograms per liter as a target with
          normal inflammation markers.
          <Cite k="rushton2002" /> Trost and colleagues remind us that the evidence for treating
          iron deficiency in the absence of anemia is not settled.
          <Cite k="trost2006" /> My practical reading: a ferritin below about 30 in a woman who is
          shedding deserves attention and an explanation. A number between 30 and 70 is a gray zone
          that I interpret alongside symptoms, bleeding history, and inflammation. And a result that
          looks fine may be falsely reassuring if hs-CRP is elevated.
        </P>
        <H3>Vitamin D</H3>
        <P>
          The Endocrine Society defines vitamin D deficiency as a 25-hydroxyvitamin D level below 20
          nanograms per milliliter.
          <Cite k="holick2011" /> In the hair study by Rasheed and colleagues, proposed cut-offs for
          hair loss were about 41 nmol/L for telogen effluvium and 68 nmol/L for pattern loss, which
          convert to roughly 16 and 27 nanograms per milliliter.
          <Cite k="rasheed2013" /> Vitamin D also varies with the season, and levels in Michigan and
          Wisconsin are typically lowest at the end of winter, so when you test matters. If you test
          in March and you are low, it is not surprising. If you test in September after a summer
          outdoors, a normal level does not tell you where you were in February.
        </P>
        <H3>Thyroid Markers</H3>
        <P>
          TSH is the standard screen. A fuller picture includes Free T4, Free T3, and thyroid
          peroxidase antibodies, which can identify autoimmune thyroid disease before TSH changes.
          Our{" "}
          <Link to="/blog/normal-tsh-hypothyroid-symptoms-michigan-wisconsin" className={LINK}>
            thyroid guide
          </Link>{" "}
          gives the reference ranges used in functional practice compared with conventional ranges,
          and explains why a TSH in the upper part of the normal range can be significant for some
          women.
        </P>
        <H3>Fasting Insulin, Glucose, and A1c</H3>
        <P>
          Fasting glucose and A1c can stay in range for years while fasting insulin rises. There is
          no single universally agreed cut-off for fasting insulin, and different clinicians use
          different thresholds, so the most useful approach is to interpret insulin together with
          glucose, triglycerides, waist circumference, and symptoms, and to track it over time. If
          the number is high, that is a reason to work on sleep, strength training, and
          protein-forward meals, and not a reason for alarm.
        </P>
        <H3>Vitamin B12, hs-CRP, and Others</H3>
        <P>
          B12 results in the low-normal range can still be associated with symptoms in some people,
          and when the result is borderline, additional markers such as homocysteine can help.
          hs-CRP is a general marker of inflammation and helps interpret ferritin. Neither is
          specific to hair, but both add context.
        </P>
        <H3>Track Your Results Like a Project</H3>
        <P>
          Ask for copies of every result, and keep them in one place. A simple table like the one
          below makes trends visible, which is often more informative than any single value.
        </P>
        <DataTable
          head={[
            "Marker",
            "Date drawn",
            "My result and units",
            "Lab reference range",
            "Notes and follow-up",
          ]}
          rows={[
            ["Ferritin", "", "", "", "Recheck in about 3 months if treating"],
            ["25-hydroxyvitamin D", "", "", "", "Note the season"],
            ["TSH, Free T4, Free T3, TPO antibodies", "", "", "", "Bring all four, not only TSH"],
            ["Fasting insulin, glucose, A1c", "", "", "", "Same fasting conditions each time"],
            ["Vitamin B12", "", "", "", "Note if on metformin or acid suppressors"],
            ["hs-CRP", "", "", "", "Interpret ferritin alongside it"],
          ]}
        />
        <P>
          A few practical tips for getting accurate labs: fast if instructed, draw in the morning
          when possible, stay well hydrated, pause biotin per your clinician's and the lab's advice,
          and note where you are in your menstrual cycle if you are still cycling, since some
          hormone results depend on timing.
        </P>
      </section>

      <section id="treatments">
        <H2>Treatments: What the Evidence Actually Supports</H2>
        <Fig
          src={topicalImg}
          alt="Applying a clear topical scalp treatment along the hair part with a dropper"
        />
        <P>
          Now to the question you may have skipped ahead for. What actually grows hair, and how
          well? I will go through the main options with the evidence for each, and I will try hard
          not to oversell. Most of these treatments work by slowing or reversing follicle
          miniaturization, which is slow, so expect six to twelve months before you can judge the
          result. The AAD says the same about minoxidil: it must be used continuously for about six
          to twelve months before you know how well it will work.
          <Cite k="aad-fphl" />
        </P>
        <DataTable
          head={["Treatment", "Best suited to", "What the evidence shows", "Key cautions"]}
          rows={[
            [
              "Topical minoxidil 2% or 5%",
              "Female pattern hair loss; chronic telogen effluvium",
              "FDA-approved for women; better than placebo in a 48-week randomized trial",
              "Needs continuous use; scalp irritation; unwanted facial hair; not for use in pregnancy",
            ],
            [
              "Low-dose oral minoxidil (off-label)",
              "Pattern loss, when topical fails or is poorly tolerated",
              "Effective and well tolerated in reviews; large retrospective safety series",
              "Requires screening; hypertrichosis, dizziness, fluid retention; prescriber supervision",
            ],
            [
              "Spironolactone (off-label)",
              "Pattern loss, especially with androgen signs",
              "Observational data suggest benefit; randomized data limited",
              "Not for pregnancy; potassium and blood pressure monitoring",
            ],
            [
              "Finasteride or dutasteride (off-label)",
              "Postmenopausal pattern loss; some scarring alopecias",
              "Used off-label; helped stabilize frontal fibrosing alopecia in a large review",
              "Must not be used in pregnancy or when pregnancy is possible without effective contraception",
            ],
            [
              "Platelet-rich plasma (PRP)",
              "Pattern loss, as an adjunct",
              "Meta-analysis of 43 randomized trials found improved density",
              "Out-of-pocket cost; protocols vary; needs repeat sessions",
            ],
            [
              "Low-level laser or light devices",
              "Pattern loss, as an adjunct",
              "Most small studies show improved counts; quality varies",
              "Devices differ widely; consistency required",
            ],
            [
              "Iron, vitamin D, thyroid correction",
              "Telogen effluvium with a documented deficiency",
              "Strong biological rationale; direct trials limited",
              "Treat real deficiencies only; avoid megadoses",
            ],
            [
              "Hair transplant",
              "Stable pattern loss with a good donor area",
              "Established surgical option for selected patients",
              "Diffuse thinning is often a poor fit; underlying loss continues",
            ],
          ]}
        />
        <H3>Topical Minoxidil: The Only FDA-Approved Option</H3>
        <P>
          Minoxidil is the foundation of pattern hair loss treatment in women. In a 48-week
          randomized, double-blind, placebo-controlled trial of 381 women aged 18 to 49 with female
          pattern hair loss, both 5 percent and 2 percent topical minoxidil produced greater
          increases in hair count than placebo, and the 5 percent solution was superior to 2 percent
          in the patients' own assessment of benefit.
          <Cite k="lucky2004" /> A once-daily 5 percent foam was compared with twice-daily 2 percent
          solution in a phase III trial, and it produced similar increases in hair count at 24 weeks
          (about 24 hairs per square centimeter for each), although it did not meet the study's
          formal noninferiority margin. Both were well tolerated.
          <Cite k="blume2016" /> The AAD notes that products with either 2 percent or 5 percent
          minoxidil are FDA approved for female pattern hair loss.
          <Cite k="aad-fphl" />
        </P>
        <P>
          What women should know before starting: it is a long-term treatment, and if you stop it
          the gains fade. Many women experience a temporary increase in shedding in the first weeks
          as follicles reset, which can be frightening if you are not warned in advance. It can
          cause scalp irritation, and unwanted hair growth on the face, especially with the 5
          percent strength. It should not be used during pregnancy or breastfeeding.
        </P>
        <H3>Low-Dose Oral Minoxidil</H3>
        <P>
          Over the last several years, oral minoxidil at very low doses (well below those used for
          high blood pressure) has moved from a curiosity to a mainstream off-label option. A review
          of 17 studies covering 634 patients found it to be an effective and well-tolerated
          alternative for healthy patients who have difficulty with topical formulations, while
          calling for larger randomized studies to identify the best dosing.
          <Cite k="randolph2021" /> A retrospective safety study of 1,404 patients found the most
          frequent adverse effect was hypertrichosis (15.1 percent), while systemic effects were
          infrequent: lightheadedness 1.7 percent, fluid retention 1.3 percent, tachycardia 0.9
          percent. Only 1.2 percent stopped because of systemic side effects, and no
          life-threatening events were observed. It was a retrospective study without a control
          group.
          <Cite k="vano2021" /> In 2025, a group of hair experts published consensus-style
          recommendations for the safe and effective use of topical and oral minoxidil.
          <Cite k="olsen2025" /> This is a prescription medication that needs a clinician who
          screens your blood pressure, heart history, and other medications, not a supplement you
          buy online.
        </P>
        <H3>Anti-Androgen Medications</H3>
        <P>
          Spironolactone, finasteride, and dutasteride are used off-label for female pattern hair
          loss, particularly when there are signs of androgen excess or after menopause. The 2026
          review lists these among the off-label therapies, and randomized data in women are scarce.
          <Cite k="kearney2026" /> A published analysis of women with female pattern hair loss
          examined their demographics and the effectiveness of spironolactone therapy.
          <Cite k="famenini2015" /> Because these drugs can harm a developing male fetus, they are
          contraindicated in pregnancy, which is a serious consideration for a woman who may still
          conceive. They are not first-line for everyone, and they are not something to start based
          on an article.
        </P>
        <H3>Platelet-Rich Plasma and Light-Based Devices</H3>
        <P>
          PRP involves drawing your blood, concentrating the platelets, and injecting them into the
          scalp. A 2025 meta-analysis of 43 randomized controlled trials with 1,877 participants
          found that activated PRP increased hair density and reduced recurrence compared with
          placebo, though it did not significantly change hair thickness. The authors also noted
          that non-activated PRP was associated with more adverse effects.
          <Cite k="anitua2025" /> It requires multiple sessions and is typically not covered by
          insurance. Low-level laser therapy has been studied in a review of 11 studies with 680
          patients, where nine of eleven studies assessing hair count or density found statistically
          significant improvement, but the authors advised caution in interpreting the findings.
          <Cite k="afifi2017" /> Both are best thought of as adjuncts to a medical treatment, not
          replacements.
        </P>
        <H3>Rosemary Oil and Other Natural Approaches</H3>
        <P>
          There is one small randomized comparison of rosemary oil with 2 percent minoxidil in 100
          people with androgenetic alopecia over six months: both groups showed a significant
          increase in hair count at six months, with no significant difference between them, and
          scalp itching was reported more often with minoxidil.
          <Cite k="panahi2015" /> That is intriguing, but it is a single small study, and it does
          not show that rosemary oil matches the treatments proven in larger trials. If you enjoy
          using diluted rosemary oil as a scalp massage, it is unlikely to hurt, aside from possible
          allergic reactions, but do not use it in place of treatment that has better evidence.
        </P>
        <H3>A Word on Hormone Therapy and Hair</H3>
        <P>
          As covered earlier, hormone therapy is not a hair loss treatment, and the evidence on its
          hair effects is inconsistent.
          <Cite k="desai2021" /> Think of it as a treatment for the symptoms it is approved for,
          with hair as a possible secondary observation.
        </P>
        <H3>Putting Treatments Together</H3>
        <P>
          The women who do best are usually not those who found one perfect treatment. They are the
          ones who did three things in parallel: removed the drivers of shedding, corrected the
          deficiencies that could be corrected, and started an evidence-based agent for pattern loss
          early enough to matter. If you have a mixed picture, and most women in their 40s do, a
          combination approach is standard. The sequence matters too. Correcting iron and treating a
          thyroid problem before starting minoxidil can prevent the disappointment of a treatment
          that seemed not to work when the real obstacle was something else.
        </P>
        <Callout title="What I want you to remember about hair treatments">
          <ul className="list-disc pl-5 space-y-2">
            <li>Set a 6 to 12 month horizon before judging any pattern hair loss treatment.</li>
            <li>
              Photograph your hair at baseline and every three months. Photos are more reliable than
              memory.
            </li>
            <li>
              Ask any clinic or company: what is the evidence, in women, for what you are selling?
            </li>
            <li>Beware anyone who guarantees full regrowth. No one can.</li>
          </ul>
        </Callout>
      </section>

      <section id="supplement-traps">
        <H2>Supplements: What Helps, What Wastes Money, What Can Backfire</H2>
        <P>
          The supplement aisle is where hair loss anxiety goes to be monetized. I say that with
          compassion, not cynicism. When you are frightened about your hair, a bottle with a
          confident label and a hopeful photo feels like action. And a few supplements genuinely
          help in specific circumstances. The trouble is that they are marketed to everyone, and for
          many women they do nothing, while for a few they cause harm. Let me be practical.
        </P>
        <Fig
          src={flatlayImg}
          alt="Flat lay of pumpkin seeds, Brazil nuts, avocado, lentils, and a notebook illustrating nutrient sources and careful supplement tracking for hair health"
        />
        <H3>The Golden Rule: Test First, Then Treat</H3>
        <P>
          Nearly every micronutrient supplement that has a credible connection to hair works by
          correcting a deficiency. If you are not deficient, adding more usually does not help, and
          can hurt. The 2019 review of vitamins and minerals in hair loss makes exactly this point:
          large placebo-controlled trials are needed to know whether supplementation improves hair
          in people who are both deficient and have hair loss.
          <Cite k="almohanna2019" /> Rushton is blunter: excessive intakes of nutritional
          supplements may actually cause hair loss and are not recommended in the absence of a
          proven deficiency.
          <Cite k="rushton2002" />
        </P>
        <H3>Biotin: The Best-Known, Least-Supported Supplement</H3>
        <P>
          Biotin is the most heavily marketed hair supplement in the world and the one with the
          weakest evidence in healthy people. A review of the literature found 18 reported cases of
          biotin use for hair and nail changes, and in every one the patient had an underlying
          condition that explained poor hair or nail growth. The authors concluded that research
          demonstrating efficacy is limited, that biotin may help in true biotin deficiency and in
          uncommon conditions such as uncombable hair, and that there is a lack of sufficient
          evidence for supplementation in healthy individuals.
          <Cite k="patel2017" /> True biotin deficiency is rare.
        </P>
        <P>
          Worse, biotin interferes with lab testing, as we discussed. If a woman is taking a
          high-dose biotin product and her thyroid results look strange, it can send the entire
          work-up in the wrong direction.
          <Cite k="elston2016" />
          <Cite k="fda-biotin" /> My advice for most women is simple: stop the biotin, get your labs
          done, and revisit only if a documented reason emerges.
        </P>
        <H3>Iron: Powerful When Needed, Risky When Guessed</H3>
        <P>
          Iron is the supplement most likely to help a woman whose ferritin is truly low, and the
          one most likely to be misused. Take it only after confirming low stores and identifying
          why. Timing and dosing are also more nuanced than they look: because daily doses can raise
          hepcidin, the hormone that limits iron absorption, researchers have tested alternate-day
          schedules in iron-depleted women, which is why alternate-day schedules are now widely
          discussed as an alternative to daily dosing.
          <Cite k="stoffel2017" /> Ask your clinician which approach fits you, and recheck your
          ferritin in about three months.
        </P>
        <H3>Selenium and Vitamin A: The Cautionary Tales</H3>
        <P>
          Two nutrients deserve special respect because excess causes the very problem you are
          trying to fix. The most striking example is selenium. In an outbreak investigation
          reported in the Archives of Internal Medicine, 201 people in ten states developed selenium
          poisoning from a liquid dietary supplement that contained 200 times the labeled amount of
          selenium. The median estimated dose consumed was 41,749 micrograms per day, compared with
          a recommended dietary allowance of 55. The most frequently reported symptoms included
          diarrhea (78 percent), fatigue (75 percent), hair loss (72 percent), joint pain (70
          percent), and nail discoloration or brittleness (61 percent). At 90 days, hair loss
          persisted in 29 percent.
          <Cite k="macfarquhar2010" /> That was an extreme, contaminated product, but it illustrates
          a general truth: more is not better. Selenium content in foods such as Brazil nuts varies
          widely, so eating them in large quantities is not a safe way to "boost" selenium. The same
          caution applies to vitamin A, especially retinol-containing supplements and some acne or
          skin medications.
        </P>
        <H3>Zinc</H3>
        <P>
          Zinc is the mineral most women self-prescribe. As noted, Rushton found no evidence
          supporting the popular idea that low serum zinc causes hair loss,
          <Cite k="rushton2002" /> and in the large telogen effluvium series only about 2 percent of
          those tested were low.
          <Cite k="yorulmaz2022" /> If your level is low, correct it. If it is normal, extra zinc
          can deplete copper and cause other problems.
        </P>
        <H3>L-Lysine, Collagen, and Protein Powders</H3>
        <P>
          Rushton's review noted that the amino acid L-lysine appears important in women with
          increased shedding, with double-blind data confirming an earlier open study in which a
          significant proportion of women responded to L-lysine plus iron therapy.
          <Cite k="rushton2002" /> That evidence is old and limited, but it fits a broader
          principle: adequate total protein matters. I am not aware of large, independent trials
          showing that collagen peptides increase hair density, although a collagen or protein
          powder can be a convenient way to fill a real protein gap. If you use one, choose a
          product tested by a third party and do not expect it to change your hair on its own.
        </P>
        <H3>Branded "Hair Vitamins" and Nutraceuticals</H3>
        <P>
          Some multi-ingredient hair supplements have been tested in small randomized trials. One
          example is a six-month, placebo-controlled study of 70 perimenopausal, menopausal, and
          postmenopausal women with self-perceived thinning that tested a specific branded
          supplement. It reported significant increases in terminal and total hair counts at 90 and
          180 days, and a 32 percent reduction in shedding by day 180 compared with placebo.
          <Cite k="ablon2021" /> That is encouraging, and I take it seriously as a data point. But
          it is one product, one modest trial, and I would want to see independent replication in
          larger trials before calling it established. If a woman wants to try a product like this
          and can afford it, it is a reasonable experiment provided it does not contain biotin at a
          dose that will disrupt her labs, does not exceed safe upper limits for any nutrient, and
          does not replace evaluation and treatment.
        </P>
        <H3>How to Read a Hair Supplement Label</H3>
        <UL
          items={[
            <>Check for biotin, and stop it before any blood draw.</>,
            <>
              Add up selenium, zinc, vitamin A, and vitamin E across every product you take, since
              overlapping products can push you over safe upper limits.
            </>,
            <>Be wary of "proprietary blends" that hide the amount of each ingredient.</>,
            <>Look for third-party testing seals from independent programs.</>,
            <>
              Ignore before-and-after photos, testimonials, and claims of "clinically proven"
              without a citation you can look up.
            </>,
            <>
              Tell your clinician everything you take, including herbs, because some interact with
              medications.
            </>,
          ]}
        />
      </section>

      <section id="four-women">
        <H2>Four Women, Four Different Answers</H2>
        <Fig
          src={fourWomenImg}
          alt="Four women of different ages and backgrounds chatting at a Midwest farmers market, representing four different hair loss stories"
        />
        <P>
          To make all of this concrete, here are four composite scenarios drawn from patterns I see
          repeatedly. They are illustrations and not descriptions of specific individuals, and the
          numbers are representative, not real patient data. What I hope you notice is how different
          the first conversation needs to be for each of them.
        </P>
        <H3>Renee, 39, Traverse City: The Shedding That Followed the Weight Loss</H3>
        <P>
          Renee is a high school teacher who started tirzepatide in the spring. By August she had
          lost 34 pounds and was delighted. By November her ponytail felt half its old thickness and
          the shower drain looked alarming. She had eaten mostly salads and yogurt for months
          because she was rarely hungry, and she had been a vegetarian for years. Her primary care
          clinician checked a TSH and hemoglobin, both normal, and told her hair loss is a known
          side effect.
        </P>
        <P>
          When we talked, the timeline was obvious: the shedding began roughly four months into the
          fastest phase of weight loss. Her ferritin was 14, her vitamin D was 17 in November in
          northern Michigan, her B12 was low-normal, and her protein intake averaged under 50 grams
          a day. She had a telogen effluvium, driven by rapid weight loss and low protein, on top of
          years of borderline iron. The plan was to add a protein target at each meal with a
          resistance training routine, replete iron and vitamin D under supervision, coordinate with
          her prescriber about pacing, and photograph monthly. She was not told to stop her
          medication. By month seven the shedding had settled, and by month twelve most of the
          density had returned. Her part remained slightly wider than in old photographs, and we
          agreed to monitor it and consider a pattern-hair-loss treatment if it changed.
        </P>
        <H3>Alicia, 46, Detroit: The Thinning Everyone Blamed on Her Hairstyle</H3>
        <P>
          Alicia has worn braids and twist-outs for most of her adult life. For two years she
          noticed the crown of her head becoming thinner and sometimes tender. Every provider she
          mentioned it to said the same thing: it was tension from her styles, and she should switch
          to looser ones. She switched. The thinning did not stop. At a routine visit her A1c came
          back at 5.9 percent.
        </P>
        <P>
          Central thinning, scalp tenderness, and rising blood sugar together are exactly the
          pattern in which I stop and say: this needs a dermatologist who will look at the scalp
          with magnification and consider a biopsy, because central centrifugal cicatricial alopecia
          is the most common scarring alopecia in Black women and is often diagnosed late.
          <Cite k="kyei2011" /> I supported the metabolic side, with fasting insulin, lipid testing,
          and a nutrition and movement plan, and encouraged her to see a hair specialist promptly. A
          biopsy confirmed early CCCA, and anti-inflammatory treatment prevented further
          progression. What made the difference was that someone stopped attributing it to styling
          and asked whether a process was going on in the scalp itself.
        </P>
        <H3>Jill, 51, Eau Claire: The Perimenopausal Part</H3>
        <P>
          Jill, a nurse who works night shifts, noticed her part widening over about eighteen
          months. Her periods had become erratic, she woke at 3 a.m. most nights, her energy was
          flat, and she had gained weight around her middle. Her TSH was 3.4, called normal. Her
          ferritin was 38, her vitamin D was 19, and on a fuller panel her thyroid peroxidase
          antibodies were elevated and her fasting insulin was high.
        </P>
        <P>
          This was a layered picture: early Hashimoto's thyroiditis, insulin resistance, low vitamin
          D, and perimenopause, on top of a genetic tendency toward pattern thinning. None of those
          numbers looked dramatic alone. Together they made sense. Her plan included vitamin D
          repletion, thyroid support and monitoring, blood sugar and sleep work, a discussion of
          perimenopausal symptom options, and a topical minoxidil started early, since her part was
          clearly widening. It took most of a year, with a shedding phase in the first weeks of
          minoxidil that we had warned her about, before she and her family noticed the change. Her
          part did not return to what it was at 35. It stopped widening, and it filled in.
        </P>
        <H3>Megan, 36, Grand Rapids: Fourteen Months After the Baby</H3>
        <P>
          Megan's second child was fourteen months old. She had been told that postpartum shedding
          ends by twelve months, and it had not. She was exhausted, her periods were heavy again,
          and she was also breastfeeding on and off. She had a history of irregular cycles in her
          twenties that was never explained.
        </P>
        <P>
          Postpartum shedding usually happens within three to six months after delivery,
          <Cite k="gizlenti2014" /> so shedding still active at fourteen months meant something else
          was going on. Her ferritin was 9. Heavy periods and two pregnancies close together had
          drained her iron. A fuller hormone panel raised the question of underlying PCOS, which
          would explain the old cycle irregularity and could be adding an androgen-driven thinning
          component to the picture. The plan started with iron repletion, evaluation of the heavy
          bleeding with her gynecologist, and the PCOS work-up described in our{" "}
          <Link to="/blog/pcos-weight-resistance-women-30s-michigan-wisconsin" className={LINK}>
            PCOS guide
          </Link>
          . Her shedding slowed within a few months of correcting iron and never returned to the
          earlier peak. Her hair was slower to recover than her energy, which is typical.
        </P>
        <P>
          The lesson across all four: same complaint, four different explanations, four different
          plans.
        </P>
      </section>

      <section id="timeline">
        <H2>The 12-Month Timeline: What Recovery Really Looks Like</H2>
        <Fig
          src={springWalkImg}
          alt="Woman walking a Wisconsin park path in spring with new green leaves, representing gradual hair recovery over twelve months"
        />
        <P>
          One of the most helpful things I can do for a woman starting this process is to give her
          an honest timeline, because the biggest cause of discouragement is expecting results in
          weeks. Hair grows about a centimeter a month, follicles cycle on a months-long delay, and
          treatments take at least half a year. Here is the rhythm I describe.
        </P>
        <DataTable
          head={["When", "What is happening", "What you might notice"]}
          rows={[
            [
              "Weeks 0 to 4",
              "Evaluation, timeline, labs, baseline photos, first changes to nutrition, sleep, and hair care",
              "Probably no visible change. Relief at having a plan is common.",
            ],
            [
              "Months 1 to 3",
              "Deficiencies being corrected, triggers being addressed, treatments started",
              "Shedding may still be high. Minoxidil can cause a temporary increase in shedding early on.",
            ],
            [
              "Month 3",
              "Repeat key labs (ferritin, vitamin D, thyroid as needed); adjust the plan",
              "Shedding often begins to slow if a trigger was removed.",
            ],
            [
              "Months 3 to 6",
              "New growth begins as follicles re-enter the growth phase",
              "Short baby hairs at the hairline and part. Less hair in the brush.",
            ],
            [
              "Month 6",
              "A key checkpoint for pattern hair loss treatments",
              "Compare photos. The part should be no wider, and often a little better.",
            ],
            [
              "Months 9 to 12",
              "Density gradually improves; hair lengthens",
              "Ponytail circumference improves. Others may start to comment.",
            ],
            [
              "Beyond 12 months",
              "Maintenance of gains; ongoing treatment for pattern loss",
              "Stability is a success. Stopping pattern treatments usually allows loss to resume.",
            ],
          ]}
        />
        <H3>Why the Setbacks Happen</H3>
        <P>
          The road is not straight, and it helps to know the usual detours in advance. A new
          illness, a stressful season, another rapid weight change, a change in medication, or a
          return of heavy periods can each restart a shedding cycle two to four months later. Women
          who understand this delay do not interpret it as failure. They recognize a new trigger,
          tell their clinician, and adjust. And a shedding flare in September following a summer of
          low iron, high stress, and dieting is not evidence that the plan "did not work."
        </P>
        <H3>What Success Really Means</H3>
        <P>
          For telogen effluvium, success usually means a return to close to your previous density.
          For pattern hair loss, success is a spectrum: stabilization is a real win, a modest
          increase in density is a good result, and dramatic regrowth is uncommon. I would rather
          you hear that from me now than discover it in month eight and conclude that treatment
          failed. Women who go into treatment expecting to stop the slide and maybe regain a portion
          of what was lost are the ones who tend to feel satisfied.
        </P>
      </section>

      <section id="myths">
        <H2>Twelve Myths About Women's Hair Loss</H2>
        <Fig
          src={mythsImg}
          alt="Woman looking skeptically at her phone while evaluating hair loss myths and supplement claims"
        />
        <H3>1. "Washing or brushing my hair makes it fall out."</H3>
        <P>
          Hairs that are already at the end of their cycle simply come out when you wash or brush.
          Skipping the shower does not keep them in; it stores them up for the next wash and can
          make the loss look worse. Rushton's review makes this point directly.
          <Cite k="rushton2002" />
        </P>
        <H3>2. "Wearing a hat causes hair loss."</H3>
        <P>
          There is no good evidence that ordinary hats cause hair loss. Very tight headgear worn
          constantly could contribute to traction, but a winter hat in Marquette is not the problem.
        </P>
        <H3>3. "Biotin is the answer."</H3>
        <P>
          Biotin has weak evidence outside true deficiency and can interfere with lab tests.
          <Cite k="patel2017" />
          <Cite k="fda-biotin" />
        </P>
        <H3>4. "Once hair is gone, it's gone."</H3>
        <P>
          Not for most non-scarring causes. Telogen effluvium is generally reversible, and pattern
          hair loss can often be slowed and partly reversed with treatment. Only when follicles are
          scarred is regrowth generally not possible, which is exactly why scarring conditions need
          early attention.
        </P>
        <H3>5. "Pattern hair loss only happens to older women."</H3>
        <P>
          Norwood found female androgenetic alopecia quite common starting in the late 20s.
          <Cite k="norwood2001" /> Birch found it in 6 percent of women under 50.
          <Cite k="birch2001" /> It becomes more common with age, but it does not wait for
          menopause.
        </P>
        <H3>6. "My TSH and hemoglobin were normal, so my thyroid and iron are fine."</H3>
        <P>
          TSH alone can miss early autoimmune thyroid disease, and hemoglobin is a screening test
          while ferritin confirms iron deficiency.
          <Cite k="trost2006" /> A normal hemoglobin can sit on top of empty iron stores.
        </P>
        <H3>7. "Hair loss in women means high testosterone."</H3>
        <P>
          Sometimes, as in PCOS, but many women with pattern hair loss have completely normal
          circulating androgens. Follicle sensitivity matters as much as the blood level.
          <Cite k="kearney2026" />
        </P>
        <H3>8. "It's just stress."</H3>
        <P>
          Stress can trigger shedding, but "just stress" is a diagnosis of exclusion, not a starting
          point. If it were the only cause, everyone under stress would lose hair the same way.
        </P>
        <H3>9. "It's just aging."</H3>
        <P>
          Hair density does fall with age, from about 293 hairs per square centimeter at 35 to 211
          at 70 in one study,
          <Cite k="birch2001" /> but visible thinning in your 30s, 40s, or early 50s is worth
          evaluating, not dismissing.
        </P>
        <H3>10. "Hair in the shower drain means I'm going bald."</H3>
        <P>
          A little, yes. A lot, for a limited time, is often a temporary telogen effluvium and
          reverses. Context and timeline matter more than the volume in the drain.
        </P>
        <H3>11. "Hormone therapy will regrow my hair."</H3>
        <P>
          It is not an established hair treatment, and evidence on its hair effects is inconsistent.
          <Cite k="desai2021" />
        </P>
        <H3>12. "The more expensive the treatment, the better."</H3>
        <P>
          Some of the best-supported options, such as topical minoxidil, are inexpensive. Ask for
          evidence in women, not for a premium package.
        </P>
      </section>

      <section id="red-flags">
        <H2>Red Flags: When to See a Dermatologist Quickly</H2>
        <Fig
          src={redFlagsImg}
          alt="Dermatologist and patient reviewing a scalp photo on a tablet during an urgent hair loss evaluation"
        />
        <P>
          Most women can begin with the root-cause evaluation described above. But some features
          should make you seek in-person dermatology care promptly, ideally within weeks, and not
          wait for labs.
        </P>
        <UL
          items={[
            <>
              <strong>Patchy, round or oval bald spots</strong> that appeared suddenly, which
              suggest alopecia areata.
              <Cite k="pratt2017" />
            </>,
            <>
              <strong>
                Redness, scale, crusting, pustules, or visible loss of follicle openings
              </strong>{" "}
              on the scalp, which can indicate an inflammatory or scarring process.
            </>,
            <>
              <strong>Scalp burning, pain, or persistent itching</strong> with hair loss.
            </>,
            <>
              <strong>A receding frontal hairline together with eyebrow or eyelash loss,</strong>{" "}
              the classic pattern of frontal fibrosing alopecia.
              <Cite k="vano2014" />
            </>,
            <>
              <strong>Central crown thinning with a smooth, shiny scalp</strong> or tenderness,
              especially in Black women, where CCCA is a concern.
              <Cite k="kyei2011" />
            </>,
            <>
              <strong>Sudden, severe hair loss</strong> after a new medication, with fever, rash, or
              mouth sores.
            </>,
            <>
              <strong>Hair loss with unexplained weight loss, tremor, or palpitations,</strong>{" "}
              which may suggest an overactive thyroid, or with unusual fatigue, cold intolerance,
              and constipation, which may suggest an underactive one.
            </>,
            <>
              <strong>Signs of significant androgen excess</strong> such as a deepening voice, rapid
              new facial or body hair growth, or clitoral enlargement, which need prompt medical
              evaluation.
            </>,
            <>
              <strong>
                Iron deficiency in a postmenopausal woman, or in any woman with black stools,
                unexplained weight loss, or a change in bowel habits,
              </strong>{" "}
              which requires evaluation for a bleeding source and should not simply be treated with
              iron.
              <Cite k="trost2006" />
            </>,
          ]}
        />
        <P>
          If any of these apply, tell your clinician exactly which and how long. If you are unsure,
          send photographs to your clinic and ask. A quick look is always better than a long wait.
        </P>
      </section>

      <section id="emotional-weight">
        <H2>The Emotional Weight of Thinning Hair</H2>
        <Fig
          src={lakeImg}
          alt="Confident Michigan woman in her early 50s walking on a Lake Michigan beach at sunset, embracing her natural hair at midlife"
        />
        <P>
          I want to spend a few minutes on something that clinical articles often skip. Hair loss in
          women is emotionally heavy, and the weight is routinely minimized. You may be a person who
          does not think of yourself as appearance-focused, and you may still find yourself avoiding
          photographs, choosing seats away from bright lights, or feeling a jolt when someone stands
          behind you. That is a normal response to a change in something tied to identity,
          femininity, aging, and health.
        </P>
        <P>
          The literature agrees. Women with hair loss report diminished self-esteem, impaired social
          functioning, and reduced quality of life, often to a degree greater than that seen in men
          with the same condition.
          <Cite k="kearney2026" /> Women with scarring alopecias carry an additional burden of
          uncertainty and fear, since the loss may be permanent. None of this is vanity.
        </P>
        <H3>What Helps Emotionally</H3>
        <UL
          items={[
            <>
              <strong>Naming it.</strong> Tell one trusted person. Secrecy amplifies distress.
            </>,
            <>
              <strong>Getting a plan.</strong> Much of the anxiety is uncertainty. A structured plan
              with a timeline gives the mind something to hold.
            </>,
            <>
              <strong>Camouflage without shame.</strong> Root touch-up powders, tinted fibers, a
              softer part, a haircut that gives lift, or a well-fitted topper are all legitimate
              tools while treatment works. Using them is not denial.
            </>,
            <>
              <strong>Limiting the mirror and the scroll.</strong> Photograph monthly, not daily.
              Avoid late-night image searches for other people's results.
            </>,
            <>
              <strong>Protecting sleep and movement.</strong> Both support hormone balance, mood,
              and hair.
            </>,
            <>
              <strong>Professional support when it is heavy.</strong> If your mood is low, if you
              are avoiding social events, or if anxiety about your hair is taking over your days,
              please talk to a therapist or your clinician. Psychological support is part of good
              hair loss care. If you are ever in crisis, call or text 988 in the United States.
            </>,
          ]}
        />
        <P>
          I will also say this. The women who recover the most confidence are not always the ones
          whose hair grows back the most. They are the ones who feel they understood what was
          happening, took reasonable action, and stopped fighting their own body. That is a
          reachable goal, whatever your final density looks like.
        </P>
      </section>

      <section id="choosing-provider">
        <H2>Building Your Team and Choosing a Provider in Michigan or Wisconsin</H2>
        <Fig
          src={careTeamImg}
          alt="Nurse practitioner, dermatologist, and dietitian collaborating as a hair loss care team"
        />
        <P>
          Hair loss care in midlife is rarely a one-person job. The most successful patients I see
          assemble a small team, each member covering a piece of the picture. And because this is a
          field with a lot of marketing noise, it is worth knowing how to tell a trustworthy
          provider from a persuasive one, wherever you end up.
        </P>
        <H3>Who Might Be on Your Team</H3>
        <UL
          items={[
            <>
              <strong>A clinician who coordinates the whole picture.</strong> This might be a
              primary care physician, a nurse practitioner, or a functional medicine practitioner.
              Their role is the timeline, the labs, the nutritional and metabolic work, the
              medication review, and knowing when to refer.
            </>,
            <>
              <strong>A dermatologist with hair disorder experience,</strong> for scalp exams,
              trichoscopy, biopsy, scarring or autoimmune hair loss, and procedures such as PRP or
              intralesional injections.
            </>,
            <>
              <strong>A gynecologist or menopause-informed clinician,</strong> for heavy bleeding,
              PCOS, perimenopausal symptoms, and hormone therapy decisions. The Menopause Society
              maintains a directory of certified menopause practitioners, which can help if your
              local options are limited.
            </>,
            <>
              <strong>A registered dietitian,</strong> especially for restrictive eating, vegetarian
              or vegan diets, GLP-1 use, or bariatric surgery.
            </>,
            <>
              <strong>A therapist,</strong> for the emotional weight of hair loss and the stress
              that drives shedding.
            </>,
            <>
              <strong>A stylist who is experienced with thinning hair,</strong> who can suggest cuts
              and color approaches that gently reduce breakage and make the most of the density you
              have.
            </>,
          ]}
        />
        <H3>Green Flags in a Hair Loss Provider</H3>
        <UL
          items={[
            <>They ask for a detailed timeline and listen to it.</>,
            <>
              They look at your scalp, or, in telehealth, ask for and examine good photographs, and
              they are candid about the limits of a remote exam.
            </>,
            <>They order targeted tests and explain what each is for.</>,
            <>
              They tell you what the evidence does and does not show, including the limits of the
              evidence in women.
            </>,
            <>
              They distinguish between shedding and pattern hair loss and set separate expectations
              for each.
            </>,
            <>
              They refer to a dermatologist when the picture calls for it, without defensiveness.
            </>,
            <>
              They give you a realistic timeline of six to twelve months, and say that stabilization
              is a success.
            </>,
            <>
              They are transparent about prices, and about which parts are covered or not covered by
              insurance.
            </>,
          ]}
        />
        <H3>Red Flags</H3>
        <UL
          items={[
            <>Guarantees of full regrowth.</>,
            <>Diagnosing from a photo alone with no history and no labs.</>,
            <>Selling only their own proprietary product line, with ingredient amounts hidden.</>,
            <>
              Language such as "detox," "reset," or "toxin cleanse" as the main explanation for hair
              loss.
            </>,
            <>Pressure to prepay for a large package on the first visit.</>,
            <>
              Dismissal of scalp burning, pain, patchy loss, or eyebrow loss as "just stress"
              without a scalp exam.
            </>,
            <>
              Reliance on hair mineral analysis or unvalidated genetic panels to direct treatment.
            </>,
            <>
              Starting anti-androgen or oral minoxidil therapy without asking about pregnancy
              potential, blood pressure, and your medication list.
            </>,
          ]}
        />
        <H3>Checking Credentials and Telehealth Licensing</H3>
        <P>
          For any telehealth provider, confirm that they are licensed in the state where you live at
          the time of your visit. Michigan's Department of Licensing and Regulatory Affairs (
          <XL href="https://www.lara.michigan.gov">LARA</XL>) and Wisconsin's Department of Safety
          and Professional Services (<XL href="https://dsps.wi.gov">DSPS</XL>) maintain the state
          licensing systems, and both offer ways to verify a clinician's license. Ask what can be
          done by video, where labs are drawn, how prescriptions are handled if they are needed, and
          what happens if you need a scalp exam in person.
        </P>
        <P>
          I should be transparent that I have a stake in this question. Novaleo is a telehealth
          practice, and I believe in what we do. But I would rather you choose the right provider
          for your particular hair than choose ours for the wrong reason. If your picture points
          primarily to a scarring or autoimmune scalp condition, the right first appointment is with
          a dermatologist, and I will tell you so. If your picture points to iron, thyroid,
          hormonal, metabolic, or nutritional drivers, a root-cause evaluation is where the biggest
          wins usually are, and it is where I can help.
        </P>
      </section>

      <section id="prepare">
        <H2>How to Prepare for Your First Visit</H2>
        <Fig
          src={preparePhotoImg}
          alt="Woman photographing her own hair part by a bright window to prepare for a hair loss evaluation"
        />
        <P>
          A prepared patient shortens the road. Here is a checklist I share with women booking a
          hair loss evaluation.
        </P>
        <H3>Bring or Send</H3>
        <UL
          items={[
            <>
              Photos from above the part, the crown, both temples, and the ponytail, taken in the
              same lighting. Add older photos from one, three, and five years ago if you have them.
            </>,
            <>
              Your timeline of illnesses, surgeries, medications, life stressors, weight changes,
              pregnancies, and menstrual patterns for the last 12 to 24 months.
            </>,
            <>
              A list of every medication, supplement, herb, and hair or scalp product you use, with
              doses. Highlight anything with biotin.
            </>,
            <>
              Any prior lab results, ideally the last two years, including thyroid, ferritin,
              vitamin D, A1c, and complete blood count.
            </>,
            <>
              A family history: hair loss on either side, thyroid disease, autoimmune disease,
              diabetes, early menopause.
            </>,
            <>
              Your usual daily food intake for three typical days, including protein sources,
              snacks, and any dieting.
            </>,
          ]}
        />
        <H3>Questions Worth Asking Any Clinician</H3>
        <OL
          items={[
            <>Do you think this is shedding, thinning, or both, and why?</>,
            <>Which tests do you recommend, and what will each one tell us?</>,
            <>If my results come back "normal," what is the next step?</>,
            <>
              Is there anything in my history that suggests I should see a dermatologist in person?
            </>,
            <>What are the treatment options for my pattern, and what is the evidence in women?</>,
            <>How will we measure whether it is working, and when?</>,
            <>
              What should I avoid, including supplements and treatments that may interfere with
              tests or medications?
            </>,
          ]}
        />
        <H3>How Care Works With Us</H3>
        <P>
          Most women begin with the free{" "}
          <Link to="/free-15-min-call-with-katie" className={LINK}>
            15-minute discovery call
          </Link>
          , a low-pressure conversation to decide the right next step. The{" "}
          <Link to="/clarity-session" className={LINK}>
            60-minute Root Cause Intake
          </Link>{" "}
          is where we build the timeline, review your history, and plan testing. If we do laboratory
          work, the Root Cause Lab Panel is ordered for a local draw. From there, follow-up visits
          and our longer program, described on the{" "}
          <Link to="/services" className={LINK}>
            services page
          </Link>
          , support the layered plan. If you would like a resource to read before your call, our
          free guide,{" "}
          <Link to="/free-guide" className={LINK}>
            What Your Labs Aren't Telling You
          </Link>
          , explains why a normal result does not always mean everything is fine, and you can learn
          more about me on the{" "}
          <Link to="/about" className={LINK}>
            about page
          </Link>
          . If you have questions about logistics, the{" "}
          <Link to="/contact" className={LINK}>
            contact page
          </Link>{" "}
          has our answers to common questions. More articles like this one are on our{" "}
          <Link to="/blog" className={LINK}>
            blog
          </Link>
          .
        </P>
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-10 my-10 text-center">
          <p className="font-display text-2xl md:text-3xl text-primary mb-4">
            Your hair has a story. Let's find the whole thing.
          </p>
          <p className="text-lg text-foreground/70 mb-6 max-w-xl mx-auto">
            Book your free 15-minute discovery call. No judgment, no generic advice about biotin,
            just a real conversation about what has been happening in your body and what to do
            first.
          </p>
          <Link to="/free-15-min-call-with-katie" className="btn-gold text-lg px-8 py-4">
            Book Your Free 15-Minute Discovery Call
          </Link>
        </div>
      </section>

      <section id="comprehensive-faq">
        <H2>Comprehensive FAQ</H2>
        <Fig
          src={faqImg}
          alt="Curious woman with a notepad and laptop in a small Wisconsin coffee shop, representing common hair loss questions"
        />
        <P>
          These are the questions women in Michigan and Wisconsin ask me most often about hair loss.
          The answers are also summarized for search engines, so you may see them appear in results.
        </P>
        {FAQS.map((f) => (
          <div key={f.q}>
            <H3>{f.q}</H3>
            <P>{f.a}</P>
          </div>
        ))}
      </section>

      <section id="closing-katies-note">
        <H2>A Personal Note from Katie</H2>
        <Fig
          src={noteImg}
          alt="Handwritten note card and tea beside a window overlooking a Lake Michigan sunrise"
        />
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-10 my-10 text-center">
          <p className="font-display text-2xl md:text-3xl text-primary mb-4">
            It was never just your hair.
          </p>
          <p className="text-lg text-foreground/70 mb-6 max-w-xl mx-auto">
            Book your free 15-minute discovery call and let's look at the whole picture, from your
            timeline to your labs to your scalp.
          </p>
          <Link to="/free-15-min-call-with-katie" className="btn-gold text-lg px-8 py-4">
            Book Your Free 15-Minute Discovery Call
          </Link>
        </div>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5 italic border-l-4 border-secondary/40 pl-6 my-8">
          A personal note from Katie:
        </p>
        <P>
          After more than twenty years in healthcare, there are a few conversations that I have had
          so many times that I could recite them. The hair conversation is one of them. It usually
          starts quietly. A woman finishes talking about her fatigue or her sleep or her weight, and
          then, almost as an aside, she says, "And my hair has been coming out." She says it the way
          you mention something you are a little embarrassed to care about. Then, if I am quiet for
          a moment, the rest comes. The photograph she avoided. The hairdresser who was too kind.
          The night she cried in the bathroom and did not tell anyone.
        </P>
        <P>
          I want to say something to that woman, and to you if you are her. It is not vain to care
          about this. It is not trivial. Your hair is part of how you meet the world, and losing
          some of it is a real loss, one that our culture asks women to absorb quietly.
        </P>
        <P>
          I also want to say something about the system. Most of the clinicians who dismissed your
          hair loss were not careless people. They had eleven minutes, a chart with a normal TSH,
          and no easy way to explain to you that hair loss in midlife is usually several things at
          once. But the result is the same: a woman told to be patient, or to try biotin, or that it
          is stress, while an iron deficiency goes uncorrected, a pattern loss progresses, or a
          scalp condition quietly scars. I have seen too many women wait a year or two for an answer
          that could have started in a single visit.
        </P>
        <P>
          What I have learned over these years is that hair loss is a wonderful example of why
          root-cause thinking matters. It is rarely one thing. It is usually a timeline, a handful
          of measurable factors, a set of hormonal and metabolic conditions, and a follicle that may
          or may not be more sensitive than average. When we take the time to lay those out on the
          table, something changes. The problem stops being a mysterious, personal failing and
          becomes a set of questions that can be answered one at a time.
        </P>
        <P>
          I also want to be honest, because I think you have had enough of false promises. I cannot
          promise that your hair will return to what it was at twenty-five. No one can. What I can
          tell you is that many of the causes we have talked about are identifiable and correctable,
          that pattern hair loss responds best to early and patient treatment, that scarring
          conditions need a specialist as soon as possible, and that women who understand what is
          happening and act on it almost always feel better, even before the hair does. The
          regaining of a sense of agency is real, and it counts.
        </P>
        <P>
          If you live in Michigan or Wisconsin, in a city or on a rural road where the nearest
          dermatology appointment is a long drive and a longer wait, I would be glad to help you
          take the first steps. We can gather your timeline, decide which labs make sense, look at
          what is happening across your thyroid, iron, hormones, and blood sugar, and figure out
          whether and when you need to see a dermatologist in person. Telehealth is not a compromise
          for this work. For the history, the testing plan, and the interpretation, it is often
          exactly the right format.
        </P>
        <P>
          And to the woman who has been quietly checking the part line in every mirror for months:
          you are not imagining it, you are not alone, and you are allowed to ask for a real answer.
          Reach out whenever you are ready.
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
            practice licensed in both Michigan and Wisconsin. With over 20 years of healthcare
            experience, she specializes in helping women identify and address the root causes of
            weight resistance, hormonal imbalance, and metabolic dysfunction. Her approach combines
            comprehensive lab testing, evidence-based protocols, and genuine patient partnership to
            produce lasting results. Katie is committed to making quality functional medicine
            accessible to women across both states, regardless of where they live.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <section className="bg-primary rounded-2xl p-8 md:p-12 text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          Stop Guessing About Your Hair
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          You deserve a real explanation, a real timeline, and a real plan. Your free 15-minute
          discovery call is the first step toward finally understanding what is going on.
        </p>
        <Link to="/free-15-min-call-with-katie" className="btn-gold text-lg px-8 py-4">
          Book Your Free 15-Minute Call
        </Link>
      </section>

      {/* References */}
      <div className="border-t border-foreground/10 pt-8 mt-4 mb-8">
        <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">
          References
        </p>
        <ol className="space-y-3 text-sm text-foreground/60">
          {REFS.map((r, i) => (
            <li key={r.key} id={`ref-${i + 1}`} className="flex gap-3">
              <span className="shrink-0 w-7">[{i + 1}]</span>
              <span>
                {r.text}{" "}
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  {r.link}
                </a>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </BlogLayout>
  );
}

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much hair loss per day is normal?",
    a: "Dermatologists commonly describe roughly 50 to 100 shed hairs per day as within the normal range, although the number varies with hair length, thickness, and how often you wash and brush. A more useful question than the daily count is whether the trend has changed for you over the last few months, whether your part is wider or your ponytail thinner, and whether the shedding has a starting point. If you have noticed a clear increase or visible thinning, it is worth a structured evaluation rather than a wait-and-see approach.",
  },
  {
    q: "How do I know whether I am shedding or thinning?",
    a: "Shedding means more hair is coming out than usual, often abruptly and diffusely, and it typically follows a trigger by two to four months. Thinning means follicles are progressively shrinking, so the part widens and the crown looks sparser over months to years, usually with the frontal hairline preserved. Many women have both at once. Photographs from above the part, the crown, and the temples, taken monthly in the same lighting, are the most useful way to tell the difference. A clinician can confirm with a magnified scalp exam.",
  },
  {
    q: "Can perimenopause cause hair loss in my late 30s or 40s?",
    a: "Yes, it can contribute. Estrogen and progesterone influence the hair growth cycle and how testosterone is converted at the follicle, and a review of menopause and hair found that menopausal status changes hair growth rate, the proportion of growing follicles, and hair diameter, with the greatest impact noticeable in the mid-forties. Perimenopause also brings sleep disruption, insulin changes, and shifts in iron status, which can each add to shedding. It is rarely the only factor, so a good evaluation also looks at iron, thyroid, vitamin D, and blood sugar.",
  },
  {
    q: "My doctor said my labs are normal. Why am I still losing hair?",
    a: "Routine labs often miss the relevant problems. A TSH alone can miss early autoimmune thyroid disease, hemoglobin can be normal while iron stores are low, and fasting glucose and A1c can be normal while insulin is elevated. Female pattern hair loss also occurs with completely normal blood tests because it depends on follicle sensitivity as well as circulating hormones. Normal labs answer a narrow question. They do not rule out shedding, pattern loss, or an autoimmune or scarring process, which are diagnosed by history and a scalp exam.",
  },
  {
    q: "What ferritin level should I aim for if I am losing hair?",
    a: "There is no single proven number. One widely cited review recommended a ferritin of 70 micrograms per liter in people with increased shedding when inflammation markers are normal, while other studies of women with hair loss proposed cut-offs closer to 30. A Cleveland Clinic review concluded that evidence for universal screening or for supplementing without anemia is insufficient and that the decision should rest on clinical judgment. What is clear is that very low ferritin deserves investigation into its cause, and iron should never be started without knowing why stores are low.",
  },
  {
    q: "Should I take biotin for hair loss?",
    a: "For most women, no. A review of the literature found that biotin helped in cases with an underlying deficiency or uncommon hair conditions, and that there is a lack of sufficient evidence for supplementation in healthy people. Biotin can also interfere with laboratory tests, including thyroid tests and troponin, and the FDA has warned about this. If you take biotin, tell your clinician and the lab, and ask how long to pause it before a blood draw.",
  },
  {
    q: "Can low vitamin D cause hair loss, and should Michigan and Wisconsin women be tested?",
    a: "Low vitamin D is associated with both telogen effluvium and female pattern hair loss in several studies, and a 2026 meta-analysis found significantly lower vitamin D in telogen effluvium. Association does not prove cause, but vitamin D testing is inexpensive and correction is straightforward. Michigan and Wisconsin sit at or north of Boston's latitude, where winter sunlight produces no previtamin D3 in skin from about November through February, so low levels are common. Testing 25-hydroxyvitamin D and treating a deficiency under a clinician's guidance is reasonable.",
  },
  {
    q: "Will my hair grow back?",
    a: "It depends on the cause. Telogen effluvium is usually reversible once the trigger is removed, with regrowth beginning within months and density recovering over nine to eighteen months. Female pattern hair loss is progressive, but treatment can often slow or stop it and produce partial regrowth, especially when started early. Alopecia areata often regrows, though it can relapse. Scarring alopecias destroy follicles, so regrowth is generally not possible in scarred areas, which is why early diagnosis and treatment matter.",
  },
  {
    q: "How long until I see results from treatment?",
    a: "Hair grows about a centimeter per month and follicles cycle on a delay, so patience is required. For telogen effluvium, shedding often slows about three to four months after a trigger is removed, with visible density improving over nine to eighteen months. For pattern hair loss treatments such as minoxidil, the American Academy of Dermatology notes you need about six to twelve months of continuous use to judge how well it works. Photographing your hair at baseline and every three months gives you a fair basis for judging progress.",
  },
  {
    q: "Do Ozempic, Wegovy, Mounjaro, or Zepbound cause hair loss?",
    a: "Hair loss is listed as a common adverse reaction in the prescribing information for both semaglutide and tirzepatide, and the labels attribute it to weight reduction. The Wegovy label reports hair loss in 3.3 percent of patients on the 2.4 mg dose versus 1 percent on placebo, and the Zepbound label reports it more often in women (7.1 percent) than men (0.5 percent). Reviews suggest the mechanism is mostly telogen effluvium from rapid weight loss and reduced protein and micronutrient intake, though causality has not been established in controlled studies.",
  },
  {
    q: "Should I stop my GLP-1 medication if I am shedding hair?",
    a: "Do not stop on your own. Regain after stopping is well documented, and a 2026 meta-analysis specifically advised against premature discontinuation. Instead, talk with your prescriber about the pace of weight loss, increase protein at each meal, add resistance training, and check ferritin, vitamin B12, vitamin D, zinc, and thyroid function. Shedding from rapid weight loss typically settles after weight stabilizes, though some women have an underlying pattern hair loss or perimenopausal contribution that needs its own attention.",
  },
  {
    q: "Can thyroid problems cause hair loss even if my TSH is normal?",
    a: "Yes, thyroid dysfunction can affect the hair cycle, and a TSH alone can miss early or autoimmune thyroid disease. A more complete evaluation includes Free T4, Free T3, and thyroid peroxidase antibodies. In a large series of 3,028 patients with telogen effluvium, about 4.6 percent had thyroid dysfunction, so it is a modest but real contributor. If you already take thyroid medication, do not change the dose because of hair loss, and take iron and calcium supplements several hours apart from levothyroxine.",
  },
  {
    q: "Is female pattern hair loss the same as male pattern baldness?",
    a: "They are related but not identical. In women it usually causes diffuse thinning over the top and crown with a widening part and a preserved frontal hairline, rather than a receding hairline and bald crown. The underlying biology is less settled in women, and a 2025 review notes the molecular basis in women remains undetermined. Treatments overlap but differ: topical minoxidil is the only FDA-approved option for women, while others are used off label and often require attention to pregnancy potential.",
  },
  {
    q: "Is minoxidil safe for women, and will it make me shed more at first?",
    a: "Topical minoxidil 2 percent and 5 percent are FDA approved for female pattern hair loss and outperformed placebo in a 48-week randomized trial of 381 women. Many women notice a temporary increase in shedding in the first weeks as follicles reset, which is expected and settles. Side effects can include scalp irritation and unwanted facial hair. It is not recommended during pregnancy or breastfeeding, and benefits fade if you stop. Ask a clinician before starting, particularly if you have heart or blood pressure conditions.",
  },
  {
    q: "What is low-dose oral minoxidil, and is it safe?",
    a: "Low-dose oral minoxidil is a very low dose of the blood pressure medication used off label for hair loss, particularly when topical treatment is poorly tolerated or ineffective. A review of 17 studies with 634 patients found it effective and well tolerated in healthy patients, and a retrospective study of 1,404 patients found hypertrichosis in 15.1 percent, with lightheadedness (1.7 percent), fluid retention (1.3 percent), and tachycardia (0.9 percent) less common. It requires a prescriber who screens your cardiovascular history and monitors you.",
  },
  {
    q: "Can PCOS cause hair thinning?",
    a: "Yes. PCOS can cause androgen-driven scalp hair thinning along with acne, unwanted facial or body hair, irregular cycles, and insulin resistance. A 2026 review describes androgenetic alopecia in PCOS as a marker of broader systemic dysregulation, with insulin resistance and inflammation converging with genetic susceptibility. Women with irregular periods, acne, or excess hair growth alongside thinning should be evaluated for PCOS with androgen, insulin, and thyroid testing. Our PCOS guide explains the diagnostic criteria and the insulin connection in detail.",
  },
  {
    q: "Does stress really cause hair loss?",
    a: "Major physical or emotional stress can trigger telogen effluvium two to four months later, and in mice, chronic stress hormones hold hair follicles in a prolonged resting phase. But attributing hair loss to stress without looking for other causes is a mistake, because iron deficiency, thyroid disease, medications, hormonal shifts, and pattern hair loss are common and treatable. Stress is best treated as one layer of the picture, assessed alongside sleep, nutrition, and hormones.",
  },
  {
    q: "Can hormone therapy or birth control help or hurt my hair?",
    a: "Hormone therapy is not an established treatment for hair loss, and a dermatology review notes limited and inconsistent data on its hair effects. Different progestogens have different androgenic or antiandrogenic properties, so the specific regimen matters. Starting, stopping, or switching hormonal contraception can trigger shedding several months later, and androgen-containing therapies may accentuate pattern hair loss in susceptible women. Any change should be discussed with your prescriber, and your hair pattern should be documented with photographs before starting.",
  },
  {
    q: "Are PRP and laser devices worth it?",
    a: "They are best considered adjuncts. A 2025 meta-analysis of 43 randomized trials with 1,877 participants found platelet-rich plasma increased hair density, though not thickness, and protocols vary widely. A systematic review of low-level laser therapy covering 680 patients found most studies showed improved hair counts, but the authors urged caution in interpreting results. Both are typically out of pocket, need repeated sessions, and work best alongside a medical treatment, not instead of one.",
  },
  {
    q: "When should I see a dermatologist first instead of starting a root-cause evaluation?",
    a: "See a dermatologist promptly if you have round or oval bald patches, scalp redness, scale, burning, or pain, a receding frontal hairline with eyebrow or eyelash loss, a smooth shiny central scalp, or sudden severe loss with fever or rash. These can indicate alopecia areata or scarring alopecias, where early treatment protects follicles. For gradual shedding or thinning without these features, starting with a root-cause evaluation is reasonable, and a dermatology visit can be added if the picture is unclear.",
  },
  {
    q: "Is hair loss after having a baby normal, and when should I worry?",
    a: "Postpartum shedding is normal and typically occurs within three to six months after delivery, settling over the following months and usually resolving by about a year. If shedding is heavy beyond a year, or comes with fatigue, heavy periods, palpitations, or cold intolerance, it is reasonable to check ferritin, a complete blood count, thyroid function including antibodies, and vitamin D, since depleted iron and postpartum thyroid changes are common and treatable.",
  },
  {
    q: "Is hair loss different for Black women?",
    a: "Some conditions are more common in Black women. Central centrifugal cicatricial alopecia is the most common scarring alopecia in African American women, often beginning at the crown, and can be mistaken for pattern hair loss or blamed on styling. A study of 326 women found that traction-associated hairstyles, bacterial scalp infections, and type 2 diabetes were more common in those with CCCA. Iron deficiency is also more prevalent in Black women in national survey data. Central thinning or scalp symptoms warrant early evaluation with a dermatologist experienced in hair disorders.",
  },
  {
    q: "Can I get a hair loss evaluation by telehealth in Michigan and Wisconsin?",
    a: "Yes, much of the evaluation can be done by telehealth, including the detailed history and timeline, review of photographs, lab planning and interpretation, and a plan for nutrition, hormones, and metabolic health. Novaleo is licensed to serve women across Michigan and Wisconsin, and labs are drawn at a local lab convenient to you. When a scalp needs an in-person exam, trichoscopy, or biopsy, we help you decide when to see a dermatologist and what to bring.",
  },
  {
    q: "What does a hair loss evaluation with Novaleo cost, and do you take insurance?",
    a: "The free 15-minute discovery call is the first step. The 60-minute Root Cause Intake is $97, and the signature Root Cause Lab Panel is $454, with labs drawn locally and results typically ready in about two weeks. We do not bill insurance, and HSA and FSA payment is accepted. Our six-month program is described on the services page. Prices can change, so please check the services page for current details.",
  },
  {
    q: "What should I do this week if my hair is thinning?",
    a: "Start with four things. First, take baseline photos of your part, crown, and temples in the same lighting. Second, write a timeline of illnesses, medications, weight changes, pregnancies, and stressors over the last 12 to 24 months. Third, gather any recent lab results and stop biotin supplements before any blood draw after checking with your clinician. Fourth, make an appointment for a structured evaluation, and see a dermatologist sooner if you have any red flags such as bald patches or scalp burning.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};
