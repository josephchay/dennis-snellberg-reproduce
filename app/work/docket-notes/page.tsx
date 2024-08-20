'use client';

import { AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { styles } from '@/lib/styles';

import SplashOut from '@/app/components/SplashOut';
import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import DisplayPicture from '@/components/DisplayPicture';
import { MagneticButton } from '@/components/MagneticButton';

import ProjectHeader from '../components/ProjectHeader';

import { docketnotes } from '@/assets';
import { projectDocketnotes } from '@/constants';

const DocketnotesPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>

      <div className={`relative ${isLoading ? 'h-screen' : ''} w-full`}>
        <StandingNavbar />
        <div className={'relative mt-36 w-full pb-36 md:mt-44'}>
          <ProjectHeader
            title={projectDocketnotes.title}
            date={projectDocketnotes.date}
            category={projectDocketnotes.category}
            keyTech={projectDocketnotes.key_tech}
          />
          <div className='absolute bottom-[26rem] right-0 z-20 -translate-x-1/2 translate-y-1/2 md:bottom-0 md:mx-16 md:-translate-x-[200%]'>
            <Link href={projectDocketnotes.store_site_1} target='_blank'>
              <MagneticButton onClick={() => {}}>
                <div className='flex items-end gap-x-2'>
                  <p className='text-lg leading-5'>Live Site</p>
                  <ExternalLinkIcon />
                </div>
              </MagneticButton>
            </Link>
          </div>
          <div className='absolute bottom-40 right-0 z-20 -translate-x-1/2 translate-y-1/2 md:bottom-0 md:mx-16'>
            <Link href={projectDocketnotes.store_site_2} target='_blank'>
              <MagneticButton onClick={() => {}}>
                <div className='flex items-end gap-x-2'>
                  <p className='text-lg leading-5'>Source</p>
                  <ExternalLinkIcon />
                </div>
              </MagneticButton>
            </Link>
          </div>
        </div>
        <div className='mx-auto w-full max-w-[110rem] md:px-16'>
          <div className='relative aspect-video w-full border bg-white'>
            <Image
              className='object-contain'
              src={ docketnotes }
              alt='Title'
              fill
            />
          </div>
        </div>
        <div className='mx-auto mt-32 flex max-w-8xl flex-col text-center'>
          <div className={`${styles.padding} flex h-screen flex-col justify-center gap-y-4`}>
            <h2 className='text-5xl font-medium'>Colors</h2>
            <p className='text-lg'>
              Allows users to continuously create new note plates from multiple color choices.
            </p>
            <DisplayPicture src={'/project-vids/docket-notes-video.mp4'} />
          </div>
          <div className={`${styles.padding} flex h-screen flex-col justify-center gap-y-4`}>
            <h2 className='text-5xl font-medium'>Search</h2>
            <p className='text-lg'>
              A dynamic search bar filterable by text and starred.
            </p>
            <DisplayPicture src={ docketnotes } />
          </div>
          <div className={`${styles.padding} flex h-screen flex-col justify-center gap-y-4 max-w-4xl mx-auto`}>
            <h2 className='text-5xl font-medium'>Multi Platform</h2>
            <p className='text-lg'>
              Designed with full multi-platform compatibility,
              delivering a seamless and consistent user experience across all devices and operating systems,
              ensuring accessibility and performance wherever accessed.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DocketnotesPage;
