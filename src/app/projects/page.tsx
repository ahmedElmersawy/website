import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects spanning preference learning for code optimization, efficient LLM systems, neural network training dynamics, applied NLP, and hardware security.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:px-8 *:max-w-5xl">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Research projects test a specific scientific claim; engineering projects ship a working system. Each is built to answer a concrete question with measurable results."
      />
      <ProjectsGrid />
    </div>
  );
}
