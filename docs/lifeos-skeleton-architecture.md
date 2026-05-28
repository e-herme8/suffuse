# LifeOS Prototype Skeleton Architecture

> Stacy / solution architecture note for the Suffuse prototype.

## Goal

Create a React + TypeScript + Tailwind + shadCN-style front-end prototype that makes the LifeOS concept tangible for 18-35 year olds: a personal AI operating system with a Starter Deck of daily self-reflection/action cards and a locked Premium Deck for upsell storytelling.

## Product Frame

LifeOS should feel like a lightweight personal dashboard, not an enterprise app. The first prototype should prove:

1. A user understands the deck metaphor immediately.
2. Starter cards feel actionable in under 60 seconds.
3. Premium cards are visible enough to create desire without requiring backend/payments.
4. The UI can later accept real AI responses, journaling history, auth, and subscriptions without a rewrite.

## Recommended App Stack

- Build tool: Vite
- UI: React 18/19 + TypeScript
- Styling: Tailwind CSS
- Component style: shadCN-inspired primitives under `src/components/ui`
- Routing: `react-router-dom`
- Icons: `lucide-react`
- State for MVP: local component state + static data modules; avoid global state until needed
- Tests later: Vitest + React Testing Library once behavior stabilizes

## Route Map

Keep routes shallow for the prototype.

```txt
/                         Landing / product promise
/app                      LifeOS dashboard with Starter Deck + Premium Deck
/app/card/:cardId         Card detail/workflow screen
/app/compass              Optional dedicated 90-Day Compass view after card MVP
/app/wins                 Optional Win Jar archive after card MVP
/settings                 Lightweight preferences/profile mock
*                         Not found / redirect to /
```

### Screen Responsibilities

#### `/` Landing

Purpose: Explain the product in one scroll and drive into the demo.

Sections:
- Hero: "Your personal operating system for becoming the next version of you."
- Starter Deck preview: six cards
- Premium Deck teaser: locked cards
- CTA: "Open my LifeOS"

#### `/app` Dashboard

Purpose: The core prototype screen.

Regions:
- Header with greeting, streak, and mock profile chip
- Daily Pulse summary panel
- Starter Deck grid
- Premium Deck grid / carousel with locked state
- "Today's Next Move" sticky/action panel on mobile

#### `/app/card/:cardId` Card Detail

Purpose: Reusable card workflow host.

Layout:
- Card hero: title, promise, estimated time
- Prompt/input area or mock generated result
- Primary action: save, generate, complete, or reset
- Secondary actions: back to deck, add to Win Jar, share/copy

Use one generic `CardDetailPage` that renders content from card config first. Split into custom card flows only when a card needs unique interactions.

#### `/settings`

Purpose: Make the prototype feel like a product without building account/auth.

Fields:
- Name
- Current focus: clarity, money, career, healing, confidence, discipline
- Tone preference: hype friend, calm coach, ruthless operator
- Reminder mock toggle

## Card Inventory

### Starter Deck

1. Daily Pulse
   - Daily check-in: mood, energy, focus, friction.
   - First MVP interaction: sliders/buttons + generated summary placeholder.

2. 90-Day Compass
   - Clarify direction for the next 90 days.
   - First MVP interaction: choose focus area + enter outcome + show compass card.

3. Ask Future Me
   - Conversation with a wiser future self.
   - First MVP interaction: ask question + mock response from future self.

4. Next Move
   - Convert overwhelm into one immediate action.
   - First MVP interaction: enter situation + choose suggested next move.

5. Win Jar
   - Capture wins and evidence of progress.
   - First MVP interaction: add win locally; show empty/non-empty state.

6. Reset Button
   - Emotional/mental reset flow.
   - First MVP interaction: 3-step breathing/reframe checklist.

### Premium Deck

Visible but locked in MVP:

- Money Mirror
- Career Oracle
- Breakup Exorcist
- Villain Arc
- Decision Knife
- Ritual Builder
- Aura Report

Premium cards should have strong copy, a lock badge, and a disabled/teaser CTA: "Unlock in Premium". Do not implement paywall logic yet.

## Suggested File Organization

