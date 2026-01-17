import { motion } from 'framer-motion';
import { MemberProfileImage } from '@/components/molecules/MemberProfileImage';
import { MemberInfo } from '@/components/molecules/MemberInfo';
import { cn } from '@/utils/cn';
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
}: TeamMemberCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn('w-full', className)}
    >
      {/* Content */}
      <div className="flex" style={{ paddingTop: 40, paddingBottom: 32, gap: 49 }}>
        {/* Left: Photo + Social Icons */}
        <MemberProfileImage
          image={image}
          name={name}
          scholarUrl={scholarUrl}
          email={email}
          size={222}
        />

        {/* Right: Content */}
        <MemberInfo name={name} position={position} bio={bio} />
      </div>

      {/* Bottom Line */}
      <div className="w-full h-[1px] bg-gray-200" />
    </motion.article>
  );
}
