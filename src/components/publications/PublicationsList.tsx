import { FileText } from "lucide-react";
import { publications, toBibtex } from "@/content/publications";
import { BibtexButton } from "./BibtexButton";

export function PublicationsList() {
  return (
    <ul className="space-y-6">
      {publications.map((pub) => (
        <li
          key={pub.id}
          className="rounded-2xl border border-navy-border bg-navy/50 px-6 py-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg font-medium leading-snug text-ink">
                {pub.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">
                {pub.authors.join(", ")}
              </p>
              <p className="mt-1 text-sm text-muted">
                {pub.venue} · {pub.year}
              </p>
            </div>
            <span className="flex-shrink-0 whitespace-nowrap rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[11px] text-gold">
              {pub.status}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {pub.pdfUrl && (
              <a
                href={pub.pdfUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-gold hover:text-gold"
              >
                <FileText size={13} /> PDF
              </a>
            )}
            <BibtexButton bibtex={toBibtex(pub)} filename={`${pub.bibtexKey}.bib`} />
          </div>
        </li>
      ))}
    </ul>
  );
}
