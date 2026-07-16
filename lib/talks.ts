export type Talk = {
  title: string;
  event: string;
  // Optional — set the year once you confirm it.
  year?: string;
  description: string;
  href: string;
};

export const talks: Talk[] = [
  {
    title: "Making Webpages Interactive with Stimulus",
    event: "meets.sh",
    description:
      "A walkthrough of Stimulus — the modest JavaScript framework for the HTML you already have — and how to add rich interactivity without reaching for a full SPA.",
    href: "https://meets.sh/events/making-webpages-interactive-with-stimulus",
  },
];
