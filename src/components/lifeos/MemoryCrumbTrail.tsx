const crumbs = ['future deck built', 'launch something', 'money gravity noticed', 'villain arc suggested'];

export function MemoryCrumbTrail() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-sm font-medium text-white">Memory crumbs</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {crumbs.map((crumb) => (
          <span key={crumb} className="rounded-full border border-white/10 bg-zinc-950/50 px-3 py-1 text-xs text-zinc-400">
            {crumb}
          </span>
        ))}
      </div>
    </div>
  );
}
