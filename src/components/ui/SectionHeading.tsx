import { cn } from "@/lib/utils";

/**
 * Plain page/section heading. `eyebrow` is accepted for compatibility but no longer
 * rendered: the academic layout uses a single clear heading per section.
 */
export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 max-w-[720px]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h1 className="text-3xl font-medium tracking-tight text-ink sm:text-[34px]">{title}</h1>
      {description && (
        <p className="mt-3 text-[17px] leading-[1.65] text-ink/80">{description}</p>
      )}
    </div>
  );
}
