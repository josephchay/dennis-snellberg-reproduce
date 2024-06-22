'use client';

import { useCallback, useState } from 'react';

/**
 * @param {import('react').MutableRefObject<HTMLButtonElement>} element
 * @param {number} strength
 */
export function useMagnetic(element, strength = 0.4) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /** @type {import('react').PointerEventHandler<HTMLButtonElement>} */
  const handleMagneticMove = useCallback(
    event => {
      const { clientX, clientY } = event;
      const { width, height, left, top } = element.current.getBoundingClientRect();

      const x = (clientX - (left + width / 2)) * strength;
      const y = (clientY - (top + height / 2)) * strength;
      setPosition(prePosition => ({ ...prePosition, x, y }));
    },
    [element, strength],
  );

  const handleMagneticOut = useCallback(() => setPosition({ x: 0, y: 0 }), []);

  return { position, handleMagneticMove, handleMagneticOut };
}
