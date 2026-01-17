import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { PublicationTitle } from '@/components/molecules/PublicationTitle';
import { PublicationMeta } from '@/components/molecules/PublicationMeta';
import { PublicationLinks } from '@/components/molecules/PublicationLinks';
import type { Publication } from '@/types';

export interface PublicationItemProps extends Publication {
  className?: string;
  index?: number;
}

export function PublicationItem({
  title,
  authors,
  journal,
  year,
  doi,
  abstractUrl,
  className,
  index = 0,
}: PublicationItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className={cn(className)}
      style={{ paddingTop: 20, paddingBottom: 20 }}
    >
      <PublicationTitle title={title} doi={doi} />
      <PublicationMeta authors={authors} journal={journal} year={year} />
      <PublicationLinks doi={doi} abstractUrl={abstractUrl} />
    </motion.article>
  );
}
