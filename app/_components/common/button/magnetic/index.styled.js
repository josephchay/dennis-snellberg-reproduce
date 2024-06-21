'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const MagneticItem = styled(motion.span)`
  position: relative;
  z-index: 1;
  display: block;
  width: max-content;
  max-width: 14ch;
  word-break: break-all;
`;
