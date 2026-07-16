// Destiny's real journey, based on the résumé. Edit the prose freely —
// the facts (companies, years, outcomes) are drawn from your experience.

export type Chapter = {
  number: number;
  year: string;
  title: string;
  kicker: string;
  story: string[];
  lessons: string[];
  technologies: string[];
};

export const chapters: Chapter[] = [
  {
    number: 1,
    year: "2019",
    title: "Discovering Programming",
    kicker: "Curiosity, a laptop, and Computer Science at Benin",
    story: [
      "It began while I was studying Computer Science at the University of Benin. I opened a JavaScript tutorial expecting a hobby and found a way of thinking. The first time a few lines of code changed something on a screen, I was hooked.",
      "My earliest projects were rough, but they were mine. I realized software wasn't about syntax — it was about turning an idea into something real that another person could use. That realization never left me.",
    ],
    lessons: [
      "Momentum beats intensity — small daily steps compounded faster than any cram session.",
      "Curiosity is a skill you can practice.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    number: 2,
    year: "2022",
    title: "Shipping MVPs with Founders",
    kicker: "Contract work at Abinci and Enterscale",
    story: [
      "My first real work was in the trenches with founders. At Abinci I led the frontend of an MVP from concept to production launch — and watched it help generate real revenue in its first operational cycle. At Enterscale I built the MVP for a team and project management platform.",
      "Code stopped being a solo exercise and became a conversation with a business. I learned that engineering decisions are business decisions, and that shipping the right small thing quickly beats shipping the perfect thing late.",
    ],
    lessons: [
      "Working next to founders teaches you to translate goals into features.",
      "An architecture that bends with change is worth more than a clever one that breaks.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "REST APIs"],
  },
  {
    number: 3,
    year: "2023",
    title: "Becoming a Product Engineer",
    kicker: "Soft Web Digital — commerce, fintech, performance",
    story: [
      "At Soft Web Digital I led development of a multi-currency e-commerce platform with analytics, role-based access, and location-based pricing — and shipped fintech flows like bill payments, trading, and crypto integrations. I improved performance by 25% and felt it move real metrics.",
      "This is where the question I asked myself changed. Not 'how do I build this?' but 'should this exist, and for whom?' I started measuring myself in problems solved instead of features shipped.",
    ],
    lessons: [
      "Performance is a feature users feel before they can name it.",
      "Design and business context make you a better engineer, not a distracted one.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    number: 4,
    year: "2024",
    title: "Scaling On-Chain Systems",
    kicker: "Fend Group — a DEX, a launchpad, and $100M+ in volume",
    story: [
      "The problems got bigger. At Fend I built and maintained infrastructure for a blockchain DEX processing over $100M in on-chain volume, developed a launchpad with token creation, staking, airdrops, and locking, and led a community-driven platform on the Aptos blockchain.",
      "I learned to care about the unglamorous things — SDKs, bridging, reconciliation, on-chain analytics — that hold everything up. The growth systems I built helped scale the platform from hundreds to thousands of active users.",
    ],
    lessons: [
      "Crypto's hard problems are distributed-systems problems in disguise.",
      "You can't fix — or grow — what you can't observe.",
    ],
    technologies: ["TypeScript", "React Native", "Expo", "Aptos", "EVM", "Node.js"],
  },
  {
    number: 5,
    year: "2024",
    title: "Building My Own Product",
    kicker: "Leap — an AI content platform, built solo",
    story: [
      "I wanted to feel the whole loop, so I built Leap: an AI platform for generating audio, images, and video, with fiat and crypto payments and managed media storage. It collapsed a multi-tool workflow into one place and cut creators' production time sharply.",
      "Being the engineer, designer, and support desk at once is humbling. It made me faster, more decisive, and far more respectful of everyone who does the parts of product I used to ignore.",
    ],
    lessons: [
      "Talk to users before you open your editor.",
      "The smallest lovable version is almost always smaller than you think.",
    ],
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Zustand", "OpenAI"],
  },
  {
    number: 6,
    year: "2025",
    title: "AI, and What's Next",
    kicker: "Where the craft is heading",
    story: [
      "AI didn't replace the craft — it raised the ceiling on what one engineer can attempt. I build with it daily and build products on top of it, learning where it's magical and where it quietly lies.",
      "My focus now is trustworthy, product-grade AI experiences and the systems that make them reliable at scale. The frontier is moving fast, and I intend to keep shipping on it.",
    ],
    lessons: [
      "AI products are trust products first and model products second.",
      "The interesting work now is orchestration and evaluation, not just prompting.",
    ],
    technologies: ["OpenAI", "AI Workflows", "Real-time Systems", "TypeScript"],
  },
];
