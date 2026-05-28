import { Search, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function LifeHeader() {
  return (
    <header className="flex items-center justify-between gap-4 py-4">
      <div>
        <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
          <Sparkles className="h-4 w-4 text-violet-200" />
          Suffuse LifeOS
        </div>
        <p className="mt-1 text-xs text-zinc-600">Prototype skeleton • Future Deck active</p>
      </div>
      <div className="hidden min-w-[320px] items-center gap-2 md:flex">
        <Search className="h-4 w-4 text-zinc-600" />
        <Input placeholder="Search your cards, rituals, and signals..." />
      </div>
      <Button variant="soft">Build my Future Deck</Button>
    </header>
  );
}
