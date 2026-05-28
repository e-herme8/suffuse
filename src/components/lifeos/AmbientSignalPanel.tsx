import { AgentWhisper } from './AgentWhisper';
import { DailyPulseStrip } from './DailyPulseStrip';
import { MemoryCrumbTrail } from './MemoryCrumbTrail';
import { RitualQueue } from './RitualQueue';
import { SystemMoodOrb } from './SystemMoodOrb';

export function AmbientSignalPanel() {
  return (
    <aside className="hidden w-80 shrink-0 space-y-4 xl:block">
      <SystemMoodOrb />
      <DailyPulseStrip />
      <AgentWhisper />
      <RitualQueue />
      <MemoryCrumbTrail />
    </aside>
  );
}
