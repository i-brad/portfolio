import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      {eyebrow && (
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-balance font-display text-heading font-normal tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-muted",
            align === "center" && "mx-auto max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
