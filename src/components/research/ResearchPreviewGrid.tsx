import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { researchAreas, researchProjects } from "@/content/research";
import { Reveal } from "@/components/ui/Reveal";

export function ResearchPreviewGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {researchProjects.map((project, i) => (
        <Reveal key={project.id} delay={i * 0.06}>
          <Link
            href={`/research#${project.id}`}
            className="group block h-full rounded-2xl border border-navy-border bg-navy/50 p-6 transition-colors hover:border-gold"
          >
            <div className="mb-3 flex flex-wrap gap-1.5">
              {project.tags.map((tagId) => {
                const area = researchAreas.find((a) => a.id === tagId);
                return (
                  <span
                    key={tagId}
                    className="rounded-full border border-navy-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted"
                  >
                    {area?.short ?? tagId}
                  </span>
                );
              })}
            </div>
            <h3 className="font-display text-lg font-medium text-ink">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold opacity-50 transition-opacity group-hover:opacity-100">
              Read more <ArrowUpRight size={14} />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
