import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/awards/Timeline";

export const metadata: Metadata = {
  title: "Awards",
  description: "Awards, fellowships, and recognition.",
};

export default function AwardsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading eyebrow="Awards & Recognition" title="Timeline" />
      <Timeline />
    </div>
  );
}
