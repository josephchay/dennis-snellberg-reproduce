'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import useSplash from '@/hooks/useSplash';
import { styles } from '@/lib/styles';
import { textVariant } from '@/lib/transitions';

import { MagneticButton } from '@/components/MagneticButton';
import { WorkCaseModal } from '@/components/WorkCaseModal';
import WorkCaseTile from '@/components/WorkCaseTile';

import { Separator } from '@/components/ui/separator';

import { featuredWork } from '@/constants';

const FeaturedWorkCases = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { startSplash } = useSplash();

  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2
        variants={textVariant()}
        className={`${styles.sectionHead} uppercase ${styles.extraPaddingX}`}
      >
        Featured Work
      </motion.h2>

      <div className='grid w-full grid-cols-1 gap-y-8 sm:grid-cols-2 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-0'>
        <Separator className='hidden lg:flex' />
        {featuredWork.map((workCase, index) => {
          const { title, type, image, color, path } = workCase;
          return (
            <WorkCaseTile
              key={ index }
              index={ index }
              title={ title }
              image={ image }
              color={ color }
              type={ type }
              link={ `/work/${path}` }
              setModal={ setModal }
            />
          );
        })}
        <WorkCaseModal modal={modal} list={featuredWork} />
      </div>
      <div className='mt-4 flex w-full justify-center'>
        <MagneticButton
          variant="outline"
          size='wide'
          onClick={() => {
            startSplash('/work');
          }}
        >
          <p className='font-normal text-md lg:text-lg'>
            More Cases
          </p>
        </MagneticButton>
      </div>
    </div>
  );
};

export default SectionWrapper(FeaturedWorkCases, 'work');
