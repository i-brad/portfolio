import { skills } from "@/lib/skills";
import { Stagger, StaggerItem } from "./reveal";

export function Skills() {
  return (
    <Stagger className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((group) => (
        <StaggerItem key={group.category} className="h-full">
          <div className="flex h-full flex-col gap-4 bg-surface/60 p-7 transition-colors hover:bg-surface-hover">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-bg/50 px-3 py-1.5 text-sm text-ink/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
