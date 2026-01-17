import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import type { ClimateSnackSession } from '@/data/climateSnacks';

export interface ClimateSnacksCardProps extends ClimateSnackSession {
  className?: string;
  index?: number;
}

export function ClimateSnacksCard({
  speaker,
  affiliation,
  topic,
  description,
  videoUrl,
  className,
  index = 0,
}: ClimateSnacksCardProps) {
  // Extract YouTube video ID from URL
  const getYouTubeVideoId = () => {
    if (videoUrl) {
      const match = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?]+)/);
      if (match) return match[1];
    }
    return 'dQw4w9WgXcQ'; // placeholder
  };

  const videoId = getYouTubeVideoId();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn('flex overflow-hidden mx-auto bg-white', className)}
      style={{ width: 1000, height: 259, gap: 20 }}
    >
      {/* YouTube Embed - Left */}
      <div style={{ width: 486, flexShrink: 0, height: '100%' }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={topic}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Content - Right */}
      <div style={{ flex: 1 }}>
        {/* Title (Speaker + Affiliation) */}
        <h3 className="text-[24px] font-semibold text-black">
          {speaker}
          {affiliation && (
            <span className="text-[#666] font-normal text-[18px] ml-2">
              ({affiliation})
            </span>
          )}
        </h3>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200" style={{ marginTop: 10, marginBottom: 10 }} />

        {/* Description */}
        <p className="text-[18px] text-black leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
