import { motion } from 'framer-motion';
import Image from 'next/image';

import { BackgroundGradient } from '@/components/ui/background-gradient';
import SectionWrapper from '@/hoc/SectionWrapper';

import { universityLogo } from '@/assets';
import { styles } from '@/lib/styles';
import { fadeIn, textVariant } from '@/lib/transitions';

const Education = () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2 variants={textVariant()} className={styles.sectionHead}>
        EDUCATION
      </motion.h2>
      <BackgroundGradient>
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className='flex flex-row items-center justify-center rounded-2xl bg-slate-900 p-8'
        >
          <div className='relative h-[100px] w-[100px]'>
            <Image
              className='h-full w-full object-contain'
              src={ universityLogo }
              fill
              alt='Nottingham University'
            />
          </div>
          <div className='ml-8 flex w-full flex-col'>
            <p className='text-base font-semibold sm:text-lg md:text-2xl'>
              Nottingham University - <span> Semenyih, Malaysia</span>
            </p>
            <p className='text-sm font-semibold sm:text-base md:text-lg'>
              BSc (Hons) Computer Science with Artificial Intelligence
            </p>
            <p className='text-sm sm:text-base md:text-lg'>2023 - 2025</p>
          </div>
        </motion.div>
      </BackgroundGradient>
    </div>
  );
};

export default SectionWrapper(Education, 'education');
