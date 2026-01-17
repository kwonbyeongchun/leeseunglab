import { cn } from '@/utils/cn';

export interface MemberInfoProps {
  name: string;
  position: string;
  bio?: string;
  className?: string;
}

export function MemberInfo({
  name,
  position,
  bio,
  className,
}: MemberInfoProps) {
  return (
    <div className={cn('flex-1', className)}>
      {/* Name */}
      <h3 className="text-[22px] font-bold text-black" style={{ marginBottom: 20 }}>{name}</h3>

      {/* Position */}
      <p className="text-[14px] text-[#00380A] uppercase tracking-wide font-semibold" style={{ marginBottom: 5 }}>
        {position}
      </p>

      {/* Bio */}
      {bio && (
        <p className="text-[15px] text-black leading-relaxed">
          {bio}
        </p>
      )}
    </div>
  );
}
