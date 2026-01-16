import { motion } from 'framer-motion';
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
      className={cn('flex flex-col items-center gap-0 text-center', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* 위 마커 */}
      <motion.div variants={itemVariants} className="flex items-center justify-center" style={{ marginBottom: '15px' }}>
        <img
          src={getImageSrc('/images/terrerlab/up_green.png')}
          alt=""
        />
      </motion.div>

      {/* 서브타이틀 + 메인 타이틀 */}
      <div className="flex flex-col items-center gap-0">
        {subtitle && (
          <motion.span variants={itemVariants} className="font-medium tracking-[0.2em] leading-none uppercase text-xs" style={{ color: '#677081' }}>
            {subtitle}
          </motion.span>
        )}

        <motion.h3 variants={itemVariants} className="m-0 leading-none text-2xl md:text-3xl" style={{ fontWeight: 700, color: '#00380A' }}>
          {title}
        </motion.h3>
      </div>

      {/* 아래 마커 */}
      <motion.div variants={itemVariants} className="flex items-center justify-center" style={{ marginTop: '15px' }}>
        <img
          src={getImageSrc('/images/terrerlab/down_green.png')}
          alt=""
        />
      </motion.div>
    </motion.div>
  );
}
