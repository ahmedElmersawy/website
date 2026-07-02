export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  date: string;
  details?: string[];
};

export type ExperienceEntry = {
  role: string;
  org: string;
  location: string;
  date: string;
  details: string[];
};

export const education: EducationEntry[] = [
  {
    degree: "M.S. Electrical and Computer Engineering",
    institution: "Purdue University",
    location: "West Lafayette, IN",
    date: "2023 - 2026 (expected)",
    details: [
      "GPA: 3.77.",
      "Graduate-level coursework: Artificial Intelligence, Machine Learning, Data Mining, Advanced Computer Networks, Applied Cryptography, Embedded Systems.",
      "Upper-level coursework: Computer Vision, Natural Language Processing, Computer Security, Signals & Systems, Operations Research & Optimization.",
    ],
  },
];

export const researchExperience: ExperienceEntry[] = [
  {
    role: "Graduate Research Assistant",
    org: "Purdue University, Duality Lab (Advisor: Prof. James Davis)",
    location: "West Lafayette, IN",
    date: "08/2025 - Present",
    details: [
      "Designed a DPO-based multi-objective LLM optimization framework (Hydra) with an adaptive Dirichlet sampling mechanism that dynamically reweights training objectives, achieving 46.7% latency and 36% energy reduction on held-out benchmarks.",
      "Fine-tuned a 7B-parameter code model (Qwen2.5-Coder-7B-Instruct, QLoRA) on a large-scale preference dataset across 5 system-level metrics using Purdue's HPC cluster infrastructure.",
      "Research poster presentation accepted at the Design Automation Conference (DAC) with a DAC Young Fellowship.",
    ],
  },
  {
    role: "Student Research Trainee",
    org: "OpenAirInterface Software Alliance (EURECOM)",
    location: "Pretoria",
    date: "06/2024 - 07/2024",
    details: [
      "Conducted real-time simulation and data-driven analysis of 5G systems.",
      "Explored ML-based resource optimization strategies for dynamic spectrum allocation.",
    ],
  },
];

export const teachingExperience: ExperienceEntry[] = [
  {
    role: "Teaching Assistant, ECE 57000 (AI) & ECE 2k8 Lab",
    org: "Purdue University, School of ECE",
    location: "West Lafayette, IN",
    date: "01/2026 - 05/2026",
    details: [
      "Held office hours supporting machine learning and AI concepts.",
      "Evaluated final project presentations, assessing methodology and technical rigor.",
      "Mentored students in circuit design, measurement, and debugging.",
    ],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "C/C++", "SQL"],
  },
  {
    category: "ML / AI",
    items: [
      "Reinforcement Learning",
      "Direct Preference Optimization (DPO)",
      "LLM Fine-Tuning (QLoRA/LoRA)",
      "Generative Models",
      "Agentic Mechanisms",
      "NLP",
      "Time-Series Forecasting",
      "TensorFlow",
      "NumPy",
      "Hugging Face Transformers",
    ],
  },
  {
    category: "Systems & Optimization",
    items: ["GPU Computing", "Multi-Objective Optimization", "Performance Profiling"],
  },
  {
    category: "Development Tools",
    items: ["Git/GitHub", "HPC", "Slurm", "perf stat", "tracemalloc"],
  },
  {
    category: "Mathematics",
    items: [
      "Linear Algebra",
      "Probability & Statistics",
      "Convex & Non-Convex Optimization",
      "Information Theory",
      "Fisher Information Analysis",
    ],
  },
];

export const resumeAwards = [
  "DAC Young Fellowship (Design Automation Conference, 2026)",
  "ECE Dean's List & Semester Honors, Purdue University",
  "IMS Connect Project Fellow, IEEE International Microwave Symposium",
  "NSF Grant Award",
  "EESAT Student Program Award",
];

export const resumePdfUrl = "/resume/ahmed-elmersawy-cv.pdf";
