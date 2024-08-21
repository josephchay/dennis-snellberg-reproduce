'use client';

import { Fragment, type ReactNode } from 'react';

import { motion } from 'framer-motion';

import { useParallaxSlider } from '@/hooks/useParallaxSlider';
import { randomId } from '@/utils/randomId';

interface ParallaxSliderProps {
  children: ReactNode;
  repeat: number;
  baseVelocity: number;
}

/** @param {import('react').PropsWithChildren<unknown> & {repeat: number; baseVelocity: number;}} */
export function ParallaxSlider({
 children,
 repeat = 2,
 baseVelocity
}: ParallaxSliderProps) {
  const x = useParallaxSlider(baseVelocity);

  return (
    <div className='flex flex-nowrap overflow-hidden whitespace-nowrap'>
      <motion.div style={{ x }}>
        {Array.from({ length: repeat }).map(() => {
          const id = randomId();
          return <Fragment key={id}>{children}</Fragment>;
        })}
      </motion.div>
    </div>
  );
}
