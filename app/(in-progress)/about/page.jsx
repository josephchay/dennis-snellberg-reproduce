import { InProgress } from '@/components';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Helping brands thrive in the digital world. Located in Malaysia. Delivering quality software and digital products.ds thrive in the digital world. Located in Malaysia. Delivering quality software and digital products. © Code by Joseph',
};

export default function About() {
  return (
    <Transition>
      <InProgress>About Page</InProgress>
    </Transition>
  );
}
