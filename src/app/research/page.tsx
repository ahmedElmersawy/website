import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResearchEntry, type ResearchFigure } from "@/components/research/ResearchEntry";
import { researchProjects } from "@/content/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Three research threads: when decision models pay off in LLM systems (MLSys 2027, under review), multi-objective preference learning for code optimization (Hydra, DAC 2026), and predicting gate-density dynamics from training-free quantities (MMLS 2026).",
};

// Display order: strongest and most recent work first.
const order = ["deciding-without-generating", "hydra", "variance-collapse"];

const venues: Record<string, string> = {
  "deciding-without-generating": "MLSys 2027",
  hydra: "DAC 2026",
  "variance-collapse": "MMLS 2026",
};

const figures: Record<string, ResearchFigure> = {
  "deciding-without-generating": {
    src: "/images/research/deciding-without-generating/decider-placement.jpeg",
    alt: "Pluggable deciders (Jev, frontier LLM, small LLM, open-weights local model, trained classifier) attached to three decision points on one harness: a router, a cache guard, and an agent controller.",
    caption:
      "One shared harness: the same pluggable deciders are evaluated at three decision points (routing, cache guarding, and agent control) on quality, cost, latency, and GPU energy.",
  },
  hydra: {
    src: "/images/research/hydra/framework-overview.jpg",
    alt: "Hydra training pipeline: code samples are profiled across per-metric performance scores, aggregated via adaptive Dirichlet sampling into preference weights, and used to train the LLM with DPO.",
    caption:
      "Hydra pipeline: candidate implementations are profiled on five system metrics, weighted by an adaptively sampled preference vector, and turned into DPO preference pairs.",
  },
  "variance-collapse": {
    src: "/images/research/variance-collapse/activation-ablation.png",
    alt: "Architecture-fixed ablation on ResNet-18 and VGG-11 (CIFAR-10): the active fraction of ReLU units falls during training while GELU, SiLU, and Mish stay near one; effective rank rises for all activations.",
    caption:
      "Architecture-fixed ablation: gate density falls for ReLU but not for GELU, SiLU, or Mish, while representational rank rises regardless, so the direction is set by the activation class.",
  },
};

export default function ResearchPage() {
  const projects = order
    .map((id) => researchProjects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:px-8 *:max-w-[860px]">
      <SectionHeading
        title="Research"
        description="One question runs through my work: what does it cost an AI system to learn and to decide, and can that cost be steered? Hydra made me treat computation itself as an optimization target; that led to asking when generation can be skipped altogether; Variance Collapse looks at the same question from the training side."
      />
      <div>
        {projects.map((p) => (
          <ResearchEntry key={p.id} project={p} venue={venues[p.id]} figure={figures[p.id]} />
        ))}
      </div>
    </div>
  );
}
