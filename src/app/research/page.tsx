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
        title="One underlying question: how does training signal behave, and can it be steered?"
        description="Hydra (Thread 1: AI for Software Optimization) treats a model's own per-metric training loss as a live feedback signal, reading it every epoch to decide which objective (latency, memory, energy) a code LLM should sample next, so multi-objective preference learning self-corrects instead of relying on fixed weights. Variance Collapse (Thread 2: Optimization Dynamics) asks the inverse question: when does that same kind of signal, the per-unit gradient gate, disappear on its own? It derives, from a single training-free quantity, whether gate density survives or collapses before training even begins. Hydra acts on training signal; Variance Collapse derives when that signal exists to act on."
      />
      <ResearchSection />
    </div>
  );
}
