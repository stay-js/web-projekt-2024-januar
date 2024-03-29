import type { Movie } from '~/components/list';
import { movies as creedMovies } from './creed';

export const movies: Movie[] = [
  ...creedMovies,
  {
    img: '/a-megallo.jpg',
    imdb: 'https://www.imdb.com/title/tt2334649',
    title: 'A megálló',
    year: 2013,
  },
  {
    img: '/black-panther.jpg',
    imdb: 'https://www.imdb.com/title/tt1825683',
    title: 'Fekete Párduc',
    year: 2018,
  },
  {
    img: '/judas-es-a-fekete-messias.jpg',
    imdb: 'https://www.imdb.com/title/tt9784798',
    title: 'Júdás és a Fekete Messiás',
    year: 2021,
  },
  {
    img: '/space-jam-2.jpg',
    imdb: 'https://www.imdb.com/title/tt3554046',
    title: 'Space Jam 2.',
    year: 2021,
  },
  {
    img: '/black-panther-2.jpg',
    imdb: 'https://www.imdb.com/title/tt9114286',
    title: 'Fekete Párduc 2.',
    year: 2022,
  },
].sort((a, b) => a.year - b.year);
