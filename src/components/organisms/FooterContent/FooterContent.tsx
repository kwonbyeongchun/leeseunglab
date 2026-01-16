import { motion } from 'framer-motion';
import { Container } from '@/components/atoms/Container';
import { Heading } from '@/components/atoms/Heading';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Link } from '@/components/atoms/Link';
import { Divider } from '@/components/atoms/Divider';
import { Spacer } from '@/components/atoms/Spacer';
import { CopyrightText } from '@/components/molecules/CopyrightText';
import { SocialIcon } from '@/components/molecules/SocialIcon';
import { cn } from '@/utils/cn';

export interface FooterContentProps {
  className?: string;
}

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Team', href: '/team' },
  { label: 'Publications', href: '/publications' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { platform: 'twitter' as const, href: 'https://twitter.com/terrerlab' },
  { platform: 'google' as const, href: 'https://scholar.google.com/citations?user=HKJBpMAAAAAJ' },
  { platform: 'github' as const, href: 'https://github.com/terrerlab' },
];

export function FooterContent({ className }: FooterContentProps) {
  return (
    <footer
      className={cn(
        'bg-[var(--color-text)] text-white py-12 md:py-16',
        className
      )}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {/* About */}
          <div>
            <Heading level={4} color="white" className="mb-4">
              Terrer Lab
            </Heading>
            <Paragraph color="white" size="sm" className="opacity-80 leading-relaxed">
              MIT Department of Civil and Environmental Engineering.
              Researching terrestrial carbon ecology and natural climate solutions.
            </Paragraph>
          </div>

          {/* Quick Links */}
          <div>
            <Heading level={4} color="white" className="mb-4">
              Quick Links
            </Heading>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  variant="white"
                  className="opacity-80 hover:opacity-100 transition-opacity text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <Heading level={4} color="white" className="mb-4">
              Contact
            </Heading>
            <div className="space-y-2 text-sm opacity-80">
              <Paragraph color="white" size="sm">
                MIT Building 48-216
              </Paragraph>
              <Paragraph color="white" size="sm">
                77 Massachusetts Ave
              </Paragraph>
              <Paragraph color="white" size="sm">
                Cambridge, MA 02139
              </Paragraph>
            </div>

            <Spacer size="md" />

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.platform}
                  platform={social.platform}
                  href={social.href}
                  size="md"
                  className="text-white opacity-80 hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <Spacer size="xl" />

        <Divider color="white" className="opacity-20" />

        <Spacer size="lg" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <CopyrightText
            owner="Terrer Lab, MIT"
            className="text-white opacity-60"
          />
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/privacy"
              variant="white"
              className="opacity-60 hover:opacity-100"
            >
              Privacy Policy
            </Link>
            <Link
              href="/accessibility"
              variant="white"
              className="opacity-60 hover:opacity-100"
            >
              Accessibility
            </Link>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
