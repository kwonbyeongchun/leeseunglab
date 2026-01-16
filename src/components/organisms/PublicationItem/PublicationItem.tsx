import { motion } from 'framer-motion';
import { Heading } from '@/components/atoms/Heading';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Span } from '@/components/atoms/Span';
import { Link } from '@/components/atoms/Link';
import { Spacer } from '@/components/atoms/Spacer';
import { cn } from '@/utils/cn';
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
  pdfUrl,
  className,
  index = 0,
}: PublicationItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        'group py-4 border-b border-[var(--color-border)] last:border-b-0',
        'transition-all duration-[var(--transition-normal)]',
        className
      )}
    >
      <Heading
        level={4}
        color="text"
        className="group-hover:text-[var(--color-primary)] transition-colors"
      >
        {title}
      </Heading>

      <Spacer size="xs" />

      <Paragraph color="light" size="sm">
        {authors}
      </Paragraph>

      <Spacer size="xs" />

      <div className="flex flex-wrap items-center gap-2 text-sm">
        <Span color="primary" className="font-medium">
          {journal}
        </Span>
        <Span color="muted">({year})</Span>

        <div className="flex items-center gap-3 ml-auto">
          {doi && (
            <Link
              href={`https://doi.org/${doi}`}
              variant="muted"
              external
              className="text-sm hover:text-[var(--color-primary)]"
            >
              DOI
            </Link>
          )}
          {pdfUrl && (
            <Link
              href={pdfUrl}
              variant="primary"
              external
              className="text-sm"
            >
              PDF
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
