import { motion } from 'framer-motion';

import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';

type PaddingType = 'default' | 'tighterX';

const SectionWrapper = (
  Component: React.FC,
  id: string,
  paddingType: PaddingType = 'default',
  className?: string
) =>
  function HOC() {
    return (
      <motion.section
        id={id}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0,
              delayChildren: 0,
            },
          },
        }}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.15 }}
        className={cn(
          `${paddingType === 'default' ? styles.padding : styles.paddingWithTighterX}
          mx-auto w-full max-w-8xl`,
          className
        )}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