```txt
src/
  app/
    App.tsx                    # Router shell
    routes.tsx                 # Route definitions
  pages/
    LandingPage.tsx
    DashboardPage.tsx
    CardDetailPage.tsx
    SettingsPage.tsx
    NotFoundPage.tsx
  components/
    layout/
      AppHeader.tsx
      AppShell.tsx
      PageContainer.tsx
    deck/
      DeckGrid.tsx
      LifeCard.tsx
      PremiumTeaser.tsx
      StarterDeckSection.tsx
      PremiumDeckSection.tsx
    cards/
      CardHero.tsx
      CardActionPanel.tsx
      CardPromptForm.tsx
      MockAiResponse.tsx
    dashboard/
      DailyPulsePanel.tsx
      NextMovePanel.tsx
      StreakBadge.tsx
    ui/
      button.tsx
      card.tsx
      badge.tsx
      input.tsx
      textarea.tsx
      tabs.tsx
  data/
    lifeCards.ts               # Static card metadata/config
    mockProfile.ts             # Prototype user/profile data
  types/
    lifeos.ts                  # Shared domain types
  lib/
    cn.ts                      # className merge helper
    routes.ts                  # route helpers/constants
  styles/
    globals.css
  main.tsx
```

Rule of thumb: keep `pages/` thin, put reusable UI in `components/`, and keep card content/config in `data/` so copy and card definitions can evolve without editing routing code.

## Core Domain Types

Create these first in `src/types/lifeos.ts`:

```ts
export type CardTier = 'starter' | 'premium';
export type CardStatus = 'available' | 'locked' | 'coming-soon';
export type CardCategory =
  | 'clarity'
  | 'action'
  | 'reflection'
  | 'healing'
  | 'money'
  | 'career'
  | 'identity'
  | 'ritual';

export interface LifeCardConfig {
  id: string;
  title: string;
  shortTitle?: string;
  tagline: string;
  description: string;
  tier: CardTier;
  status: CardStatus;
  category: CardCategory;
  estimatedMinutes: number;
  accent: string; // Tailwind gradient/accent token for prototype speed
  primaryActionLabel: string;
  teaser?: string;
  prompts?: CardPrompt[];
}

export interface CardPrompt {
  id: string;
  label: string;
  placeholder?: string;
  type: 'text' | 'textarea' | 'choice' | 'scale';
  options?: string[];
}

export interface LifeOSProfile {
  id: string;
  name: string;
  focus: 'clarity' | 'money' | 'career' | 'healing' | 'confidence' | 'discipline';
  tone: 'hype-friend' | 'calm-coach' | 'ruthless-operator';
  streakDays: number;
}

export interface WinEntry {
  id: string;
  text: string;
  createdAt: string;
  sourceCardId?: string;
}
```

Avoid backend-shaped abstractions for now. IDs can be stable strings like `daily-pulse`, `future-me`, `money-mirror`.

## Component Boundaries

### `LifeCard`

Displays one card in grid/list form.

Props:
- `card: LifeCardConfig`
- `onOpen?: (cardId: string) => void`

Behavior:
- Available cards navigate to detail.
- Locked cards show teaser/disabled CTA.
- No card-specific business logic inside this component.

### `DeckGrid`

Pure layout wrapper for cards.

Props:
- `title`
- `description`
- `cards`
- `variant: 'starter' | 'premium'`

### `CardDetailPage`

Route-level orchestrator.

Responsibilities:
- read `cardId`
- find matching `LifeCardConfig`
- branch on locked/not found
- render generic card flow

Do not create seven separate pages for seven cards in the MVP. Start generic, extract custom flows later.

### `CardPromptForm`

Generic prompt renderer from `card.prompts`.

For first prototype, form submission can produce a deterministic mock response based on card ID. Later this boundary becomes the AI API integration point.

### `MockAiResponse`

Displays static/generated placeholder output. Keep this visually polished so the prototype sells the idea before real AI exists.

## MVP Implementation Sequence and Commit Boundaries

Each boundary should be small enough to review and commit independently.

### Commit 1: Project scaffold

Goal: Make the repo runnable.

Files:
- `package.json`
- `index.html`
- `vite.config.ts`
- `tsconfig*.json`
- `tailwind.config.ts`
- `postcss.config.js`
- `src/main.tsx`
- `src/styles/globals.css`

Commit message:
- `chore: scaffold react prototype`

Verification:
- `npm install`
- `npm run dev`
- `npm run build`

### Commit 2: App shell and routing

Goal: Establish navigation before features.

Files:
- `src/app/App.tsx`
- `src/app/routes.tsx`
- `src/lib/routes.ts`
- `src/pages/*.tsx`
- `src/components/layout/*.tsx`

Commit message:
- `feat: add lifeos app shell and routes`

Verification:
- Landing, app, settings, and not-found routes render.

### Commit 3: Domain types and card data

