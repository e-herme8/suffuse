import { Badge } from '../ui/Badge';

export function DeckSpine() {
  return (
    <aside className="relative hidden min-h-[420px] w-28 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 p-4 shadow-card backdrop-blur-xl lg:block">
      <div className="absolute inset-y-8 left-0 w-1 rounded-full bg-gradient-to-b from-violet-300 via-cyan-300 to-emerald-300" />
      <div className="flex h-full flex-col items-center justify-between text-center">
        <Badge tone="core">Starter</Badge>
        <div className="[writing-mode:vertical-rl] rotate-180">
          <p className="text-3xl font-semibold tracking-tight text-white">Future Deck</p>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500">6 core cards installed</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-300 to-cyan-300 shadow-[0_0_36px_rgba(34,211,238,0.35)]" />
      </div>
    </aside>
  );
}
