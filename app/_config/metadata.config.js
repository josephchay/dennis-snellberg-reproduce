/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://josephchay-folio-2024.vercel.app/'),
  title: {
    template: '%s | Joseph Chay',
    default: 'Joseph Chay • Designer & Developer',
  },
  description:
    'Helping brands thrive in the digital world. Located in Malaysia. Delivering quality software and digital products.',
  generator: 'Joseph Chay',
  applicationName: 'Joseph Chay',
  referrer: 'origin-when-cross-origin',
  keywords: [
    "Design",
    "Developer",
    "Software",
    "Engineer",
    "Digital Products"
  ],
  authors: [
    { name: 'Joseph Chay', url: 'https://www.github.com/josephchay' },
  ],
  creator: 'Joseph Chay',
  publisher: 'Joseph Chay',
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph Chay',
    description:
      'Helping brands thrive in the digital world. Located in Malaysia. Delivering quality software and digital products.',
    siteId: '1467726470533754880',
    creator: '@AliBagheri2079',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://josephchay-folio-2024.vercel.app/screenshot.png',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
