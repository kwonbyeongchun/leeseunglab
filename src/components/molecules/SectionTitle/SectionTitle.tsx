import { motion } from 'framer-motion';
import { Heading } from '@/components/atoms/Heading';
import { Span } from '@/components/atoms/Span';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/utils/cn';
import { fadeInUp, rotateIn } from '@/utils/animations';
import type { HeadingLevel, ColorVariant } from '@/types';

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  level?: HeadingLevel;
  color?: ColorVariant;
  showDecorations?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
  animate?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export function SectionTitle({
  title,
  subtitle,
  level = 1,
  color = 'text',
  showDecorations = true,
  align = 'center',
  className,
  animate = true,
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const content = (
    <>
      {showDecorations && (
        <motion.div
          variants={animate ? rotateIn : undefined}
          className="flex items-center gap-4"
        >
          <Icon name="Leaf" size="lg" color="secondary" className="rotate-45" />
        </motion.div>
      )}

      {subtitle && (
        <motion.div variants={animate ? fadeInUp : undefined}>
          <Span
            size="sm"
            color="secondary"
            uppercase
            letterSpacing="wider"
            className="font-medium"
          >
            {subtitle}
          </Span>
        </motion.div>
      )}

      <motion.div variants={animate ? fadeInUp : undefined}>
        <Heading level={level} color={color}>
          {title}
        </Heading>
      </motion.div>

      {showDecorations && (
        <motion.div
          variants={animate ? rotateIn : undefined}
          className="flex items-center gap-4"
        >
          <Icon name="Leaf" size="lg" color="secondary" className="-rotate-45" />
        </motion.div>
      )}
    </>
  );

  if (animate) {
    return (
      <motion.div
        className={cn('flex flex-col gap-2', alignClasses[align], className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className={cn('flex flex-col gap-2', alignClasses[align], className)}>
      {content}
    </div>
  );
}
