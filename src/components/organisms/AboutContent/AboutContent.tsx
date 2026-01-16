import { motion } from 'framer-motion';
import { Heading } from '@/components/atoms/Heading';
import { Paragraph } from '@/components/atoms/Paragraph';
import { ProfileImage } from '@/components/molecules/ProfileImage';
import { Spacer } from '@/components/atoms/Spacer';
import { cn } from '@/utils/cn';

export interface AboutContentProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
}

export function AboutContent({
  image,
  imageAlt,
  title,
  description,
  className,
}: AboutContentProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center md:justify-end"
      >
        <ProfileImage
          src={image}
          alt={imageAlt}
          size="xl"
          shape="rounded"
          className="w-full max-w-md aspect-square"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Heading level={1} color="text">
          {title}
        </Heading>

        <Spacer size="lg" />

        <Paragraph color="light" size="md" className="leading-relaxed">
          {description}
        </Paragraph>
      </motion.div>
    </div>
  );
}
