import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative overflow-hidden rounded-md border border-navy-border bg-navy/50 p-7 transition-colors duration-300 hover:border-gold/45"
    >
      <div className="relative">
        {project.image ? (
          <div className="mb-4 flex h-44 items-center justify-center overflow-hidden rounded-md border border-navy-border/70 bg-navy-light/40 p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.imageAlt ?? project.demoLabel ?? project.title}
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : (
          <div className="mb-4 flex h-44 items-center justify-center rounded-md border border-navy-border/70 bg-navy-light/40 text-xs font-mono uppercase tracking-wide text-muted-dim">
            {project.demoLabel ?? "Visual demo"}
          </div>
        )}

        <h3 className="font-display text-xl font-medium text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/90">
          {project.forNonSpecialists}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        {project.contribution && (
          <p className="mt-2 text-xs leading-relaxed text-muted-dim">
            <span className="font-medium text-muted">Contribution: </span>
            {project.contribution}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-navy-border px-2.5 py-0.5 font-mono text-[10px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-4 space-y-1.5">
          {project.keyResults.map((result, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
              {result}
            </li>
          ))}
        </ul>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-bright"
          >
            <GithubIcon size={15} /> View on GitHub
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
