import Link from 'next/link';
import Image from 'next/image';

export type Movie = {
  img: string;
  imdb: string;
  title: string;
  year: number;
};

export const Movies: React.FC<{ movies: Movie[] }> = ({ movies }) => (
  <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
    {movies.map(({ img, imdb, title, year }) => (
      <div className="flex flex-col gap-3" key={imdb}>
        <Link href={imdb} target="_blank" rel="noopener noreferrer">
          <Image
            className="rounded-lg transition-opacity hover:opacity-75"
            src={img}
            alt={title}
            width={1280}
            height={720}
          />
        </Link>

        <span className="text-lg font-semibold">
          {title} ({year})
        </span>
      </div>
    ))}
  </div>
);
