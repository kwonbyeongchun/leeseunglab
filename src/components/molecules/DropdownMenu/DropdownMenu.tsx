import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { Link } from '@/components/atoms/Link';
import { Text } from '@/components/atoms/Text';
import { cn } from '@/utils/cn';
import { dropdownMenu } from '@/utils/animations';
import type { NavItem } from '@/types';

export interface DropdownMenuProps {
  label: string;
  items: NavItem[];
  className?: string;
}

export function DropdownMenu({
  label,
  items,
  className,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={cn('relative', className)}>
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1"
        style={{ padding: '20px 4px' }}
        disableAnimation
      >
        <Text size="sm" weight={500}>
          {label}
        </Text>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon name="ChevronDown" size="xs" />
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 mt-1 min-w-[180px] bg-white rounded-md shadow-lg py-2 z-50"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 hover:bg-gray-50 transition-colors duration-[var(--transition-fast)]"
                onClick={() => setIsOpen(false)}
              >
                <Text size="sm" color="text">
                  {item.label}
                </Text>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
