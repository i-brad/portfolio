export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    category: "Mobile",
    items: [
      "React Native",
      "Expo",
      "Push Notifications",
      "Deep Linking",
      "Cross-Platform",
    ],
  },
  {
    category: "Backend & Systems",
    items: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "Webhooks",
      "OAuth",
      "Real-time (Pusher)",
    ],
  },
  {
    category: "Data & Storage",
    items: [
      "Firebase",
      "Firestore",
      "Supabase",
      "PostgreSQL",
      "MongoDB",
      "S3-compatible",
      "ImageKit",
    ],
  },
  {
    category: "AI & Blockchain",
    items: ["OpenAI", "EVM", "Aptos", "Solana", "SDK Development"],
  },
  {
    category: "Infrastructure",
    items: ["GitHub Actions", "Vercel", "Rollup", "NPM"],
  },
];
