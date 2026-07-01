export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "conference" | "journal" | "workshop" | "preprint";
  /** Plain-language status badge - never implies peer-reviewed publication unless true. */
  status: "Conference Poster" | "Manuscript in Submission" | "Research Artifact";
  tags: string[];
  citationCount: number; // accurate count, not yet eligible for citations
  pdfUrl?: string;
  bibtexKey: string;
};

// Honest framing: neither entry below is a peer-reviewed publication yet.
// Hydra is a conference poster (accepted/presented, not a refereed paper).
// Variance Collapse is a manuscript currently under anonymous review,
// with its foundational theory separately presented as a symposium poster.
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
    venue: "Submitted to NeurIPS 2026 (anonymized draft); poster, Midwest Machine Learning Symposium (MMLS) 2026",
    year: 2026,
    type: "preprint",
    status: "Manuscript in Submission",
    tags: ["ai-llms"],
    citationCount: 0,
    pdfUrl: "/papers/variance-collapse-gate-density.pdf",
    bibtexKey: "elmersawy2026variancecollapse",
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
