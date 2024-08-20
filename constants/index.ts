import {
  abc,
  additivemanufacturing,
  android,
  arduino,
  aws,
  c,
  cpp,
  css,
  dart,
  debug,
  django,
  docker,
  expressjs,
  firebase,
  flutter,
  git,
  html,
  java,
  javascript,
  jetpack,
  kotlin,
  kubernetes,
  linux,
  material,
  mongodb,
  mySQL,
  network,
  nextjs,
  nodejs,
  postgreSQL,
  prisma,
  python,
  raspberryPi,
  reactjs,
  redux,
  riverpod,
  solidworks,
  supabase,
  tailwind,
  typescript,
  docketnotes,
  vixta,
  ochiclone,
  fotofiesta,
} from '@/assets';
import type { ExperienceType, FeaturedProjectType, ProjectType } from '@/types';

export const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Skills',
    href: '/skills',
  },
  {
    title: 'Work',
    href: '/work',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const socials = [
  { name: 'LinkedIn', link: 'https://linkedin.com/in/josephchay' },
  { name: 'Github', link: 'https://github.com/josephchay' },
  { name: 'Resume', link: './JosephChay-Resume.pdf' },
];

export const heroSubHeading = [
  2500,
  'I am a Full Stack Developer',
  1000,
  'I am a Mobile App Developer',
  1000,
  'I am a Neural Networks Engineer',
  1000,
  'I am a Software Engineer',
];

export const experiences: ExperienceType[] = [
  {
    title: 'Software Engineer',
    companyName: 'Company ABC',
    location: 'Kuala Lumpur, Malaysia',
    icon: abc,
    iconBg: '#000',
    date: 'June 2023 - Present',
    points: [
      'Review pull requests from team members, providing feedback and suggestions for improvements.',
      'Work on implementing new features as specified in the project roadmap.',
      'Analyze and optimize the performance of existing code to improve efficiency and scalability.',
      'Collaborate with other team members to ensure that project deadlines are met.',
    ],
  },
];

export const featuredSkillsText = `With specialized expertise in AI technologies, I excel at designing and implementing intelligent systems that drive innovation and efficiency. My proficiency in Web3 and blockchain enables the development of decentralized applications with secure and transparent data management. Complementing these skills, my full-stack development experience ensures the seamless integration of frontend and backend systems, providing comprehensive and robust solutions to complex software challenges.`;

export const featuredTech = [
  { name: 'React.js', icon: reactjs },
  { name: 'Next.js', icon: nextjs },
  { name: 'Linux', icon: linux },
  { name: 'AWS', icon: aws },
  { name: 'Docker', icon: docker },
  { name: 'Kubernetes', icon: kubernetes },
];

export const techStack = [
  {
    title: 'Languages',
    description: 'I am an adaptable software developer with a strong ability to master and apply multiple programming languages and frameworks, enabling me to deliver diverse and effective software solutions across various platforms and services. ',
    tech: [
      { name: 'JavaScript', icon: javascript, expertise: true },
      { name: 'TypeScript', icon: typescript, expertise: true },
      { name: 'Python', icon: python, expertise: true },
      { name: 'Java', icon: java, expertise: true },
      { name: 'C', icon: c, expertise: true },
      { name: 'C++', icon: cpp, expertise: false },
      { name: 'Dart', icon: dart, expertise: false },
      { name: 'Kotlin', icon: kotlin, expertise: false },
    ],
  },
  {
    title: 'Frontend',
    description: 'With a deep understanding of the latest frontend technologies, I have consistently developed intuitive and visually engaging user interfaces that seamlessly integrate with complex backend systems, ensuring a cohesive and efficient user experience.',
    tech: [
      { name: 'HTML', icon: html, expertise: true },
      { name: 'CSS 3', icon: css, expertise: true },
      { name: 'React.js', icon: reactjs, expertise: true },
      { name: 'Next.js', icon: nextjs, expertise: true },
      { name: 'Redux', icon: redux, expertise: true },
      { name: 'Tailwind', icon: tailwind, expertise: true },
      { name: 'Material UI', icon: material, expertise: false },
    ],
  },
  {
    title: 'Backend',
    description: 'With a strong proficiency in Node.js and Express.js, I have engineered robust backend solutions that exemplify a deep understanding of server-side operations. Additionally, my expertise in Django, Firebase, and Supabase positions me to seamlessly integrate these technologies into complex projects, delivering scalable and efficient results.',
    tech: [
      { name: 'Node.js', icon: nodejs, expertise: true },
      { name: 'Express.js', icon: expressjs, expertise: true },
      { name: 'Django', icon: django, expertise: false },
      { name: 'Firebase', icon: firebase, expertise: false },
      { name: 'Supabase', icon: supabase, expertise: false },
    ],
  },
  {
    title: 'Databases',
    description: 'I am highly proficient in managing various databases, including MongoDB, MySQL, and PostgreSQL. Utilizing Prisma as an ORM, I ensure optimal data management and seamless integration, enabling the development of versatile and high-performance software applications.',
    tech: [
      { name: 'MongoDB', icon: mongodb, expertise: true },
      { name: 'MySQL', icon: mySQL, expertise: true },
      { name: 'PostgreSQL', icon: postgreSQL, expertise: true },
      { name: 'Prisma', icon: prisma, expertise: true },
    ],
  },
  {
    title: 'Mobile',
    description: 'I have developed a robust expertise in Flutter and Riverpod, utilizing these frameworks to create high-quality, cross-platform mobile applications. Currently, I am expanding my skill set by exploring Android and Jetpack Compose, and I am eager to integrate these technologies into future development projects to enhance my capabilities further.',
    tech: [
      { name: 'Flutter', icon: flutter, expertise: true },
      { name: 'Riverpod', icon: riverpod, expertise: false },
      { name: 'Android', icon: android, expertise: false },
      { name: 'Jetpack Compose', icon: jetpack, expertise: false },
    ],
  },
  {
    title: 'Other',
    description: 'I am proficient in Git and debugging, leveraging these tools for effective version control and software troubleshooting. With a solid understanding of AWS, I ensure the implementation of seamless cloud computing solutions. Currently, I am exploring Docker and am enthusiastic about incorporating it into future projects to streamline development processes.',
    tech: [
      { name: 'Git', icon: git, expertise: true },
      { name: 'Debugging', icon: debug, expertise: true },
      { name: 'AWS', icon: aws, expertise: true },
      { name: 'Docker', icon: docker, expertise: true },
      { name: 'Kubernetes', icon: kubernetes, expertise: true },
    ],
  },
];

export const featuredProjects: FeaturedProjectType[] = [
  {
    title: 'Docket Notes',
    color: '#18181b',
    image: docketnotes,
    type: 'Design & Development',
    link: 'https://docketnotes.netlify.app/',
  },
  {
    title: 'Vixta',
    color: '#18181b',
    image: vixta,
    type: 'Design & Development',
    link: 'https://vixta.netlify.app/',
  },
  {
    title: 'Ochi (Clone)',
    color: '#18181b',
    image: ochiclone,
    type: 'Development',
    link: 'https://ochi-clone-frontend.vercel.app/',
  },
  {
    title: 'Fotofiesta',
    color: '#18181b',
    image: fotofiesta,
    type: 'Design & Development',
    link: 'https://josephchay.github.io/fotofiesta/',
  },
];

export const allProjects: ProjectType[] = [
  {
    title: 'Docket Notes',
    description: 'Swiftly capture and organize your thoughts on the go with this intuitive quick note jotting app.',
    image: docketnotes,
    type: ['Design', 'Development'],
    github: 'https://github.com/josephchay/docket-note',
  },
  {
    title: 'Vixta',
    description: 'A minimalist photo memory archive website with interactive image animations for the fictional fashion brand Vixta.',
    image: vixta,
    type: ['Design', 'Development'],
    github: 'https://github.com/josephchay/vixta-fashion-studio',
    link: '/work/vixta',
  },
  {
    title: 'Ochi (Clone)',
    description: 'A set of tools for web developers including string manipulation, code minifiers, data generators, and more.',
    image: ochiclone,
    type: ['Design', 'Development'],
    github: 'https://github.com/josephchay/ochi-clone-frontend',
    website: 'https://ochi-clone-frontend.vercel.app/',
    link: '/work/ochi-clone',
  },
  {
    title: 'FotoFiesta',
    description: 'Immerse yourself in an infinite world of captivating visuals, where every snapshot tells a unique story.',
    image: fotofiesta,
    type: ['Design', 'Development'],
    github: 'https://github.com/josephchay/fotofiesta',
    website: 'https://josephchay.github.io/fotofiesta/',
    link: '/work/fotofiesta',
  },
  {
    title: 'Docket Notes',
    description: 'Swiftly capture and organize your thoughts on the go with this intuitive quick note jotting app.',
    image: docketnotes,
    type: ['Design', 'Development'],
    github: 'https://github.com/josephchay/docket-note',
  },
  {
    title: 'Vixta',
    description: 'A minimalist photo memory archive website with interactive image animations for the fictional fashion brand Vixta.',
    image: vixta,
    type: ['Design', 'Development'],
    github: 'https://github.com/josephchay/vixta-fashion-studio',
    link: '/work/vixta',
  },
  {
    title: 'Ochi (Clone)',
    description: 'A set of tools for web developers including string manipulation, code minifiers, data generators, and more.',
    image: ochiclone,
    type: ['Design', 'Development'],
    github: 'https://github.com/josephchay/ochi-clone-frontend',
    website: 'https://ochi-clone-frontend.vercel.app/',
    link: '/work/ochi-clone',
  },
  {
    title: 'FotoFiesta',
    description: 'Immerse yourself in an infinite world of captivating visuals, where every snapshot tells a unique story.',
    image: fotofiesta,
    type: ['Design', 'Development'],
    github: 'https://github.com/josephchay/fotofiesta',
    website: 'https://josephchay.github.io/fotofiesta/',
    link: '/work/fotofiesta',
  },
  {
    title: 'Docket Notes',
    description: 'Swiftly capture and organize your thoughts on the go with this intuitive quick note jotting app.',
    image: docketnotes,
    type: ['Design', 'Development'],
    github: 'https://github.com/josephchay/docket-note',
  },
  {
    title: 'Vixta',
    description: 'A minimalist photo memory archive website with interactive image animations for the fictional fashion brand Vixta.',
    image: vixta,
    type: ['Design', 'Development'],
    github: 'https://github.com/josephchay/vixta-fashion-studio',
    link: '/work/vixta',
  },
  {
    title: 'Ochi (Clone)',
    description: 'A set of tools for web developers including string manipulation, code minifiers, data generators, and more.',
    image: ochiclone,
    type: ['Design', 'Development'],
    github: 'https://github.com/josephchay/ochi-clone-frontend',
    website: 'https://ochi-clone-frontend.vercel.app/',
    link: '/work/ochi-clone',
  },
  {
    title: 'FotoFiesta',
    description: 'Immerse yourself in an infinite world of captivating visuals, where every snapshot tells a unique story.',
    image: fotofiesta,
    type: ['Design', 'Development'],
    github: 'https://github.com/josephchay/fotofiesta',
    website: 'https://josephchay.github.io/fotofiesta/',
    link: '/work/fotofiesta',
  },
];

export const projectDocketnotes = {
  title: 'Docket Notes',
  date: 'February 2024',
  description: 'Swiftly capture and organize your thoughts on the go with this intuitive quick note jotting app.',
  category: ['Design', 'Development'],
  key_tech: ['React'],
  store_image: docketnotes,
  dashboard_image: docketnotes,
  github: 'https://github.com/josephchay/docket-note',
  dashboard_site: 'https://docketnotes.netlify.app/',
  store_site_1: 'https://docketnotes.netlify.app/',
  store_site_2: 'https://docketnotes.netlify.app/',
};

export const projectVixta = {
  title: 'Vixta',
  date: 'June - August 2024',
  description: 'A minimalist photo memory archive website with interactive image animations for the fictional fashion brand Vixta.',
  category: ['Design', 'Development'],
  key_tech: ['Nuxt'],
  website_image: vixta,
  github: 'https://github.com/josephchay/vixta-fashion-studio',
  website: 'https://vixta.netlify.app/',
};

export const projectFotofiesta = {
  title: 'FotoFiesta',
  date: 'January - June 2024',
  description: 'Immerse yourself in an infinite world of captivating visuals, where every snapshot tells a unique story.',
  category: ['Design', 'Development'],
  key_tech: ['JavaScript'],
  website_image: fotofiesta,
  github: 'https://github.com/josephchay/fotofiesta',
  website: 'https://josephchay.github.io/fotofiesta/',
};
