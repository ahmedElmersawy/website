import { benchmarkMetrics } from "@/content/benchmarks";
import { Counter } from "./Counter";
import { LatencyChart } from "./LatencyChart";

export function BenchmarkDashboard() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benchmarkMetrics.map((metric) => (
          <div
            key={metric.id}
            className="rounded-2xl border border-navy-border bg-navy/50 p-5"
          >
            <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
              {metric.label}
            </p>
            <p className="mt-3 font-display text-3xl font-medium text-ink">
              <Counter to={metric.after} suffix={` ${metric.unit}`} />
            </p>
            <p className="mt-1 text-xs text-muted-dim">was {metric.before} {metric.unit}</p>
            <p className="mt-3 inline-block rounded-full bg-gold/10 px-2.5 py-1 font-mono text-[11px] text-gold">
              {metric.improvementLabel}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-navy-border bg-navy/50 p-6">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-wide text-muted">
          All 5 metrics across Hydra&rsquo;s 7-program benchmark
        </p>
        <LatencyChart />
      </div>

      <p className="mt-4 text-xs text-muted-dim">
        Figures are from Hydra&rsquo;s Table III: before/after inference-time measurements
        on 7 held-out Python programs, covering all 5 metrics Hydra optimizes for. Each
        line is normalized to that metric&rsquo;s own range, since latency/cycles/energy/memory
        are bounded percentage changes while throughput swings up to ~287,000x on one
        program (shown here as log₁₀ speedup), so line height isn&rsquo;t comparable
        across metrics, only shape is. Memory&rsquo;s sharp dip is a real reported
        regression (String Concatenation), not a charting error.
      </p>
    </div>
  );
}
