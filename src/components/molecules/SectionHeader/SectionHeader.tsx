import { Heading } from '@/components/atoms/Heading';
import { cn } from '@/utils/cn';
import type { CSSProperties } from 'react';

export interface SectionHeaderProps {
  title: string;
  className?: string;
  style?: CSSProperties;
  lineClassName?: string;
}

export function SectionHeader({
  title,
  className,
  style,
  lineClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn('w-full', className)} style={style}>
      <Heading
        level={5}
        className="text-black"
        style={{ fontSize: 34, fontWeight: 600, marginBottom: 20 }}
      >
        {title}
      </Heading>
      <div className={cn('w-full h-[1px] bg-gray-200', lineClassName)} />
    </div>
  );
}
