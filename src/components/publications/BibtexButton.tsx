"use client";

import { useState } from "react";

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
      className="cursor-pointer text-gold-bright underline decoration-gold/40 underline-offset-[3px] hover:decoration-gold"
      aria-live="polite"
    >
      {copied ? "BibTeX copied" : "BibTeX"}
    </button>
  );
}
