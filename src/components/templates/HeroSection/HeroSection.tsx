import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BackgroundImage } from '@/components/atoms/BackgroundImage';
import { Overlay } from '@/components/atoms/Overlay';
import { HeroContent } from '@/components/organisms/HeroContent';
import { ScrollIndicator } from '@/components/molecules/ScrollIndicator';
import { cn } from '@/utils/cn';

export interface HeroSectionProps {
  backgroundImage: string;
  subtitle: string;
  title: string;
  description: string;
  scrollTarget?: string;
  overlayOpacity?: number;
  minHeight?: 'screen' | 'three-quarter' | 'half' | 'auto';
  children?: ReactNode;
  className?: string;
}

export function HeroSection({
  backgroundImage,
  subtitle,
  title,
  description,
  scrollTarget,
  overlayOpacity = 0.5,
  minHeight = 'screen',
  children,
  className,
}: HeroSectionProps) {
  const minHeightClasses = {
    screen: 'min-h-screen',
    'three-quarter': 'min-h-[75vh]',
    half: 'min-h-[50vh]',
    auto: 'min-h-0',
  };

  return (
    <section
      className={cn(
        'relative flex items-center justify-start overflow-hidden',
        minHeightClasses[minHeight],
        className
      )}
    >
      <BackgroundImage
        src={backgroundImage}
        className="absolute inset-0 w-full h-full"
        size="cover"
      />

      <Overlay opacity={overlayOpacity} />

      <div
        className="relative z-10"
        style={{ marginLeft: 'calc(100vw / 6)' }}
      >
        {children || (
          <HeroContent
            subtitle={subtitle}
            title={title}
            description={description}
          />
        )}
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <ScrollIndicator href={scrollTarget} color="white" />
      </motion.div>
    </section>
  );
}
