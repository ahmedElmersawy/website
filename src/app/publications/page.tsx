import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PublicationsList } from "@/components/publications/PublicationsList";

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications, preprints, and conference papers.",
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading
        eyebrow="Publications"
        title="Papers & preprints"
        description="Research output to date: one conference poster presented at DAC 2026, one working manuscript presented at MMLS 2026. Status is labeled on each entry."
      />
      <PublicationsList />
    </div>
  );
}
