import { cn } from '@/utils/cn';

export interface BelongingStatementProps {
  className?: string;
}

export function BelongingStatement({ className }: BelongingStatementProps) {
  const statements = [
    'We strive to foster belonging and empowerment.',
    'We value the visible and invisible qualities that make you who you are.',
    'We listen and engage with our diverse communities.',
  ];

  return (
    <div className={cn(className)}>
      <div className="flex items-center">
        {/* Vertical Line */}
        <div style={{ width: 3, height: 102, backgroundColor: '#1E7A2E', marginRight: 20, flexShrink: 0 }} />

        {/* Statements */}
        <div className="space-y-4">
          {statements.map((statement, index) => (
            <p key={index} className="text-[18px] text-black font-semibold">
              {statement}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
