import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResearchSection } from "@/components/research/ResearchSection";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Three research threads: multi-objective preference learning for code optimization (Hydra, DAC 2026), when decision models pay off in LLM systems (MLSys 2027, under review), and predicting gradient-gate collapse from training-free quantities (MMLS 2026).",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:px-8 *:max-w-4xl">
      <SectionHeading
        eyebrow="Research"
        title="One underlying question: what does it cost an AI system to learn and decide, and can it be steered?"
        description="Three threads, one paper each. Hydra steers a code LLM across competing performance goals: latency, memory, and energy. Deciding Without Generating measures when a small decision model can replace an LLM inside a deployed system. Variance Collapse predicts, before training begins, whether a network's training signal survives. Open any thread below for its abstract, method, and results."
      />
      <ResearchSection />
    </div>
  );
}
