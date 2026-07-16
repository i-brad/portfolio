"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section className="paper relative overflow-hidden border-b border-border">
      <div className="container-page flex min-h-[88vh] flex-col items-center justify-center py-32 text-center">
        <motion.div
          {...rise(0)}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-4 py-1.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {site.role} · Available for select work
          </span>
        </motion.div>

        <h1 className="max-w-4xl font-display text-display-lg font-normal tracking-tight text-ink">
          <motion.span {...rise(0.08)} className="block text-balance">
            Building products that people
          </motion.span>
          <motion.span {...rise(0.18)} className="block">
            <span className="italic text-accent">actually</span> enjoy using.
          </motion.span>
        </h1>

        <motion.p
          {...rise(0.32)}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
        >
          I&apos;m {site.name}, a product software engineer building scalable
          software, AI-powered experiences, developer tools, and products that
          solve real problems.
        </motion.p>

        <motion.div
          {...rise(0.44)}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-ink/90"
          >
            View my work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30 hover:bg-surface-hover"
          >
            Let&apos;s talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
