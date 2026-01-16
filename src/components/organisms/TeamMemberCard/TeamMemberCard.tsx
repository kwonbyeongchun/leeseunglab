import { motion } from 'framer-motion';
import { Heading } from '@/components/atoms/Heading';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Span } from '@/components/atoms/Span';
import { ProfileImage } from '@/components/molecules/ProfileImage';
import { SocialIcon } from '@/components/molecules/SocialIcon';
import { Spacer } from '@/components/atoms/Spacer';
import { cn } from '@/utils/cn';
import { staggerItem, cardHover, imageHover } from '@/utils/animations';
import type { TeamMember } from '@/types';

export interface TeamMemberCardProps extends TeamMember {
  className?: string;
  index?: number;
  variant?: 'default' | 'compact' | 'featured';
}

export function TeamMemberCard({
  name,
  position,
  bio,
  image,
  scholarUrl,
  email,
  className,
  index = 0,
  variant = 'default',
}: TeamMemberCardProps) {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';

  return (
    <motion.article
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover="hover"
      className={cn(
        'group bg-white rounded-lg shadow-md overflow-hidden',
        'transition-shadow duration-[var(--transition-normal)]',
        'hover:shadow-xl',
        isFeatured && 'md:flex md:items-start',
        className
      )}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <motion.div
        className={cn(
          'overflow-hidden',
          isFeatured ? 'md:w-1/3 md:flex-shrink-0' : 'w-full'
        )}
      >
        <motion.div
          variants={imageHover}
          className="w-full"
        >
          <ProfileImage
            src={image}
            alt={name}
            size={isFeatured ? 'xl' : isCompact ? 'md' : 'lg'}
            shape="square"
            className="w-full aspect-square object-cover"
          />
        </motion.div>
      </motion.div>

      <div className={cn('p-6', isFeatured && 'md:flex-1')}>
        <Heading
          level={isFeatured ? 2 : 4}
          color="text"
          className="group-hover:text-[var(--color-primary)] transition-colors"
        >
          {name}
        </Heading>

        <Spacer size="xs" />

        <Span
          size="sm"
          color="primary"
          uppercase
          letterSpacing="wide"
          className="font-medium"
        >
          {position}
        </Span>

        {bio && !isCompact && (
          <>
            <Spacer size="md" />
            <Paragraph
              color="light"
              size="sm"
              className={cn(
                'leading-relaxed',
                !isFeatured && 'line-clamp-4'
              )}
            >
              {bio}
            </Paragraph>
          </>
        )}

        {(scholarUrl || email) && (
          <>
            <Spacer size="md" />
            <div className="flex items-center gap-3">
              {scholarUrl && (
                <SocialIcon
                  platform="google"
                  href={scholarUrl}
                  size="sm"
                  className="hover:text-[var(--color-primary)] transition-transform hover:scale-110"
                />
              )}
              {email && (
                <SocialIcon
                  platform="email"
                  href={`mailto:${email}`}
                  size="sm"
                  className="hover:text-[var(--color-primary)] transition-transform hover:scale-110"
                />
              )}
            </div>
          </>
        )}
      </div>
    </motion.article>
  );
}
