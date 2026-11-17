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
  details?: string[];
};

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Purdue University",
    location: "West Lafayette, IN",
    date: "2023 - 2026",
    details: [
      "GPA: 3.77. Presidential Scholarship.",
      "Graduate-level coursework: Artificial Intelligence, Machine Learning, Data Mining, Advanced Computer Networks, Applied Cryptography, Embedded Systems, Applied Quantum Computing.",
      "Upper-level coursework: Computer Vision, Natural Language Processing, Computer Security, Signals & Systems, Operations Research & Optimization.",
    ],
  },
];

export const professionalExperience: ExperienceEntry[] = [
  {
    role: "AI Systems Engineer",
    org: "Federal Working Group",
    location: "Washington, DC",
    date: "06/2026 - Present",
    details: [
      "Architect and develop AI-powered systems to automate operational workflows in healthcare and construction, translating business requirements into deployable software solutions.",
      "Build document intelligence pipelines using LLMs, OCR, and structured data extraction to process unstructured documents, identify relevant information, and automate data entry and classification.",
      "Develop AI agents and workflow automation systems that integrate business data, external APIs, and application backends to reduce manual processes and improve operational efficiency.",
    ],
  },
];

export const researchExperience: ExperienceEntry[] = [
  {
    role: "Undergraduate Research Assistant",
    org: "Purdue University, Duality Lab (Advisor: Prof. James Davis)",
    location: "West Lafayette, IN",
    date: "08/2025 - 05/2026",
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
    role: "Undergraduate Teaching Assistant",
    org: "Purdue University, School of ECE",
    location: "West Lafayette, IN",
    date: "01/2026 - 05/2026",
    details: [
      "ECE 57000, Artificial Intelligence (graduate-level): held weekly office hours, evaluated assignments and examinations, and assessed final project presentations for methodological rigor and experimental design.",
      "ECE 20800, Electrical Engineering Lab II: mentored students in circuit design, measurement, and hardware debugging.",
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
  "IEEE Communications Society Grant Award",
  "PEARC26 Student Program Fellow (2026)",
  "IEEE Region 8 Travel Grant, SaTML 2026",
];

export const resumePdfUrl = "/resume/ahmed-elmersawy-cv.pdf";
export const resumePdfFilename = "Ahmed-Elmersawy-CV.pdf";
