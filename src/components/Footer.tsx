import Link from "next/link";
import { GraduationCap, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { navItems, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-navy-border/60 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg text-ink">{site.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {site.degree}, {site.university}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-border text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Mail size={18} />
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-border text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-border text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={site.social.scholar}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Google Scholar"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-border text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <GraduationCap size={18} />
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-dim">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, Three.js, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