Goal: Centralize LifeOS card model and inventory.

Files:
- `src/types/lifeos.ts`
- `src/data/lifeCards.ts`
- `src/data/mockProfile.ts`

Commit message:
- `feat: define lifeos card model`

Verification:
- TypeScript build passes.
- All Starter and Premium cards exist in data.

### Commit 4: Deck dashboard

Goal: Show the main Starter Deck and Premium Deck teaser.

Files:
- `src/pages/DashboardPage.tsx`
- `src/components/deck/*.tsx`
- `src/components/dashboard/*.tsx`
- `src/components/ui/*` as needed

Commit message:
- `feat: build lifeos deck dashboard`

Verification:
- `/app` shows six Starter cards and seven locked Premium cards.
- Available cards are clickable.
- Locked cards are visibly disabled/teased.

### Commit 5: Generic card detail flow

Goal: One reusable detail screen works for available cards.

Files:
- `src/pages/CardDetailPage.tsx`
- `src/components/cards/*.tsx`

Commit message:
- `feat: add generic card workflow screen`

Verification:
- `/app/card/daily-pulse`, `/app/card/next-move`, etc. render from config.
- Unknown card shows not-found/empty state.
- Premium card shows locked teaser.

### Commit 6: First real-ish interactions

Goal: Make prototype feel alive without backend.

Start with only these interactions:
- Daily Pulse: mood/energy/focus check-in mock summary
- Next Move: situation textarea -> one suggested action
- Win Jar: add local win in component state or localStorage
- Reset Button: checklist flow

Commit message:
- `feat: add starter card prototype interactions`

Verification:
- A user can complete at least three Starter card flows in browser.

### Commit 7: Polish pass

Goal: Make it demoable.

Scope:
- Mobile responsive card grid
- Empty states
- Hover/focus states
- Starter vs Premium visual distinction
- Copy pass for Sarah's tone

Commit message:
- `style: polish lifeos prototype experience`

Verification:
- Manual pass on desktop and mobile viewport.
- `npm run build` succeeds.

## First Feature Boundary Recommendation

Implement the dashboard before unique card logic. The first meaningful feature should be:

"As a visitor, I can open `/app` and see the complete LifeOS Starter Deck and Premium Deck teaser, with available cards clearly separated from locked premium cards."

This feature proves the core concept, locks the card data model, and creates a stable surface for adding one card interaction at a time.

Do not start with AI integration, auth, payments, persistence, or onboarding. Those should come after the deck/card interaction loop is compelling.

## Prototype Data Strategy

Use static config plus local UI state:

- Card metadata: `src/data/lifeCards.ts`
- Mock user: `src/data/mockProfile.ts`
- Per-card form state: component state
- Win Jar persistence: optional `localStorage` only after basic state works
- Mock AI outputs: deterministic functions in component or `src/data/mockResponses.ts`

Possible later extraction:
- `src/features/win-jar/`
- `src/features/daily-pulse/`
- `src/services/aiClient.ts`
- `src/services/lifeosApi.ts`

Do not create these until needed.

## Design Direction

Visual tone:
- Gen-Z/millennial personal growth app, not clinical wellness app.
- Dark or soft-gradient base with colorful card accents.
- Cards should feel collectible: glow, badges, deck language.
- Copy should be direct, emotionally resonant, and slightly playful.

Starter deck tone examples:
- Daily Pulse: "Check the dashboard before life starts throwing tabs at you."
- 90-Day Compass: "Pick a direction your future self can actually recognize."
- Ask Future Me: "Borrow wisdom from the version of you who made it through."
- Next Move: "No 47-step plan. Just the next right move."
- Win Jar: "Receipts that you are, in fact, becoming that person."
- Reset Button: "For when the system is overheating."

## Guardrails

- Keep pages route-focused and components reusable.
- Keep card content data-driven until custom behavior is justified.
- Avoid backend assumptions.
- Avoid implementing premium/payments; only represent locked premium cards.
- Commit each boundary after build verification.
- Prefer polished static/mock UX over incomplete real integrations.

## Open Questions for Product

These do not block the MVP skeleton:

1. Should LifeOS have a default dark mode, light mode, or both?
2. Is the core monetization a subscription, one-time deck unlock, or individual premium cards?
3. Should the AI persona feel like a coach, best friend, future self, or operating system?
4. Is journaling/history central to MVP, or only a later retention feature?
5. Does Sarah want the prototype optimized for mobile-first demos or desktop pitch walkthroughs?
