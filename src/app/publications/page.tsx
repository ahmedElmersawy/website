import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PublicationsList } from "@/components/publications/PublicationsList";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Papers and posters by Ahmed Elmersawy: MLSys 2027 submission (under review), DAC 2026 poster, and MMLS 2026 poster, with PDFs and BibTeX.",
};

const talks = [
  {
    date: "Jul 2026",
    title: "Lightning talk, PEARC26 Student Program",
    venue: "Practice and Experience in Advanced Research Computing (PEARC26)",
  },
  {
    date: "2026",
    title: "Hydra: Multi-Objective Software Optimization using Large Language Models (poster)",
    venue: "63rd Design Automation Conference (DAC), with the DAC Young Fellowship",
  },
  {
    date: "2026",
    title: "Variance Collapse Predicts When Gate Density Diverges by Activation Class (poster)",
    venue: "Midwest Machine Learning Symposium (MMLS)",
  },
];

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:px-8 *:max-w-3xl">
      <SectionHeading
        eyebrow="Publications"
        title="Publications"
        description="One first-author paper under review at MLSys 2027, a conference poster at DAC 2026, and a sole-author poster at MMLS 2026. Status is labeled on each entry."
      />
      <PublicationsList />

      <section className="mt-14">
        <h2 className="mb-5 text-2xl font-medium text-ink">Talks &amp; Posters</h2>
        <ul className="list-none border-t border-rule">
          {talks.map((t) => (
            <li key={t.title} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[110px_1fr] sm:gap-5">
              <span className="pt-0.5 text-sm font-medium tabular-nums text-muted">{t.date}</span>
              <span>
                <span className="font-semibold text-ink">{t.title}</span>
                <span className="block text-[17px] text-ink/75">{t.venue}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
