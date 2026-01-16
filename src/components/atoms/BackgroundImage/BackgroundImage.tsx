import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export interface BackgroundImageProps {
  src: string;
  children?: ReactNode;
  className?: string;
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  size?: 'cover' | 'contain' | 'auto';
  attachment?: 'scroll' | 'fixed' | 'local';
}

const positionClasses = {
  center: 'bg-center',
  top: 'bg-top',
  bottom: 'bg-bottom',
  left: 'bg-left',
  right: 'bg-right',
};

const sizeClasses = {
  cover: 'bg-cover',
  contain: 'bg-contain',
  auto: 'bg-auto',
};

const attachmentClasses = {
  scroll: 'bg-scroll',
  fixed: 'bg-fixed',
  local: 'bg-local',
};

export function BackgroundImage({
  src,
  children,
  className,
  position = 'center',
  size = 'cover',
  attachment = 'scroll',
}: BackgroundImageProps) {
  return (
    <div
      className={cn(
        'relative bg-no-repeat',
        positionClasses[position],
        sizeClasses[size],
        attachmentClasses[attachment],
        className
      )}
      style={{ backgroundImage: `url(${src})` }}
    >
      {children}
    </div>
  );
}
