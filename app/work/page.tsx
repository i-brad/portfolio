import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

const description =
  "Case studies from products I've built — on-chain infrastructure, developer tools, real-time systems, and AI experiences.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: { title: "Work", description, url: "/work" },
};

// Full-width feature bands (top + bottom); the middle four pair up two-per-row.
const WIDE = new Set([0, 5]);

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Case studies, not a portfolio dump."
        description="Each of these is a real problem I helped solve. Click in for the story — the research, the decisions, the trade-offs, and what actually happened."
      />

      {/* Editorial bento: feature bands top & bottom, paired cards between */}
      <section className="container-page py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const wide = WIDE.has(index);
            return (
              <Reveal
                key={project.slug}
                delay={(index % 2) * 0.05}
                className={cn("h-full", wide && "lg:col-span-2")}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  variant={wide ? "wide" : "default"}
                />
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
