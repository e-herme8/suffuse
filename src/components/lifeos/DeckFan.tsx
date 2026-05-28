import type { LifeCard as LifeCardType } from '../../types/lifeos';
import { LifeCard } from './LifeCard';

type DeckFanProps = {
  cards: LifeCardType[];
  activeCardId: string;
  onSelect: (card: LifeCardType) => void;
};

export function DeckFan({ cards, activeCardId, onSelect }: DeckFanProps) {
  return (
    <div className="flex min-h-[340px] flex-wrap items-center justify-center gap-4 xl:flex-nowrap xl:gap-0">
      {cards.map((card, index) => (
        <div key={card.id} className="transition xl:-ml-10 first:xl:ml-0" style={{ zIndex: card.id === activeCardId ? 20 : index + 1 }}>
          <LifeCard card={card} index={index} active={card.id === activeCardId} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}
