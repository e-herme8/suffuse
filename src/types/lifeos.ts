export type CardTier = 'core' | 'plus' | 'pro' | 'pack';
export type CardCategory = 'clarity' | 'money' | 'career' | 'love' | 'discipline' | 'identity' | 'ritual' | 'signal';
export type CardStatus = 'installed' | 'locked' | 'suggested';
export type CardTone = 'calm' | 'savage' | 'soft' | 'strategic' | 'electric';

export type LifeCard = {
  id: string;
  name: string;
  hook: string;
  description: string;
  tier: CardTier;
  category: CardCategory;
  status: CardStatus;
  accent: string;
  signal: string;
  sampleAction: string;
};

export type DailyMetric = {
  label: string;
  value: number;
  tone: CardTone;
};

export type LifeProfile = {
  name: string;
  era: string;
  tone: string;
  outcomes: string[];
};
