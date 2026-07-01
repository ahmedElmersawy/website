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
        description="Neither entry below is peer-reviewed yet: one is a conference poster, the other a manuscript currently under anonymous review. Status is labeled on each entry."
      />
      <PublicationsList />
    </div>
  );
}
