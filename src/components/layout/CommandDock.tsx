import { WandSparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function CommandDock() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-30 mx-auto max-w-3xl rounded-full border border-white/10 bg-zinc-950/80 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-300/15 text-violet-100">
          <WandSparkles className="h-4 w-4" />
        </div>
        <Input className="border-0 bg-transparent focus:bg-transparent focus:ring-0" placeholder="Tell LifeOS what is messy. Example: 'I need my week to stop leaking.'" />
        <Button variant="glow">Create card</Button>
      </div>
    </div>
  );
}
