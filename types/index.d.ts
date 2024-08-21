import { type StaticImageData } from 'next/image';

export interface ExperienceType {
  title: string;
  companyName: string;
  location: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}
export interface FeaturedWorkCaseType {
  title: string;
  type: string;
  image: StaticImageData;
  color: string;
  path: string;
}

export interface WorkCaseType {
  title: string;
  description: string;
  type: string[];
  image: StaticImageData;
  github: string;
  website?: string;
  link?: string;
}
export interface Tech {
  name: string;
  icon: StaticImageData;
}
