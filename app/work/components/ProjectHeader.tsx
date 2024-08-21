import { styles } from '@/lib/styles';

import { Separator } from '@/components/ui/separator';

interface ProjectHeaderProps {
  title: string;
  category: string[];
  techStack: string[];
  date: string;
}

const ProjectHeader = ({
  title,
  category,
  techStack,
  date,
}: ProjectHeaderProps) => {
  return (
    <div className={`mx-auto max-w-7xl ${styles.projectPaddingX}`}>
      <h1 className='text-4xl md:text-5xl lg:text-7xl xl:text-8xl'>{title}</h1>
      <div className='mt-12 grid grid-cols-1 gap-10 md:mt-36 md:grid-cols-3 md:gap-8'>
        <div className='flex flex-col gap-y-6 md:gap-y-8'>
          <p className='text-xs text-muted-foreground md:text-sm'>Category</p>
          <Separator />
          <p className='text-base md:text-lg'>{category.join(' • ')}</p>
        </div>
        <div className='flex flex-col gap-y-6 md:gap-y-8'>
          <p className='text-xs text-muted-foreground md:text-sm'>Tech Stack</p>
          <Separator />
          <p className='text-base md:text-lg'>{techStack.join(', ')}</p>
        </div>
        <div className='flex flex-col gap-y-6 md:gap-y-8'>
          <p className='text-xs text-muted-foreground md:text-sm'>Production Period</p>
          <Separator />
          <p className='text-base md:text-lg'>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
