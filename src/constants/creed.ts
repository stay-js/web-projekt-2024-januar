import type { Cast, Movie } from '~/components/list';

export const movies: Movie[] = [
  {
    img: '/creed.jpg',
    imdb: 'https://www.imdb.com/title/tt3076658',
    title: 'Creed',
    year: 2015,
  },
  {
    img: '/creed-2.jpg',
    imdb: 'https://www.imdb.com/title/tt6343314',
    title: 'Creed II.',
    year: 2018,
  },
  {
    img: '/creed-3.jpg',
    imdb: 'https://www.imdb.com/title/tt11145118',
    title: 'Creed III.',
    year: 2023,
  },
];

export const cast: Cast[] = [
  {
    img: '/michael-b-jordan.jpg',
    imdb: 'https://www.imdb.com/name/nm0430107',
    name: 'Michael B. Jordan',
    role: 'Adonis Creed',
  },
  {
    img: '/sylvester-stallone.jpg',
    imdb: 'https://www.imdb.com/name/nm0000230',
    name: 'Sylvester Stallone',
    role: 'Rocky Balboa',
  },
  {
    img: '/tessa-thompson.jpg',
    imdb: 'Tessa Thompson',
    name: 'Michael B. Jordan',
    role: 'Bianca Taylor',
  },
];
