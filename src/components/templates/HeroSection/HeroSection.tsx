import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BackgroundImage } from '@/components/atoms/BackgroundImage';
import { Overlay } from '@/components/atoms/Overlay';
import { Container } from '@/components/atoms/Container';
import { HeroContent } from '@/components/organisms/HeroContent';
import { ScrollIndicator } from '@/components/molecules/ScrollIndicator';
import { Heading } from '@/components/atoms/Heading';
import { Span } from '@/components/atoms/Span';
import { Spacer } from '@/components/atoms/Spacer';
import { Link } from '@/components/atoms/Link';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/utils/cn';

export interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  description?: string;
  scrollTarget?: string;
  overlayOpacity?: number;
  minHeight?: 'screen' | 'three-quarter' | 'half' | 'auto';
  height?: number;
  variant?: 'landing' | 'subpage';
  backLink?: {
    href: string;
    label: string;
  };
  children?: ReactNode;
  className?: string;
}

export function HeroSection({
  backgroundImage,
  title,
  subtitle,
  description,
  scrollTarget,
  overlayOpacity = 0.5,
  minHeight = 'screen',
  height,
  variant = 'landing',
  backLink,
  children,
  className,
}: HeroSectionProps) {
  const minHeightClasses = {
    screen: 'min-h-screen',
    'three-quarter': 'min-h-[75vh]',
    half: 'min-h-[50vh]',
    auto: 'min-h-0',
  };

  // Subpage variant
  if (variant === 'subpage') {
    return (
      <section
        className={cn('relative overflow-hidden', className)}
        style={{
          height: height || 450,
          minHeight: height || 450,
        }}
      >
        <BackgroundImage
          src={backgroundImage}
          className="absolute inset-0 w-full h-full"
          size="cover"
        />

        <Overlay opacity={overlayOpacity} />

        <div className="relative z-10 h-full flex flex-col justify-center" style={{ marginLeft: 'calc(100vw / 6)' }}>
          {backLink && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Link
                href={backLink.href}
                variant="white"
                className="inline-flex items-center gap-2 opacity-80 hover:opacity-100"
              >
                <Icon name="ArrowLeft" size={16} />
                {backLink.label}
              </Link>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading level={1} color="white" className="text-[1.2rem] md:text-[2.1rem]">
              {title}
            </Heading>

            {subtitle && (
              <>
                <Spacer size="md" />
                <Span
                  size="xl"
                  color="white"
                  className="opacity-90"
                >
                  {subtitle}
                </Span>
              </>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  // Landing variant (default)
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
            subtitle={subtitle || ''}
            title={title}
            description={description || ''}
          />
        )}
      </div>

      {/* Floating scroll indicator */}
      {scrollTarget && (
        <motion.div
          className="absolute bottom-8 right-8 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <ScrollIndicator href={scrollTarget} color="white" />
        </motion.div>
      )}
    </section>
  );
}
