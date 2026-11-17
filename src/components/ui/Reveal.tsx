import type { ReactNode } from "react";

/**
 * Formerly a scroll-triggered fade-in. Content now renders statically, in keeping
 * with a plain academic page; the wrapper is kept so existing call sites still work.
 */
export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const Component = as;
  return <Component className={className}>{children}</Component>;
}
