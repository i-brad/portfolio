import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./reveal";
import { CopyEmail } from "./copy-email";

export function CtaBanner() {
  return (
    <section className="border-t border-border">
      <div className="container-page py-28 text-center sm:py-36">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Let&apos;s talk
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance font-display text-heading font-normal tracking-tight text-ink">
            Have an ambitious idea? Let&apos;s turn it into a{" "}
            <span className="italic">product</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Whether it&apos;s a fintech platform, a developer tool, or an
            AI-powered experience — I love helping teams ship things people
            enjoy using.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-col items-center gap-5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-ink/90"
            >
              Start a conversation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <CopyEmail />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
