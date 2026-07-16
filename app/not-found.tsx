import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-display font-semibold">
        This page shipped elsewhere.
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        The link is broken or the page moved. Let&apos;s get you back to
        something that exists.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-ink/90"
      >
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-1"
        />
        Back home
      </Link>
    </section>
  );
}
