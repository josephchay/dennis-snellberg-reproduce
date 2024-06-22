'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useMagnetic } from '@/hooks';
import { cn } from '@/utils';

import { MagneticItem } from './index.styled';
import { magneticVariance } from './index.variance';

/** @param {import('react').ButtonHTMLAttributes<HTMLButtonElement> & { variant: 'default' | 'primary' | 'destructive' | 'secondary' | 'ghost' | 'outline'; size: 'default' | 'md' | 'lg' | 'xl'; innerSpeedMultiplier?: number, magneticStrength?: number }} */
export function MagneticButton({
  children,
  className,
  variant,
  size,
  innerSpeedMultiplier = 0.6,
  magneticStrength = 0.4,
  ...props
}) {
  /** @type {import('react').MutableRefObject<HTMLButtonElement>} */
  const elementRef = useRef(null);
  const {
    position: { x, y },
    handleMagneticMove,
    handleMagneticOut,
  } = useMagnetic(elementRef, magneticStrength);

  const transition = {
    type: 'spring',
    damping: 15,
    stiffness: 150,
    mass: 0.4,
  };

  const innerX = x * innerSpeedMultiplier;
  const innerY = y * innerSpeedMultiplier;

  return (
    <motion.button
      ref={ elementRef }
      className={cn(magneticVariance({ variant, size, className }))}
      animate={{ x, y }}
      transition={ transition }
      onPointerMove={ handleMagneticMove }
      onPointerOut={ handleMagneticOut }
      whileHover={{ scale: 1.1 }}
      { ...props }
    >
      <MagneticItem
        animate={{
          x: innerX,
          y: innerY,
        }}
        transition={ transition }
      >
        { children }
      </MagneticItem>
    </motion.button>
  );
}
