import Image from "next/image";
import Link from "next/link";
import { awards } from "@/content/awards";
import { news } from "@/content/news";
import { site } from "@/content/site";
import { resumePdfFilename, resumePdfUrl } from "@/content/resume";

const button =
  "rounded border border-gold px-2 py-2 text-center text-[15px] font-medium whitespace-nowrap text-gold-bright transition-colors hover:bg-gold hover:text-paper";

const themes = [
  {
    id: "hydra",
    title: "Steering Code LLMs Across Competing Objectives",
    body: "Real software optimization trades runtime against memory, energy, and throughput. With Hydra, I frame that trade-off as a preference-learning problem, fine-tuning a code LLM with DPO on profiled implementation pairs so a single model can be steered toward whichever objective a deployment cares about.",
  },
  {
    id: "deciding-without-generating",
    title: "When Is an LLM Worth What It Costs?",
    body: "Many decisions inside deployed LLM systems, like which tool to call, whether a cached answer is safe to reuse, or which model to route to, don't need text generation. I measure when a small standalone decision model can replace the LLM, accounting for quality, cost, latency, and GPU energy together.",
  },
  {
    id: "variance-collapse",
    title: "Predicting Training Behavior Before Training",
    body: "Much of what we believe about how networks train is empirical folklore. I derive and test training-free predictors, such as whether the fraction of gradient-carrying units rises or falls for a given activation and optimizer, across nearly 500 runs on CNNs, MLP-Mixers, and Transformers.",
  },
];

const phdQuestions = [
  {
    title: "When should an LLM system pay for generation?",
    area: "LLM serving, routing & caching · selective prediction",
    body: "In Deciding Without Generating, a frontier LLM used as a cache guard cost more than having no cache at all (138%), while a small decision model reached 93.3% accuracy at about 2% of the cost. For routing, only a classifier trained on the cheaper model's own failures helped, recovering 64.9% of the quality gap. I want to treat routing, caching, and agent control as one learning-to-defer problem, with guarantees rather than benchmark wins.",
  },
  {
    title: "Measured cost as a training signal.",
    area: "Energy-aware ML · LLMs for code & kernels",
    body: "Hydra used profiled execution as a DPO reward to teach a code LLM to trade latency, memory, and energy, but its energy was estimated from CPU cycles on a small benchmark. I want rewards from measured hardware cost, applied first to GPU kernels and inference code, and eventually to a model's own inference cost, so the accuracy-cost trade-off is chosen at deployment.",
  },
  {
    title: "Predicting what training will do before it runs.",
    area: "Training dynamics · theory of deep learning",
    body: "My variance-collapse predictor gets the direction of gate-density change right from one training-free quantity, including AdamW in 12 of 12 settings, but not its magnitude or the reason AdamW prevents collapse. I want the theory that closes that gap, tested at ImageNet scale and beyond.",
  },
];

