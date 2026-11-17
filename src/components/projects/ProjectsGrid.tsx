import { projects, type Project } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

const tierLabels: Record<Project["tier"], string> = {
  research: "Research Projects",
  engineering: "Engineering Projects",
};

export function ProjectsGrid({ limit, tier }: { limit?: number; tier?: Project["tier"] }) {
  if (limit || tier) {
    const pool = tier ? projects.filter((p) => p.tier === tier) : projects;
    const items = limit ? pool.slice(0, limit) : pool;
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} />
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
            <p className="mb-6 text-xl font-medium text-ink">
              {tierLabels[tier]}
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {items.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
