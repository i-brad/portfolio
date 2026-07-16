import { CtaBanner } from "@/components/cta-banner";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Skills } from "@/components/skills";
import { featuredProjects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const principles = [
  {
    title: "Products over features",
    body: "A feature answers 'can we build it?' A product answers 'should this exist, and for whom?' I start with the second question.",
  },
  {
    title: "Simplicity is earned",
    body: "The simplest thing that works is usually the hardest to arrive at. I'd rather delete a decision than decorate one.",
  },
  {
    title: "Ship, then learn",
    body: "Real behaviour beats any roadmap. I ship the smallest lovable version and let the world tell me what to build next.",
  },
  {
    title: "Correctness is a feature",
    body: "In systems that matter, the invariants users never see are the ones that earn their trust. I sweat them.",
  },
];

const highlights = [
  {
    role: "Software Engineer",
    org: "Fend Group — DEX, launchpad & on-chain tooling",
    period: "2024 — 2026",
  },
  {
    role: "Frontend Engineer",
    org: "Soft Web Digital — commerce & fintech",
    period: "2023 — 2024",
  },
  {
    role: "Frontend Developer",
    org: "Abinci · Enterscale — MVPs with founders",
    period: "2022 — 2023",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Featured projects */}
      <section id="featured" className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow="Selected work"
          title="Products I've helped build."
          description="A few things I'm proud of — spanning fintech, developer tools, real-time systems, and AI."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
          >
            <span className="link-underline">See all work</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </section>

      {/* Philosophy / manifesto */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-page py-24 sm:py-32">
          <SectionHeading
            eyebrow="Philosophy"
            title="How I think about building."
            description="I care less about the stack and more about the outcome. A few principles I keep coming back to."
          />
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full bg-bg p-8 sm:p-10">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Experience preview */}
      <section className="container-page py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            align="left"
            eyebrow="Experience"
            title="A quick look at the road."
            description="The highlights — the full story lives on the Journey page."
          />
          <div className="flex flex-col">
            {highlights.map((h, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group flex items-baseline justify-between gap-6 border-b border-border py-6 transition-colors hover:border-accent/40">
                  <div>
                    <p className="font-display text-lg font-semibold">
                      {h.role}
                    </p>
                    <p className="text-sm text-muted">{h.org}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted">
                    {h.period}
                  </span>
                </div>
              </Reveal>
            ))}
            <Reveal className="mt-8">
              <Link
                href="/journey"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                <span className="link-underline">Read my journey</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow="Toolkit"
          title="What I build with."
          description="Tools are means, not ends — but here's what's currently in the kit."
        />
        <div className="mt-14">
          <Skills />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
