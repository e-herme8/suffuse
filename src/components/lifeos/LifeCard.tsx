import { Lock, Sparkles } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { cn } from '../../lib/cn';
import type { LifeCard as LifeCardType } from '../../types/lifeos';

type LifeCardProps = {
  card: LifeCardType;
  index?: number;
  active?: boolean;
  onSelect?: (card: LifeCardType) => void;
};

export function LifeCard({ card, index = 0, active = false, onSelect }: LifeCardProps) {
  const locked = card.status === 'locked';
  return (
    <button
      type="button"
      onClick={() => onSelect?.(card)}
      className={cn(
        'group relative min-h-[280px] w-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 p-5 text-left shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20',
        active && 'scale-105 border-violet-200/40 shadow-glow',
      )}
      style={{ transform: active ? undefined : `rotate(${(index - 2) * 3}deg)` }}
    >
      <div className={cn('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', card.accent)} />
      <div className={cn('absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br opacity-25 blur-2xl', card.accent)} />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between gap-3">
          <Badge tone={card.tier === 'core' ? 'core' : 'pro'}>{card.tier}</Badge>
          {locked ? <Lock className="h-4 w-4 text-zinc-500" /> : <Sparkles className="h-4 w-4 text-violet-200" />}
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-white">{card.name}</h3>
        <p className="mt-2 text-sm font-medium text-zinc-300">{card.hook}</p>
        <p className="mt-4 line-clamp-4 text-sm leading-6 text-zinc-500">{card.description}</p>
        <div className="mt-auto space-y-3 pt-8">
          <Badge tone={card.category}>{card.category}</Badge>
          <p className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-xs leading-5 text-zinc-400">{card.signal}</p>
          <Button variant={locked ? 'soft' : 'glow'} size="sm" className="w-full">
            {locked ? 'Preview Power Card' : 'Open Card'}
          </Button>
        </div>
      </div>
    </button>
  );
}
