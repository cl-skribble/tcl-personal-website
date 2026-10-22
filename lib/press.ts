export type PressItem = {
  category: string;
  outlet: string;
  title: string;
  url: string;
  /** What the source establishes, in the source's own terms. */
  note?: string;
};

/** Year groups first, then undated and institutional groups. */
export const pressCategories = [
  "2023",
  "2024",
  "2025",
  "2026",
  "More coverage",
  "Industry & institutional",
];

export const allCoverage: PressItem[] = [
  /* ── 2023 ── */
  { category: "2023", outlet: "Business Times Malaysia", title: "Consider Critical Aspects in Budget 2024 to Drive 4IR Adoption", url: "https://www.nst.com.my/business/economy/2023/10/966379/consider-critical-aspects-budget-2024-drive-4ir-adoption" },
  { category: "2023", outlet: "BFM 89.9", title: "Dos & Don'ts When Planning Business Strategies for the New Year", url: "https://www.bfm.my/content/podcast/dos-and-donts-when-planning-business-strategies-for-the-new-year" },
  { category: "2023", outlet: "Focus Malaysia", title: "4IR Adoption: A Toss-up Between a Baseline and Transformational Agenda", url: "https://focusmalaysia.my/4ir-adoption-a-toss-up-between-a-baseline-and-transformational-agenda/" },
  /* ── 2024 ── */
  { category: "2024", outlet: "The Edge Malaysia", title: "Gen AI Setting New Job Standards for Creative Industry", url: "https://theedgemalaysia.com/node/727331" },
  { category: "2024", outlet: "Prestige Online", title: "Prestige 40 Under 40 — Teng Chan Leong", url: "https://www.prestigeonline.com/my/people/40-under-40/teng-chan-leong/" },
  { category: "2024", outlet: "Berita Harian", title: "Guna Pakai Digital Penting untuk Pertumbuhan Perniagaan", url: "https://www.bharian.com.my/bisnes/lain-lain/2024/03/1228000/guna-pakai-digital-penting-untuk-pertumbuhan-perniagaan" },
  { category: "2024", outlet: "Astro Awani", title: "Pantau Belanjawan: SMEs & Industry 4.0 Transformative Journey", url: "https://www.astroawani.com/videos/video-terkini-x7sio1/pantau-belanjawan-smes-local-businesses-industry-40-transformative-journey-x8vz86s" },
  { category: "2024", outlet: "BFM 89.9", title: "Skribbling Ideas to Stay Ahead of Competition", url: "https://www.bfm.my/content/podcast/skribbling-ideas-to-stay-ahead-of-competition" },
  { category: "2024", outlet: "BFM 89.9", title: "Trust Me, This is Good Content", url: "https://www.bfm.my/content/podcast/trust-me-this-is-good-content" },
  { category: "2024", outlet: "BFM 89.9", title: "The Strategic Asia Marketing Alliance — Where Rivals and Partners Unite", url: "https://www.bfm.my/podcast/enterprise/marketing-mojo/the-strategic-asia-marketing-alliance-where-rivals-and-partners-unite" },
  { category: "2024", outlet: "Malaysia SME", title: "Minimum Wage Increase Could Fuel Cross-Regional Growth for SMEs in SEA", url: "https://www.malaysiasme.com.my/minimum-wage-increase-could-fuel-cross-regional-growth-for-smes-in-southeast-asia/" },
  { category: "2024", outlet: "Marketech APAC", title: "Cutting Through the Noise: Why SAMA Aims to Elevate Industry Standards", url: "https://marketech-apac.com/cutting-through-the-noise-why-sama-aims-to-elevate-industry-standards-in-the-region/" },
  { category: "2024", outlet: "Free Malaysia Today", title: "Agencies Get Creative to Boost Marketing Industry", url: "https://www.freemalaysiatoday.com/category/nation/2024/08/29/agencies-get-creative-to-boost-marketing-industry/" },
  { category: "2024", outlet: "Marketing Interactive", title: "New Coalition of Agencies Form Across SG, MY, ID and TH", url: "https://www.marketing-interactive.com/new-coalition-of-agencies-form-across-sg-my-id-and-th" },
  { category: "2024", outlet: "The Sun Malaysia", title: "Strategic Asia Marketing Alliance Sets Up Malaysia-Singapore Chapters", url: "https://thesun.my/business-news/strategic-asia-marketing-alliance-sets-up-malaysia-singapore-chapters-OI13287999" },
  { category: "2024", outlet: "Marketing Magazine", title: "Skribble Malaysia Launches SAMA", url: "https://marketingmagazine.com.my/skribble-malaysia-launches-strategic-asia-marketing-alliance-sama/" },
  { category: "2024", outlet: "Free Malaysia Today", title: "Ad Agencies Expected to Get a Boost from Wider Collaboration", url: "https://www.freemalaysiatoday.com/category/nation/2024/11/14/ad-agencies-expected-to-get-a-boost-from-wider-collaboration/" },
  /* ── 2025 ── */
  { category: "2025", outlet: "Bangkok Post", title: "The Future of Marketing Agencies Lies in Collaboration, Not Competition", url: "https://www.bangkokpost.com/thailand/pr/2989841/the-future-of-marketing-agencies-lies-in-collaboration-not-competition" },
  { category: "2025", outlet: "Enterprise Zone", title: "Chan Leong Teng — CEO of Skribble Malaysia & Founder of SAMA", url: "https://enterprisezone.cc/chan-leong-teng-ceo-of-skribble-malaysia-founder-of-sama/" },
  { category: "2025", outlet: "BFM 89.9", title: "3 Branding Lessons from Disney's Snow White Remake", url: "https://www.bfm.my/content/podcast/3-branding-lessons-from-disneys-snow-white-remake" },
  { category: "2025", outlet: "The Exchange Asia", title: "Thailand Launch Propels SAMA to Forefront of Asia's Independent Marketing Network", url: "https://theexchangeasia.com/thailand-launch-propels-sama-to-the-forefront-of-asias-independent-marketing-network/" },
  { category: "2025", outlet: "Marketing Magazine", title: "SAMA's Game-Changing Marketing Alliance Reshaping Southeast Asia's Advertising Landscape", url: "https://marketingmagazine.com.my/samas-game-changing-marketing-alliance-is-reshaping-southeast-asias-advertising-landscape/" },
  { category: "2025", outlet: "Nation Thailand", title: "SAMA Alliance Expanding Regional Marketing Network", url: "https://www.nationthailand.com/business/economy/40047895" },
  { category: "2025", outlet: "Martech Asia", title: "Transforming the Agency Culture?", url: "https://martechasia.net/features/transforming-the-agency-culture/" },
  /* ── Dated from each publisher's page; Malaysia SME shows no date ── */
  { category: "2025", outlet: "Marketing Interactive", title: "Why Hyperlocal Marketing Matters More Than Ever in Malaysia", url: "https://www.marketing-interactive.com/why-hyperlocal-marketing-matters-more-than-ever-in-my" },
  { category: "2026", outlet: "Marketing Interactive", title: "What Creative Agencies in Malaysia Really Need from Marketers Before the Work Begins", url: "https://www.marketing-interactive.com/what-creative-agencies-in-malaysia-really-need-from-marketers-before-the-work-begins" },
  { category: "2026", outlet: "Marketing Interactive", title: "What Made IKEA and Punch the Monkey the Perfect Viral Moment?", url: "https://www.marketing-interactive.com/what-made-ikea-and-punch-the-monkey-the-perfect-viral-moment" },
  { category: "2026", outlet: "The Sun Malaysia", title: "New Marketing Landscape Emerging in Southeast Asia as Agencies Step Up Collaboration", url: "https://thesun.my/business/local-business/new-marketing-landscape-emerging-in-southeast-asia-as-agencies-step-up-collaboration/" },
  { category: "More coverage", outlet: "Malaysia SME", title: "Building a Regional Force: How SAMA Is Redefining Cross-Border Marketing for Southeast Asia's Independent Agencies", url: "https://www.malaysiasme.com.my/building-a-regional-force-how-sama-is-redefining-cross-border-marketing-for-southeast-asias-independent-agencies/" },
  { category: "2026", outlet: "EdgeProp", title: "Rehda Institute's RIYI 2026: Corporate Mentors Prep Gen Z for Property Careers", url: "https://www.edgeprop.my/content/1916626/rehda-institute%E2%80%99s-riyi-2026-corporate-mentors-prep-gen-z-property-careers" },
  { category: "2025", outlet: "The Story Thailand", title: "Strategic Asia Marketing Alliance", url: "https://www.thestorythailand.com/strategic-asia-marketing-alliance/" },
  { category: "2024", outlet: "FORTUNE Indonesia", title: "SAMA Beraliansi untuk Memajukan Industri Marketing di Asia", url: "https://www.fortuneidn.com/business/sama-beraliansi-untuk-memajukan-industri-marketing-di-asia-00-xkln4-pn0jb0/" },
  { category: "2024", outlet: "The Asia Connects", title: "Skribble Malaysia Launches SAMA (interview with Teng Chan Leong)", url: "https://theasiaconnects.com/skribble-malaysia-launches-strategic-asia-marketing-alliance-sama/" },
  /* ── Industry & institutional ── */
  { category: "Industry & institutional", outlet: "Andersen Consulting", title: "Andersen Consulting Adds Collaborating Firm Skribble", url: "https://global.andersen.com/resources/andersen-consulting-adds-collaborating-firm-skribble", note: "Andersen names Skribble as a collaborating firm." },
  { category: "Industry & institutional", outlet: "REHDA Institute", title: "Summary Report: Digital Marketing Insight for Malaysia Real Estate", url: "https://rehdainstitute.com/wp-content/uploads/2023/10/F_DMTI-Summary-Report_v2.pdf", note: "Industry report naming Teng Chan Leong and Skribble." },
  { category: "Industry & institutional", outlet: "REHDA Institute", title: "Digital Marketing Transformation Initiative (DMTI) 2025", url: "https://rehdainstitute.com/event/digital-marketing-transformation-initiative-dmti-2025/", note: "Programme page." },
  { category: "Industry & institutional", outlet: "4As Malaysia", title: "4As Malaysia Grows Membership by 36%", url: "https://aaaa.org.my/4as-malaysia-grows-membership-by-36/", note: "Association announcement of Skribble's membership." },
  { category: "Industry & institutional", outlet: "REHDA Institute", title: "RI In Touch, September 2023 issue", url: "https://rehdainstitute.com/wp-content/uploads/2023/10/F_RI-In-Touch_September-2023-Issue_compressed.pdf" },
  { category: "Industry & institutional", outlet: "REHDA Institute", title: "RI In Touch, June 2025 issue", url: "https://rehdainstitute.com/wp-content/uploads/2025/07/RI-In-Touch_June-2025-Issue.pdf" },
  { category: "Industry & institutional", outlet: "REHDA Institute", title: "RI In Touch, September 2025 issue", url: "https://rehdainstitute.com/wp-content/uploads/2025/10/RI-In-Touch_September-2025-v2.pdf" },
  { category: "Industry & institutional", outlet: "REHDA Institute", title: "RI In Touch, December 2025 issue", url: "https://rehdainstitute.com/wp-content/uploads/2026/01/RI-In-Touch_December-2025.pdf" },
];
