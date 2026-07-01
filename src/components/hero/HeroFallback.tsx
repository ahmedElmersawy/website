import { researchAreas } from "@/content/research";

// Purely decorative - the same research areas are reachable via the main
// nav and the Research page, so this fallback skips interactivity and is
// hidden from assistive tech to avoid a focusable-content-inside-aria-hidden trap.
export function HeroFallback() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <div className="absolute inset-0 [background:radial-gradient(circle_at_70%_30%,rgba(180,83,9,0.10),transparent_60%)]" />
      <ul className="absolute right-[6%] top-1/2 hidden -translate-y-1/2 flex-col gap-5 sm:flex">
        {researchAreas.map((area, i) => (
          <li
            key={area.id}
            className="animate-float rounded-full border border-navy-border bg-navy/60 px-4 py-2 font-mono text-xs tracking-wide text-muted backdrop-blur-sm"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            {area.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
