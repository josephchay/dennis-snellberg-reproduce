import { InProgress } from '@/components';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'Helping brands thrive in the digital world. Located in Malaysia. Delivering quality software and digital products.ds thrive in the digital world. Located in Malaysia. Delivering quality software and digital products.',
};

export default function Contact() {
  return (
    <Transition>
      <InProgress>Contact Page</InProgress>
    </Transition>
  );
}
