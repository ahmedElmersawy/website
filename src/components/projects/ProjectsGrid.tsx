import { projects, type Project } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

const tierLabels: Record<Project["tier"], string> = {
  research: "Research Projects",
  engineering: "Engineering Projects",
};

export function ProjectsGrid({ limit }: { limit?: number }) {
  if (limit) {
    const items = projects.slice(0, limit);
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    );
  }

  const tiers: Project["tier"][] = ["research", "engineering"];

  return (
    <div className="space-y-16">
      {tiers.map((tier) => {
        const items = projects.filter((p) => p.tier === tier);
        if (items.length === 0) return null;
        return (
          <div key={tier}>
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold">
              {tierLabels[tier]}
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {items.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
