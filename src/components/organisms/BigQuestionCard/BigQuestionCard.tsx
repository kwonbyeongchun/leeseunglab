import { motion } from 'framer-motion';
import { Heading } from '@/components/atoms/Heading';
import { Icon } from '@/components/atoms/Icon';
import { Link } from '@/components/atoms/Link';
import { Spacer } from '@/components/atoms/Spacer';
import { cn } from '@/utils/cn';
import { staggerItem } from '@/utils/animations';
import type { BigQuestion } from '@/types';

export interface BigQuestionCardProps extends BigQuestion {
  className?: string;
  index?: number;
}

export function BigQuestionCard({
  id,
  question,
  icon,
  className,
  index = 0,
}: BigQuestionCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className={cn(
        'group bg-white rounded-lg shadow-md overflow-hidden',
        'transition-shadow duration-[var(--transition-normal)]',
        'hover:shadow-xl',
        'cursor-pointer',
        className
      )}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <Link href={`/big-questions/${id}`} className="block p-6" disableAnimation>
        <div className="flex items-start gap-4">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className={cn(
              'flex-shrink-0 w-12 h-12 rounded-full',
              'bg-[var(--color-primary)] bg-opacity-10',
              'flex items-center justify-center',
              'transition-colors duration-[var(--transition-normal)]',
              'group-hover:bg-opacity-20'
            )}
          >
            <Icon
              name={icon}
              size={24}
              className="text-[var(--color-primary)]"
            />
          </motion.div>

          <div className="flex-1 min-w-0">
            <Heading
              level={4}
              color="text"
              className="group-hover:text-[var(--color-primary)] transition-colors line-clamp-3"
            >
              {question}
            </Heading>
          </div>
        </div>

        <Spacer size="md" />

        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          <span className="text-[var(--color-primary)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            Read more
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </span>
        </motion.div>
      </Link>
    </motion.article>
  );
}
