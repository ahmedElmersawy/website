import { site } from "@/content/site";
import { resumePdfFilename, resumePdfUrl } from "@/content/resume";

export function Footer() {
  return (
    <footer className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-3 border-t border-rule px-6 pt-7 pb-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
      <p>
        © {new Date().getFullYear()} {site.name} ·{" "}
        <a href={`mailto:${site.email}`} className="text-gold hover:underline">
          {site.email}
        </a>
      </p>
      <p className="flex flex-wrap gap-x-5 gap-y-1 font-medium">
        <a href={resumePdfUrl} download={resumePdfFilename} className="text-gold hover:underline">
          CV (PDF)
        </a>
        <a
          href={site.social.github}
          target="_blank"
          rel="noreferrer noopener"
          className="text-gold hover:underline"
        >
          GitHub
        </a>
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="text-gold hover:underline"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
