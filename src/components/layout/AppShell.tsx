import { AmbientSignalPanel } from '../lifeos/AmbientSignalPanel';
import { LifeDeckCanvas } from '../lifeos/LifeDeckCanvas';
import { CommandDock } from './CommandDock';
import { LeftRail } from './LeftRail';
import { LifeHeader } from './LifeHeader';

export function AppShell() {
  return (
    <div className="life-noise min-h-screen bg-zinc-950 bg-life-radial px-4 pb-28 text-zinc-100 lg:px-6">
      <div className="mx-auto max-w-[1600px]">
        <LifeHeader />
        <div className="flex gap-5">
          <LeftRail />
          <LifeDeckCanvas />
          <AmbientSignalPanel />
        </div>
      </div>
      <CommandDock />
    </div>
  );
}
