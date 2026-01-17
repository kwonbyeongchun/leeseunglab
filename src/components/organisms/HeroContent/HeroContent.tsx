import { motion } from 'framer-motion';
import { Heading } from '@/components/atoms/Heading';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Span } from '@/components/atoms/Span';
import { Spacer } from '@/components/atoms/Spacer';
import { ScrollIndicator } from '@/components/molecules/ScrollIndicator';
import { cn } from '@/utils/cn';
import { heroTitle, heroSubtitle, heroDescription, fadeIn } from '@/utils/animations';

export interface HeroContentProps {
  subtitle: string;
  title: string;
  description: string;
  scrollTarget?: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export function HeroContent({
  subtitle,
  title,
  description,
  scrollTarget = '#Down',
  className,
}: HeroContentProps) {
  return (
    <motion.div
      className={cn('flex flex-col items-center text-center', className)}
      variants={containerVariants}
      initial={false}
      animate="visible"
    >
      <motion.div variants={heroSubtitle}>
        <Span
          size="md"
          color="white"
          uppercase
          letterSpacing="wider"
          className="font-semibold"
        >
          {subtitle}
        </Span>
      </motion.div>

      <Spacer size="md" />

      <motion.div variants={heroTitle}>
        <Heading level={1} color="white" className="max-w-4xl text-3xl md:text-4xl text-white">
          {title}
        </Heading>
      </motion.div>

      <Spacer size="lg" />

      <motion.div variants={heroDescription}>
        <Paragraph color="white" size="lg" className="max-w-2xl opacity-90">
          {description}
        </Paragraph>
      </motion.div>

      <Spacer size="2xl" />

      <motion.div
        variants={fadeIn}
        transition={{ delay: 0.8 }}
      >
        <ScrollIndicator href={scrollTarget} color="white" />
      </motion.div>
    </motion.div>
  );
}
