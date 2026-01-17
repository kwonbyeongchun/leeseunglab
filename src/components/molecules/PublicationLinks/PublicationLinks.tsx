import { cn } from '@/utils/cn';

export interface PublicationLinksProps {
  doi?: string;
  abstractUrl?: string;
  className?: string;
}

export function PublicationLinks({ doi, abstractUrl, className }: PublicationLinksProps) {
  if (!doi && !abstractUrl) return null;

  return (
    <div className={cn('flex items-center gap-4 mt-2', className)}>
      {doi && (
        <a
          href={`https://doi.org/${doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#222D48] hover:text-[var(--color-primary)]"
          style={{ fontSize: 16 }}
        >
          [Paper]
        </a>
      )}
      {abstractUrl && (
        <a
          href={abstractUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#222D48] hover:text-[var(--color-primary)]"
          style={{ fontSize: 16 }}
        >
          [Abstract]
        </a>
      )}
    </div>
  );
}
