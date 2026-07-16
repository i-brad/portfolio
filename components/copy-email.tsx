"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CopyEmail({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <button
      onClick={copy}
      className={cn(
        "group inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-ink",
        className
      )}
      aria-label="Copy email address"
    >
      {site.email}
      <span className="text-muted/70 transition-colors group-hover:text-accent">
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </span>
    </button>
  );
}
