'use client';

import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/lib/styles';
import { fadeIn } from '@/lib/transitions';
// import { fadeIn, textVariant } from '@/lib/transitions';

import { MagneticButton } from "@/components/MagneticButton";
import { useEffect, useState } from "react";
import useSplash from "@/hooks/useSplash";

const About = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { startSplash } = useSplash();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* <motion.h2 */}
      {/*   variants={textVariant()} */}
      {/*   className={`${styles.sectionHead} uppercase`} */}
      {/* > */}
      {/*   About Me */}
      {/* </motion.h2> */}
      <div className='mt-8 flex w-full flex-col-reverse gap-y-8 md:flex-row'>
        <div className='w-full md:w-[70%] flex-[4] space-y-8 xl:flex-[3] md:pr-8'>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`max-w-3xl text-base sm:text-lg md:text-3xl md:leading-[3rem] ${styles.textDark}`}
          >
            Crafting tomorrow&apos;s icons in a world of ever-evolving landscape.
            Together, we&apos;ll redefine what&apos;s possible. Always bold, passionate, and beyond the curve.
          </motion.p>
        </div>
        <div className='w-full md:w-[30%] flex flex-col justify-center md:pl-8 md:pt-2'>
          <motion.p className="md:mb-12">
            With expertise in design and development,
            I am uniquely positioned at the forefront of technological innovation.
          </motion.p>
          <MagneticButton
            onClick={() => {
              startSplash('/skills');
            }}
          >
            <p className='text-lg text-primary-foreground lg:text-xl'>
              About Me
            </p>
          </MagneticButton>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
