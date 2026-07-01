"use client";

import { useState } from "react";
import { Check, Quote } from "lucide-react";

export function BibtexButton({ bibtex, filename }: { bibtex: string; filename: string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable - fall back to a direct .bib download.
      const blob = new Blob([bibtex], { type: "application/x-bibtex" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-navy-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-gold hover:text-gold"
    >
      {copied ? <Check size={13} /> : <Quote size={13} />}
      {copied ? "Copied" : "BibTeX"}
    </button>
  );
}
