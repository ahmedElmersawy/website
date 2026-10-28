export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "conference" | "journal" | "workshop" | "preprint";
  /** Plain-language status badge - never implies peer-reviewed publication unless true. */
  status: "Conference Poster" | "Under Review";
  tags: string[];
  citationCount: number; // accurate count, not yet eligible for citations
  pdfUrl?: string;
  bibtexKey: string;
};

// Honest framing: neither entry below is a peer-reviewed publication yet.
// Hydra is a conference poster (accepted/presented, not a refereed paper).
// Variance Collapse is a manuscript currently under anonymous review,
// with its foundational theory separately presented as a symposium poster.
// Deciding Without Generating is under double-blind review at MLSys 2027, so no PDF is linked.
export const publications: Publication[] = [
  {
    id: "hydra-dac-2026",
    title: "Hydra: Multi-Objective Software Optimization using Large Language Models",
    authors: ["A. Gupte", "A. Elmersawy", "A. Lee", "S. Maxim"],
    venue: "63rd Design Automation Conference (DAC), Poster, DAC Young Fellowship",
    year: 2026,
    type: "conference",
    status: "Conference Poster",
    tags: ["ai-llms", "code-opt", "rl"],
    citationCount: 0,
    pdfUrl: "/papers/hydra-multi-objective-code-optimization.pdf",
    bibtexKey: "gupte2026hydra",
  },
  {
    id: "variance-collapse-2026",
    title: "Variance Collapse Predicts When Gate Density Diverges by Activation Class",
    authors: ["A. Elmersawy"],
    venue: "Midwest Machine Learning Symposium (MMLS) 2026, Poster",
    year: 2026,
    type: "workshop",
    status: "Conference Poster",
    tags: ["ai-llms"],
    citationCount: 0,
    pdfUrl: "/papers/variance-collapse-gate-density.pdf",
    bibtexKey: "elmersawy2026variancecollapse",
  },
  {
    id: "deciding-without-generating-mlsys-2027",
    title: "Deciding Without Generating: When Does a Standalone Decision Model Pay Off in LLM Systems?",
    authors: ["A. Elmersawy", "A. Alazizy"],
    venue: "Conference on Machine Learning and Systems (MLSys) 2027, Under Review",
    year: 2027,
    type: "conference",
    status: "Under Review",
    tags: ["ai-llms", "systems", "hpc"],
    citationCount: 0,
    bibtexKey: "elmersawy2027deciding",
  },
];

export function toBibtex(pub: Publication): string {
  const entryType =
    pub.type === "journal"
      ? "article"
      : pub.type === "preprint"
        ? "misc"
        : "inproceedings";
  const authorField = pub.authors.join(" and ");
  return `@${entryType}{${pub.bibtexKey},
  title     = {${pub.title}},
  author    = {${authorField}},
  booktitle = {${pub.venue}},
  year      = {${pub.year}}
}`;
}
