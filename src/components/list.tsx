import Link from 'next/link';
import Image from 'next/image';

export type Cast = {
  img: string;
  imdb: string;
  name: string;
  role: string;
};

export type Movie = {
  img: string;
  imdb: string;
  title: string;
  year: number;
};

export const List: React.FC<{ items: Cast[] | Movie[] }> = ({ items }) => (
  <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((item) => {
      const isMovie = 'title' in item && 'year' in item;

      return (
        <div className="flex flex-col gap-3" key={item.imdb}>
          <Link href={item.imdb} target="_blank" rel="noopener noreferrer">
            <Image
              className="rounded-lg shadow transition-opacity hover:opacity-75"
              src={item.img}
              alt={isMovie ? item.title : item.name}
              width={1280}
              height={isMovie ? 720 : 819}
            />
          </Link>

          {isMovie ? (
            <span className="text-lg font-semibold">
              {item.title} ({item.year})
            </span>
          ) : (
            <div className="flex flex-col">
              <span className="text-lg font-semibold">{item.name}</span>
              <span className="text-neutral-700">{item.role}</span>
            </div>
          )}
        </div>
      );
    })}
  </div>
);
