import { Sparkles } from 'lucide-react';

export function AgentWhisper() {
  return (
    <div className="rounded-3xl border border-violet-200/10 bg-violet-300/10 p-4">
      <div className="mb-3 flex items-center gap-2 text-violet-100">
        <Sparkles className="h-4 w-4" />
        <p className="text-sm font-medium">Agent whisper</p>
      </div>
      <p className="text-sm leading-6 text-zinc-300">
        Your system keeps circling money and momentum. Attach Money Mirror after your first three Starter wins.
      </p>
    </div>
  );
}
