export type Award = {
  id: string;
  /** Primary = directly evidences research output (fellowship tied to a poster/paper). Secondary = everything else. */
  tier: "primary" | "secondary";
  title: string;
  org: string;
  date: string; // human readable, e.g. "2025"
  description: string;
};

export const awards: Award[] = [
  {
    id: "dac-young-fellow",
    tier: "primary",
    title: "DAC Young Fellowship",
    org: "Design Automation Conference (DAC)",
    date: "2026",
    description:
      "Awarded alongside a poster presentation of Hydra, a DPO-based multi-objective code optimization framework, at the 63rd Design Automation Conference.",
  },
  {
    id: "ims-connect-fellow",
    tier: "secondary",
    title: "IMS Connect Project Fellow",
    org: "IEEE International Microwave Symposium (IMS)",
    date: "2026",
    description:
      "Selected as a Project Fellow for IMS Connect, a mentorship and networking program pairing students with industry researchers.",
  },
  {
    id: "nsf-grant-award",
    tier: "secondary",
    title: "NSF Grant Award",
    org: "National Science Foundation",
    date: "2025",
    description: "Recipient of an NSF grant award supporting undergraduate research.",
  },
  {
    id: "eesat-student-program",
    tier: "secondary",
    title: "EESAT Student Program Award",
    org: "EESAT",
    date: "2025",
    description: "Recipient of the EESAT Student Program Award.",
  },
  {
    id: "presidential-scholarship",
    tier: "secondary",
    title: "Presidential Scholarship",
    org: "Purdue University",
    date: "2021 - 2026",
    description:
      "Awarded the Presidential Scholarship by Purdue University in recognition of academic excellence.",
  },
  {
    id: "ece-deans-list",
    tier: "secondary",
    title: "ECE Dean's List & Semester Honors",
    org: "Purdue University, School of ECE",
    date: "2023 - 2026",
    description:
      "Recognized on the ECE Dean's List for academic standing across multiple semesters at Purdue.",
  },
  {
    id: "ieee-r8-humanitarian-ambassador",
    tier: "secondary",
    title: "IEEE Region 8 Humanitarian Ambassador",
    org: "IEEE Region 8 (Europe, Middle East, Africa)",
    date: "2024",
    description:
      "Served as Humanitarian Ambassador for IEEE Region 8 (Europe, Middle East, and Africa) for the 2024 term.",
  },
];
