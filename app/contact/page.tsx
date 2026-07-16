import type { Metadata } from "next";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, FileText } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { CopyEmail } from "@/components/copy-email";
import { site, socials } from "@/lib/site";

const description =
  "Have a product worth building or a role worth discussing? Here's how to reach me.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact", description, url: "/contact" },
};

const channels = [
  { label: "Email", value: site.email, href: socials.email, Icon: Mail },
  { label: "GitHub", value: "@i-brad", href: socials.github, Icon: Github, external: true },
  { label: "Twitter / X", value: "@_ibrad", href: socials.twitter, Icon: Twitter, external: true },
  { label: "LinkedIn", value: "Braimah Destiny", href: socials.linkedin, Icon: Linkedin, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something worth using."
        description="Whether it's a product to build, a team to join, or just an idea to kick around — my inbox is open. I read everything and reply to most."
      />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-surface/40 p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                The fastest way
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Drop me a line. No forms, no funnels — just email.
              </p>
              <div className="mt-6">
                <a
                  href={socials.email}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-ink/90"
                >
                  <Mail size={16} />
                  Send an email
                </a>
              </div>
              <div className="mt-5">
                <CopyEmail />
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <FileText size={15} />
                  Download my résumé
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              </div>
            </div>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {channels.map((c) => (
              <StaggerItem key={c.label} className="h-full">
                <a
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/40 hover:bg-surface-hover"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-surface text-accent ring-1 ring-border">
                      <c.Icon size={18} />
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                  <div>
                    <p className="font-display font-semibold">{c.label}</p>
                    <p className="mt-1 text-sm text-muted">{c.value}</p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
