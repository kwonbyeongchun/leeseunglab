import { motion } from 'framer-motion';
import { Image } from '@/components/atoms/Image';
import { Link } from '@/components/atoms/Link';
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
  image,
  className,
  index = 0,
}: BigQuestionCardProps) {
  // 각 카드마다 다른 progress 값 (원본 사이트처럼 랜덤하게 보이도록)
  const progressValues = [75, 60, 45, 80, 55, 70, 65, 50];
  const progress = progressValues[index % progressValues.length];

  return (
    <motion.article
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className={cn(
        'group bg-white rounded-lg overflow-hidden',
        'border border-gray-100',
        'transition-shadow duration-300',
        'hover:shadow-lg',
        'cursor-pointer',
        'flex flex-col',
        className
      )}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <Link href={`/big-questions/${id}`} className="flex flex-col h-full" disableAnimation>
        {/* Icon Section - Centered at top */}
        {image && (
          <div className="flex justify-center items-center pt-6 pb-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src={image}
                alt=""
                className="w-10 h-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        )}

        {/* Question Text - Centered */}
        <div className="flex-1 px-4 pb-4">
          <p className="text-center text-sm font-medium text-gray-700 leading-relaxed group-hover:text-[#00380A] transition-colors">
            {question}
          </p>
        </div>

        {/* Progress Bar - At bottom */}
        <div className="px-4 pb-4">
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, #dc2626 0%, #16a34a ${progress}%)`,
              }}
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
