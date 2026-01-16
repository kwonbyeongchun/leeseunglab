import { useState, useEffect } from 'react';
import { LogoImage } from '@/components/molecules/LogoImage';
import { NavLink } from '@/components/molecules/NavLink';
import { DropdownMenu } from '@/components/molecules/DropdownMenu';
import { MenuButton } from '@/components/molecules/MenuButton';
import { Container } from '@/components/atoms/Container';
import { Text } from '@/components/atoms/Text';
import { cn } from '@/utils/cn';
import { mainNavItems, peopleDropdownItems, newsDropdownItems } from '@/data/navigation';

export interface NavigationBarProps {
  className?: string;
}

export function NavigationBar({ className }: NavigationBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-[var(--transition-normal)]',
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4',
        className
      )}
    >
      <Container maxWidth="xl" className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <LogoImage
            src="/images/mit-logo.svg"
            alt="MIT Logo"
            href="/"
            height={40}
          />
          <Text
            size="lg"
            weight={600}
            color={isScrolled ? 'text' : 'white'}
            className="hidden sm:block"
          >
            Terrer Lab
          </Text>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNavItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              className={cn(
                isScrolled ? 'text-[var(--color-text)]' : 'text-white'
              )}
            />
          ))}

          <DropdownMenu
            label="People"
            items={peopleDropdownItems}
          />

          <DropdownMenu
            label="News"
            items={newsDropdownItems}
          />
        </nav>

        {/* Mobile Menu Button */}
        <MenuButton
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </Container>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white shadow-lg',
          'transition-all duration-[var(--transition-normal)]',
          'origin-top',
          isMobileMenuOpen
            ? 'opacity-100 scale-y-100 visible'
            : 'opacity-0 scale-y-0 invisible'
        )}
      >
        <Container padding="md" className="py-4 flex flex-col gap-2">
          {mainNavItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              className="py-2"
            />
          ))}
          <div className="border-t border-[var(--color-border)] pt-2 mt-2">
            <Text size="sm" color="muted" className="mb-2">People</Text>
            {peopleDropdownItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                className="py-1 pl-4"
              />
            ))}
          </div>
          <div className="border-t border-[var(--color-border)] pt-2 mt-2">
            <Text size="sm" color="muted" className="mb-2">News</Text>
            {newsDropdownItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                className="py-1 pl-4"
              />
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
