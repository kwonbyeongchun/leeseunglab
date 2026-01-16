import { motion } from 'framer-motion';
import { Heading } from '@/components/atoms/Heading';
import { Image } from '@/components/atoms/Image';
import { Link } from '@/components/atoms/Link';
import { cn } from '@/utils/cn';
import { staggerItem, imageHover } from '@/utils/animations';
import type { BigQuestion } from '@/types';

export interface BigQuestionCardProps extends BigQuestion {
  className?: string;
  index?: number;
}

export function BigQuestionCard({
  id,
  question,
  image,
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
      <Link href={`/big-questions/${id}`} className="block" disableAnimation>
        {image && (
          <motion.div className="overflow-hidden bg-[var(--color-primary)] bg-opacity-10">
            <motion.div variants={imageHover}>
              <Image
                src={image}
                alt={question}
                className="w-full h-32 object-contain p-4"
              />
            </motion.div>
          </motion.div>
        )}
        <div className="p-4">
          <Heading
            level={4}
            color="text"
            className="group-hover:text-[var(--color-primary)] transition-colors line-clamp-3 text-base"
          >
            {question}
          </Heading>

          <div className="mt-3 flex justify-end">
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
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
