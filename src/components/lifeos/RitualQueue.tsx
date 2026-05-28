const rituals = ['12-minute reset', 'Inbox sweep', 'Ship one proof', 'Log one win'];

export function RitualQueue() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-sm font-medium text-white">Ritual queue</p>
      <div className="mt-3 space-y-2">
        {rituals.map((ritual, index) => (
          <div key={ritual} className="flex items-center gap-3 rounded-2xl bg-white/[0.03] px-3 py-2 text-sm text-zinc-300">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px] text-zinc-400">{index + 1}</span>
            {ritual}
          </div>
        ))}
      </div>
    </div>
  );
}
