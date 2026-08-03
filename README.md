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
  - **Location-Targeted Articles**: Seven in-depth, long-form pillar articles targeting women in Michigan and Wisconsin, each with unique headings, structure, and locally relevant content:
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

