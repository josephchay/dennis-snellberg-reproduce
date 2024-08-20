import { motion } from 'framer-motion';

const Technologies = () => {
  return (
    <motion.div className='w-full px-6 py-6 sm:px-16 sm:py-16'>
      <motion.h2
        className='text-xl md:text-2xl lg:text-3xl'
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
      >
        EDUCATION
      </motion.h2>
      <div className='mt-4 flex flex-row items-center justify-center rounded-2xl bg-slate-900 p-8'>
        <div className='relative h-[100px] w-[100px]'>
          {/* <Image
            className='w-full h-full object-contain'
            src={src}
            fill
            alt='Nottingham University'
          /> */}
        </div>
        <div className='ml-8 flex w-full flex-col'>
          <div className='flex flex-row'>
            <p className='text-[14px] font-semibold sm:text-lg md:text-2xl'>
              Nottingham University - <span> Semenyih, Malaysia</span>
            </p>
          </div>
          <p className='text-[14px] font-semibold sm:text-lg md:text-2xl'>
            BSc (Hons) Computer Science with Artificial Intelligence
          </p>
          <p className='text-[14px] font-semibold sm:text-lg md:text-2xl'>
            2023 - 2025
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
