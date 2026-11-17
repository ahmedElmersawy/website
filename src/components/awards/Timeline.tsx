"use client";

import { motion } from "framer-motion";
import { Award as AwardIcon } from "lucide-react";
import { awards, type Award } from "@/content/awards";
import { teachingExperience } from "@/content/resume";

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
      {award.date && (
        <p className="font-mono text-xs uppercase tracking-wide text-gold">
          {award.date}
        </p>
      )}
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-xl font-medium text-ink">
      {children}
    </h2>
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
  const service = awards.filter((a) => a.tier === "service");

  return (
    <div className="space-y-14">
      <section>
        <SubHeading>Fellowship</SubHeading>
        <ol className="relative space-y-10 border-l border-navy-border pl-8">
          {primary.map((award, i) => (
            <AwardEntry key={award.id} award={award} i={i} />
          ))}
        </ol>
      </section>

      {secondary.length > 0 && (
        <section>
          <SubHeading>Honors &amp; Awards</SubHeading>
          <ul className="space-y-2.5">
            {secondary.map((award) => (
              <li key={award.id} className="text-sm leading-relaxed text-muted">
                <span className="font-medium text-ink">{award.title}</span>
                <span className="text-muted-dim">
                  , {award.org}
                  {award.date ? `, ${award.date}` : ""}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <SubHeading>Leadership, Teaching &amp; Service</SubHeading>
        <ul className="space-y-6">
          {teachingExperience.map((t) => (
            <li key={t.role + t.date}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-medium text-ink">{t.role}</h3>
                <span className="font-mono text-xs text-muted-dim">{t.date}</span>
              </div>
              <p className="text-sm font-medium text-muted">{t.org}</p>
              {t.details && (
                <ul className="mt-2 space-y-1.5">
                  {t.details.map((d) => (
                    <li key={d} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {service.map((s) => (
            <li key={s.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-medium text-ink">{s.title}</h3>
                {s.date && <span className="font-mono text-xs text-muted-dim">{s.date}</span>}
              </div>
              <p className="text-sm font-medium text-muted">{s.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
