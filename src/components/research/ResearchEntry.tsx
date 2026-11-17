import Image from "next/image";
import type { ResearchProject } from "@/content/research";

export type ResearchFigure = { src: string; alt: string; caption: string };

const statusLabel: Record<ResearchProject["status"], string> = {
  "in-review": "Under review",
  published: "Presented",
  ongoing: "Ongoing",
};

const link =
  "text-gold-bright underline decoration-gold/40 underline-offset-[3px] hover:decoration-gold";

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 marker:text-muted">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function ResearchEntry({
  project,
  venue,
  figure,
}: {
  project: ResearchProject;
  venue: string;
  figure?: ResearchFigure;
}) {
  return (
    <article id={project.id} className="scroll-mt-24 border-t border-rule py-10 first:border-t-0 first:pt-2">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h2 className="text-2xl font-medium text-ink">{project.title}</h2>
        <p className="text-sm font-semibold tracking-[0.03em] whitespace-nowrap text-gold-bright uppercase">
          {venue} · {statusLabel[project.status]}
        </p>
      </div>

      <p className="mt-3 text-[17px] leading-[1.65] text-ink/90">{project.summary}</p>

      {figure && (
        <figure className="mt-6">
          <div className="overflow-hidden rounded border border-rule bg-white">
            <Image
              src={figure.src}
              alt={figure.alt}
              width={1600}
              height={1000}
              sizes="(max-width: 900px) 100vw, 860px"
              className="h-auto max-h-[460px] w-full object-contain"
            />
          </div>
          <figcaption className="mt-2 text-sm leading-relaxed text-muted">{figure.caption}</figcaption>
        </figure>
      )}

      {project.contribution && (
        <p className="mt-5 text-base leading-[1.65] text-ink/80">
          <span className="font-semibold text-ink">My role: </span>
          {project.contribution}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-base font-medium">
        {project.paperUrl && (
          <a href={project.paperUrl} target="_blank" rel="noreferrer noopener" className={link}>
            Paper (PDF)
          </a>
        )}
        {project.posterUrl && (
          <a href={project.posterUrl} target="_blank" rel="noreferrer noopener" className={link}>
            Poster
          </a>
        )}
        {project.codeUrl && (
          <a href={project.codeUrl} target="_blank" rel="noreferrer noopener" className={link}>
            Code
          </a>
        )}
      </div>

      <details className="group mt-5">
        <summary className="inline-block cursor-pointer list-none text-base font-medium text-gold-bright hover:underline hover:underline-offset-[3px] [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">Abstract, method &amp; results →</span>
          <span className="hidden group-open:inline">Hide details ↑</span>
        </summary>
        <div className="mt-4 space-y-5 rounded bg-pale/60 px-5 py-5 text-base leading-[1.65] text-ink/85">
          <section>
            <h3 className="mb-1.5 text-lg font-medium text-ink">Abstract</h3>
            <p>{project.abstract}</p>
          </section>
          <section>
            <h3 className="mb-1.5 text-lg font-medium text-ink">Why it matters</h3>
            <p>{project.whyItMatters}</p>
          </section>
          <section>
            <h3 className="mb-1.5 text-lg font-medium text-ink">Method</h3>
            <List items={project.methodology} />
          </section>
          <section>
            <h3 className="mb-1.5 text-lg font-medium text-ink">Results</h3>
            <List items={project.results} />
          </section>
          <section>
            <h3 className="mb-1.5 text-lg font-medium text-ink">Next steps</h3>
            <p>{project.futureImpact}</p>
          </section>
        </div>
      </details>
    </article>
  );
}
