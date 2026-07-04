import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch: email, GitHub, LinkedIn, and CV download.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        description="I'm an undergraduate researcher in Purdue's Duality Lab, advised by Prof. James Davis. Open to research collaborations and roles in AI systems. The fastest way to reach me is email."
      />
      <ContactSection />
    </div>
  );
}
