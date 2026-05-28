import { Brain, CalendarDays, CircleDot, Layers3, Settings, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

const items = [
  { label: 'Today', icon: CircleDot },
  { label: 'Decks', icon: Layers3 },
  { label: 'Memory', icon: Brain },
  { label: 'Rituals', icon: CalendarDays },
  { label: 'Signals', icon: Sparkles },
  { label: 'Settings', icon: Settings },
];

export function LeftRail() {
  return (
    <nav className="hidden w-20 shrink-0 flex-col items-center gap-3 rounded-[2rem] border border-white/10 bg-zinc-950/55 p-3 shadow-card backdrop-blur-xl lg:flex">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-300 to-cyan-300 font-bold text-zinc-950">S</div>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <Button key={item.label} variant={index === 0 ? 'glow' : 'ghost'} size="icon" aria-label={item.label} title={item.label}>
            <Icon className="h-4 w-4" />
          </Button>
        );
      })}
    </nav>
  );
}
