"use client";

import { useEffect, useState } from "react";
import { researchAreas, researchProjects } from "@/content/research";
import { cn } from "@/lib/utils";
import { ResearchGraph } from "./ResearchGraph";
import { ResearchCard } from "./ResearchCard";

export function ResearchSection() {
  const [activeArea, setActiveArea] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    if (researchAreas.some((a) => a.id === hash)) {
      setActiveArea(hash);
    } else if (researchProjects.some((p) => p.id === hash)) {
      setExpandedId(hash);
      document.getElementById(hash)?.scrollIntoView({ block: "center" });
    }
  }, []);

  const dimmedIds = new Set(
    activeArea
      ? researchProjects
          .filter((p) => !p.tags.includes(activeArea))
          .map((p) => p.id)
      : [],
  );

  const handleSelect = (id: string) => {
    setExpandedId(id);
    document.getElementById(id)?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveArea(null)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
            activeArea === null
              ? "border-gold bg-gold/10 text-gold"
              : "border-navy-border text-muted hover:text-ink",
          )}
        >
          All areas
        </button>
        {researchAreas.map((area) => (
          <button
            key={area.id}
            type="button"
            onClick={() => setActiveArea(area.id)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
              activeArea === area.id
                ? "border-gold bg-gold/10 text-gold"
                : "border-navy-border text-muted hover:text-ink",
            )}
          >
            {area.label}
          </button>
        ))}
      </div>

      <div className="mb-12 rounded-2xl border border-navy-border bg-navy/40 p-4">
        <ResearchGraph
          activeId={expandedId}
          dimmedIds={dimmedIds}
          onSelect={handleSelect}
        />
      </div>

      <div className="space-y-4">
        {researchProjects.map((project) => (
          <ResearchCard
            key={project.id}
            project={project}
            expanded={expandedId === project.id}
            dimmed={dimmedIds.has(project.id)}
            onToggle={() =>
              setExpandedId(expandedId === project.id ? null : project.id)
            }
          />
        ))}
      </div>
    </div>
  );
}
