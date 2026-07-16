import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
  variant = "default",
}: {
  project: Project;
  index: number;
  variant?: "default" | "wide";
}) {
  const accent = project.accent ?? "#1E7A46";
  const wide = variant === "wide";

  const Meta = (
    <div className="relative flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-muted/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{ background: accent }}
          aria-hidden
        />
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {project.year} · {project.role}
        </span>
      </div>
      <ArrowUpRight
        size={20}
        className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </div>
  );

  const Tech = (
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-border bg-bg/60 px-3 py-1 font-mono text-xs text-muted"
        >
          {tech}
        </span>
      ))}
    </div>
  );

  const Outcome = (
    <div className="flex items-center gap-2 text-sm text-ink/80">
      <span className="text-success">↗</span>
      {project.outcome}
    </div>
  );

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group card-hover relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 hover:border-accent/40 hover:bg-surface-hover sm:p-10"
      )}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: accent }}
        aria-hidden
      />
      {Meta}

      {wide ? (
        <div className="mt-8 flex flex-1 flex-col gap-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-accent">{project.tagline}</p>
            </div>
            <p className="leading-relaxed text-muted lg:text-lg">
              {project.description}
            </p>
          </div>
          <div className="mt-auto flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            {Outcome}
            {Tech}
          </div>
        </div>
      ) : (
        <>
          <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-accent">{project.tagline}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-6">{Outcome}</div>
          <div className="mt-6">{Tech}</div>
        </>
      )}
    </Link>
  );
}
