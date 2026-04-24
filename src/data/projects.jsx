// ============ PROJECT DATA ============
// Single source of truth for all case studies. Each entry is keyed by URL slug.

const SUB = { color: 'var(--ink-3)', fontStyle: 'italic', fontSize: '0.5em' };
const AMP = { color: 'var(--ink-3)' };

// Quick reference card used in the "Other projects" grid at the foot of each
// case study. Slug must match the URL route.
const OTHER = {
  santander: { slug: 'santander', num: '01', label: 'Santander Portugal', sub: 'Design Chapter Transformation' },
  lloyds:    { slug: 'lloyds',    num: '02', label: "Lloyd's Register",   sub: 'Research · Strategy' },
  taskize:   { slug: 'taskize',   num: '03', label: 'Taskize',            sub: 'a Euroclear company' },
  mytr:      { slug: 'mytr',      num: '04', label: 'My Thomson Reuters', sub: 'Account Management' },
  vodafone:  { slug: 'vodafone',  num: '05', label: 'Vodafone Business',  sub: '3000% lead increase' },
  bt:        { slug: 'bt',        num: '06', label: 'British Telecom',    sub: 'Conversion & drop-off' },
  wasalt:    { slug: 'wasalt',    num: '07', label: 'Wasalt & Quara',     sub: 'Real estate · Finance · KSA' },
  axa:       { slug: 'axa',       num: '08', label: 'AXA Digital',        sub: 'Enterprise AI knowledge' },
};

