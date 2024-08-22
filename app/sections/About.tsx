'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/lib/styles';
import { fadeIn, textVariant } from '@/lib/transitions';

import { me } from '@/assets';

const About = () => {
  return (
    <>
      <motion.h2
        variants={textVariant()}
        className={`${styles.sectionHead} uppercase`}
      >
        About Me
      </motion.h2>
      <div className='mt-8 flex w-full flex-col-reverse gap-y-8 md:flex-row'>
        <div className='flex-[4] space-y-8 xl:flex-[3]'>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='max-w-3xl text-base text-muted-foreground sm:text-lg md:text-xl md:leading-8'
          >
            Crafting tomorrow&apos;s icons in a world of ever-evolving landscape.
            Together, we&apos;ll redefine what&apos;s possible. Always bold, passionate, and beyond the curve.
          </motion.p>
        </div>
        <div className='flex w-full flex-[1] items-center justify-center md:pl-12 xl:flex-[2]'>
          <div className='relative h-48 w-48 rounded-full lg:h-56 lg:w-56'>
            <Image
              className='rounded-full object-cover'
              src={me.src}
              alt='Me'
              fill
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
