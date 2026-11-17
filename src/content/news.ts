export type NewsItem = {
  /** Display date. Year only where the exact month isn't on record. */
  date: string;
  text: string;
  href?: string;
  linkText?: string;
};

// Newest first. Every item is drawn from the CV and confirmed application notes.
export const news: NewsItem[] = [
  {
    date: "Oct 2026",
    text: "Submitted Deciding Without Generating, my first-author paper on when a standalone decision model can replace an LLM inside a deployed system, to MLSys 2027.",
    href: "/papers/deciding-without-generating.pdf",
    linkText: "Preprint",
  },
  {
    date: "Jul 2026",
    text: "PEARC26 Student Program Fellow; gave a lightning talk on my research to the HPC and research-computing community.",
  },
  {
    date: "Jun 2026",
    text: "Joined Federal Working Group as an AI Systems Engineer in Washington, DC.",
  },
  {
    date: "May 2026",
    text: "Graduated from Purdue University with a B.S. in Computer Engineering.",
  },
  {
    date: "2026",
    text: "Presented Hydra, a multi-objective code optimization framework, as a poster at the 63rd Design Automation Conference, and received the DAC Young Fellowship.",
    href: "/papers/hydra-multi-objective-code-optimization.pdf",
    linkText: "Paper",
  },
  {
    date: "2026",
    text: "Presented my sole-author work on variance collapse and gate density as a poster at the Midwest Machine Learning Symposium (MMLS).",
    href: "/papers/variance-collapse-gate-density.pdf",
    linkText: "Paper",
  },
  {
    date: "Mar 2026",
    text: "Attended IEEE SaTML 2026 in Munich, supported by an IEEE Region 8 travel grant.",
  },
  {
    date: "Jan 2026",
    text: "Teaching assistant for ECE 57000 (graduate Artificial Intelligence) and ECE 20800 at Purdue.",
  },
  {
    date: "Aug 2025",
    text: "Joined Prof. James Davis's Duality Lab at Purdue as an undergraduate researcher on the Hydra project.",
  },
  {
    date: "2025",
    text: "Received an NSF Grant Award supporting undergraduate research.",
  },
  {
    date: "Jun 2024",
    text: "Student Research Trainee with the OpenAirInterface Software Alliance at EURECOM.",
  },
];
