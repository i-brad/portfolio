// Case studies grounded in Destiny's real experience (see résumé).
// Narrative framing is editorial — refine any specifics you'd like to sharpen.

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  featured: boolean;
  technologies: string[];
  outcome: string;
  link?: string;
  links?: { label: string; href: string }[];
  repo?: string;
  accent?: string;
  caseStudy: {
    problem: string;
    research: string;
    approach: string;
    decisions: { title: string; body: string }[];
    challenges: string;
    outcome: string;
    reflection: string;
    metrics?: { label: string; value: string }[];
  };
};

export const projects: Project[] = [
  {
    slug: "xng-markets",
    title: "XNG Markets",
    tagline: "A markets platform, in active development",
    description:
      "A product I'm currently building and contributing to — a markets platform focused on a fast, trustworthy trading experience. Live and evolving.",
    role: "Engineer",
    year: "2025—Now",
    featured: true,
    technologies: ["TypeScript", "Next.js", "Node.js", "Real-time"],
    outcome: "Currently building — shipping and iterating in the open.",
    link: "https://xng.markets",
    accent: "#7C5CFF",
    caseStudy: {
      problem:
        "Markets products live and die on two things: whether users trust the numbers in front of them, and whether the experience is fast enough to act on. Getting both right at once is the hard part.",
      research:
        "The work here is grounded in what I learned shipping on-chain infrastructure — where correctness, real-time state, and clear UX decide whether people come back. I'm applying those lessons directly to XNG.",
      approach:
        "I'm building XNG with a focus on real-time data, a clean and legible interface, and infrastructure that stays correct under load. It's shipping and evolving in the open rather than waiting for a perfect v1.",
      decisions: [
        {
          title: "Real-time first",
          body: "A markets product that lags is a markets product that misleads. Live, consistent state is the foundation everything else sits on.",
        },
        {
          title: "Legibility over density",
          body: "The interface aims to make the important number obvious, not to cram every metric onto one screen.",
        },
        {
          title: "Ship and learn",
          body: "XNG is in active development — I'd rather put it in front of real users and iterate than polish in private.",
        },
      ],
      challenges:
        "This one is still being written. The current focus is reliability and real-time performance as the product grows.",
      outcome:
        "XNG is live and in active development. This case study will deepen as the product matures.",
      reflection:
        "Everything I learned building high-stakes on-chain systems is going straight into XNG — the goal is a markets experience people actually trust.",
    },
  },
  {
    slug: "education-suite",
    title: "Education Suite",
    tagline: "A product suite for universities, institutions, and schools",
    description:
      "A contract build for the learning platforms that run modern institutions — a full LMS, a MOOC experience, admin tooling, and secure exam proctoring, unified into one coherent product suite.",
    role: "Frontend Engineer",
    year: "2026—Now",
    featured: false,
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    outcome:
      "Currently building the front end across LMS, MOOC, admin, and proctoring surfaces.",
    accent: "#2F6FED",
    caseStudy: {
      problem:
        "Universities and institutions don't run on one app — they run on a fleet of them: a learning management system, open-course delivery, administrative back-office, and exam integrity. Too often those live as disconnected tools with mismatched interfaces, which is exactly the friction students and staff feel every day.",
      research:
        "The through-line across every surface is trust and clarity. Students need coursework that's legible and never loses their progress; administrators need control without complexity; and proctored exams have to be secure without feeling hostile. Getting the front end right across all four is as much a consistency problem as a feature one.",
      approach:
        "I'm building the front end across the suite — LMS, MOOC, admin, and exam proctoring — in Next.js, React, and TypeScript, working toward one shared design language and component system so each surface feels like part of the same product rather than four separate ones.",
      decisions: [
        {
          title: "One system across four surfaces",
          body: "Shared components and patterns mean the LMS, MOOC, admin, and proctoring flows stay consistent — less to learn for users, less to maintain for the team.",
        },
        {
          title: "Clarity for high-stakes moments",
          body: "Exams and grading are high-stakes. The interface aims to make state obvious and mistakes hard, so people trust what's on screen when it matters most.",
        },
        {
          title: "Built for institutions, not just individuals",
          body: "The suite serves universities, organisations, and schools at once, so the front end is designed around roles and scale from the start rather than retrofitted.",
        },
      ],
      challenges:
        "This one is still being written. The current focus is unifying the experience across a broad surface area — a learning platform, open courses, admin, and proctoring — without letting any single one drift out of sync.",
      outcome:
        "The suite is in active development. This case study will deepen as the surfaces ship and mature.",
      reflection:
        "Big platforms feel simple only when the pieces agree with each other. Most of the work here is quiet consistency — the kind users never notice because nothing ever feels out of place.",
    },
  },
  {
    slug: "fend-onchain",
    title: "Fend",
    tagline: "Sailfish, Thrustpad, and the tooling around them",
    description:
      "On-chain infrastructure behind Sailfish (a DEX), Thrustpad (a launchpad), and PrepMe Academy — token creation, staking, airdrops, locking, bridging, and the SDKs and analytics that hold it all together.",
    role: "Software Engineer",
    year: "2024—2026",
    featured: true,
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "Aptos",
      "EVM",
      "Educhain",
      "Node.js",
    ],
    outcome:
      "Powered $100M+ in on-chain volume; scaled from hundreds to thousands of users.",
    links: [
      { label: "Sailfish", href: "https://sailfish.finance" },
      { label: "Sailfish App", href: "https://app.sailfish.finance" },
      { label: "Thrustpad", href: "https://thrustpad.finance" },
      { label: "PrepMe Academy", href: "https://prepme.academy" },
      {
        label: "@sailfishdex/v3-sdk",
        href: "https://www.npmjs.com/package/@sailfishdex/v3-sdk",
      },
    ],
    accent: "#1E7A46",
    caseStudy: {
      problem:
        "A decentralized exchange lives or dies on trust and throughput. Fend needed infrastructure that could move serious on-chain volume reliably, onboard non-crypto-native users without friction, and give the team real visibility into what was happening across chains.",
      research:
        "Working across EVM chains and Aptos, I mapped where users dropped off and where the platform lost transparency. The pattern was clear: onboarding friction and opaque on-chain state were the two biggest drags on growth. Better UX and better observability would move the needle more than any single feature.",
      approach:
        "I built and maintained the infrastructure behind Sailfish (the DEX) and Thrustpad (a full launchpad — token creation, staking, airdrops, and locking mechanisms), plus PrepMe Academy, an EdTech platform with on-chain rewards for students. Underneath sat the internal tooling that made all of it usable: SDKs, bridging infrastructure, crypto faucets, and on-chain analytics pipelines. Growth systems like referrals and leaderboards turned usage into retention.",
      decisions: [
        {
          title: "SDKs to standardize on-chain access",
          body: "Rather than re-implementing chain logic per surface, I built SDKs so mobile, web, and internal tools shared one reliable path to the chain — fewer bugs, faster features.",
        },
        {
          title: "Analytics pipelines for transparency",
          body: "On-chain data is public but unreadable. I designed pipelines that turned raw transactions into transparent, trackable insight for both the team and users.",
        },
        {
          title: "An on-chain bridge to Educhain",
          body: "I built a bridge onto Educhain that brought new users into the ecosystem and helped move over 1M+ EDU onto the chain — making it easy to get assets where they needed to be.",
        },
        {
          title: "Growth loops baked into the product",
          body: "Referral systems, leaderboards, and tracking weren't bolt-ons — they were designed into the core flows, which is how the platform scaled from hundreds to thousands of active users.",
        },
      ],
      challenges:
        "Cross-chain is unforgiving. Bridging assets and keeping state consistent across EVM, Aptos, and Educhain meant designing for partial failure everywhere — retries, idempotency, and reconciliation so a hiccup on one chain never corrupted the user's view of their funds.",
      outcome:
        "The infrastructure processed over $100M in on-chain volume across Sailfish and Thrustpad and helped grow the platform from hundreds to thousands of active users, with a launchpad and community layer built on top.",
      reflection:
        "Crypto's hard problems are mostly distributed-systems problems in disguise. The wins came from boring reliability — SDKs, analytics, reconciliation — not from chasing the flashiest feature.",
      metrics: [
        { label: "On-chain volume", value: "$100M+" },
        { label: "Active users", value: "1,000+" },
        { label: "Chains supported", value: "EVM + Aptos" },
      ],
    },
  },
  {
    slug: "leap",
    title: "Leap",
    tagline: "An AI platform for audio, image, and video",
    description:
      "A product I built to let creators generate audio, images, and video from one place — AI generation, payments in fiat and crypto, and media storage, all stitched into a fast workflow.",
    role: "Founder & Engineer",
    year: "2024",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Zustand",
    ],
    outcome: "Cut content production time for creators from hours to minutes.",
    link: "https://useleap.xyz/",
    accent: "#7C5CFF",
    caseStudy: {
      problem:
        "Creators were juggling a dozen tools to produce a single piece of content — one for audio, another for images, a third for video — each with its own account, billing, and export dance. The tooling was the bottleneck, not the ideas.",
      research:
        "Talking to creators, the real cost wasn't any single generation — it was the context-switching between tools and the friction of paying for each. A single workflow that handled generation, payment, and storage would save more time than a marginally better model.",
      approach:
        "I built Leap as one platform for generating audio, images, and video, integrating multiple AI APIs behind a consistent interface. Payments went through Paystack and crypto so creators could pay how they wanted, and a media storage layer kept everything in one place.",
      decisions: [
        {
          title: "One interface over many AI providers",
          body: "Behind the scenes Leap composes several AI APIs; on the surface it's one predictable workflow. Creators never think about which model does what.",
        },
        {
          title: "Fiat and crypto payments",
          body: "Integrating Paystack alongside crypto meant creators in different regions could actually pay — a small decision with a big effect on who could use the product.",
        },
        {
          title: "Storage as part of the workflow",
          body: "Generated media lands in managed storage automatically, so 'create' and 'keep' are one step, not two.",
        },
      ],
      challenges:
        "Generative AI is slow and occasionally fails. I designed the workflow around asynchronous jobs with clear states and graceful retries, so a slow render felt like progress rather than a frozen screen.",
      outcome:
        "Leap significantly reduced content production time for creators by collapsing a multi-tool workflow into a single platform — and taught me an enormous amount about shipping and running my own product end to end.",
      reflection:
        "Building Leap solo — engineer, designer, and support desk at once — made me ruthless about scope. The product got better every time I cut something.",
    },
  },
  {
    slug: "sprite",
    title: "Sprite",
    tagline: "A Chrome extension for focus & wellbeing",
    description:
      "A browser extension that helps you stay focused and look after your wellbeing while you work — published on the Chrome Web Store.",
    role: "Solo Maker",
    year: "2026",
    featured: false,
    technologies: ["TypeScript", "React", "Chrome APIs"],
    outcome:
      "Live on the Chrome Web Store, helping people work with more intention.",
    link: "https://chromewebstore.google.com/detail/sprite-%E2%80%94-focus-wellbeing/bnibnddnlinkbajbodblndfmjdflfdep",
    accent: "#E0952B",
    caseStudy: {
      problem:
        "The browser is where focus goes to die. Endless tabs, easy distractions, and no gentle nudge back toward the work — or toward taking a break before you burn out.",
      research:
        "I wanted something that respected the user instead of nagging them. The best focus tools feel like a calm presence, not a strict warden — so the bar was helpfulness without friction.",
      approach:
        "Sprite lives in the browser and helps you stay on task and protect your wellbeing, with a light, unobtrusive presence rather than aggressive blocking. I built it end to end and shipped it to the Chrome Web Store.",
      decisions: [
        {
          title: "Gentle over strict",
          body: "Focus tools that punish you get uninstalled. Sprite nudges rather than nags, which is what makes it something you keep around.",
        },
        {
          title: "Wellbeing as a first-class goal",
          body: "It isn't just about blocking distractions — it's about helping you work sustainably, breaks included.",
        },
        {
          title: "Ship it to real users",
          body: "Publishing to the Chrome Web Store meant real installs, real feedback, and the discipline of a public product.",
        },
      ],
      challenges:
        "Extensions live under tight platform constraints and permissions. The work was doing something genuinely helpful within those limits while keeping the experience light and trustworthy.",
      outcome:
        "Sprite is live on the Chrome Web Store, helping people work with more focus and intention.",
      reflection:
        "Small, useful, shipped beats big and hypothetical. Sprite is a reminder that a tiny product done with care can genuinely improve someone's day.",
    },
  },
  {
    slug: "commerce-platform",
    title: "Multi-Currency Commerce",
    tagline: "E-commerce that adapts to where you are",
    description:
      "A multi-currency e-commerce platform with analytics dashboards, role-based access, and location-aware pricing — plus fintech flows like bill payments and trading.",
    role: "Frontend Engineer",
    year: "2023—2024",
    featured: true,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    outcome:
      "Improved application performance by 25%+, lifting SEO and engagement.",
    accent: "#E0952B",
    caseStudy: {
      problem:
        "A commerce platform serving customers across regions was treating everyone the same — one currency, one price, one experience — while performance issues quietly bled conversions and search ranking.",
      research:
        "Profiling the app surfaced two problems at once: pricing logic that ignored the user's location, and a front end heavy enough to hurt both SEO and engagement. Fixing perception (speed) and relevance (localized pricing) together would compound.",
      approach:
        "I led frontend development of a multi-currency platform with location-based pricing, analytics dashboards, and role-based access, then went hard on performance — trimming the critical path so pages felt instant and ranked better.",
      decisions: [
        {
          title: "Location-aware pricing as a first-class concept",
          body: "Currency and price adapted to the user's region instead of being an afterthought, which made the store feel native everywhere it operated.",
        },
        {
          title: "Role-based access for real teams",
          body: "Dashboards and permissions were built around how the business actually worked — different roles seeing and doing different things safely.",
        },
        {
          title: "Performance as a product feature",
          body: "I treated the 25%+ performance gain as a feature, not a chore — faster pages measurably improved SEO and engagement.",
        },
      ],
      challenges:
        "Balancing rich dashboards and analytics against speed meant constant trade-offs. I leaned on careful data fetching and rendering strategy so the experience stayed fast without stripping capability.",
      outcome:
        "The platform improved application performance by 25%+, boosting SEO and user engagement, and shipped fintech flows including bill payments, trading, and crypto integrations alongside the core store.",
      reflection:
        "Performance is a feature users feel before they can name it. The most impactful work here wasn't visible on screen — it was everything I removed from the critical path.",
      metrics: [
        { label: "Performance gain", value: "25%+" },
        { label: "Currencies", value: "Multi" },
        { label: "Surfaces", value: "Store + Admin" },
      ],
    },
  },
  {
    slug: "developer-tooling",
    title: "SDKs & Developer Tooling",
    tagline: "Making integration the easy part",
    description:
      "SDKs, bridging infrastructure, crypto faucets, and automation bots — the internal tools that improved onboarding, usage, and retention across blockchain and fintech products.",
    role: "Software Engineer",
    year: "2024—2025",
    featured: false,
    technologies: ["TypeScript", "Node.js", "Rollup", "NPM", "GitHub Actions"],
    outcome:
      "Cut integration friction and automated onboarding across products.",
    links: [
      {
        label: "@sailfishdex/v3-sdk",
        href: "https://www.npmjs.com/package/@sailfishdex/v3-sdk",
      },
      {
        label: "offline-retry-sdk",
        href: "https://www.npmjs.com/package/offline-retry-sdk",
      },
    ],
    accent: "#1E7A46",
    caseStudy: {
      problem:
        "Every new surface and every new partner re-solved the same integration problems from scratch. Onboarding was slow, error-prone, and inconsistent — a tax paid over and over.",
      research:
        "The recurring pain wasn't the chain logic itself; it was the absence of a shared, well-packaged path to it. Developers needed tools that made the correct integration the default one.",
      approach:
        "I built and published SDKs to npm — including the Sailfish V3 SDK (@sailfishdex/v3-sdk) and offline-retry-sdk, a small library for resilient retries when the network drops — plus bridging infrastructure and crypto faucets. Alongside them I wrote automation: Telegram and WhatsApp bots and real-time, event-driven systems to streamline onboarding, notifications, and analytics.",
      decisions: [
        {
          title: "Package the right path",
          body: "SDKs bundled the tricky parts — signing, bridging, chain quirks — so integrating meant calling a function, not reading a protocol spec.",
        },
        {
          title: "Automate the human bottlenecks",
          body: "Bots handled onboarding and engagement flows that would otherwise need a person, freeing the team and speeding up users.",
        },
        {
          title: "Event-driven by default",
          body: "Real-time systems for analytics and notifications meant the product reacted to on-chain and user events instead of polling for them.",
        },
      ],
      challenges:
        "Developer tools are only as good as their reliability and DX. I invested in clean APIs, versioning through NPM and Rollup, and CI via GitHub Actions so the tools stayed trustworthy as they evolved.",
      outcome:
        "The tooling improved onboarding, usage, and retention across products, and turned repeated integration work into a solved problem other engineers could build on.",
      reflection:
        "Good developer tools are empathy made executable. The best measure of success was how little anyone had to think about them.",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
