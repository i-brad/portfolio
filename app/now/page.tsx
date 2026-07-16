import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { now, nowUpdated } from "@/lib/now";
import { formatDate } from "@/lib/utils";
import {
  Hammer,
  GraduationCap,
  BookOpen,
  Eye,
  Headphones,
  Target,
  Trophy,
  Mountain,
} from "lucide-react";

const description =
  "A living snapshot of what I'm building, learning, reading, and thinking about right now.";

export const metadata: Metadata = {
  title: "Now",
  description,
  alternates: { canonical: "/now" },
  openGraph: { title: "Now", description, url: "/now" },
};

const blocks = [
  { title: "Currently building", items: now.building, Icon: Hammer, accent: true },
  { title: "Learning", items: now.learning, Icon: GraduationCap },
  { title: "Reading", items: now.reading, Icon: BookOpen },
  { title: "Watching", items: now.watching, Icon: Eye },
  { title: "Listening", items: now.listening, Icon: Headphones },
  { title: "Goals", items: now.goals, Icon: Target },
  { title: "Recent wins", items: now.wins, Icon: Trophy },
  { title: "Recent challenges", items: now.challenges, Icon: Mountain },
];

export default function NowPage() {
  return (
    <>
      <PageHeader
        eyebrow="Now"
        title="What I'm focused on right now."
        description="A living page, updated as my focus shifts — inspired by Derek Sivers' /now movement."
      >
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Last updated {formatDate(nowUpdated)}
        </p>
      </PageHeader>

      <section className="container-page py-20">
        <Stagger className="grid gap-5 sm:grid-cols-2">
          {blocks.map((block) => (
            <StaggerItem key={block.title} className="h-full">
              <div
                className={`flex h-full flex-col gap-4 rounded-2xl border p-7 transition-colors ${
                  block.accent
                    ? "border-accent/30 bg-accent/5"
                    : "border-border bg-surface/40 hover:border-accent/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface text-accent ring-1 ring-border">
                    <block.Icon size={16} />
                  </span>
                  <h2 className="font-display text-lg font-semibold tracking-tight">
                    {block.title}
                  </h2>
                </div>
                <ul className="space-y-2.5">
                  {block.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted">
            Think we should talk?{" "}
            <a
              href="/contact"
              className="text-ink underline decoration-accent/50 decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
            >
              Say hello
            </a>
            .
          </p>
        </Reveal>
      </section>
    </>
  );
}
