export type NewsItem = {
  /** Display date. Year only where the exact month isn't recorded in the CV. */
  date: string;
  text: string;
  href?: string;
  linkText?: string;
};

// Newest first. Every item is drawn from the CV / existing site content.
export const news: NewsItem[] = [
  {
    date: "2026",
    text: "Submitted Deciding Without Generating, my first-author paper on when a standalone decision model can replace an LLM, to MLSys 2027 (under review).",
    href: "/papers/deciding-without-generating.pdf",
    linkText: "Preprint",
  },
  {
    date: "Jun 2026",
    text: "Joined Federal Working Group as an AI Solutions Engineer in Washington, DC.",
  },
  {
    date: "2026",
    text: "Graduated from Purdue University with a B.S. in Electrical and Computer Engineering.",
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
    date: "2026",
    text: "Selected as an IMS Connect Project Fellow at the IEEE International Microwave Symposium.",
  },
  {
    date: "Jan 2026",
    text: "Teaching assistant for ECE 57000 (graduate Artificial Intelligence) and ECE 20800 at Purdue.",
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
