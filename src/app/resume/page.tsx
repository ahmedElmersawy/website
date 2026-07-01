import type { Metadata } from "next";
import { Download } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  education,
  researchExperience,
  teachingExperience,
  skills,
  resumeAwards,
  resumePdfUrl,
} from "@/content/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "Education, research experience, teaching experience, and skills.",
};

function ExperienceBlock({
  title,
  entries,
}: {
  title: string;
  entries: { role?: string; degree?: string; org?: string; institution?: string; location: string; date: string; details?: string[] }[];
}) {
  return (
    <div className="mb-12">
      <h2 className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold">
        {title}
      </h2>
      <div className="space-y-6">
        {entries.map((entry, i) => (
          <div key={i}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-medium text-ink">
                {entry.role ?? entry.degree}
              </h3>
              <span className="font-mono text-xs text-muted-dim">{entry.date}</span>
            </div>
            <p className="text-sm font-medium text-muted">
              {entry.org ?? entry.institution} · {entry.location}
            </p>
            {entry.details && (
              <ul className="mt-2 space-y-1.5">
                {entry.details.map((d, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
        <SectionHeading eyebrow="Resume" title="Curriculum Vitae" className="mb-0" />
        <a
          href={resumePdfUrl}
          download
          className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-paper transition-transform hover:scale-[1.03]"
        >
          <Download size={16} /> Download PDF
        </a>
      </div>

      <ExperienceBlock title="Education" entries={education} />
      <ExperienceBlock title="Research Experience" entries={researchExperience} />
      <ExperienceBlock title="Teaching Experience" entries={teachingExperience} />

      <div className="mb-12">
        <h2 className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold">
          Skills
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="mb-2 text-sm font-medium text-ink">{group.category}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-navy-border px-2.5 py-0.5 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold">
          Awards
        </h2>
        <ul className="space-y-1.5">
          {resumeAwards.map((award) => (
            <li key={award} className="flex gap-2 text-sm text-ink">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
              {award}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
