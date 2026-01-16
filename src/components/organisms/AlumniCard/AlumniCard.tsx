import { motion } from 'framer-motion';
import { Heading } from '@/components/atoms/Heading';
import { Span } from '@/components/atoms/Span';
import { ProfileImage } from '@/components/molecules/ProfileImage';
import { Spacer } from '@/components/atoms/Spacer';
import { cn } from '@/utils/cn';
import type { TeamMember } from '@/types';

export interface AlumniCardProps extends TeamMember {
  className?: string;
  index?: number;
}

export function AlumniCard({
  name,
  position,
  image,
  className,
  index = 0,
}: AlumniCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        'group text-center',
        'transition-all duration-[var(--transition-normal)]',
        className
      )}
    >
      <div className="relative inline-block">
        <ProfileImage
          src={image}
          alt={name}
          size="md"
          shape="circle"
          className={cn(
            'mx-auto',
            'transition-all duration-[var(--transition-normal)]',
            'group-hover:shadow-lg group-hover:scale-105'
          )}
        />
      </div>

      <Spacer size="sm" />

      <Heading
        level={5}
        color="text"
        className="group-hover:text-[var(--color-primary)] transition-colors"
      >
        {name}
      </Heading>

      <Spacer size="xs" />

      <Span size="xs" color="muted">
        {position}
      </Span>
    </motion.article>
  );
}
