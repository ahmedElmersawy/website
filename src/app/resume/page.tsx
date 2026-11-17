import type { Metadata } from "next";
import { Download } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publications } from "@/content/publications";
import {
  education,
  professionalExperience,
  researchExperience,
  teachingExperience,
  skills,
  resumeAwards,
  resumePdfUrl,
  resumePdfFilename,
} from "@/content/resume";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae of Ahmed Elmersawy: education, professional and research experience, publications, teaching, skills, and awards. PDF download available.",
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
      <h2 className="mb-5 text-xl font-medium text-ink">
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
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:px-8 *:max-w-3xl">
      <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
        <SectionHeading eyebrow="CV" title="Curriculum Vitae" className="mb-0" />
        <a
          href={resumePdfUrl}
          download={resumePdfFilename}
          className="inline-flex items-center gap-2 rounded bg-gold px-5 py-2.5 text-sm font-semibold text-paper transition-transform hover:scale-[1.03]"
        >
          <Download size={16} /> Download PDF
        </a>
      </div>

      <ExperienceBlock title="Education" entries={education} />
      <ExperienceBlock title="Professional Experience" entries={professionalExperience} />
      <ExperienceBlock title="Research Experience" entries={researchExperience} />

      <div className="mb-12">
        <h2 className="mb-5 text-xl font-medium text-ink">
          Publications &amp; Presentations
        </h2>
        <ol className="space-y-4">
          {publications.map((pub) => (
            <li key={pub.id} className="text-sm leading-relaxed text-muted">
              {pub.authors.map((a, i) => (
                <span key={a}>
                  {a === "A. Elmersawy" ? <strong className="font-medium text-ink">{a}</strong> : a}
                  {i < pub.authors.length - 1 ? ", " : ". "}
                </span>
              ))}
              <span className="text-ink">&ldquo;{pub.title}{/[?.!]$/.test(pub.title) ? "" : "."}&rdquo;</span> {pub.venue}.
            </li>
          ))}
        </ol>
      </div>
      <ExperienceBlock title="Teaching Experience" entries={teachingExperience} />

      <div className="mb-12">
        <h2 className="mb-5 text-xl font-medium text-ink">
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
                    className="rounded border border-navy-border px-2.5 py-0.5 text-xs text-muted"
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
        <h2 className="mb-5 text-xl font-medium text-ink">
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
