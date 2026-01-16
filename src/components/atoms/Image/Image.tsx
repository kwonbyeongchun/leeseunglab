import { cn } from '@/utils/cn';

export interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  lazy?: boolean;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const roundedClasses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

const objectFitClasses = {
  contain: 'object-contain',
  cover: 'object-cover',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
};

// public 폴더 이미지에 base URL 자동 추가
const getImageSrc = (src: string): string => {
  // 외부 URL이거나 data URL이면 그대로 반환
  if (src.startsWith('http') || src.startsWith('data:')) {
    return src;
  }
  // 절대 경로이고 base URL이 없으면 추가
  const baseUrl = import.meta.env.BASE_URL || '/';
  if (src.startsWith('/') && !src.startsWith(baseUrl)) {
    return `${baseUrl.replace(/\/$/, '')}${src}`;
  }
  return src;
};

export function Image({
  src,
  alt,
  width,
  height,
  lazy = true,
  className,
  objectFit = 'cover',
  rounded = 'none',
}: ImageProps) {
  const style: React.CSSProperties = {};
  if (height !== undefined) {
    style.height = typeof height === 'number' ? `${height}px` : height;
    style.maxHeight = style.height;
  }
  if (width !== undefined) {
    style.width = typeof width === 'number' ? `${width}px` : width;
    style.maxWidth = style.width;
  }

  const resolvedSrc = getImageSrc(src);

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? 'lazy' : 'eager'}
      style={style}
      className={cn(
        objectFitClasses[objectFit],
        roundedClasses[rounded],
        className
      )}
    />
  );
}
