import { Link } from '@/components/atoms/Link';
import { cn } from '@/utils/cn';

export interface FooterContentProps {
  className?: string;
}

export function FooterContent({ className }: FooterContentProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'w-full bg-[#1a1a1a] text-white flex items-center justify-center',
        className
      )}
      style={{ height: 87 }}
    >
      <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ maxWidth: 1153, width: '100%' }}>
        <div className="text-white/80" style={{ fontSize: 16 }}>
          © Copyright {currentYear} | Terrer Lab |{' '}
          <Link
            href="https://accessibility.mit.edu/"
            variant="white"
            className="hover:text-white"
            style={{ textDecoration: 'underline' }}
          >
            MIT Accessibility
          </Link>
        </div>
        <div className="text-white/80" style={{ fontSize: 16 }}>
          Designed & Developed by{' '}
          <Link
            href="https://www.sitesgo.com/"
            variant="white"
            className="font-semibold hover:text-white"
            style={{ textDecoration: 'underline' }}
          >
            SitesGo
          </Link>
        </div>
      </div>
    </footer>
  );
}
