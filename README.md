# Suffuse

Spread Over.

Suffuse is an early LifeOS web application prototype. The current app visualises a **Future Deck / Cards** experience: a cinematic dashboard where users can review life cards, daily signals, ritual queues, agent whispers, and contextual memory trails.

This repository currently contains a Vite + React + TypeScript + Tailwind CSS front-end prototype designed from Juliet's first UI/UX direction.

## Current Prototype

The first prototype focuses on the visual product direction rather than production data flows.

Included UI areas:

- **LifeOS shell**: header, left rail, command dock, and main dashboard canvas.
- **Future Deck canvas**: card-based dashboard for Starter Cards and Power Cards.
- **Life cards**: Daily Pulse, 90-Day Compass, Ask Future Me, Next Move, Win Jar, Reset Button, Money Mirror, Career Oracle, Breakup Exorcist, and Villain Arc.
- **Ambient product widgets**: System Mood Orb, Daily Pulse Strip, Agent Whisper, Ritual Queue, Memory Crumb Trail, Orbit Context Ring, and Ambient Signal Panel.
- **Local UI primitives**: Button, Card, Badge, and Input components styled in a shadCN-inspired direction.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- lucide-react
- clsx
- tailwind-merge

## Prerequisites

Install these before running the app locally:

- **Node.js**: version 18 or newer is recommended.
- **npm**: included with Node.js.
- **Git**: required if cloning from GitHub.

Check your local versions:

```bash
node --version
npm --version
git --version
```

## Visualise the App Locally

### 1. Clone the repository

```bash
git clone https://github.com/e-herme8/suffuse.git
cd suffuse
```

If you already have the repository locally, pull the latest code instead:

```bash
cd suffuse
git pull origin main
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will print a local URL, usually:

```text
http://localhost:5173/
```

Open that URL in your browser to visualise the app.

### 4. View from another device on the same network

If you want to open the prototype from another device on your LAN, run:

```bash
npm run dev -- --host 0.0.0.0
```

Then open the network URL printed by Vite, for example:

```text
http://YOUR_MACHINE_IP:5173/
```

### 5. Preview a production build

To build the app and preview the production output:

```bash
npm run build
npm run preview
```

Vite will print a preview URL, usually:

```text
http://localhost:4173/
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server for local visualisation.

```bash
npm run build
```

Runs the TypeScript build and creates a production bundle in `dist/`.

```bash
npm run preview
```

Serves the production build locally for review.

```bash
npm run lint
```

Runs ESLint across the project.

## Project Structure

```text
suffuse/
├── docs/
│   └── lifeos-skeleton-architecture.md
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── lifeos/
│   │   └── ui/
│   ├── data/
│   ├── lib/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Product Direction

The next recommended feature is **Starter Deck onboarding**.

Proposed flow:

1. User picks their current life era.
2. User picks three desired outcomes.
3. User chooses the AI tone they want.
4. Suffuse generates the user's Starter Deck.
5. User lands on the LifeOS dashboard.

That would turn the current static prototype into the first interactive product experience.

## Development Notes

- `node_modules/` and `dist/` are intentionally ignored by Git.
- The app currently uses mock data for visualisation.
- There are no required environment variables for the current prototype.
- Run `npm run build` and `npm run lint` before pushing changes.

## License

This project is private unless a license file is added and published later.
