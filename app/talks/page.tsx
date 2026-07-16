import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { TalkCard } from "@/components/talk-card";
import { Reveal } from "@/components/reveal";
import { talks } from "@/lib/talks";

const description =
  "Talks and workshops on building for the web — and the ideas behind the code.";

export const metadata: Metadata = {
  title: "Talks",
  description,
  alternates: { canonical: "/talks" },
  openGraph: { title: "Talks", description, url: "/talks" },
};

export default function TalksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Talks"
        title="Sharing what I learn."
        description="Talks and workshops on building for the web — and the ideas behind the code."
      />

      <section className="container-page py-20">
        {talks.length === 0 ? (
          <p className="text-muted">More talks coming soon.</p>
        ) : (
          <div className="mx-auto flex max-w-3xl flex-col gap-5">
            {talks.map((talk, i) => (
              <Reveal key={talk.href} delay={i * 0.05}>
                <TalkCard talk={talk} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
