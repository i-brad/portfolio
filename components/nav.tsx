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
            <svg viewBox="0 0 512 512" className="h-5 w-5" aria-hidden="true">
              <path
                fill="#F5F4F0"
                stroke="#F5F4F0"
                strokeWidth={6}
                strokeLinejoin="round"
                d="M224.92 242.02 L263.30 242.02 Q274.98 242.02 284.58 239.10 Q294.18 236.18 301.06 228.88 Q307.95 221.58 311.70 209.06 Q315.46 196.54 315.46 177.35 Q315.46 155.65 309.82 142.51 Q304.19 129.37 295.22 122.69 Q286.25 116.01 275.19 113.93 Q264.14 111.84 253.29 111.84 Q245.78 111.84 238.06 112.05 Q230.34 112.26 224.92 113.09 Z M224.92 398.49 Q229.92 398.91 235.97 399.53 Q242.02 400.16 253.29 400.16 Q272.90 400.16 286.88 396.40 Q300.85 392.65 309.82 383.26 Q318.80 373.87 322.97 358.43 Q327.14 343.00 327.14 319.63 Q327.14 286.25 312.95 267.06 Q298.77 247.86 270.81 247.86 L224.92 247.86 Z M136.88 398.49 L183.19 398.49 L183.19 113.09 L136.88 113.09 L136.88 107.25 L209.89 107.25 Q216.15 107.25 222.62 107.04 Q229.09 106.83 235.76 106.42 Q242.44 106.42 248.70 106.21 Q254.96 106.00 260.80 106.00 Q291.26 106.00 310.87 113.30 Q330.48 120.60 341.74 131.24 Q353.01 141.88 357.18 154.19 Q361.35 166.50 361.35 176.51 Q361.35 190.28 355.30 201.97 Q349.25 213.65 339.03 222.41 Q328.81 231.17 315.46 236.60 Q302.11 242.02 287.50 243.69 L287.50 244.53 Q302.52 245.78 318.17 250.99 Q333.82 256.21 346.54 265.60 Q359.27 274.98 367.20 288.75 Q375.12 302.52 375.12 320.46 Q375.12 339.24 368.03 354.89 Q360.94 370.53 346.75 381.80 Q332.56 393.07 310.87 399.53 Q289.17 406.00 260.38 406.00 Q254.54 406.00 248.91 405.79 Q243.27 405.58 237.02 405.17 Q230.76 404.75 224.08 404.54 Q217.40 404.33 209.89 404.33 L136.88 404.33 Z"
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
