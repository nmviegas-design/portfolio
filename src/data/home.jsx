// ============ HOMEPAGE DATA ============

export const HIGHLIGHTS = [
  {
    tag: 'Taskize · Euroclear',
    metric: <>500<em>+</em></>,
    sup: 'banks',
    text: <>Led the product redesign seen across <strong>500+ of the world&rsquo;s top investment banks</strong>. Built a scalable design system and delivered vision prototypes that secured hundreds of thousands of pounds in promised revenue.</>,
    span: 'wide',
  },
  {
    tag: 'Santander Portugal',
    metric: <>6 <span className="sup">→</span> <em>25</em></>,
    text: <>Scaled a team of 6 UI Designers into a <strong>multidisciplinary group of 25</strong> — Product Designers, Researchers &amp; UX Writers — overseeing a portfolio of 40+ products while staying hands-on.</>,
    span: 'wide',
  },
  {
    tag: 'Vodafone Business UK',
    metric: <><em>3000%</em></>,
    text: <>Generated a <strong>3000% increase in leads</strong> for Vodafone Business UK and a 65% reduction in bounce rate on the corporate site through data-informed UX.</>,
    span: 'normal',
  },
  {
    tag: 'BT · British Telecom',
    metric: <><em>+12%</em> <span className="sup">/ –40%</span></>,
    text: <>Improved BT&rsquo;s product purchase flow with a <strong>12% increase in conversion</strong> and a <strong>40% reduction in drop-out</strong> on key pages.</>,
    span: 'normal',
  },
  {
    tag: "Lloyd's Register",
    metric: <>£<em>1.5</em>M</>,
    text: <>In <strong>9 weeks</strong> led research and defined the product design strategy for an internal application — work that helped secure £1.5M in consulting fees.</>,
    span: 'normal',
  },
  {
    tag: 'Awards · Refinitiv',
    metric: <>8<em>×</em></>,
    sup: 'intl. awards',
    text: <>My work at Refinitiv was recognised with <strong>multiple international UX &amp; interface design awards</strong> — celebrating innovation and impact across complex financial platforms.</>,
    span: 'full',
  },
];

export const BRANDS = [
  'Santander', <>AXA <em>✦</em></>, 'Taskize', 'Euroclear', 'Refinitiv',
  'Thomson Reuters', 'BT', 'Vodafone', "Lloyd's Register", 'BAE Systems',
  'Wasalt', 'Quara', 'EE', 'Yotel', 'IDEO U',
];

