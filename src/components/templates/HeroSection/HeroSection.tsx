import type { ReactNode } from 'react';
import { BackgroundImage } from '@/components/atoms/BackgroundImage';
import { Overlay } from '@/components/atoms/Overlay';
import { Container } from '@/components/atoms/Container';
import { HeroContent } from '@/components/organisms/HeroContent';
import { cn } from '@/utils/cn';

export interface HeroSectionProps {
  backgroundImage: string;
  subtitle: string;
  title: string;
  description: string;
  scrollTarget?: string;
  overlayOpacity?: number;
  minHeight?: 'screen' | 'half' | 'auto';
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
    half: 'min-h-[50vh]',
    auto: 'min-h-0',
  };

  return (
    <section
      className={cn(
        'relative flex items-center justify-center',
        minHeightClasses[minHeight],
        className
      )}
    >
      <BackgroundImage
        src={backgroundImage}
        className="absolute inset-0"
      />

      <Overlay opacity={overlayOpacity} />

      <Container
        maxWidth="xl"
        className="relative z-10 py-20"
      >
        {children || (
          <HeroContent
            subtitle={subtitle}
            title={title}
            description={description}
            scrollTarget={scrollTarget}
          />
        )}
      </Container>
    </section>
  );
}
