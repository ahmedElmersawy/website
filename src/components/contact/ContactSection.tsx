"use client";

import { useState } from "react";
import { Check, Copy, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { site } from "@/content/site";
import { resumePdfUrl } from "@/content/resume";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore - the mailto link below still works without clipboard access
    }
  };

  const links = [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: "GitHub",
      value: site.social.github.replace("https://", ""),
      href: site.social.github,
      icon: GithubIcon,
      external: true,
    },
    {
      label: "LinkedIn",
      value: site.social.linkedin.replace("https://", ""),
      href: site.social.linkedin,
      icon: LinkedinIcon,
      external: true,
    },
    {
      label: "Curriculum Vitae",
      value: "Download PDF",
      href: resumePdfUrl,
      icon: Download,
      external: false,
      download: true,
    },
  ];

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer noopener" : undefined}
            download={link.download ? true : undefined}
            className="group flex items-center gap-4 rounded-2xl border border-navy-border bg-navy/50 p-5 transition-colors hover:border-gold"
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-navy-border text-gold transition-colors group-hover:border-gold">
              <link.icon size={18} />
            </span>
            <span>
              <span className="block text-sm font-medium text-ink">{link.label}</span>
              <span className="block text-sm text-muted">{link.value}</span>
            </span>
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={copyEmail}
        className="flex w-full items-center gap-4 rounded-2xl border border-dashed border-navy-border p-5 text-left transition-colors hover:border-gold"
      >
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-navy-border text-gold">
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </span>
        <span>
          <span className="block text-sm font-medium text-ink">
            {copied ? "Copied to clipboard" : "Copy email address"}
          </span>
          <span className="block text-sm text-muted">{site.email}</span>
        </span>
      </button>
    </div>
  );
}