// Each work item links to its own case study via slug. Anchored to the same
// PROJECTS map in src/data/projects.jsx — keep slugs in sync.
export const WORKS = [
  {
    num: '01', slug: 'axa', title: 'AXA', sub: 'Digital Group — Current',
    tags: ['AI', 'Enterprise', 'Lead Design'],
    desc: 'Conceiving and delivering an enterprise AI-driven knowledge platform for 150,000 professional users across AXA\u2019s global operations. Leading end-to-end design, research, ideation, prototyping and delivery in a fast-paced cross-functional environment.',
    swatch: 'oklch(0.4 0.14 250)',
  },
  {
    num: '02', slug: 'santander', title: 'Santander', sub: 'Portugal',
    tags: ['Leadership', 'Design Ops', 'UX \u00b7 UI'],
    desc: 'At the country\u2019s largest private retail bank, grew the design team from 6 to 25 in 18 months \u2014 a multidisciplinary group supporting a portfolio of 40+ products. Championed a new design system and led the new account-opening flow as an individual contributor.',
    swatch: 'oklch(0.55 0.18 25)',
  },
  {
    num: '03', slug: 'lloyds', title: "Lloyd's Register", sub: 'UK',
    tags: ['Leadership', 'Research \u00b7 Strategy', 'UX \u00b7 UI'],
    desc: 'The world\u2019s oldest marine classification company. Shaped the product strategy for a critical internal tool \u2014 work that led to over \u00a31.5M in consulting fees across two years \u2014 while acting as the key pivot between business analysis, design, and distributed development teams.',
    swatch: 'oklch(0.38 0.08 230)',
  },
  {
    num: '04', slug: 'taskize', title: 'Taskize', sub: 'a Euroclear company',
    tags: ['Leadership', 'Research \u00b7 Strategy', 'Design System'],
    desc: 'Led the full redesign of the leading post-trade exception resolution platform \u2014 defining the delivery strategy, setting new UX/UI standards, and building a scalable design system. Brought early WCAG 2.2 AA compliance ahead of EU accessibility regulations.',
    swatch: 'oklch(0.5 0.14 155)',
  },
  {
    num: '05', slug: 'mytr', title: 'My Thomson Reuters', sub: 'My Refinitiv',
    tags: ['Leadership', 'Research \u00b7 Strategy', 'UX \u00b7 UI'],
    desc: 'The account management app for financial, legal, and governmental institutions \u2014 where they manage software, licenses, billing, and support. Led the full redesign, which went on to win several international UX and design awards.',
    swatch: 'oklch(0.45 0.13 65)',
  },
  {
    num: '06', slug: 'vodafone', title: 'Vodafone Business', sub: 'UK',
    tags: ['UX Strategy', 'Lead Gen', 'CRO'],
    desc: 'Led UX for Vodafone\u2019s corporate transformation \u2014 delivering a 3000% increase in leads for Vodafone Business UK and a 65% reduction in bounce rate on the corporate site through strategic, data-informed design.',
    swatch: 'oklch(0.52 0.2 25)',
  },
  {
    num: '07', slug: 'bt', title: 'British Telecom', sub: 'BT',
    tags: ['UX', 'IA', 'Accessibility'],
    desc: 'Led UX and information architecture across BT\u2019s consumer estate \u2014 improving product purchase conversion by 12% and reducing drop-off by 40%, plus a full redesign of My BT and the parental-control tools with accessibility at the centre.',
    swatch: 'oklch(0.42 0.15 280)',
  },
  {
    num: '08', slug: 'wasalt', title: 'Wasalt & Quara', sub: 'Real Estate \u00b7 Finance \u00b7 KSA',
    tags: ['Freelance', 'Multi-platform', 'Design System'],
    desc: 'A remote-to-Saudi-Arabia engagement leading UX and UI for Wasalt Real Estate and Quara Finance across responsive web, iOS and Android \u2014 applying human-centred design to lift engagement, usability and satisfaction.',
    swatch: 'oklch(0.45 0.13 155)',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sam Medrington',
    role: 'Head of UX',
    company: 'BAE Systems',
    body: <>Nuno has consistently demonstrated that he is an expert in all areas of the UCD lifecycle, and in particular Information Architecture, Interaction Design and Data Visualisation. He is well-respected by clients, and deserved his reputation at BAE Systems for consistently delivering high-quality work, especially when a solution is needed to a complicated problem in a short space of time. Nuno&rsquo;s approach invariably involves making sure that all stakeholders can see challenges from the perspective of the end user. He is calm under pressure, and able to work in challenging environments.</>,
    featured: true,
  },
  {
    name: 'Adriana Lima',
    role: 'Product Designer',
    company: 'Santander',
    body: <>I had the privilege of working with Nuno at the start of my UX career. He helped me build confidence and develop key critical thinking skills. Even now, Nuno remains a trusted mentor — offering advice and support whenever needed. I&rsquo;m incredibly grateful for his impact on my career and highly recommend him as an inspiring UX leader.</>,
  },
  {
    name: 'Albert Davies',
    role: 'Product Designer',
    company: 'Taskize',
    body: <>His mentorship style has allowed me to learn his process and methods, but he has always placed importance on me developing my own thought patterns. I am genuinely grateful for the time he has invested in my growth — not to mention his patience in answering my countless questions.</>,
  },
  {
    name: 'Ana Cláudia Dias',
    role: 'UX Designer',
    company: 'BAE Systems',
    body: <>I met Nuno when I was taking my very first steps into User Experience, and he was the one who encouraged me to pursue this passion. He&rsquo;s great at sharing knowledge and supporting others around him. Nuno is an inspiration!</>,
  },
];
