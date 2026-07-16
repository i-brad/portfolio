import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { chapters } from "@/lib/journey";

const description =
  "Not a resume — a story. How I went from curiosity to writing code to building products, one chapter at a time.";

export const metadata: Metadata = {
  title: "Journey",
  description,
  alternates: { canonical: "/journey" },
  openGraph: { title: "Journey", description, url: "/journey" },
};

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journey"
        title="How I got here — the long version."
        description="This isn't a list of responsibilities. It's the story of how curiosity turned into a craft, and how writing code turned into building products."
      />

      <section className="container-page py-20 sm:py-28">
        <Timeline chapters={chapters} />
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="container-page py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-2xl font-medium leading-relaxed text-ink sm:text-3xl">
              &ldquo;I stopped measuring myself in features shipped and started
              measuring in problems solved.&rdquo;
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted">
              — Still the plan
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
