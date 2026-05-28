import { dailyMetrics } from '../../data/lifeCards';

export function DailyPulseStrip() {
  return (
    <div className="space-y-3 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
      <div>
        <p className="text-sm font-medium text-white">Daily Pulse</p>
        <p className="text-xs text-zinc-500">Today’s operating readings</p>
      </div>
      <div className="space-y-3">
        {dailyMetrics.map((metric) => (
          <div key={metric.label}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-zinc-400">{metric.label}</span>
              <span className="text-zinc-500">{metric.value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/5">
              <div className="h-full rounded-full bg-gradient-to-r from-violet-300 to-cyan-300" style={{ width: `${metric.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
