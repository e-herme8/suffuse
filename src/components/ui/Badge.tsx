import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import type { CardCategory } from '../../types/lifeos';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: CardCategory | 'neutral' | 'core' | 'pro';
};

const tones: Record<NonNullable<BadgeProps['tone']>, string> = {
  neutral: 'border-white/10 bg-white/5 text-zinc-300',
  core: 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100',
  pro: 'border-violet-300/20 bg-violet-300/10 text-violet-100',
  clarity: 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100',
  money: 'border-emerald-300/20 bg-emerald-300/10 text-emerald-100',
  career: 'border-indigo-300/20 bg-indigo-300/10 text-indigo-100',
  love: 'border-rose-300/20 bg-rose-300/10 text-rose-100',
  discipline: 'border-amber-300/20 bg-amber-300/10 text-amber-100',
  identity: 'border-lime-300/20 bg-lime-300/10 text-lime-100',
  ritual: 'border-sky-300/20 bg-sky-300/10 text-sky-100',
  signal: 'border-fuchsia-300/20 bg-fuchsia-300/10 text-fuchsia-100',
};

export function Badge({ className, tone = 'neutral', ...props }: BadgeProps) {
  return <span className={cn('inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em]', tones[tone], className)} {...props} />;
}
