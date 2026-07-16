"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Map,
  PenLine,
  Radio,
  Mail,
  Github,
  Twitter,
  Linkedin,
  FileText,
  Copy,
  Search,
  CornerDownLeft,
} from "lucide-react";
import { site, socials } from "@/lib/site";

type Cmd = {
  id: string;
  label: string;
  hint?: string;
  Icon: React.ComponentType<{ size?: number }>;
  action: () => void;
  keywords?: string;
};

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Cmd[] = useMemo(() => {
    const go = (href: string) => () => {
      setOpen(false);
      router.push(href);
    };
    const openExternal = (href: string) => () => {
      setOpen(false);
      window.open(href, "_blank", "noopener,noreferrer");
    };
    return [
      { id: "home", label: "Home", Icon: Home, action: go("/"), keywords: "start" },
      { id: "work", label: "Work", hint: "Case studies", Icon: Briefcase, action: go("/work"), keywords: "projects" },
      { id: "journey", label: "Journey", hint: "My story", Icon: Map, action: go("/journey"), keywords: "about story" },
      { id: "talks", label: "Talks", hint: "Speaking", Icon: PenLine, action: go("/talks"), keywords: "speaking stimulus video workshop" },
      { id: "now", label: "Now", hint: "What I'm doing", Icon: Radio, action: go("/now") },
      { id: "contact", label: "Contact", Icon: Mail, action: go("/contact"), keywords: "email hire" },
      {
        id: "copy-email",
        label: "Copy email address",
        hint: site.email,
        Icon: Copy,
        keywords: "mail contact",
        action: () => {
          navigator.clipboard?.writeText(site.email);
          setOpen(false);
        },
      },
      { id: "resume", label: "Download résumé", Icon: FileText, action: openExternal(site.resume), keywords: "cv pdf" },
      { id: "github", label: "GitHub", hint: "@i-brad", Icon: Github, action: openExternal(socials.github) },
      { id: "twitter", label: "Twitter / X", hint: "@_ibrad", Icon: Twitter, action: openExternal(socials.twitter) },
      { id: "linkedin", label: "LinkedIn", Icon: Linkedin, action: openExternal(socials.linkedin) },
    ];
  }, [router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.label} ${c.hint ?? ""} ${c.keywords ?? ""}`.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen as EventListener);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen as EventListener);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 20);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function onListKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.action();
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
            onKeyDown={onListKey}
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search size={18} className="text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search or jump to…"
                className="w-full bg-transparent py-4 text-sm text-ink outline-none placeholder:text-muted/60"
              />
              <kbd className="rounded border border-border bg-bg px-1.5 py-0.5 font-mono text-[10px] text-muted">
                ESC
              </kbd>
            </div>

            <ul className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-8 text-center text-sm text-muted">
                  No results for “{query}”
                </li>
              )}
              {filtered.map((cmd, i) => (
                <li key={cmd.id}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={cmd.action}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      i === active
                        ? "bg-accent/15 text-ink"
                        : "text-muted hover:bg-surface-hover"
                    }`}
                  >
                    <cmd.Icon size={16} />
                    <span className="flex-1 text-ink/90">{cmd.label}</span>
                    {cmd.hint && (
                      <span className="font-mono text-xs text-muted/60">
                        {cmd.hint}
                      </span>
                    )}
                    {i === active && (
                      <CornerDownLeft size={14} className="text-accent" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
