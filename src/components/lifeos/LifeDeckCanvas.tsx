import { useMemo, useState } from 'react';
import { powerCards, profile, starterCards } from '../../data/lifeCards';
import type { LifeCard as LifeCardType } from '../../types/lifeos';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { DeckFan } from './DeckFan';
import { DeckSpine } from './DeckSpine';
import { LifeCard } from './LifeCard';
import { OrbitContextRing } from './OrbitContextRing';

export function LifeDeckCanvas() {
  const [activeCard, setActiveCard] = useState<LifeCardType>(starterCards[0]);
  const suggested = useMemo(() => powerCards.filter((card) => card.status === 'suggested'), []);

  return (
    <main className="min-w-0 flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/45 p-5 shadow-card backdrop-blur-xl lg:p-7">
      <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
        <div>
          <Badge tone="core">Starter Deck installed</Badge>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            Build the operating system for your next era.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 md:text-base">
            {profile.era}. Tone: {profile.tone}. LifeOS starts free with six core cards, then suggests Power Cards when a bottleneck appears.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 lg:w-72">
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Today’s next move</p>
          <p className="mt-3 text-lg font-medium leading-7 text-white">{activeCard.sampleAction}</p>
          <Button variant="soft" size="sm" className="mt-4">Mark as first proof</Button>
        </div>
      </div>

      <section className="flex gap-6">
        <DeckSpine />
        <div className="min-w-0 flex-1">
          <DeckFan cards={starterCards} activeCardId={activeCard.id} onSelect={setActiveCard} />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_220px]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-medium text-white">Active signal: {activeCard.name}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{activeCard.signal}</p>
              <OrbitContextRing />
            </div>
            <div className="space-y-4">
              {suggested.map((card) => (
                <LifeCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
