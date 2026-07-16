import { type Chapter } from "@/lib/journey";
import { Reveal } from "./reveal";

export function Timeline({ chapters }: { chapters: Chapter[] }) {
  return (
    <div className="relative">
      {/* vertical rail */}
      <div
        className="absolute left-[7px] top-2 hidden h-full w-px bg-gradient-to-b from-border via-border to-transparent md:left-1/2 md:block"
        aria-hidden
      />
      <div className="space-y-16 md:space-y-28">
        {chapters.map((chapter, i) => (
          <TimelineChapter key={chapter.number} chapter={chapter} index={i} />
        ))}
      </div>
    </div>
  );
}

function TimelineChapter({
  chapter,
  index,
}: {
  chapter: Chapter;
  index: number;
}) {
  const left = index % 2 === 0;
  return (
    <Reveal>
      <div className="relative md:grid md:grid-cols-2 md:gap-16">
        {/* node */}
        <div
          className="absolute left-0 top-1.5 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-bg md:left-1/2 md:block"
          aria-hidden
        />
        <div
          className={
            left
              ? "md:col-start-1 md:pr-4 md:text-right"
              : "md:col-start-2 md:pl-4"
          }
        >
          <ChapterBody chapter={chapter} align={left ? "right" : "left"} />
        </div>
      </div>
    </Reveal>
  );
}

function ChapterBody({
  chapter,
  align,
}: {
  chapter: Chapter;
  align: "left" | "right";
}) {
  return (
    <article className="rounded-3xl border border-border bg-surface/40 p-8 transition-colors hover:border-accent/30 sm:p-10">
      <div
        className={`flex items-center gap-3 ${
          align === "right" ? "md:justify-end" : ""
        }`}
      >
        <span className="font-mono text-4xl font-semibold text-accent/30">
          {chapter.year}
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          Chapter {chapter.number}
        </span>
      </div>

      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
        {chapter.title}
      </h3>
      <p className="mt-1 text-sm text-accent">{chapter.kicker}</p>

      <div
        className={`mt-5 space-y-4 text-left ${
          align === "right" ? "md:text-right" : ""
        }`}
      >
        {chapter.story.map((p, i) => (
          <p key={i} className="leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-bg/50 p-5 text-left">
        <p className="font-mono text-xs uppercase tracking-widest text-muted/70">
          What I learned
        </p>
        <ul className="mt-3 space-y-2">
          {chapter.lessons.map((lesson, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/90">
              <span className="mt-1 text-accent">—</span>
              {lesson}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`mt-5 flex flex-wrap gap-2 ${
          align === "right" ? "md:justify-end" : ""
        }`}
      >
        {chapter.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
