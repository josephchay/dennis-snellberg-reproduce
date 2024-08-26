'use client';

import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';

import { Separator } from '@/components/ui/separator';
import { slideIn } from '@/lib/transitions';

interface WorkCaseTileProps {
  index: number;
  title: string;
  image: StaticImageData;
  color: string;
  type: string;
  link: string;
  setModal: ({ active, index }: { active: boolean; index: number }) => void;
}

const WorkCaseTile = ({
  index,
  title,
  image,
  color,
  type,
  link,
  setModal,
}: WorkCaseTileProps) => {
  return (
    <>
      {/* Desktop */}
      <motion.div
        variants={slideIn(
          index % 2 === 1 ? 'right' : 'left',
          'spring',
          Math.floor(index / 2) * 0.4 + 0.2,
          0.8,
        )}
        className='group hidden h-full w-full cursor-pointer items-center justify-between px-6 py-12 hover:scale-110 hover:opacity-50 lg:flex xl:px-12 xl:py-16'
        onClick={() => window.open(link, '_self')}
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
      >
        <h2 className='text-3xl font-normal transition duration-500 group-hover:-translate-x-4 lg:text-5xl xl:text-6xl lg:pl-7 xl:pl-10'>
          {title}
        </h2>
        <p className='text-base font-light transition duration-500 group-hover:translate-x-4 xl:text-lg lg:pr-7 xl:pr-10'>
          {type}
        </p>
      </motion.div>
      <Separator className='hidden lg:flex' />

      {/* Mobile */}
      <div
        className='group flex w-full cursor-pointer flex-col gap-y-4 px-2 lg:hidden'
        onClick={() => window.open(link, '_self')}
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
      >
        <div
          style={{ backgroundColor: color }}
          className='flex aspect-square w-full items-center justify-center'
        >
          <div className='relative h-[55%] w-[85%] transition duration-500 group-hover:scale-105'>
            <Image
              className='rounded-md object-cover'
              src={image}
              alt={title}
              fill
            />
          </div>
        </div>
        <h2 className='mt-4 text-3xl sm:text-2xl'>{title}</h2>
        <Separator />
        <p className='text-base font-light'>{type}</p>
      </div>
    </>
  );
};

export default WorkCaseTile;
