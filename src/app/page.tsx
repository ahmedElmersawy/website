import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ResearchPreviewGrid } from "@/components/research/ResearchPreviewGrid";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { site } from "@/content/site";

function ViewAllLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-bright"
    >
      {label}
      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

const highlights = [
  {
    id: "dac-young-fellow",
    label: "DAC Young Fellowship",
    sublabel: "Design Automation Conference, 2026",
  },
  {
    id: "nsf-grant-award",
    label: "NSF Grant Award",
    sublabel: "National Science Foundation, 2025",
  },
  {
    id: "ece-deans-list",
    label: "ECE Dean's List",
    sublabel: "Purdue University, 2023–2026",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* About / Research Vision */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold">
                About
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink">
                Research Vision
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-ink/90">
              <p>
                I&rsquo;m a graduate researcher at Purdue University&rsquo;s Duality Lab,
                advised by Prof. James Davis. My work sits at the intersection of machine
                learning and systems: I build AI systems that optimize code across competing
                goals, and I study the training dynamics that determine when learning is
                even possible.
              </p>
              <p>
                Two projects define this work. <strong className="font-medium text-ink">Hydra</strong> is a
                preference-learning framework that teaches a code LLM to balance speed, memory,
                and energy simultaneously, treating multi-objective optimization as a
                decision problem, not just a metric. <strong className="font-medium text-ink">Variance Collapse</strong> asks
                the complementary question: before you train anything, can you predict whether
                the training signal will survive? It turns out you can, from a single
                measurement made before training begins.
              </p>
              <p>
                My long-term interest is in AI systems that understand and adapt to their
                own computational cost: systems that are not just accurate, but resource-aware
                by design. I&rsquo;m interested in research opportunities in AI systems,
                learned optimization, and ML theory.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Academic Highlights */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Reveal>
          <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Academic Highlights
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.id}
                className="rounded-xl border border-navy-border bg-navy/50 px-5 py-4"
              >
                <p className="text-sm font-medium leading-snug text-ink">{h.label}</p>
                <p className="mt-1 text-xs text-muted">{h.sublabel}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link
              href="/awards"
              className="text-xs font-medium text-muted transition-colors hover:text-gold"
            >
              View all awards →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Featured Research */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Research"
          title="One question, two directions"
          description="How does training signal behave, and can it be steered? Hydra acts on it to guide multi-objective code optimization. Variance Collapse predicts when that signal exists at all."
        />
        <ResearchPreviewGrid />
        <ViewAllLink href="/research" label="Explore the full research graph" />
      </section>

      {/* Featured Projects */}
      <section className="border-y border-navy-border/60 bg-navy/20">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Research projects that test a scientific claim, and engineering projects that ship a working system."
          />
          <ProjectsGrid limit={2} />
          <ViewAllLink href="/projects" label="View all projects" />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Get in touch
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Open to research opportunities.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {site.shortBio}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-paper transition-transform hover:scale-[1.03]"
          >
            Contact me
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
