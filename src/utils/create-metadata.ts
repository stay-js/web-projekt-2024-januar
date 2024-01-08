import type { Metadata } from 'next';

export const createMetadata = ({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata => ({
  metadataBase: new URL('https://web-januar.znagy.hu'),

  authors: [{ name: 'Zétény Nagy', url: 'https://znagy.hu' }],
  creator: 'Zétény Nagy',

  keywords: [
    'creed',
    'creed-2',
    'creed-3',
    'creed II',
    'creed II',
    'michael b. jordan',
    'sylvester stallone',
    'ryan coogler',
    'tessa thompson',
    'dolph lundgren',
    'florian munteanu',
    'david callaham',
    'steven caple jr.',
    'steven caple',
    'black panther',
    'black-panther',
    'blackpanther',
    'marvel',
    'marvel cinematic universe',
    'web',
    'projekt',
    '2024',
    'web projekt 2024',
    'webprojekt2024',
  ],

  title: `${title} - Web Projekt 2024`,
  description,

  applicationName: 'Web Projekt 2024',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: `https://znagy.hu${path}`,
    title: `${title} - Web Projekt 2024`,
    description,
    siteName: 'Web Projekt 2024',
    locale: 'hu_HU',
  },

  twitter: {
    card: 'summary',
    title: `${title} - Web Projekt 2024`,
    description,
  },
});
