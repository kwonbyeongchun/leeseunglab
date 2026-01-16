import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export interface ContainerProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'aside';
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
  none: '',
};

const paddingClasses = {
  none: '',
  sm: 'px-4',
  md: 'px-6',
  lg: 'px-8',
};

export function Container({
  children,
  maxWidth = 'xl',
  padding = 'md',
  className,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'w-full mx-auto',
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
}
