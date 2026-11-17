import { publications, toBibtex } from "@/content/publications";
import { BibtexButton } from "./BibtexButton";

const SELF = "A. Elmersawy";

export function PublicationsList() {
  return (
    <ul className="list-none border-t border-rule">
      {publications.map((pub) => (
        <li key={pub.id} className="border-b border-rule py-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5">
            <h3 className="min-w-0 flex-1 text-lg leading-snug font-semibold text-ink">
              {pub.pdfUrl ? (
                <a
                  href={pub.pdfUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-gold"
                >
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h3>
            <div className="flex flex-shrink-0 flex-wrap items-center gap-1.5">
              <span className="rounded-sm bg-pale px-2 py-px text-xs font-semibold tracking-[0.03em] whitespace-nowrap text-gold uppercase">
                {pub.venueShort}
              </span>
              <span className="rounded-sm border border-gold/35 px-2 py-px text-xs font-semibold tracking-[0.03em] whitespace-nowrap text-gold uppercase">
                {pub.status}
              </span>
            </div>
          </div>

          <p className="mt-1 text-[17px] text-ink/80">
            {pub.authors.map((a, i) => (
              <span key={a}>
                {a === SELF ? <span className="font-semibold text-ink">{a}</span> : a}
                {i < pub.authors.length - 2
                  ? ", "
                  : i === pub.authors.length - 2
                    ? pub.authors.length === 2
                      ? " and "
                      : ", and "
                    : ""}
              </span>
            ))}
          </p>
          <p className="mt-0.5 text-[17px] text-ink/70 italic">{pub.venue}</p>

          <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1 text-base font-medium">
            {pub.pdfUrl && (
              <a
                href={pub.pdfUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gold underline decoration-gold/40 underline-offset-[3px] hover:decoration-gold"
              >
                Paper
              </a>
            )}
            <BibtexButton bibtex={toBibtex(pub)} filename={`${pub.bibtexKey}.bib`} />
          </div>
        </li>
      ))}
    </ul>
  );
}
