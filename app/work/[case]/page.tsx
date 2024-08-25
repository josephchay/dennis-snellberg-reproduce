'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { styles } from '@/lib/styles';

import SplashOut from '@/app/components/SplashOut';
import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import DisplayPicture from '@/components/DisplayPicture';
import { MagneticButton } from '@/components/MagneticButton';

import WorkCaseHeader from '../components/WorkCaseHeader';

import { workCases } from "@/constants";

interface WorkCasePageProps {
  params: { case: keyof typeof workCases };
}

const WorkCasePage = ({
  params,
}: WorkCasePageProps) => {
  const [workCase, setWorkCase] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run when params.case changes
    try {
      const loadedCase = workCases[params.case];
      setWorkCase(loadedCase);
    } catch (error) {
      console.error('Failed to load case data:', error);
    }
  }, [params.case]);  // Add params.case as a dependency

  return (
    <main>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>

      <div className={`relative ${isLoading ? 'h-screen' : ''} w-full`}>
        <StandingNavbar />
        {workCase && (
          <>
            <div className='relative mt-36 w-full pb-36 md:mt-44'>
              <WorkCaseHeader
                title={ workCase.title }
                date={ workCase.date }
                category={ workCase.category }
                techStack={ workCase.techStack }
              />
              <div className='absolute bottom-[26rem] right-0 z-20 -translate-x-1/2 translate-y-1/2 md:bottom-0 md:mx-16 md:-translate-x-[200%]'>
                <Link href={ workCase.site } target='_blank'>
                  <MagneticButton onClick={() => {}}>
                    <div className='flex items-end gap-x-2'>
                      <p className='font-normal text-lg leading-5'>Live Site</p>
                      <ExternalLinkIcon />
                    </div>
                  </MagneticButton>
                </Link>
              </div>
              <div className='absolute bottom-40 right-0 z-20 -translate-x-1/2 translate-y-1/2 md:bottom-0 md:mx-16'>
                <Link href={ workCase.site } target='_blank'>
                  <MagneticButton onClick={() => {}}>
                    <div className='flex items-end gap-x-2'>
                      <p className='font-normal text-lg leading-5'>Source</p>
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
                  src={ workCase.image }
                  alt='Title'
                  fill
                />
              </div>
            </div>
            <div className='mx-auto mt-32 flex max-w-8xl flex-col text-center'>
              <div className={`${styles.padding} flex h-screen flex-col justify-center gap-y-4`}>
                <h2 className='text-5xl font-medium'>Colors</h2>
                <p className='text-lg'>Allows users to continuously create new note plates from multiple color choices.</p>
                <DisplayPicture src={'/project-vids/docket-notes-video.mp4'} />
              </div>
              <div className={`${styles.padding} flex h-screen flex-col justify-center gap-y-4`}>
                <h2 className='text-5xl font-medium'>Search</h2>
                <p className='text-lg'>A dynamic search bar filterable by text and starred.</p>
                <DisplayPicture src={ workCase.image } />
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
          </>
        )}
      </div>
    </main>
  );
};

export default WorkCasePage;
