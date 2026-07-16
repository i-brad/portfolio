import { type ReactNode } from "react";
import { Reveal } from "./reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="paper border-b border-border">
      <div className="container-page pb-16 pt-36 text-center sm:pt-40">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-display font-normal tracking-tight text-ink">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <div className="mt-6 flex justify-center">{children}</div>
        )}
      </div>
    </header>
  );
}
