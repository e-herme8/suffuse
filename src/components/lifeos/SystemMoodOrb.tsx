export function SystemMoodOrb() {
  return (
    <div className="relative flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
      <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-violet-300 via-cyan-200 to-emerald-300 shadow-[0_0_60px_rgba(34,211,238,0.35)]">
        <div className="absolute inset-2 rounded-full bg-zinc-950/30 backdrop-blur-sm" />
      </div>
      <div>
        <p className="text-sm font-medium text-white">System mood</p>
        <p className="text-xs leading-5 text-zinc-400">Calm, but three loops are asking for closure.</p>
      </div>
    </div>
  );
}
