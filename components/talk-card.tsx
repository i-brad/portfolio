import { ArrowUpRight } from "lucide-react";
import { type Talk } from "@/lib/talks";

export function TalkCard({ talk }: { talk: Talk }) {
  return (
    <a
      href={talk.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group card-hover flex flex-col gap-3 rounded-2xl border border-border bg-surface/40 p-7 hover:border-accent/40 hover:bg-surface-hover sm:flex-row sm:items-center sm:justify-between sm:gap-8"
    >
      <div className="max-w-2xl">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
          <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider">
            Talk
          </span>
          <span>{talk.event}</span>
          {talk.year && (
            <>
              <span className="text-muted/40">·</span>
              <span>{talk.year}</span>
            </>
          )}
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
          {talk.title}
        </h3>
        <p className="mt-2 leading-relaxed text-muted">{talk.description}</p>
      </div>
      <ArrowUpRight
        size={20}
        className="hidden shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:block"
      />
    </a>
  );
}
