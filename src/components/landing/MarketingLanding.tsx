import { ArrowRight, Brain, CheckCircle2, Compass, Layers3, LockKeyhole, Sparkles, Zap } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { powerCards, starterCards } from '../../data/lifeCards';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

type MarketingLandingProps = {
  onEnter: () => void;
};

const features = [
  {
    icon: Compass,
    label: 'Daily direction',
    title: 'Wake up with the next right move already chosen.',
    body: 'Daily Pulse, Next Move, and Reset Button turn vague self-improvement into tiny executable actions.',
  },
  {
    icon: Brain,
    label: 'Future-self lens',
    title: 'Make decisions as the version of you that already escaped the loop.',
    body: 'Ask Future Me and the 90-Day Compass reframe your mood, money, relationships, and ambition into cleaner choices.',
  },
  {
    icon: Layers3,
    label: 'Power-card engine',
    title: 'Unlock specialized decks only when the bottleneck appears.',
    body: 'Career Oracle, Money Mirror, Breakup Exorcist, and Villain Arc become contextual upgrades, not generic feature bloat.',
  },
];

const proofPoints = [
  'Six free starter cards',
  'Suggested Power Cards',
  'Rituals, signals, and proofs',
  'Designed for scattered ambition',
];

const showcaseCards = [...starterCards.slice(0, 4), ...powerCards.filter((card) => card.status === 'suggested')];

export function MarketingLanding({ onEnter }: MarketingLandingProps) {
  const reduceMotion = useReducedMotion();
  const floatTransition = reduceMotion
    ? undefined
    : {
        duration: 5,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        ease: 'easeInOut' as const,
      };

  return (
    <main className="life-noise min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate px-4 py-5 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#0099ff]/15 blur-[140px]" />
        <div className="absolute right-[-12rem] top-36 -z-10 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[120px]" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[rgba(255,255,255,0.10)_0px_0.5px_0px_0.5px,rgba(0,0,0,0.25)_0px_10px_30px] backdrop-blur-xl">
          <button type="button" onClick={onEnter} className="flex items-center gap-2 text-sm font-medium tracking-[-0.02em] text-white">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-black">
              <Sparkles className="h-4 w-4" />
            </span>
            Suffuse LifeOS
          </button>
          <div className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
            <a className="transition hover:text-white" href="#cards">Cards</a>
            <a className="transition hover:text-white" href="#proof">Proof</a>
            <a className="transition hover:text-white" href="#pricing">Free start</a>
          </div>
          <Button onClick={onEnter} className="bg-white text-black hover:bg-zinc-200">
            Open the deck
          </Button>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-20 pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:pb-28 lg:pt-28">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Badge tone="core">Juliet landing system active</Badge>
            <h1 className="mt-6 max-w-4xl text-6xl font-semibold leading-[0.86] tracking-[-0.075em] text-white sm:text-7xl lg:text-[6.85rem]">
              Stop drifting. Build your next era.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Suffuse turns the messy middle of ambition into a living deck of daily moves, identity rituals, future-self prompts, and paid power cards that appear exactly when life starts bottlenecking.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={onEnter} className="h-12 px-6 text-base">
                Build my Future Deck <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#cards" className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 text-base font-medium text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#0099ff]/60">
                See core cards
              </a>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-zinc-400 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0099ff]" />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#0099ff]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#0099ff]/25 bg-[#050505] p-4 shadow-[0_0_0_1px_rgba(0,153,255,0.15),0_30px_100px_rgba(0,0,0,0.6)]">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Today’s LifeOS command</p>
                  <p className="mt-1 text-sm text-white">Choose one proof before the day chooses for you.</p>
                </div>
                <Zap className="h-5 w-5 text-[#0099ff]" />
              </div>
              <div id="cards" className="grid gap-3 sm:grid-cols-2">
                {showcaseCards.map((card, index) => (
                  <motion.button
                    type="button"
                    onClick={onEnter}
                    key={card.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.16 + index * 0.05 }}
                    whileHover={reduceMotion ? undefined : { y: -6, scale: 1.015 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/90 p-4 text-left transition hover:border-[#0099ff]/40 focus:outline-none focus:ring-2 focus:ring-[#0099ff]/60"
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.accent}`} />
                    <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${card.accent} opacity-20 blur-2xl transition group-hover:opacity-35`} />
                    <div className="relative z-10">
                      <div className="mb-6 flex items-center justify-between gap-2">
                        <Badge tone={card.tier === 'core' ? 'core' : 'pro'}>{card.tier}</Badge>
                        {card.tier === 'core' ? <Sparkles className="h-4 w-4 text-white" /> : <LockKeyhole className="h-4 w-4 text-zinc-500" />}
                      </div>
                      <h3 className="text-lg font-semibold tracking-[-0.04em] text-white">{card.name}</h3>
                      <p className="mt-2 text-sm font-medium text-zinc-300">{card.hook}</p>
                      <p className="mt-4 line-clamp-2 text-xs leading-5 text-zinc-500">{card.description}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.div
              animate={reduceMotion ? undefined : { y: [-8, 8], rotate: [-2, 2] }}
              transition={floatTransition}
              className="absolute -bottom-8 -left-4 hidden w-64 rounded-3xl border border-white/10 bg-white/[0.08] p-4 shadow-[rgba(255,255,255,0.10)_0px_0.5px_0px_0.5px,rgba(0,0,0,0.25)_0px_10px_30px] backdrop-blur-xl md:block"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Conversion trigger</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">When a user hits a bottleneck, the next deck sells itself by naming the pain.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="proof" className="border-y border-white/10 bg-white/[0.025] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-white/10 bg-black p-6 shadow-[0_0_0_1px_rgba(0,153,255,0.08)]"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#0099ff]">{feature.label}</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.05em] text-white">{feature.title}</h2>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{feature.body}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center rounded-[2rem] border border-[#0099ff]/25 bg-[#050505] p-8 text-center shadow-[0_0_0_1px_rgba(0,153,255,0.15)] sm:p-12">
          <Badge tone="pro">Start free • upgrade when useful</Badge>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-none tracking-[-0.065em] text-white sm:text-6xl">
            The product starts as clarity. The business scales through Power Cards.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
            Juliet’s landing layer sells the transformation first, previews the tactile deck, then sends users into the existing app experience without breaking the current LifeOS page.
          </p>
          <Button onClick={onEnter} className="mt-8 h-12 px-7 text-base">
            Enter Suffuse <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
