import { motion } from 'framer-motion';
import { Heading } from '@/components/atoms/Heading';
import { Span } from '@/components/atoms/Span';
import { cn } from '@/utils/cn';

// public 폴더 이미지에 base URL 자동 추가
const getImageSrc = (src: string): string => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  if (src.startsWith('/') && !src.startsWith(baseUrl)) {
    return `${baseUrl.replace(/\/$/, '')}${src}`;
  }
  return src;
};

export interface DecoratedSectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
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

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function DecoratedSectionHeader({
  title,
  subtitle,
  className,
}: DecoratedSectionHeaderProps) {
  return (
    <motion.div
      className={cn('flex flex-col items-center gap-2 text-center', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* 위 마커 */}
      <motion.div variants={itemVariants} className="flex items-center justify-center">
        <img
          src={getImageSrc('/images/terrerlab/up_green.png')}
          alt=""
          className="w-[60px] h-[60px]"
        />
      </motion.div>

      {/* 서브타이틀 */}
      {subtitle && (
        <motion.div variants={itemVariants}>
          <Span
            size="xs"
            color="muted"
            uppercase
            letterSpacing="widest"
            className="font-medium tracking-[0.2em]"
          >
            {subtitle}
          </Span>
        </motion.div>
      )}

      {/* 메인 타이틀 */}
      <motion.div variants={itemVariants}>
        <Heading level={3} style={{ fontWeight: 700, color: '#00380A' }}>
          {title}
        </Heading>
      </motion.div>

      {/* 아래 마커 */}
      <motion.div variants={itemVariants} className="flex items-center justify-center">
        <img
          src={getImageSrc('/images/terrerlab/down_green.png')}
          alt=""
          className="w-[60px] h-[60px]"
        />
      </motion.div>
    </motion.div>
  );
}
