"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, ScrollText } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import type { ResearchProject } from "@/content/research";
import { researchAreas } from "@/content/research";
import { cn } from "@/lib/utils";

export function ResearchCard({
  project,
  expanded,
  onToggle,
  dimmed,
}: {
  project: ResearchProject;
  expanded: boolean;
  onToggle: () => void;
  dimmed?: boolean;
}) {
  return (
    <motion.div
      id={project.id}
      layout
      className={cn(
        "rounded-2xl border border-navy-border bg-navy/60 transition-opacity",
        dimmed && !expanded ? "opacity-55" : "opacity-100",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`research-panel-${project.id}`}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            {project.tags.map((tagId) => {
              const area = researchAreas.find((a) => a.id === tagId);
              return (
                <span
                  key={tagId}
                  className="rounded-full border border-navy-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted"
                >
                  {area?.short ?? tagId}
                </span>
              );
            })}
          </div>
          <h3 className="font-display text-xl font-medium text-ink">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
          {project.contribution && (
            <p className="mt-2 text-xs leading-relaxed text-muted-dim">
              <span className="font-medium text-muted">Contribution: </span>
              {project.contribution}
            </p>
          )}
        </div>
        <ChevronDown
          size={20}
          className={cn(
            "mt-1 flex-shrink-0 text-muted transition-transform",
            expanded && "rotate-180 text-gold",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            id={`research-panel-${project.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-navy-border px-6 py-6">
              <Block title="Abstract">
                <p className="text-sm leading-relaxed text-muted">
                  {project.abstract}
                </p>
              </Block>

              <Block title="Why It Matters">
                <p className="text-sm leading-relaxed text-muted">
                  {project.whyItMatters}
                </p>
              </Block>

              <Block title="Methodology">
                <ul className="space-y-2">
                  {project.methodology.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Results">
                <ul className="space-y-2">
                  {project.results.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-relaxed text-ink"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Future Impact">
                <p className="text-sm leading-relaxed text-muted">
                  {project.futureImpact}
                </p>
              </Block>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-navy-border px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-gold hover:text-gold"
                  >
                    <GithubIcon size={14} /> Code
                  </a>
                )}
                {project.paperUrl && (
                  <a
                    href={project.paperUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-navy-border px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-gold hover:text-gold"
                  >
                    <FileText size={14} /> Paper
                  </a>
                )}
                {project.posterUrl && (
                  <a
                    href={project.posterUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-navy-border px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-gold hover:text-gold"
                  >
                    <ScrollText size={14} /> Poster
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 last:mb-0">
      <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-gold">
        {title}
      </p>
      {children}
    </div>
  );
}