const selectedAwards = awards.filter((a) => a.tier !== "service").slice(0, 6);

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-rule py-12 md:py-14">
      <h2 className="mb-7 text-2xl font-medium text-ink">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-10 text-[17px] md:px-8 md:pt-12 md:text-lg">
      {/* Identity */}
      <div className="grid items-start gap-10 pb-12 md:grid-cols-[300px_1fr] md:gap-14">
        <aside className="rounded bg-pale px-7 py-8 text-center md:sticky md:top-24">
          <div className="relative mx-auto h-[170px] w-[170px] overflow-hidden rounded-full border-4 border-paper shadow-[0_12px_30px_-16px_rgba(119,125,104,0.35)] md:h-[190px] md:w-[190px]">
            <Image
              src="/images/headshot.jpg"
              alt={`Portrait of ${site.name}`}
              fill
              sizes="190px"
              className="object-cover object-top"
              priority
            />
          </div>
          <h1 className="mt-5 mb-2 text-[32px] font-medium tracking-tight text-ink">
            {site.name}
          </h1>
          <p className="mb-5 leading-relaxed text-muted">
            <strong className="font-semibold text-ink">{site.degree}</strong>
            <br />
            {site.university} · {site.location}
            <br />
            B.S. Computer Engineering, Purdue, 2026
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/publications"
              className={`${button} col-span-2 bg-gold text-paper hover:border-gold-bright hover:bg-gold-bright`}
            >
              Publications
            </Link>
            <a href={resumePdfUrl} download={resumePdfFilename} className={button}>
              CV
            </a>
            <a href={`mailto:${site.email}`} className={button}>
              Email
            </a>
            <a href={site.social.github} target="_blank" rel="noreferrer noopener" className={button}>
              GitHub
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer noopener" className={button}>
              LinkedIn
            </a>
          </div>
        </aside>

        <div className="max-w-[720px] leading-[1.65] text-ink">
          <p className="mb-4">
            I work at the intersection of machine learning and systems. My research asks:{" "}
            <strong className="font-medium">
              what does it cost an AI system to learn and to decide, and can that cost be
              steered?
            </strong>
          </p>
          <p className="mb-4">
            I&rsquo;m currently an AI Systems Engineer at Federal Working Group. Before that, I
            was an undergraduate researcher in Purdue&rsquo;s Duality Lab, advised by Prof. James
            Davis. My work spans preference learning for code optimization, the efficiency of
            LLM systems, and the training dynamics of deep networks, combining large-scale
            empirical studies with mechanistic analysis.
          </p>

          <div className="mt-6 rounded-md border border-gold/25 border-l-[3px] border-l-gold bg-pale/50 px-5 py-4 text-ink/85">
            <p>
              <strong className="font-semibold text-gold-bright">PhD applications:</strong> I am
              applying to PhD programs for Fall 2027 in machine learning and systems. My{" "}
              <a
                href={resumePdfUrl}
                download={resumePdfFilename}
                className="text-gold-bright underline decoration-gold/40 underline-offset-[3px] hover:decoration-gold"
              >
                CV
              </a>{" "}
              and{" "}
              <Link
                href="/research"
                className="text-gold-bright underline decoration-gold/40 underline-offset-[3px] hover:decoration-gold"
              >
                research page
              </Link>{" "}
              summarize my work so far.
            </p>
          </div>

          <details className="group mt-5">
            <summary className="inline-block cursor-pointer list-none py-1 text-base font-medium text-gold-bright hover:underline hover:underline-offset-[3px] [&::-webkit-details-marker]:hidden">
              Brief bio <span aria-hidden="true" className="group-open:hidden">→</span>
              <span aria-hidden="true" className="hidden group-open:inline">↑</span>
            </summary>
            <div className="mt-3 space-y-3 rounded bg-pale px-5 py-4 text-ink/90">
              <p>
                Ahmed Elmersawy is an AI Systems Engineer at Federal Working Group in
                Washington, DC. He received his B.S. in Computer Engineering from
                Purdue University in 2026, where he held a Presidential Scholarship and was an
                undergraduate researcher in the Duality Lab, advised by Prof. James Davis.
              </p>
              <p>
                His research spans multi-objective code optimization with preference learning
                (Hydra, presented at DAC 2026), the cost of decision-making inside LLM systems
                (under review at MLSys 2027), and the training dynamics of deep networks (MMLS
                2026). He received the DAC Young Fellowship in 2026 and an NSF Grant Award in 2025.
              </p>
            </div>
          </details>
        </div>
      </div>

      <Section id="research-themes" title="Research Themes">
        <ol className="list-none">
          {themes.map((t, i) => (
            <li key={t.id} className={i === 0 ? "pb-5" : "border-t border-rule py-5"}>
              <h3 className="relative mb-1.5 pl-6 text-xl text-gold-bright before:absolute before:left-0 before:top-[0.32em] before:text-[15px] before:leading-none before:content-['▶']">
                <Link href={`/research#${t.id}`} className="hover:underline hover:underline-offset-[3px]">
                  {t.title}
                </Link>
              </h3>
              <p className="pl-6 leading-[1.65] text-ink/85">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="phd-interests" title="What I Want to Study in a PhD">
        <div className="max-w-[820px] leading-[1.65] text-ink/90">
          <p className="mb-5">
            Each of my projects ended on a question it couldn&rsquo;t answer. These are the three I
            want to spend a PhD on, where ML systems, efficient inference, and learning theory meet.
          </p>
          <ol className="list-none space-y-5">
            {phdQuestions.map((q, i) => (
              <li key={q.title} className="grid grid-cols-[28px_1fr]">
                <span className="font-semibold text-gold-bright tabular-nums">{i + 1}.</span>
                <div>
                  <h3 className="font-semibold text-ink">{q.title}</h3>
                  <p className="mt-0.5 mb-1.5 text-sm font-medium tracking-[0.02em] text-gold-bright uppercase">
                    {q.area}
                  </p>
                  <p>{q.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5">
            The common thread is AI systems that account for their own computation: what it
            costs to train them, to run them, and to decide what to run. I&rsquo;m looking for groups
            working on LLM serving and inference, energy-aware ML, LLMs for code and agents, or
            training dynamics.
          </p>
        </div>
      </Section>

      <Section id="recent-news" title="Recent News">
        <ul className="list-none">
          {news.map((n, i) => (
            <li key={i} className="grid grid-cols-[72px_1fr] gap-4 py-2 sm:grid-cols-[80px_1fr] sm:gap-5">
              <span className="pt-0.5 text-sm font-medium tabular-nums text-muted">{n.date}</span>
              <span className="text-ink/90">
                {n.text}
                {n.href && (
                  <>
                    {" "}
                    <a
                      href={n.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-medium text-gold-bright underline decoration-gold/40 underline-offset-[3px] hover:decoration-gold"
                    >
                      [{n.linkText ?? "Link"}]
                    </a>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="selected-awards" title="Selected Awards">
        <ul className="list-disc space-y-2.5 pl-5 marker:text-muted">
          {selectedAwards.map((a) => (
            <li key={a.id} className="pl-1">
              {a.title}, {a.org}
              {a.date && <span className="whitespace-nowrap text-muted"> ({a.date})</span>}
            </li>
          ))}
        </ul>
        <Link
          href="/awards"
          className="mt-6 inline-block text-base font-medium text-gold-bright hover:underline hover:underline-offset-[3px]"
        >
          All awards, teaching &amp; service →
        </Link>
      </Section>
    </div>
  );
}
