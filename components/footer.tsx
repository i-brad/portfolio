import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { nav, site, socials } from "@/lib/site";
import { CopyEmail } from "./copy-email";

const socialLinks = [
  { label: "GitHub", href: socials.github, Icon: Github },
  { label: "Twitter", href: socials.twitter, Icon: Twitter },
  { label: "LinkedIn", href: socials.linkedin, Icon: Linkedin },
  { label: "Email", href: socials.email, Icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-page py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-semibold tracking-tight">
              Let&apos;s build something.
            </p>
            <p className="mt-3 text-muted">
              Have a product worth making? I&apos;m always happy to talk shop.
            </p>
            <div className="mt-5">
              <CopyEmail />
            </div>
          </div>

          <div className="flex gap-16">
            <nav className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-muted/60">
                Navigate
              </span>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <nav className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-muted/60">
                Elsewhere
              </span>
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <Icon size={15} />
                  {label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {year} {site.name}. Build useful things.
          </p>
          <p className="font-mono text-xs text-muted/60">
            Designed &amp; built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
