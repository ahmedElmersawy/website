"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

export function Counter({
  to,
  from = 0,
  decimals = 0,
  suffix = "",
}: {
  to: number;
  from?: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) => `${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.4, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
