# Novaleo Weight & Wellness

Novaleo Weight & Wellness is a modern telehealth platform built for professional women in Michigan and Wisconsin, specializing in hormones, metabolic health, and weight resistance. Guided by Kathryn Long, NP-C, the platform delivers root-cause functional medicine.

## Technology Stack

This application is built with modern frontend technologies:

- **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (React Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State & Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Bundler/Build Tool**: [Vite](https://vitejs.dev/)

## Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) or Node.js (with npm) installed.

### Installation

Install the project dependencies:

```bash
bun install
# or
npm install
```

### Development Server

Run the local development server:

```bash
bun dev
# or
npm run dev
```

The application will be available at `http://localhost:3000` (or the port specified by Vite).

### Production Build

To build the production bundle:

```bash
bun run build
# or
npm run build
```

## Features

- **Responsive Layout**: Optimised for mobile, tablet, and desktop viewports.
- **Dynamic Elements**: Auto-scrolling reviews and quotes carousel powered by Embla Carousel, seamlessly bleeding to screen edges for a modern feel.
- **Telehealth Focus**: Clear call-to-actions (CTAs) for clarity sessions, intake forms, and service information.
- **Blog & SEO Architecture**: Fully functional blog section (`/blog`) optimized for search engines with schema.org structured data (Article, BreadcrumbList, FAQPage), Open Graph tags, canonical URLs, and integrated social sharing icons.
  - **Universal `<BlogLayout>` Component**: All blog articles are powered by a highly reusable, scalable React component wrapper that automatically generates dynamic Breadcrumbs, Social Sharing Links, Mobile & Desktop Table of Contents, and JSON-LD Structured Data based on the article's props.
  - **Location-Targeted Articles**: Eleven in-depth, long-form pillar articles targeting women in Michigan and Wisconsin, each with unique headings, structure, and locally relevant content:
    - **Normal TSH & Thyroid Dysfunction Pillar**: `/blog/normal-tsh-hypothyroid-symptoms-michigan-wisconsin` (~25,000+ words, 58 min read) — An authoritative, deeply empathetic functional medicine guide for women across Michigan and Wisconsin who suffer from classic hypothyroid symptoms (fatigue, hair shedding, weight gain, brain fog, cold intolerance, constipation) despite "normal" standard TSH labs. Explains the statistical flaws in conventional reference ranges, the HPT axis, T4-to-T3 conversion mechanics in the liver and gut, the role of Reverse T3 as a metabolic brake, the 10-year autoimmune diagnostic gap in Hashimoto's, the historic Great Lakes "Goiter Belt" soil chemistry, northern winter UV-B cutoff (latitude 42° to 47° N) causing seasonal Vitamin D and receptor collapse, the triple hormone crosstalk (thyroid, estrogen, cortisol, insulin), the 6 distinct functional thyroid patterns, complete functional biomarker ranges vs conventional ranges, essential co-factors (ferritin, selenium, zinc, magnesium), medication options (Levothyroxine, Cytomel, NDT, compounded slow-release T3), 4 Midwestern clinical case studies, and a 20-question FAQPage schema with zero em dashes.
    - **Medical Weight Loss & Hormone Therapy City-by-City Guide**: `/blog/medical-weight-loss-hormone-therapy-michigan-wisconsin-cities` (~20,000 words, 44 min read) — A city-by-city, 14-section pillar built to close a specific search-intent gap: real search volume for phrases like "medical weight loss Grand Rapids" with no page on the site that actually answered "is this available where I live." Section 2 explains telehealth licensing, visit logistics, and lab-draw mechanics in plain language before the article goes city by city, Grand Rapids, Metro Detroit, Ann Arbor, Lansing, Kalamazoo, Milwaukee, Madison, and Green Bay, each with genuine local specificity (named neighborhoods, employers, health systems, climate/vitamin-D patterns, and a composite patient scenario), not a templated paragraph with the city swapped in. Section 11, covering smaller and rural communities including the Upper Peninsula and Wisconsin's Driftless Area, is treated as a substantive core section rather than an afterthought, with its own CTA block. Section 12 gives readers an honest, vendor-agnostic framework for evaluating any root-cause provider, including red flags to watch for. Includes 11 images (1 hero + 8 city photos + telehealth + lab-testing images), a 13-question FAQPage schema, 9 unique internal links (including all five other pillar articles), 2 official state-licensing external citations (Michigan LARA, Wisconsin DSPS), and 3 in-article CTA blocks. Per the brief, a human accuracy review of telehealth licensing claims, health-system references, and rural lab-draw logistics is still needed before this is treated as fully finalized.
    - **Perimenopause Brain Fog Pillar**: `/blog/perimenopause-brain-fog-memory-michigan-wisconsin` (~20,000 words, 44 min read) — A symptom-first pillar addressing one of the most emotionally loaded, least openly discussed perimenopause symptoms: the private fear that memory and cognitive changes could signal early dementia rather than a hormonal transition. Opens by naming that unspoken fear directly, then walks through the real neuroscience (estrogen's role in verbal memory and word retrieval, brain glucose metabolism via PET-scan research, processing speed and working memory, the menstrual cycle's role as an early preview, how symptoms evolve across early/mid/late perimenopause, and testosterone's often-overlooked role in cognition). Section 4, the article's honest core, gives a direct, non-diagnostic comparison between typical fluctuating hormonal brain fog and the progressive, Alzheimer's-Association-aligned warning features that warrant a different kind of medical evaluation, including concrete side-by-side examples and a dedicated note on family history and genetic risk (APOE4). Also covers why standard care often either dismisses this as "normal aging" or over-refers to extensive neurological testing, a full comprehensive testing and root-cause protocol (thyroid panel emphasis, hormone panel, B12/vitamin D), practical support and cognitive compensation strategies, evidence-graded supplement guidance, a symptom-tracking framework, conditions that can mimic this (sleep apnea, depression, medication side effects, adult ADHD), an honest "what research still doesn't fully answer" section mirroring the BHRT article's WHI-study candor, what postmenopause typically looks like, building a multi-provider support team, a glossary of terms, a dedicated section for partners and family, a closer look at the cited research, a before/after composite comparison, cost transparency, signs a protocol is working, and guidance on seeking a second opinion. Includes a 25-question FAQPage schema, 4 external citations (Climacteric, Scientific Reports/Mosconi brain-imaging research, NAMS, Alzheimer's Association), and 3 in-article CTA blocks.
    - **PCOS and Weight Resistance Pillar**: `/blog/pcos-weight-resistance-women-30s-michigan-wisconsin` (~14,000 words, 32 min read) — A pillar for a lifelong-condition audience distinct from the site's other aging-related pillars: women in their 30s (and some 40s) with a known PCOS diagnosis that was never properly managed, or who suspect they have it but were never formally diagnosed. Corrects the "ovarian cysts" misconception (PCOS is a hormonal/metabolic syndrome; only 2 of 3 Rotterdam criteria are needed for diagnosis), includes a non-judgmental, clinically direct self-recognition checklist for the never-diagnosed reader, and goes deep on the PCOS-specific insulin resistance to androgen mechanism (hyperinsulinemia, SHBG, the self-reinforcing cycle) distinct from general insulin resistance covered elsewhere on the site. Section 5 explicitly sorts out PCOS versus perimenopause with an at-a-glance comparison table. Honestly critiques the common "birth control or Metformin as the entire plan" pattern without dismissing either as legitimate tools, and includes a three-woman composite case-study section (previously diagnosed, never diagnosed, lean PCOS) showing how the same complaint traces to different root causes. Includes a 22-question FAQPage schema, 4 external citations (Rotterdam criteria, Endocrine Society guideline, insulin resistance mechanism research, PCOS mental health meta-analysis), and 3 in-article CTA blocks validating that "you were never just prone to weight gain."
    - **Hormonal Sleep and Anxiety Pillar**: `/blog/hormonal-sleep-anxiety-women-michigan-wisconsin` (16,000+ words, 47 min read) — The longest and most in-depth pillar on the site, a symptom-first entry point for women whose primary complaint is sleep and/or new anxiety rather than weight, a distinct, non-weight-focused door into the practice. Opens with the specific, visceral 3am-waking scene and explains the hormonal mechanics (unstable overnight cortisol rhythm, declining progesterone's GABA-related calming effect, overnight blood sugar dips, and early estrogen-related temperature shifts) in plain language, including a genuinely useful 24-hour cortisol rhythm graphic and a scannable self-check list. Section 4 explicitly and repeatedly encourages professional mental health support alongside hormonal investigation rather than positioning hormones as a replacement for therapy or psychiatric care. A dedicated "Other Explanations Worth Ruling Out" section takes sleep apnea, thyroid dysfunction, iron deficiency, and cardiac symptoms seriously rather than defaulting to a single hormonal story. Also covers why standard sleep hygiene and anxiety treatment often fall short on their own, what comprehensive cortisol/progesterone/blood sugar testing actually reveals (including saliva vs. dried urine testing), a root-cause treatment approach with realistic timelines, and four composite case studies showing how the same presenting complaint can trace back to different dominant mechanisms. Includes a 20-question FAQPage schema, 6 external citations (NAMS, peer-reviewed sleep/menopause research, APA mental health guidance, and the 988 crisis line), and 3 in-article CTA blocks.
    - **Bioidentical Hormone Therapy (BHRT) Pillar**: `/blog/bioidentical-hormone-therapy-guide-michigan-wisconsin` (~15,000 words, 31 min read) — The most bottom-funnel pillar to date, written as a decision-making/buyer's-guide resource for women who have already encountered the term "bioidentical hormones" and are weighing whether to pursue treatment. Gives the 2002 Women's Health Initiative (WHI) study extensive, honest treatment: what it actually tested, how initial coverage oversimplified the findings, the timing hypothesis, and where legitimate caution still applies. Also covers a genuinely comparative breakdown of delivery methods (pellets, creams, patches, oral micronized progesterone, troches, including a scannable comparison table), baseline and ongoing testing, honest candidacy/contraindications guidance, realistic timeline and cost framing (no stale dollar figures), and Michigan/Wisconsin telehealth access. Includes a 10-question FAQPage schema, 5 external citations prioritizing WHI primary data and NAMS position statements, and 3 in-article CTA blocks calibrated to a reader who is close to deciding.
    - **Perimenopause in Your 30s Pillar**: `/blog/perimenopause-in-your-30s-michigan-wisconsin` (~15,000 words, 31 min read) — A top-of-funnel pillar aimed at women ages 33-40 who assume they're too young for perimenopause. Covers a decade-by-decade symptom timeline (early-to-mid 30s, late 30s, early 40s) with scannable self-check lists, why doctors miss early perimenopause in women under 40, AMH and ovarian reserve, PCOS/thyroid look-alikes, and Michigan/Wisconsin telehealth access for a younger-skewing audience. Includes 12-question FAQPage schema, 3 external citations (NAMS, Santoro 2016, Sowers 2008 AMH study), and 3 in-article CTA blocks.
    - **GLP-1 / Ozempic Pillar**: `/blog/ozempic-not-working-michigan-wisconsin-women` (~15,000 words, 32 min read) — Covers the 6 root causes of the Ozempic plateau (thyroid, perimenopause hormones, insulin resistance, cortisol, GLP-1 muscle loss, nutrient depletion), deep-dive on sarcopenia during semaglutide use, rebound physiology, functional medicine combined-protocol approach, and Michigan/Wisconsin-specific seasonal and vitamin D factors. Includes 6 custom AI-generated images, 10-question FAQPage schema, 3 external clinical citations (STEP 1, SELECT trial, STEP 4), and 3 in-article CTA blocks.
    - **Ultimate Guide**: `/blog/the-ultimate-guide-to-hormones-and-weight-resistance-over-40` (15,000+ words)
    - **Michigan**: `/blog/why-michigan-women-over-40-cant-lose-weight-feel-exhausted` (6,000+ words)
    - **Wisconsin**: `/blog/gaining-weight-exhausted-after-40-wisconsin-women` (6,000+ words)
  - **SEO Interlinking**: All articles cross-reference each other with descriptive anchor text links, strengthening internal link equity and topical relevance.
  - **Comprehensive SEO Audit**: The entire site has been deeply analyzed and optimized for Core Web Vitals, perfectly mapped H1/H2 tags, precise meta title/description lengths, and explicit image dimensions to prevent Cumulative Layout Shift (CLS).
  - **Dynamic Permalinks**: Routes are intuitively named (`/services`, `/what-we-treat`) to match navigation items exactly, reinforcing semantic relevance.
- **The Root Cause Restoration Program**: Renamed from "The Executive Longevity Partnership." A 6-month functional medicine program for women 35 to 55, structured around 4 non-negotiables: nutrition + blood sugar stability, sleep + circadian rhythm, stress + nervous system regulation, and movement + metabolic strength.
- **Lead Magnet / Free Guide (`/free-guide`)**: A dedicated landing page for the "What Your Labs Aren't Telling You" PDF guide. Redesigned with a premium glassmorphism aesthetic, featuring dynamic animations, a 3D physical book mockup, a sleek inline form for lead generation, an interactive 'Meet Your Guide' author section, and detailed info sections highlighting the core contents of the ebook.
- **Dedicated Free Discovery Call Page (`/free-15-min-call-with-katie`)**: Replaces the global pop-up modal with a dedicated landing page for scheduling the free 15-minute discovery call.
  - Features a native GoHighLevel calendar embed integrated seamlessly into the page, complete with a custom, branded loading overlay to ensure a premium user experience while the iframe initializes.
  - Supports dynamic iframe height recalculations with native mobile scrolling, breaking out of standard modal constraints for improved accessibility on smaller devices.
  - **High-Converting Bio Layout**: The standard location gate has been completely replaced with a high-converting, trust-building clinician bio. This layout includes an Instagram-style verified badge and a rotating carousel of verified 5-star patient reviews.
  - **Optimized Copy & Sequence**: The pre-booking flow uses a specific sequence (Photo/Badge -> Headline -> Symptoms Checklist -> CTA -> Testimonials) perfectly mirrored from high-performing ad copy to maximize conversions and message-match.
- **Dedicated Ad Landing Pages (`/michigan-discovery-call`)**: 
  - Special landing pages designed purely for ad traffic. Features identical high-converting components but perfectly tracks conversions using distinct Meta Pixel IDs dynamically.
  - **Inline Native Rendering**: Decoupled from the global modal architecture, rendering the scheduling flow natively inline as an embedded landing page rather than a pop-up overlay.
- **Dynamic Meta Pixel Tracking**:
  - Automatically initializes and tracks Facebook `PageView` and `Schedule` events natively through the React Router.
  - Conditionally fires separate pixels based on the route to prevent double-tracking and isolate campaign data.
- **Dedicated Paid Booking Flow (`/clarity-session`)**:
  - Replaces the standard Cal.com popup with a **100% Native React UI** (built with `react-day-picker` v9) for selecting dates and times.
  - **Polished Calendar UI**: Full-width responsive calendar with properly styled day cells, navy-themed selected states, availability dot indicators, and subtle hover/today highlights. Nav arrows styled as bordered icon buttons matching the site's design language.
  - **Inline Time Selection**: After picking a date, available time slots appear directly below the calendar with an automatic smooth-scroll, keeping context visible without a separate screen.
  - Collects user name and email before proceeding to payment.
  - Seamlessly integrates the **Whop Checkout React SDK** (light theme) directly into the modal for an uninterrupted "Check Availability First -> Pay" flow.
    - Features intelligent dynamic scrolling (`overflow-y-auto`) that allows the bio to scroll smoothly on small mobile screens.
    - Includes tightened mobile-specific padding above the clinician headshot to maximize above-the-fold real estate.
    - Includes a secondary CTA button below the testimonials to capture conversions without requiring users to scroll back up.
    - Features condensed, punchy intro copy modeled directly after the ad creative to reinforce message-match and improve speed-to-book.
    - Hides the global site header and footer on the dedicated clarity page to minimize distractions and keep the user focused entirely on the booking funnel.
- **UI Enhancements**: Consistent pointer interactions, standardized branding colours, and a personalized clinician avatar with active availability indicators.
  - Buttons across the site feature subtle, elegant box shadows and smooth lift animations on hover.
  - Social media links in the footer have been updated to reflect the `katielong.np` handles across TikTok, Facebook, and Instagram.
  - Mobile-first refinements ensure the primary "Free Discovery Call" button stays visible above the fold on the homepage hero section.
  - All site images and assets have been optimized by converting them to the WebP format for faster page load times and improved performance.
  - Site-wide logo updated to the latest branding across header, footer, and social preview images (Open Graph).
  - **Robust Cal.com API Integration**: Directly interfaces with Cal.com TRPC server functions and REST API to query live availability and book slots seamlessly in the background.
    - **Timezone Safety**: Hardcoded to `America/Detroit` across the entire stack (both UI and API payload) to completely prevent browser timezone drift and ensure the underlying slot timestamp perfectly matches the clinician's real availability.
    - **Strict Phone Validation**: Integrates a robust regex phone formatter to guarantee all numbers correctly resolve to a `+1` prefix before hitting the Cal.com API, preventing silent booking failures triggered by SMS reminder validations.
  - **Smart Checkout Preloading**: Intelligently delays the background rendering of the Whop checkout iframe until the exact moment the user blurs from the email field, enabling flawless email prefilling while still maintaining an ultra-fast, invisible load during the final form step.

## AI Acknowledgements

This project was developed with the assistance of various AI models and developer tools:

- **OpenAI (ChatGPT & GPT-4)**: Used for code generation, problem-solving, and copywriting assistance.
- **Anthropic (Claude)**: Used for architectural design, code review, and complex refactoring.
- **Google (Gemini / Antigravity)**: Used for analytical tasks, planning, codebase exploration, long-form SEO article generation, image creation, and full-stack feature development.
- **Lovable**: Utilized as an AI-powered development platform for rapid UI prototyping and scaffolding.
- **Cursor / GitHub Copilot**: Used for inline code generation, autocomplete, and debugging.

