export type Project = {
  id: string;
  /** Research = tests a scientific claim. Engineering = ships a working system. */
  tier: "research" | "engineering";
  title: string;
  /** One plain-English sentence: what problem this solves, for a non-specialist reader. */
  forNonSpecialists: string;
  /** One technical sentence: the actual contribution/approach, for a technical reader. */
  description: string;
  /** Collaboration context, when relevant - what was shared work vs. individually owned. */
  contribution?: string;
  stack: string[];
  keyResults: string[];
  githubUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  image?: string;
  imageAlt?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "hydra-code-optimization",
    tier: "research",
    title: "Hydra: Multi-Objective Code Optimization",
    forNonSpecialists:
      "Most tools that make code faster only optimize for one thing (usually speed). Hydra teaches an AI model to balance speed, memory, and energy use together, the way a real engineer would.",
    description:
      "An offline preference-learning pipeline that fine-tunes a 7B-parameter code LLM with Direct Preference Optimization (DPO) to navigate sampled trade-offs across runtime, memory, CPU cycles, throughput, and energy, using an adaptive Dirichlet sampling mechanism that reweights training toward whichever objective the model is currently weakest on.",
    contribution:
      "Built by a 4-person Purdue team (Arjun Gupte, Ahmed Elmersawy, Andre Lee, Stefan Maxim) advised by Prof. James Davis. My role: implementing and stabilizing the DPO training/inference pipeline, the QLoRA fine-tuning setup for Qwen2.5-Coder-7B, the adaptive Dirichlet sampling mechanism for the Python model, the enriched 5-metric PIE data pipeline, and the inference-time evaluation benchmark (Table III results below).",
    stack: ["Python", "PyTorch", "DPO", "QLoRA/LoRA", "Qwen2.5-Coder-7B", "SLURM / A100"],
    keyResults: [
      "46.7% latency, 36.0% CPU-cycle, and 36.0% energy reduction on a 7-program held-out Python inference benchmark",
      "35,752 DPO preference pairs built from the enriched PIE Python split, scored across 5 system-level metrics",
    ],
    githubUrl: "https://github.com/ahmedElmersawy/code-optimization-RLFT",
    demoLabel: "Hydra framework overview",
    image: "/images/research/hydra/framework-overview.jpg",
    imageAlt:
      "MOSO-DPO training pipeline: code samples are profiled across per-metric performance scores, aggregated via Adaptive Dirichlet Sampling into preference weights, and used to train the LLM with DPO loss.",
    tags: ["ai-llms", "code-opt", "rl"],
  },
  {
    id: "variance-collapse-gate-density",
    tier: "research",
    title: "Variance Collapse & Gate Density Divergence",
    forNonSpecialists:
      "When you train a neural network, some of its internal units gradually stop learning. For some activation functions this is normal and expected; for others it's a sign of trouble. This project shows that whether it's normal or a problem is predictable, for the tested activation and optimizer combinations, before you even start training — using a property anyone can check in advance.",
    description:
      "A hook-based instrumentation framework that recovers the exact gradient gate of any elementwise activation function, and a derived predictor (based on BatchNorm's known variance shrinkage under weight decay) that predicts, for the tested configurations, from a single training-free quantity whether gate density rises (GELU/SiLU/Mish) or falls (ReLU) during ordinary training — and why that split disappears under AdamW.",
    stack: ["Python", "PyTorch", "CIFAR-native ResNet/VGG/ViT", "SLURM / A100"],
    keyResults: [
      "48/48 architecture-fixed runs confirm the ReLU-vs-smooth-activation gate-density split (sign test p=2.44×10⁻⁴)",
      "The same predictor, fed AdamW's measured statistics, correctly anticipates AdamW's different outcome with zero new free parameters",
      "Directional claims validated across ~500 total runs spanning CNNs, MLP-Mixer, and Transformer-Encoder architectures on CIFAR, Tiny-ImageNet, and Places365",
    ],
    githubUrl: "https://github.com/ahmedElmersawy/variance-collapse-gate-density",
    demoLabel: "Phase transition in gate density",
    image: "/images/research/variance-collapse/phase-transition.png",
    imageAlt:
      "Reconstruction IoU undergoes a sharp sigmoidal phase transition at sigmoid stiffness alpha*=28.28, with empirical measurements tightly matching the fitted theoretical curve.",
    tags: ["ai-llms"],
  },
  {
    id: "feedback-atlas",
    tier: "engineering",
    title: "Feedback Atlas",
    forNonSpecialists:
      "When a school collects thousands of student feedback comments, the few students raising real, urgent issues (accessibility needs, language barriers, financial hardship) get statistically buried under everyone else's routine feedback. This tool is built specifically to surface those rare comments instead of averaging them away.",
    description:
      "A full-stack platform (FastAPI + React/TypeScript) that classifies student feedback across an 11-label CATME peer-review taxonomy and a 24-label course-evaluation taxonomy with a fine-tuned distilroberta-base model, then layers IsolationForest + DBSCAN minority-pattern detection on sentence embeddings to flag rare-but-real signals that majority-sentiment aggregation would otherwise hide, alongside rating/sentiment mismatch detection and a human review queue for low-confidence predictions.",
    stack: [
      "FastAPI",
      "React / TypeScript / Vite",
      "distilroberta-base",
      "all-MiniLM-L6-v2",
      "IsolationForest + DBSCAN",
      "Docker / Fly.io",
    ],
    keyResults: [
      "Trained on 144k+ CATME peer-review rows and 150k+ RateMyProfessor/course-evaluation rows across the two label taxonomies",
      "GPU-accelerated pipeline cut processing of 50,000 feedback rows from ~23 minutes to ~3 minutes via FP16 inference, embedding caching, and GPU-side clustering",
    ],
    githubUrl: "https://github.com/ahmedElmersawy/StudentFeedbackMinority",
    demoLabel: "Pipeline dashboard",
    image: "/images/research/feedback-atlas/dashboard.jpeg",
    imageAlt:
      "Feedback Atlas analytics dashboard processing 816,443 records across 24 prediction labels, with 286,800 minority patterns flagged and 245,423 records routed for human review.",
    tags: ["ai-llms", "systems"],
  },
  {
    id: "ml-side-channel-leakage",
    tier: "engineering",
    title: "ML-Based Side-Channel Leakage Detection",
    forNonSpecialists:
      "A chip leaks tiny, unintentional clues about the data it's processing through how much power it draws. This course project trains a neural network to read those clues directly from noisy power measurements, without anyone having to hand-design what to look for.",
    description:
      "A 1D CNN with an inception-style multi-branch block and multi-head self-attention, trained directly on synthetic AES S-box power traces to classify the Hamming weight of the leaking intermediate value from raw waveforms, without hand-engineered features.",
    contribution:
      "Individually built course project: synthetic trace generation, Hamming-weight leakage modeling, the full CNN architecture and training pipeline, and the SNR/trace-averaging analysis connecting it to classical side-channel statistics.",
    stack: ["Python", "TensorFlow / Keras", "1D CNN + multi-head attention", "NumPy"],
    keyResults: [
      "76.2% top-1 / 99.25% top-3 accuracy classifying the 9-class Hamming weight from noisy synthetic power traces",
      "Confusion concentrated between adjacent Hamming-weight classes, consistent with overlapping leakage distributions",
    ],
    githubUrl: "https://github.com/ahmedElmersawy/machine-learning-side-channel-leakage-detection",
    demoLabel: "Trace classification",
    image: "/images/research/side-channel/model-performance.png",
    imageAlt:
      "CNN training curves and per-class confusion matrix for Hamming-weight classification on synthetic AES S-box power traces.",
    tags: ["systems"],
  },
];
