const orbit = ['money', 'time', 'energy', 'people', 'goal', 'memory'];

export function OrbitContextRing() {
  return (
    <div className="relative mx-auto mt-8 hidden h-48 w-48 rounded-full border border-dashed border-white/10 md:block">
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] text-center text-xs leading-16 text-zinc-400" />
      {orbit.map((item, index) => {
        const angle = (index / orbit.length) * Math.PI * 2;
        const x = 82 + Math.cos(angle) * 78;
        const y = 82 + Math.sin(angle) * 78;
        return (
          <span
            key={item}
            className="absolute rounded-full border border-white/10 bg-zinc-950 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-400"
            style={{ left: x, top: y }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
