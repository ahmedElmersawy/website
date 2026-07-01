"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { researchProjects } from "@/content/research";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Unique undirected edges derived from project connection arrays
// ---------------------------------------------------------------------------
type Edge = [string, string];
const EDGES: Edge[] = (() => {
  const seen = new Set<string>();
  const out: Edge[] = [];
  for (const p of researchProjects) {
    for (const t of p.connections) {
      const key = [p.id, t].sort().join("|");
      if (!seen.has(key)) { seen.add(key); out.push([p.id, t]); }
    }
  }
  return out;
})();

// ---------------------------------------------------------------------------
// Node layout - positions as fraction of container and diameters in px.
// Two independent research threads (one paper each), no edges between them.
// ---------------------------------------------------------------------------
const POS: Record<string, { cx: number; cy: number }> = {
  "hydra":             { cx: 0.27, cy: 0.5 },
  "variance-collapse": { cx: 0.73, cy: 0.5 },
};

// Diameter ensures each label fits with ≥22 px padding from circle edge
const DIAMETER: Record<string, number> = {
  "hydra":             190,
  "variance-collapse": 210,
};

const CONTAINER_H = 500; // desktop graph height (px)

// ---------------------------------------------------------------------------
type LineData = { id: string; x1: number; y1: number; x2: number; y2: number };

export function ResearchGraph({
  activeId,
  dimmedIds,
  onSelect,
}: {
  activeId: string | null;
  dimmedIds: Set<string>;
  onSelect: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs     = useRef<Map<string, HTMLDivElement>>(new Map());
  const [lines, setLines] = useState<LineData[]>([]);

  // Measure node centers relative to the container, then draw SVG lines
  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const cRect = container.getBoundingClientRect();
      const next: LineData[] = [];
      for (const [a, b] of EDGES) {
        const aEl = nodeRefs.current.get(a);
        const bEl = nodeRefs.current.get(b);
        if (!aEl || !bEl) continue;
        const aR = aEl.getBoundingClientRect();
        const bR = bEl.getBoundingClientRect();
        next.push({
          id: `${a}|${b}`,
          x1: aR.left + aR.width  / 2 - cRect.left,
          y1: aR.top  + aR.height / 2 - cRect.top,
          x2: bR.left + bR.width  / 2 - cRect.left,
          y2: bR.top  + bR.height / 2 - cRect.top,
        });
      }
      setLines(next);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <>
      {/* ── Desktop / tablet graph (md+) ──────────────────── */}
      <div
        ref={containerRef}
        className="relative hidden w-full md:block"
        style={{ height: CONTAINER_H }}
        role="img"
        aria-label="Network graph connecting related research projects"
      >
        {/* Dashed connecting lines drawn between measured node centers */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {lines.map((l) => (
            <line
              key={l.id}
              x1={l.x1} y1={l.y1}
              x2={l.x2} y2={l.y2}
              stroke="#b45309"
              strokeOpacity={0.28}
              strokeWidth={1.5}
              strokeDasharray="6 5"
            />
          ))}
        </svg>

        {/* Circular research nodes */}
        {researchProjects.map((project) => {
          const pos      = POS[project.id]      ?? { cx: 0.5, cy: 0.5 };
          const d        = DIAMETER[project.id] ?? 160;
          const isActive = activeId === project.id;
          const isDimmed = dimmedIds.has(project.id) && !isActive;

          return (
            <motion.div
              key={project.id}
              ref={(el) => {
                if (el) nodeRefs.current.set(project.id, el);
                else    nodeRefs.current.delete(project.id);
              }}
              className={cn(
                "absolute flex cursor-pointer select-none items-center justify-center rounded-full border-2 text-center transition-colors duration-200",
                isActive
                  ? "border-gold bg-gold text-paper"
                  : "border-gold/45 bg-paper text-ink",
                isDimmed && "pointer-events-none opacity-25",
              )}
              style={{
                width:  d,
                height: d,
                left:   `calc(${pos.cx * 100}% - ${d / 2}px)`,
                top:    `calc(${pos.cy * 100}% - ${d / 2}px)`,
                padding: 22,
                boxShadow: isActive
                  ? "0 6px 24px rgba(180,83,9,0.22)"
                  : "0 2px 14px rgba(31,36,48,0.09)",
              }}
              whileHover={!isActive ? {
                scale: 1.06,
                boxShadow: "0 8px 30px rgba(180,83,9,0.20)",
                borderColor: "#b45309",
                transition: { duration: 0.18, ease: "easeOut" },
              } : undefined}
              onClick={() => onSelect(project.id)}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(project.id);
                }
              }}
            >
              <span className="font-sans text-[13px] font-semibold leading-[1.4] tracking-tight">
                {project.title}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* ── Mobile grid (< md) ────────────────────────────── */}
      <div
        className="grid grid-cols-2 gap-3 md:hidden"
        role="group"
        aria-label="Research projects"
      >
        {researchProjects.map((project) => {
          const isActive = activeId === project.id;
          const isDimmed = dimmedIds.has(project.id) && !isActive;
          return (
            <button
              key={project.id}
              type="button"
              className={cn(
                "rounded-xl border-2 px-4 py-5 text-center text-[13px] font-semibold leading-snug transition-all duration-200",
                isActive
                  ? "border-gold bg-gold text-paper shadow-md"
                  : "border-gold/40 bg-paper text-ink",
                isDimmed && "opacity-30",
              )}
              onClick={() => onSelect(project.id)}
              aria-label={`View ${project.title}`}
            >
              {project.title}
            </button>
          );
        })}
      </div>
    </>
  );
}
