"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { benchmarkSeries } from "@/content/benchmarks";

const WIDTH = 560;
const HEIGHT = 160;
const PADDING = 24;

export function LatencyChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const { iterations, metrics } = benchmarkSeries;

  // Each metric is normalized to its own min/max - the five metrics have
  // incompatible units and scales (a bounded % reduction vs. a log-scale
  // speedup vs. one extreme memory outlier), so a shared axis would flatten
  // four of the five lines to invisibility. Line *shape* per metric is
  // meaningful; height is not comparable across metrics (see caption).
  const series = metrics.map((m) => {
    const max = Math.max(...m.values);
    const min = Math.min(...m.values);
    const points = iterations.map((_, i) => {
      const x = PADDING + (i / (iterations.length - 1)) * (WIDTH - PADDING * 2);
      const y =
        HEIGHT -
        PADDING -
        ((m.values[i] - min) / (max - min || 1)) * (HEIGHT - PADDING * 2);
      return [x, y] as const;
    });
    const path = points
      .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
      .join(" ");
    return { ...m, points, path };
  });

  return (
    <div>
      <svg
        ref={ref}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full"
        role="img"
        aria-label="Latency, CPU cycles, energy, throughput, and memory change across Hydra's 7-program held-out Python benchmark, each metric normalized to its own range"
      >
        <line
          x1={PADDING}
          y1={HEIGHT - PADDING}
          x2={WIDTH - PADDING}
          y2={HEIGHT - PADDING}
          stroke="#ddd4bd"
        />
        {series.map((s) => (
          <g key={s.id}>
            <motion.path
              d={s.path}
              fill="none"
              stroke={s.color}
              strokeWidth={2.5}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
            {s.points.map(([x, y], i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r={3}
                fill={s.color}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 + i * 0.12 }}
              />
            ))}
          </g>
        ))}
      </svg>
      <div className="mt-3 flex flex-wrap gap-4">
        {metrics.map((m) => (
          <span key={m.id} className="flex items-center gap-1.5 text-[11px] text-muted">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: m.color }} />
            {m.label}
          </span>
        ))}
      </div>
    </div>
  );
}
