import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { teachingExperience } from "@/content/resume";
import { awards } from "@/content/awards";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects spanning preference-learning for code optimization, neural network training dynamics, applied NLP, and hardware security.",
};

export default function ProjectsPage() {
  const ta = teachingExperience[0];
  const outreach = awards.find((a) => a.id === "ieee-r8-humanitarian-ambassador");

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Research projects test a specific scientific claim; engineering projects ship a working system. Each is built to answer a concrete question with measurable results."
      />
      <ProjectsGrid />

      <div className="mt-16">
        <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold">
          Teaching &amp; Service
        </p>
        <ul className="space-y-3">
          {ta && (
            <li className="text-sm leading-relaxed text-muted">
              <span className="font-medium text-ink">{ta.role}</span>, {ta.org}.{" "}
              {ta.details.join(" ")}
            </li>
          )}
          {outreach && (
            <li className="text-sm leading-relaxed text-muted">
              <span className="font-medium text-ink">{outreach.title}</span>, {outreach.org},{" "}
              {outreach.date}. {outreach.description}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
