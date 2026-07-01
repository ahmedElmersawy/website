"use client";

import { motion } from "framer-motion";
import { Award as AwardIcon } from "lucide-react";
import { awards, type Award } from "@/content/awards";

function AwardEntry({ award, i }: { award: Award; i: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <span className="absolute -left-[2.45rem] flex h-8 w-8 items-center justify-center rounded-full border border-gold bg-paper text-gold">
        <AwardIcon size={15} />
      </span>
      <p className="font-mono text-xs uppercase tracking-wide text-gold">
        {award.date}
      </p>
      <h3 className="mt-1 font-display text-lg font-medium text-ink">
        {award.title}
      </h3>
      <p className="text-sm font-medium text-muted">{award.org}</p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        {award.description}
      </p>
    </motion.li>
  );
}

export function Timeline({ limit }: { limit?: number }) {
  if (limit) {
    const items = awards.slice(0, limit);
    return (
      <ol className="relative space-y-10 border-l border-navy-border pl-8">
        {items.map((award, i) => (
          <AwardEntry key={award.id} award={award} i={i} />
        ))}
      </ol>
    );
  }

  const primary = awards.filter((a) => a.tier === "primary");
  const secondary = awards.filter((a) => a.tier === "secondary");

  return (
    <div className="space-y-12">
      <ol className="relative space-y-10 border-l border-navy-border pl-8">
        {primary.map((award, i) => (
          <AwardEntry key={award.id} award={award} i={i} />
        ))}
      </ol>

      {secondary.length > 0 && (
        <div>
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Additional Recognition
          </p>
          <ul className="space-y-2.5">
            {secondary.map((award) => (
              <li key={award.id} className="text-sm leading-relaxed text-muted">
                <span className="font-medium text-ink">{award.title}</span>
                <span className="text-muted-dim">, {award.org}, {award.date}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
