"use client";

import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  function openPalette() {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial",
        scrolled
          ? "border-b border-border/70 bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-[0.95rem] font-semibold tracking-tight"
          aria-label={`${site.name} — home`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#1E7A46] transition-transform group-hover:-rotate-6">
            <svg viewBox="0 0 512 512" className="h-6 w-6" aria-hidden="true">
              <path
                fill="#F5F4F0"
                stroke="#F5F4F0"
                strokeWidth={6}
                strokeLinejoin="round"
                d="M126.52 242.58 L159.89 242.58 Q170.05 242.58 178.39 240.04 Q186.73 237.50 192.71 231.16 Q198.70 224.81 201.96 213.93 Q205.23 203.05 205.23 186.37 Q205.23 167.51 200.33 156.08 Q195.43 144.66 187.64 138.86 Q179.84 133.05 170.23 131.24 Q160.62 129.43 151.19 129.43 Q144.66 129.43 137.95 129.61 Q131.24 129.79 126.52 130.51 Z M126.52 378.58 Q130.88 378.95 136.14 379.49 Q141.39 380.04 151.19 380.04 Q168.23 380.04 180.38 376.77 Q192.53 373.51 200.33 365.35 Q208.13 357.19 211.75 343.77 Q215.38 330.35 215.38 310.04 Q215.38 281.02 203.05 264.34 Q190.72 247.66 166.42 247.66 L126.52 247.66 Z M50.00 378.58 L90.26 378.58 L90.26 130.51 L50.00 130.51 L50.00 125.44 L113.47 125.44 Q118.91 125.44 124.53 125.26 Q130.15 125.07 135.95 124.71 Q141.76 124.71 147.20 124.53 Q152.64 124.35 157.71 124.35 Q184.19 124.35 201.24 130.70 Q218.28 137.04 228.07 146.29 Q237.87 155.54 241.49 166.24 Q245.12 176.94 245.12 185.64 Q245.12 197.61 239.86 207.76 Q234.60 217.92 225.72 225.54 Q216.83 233.15 205.23 237.87 Q193.62 242.58 180.93 244.03 L180.93 244.76 Q193.98 245.85 207.58 250.38 Q221.18 254.91 232.24 263.07 Q243.31 271.23 250.20 283.20 Q257.09 295.17 257.09 310.76 Q257.09 327.08 250.92 340.68 Q244.76 354.29 232.43 364.08 Q220.10 373.87 201.24 379.49 Q182.38 385.11 157.35 385.11 Q152.27 385.11 147.38 384.93 Q142.48 384.75 137.04 384.39 Q131.60 384.02 125.80 383.84 Q120.00 383.66 113.47 383.66 L50.00 383.66 Z M290.82 378.58 L318.74 378.58 L318.74 233.15 L290.82 233.15 L290.82 228.07 L349.21 228.07 L349.21 264.70 L349.93 264.70 Q351.38 259.26 354.65 252.37 Q357.91 245.48 363.71 239.14 Q369.52 232.79 377.68 228.44 Q385.84 224.08 397.44 224.08 Q405.79 224.08 411.95 226.80 Q418.12 229.52 422.11 233.70 Q426.10 237.87 427.91 243.31 Q429.72 248.75 429.72 254.19 Q429.72 266.15 424.28 270.14 Q418.84 274.13 411.59 274.13 Q395.63 274.13 395.63 263.98 Q395.63 260.71 396.36 258.72 Q397.08 256.73 397.99 254.73 Q398.89 252.74 399.62 250.20 Q400.35 247.66 400.35 242.94 Q400.35 231.34 387.65 231.34 Q381.85 231.34 375.32 235.69 Q368.79 240.04 363.17 248.38 Q357.55 256.73 353.74 268.51 Q349.93 280.30 349.93 295.53 L349.93 378.58 L381.49 378.58 L381.49 383.66 L290.82 383.66 Z M423.56 368.43 Q423.56 360.45 429.18 354.83 Q434.80 349.21 442.78 349.21 Q450.76 349.21 456.38 354.83 Q462.00 360.45 462.00 368.43 Q462.00 376.41 456.38 382.03 Q450.76 387.65 442.78 387.65 Q434.80 387.65 429.18 382.03 Q423.56 376.41 423.56 368.43 Z"
              />
            </svg>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                isActive(item.href) ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-surface"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </Link>
          ))}
          <button
            onClick={openPalette}
            className="ml-2 hidden items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/50 hover:text-ink lg:flex"
            aria-label="Open command palette"
          >
            <span>Search</span>
            <kbd className="rounded border border-border bg-bg px-1.5 py-0.5 font-mono text-[10px]">
              ⌘K
            </kbd>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="grid h-9 w-9 place-items-center rounded-full text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-page flex flex-col py-4">
              {nav.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "border-b border-border/50 py-3.5 text-lg transition-colors last:border-0",
                    isActive(item.href) ? "text-ink" : "text-muted",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
