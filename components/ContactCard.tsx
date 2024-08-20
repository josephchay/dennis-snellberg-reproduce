import {
  FileTextIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from 'lucide-react';
import { type PropsWithChildren } from 'react';

import MagneticComponent from '@/hoc/MagneticComponent';

interface ContactLinkProps extends PropsWithChildren {}

const ContactLink = ({ children }: ContactLinkProps) => {
  return (
    <MagneticComponent
      className='group flex w-fit items-center gap-x-4'
      modifier={{ x: 0.25, y: 0.5 }}
    >
      { children }
    </MagneticComponent>
  );
};

const ContactCard = () => {
  return (
    <div className='my-12 grid grid-cols-1 gap-y-8 md:grid-cols-2'>
      <ContactLink>
        <MailIcon size={24} />
        <a
          href='mailto:josephemmanuelchay@gmail.com'
          className='text-base underline-offset-8 group-hover:underline md:text-xl'
        >
          josephemamnuelchay@gmail.com
        </a>
      </ContactLink>

      <ContactLink>
        <PhoneIcon size={24} />
        <a
          href='tel:0163139132'
          className='text-base underline-offset-8 group-hover:underline md:text-xl'
        >
          (016)-313-9132
        </a>
      </ContactLink>

      <ContactLink>
        <LinkedinIcon size={24} />
        <a
          href='https://www.linkedin.com/in/josephchay/'
          className='text-base underline-offset-8 group-hover:underline md:text-xl'
          target='_blank'
          rel='noreferrer'
        >
          josephchay
        </a>
      </ContactLink>

      <ContactLink>
        <GithubIcon size={24} />
        <a
          href='https://github.com/josephchay'
          className='text-base underline-offset-8 group-hover:underline md:text-xl'
          target='_blank'
          rel='noreferrer'
        >
          josephchay
        </a>
      </ContactLink>

      <ContactLink>
        <FileTextIcon size={24} />
        <a
          href='./JosephChay-Resume.pdf'
          className='text-base underline-offset-8 group-hover:underline md:text-xl'
          target='_blank'
        >
          Resume
        </a>
      </ContactLink>

      <ContactLink>
        <MapPinIcon size={24} />
        <p className='text-base md:text-xl'>Kuala Lumpur, Malaysia</p>
      </ContactLink>
    </div>
  );
};

export default ContactCard;