export const PROJECTS = {
  // ============ TASKIZE ============
  taskize: {
    slug: 'taskize',
    breadcrumb: 'Taskize',
    name: <>Taskize<span style={SUB}> / Euroclear</span></>,
    year: '2022 — 2025',
    tags: ['UX / UI', 'Product Discovery', 'Strategy', 'Innovation'],
    swatch: 'oklch(0.5 0.14 155)',
    tagline: <>When Taskize faced losing major clients due to poor usability, I led the UX turnaround that <strong>won back their trust</strong> — improving SUS scores, securing £500k+ in new business, and setting the foundation for long-term product evolution.</>,
    overviewTitle: <>Shape of <em>the</em> work.</>,
    overview: [
      { label: 'Team', items: ['1 Lead Product Designer (me)', '1 Jr Product Designer', '3 Product Managers', '16 Developers'] },
      { label: 'Business focus', items: ['Keep customers', 'Lift user experience', 'Accessibility readiness', 'UI revamp'] },
      { label: 'UX pain points', items: ['App structured like the backend, not users', 'Low-contrast colour system', 'Information overload on every screen'] },
      { label: 'My role', items: ['Research lead', 'Strategy & vision', 'Hands-on UX / UI', 'Cross-team glue'] },
    ],
    metrics: [
      { v: <><em>+14</em><span className="sup">pts</span></>, k: 'SUS score uplift — 51 → 65' },
      { v: <>£<em>500</em>k<span className="sup">+</span></>, k: 'promised business tied to vision prototypes' },
      { v: <><em>0</em></>, k: 'net clients lost after intervention' },
      { v: <>WCAG <em>2.2</em></>, k: 'early AA readiness ahead of EAA' },
    ],
    chapters: [
      {
        kicker: 'Context',
        title: <>The <em>problem.</em></>,
        paragraphs: [
          <>When I joined Taskize, the warning lights were flashing. A great idea wrapped in a poor product experience. I was brought in to help rethink the company&rsquo;s user-experience vision.</>,
        ],
        quote: { text: <>If things don&rsquo;t improve in the next 12 months, we&rsquo;re out.</>, cite: 'Top-tier client, during onboarding' },
      },
      {
        kicker: 'My role',
        title: <>Glue across <em>disciplines.</em></>,
        paragraphs: [
          <>As Lead UX Designer, I was the glue across disciplines — running the research, setting the direction, shaping the vision, delivering the fixes, and driving cross-team alignment.</>,
        ],
        list: [
          <><strong>Product leadership</strong> — roadmap framing, prioritisation trade-offs.</>,
          <><strong>Development teams</strong> — design QA and pairing during sprints.</>,
          <><strong>Stakeholders</strong> — regular vision &amp; progress readouts.</>,
          <><strong>Clients</strong> — workshops and international roadshows.</>,
        ],
      },
      {
        kicker: 'Discover',
        title: <>Find the signal <em>in</em> the noise.</>,
        paragraphs: [
          <>I grounded the team in evidence: a heuristic evaluation, an accessibility audit, and a System Usability Scale survey taken by <strong>75 real users</strong> across our top customers. The baseline score was a worrying <strong>51</strong>.</>,
          <>Everyone already knew it wasn&rsquo;t working. I showed them exactly <em>why</em>, and <em>how.</em></>,
        ],
        visual: { layout: 'two', items: [
          { caption: 'SUS benchmark · 75 respondents' },
          { caption: 'Heuristic evaluation — top offenders' },
        ]},
      },
      {
        kicker: 'Quick wins',
        title: <>Big <em>trust,</em> fast.</>,
        paragraphs: [
          <>I led a focused 6-month UI refresh to tackle the biggest usability blockers head-on. The goal wasn&rsquo;t a total redesign — it was to buy time by showing visible, tangible progress.</>,
          <>It worked. Our most frustrated clients extended their contract windows from <strong>12 to 18 months</strong>. That window changed everything.</>,
        ],
        visual: { layout: 'two', items: [
          { caption: 'Before · dashboard — low contrast, dense' },
          { caption: 'After · hierarchy, focus, contrast', accent: 'oklch(0.66 0.18 20)' },
        ]},
      },
      {
        kicker: 'New ways of working',
        title: <>From patching to <em>imagining.</em></>,
        paragraphs: [
          <>With breathing room secured, I launched a human-centred design program to shift focus from patching problems to imagining what the platform could <em>become.</em></>,
          <>In parallel I advised on a more structured product discovery process and introduced a lightweight UX monitoring framework. My role evolved from fixer to strategic UX partner — grounding decisions in real user behaviour, not gut instinct.</>,
        ],
        visual: { layout: 'three', items: [
          { caption: 'Journey maps · ops user' },
          { caption: 'Notification redesign' },
          { caption: 'Experimentation log' },
        ]},
      },
      {
        kicker: 'Vision',
        title: <>The <em>concept car.</em></>,
        paragraphs: [
          <>We built a forward-thinking &ldquo;concept car&rdquo; prototype — the platform reimagined. I took it on a <strong>3-month roadshow</strong> to top-tier clients.</>,
        ],
        quote: { text: <>When can we have this?</>, cite: 'Roadshow, Tier-1 bank' },
        visual: { layout: 'wide', items: [{ caption: 'Vision prototype · tier-1 demos', accent: 'oklch(0.66 0.18 20)' }] },
      },
      {
        kicker: 'Deliver',
        title: <>Ship what <em>matters.</em></>,
        paragraphs: [
          <>The business chose not to launch the full concept, so I shifted into delivery mode — working across two Scrum teams to ensure the vision&rsquo;s core principles still informed what shipped.</>,
          <>A bare-minimum-fidelity approach to ideation kept us fast: test early, iterate fast, avoid polishing the wrong thing. It was about momentum — shipping smarter, not slower.</>,
        ],
        visual: { layout: 'two', items: [
          { caption: 'Lo-fi · feature ideation' },
          { caption: 'Hi-fi · dev handoff specs' },
        ]},
      },
    ],
    results: [
      <><strong>SUS score 51 → 65</strong> — major usability gains, confirmed with follow-up survey.</>,
      <><strong>Client retention</strong> — only a single account lost during the entire turnaround.</>,
      <><strong>£500k+ in promised business</strong> directly linked to the vision prototypes; one confirmed deal, three more in active conversation.</>,
      <><strong>Accessibility-ready</strong> ahead of the European Accessibility Act — WCAG 2.2 AA across the platform.</>,
      <><strong>UX process uplift</strong> — testing, benchmarking and HCD embedded into how Taskize now operates.</>,
      <><strong>Design system</strong> that scales across Taskize and sibling Euroclear brands.</>,
    ],
    others: [OTHER.santander, OTHER.lloyds, OTHER.mytr],
  },

  // ============ SANTANDER ============
  santander: {
    slug: 'santander',
    breadcrumb: 'Santander Portugal',
    name: <>Santander<span style={SUB}> / Portugal</span></>,
    year: '2019 — 2021',
    tags: ['Leadership', 'Design Ops', 'UX / UI', 'Design System'],
    swatch: 'oklch(0.55 0.18 25)',
    tagline: <>At the country&rsquo;s largest private retail bank, I grew design from a <strong>team of 6 UI designers</strong> into a <strong>multidisciplinary group of 25</strong> — supporting 40+ products, championing a new design system, and staying hands-on with the flagship account-opening flow.</>,
    overview: [
      { label: 'Role', items: ['UX Chapter Lead', 'Lead Product Designer', 'Individual contributor on flagship flows'] },
      { label: 'Scope', items: ['40+ digital products', 'Retail web + My Santander (iOS / Android)', 'Onboarding & account opening', 'Internal tools'] },
      { label: 'Team built', items: ['Product Designers', 'UX Researchers', 'UX Writers', 'Visual / UI designers'] },
      { label: 'Duration', items: ['18 months end-to-end', '2019 → 2021', 'Lisbon, on-site + hybrid'] },
    ],
    metrics: [
      { v: <>6 → <em>25</em></>, k: 'team scaled in 18 months' },
      { v: <><em>40</em>+</>, k: 'digital products supported' },
      { v: <>1 →<em> 4</em></>, k: 'disciplines: UI → UX, research, writing, UI' },
      { v: <><em>1</em></>, k: 'unified design system across touchpoints' },
    ],
    chapters: [
      {
        kicker: 'Context',
        title: <>A design team <em>built</em> for scale.</>,
        paragraphs: [
          <>Santander Portugal was in the middle of a digital transformation. Product teams were shipping faster than design could keep up, and the existing team of 6 UI designers was stretched thin across dozens of squads — with no research, no writing, and no system.</>,
          <>I came in to head the UX chapter and embed user-centred thinking across the full product lifecycle — while making the team itself a credible, respected function inside the bank.</>,
        ],
      },
      {
        kicker: 'Build the team',
        title: <>From UI shop to <em>design org.</em></>,
        paragraphs: [
          <>I scaled from 6 visual designers to a multidisciplinary team of 25 — Product Designers, UX Researchers, UX Writers and UI specialists — mapped directly onto the product squads that needed them most.</>,
          <>Hiring was deliberate: senior ICs to anchor each discipline, mids to grow into leads, juniors we could mentor. Every hire came with a clear charter, a ramp plan, and a stakeholder they were accountable to.</>,
        ],
        list: [
          <><strong>Chapter rituals</strong> — weekly design crits, monthly portfolio reviews.</>,
          <><strong>Career framework</strong> — progression ladders per discipline.</>,
          <><strong>Squad embeds</strong> — every designer paired with a PM, tech lead and researcher.</>,
        ],
        visual: { layout: 'two', items: [
          { caption: 'Team map · 25 designers across squads' },
          { caption: 'Career ladder framework', accent: 'oklch(0.66 0.18 20)' },
        ]},
      },
      {
        kicker: 'Design system',
        title: <>A system <em>that</em> shipped.</>,
        paragraphs: [
          <>I championed the adoption of a unified design system across the bank&rsquo;s digital touchpoints — web, mobile, internal tools — rooted in the group-wide Santander visual language but tuned for the Portuguese product reality.</>,
          <>The system wasn&rsquo;t a PDF; it was a living, versioned Figma library with a token pipeline into the code. Adoption was the KPI — not documentation.</>,
        ],
        visual: { layout: 'three', items: [
          { caption: 'Token architecture' },
          { caption: 'Component library · Figma' },
          { caption: 'Usage analytics by squad' },
        ]},
      },
      {
        kicker: 'Hands-on',
        title: <>Still in <em>the</em> canvas.</>,
        paragraphs: [
          <>Leadership at Santander didn&rsquo;t mean leaving the tools. I led the redesign of the <strong>new digital account-opening flow</strong> as an individual contributor — one of the bank&rsquo;s highest-stakes journeys and the single biggest conversion lever on retail.</>,
          <>Shipping alongside my team kept me honest, kept the quality bar visible, and made every framework I asked of them a framework I had used myself.</>,
        ],
        quote: { text: <>He is able to break problems down and explain them in a way that they can be understood by all team members.</>, cite: 'Sam Medrington · Head of UX, BAE Systems' },
      },
      {
        kicker: 'My Santander',
        title: <>Flagship <em>mobile.</em></>,
        paragraphs: [
          <>I drove design on the flagship &lsquo;My Santander&rsquo; mobile app for the Portuguese market — native iOS &amp; Android — covering everyday banking, servicing, and proactive engagement.</>,
        ],
        visual: { layout: 'two', items: [
          { caption: 'My Santander · home', accent: 'oklch(0.66 0.18 20)' },
          { caption: 'Account opening flow' },
        ]},
      },
    ],
    results: [
      <><strong>Team scaled 6 → 25</strong> across four disciplines, without losing delivery velocity on the 40+ products in flight.</>,
      <><strong>Unified design system</strong> adopted across web and mobile touchpoints — not just documented, but actively used by product squads.</>,
      <><strong>Account opening redesigned</strong> — significantly higher conversion and lower drop-off on one of the bank&rsquo;s most critical journeys.</>,
      <><strong>Flagship My Santander app</strong> shipped for the Portuguese market on iOS &amp; Android.</>,
      <><strong>Design language</strong> and research practice embedded into how product is built at Santander PT.</>,
      <><strong>Talent pipeline</strong> — mentored designers who are now leads across Portugal&rsquo;s banking scene.</>,
    ],
    others: [OTHER.taskize, OTHER.lloyds, OTHER.mytr],
  },

  // ============ LLOYD'S REGISTER ============
  lloyds: {
    slug: 'lloyds',
    breadcrumb: "Lloyd's Register",
    name: <>Lloyd&rsquo;s<span style={SUB}> / Register</span></>,
    year: '2015 — 2017',
    tags: ['Leadership', 'Research', 'Strategy', 'UX / UI'],
    swatch: 'oklch(0.38 0.08 230)',
    tagline: <>The world&rsquo;s oldest marine classification company. In <strong>9 weeks</strong> I led the research and defined the product-design strategy for a critical internal tool — work that helped secure <strong>£1.5M+ in consulting fees</strong> across two years.</>,
    overview: [
      { label: 'Client', items: ["Lloyd's Register", 'Global marine classification', 'Founded 1760', 'Engaged via BAE Systems'] },
      { label: 'Role', items: ['Lead Digital Consultant', 'Product & UX Design', 'Research workstream owner', 'BA / Design / Dev pivot'] },
      { label: 'Scope', items: ['Internal surveyor tool', 'Dual-platform experience', 'Global field → office workflow'] },
      { label: 'Stakes', items: ['£1.5M+ consulting revenue', 'Strategy shaped 2 years of delivery', 'Globally distributed teams'] },
    ],
    metrics: [
      { v: <>£<em>1.5</em>M<span className="sup">+</span></>, k: 'consulting fees secured across two years' },
      { v: <><em>9</em>wks</>, k: 'to research and define the strategy' },
      { v: <><em>260</em>y</>, k: 'years of domain to respect and redesign' },
      { v: <><em>3</em></>, k: 'workstreams aligned — BA · Design · Dev' },
    ],
    chapters: [
      {
        kicker: 'Context',
        title: <>Two hundred and sixty years <em>of</em> domain.</>,
        paragraphs: [
          <>Lloyd&rsquo;s Register is the world&rsquo;s oldest marine classification company. Surveyors inspect ships across every port on the planet, and the output of their work is the difference between a vessel being certified — or not.</>,
          <>The internal tool that supported them was slow, fragmented, and built without them in mind. I joined to shape the product strategy for a complete rethink.</>,
        ],
      },
      {
        kicker: 'The brief',
        title: <>Nine weeks <em>to</em> a strategy.</>,
        paragraphs: [
          <>I had nine weeks to turn a vague transformation mandate into a concrete design strategy that three continents could build against. The deliverable wasn&rsquo;t a deck — it was a shared understanding that <strong>survived contact</strong> with delivery.</>,
        ],
        list: [
          <><strong>Field research</strong> — shadowing surveyors in port.</>,
          <><strong>Stakeholder interviews</strong> — global ops, compliance, engineering.</>,
          <><strong>Competitive teardown</strong> — sector tools and adjacent industries.</>,
          <><strong>Prototyped hypotheses</strong> — pressure-tested with real surveyors.</>,
        ],
      },
      {
        kicker: 'Research',
        title: <>On deck, not <em>on</em> paper.</>,
        paragraphs: [
          <>I ran the UX workstream as an individual contributor, leading research onsite and remotely. The central question wasn&rsquo;t &lsquo;what feature do they need&rsquo; — it was <em>&lsquo;where does the work actually happen?&rsquo;</em></>,
          <>Answer: half on a pitching deck, half back at the office. That simple insight reshaped the product from &lsquo;one interface&rsquo; into a <strong>dual-platform experience</strong> — one for the field, one for the desk, with a shared model underneath.</>,
        ],
        visual: { layout: 'two', items: [
          { caption: 'Surveyor journey · ship → desk' },
          { caption: 'Dual-platform concept', accent: 'oklch(0.66 0.18 20)' },
        ]},
      },
      {
        kicker: 'The pivot',
        title: <>Holding the <em>middle.</em></>,
        paragraphs: [
          <>While leading UX and visual design, I also served as the key pivot between business analysis, design, and development — coordinating across globally distributed teams in the UK, India and Singapore.</>,
          <>When three disciplines speak three different languages, someone has to translate. That was a quiet, unglamorous part of the role — and the single biggest reason delivery stayed on the rails.</>,
        ],
        quote: { text: <>Led UX work-streams for major transformation projects — ensuring alignment and delivery across globally distributed teams.</>, cite: 'Role summary, BAE Systems' },
      },
      {
        kicker: 'Delivery',
        title: <>Strategy <em>that</em> shipped.</>,
        paragraphs: [
          <>The strategy wasn&rsquo;t a one-off artefact. It informed two years of delivery, a second engagement phase, and directly led to <strong>£1.5M+ in consulting fees</strong> — because the work kept paying back.</>,
        ],
        visual: { layout: 'three', items: [
          { caption: 'Strategy deliverable — vision' },
          { caption: 'Flow specs — surveyor desk' },
          { caption: 'System map · integrations' },
        ]},
      },
    ],
    results: [
      <><strong>£1.5M+ consulting fees</strong> secured across two years, directly traceable to the strategy phase.</>,
      <><strong>Dual-platform product</strong> — a field-side tool and a desk-side tool, with a shared data model.</>,
      <><strong>Nine-week strategy</strong> that survived two years of delivery pressure without being rewritten.</>,
      <><strong>Cross-continent alignment</strong> across business analysis, design, and engineering in three time zones.</>,
      <><strong>Domain respect earned</strong> — the product team was trusted by surveyors, not just tolerated.</>,
      <><strong>Playbook</strong> reused on subsequent BAE Systems engagements.</>,
    ],
    others: [OTHER.taskize, OTHER.santander, OTHER.mytr],
  },

  // ============ MY TR / MY REFINITIV ============
  mytr: {
    slug: 'mytr',
    breadcrumb: 'My Thomson Reuters',
    name: <>My<span style={SUB}> / Thomson Reuters</span></>,
    year: '2017 — 2019',
    tags: ['Leadership', 'Research', 'UX / UI', 'Design System'],
    swatch: 'oklch(0.45 0.13 65)',
    tagline: <>The account-management platform for financial, legal and governmental institutions. I led the full redesign — work recognised with <strong>multiple international UX and interface design awards</strong>.</>,
    overview: [
      { label: 'Client', items: ['Thomson Reuters / Refinitiv', 'B2B · enterprise accounts', 'Financial, legal, gov. institutions'] },
      { label: 'Role', items: ['Lead UX Designer (freelance)', 'Lead Product Designer (perm)', 'Design system lead'] },
      { label: 'Scope', items: ['Information architecture', 'End-to-end redesign', 'Licensing, billing, support', 'Data-viz for World-Check'] },
      { label: 'Impact', items: ['$100M revenue feature (World-Check)', 'Multiple intl. design awards', 'Team scaled 2 → 18'] },
    ],
    metrics: [
      { v: <>$<em>100</em>M</>, k: 'revenue feature designed for World-Check' },
      { v: <><em>8</em>×</>, k: 'international design & UX awards' },
      { v: <>2 → <em>18</em></>, k: 'internal design team scaled in 12 months' },
      { v: <><em>1</em></>, k: 'unified My TR / My Refinitiv system' },
    ],
    chapters: [
      {
        kicker: 'Context',
        title: <>The <em>back office</em> of global finance.</>,
        paragraphs: [
          <>&lsquo;My Thomson Reuters&rsquo; — later &lsquo;My Refinitiv&rsquo; — is where financial, legal and governmental institutions manage their relationship with one of the world&rsquo;s largest information providers. Understand what you own, buy or redeem licences, get support, pay bills.</>,
          <>Mission-critical, unglamorous, and buried under years of legacy. The redesign had to respect the complexity and still feel modern to someone who uses Stripe on the weekend.</>,
        ],
      },
      {
        kicker: 'IA',
        title: <>Untangling the <em>spine.</em></>,
        paragraphs: [
          <>The core problem wasn&rsquo;t visual — it was information architecture. Years of bolt-on features had left users unable to find the one thing they&rsquo;d come to do. I redesigned the IA first, then let the UI follow.</>,
          <>A card-sort and tree-test program with real enterprise administrators exposed the wrong mental models baked into the navigation. We rebuilt around <strong>tasks</strong>, not product lines.</>,
        ],
        visual: { layout: 'two', items: [
          { caption: 'Card sort · enterprise admins' },
          { caption: 'New IA — task-oriented', accent: 'oklch(0.66 0.18 20)' },
        ]},
      },
      {
        kicker: 'Design system',
        title: <>A <em>system,</em> not a skin.</>,
        paragraphs: [
          <>I led the development and implementation of the MyRefinitiv design system — tokens, components, patterns, and the governance around them. It became the baseline for other TR/Refinitiv products to adopt.</>,
          <>The 12 months I was embedded, the internal design team scaled from <strong>2 to 18</strong> — and the system was what let that growth actually ship consistent product.</>,
        ],
      },
      {
        kicker: 'Vision prototypes',
        title: <>Prototypes that <em>sold.</em></>,
        paragraphs: [
          <>Beyond the core redesign, I delivered vision prototypes for new product features to guide agile delivery teams. They became the lingua franca between product, eng and sales — a way to de-risk scope debates.</>,
        ],
        visual: { layout: 'wide', items: [{ caption: 'Vision prototypes — internal sales enablement' }] },
      },
      {
        kicker: 'World-Check',
        title: <>A $<em>100M</em> feature.</>,
        paragraphs: [
          <>In the Singapore Refinitiv Labs stint, I designed a $100M revenue-generating feature for <strong>World-Check</strong> — the due-diligence and KYC product used by banks and governments globally.</>,
          <>The work involved deep user and market research supporting new data-visualisation tools. Translating graph theory into interfaces that compliance officers could trust was the hardest — and most rewarding — part.</>,
        ],
        visual: { layout: 'two', items: [
          { caption: 'Data-viz · entity network' },
          { caption: 'KYC workflow redesign', accent: 'oklch(0.66 0.18 20)' },
        ]},
      },
      {
        kicker: 'Recognition',
        title: <>Awarded, <em>on</em> the record.</>,
        paragraphs: [
          <>The work across My TR / Refinitiv and World-Check won multiple international awards: <strong>Best User Experience, Best Home Page, Best UI, IT Project of the Year, Best Interface Design</strong>, and golds from the Customer Experience Awards.</>,
        ],
        list: [
          <>International Business Awards <strong>2018</strong> — Best UX, Best Home Page, Best UI, Best IT Team.</>,
          <>International Business Awards <strong>2019</strong> — IT Project of the Year, Best Home Page, Best Interface Design.</>,
          <>Customer Experience Awards <strong>2019</strong> — Gold: Best International Business Experience. Silver: Engaging the Customer Online.</>,
        ],
      },
    ],
    results: [
      <><strong>$100M revenue feature</strong> shipped for World-Check — one of the largest financial impact projects of my career.</>,
      <><strong>Multiple international awards</strong> across 2018 and 2019 recognising UX, UI, home page and interface design.</>,
      <><strong>Design system</strong> became the baseline for other Refinitiv products to adopt.</>,
      <><strong>Team scaled 2 → 18</strong> in 12 months; I shaped hiring, craft bar and onboarding.</>,
      <><strong>IA overhaul</strong> that moved the product from product-line navigation to task-oriented flow.</>,
      <><strong>Vision prototypes</strong> that aligned product, engineering and sales on roadmap priorities.</>,
    ],
    others: [OTHER.taskize, OTHER.santander, OTHER.lloyds],
  },

  // ============ VODAFONE ============
  vodafone: {
    slug: 'vodafone',
    breadcrumb: 'Vodafone Business UK',
    name: <>Vodafone<span style={SUB}> / Business UK</span></>,
    year: '2012 — 2015',
    tags: ['UX Strategy', 'Lead Gen', 'CRO', 'Design System'],
    swatch: 'oklch(0.52 0.2 25)',
    tagline: <>Led UX for Vodafone&rsquo;s corporate transformation — delivering a <strong>3000% increase in leads</strong> for Vodafone Business UK and a <strong>65% reduction in bounce rate</strong> on the corporate site through strategic, data-informed design.</>,
    overview: [
      { label: 'Client', items: ['Vodafone Business UK', 'Vodafone Corporate', 'Engaged via BAE Systems'] },
      { label: 'Role', items: ['UX Workstream Lead', 'Personas & journeys', 'Design system contributor'] },
      { label: 'Scope', items: ['Corporate website', 'Business lead-gen funnels', 'Multi-stakeholder governance'] },
      { label: 'Duration', items: ['Multi-year engagement', 'UK-based, on-site', 'Enterprise rollout'] },
    ],
    metrics: [
      { v: <><em>3000%</em></>, k: 'increase in leads — Vodafone Business UK' },
      { v: <>−<em>65%</em></>, k: 'bounce rate on the corporate website' },
      { v: <><em>1</em></>, k: 'scalable design system seeded for product teams' },
      { v: <><em>3</em>yrs</>, k: 'sustained engagement across transformation' },
    ],
    chapters: [
      {
        kicker: 'Context',
        title: <>A telecom giant with <em>invisible</em> leads.</>,
        paragraphs: [
          <>Vodafone&rsquo;s business-facing properties were generating massive traffic but converting almost none of it. A confusing IA, over-designed home page, and disconnected lead-gen funnels meant prospects came, looked, and left.</>,
          <>I joined the BAE Systems engagement to lead the UX workstream — inside a stakeholder map that spanned brand, product, sales, and regional marketing.</>,
        ],
      },
      {
        kicker: 'Research',
        title: <>Watching <em>where</em> people left.</>,
        paragraphs: [
          <>We combined analytics teardown, session replay, and stakeholder interviews to map where business prospects bailed — and why. The pattern was clear: the site answered marketing&rsquo;s questions, not the buyer&rsquo;s.</>,
        ],
        list: [
          <><strong>Personas</strong> grounded in real buying committees — IT, finance, line-of-business.</>,
          <><strong>User journeys</strong> mapped to the actual sales funnel, not the nav bar.</>,
          <><strong>Content hypotheses</strong> tested with copy variants in market.</>,
        ],
        visual: { layout: 'two', items: [
          { caption: 'Buyer journey · B2B telecoms' },
          { caption: 'Drop-off heatmap · before', accent: 'oklch(0.66 0.18 20)' },
        ]},
      },
      {
        kicker: 'Redesign',
        title: <>From brochure to <em>funnel.</em></>,
        paragraphs: [
          <>We rebuilt the site around the buyer&rsquo;s job-to-be-done: fewer pages, sharper messaging, a direct path from need to qualified conversation. The design system we seeded became the baseline for product teams downstream.</>,
        ],
        visual: { layout: 'wide', items: [{ caption: 'Corporate home · new system', accent: 'oklch(0.66 0.18 20)' }] },
      },
    ],
    results: [
      <><strong>3000% increase in leads</strong> for Vodafone Business UK — the single-largest commercial UX uplift of my career.</>,
      <><strong>65% bounce-rate reduction</strong> on the Vodafone corporate website.</>,
      <><strong>Scalable design system</strong> handed off to product teams for reuse across the estate.</>,
      <><strong>Personas, journeys, IA</strong> adopted as the common language across brand, product and sales.</>,
    ],
    others: [OTHER.bt, OTHER.taskize, OTHER.santander],
  },

  // ============ BT ============
  bt: {
    slug: 'bt',
    breadcrumb: 'British Telecom',
    name: <>British<span style={SUB}> / Telecom</span></>,
    year: '2011 — 2012',
    tags: ['UX', 'IA', 'CRO', 'Accessibility'],
    swatch: 'oklch(0.42 0.15 280)',
    tagline: <>Led UX and information architecture across BT&rsquo;s consumer estate — improving the product purchase flow by <strong>+12% conversion</strong> and reducing drop-off on key pages by <strong>40%</strong>, plus a full redesign of My BT and the parental-control tools.</>,
    overview: [
      { label: 'Client', items: ['British Telecom (BT)', 'Consumer products', 'Internal support platforms'] },
      { label: 'Role', items: ['User Experience & IA', 'Flow redesign lead', 'Parental-controls UX overhaul'] },
      { label: 'Scope', items: ['Product purchase flow', 'My BT account app', 'Internal support tools', 'Accessibility improvements'] },
      { label: 'Stakes', items: ['Multi-million-£ product revenue', 'Hundreds of thousands of users', 'Parental tool compliance'] },
    ],
    metrics: [
      { v: <>+<em>12%</em></>, k: 'conversion uplift on product purchase flow' },
      { v: <>−<em>40%</em></>, k: 'drop-off on key checkout pages' },
      { v: <><em>A11y</em></>, k: 'parental controls rebuilt for accessibility' },
      { v: <><em>1st</em></>, k: 'role where IA became the unlock' },
    ],
    chapters: [
      {
        kicker: 'Context',
        title: <>Complex journeys, <em>real</em> money.</>,
        paragraphs: [
          <>BT&rsquo;s product purchase flow carried enormous commercial weight — any friction translated directly into lost revenue. The flow had grown organically over years; every edge case had been patched rather than designed.</>,
        ],
      },
      {
        kicker: 'Rework',
        title: <>Simplify the <em>spine.</em></>,
        paragraphs: [
          <>I rebuilt the IA around user goals, removed duplicate steps, and rationalised the fork logic. The result was a flow that felt shorter even though the logical steps were identical — because every screen did one job.</>,
        ],
        visual: { layout: 'two', items: [
          { caption: 'Flow diff · before & after' },
          { caption: 'My BT redesign', accent: 'oklch(0.66 0.18 20)' },
        ]},
      },
      {
        kicker: 'Parental controls',
        title: <>Accessibility is <em>not</em> optional.</>,
        paragraphs: [
          <>The parental-control tools served families — including users with a wide range of abilities. I led a full UX overhaul with accessibility as a first-class constraint, not a compliance afterthought.</>,
        ],
      },
    ],
    results: [
      <><strong>+12% conversion</strong> on the product purchase flow.</>,
      <><strong>−40% drop-off</strong> on the flow&rsquo;s most-bailed pages.</>,
      <><strong>My BT redesigned</strong> along with internal support platforms serving the same user base.</>,
      <><strong>Parental-control UX</strong> overhauled with accessibility at the centre.</>,
    ],
    others: [OTHER.vodafone, OTHER.taskize, OTHER.santander],
  },

  // ============ WASALT / QUARA ============
  wasalt: {
    slug: 'wasalt',
    breadcrumb: 'Wasalt & Quara Finance',
    name: <>Wasalt <span style={AMP}>&amp;</span> Quara</>,
    year: '2021 — 2022',
    tags: ['Freelance', 'Lead UX', 'Multi-platform', 'Design System'],
    swatch: 'oklch(0.45 0.13 155)',
    tagline: <>A remote-to-Saudi-Arabia engagement leading UX and UI for <strong>Wasalt Real Estate</strong> and <strong>Quara Finance</strong> across responsive web, iOS and Android — applying HCD to lift engagement, usability and satisfaction.</>,
    overview: [
      { label: 'Clients', items: ['Wasalt Real Estate', 'Quara Finance', 'Remote → Saudi Arabia'] },
      { label: 'Role', items: ['Freelance Lead UX / Product Designer', 'Direct-to-stakeholder delivery', 'Design system architect'] },
      { label: 'Scope', items: ['Responsive web', 'iOS native', 'Android native', 'Foundational component libraries'] },
      { label: 'Approach', items: ['Human-centred design', 'Stakeholder co-design', 'Streamlined feedback loops'] },
    ],
    metrics: [
      { v: <><em>2</em></>, k: 'brands designed side-by-side' },
      { v: <><em>3</em></>, k: 'platforms — web · iOS · Android' },
      { v: <><em>2</em></>, k: 'foundational design libraries seeded' },
      { v: <><em>1y</em></>, k: 'engagement window, end-to-end' },
    ],
    chapters: [
      {
        kicker: 'Context',
        title: <>Two brands, <em>one</em> design mind.</>,
        paragraphs: [
          <>Wasalt is a property portal; Quara is a consumer-finance offer. Different audiences, overlapping ambitions, and a shared need: a design function that could move fast without compromising craft.</>,
        ],
      },
      {
        kicker: 'Approach',
        title: <>HCD, <em>shipped</em> fast.</>,
        paragraphs: [
          <>I applied human-centred design methodologies tuned for a freelance cadence — tight research loops, stakeholder co-design, and a single-source-of-truth in Figma that kept review cycles short.</>,
        ],
        list: [
          <><strong>Responsive web</strong> for marketing and core product journeys.</>,
          <><strong>Native iOS &amp; Android</strong> for consumer-facing engagement.</>,
          <><strong>Foundational libraries</strong> that evolved into scalable design systems.</>,
        ],
        visual: { layout: 'two', items: [
          { caption: 'Wasalt · property search' },
          { caption: 'Quara · finance onboarding', accent: 'oklch(0.66 0.18 20)' },
        ]},
      },
      {
        kicker: 'Delivery',
        title: <>Cutting the <em>rework.</em></>,
        paragraphs: [
          <>The biggest unlock wasn&rsquo;t visual — it was process. I streamlined stakeholder feedback, introduced structured review sessions, and consolidated feedback channels. The result: shorter delivery cycles and a visible drop in rework.</>,
        ],
      },
    ],
    results: [
      <><strong>Lifted engagement, usability and satisfaction</strong> across both brands via HCD methods.</>,
      <><strong>Scalable foundations</strong> — the libraries I built evolved into proper design systems post-handoff.</>,
      <><strong>Shorter delivery cycles</strong> through streamlined stakeholder feedback and review processes.</>,
      <><strong>Cross-platform consistency</strong> across responsive web, iOS and Android for both products.</>,
    ],
    others: [OTHER.taskize, OTHER.santander, OTHER.mytr],
  },

  // ============ AXA ============
  axa: {
    slug: 'axa',
    breadcrumb: 'AXA Digital',
    name: <>AXA<span style={SUB}> / Digital</span></>,
    year: '2026 — Current',
    tags: ['AI', 'Enterprise', 'Lead Product Design', 'Global'],
    swatch: 'oklch(0.4 0.14 250)',
    tagline: <>Conceiving and delivering an <strong>enterprise AI-driven knowledge platform</strong> for <strong>150,000 professional users</strong> across AXA&rsquo;s global operations — leading end-to-end design, research, ideation, prototyping and delivery in a fast cross-functional environment.</>,
    overview: [
      { label: 'Client', items: ['AXA Digital Group Solutions', 'Global insurance group', 'Lisbon hybrid'] },
      { label: 'Role', items: ['Lead Product Designer', 'End-to-end ownership', 'Cross-functional partnership'] },
      { label: 'Scope', items: ['AI knowledge platform', '150,000 professional users', 'Global operations'] },
      { label: 'Phase', items: ['Conception → delivery', 'Live engagement', 'Confidential detail — outline only'] },
    ],
    metrics: [
      { v: <><em>150k</em></>, k: 'professional users across AXA global' },
      { v: <><em>AI</em></>, k: 'knowledge platform — new product category' },
      { v: <><em>E2E</em></>, k: 'end-to-end design ownership' },
      { v: <><em>1</em></>, k: 'Lead Product Designer on the initiative' },
    ],
    chapters: [
      {
        kicker: 'Context',
        title: <>An <em>AI</em> product at insurance scale.</>,
        paragraphs: [
          <>AXA set out to build an enterprise AI-driven knowledge platform for 150,000 professional users across its global operations — a product category that doesn&rsquo;t have a settled playbook yet, at a scale that leaves no margin for speculation.</>,
          <>I&rsquo;m leading end-to-end design, research, ideation, prototyping and delivery — partnering closely with product, engineering and domain experts to translate AI capability into interfaces professionals trust.</>,
        ],
      },
      {
        kicker: 'How',
        title: <>Shape, test, <em>ship.</em></>,
        paragraphs: [
          <>Because the solution space is new, we lean hard on continuous discovery: rapid prototypes, weekly user contact, and tight feedback loops that let us invalidate assumptions before they become tech debt.</>,
          <>Details of the product are confidential — but the working posture is the same one that produced measurable results at Taskize, Santander and Refinitiv: own the craft, share the thinking, ship on rhythm.</>,
        ],
      },
    ],
    results: [
      <><strong>Live engagement</strong> — outcomes to be published as the product reaches milestones.</>,
      <><strong>End-to-end ownership</strong> from conception to delivery of a new AI product line at enterprise scale.</>,
      <><strong>Cross-functional posture</strong> — embedded with product, engineering and domain experts across time zones.</>,
    ],
    others: [OTHER.taskize, OTHER.santander, OTHER.mytr],
  },
};

export const PROJECT_SLUGS = Object.keys(PROJECTS);
