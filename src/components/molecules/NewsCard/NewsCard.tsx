import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import type { NewsItemData } from '@/types';

export interface NewsCardProps extends NewsItemData {
  className?: string;
  index?: number;
}

export function NewsCard({
  title,
  date,
  excerpt,
  image,
  className,
  index = 0,
}: NewsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn('flex border border-gray-200 rounded-lg overflow-hidden mx-auto', className)}
      style={{ width: 1000, minHeight: 366 }}
    >
      {/* Image - Left */}
      {image && (
        <div style={{ width: 500, flexShrink: 0, padding: 20, height: '100%' }}>
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 8,
              border: '1px solid #e5e5e5',
              imageRendering: 'auto',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
          />
        </div>
      )}

      {/* Content - Right */}
      <div style={{ flex: 1, paddingTop: 20, paddingRight: 20, paddingBottom: 20, paddingLeft: 20 }}>
        {/* Title */}
        <h3 className="text-[24px] font-semibold text-black">
          {title}
        </h3>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200" style={{ marginTop: 10, marginBottom: 10 }} />

        {/* Date */}
        <p className="text-[16px] text-[#00380A] mb-4">
          {date}
        </p>

        {/* Read more button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-[20px] text-[#00380A] font-medium hover:underline cursor-pointer"
          style={{ marginTop: 20, marginBottom: 20 }}
        >
          <span>Read more</span>
          <span>{isExpanded ? '−' : '+'}</span>
        </button>

        {/* Excerpt - shown when expanded */}
        {isExpanded && excerpt && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-[18px] text-[#444] leading-relaxed mt-4"
          >
            {excerpt}
          </motion.p>
        )}
      </div>
    </motion.article>
  );
}
