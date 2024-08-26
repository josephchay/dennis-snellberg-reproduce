'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/lib/styles';
import { fadeIn } from '@/lib/transitions';
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
      <div className={`mt-8 flex w-full flex-col gap-y-8 md:flex-row md:gap-x-8 ${styles.extraPaddingX}`}>
        <div className='flex-grow space-y-8 md:max-w-[70%] md:pr-8'>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`text-[clamp(1.4rem,2.1vw,2rem)] leading-[1.5] ${styles.textDark}`}
          >
            Crafting tomorrow&apos;s icons in a world of ever-evolving landscape.
            Together, we&apos;ll redefine what&apos;s possible. Always bold, passionate, and beyond the curve.
          </motion.p>
        </div>
        <div className='flex md:flex-col justify-center md:w-[30%] md:pl-8 md:pt-2'>
          <motion.p className="mb-12 sm:pr-40 md:pr-0 text-[clamp(.9rem,1.2vw,1.1rem)] leading-[1.6]">
            With expertise in design and development,
            I am uniquely positioned at the forefront of technological innovation.
          </motion.p>
          <MagneticButton
            onClick={() => {
              startSplash('/skills');
            }}
          >
            <p className='font-normal text-[clamp(1rem,1.2vw,1.2rem)] text-primary-foreground'>
              About Me
            </p>
          </MagneticButton>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
