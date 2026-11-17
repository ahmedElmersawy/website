import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PublicationsList } from "@/components/publications/PublicationsList";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Papers and posters by Ahmed Elmersawy: MLSys 2027 submission (under review), DAC 2026 poster, and MMLS 2026 poster, with PDFs and BibTeX.",
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:px-8 *:max-w-3xl">
      <SectionHeading
        eyebrow="Publications"
        title="Papers & preprints"
        description="One first-author paper under review at MLSys 2027, a conference poster at DAC 2026, and a sole-author poster at MMLS 2026. Status is labeled on each entry."
      />
      <PublicationsList />
    </div>
  );
}
