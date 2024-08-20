import { motion } from 'framer-motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';

import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/lib/styles';
import { textVariant } from '@/lib/transitions';

import { CareerExperienceCard } from '@/components/CareerExperienceCard';

import { experiences } from '@/constants';

const Career = () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2
        variants={textVariant()}
        className={`uppercase ${styles.sectionHead}`}
      >
        Career Experience
      </motion.h2>
      <VerticalTimeline animate={false}>
        {experiences.map((experience, index) => (
          <CareerExperienceCard key={index} {...experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default SectionWrapper(Career, 'career');
