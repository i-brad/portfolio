import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { CtaBanner } from "@/components/cta-banner";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `${site.url}/work/${slug}`;
  return {
    title: `${project.title} — ${project.tagline}`,
    description: project.description,
    keywords: project.technologies,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} — ${site.name}`,
      description: project.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${site.name}`,
      description: project.description,
    },
  };
}

const sections = [
  { key: "problem", label: "The Problem" },
  { key: "research", label: "Research" },
  { key: "approach", label: "Approach" },
  { key: "challenges", label: "Challenges" },
  { key: "outcome", label: "Outcome" },
  { key: "reflection", label: "Reflection" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const url = `${site.url}/work/${slug}`;

  const projectLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: `${project.title} — ${project.tagline}`,
    description: project.description,
    url,
    image: `${url}/opengraph-image`,
    keywords: project.technologies,
    author: { "@type": "Person", "@id": `${site.url}/#person`, name: site.name, url: site.url },
    creator: { "@id": `${site.url}/#person` },
    isPartOf: { "@id": `${site.url}/#website` },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work` },
      { "@type": "ListItem", position: 3, name: project.title, item: url },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[720px] -translate-x-1/2 rounded-full blur-[130px] opacity-20"
          style={{ background: project.accent ?? "#8B5CF6" }}
          aria-hidden
        />
        <div className="container-page pb-16 pt-32 sm:pt-36">
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft
                size={15}
                className="transition-transform group-hover:-translate-x-1"
              />
              All work
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
              <span>{project.year}</span>
              <span className="text-muted/40">·</span>
              <span>{project.role}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl text-balance font-display text-display font-semibold">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-2xl text-xl text-accent">
              {project.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Visit live
                  <ArrowUpRight size={15} />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/50"
                >
                  <Github size={15} />
                  Source
                </a>
              )}
              {project.links?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/50 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {l.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface/50 px-3 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      {/* Metrics */}
      {cs.metrics && (
        <section className="border-b border-border bg-surface/30">
          <div className="container-page grid gap-px overflow-hidden py-0 sm:grid-cols-3">
            {cs.metrics.map((m, i) => (
              <Reveal
                key={m.label}
                delay={i * 0.08}
                className="px-4 py-12 text-center"
              >
                <div className="font-display text-4xl font-semibold text-ink sm:text-5xl">
                  <AnimatedCounter value={m.value} />
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                  {m.label}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Body */}
      <div className="container-page py-20">
        <div className="mx-auto max-w-prose space-y-16">
          {sections.map((s) => {
            if (s.key === "approach") {
              return (
                <Reveal key={s.key}>
                  <CaseSection label={s.label}>
                    <p>{cs.approach}</p>
                    <div className="mt-8 space-y-4">
                      {cs.decisions.map((d, i) => (
                        <div
                          key={i}
                          className="rounded-2xl border border-border bg-surface/40 p-6"
                        >
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-xs text-accent">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="font-display text-lg font-semibold text-ink">
                              {d.title}
                            </h3>
                          </div>
                          <p className="mt-2 leading-relaxed text-muted">
                            {d.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CaseSection>
                </Reveal>
              );
            }
            return (
              <Reveal key={s.key}>
                <CaseSection label={s.label}>
                  <p>{cs[s.key] as string}</p>
                </CaseSection>
              </Reveal>
            );
          })}
        </div>
      </div>

      <CtaBanner />
    </article>
  );
}

function CaseSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-6 bg-accent/60" />
        <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
          {label}
        </h2>
      </div>
      <div className="text-lg leading-[1.8] text-muted [&>p+p]:mt-5 [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}
