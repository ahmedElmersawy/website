import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResearchSection } from "@/components/research/ResearchSection";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research on reinforcement learning, LLM-based code optimization, and performance-efficient AI systems.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading
        eyebrow="Research"
        title="One underlying question: what does it cost an AI system to learn and decide, and can it be steered?"
        description="Hydra (Thread 1: AI for Software Optimization) treats a model's own per-metric training loss as a live feedback signal, reading it every epoch to decide which objective (latency, memory, energy) a code LLM should sample next, so multi-objective preference learning self-corrects instead of relying on fixed weights. Deciding Without Generating (Thread 2: Efficient LLM Systems) asks where that kind of decision should live inside a deployed LLM system: it tests whether a small non-generative decision model can replace an LLM for agent tool choice, semantic-cache reuse, and model routing, measuring quality, cost, latency, and GPU energy on one harness, and finds it pays off only when the decision skips a generation and the input holds the evidence it needs. Variance Collapse (Thread 3: Optimization Dynamics) asks when training signal, the per-unit gradient gate, disappears on its own, deriving from a single training-free quantity whether gate density survives or collapses before training begins."
      />
      <ResearchSection />
    </div>
  );
}
