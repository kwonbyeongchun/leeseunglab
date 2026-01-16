import { HeroSection } from '@/components/templates/HeroSection';
import { cn } from '@/utils/cn';

export interface LandingHeroProps {
  className?: string;
}

const HERO_CONFIG = {
  backgroundImage: '/images/terrerlab/hero-background.jpg',
  subtitle: 'TERRER LAB | Department of Civil and Environmental Engineering, MIT',
  title: 'Ecological Understanding for a Sustainable Future',
  description: 'We leverage field and satellite data to advance knowledge about the terrestrial carbon cycle.',
  scrollTarget: '#about',
  overlayOpacity: 0.5,
} as const;

export function LandingHero({ className }: LandingHeroProps) {
  return (
    <HeroSection
      backgroundImage={HERO_CONFIG.backgroundImage}
      subtitle={HERO_CONFIG.subtitle}
      title={HERO_CONFIG.title}
      description={HERO_CONFIG.description}
      scrollTarget={HERO_CONFIG.scrollTarget}
      overlayOpacity={HERO_CONFIG.overlayOpacity}
      className={cn(className)}
    />
  );
}
