export const site = {
  name: "Braimah Destiny(Brad)",
  shortName: "Destiny",
  role: "Product Software Engineer",
  tagline: "Building software people love using.",
  description:
    "Braimah Destiny(Brad) is a product software engineer building scalable software, AI-powered experiences, developer tools, and products that solve real problems.",
  url: "https://www.worksbybrad.xyz",
  locale: "en_US",
  email: "worksbybrad@gmail.com",
  resume: "/resume.pdf",
  avatar: "/profile.jpg",
  ogImage: "/opengraph-image",
};

export const socials = {
  github: "https://github.com/i-brad",
  twitter: "https://twitter.com/_ibrad",
  linkedin: "https://www.linkedin.com/in/braimah-destiny",
  email: `mailto:${site.email}`,
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Journey", href: "/journey" },
  { label: "Talks", href: "/talks" },
  { label: "Now", href: "/now" },
  { label: "Contact", href: "/contact" },
] as const;
