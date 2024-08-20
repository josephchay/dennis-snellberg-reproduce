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
            <span className='font-bold text-primary'>Joseph, {' '}</span>
            greets you from his virtual space, encapsulating all his{' '}
            <span className='font-bold text-primary'>interests {' '}</span>
            and {' '}
            <span className='font-bold text-primary'>skills</span>.
            With great passion for {' '}
            <span className='font-bold text-primary'>design {' '}</span>
            for {' '}
            <span className='font-bold text-primary'>UI {' '}</span>
            and {' '}
            <span className='font-bold text-primary'>UX {' '}</span>
            spaces, his skills evokes creativity from the simplest to the most complex projects.
            Moreover, his interests in development for full-stack applications, Web3 and blockchain technologies,
            and Neural Networks and Learning for AI keeps him on track with the latest
            market trends. His works
            demonstrate smooth and memorable
            experiences, bringing quality and
            accuracy to every project deliverables.
          </motion.p>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='max-w-5xl text-base leading-[30px] text-primary sm:text-lg md:text-xl lg:text-2xl'
          >
            Actively seeking opportunities in software development.
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
