import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppShell } from './components/layout/AppShell';
import { MarketingLanding } from './components/landing/MarketingLanding';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {showLanding ? (
        <motion.div
          key="landing"
          exit={{ opacity: 0, scale: 0.985, filter: 'blur(8px)' }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <MarketingLanding onEnter={() => setShowLanding(false)} />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <AppShell />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
