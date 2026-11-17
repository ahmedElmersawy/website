import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/awards/Timeline";

export const metadata: Metadata = {
  title: "Awards & Service",
  description:
    "Fellowships, honors, teaching, and service: DAC Young Fellowship 2026, NSF Grant Award, ECE Dean's List, graduate AI course teaching assistant, and IEEE Region 8 Humanitarian Ambassador.",
};

export default function AwardsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:px-8 *:max-w-3xl">
      <SectionHeading eyebrow="Recognition" title="Awards & Service" />
      <Timeline />
    </div>
  );
}
