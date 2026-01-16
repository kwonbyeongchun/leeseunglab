import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/atoms/Container';
import { Heading } from '@/components/atoms/Heading';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Spacer } from '@/components/atoms/Spacer';
import { Link } from '@/components/atoms/Link';
import { Icon } from '@/components/atoms/Icon';
import { PageLayout } from '../PageLayout';

export interface DetailPageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  backLink?: {
    href: string;
    label: string;
  };
  className?: string;
}

export function DetailPageLayout({
  children,
  title,
  subtitle,
  backLink,
  className,
}: DetailPageLayoutProps) {
  return (
    <PageLayout>
      {/* Header Section */}
      <section className="bg-[var(--color-primary)] pt-16 pb-16">
        <Container maxWidth="xl">
          {backLink && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Link
                href={backLink.href}
                variant="white"
                className="inline-flex items-center gap-2 opacity-80 hover:opacity-100"
              >
                <Icon name="ArrowLeft" size={16} />
                {backLink.label}
              </Link>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading level={1} color="white">
              {title}
            </Heading>

            {subtitle && (
              <>
                <Spacer size="md" />
                <Paragraph color="white" size="lg" className="opacity-90 max-w-2xl">
                  {subtitle}
                </Paragraph>
              </>
            )}
          </motion.div>
        </Container>
      </section>

      {/* Content Section */}
      <div className={className}>
        {children}
      </div>
    </PageLayout>
  );
}
