import { cn } from '@/utils/cn';
import type { Size } from '@/types';

export interface SpacerProps {
  size?: Size;
  axis?: 'horizontal' | 'vertical';
  className?: string;
}

const sizeClasses = {
  vertical: {
    xs: 'h-1',
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6',
    xl: 'h-8',
    '2xl': 'h-12',
    '3xl': 'h-16',
  },
  horizontal: {
    xs: 'w-1',
    sm: 'w-2',
    md: 'w-4',
    lg: 'w-6',
    xl: 'w-8',
    '2xl': 'w-12',
    '3xl': 'w-16',
  },
};

export function Spacer({
  size = 'md',
  axis = 'vertical',
  className,
}: SpacerProps) {
  return (
    <div
      className={cn(
        sizeClasses[axis][size],
        axis === 'vertical' ? 'w-full' : 'h-full',
        className
      )}
      aria-hidden="true"
    />
  );
}
