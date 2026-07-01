// Real figures from the Hydra paper (Table III, "Average / Summary" row):
// before/after inference-time performance across a 7-program held-out
// Python benchmark, normalized to a 100-point baseline since the paper
// reports per-program absolute units (ms, KB, cycles, ops/s, mJ) that
// vary by orders of magnitude across programs - the underlying percentage
// reductions are exactly as published.
export type BenchmarkMetric = {
  id: string;
  label: string;
  unit: string;
  before: number;
  after: number;
  improvementLabel: string; // precomputed human-readable summary
};

export const benchmarkMetrics: BenchmarkMetric[] = [
  {
    id: "latency",
    label: "Latency",
    unit: "% of baseline",
    before: 100,
    after: 53.3,
    improvementLabel: "46.7% latency reduction",
  },
  {
    id: "memory",
    label: "Peak Memory",
    unit: "% of baseline",
    before: 100,
    after: 90.9,
    improvementLabel: "9.1% memory reduction",
  },
  {
    id: "cpuCycles",
    label: "CPU Cycles",
    unit: "% of baseline",
    before: 100,
    after: 64.0,
    improvementLabel: "36.0% CPU-cycle reduction",
  },
  {
    id: "energy",
    label: "Energy per Run",
    unit: "% of baseline",
    before: 100,
    after: 64.0,
    improvementLabel: "36.0% energy reduction",
  },
];

// Real per-program figures from Hydra's Table III (before/after inference-time
// comparison on 7 held-out Python programs), in the paper's published order.
// All five reported metrics are included:
//   - Latency, CPU Cycles, Energy, Memory: % reduction = (orig - opt) / orig
//     (negative = the metric got worse on that program)
//   - Throughput: log10(opt / orig) - a plain % increase isn't usable here
//     because Triangular Sum's throughput rises ~287,000x (136 -> 39M ops/s),
//     which would flatten every other metric to zero on a shared scale; the
//     log transform keeps the real ordering and magnitude legible.
//
// The chart normalizes each metric independently to its own min/max so all
// five fit on one set of axes (see LatencyChart.tsx) - line *shape* per
// metric is meaningful; raw height is not comparable across metrics.
//
// Notable real, non-cherry-picked features of this data:
//   - Latency regresses slightly on Dict Histogram (-2.6%), attributed in
//     the paper to measurement noise.
//   - Memory regresses sharply on String Concatenation (-987%, i.e. ~10x
//     worse) because join() allocates a larger intermediate buffer - Hydra's
//     own paper flags memory as its noisiest, least reliable signal.
//   - CPU Cycles and Energy track almost identically, since Hydra derives
//     energy directly from cycles (energy = cycles x 2.5e-10 J).
export const benchmarkSeries = {
  programs: [
    "Triangular Sum",
    "Nested Loop Filter",
    "File Lines",
    "String Concatenation",
    "List Comprehension",
    "Redundant Sort",
    "Dict Histogram",
  ],
  iterations: [0, 1, 2, 3, 4, 5, 6],
  metrics: [
    {
      id: "latency",
      label: "Latency",
      color: "#7c3a0a",
      values: [99.95, 99.87, 71.2, 40.7, 11.4, 5.8, -2.6],
    },
    {
      id: "cpuCycles",
      label: "CPU Cycles",
      color: "#b45309",
      values: [93.2, 97.5, 20.0, 9.7, 16.6, 9.1, 6.7],
    },
    {
      id: "energy",
      label: "Energy",
      color: "#c2410c",
      values: [93.16, 97.46, 20.35, 9.68, 16.57, 9.27, 6.67],
    },
    {
      id: "throughput",
      label: "Throughput (log₁₀ speedup)",
      color: "#5b5f6b",
      values: [5.46, 2.92, 0.48, 0.1, 0.06, 0.03, -0.01],
    },
    {
      id: "memory",
      label: "Memory",
      color: "#1f2430",
      values: [0, 0, 49.5, -987.0, 0, 14.3, -0.3],
    },
  ],
};
