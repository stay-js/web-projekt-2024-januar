import Image from 'next/image';
import { Anchor } from '~/components/anchor';
import { Chip } from '~/components/chip';
import { List } from '~/components/list';
import { Expendable } from '~/components/expendable';
import { cast, movies } from '~/constants/creed';
import { createMetadata } from '~/utils/create-metadata';

export const metadata = createMetadata({
  path: '',
  title: 'Creed: Apollo fia',
  description:
    'A Creed: Apollo fia 2015-ös amerikai sport-dráma, melyet Ryan Coogler rendezett, illetve a forgatókönyvét is ő írta, Aaron Covingtonnal közösen. A Rocky-sorozat folytatásaként és spin-off-jaként elkészült film szereplője Michael B. Jordan, Sylvester Stallone, Tessa Thompson, Phylicia Rashad, Tony Bellew, és Graham McTavish.',
});

const Separator: React.FC = () => (
  <div className="hidden h-1 w-1 rounded-full bg-neutral-200 md:block" />
);

const Page: React.FC = () => (
  <main>
    <header className="bg-neutral-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 text-white">
        <div className="flex w-full flex-col gap-2">
          <h1 className="text-3xl font-bold md:text-5xl">Creed: Apollo Fia</h1>

          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <ul className="flex items-center gap-3">
              <li>2015</li>

              <div className="h-1 w-1 rounded-full bg-neutral-200" />

              <li>13+</li>

              <div className="h-1 w-1 rounded-full bg-neutral-200" />

              <li>2 óra 13 perc</li>
            </ul>

            <div className="flex gap-2">
              <Chip href="https://www.imdb.com/title/tt3076658" color="#f5c517">
                IMDb
              </Chip>
              <Chip
                href="https://port.hu/adatlap/film/tv/creed-apollo-fia-creed/movie-166783"
                color="#ef3a39"
              >
                PORT.hu
              </Chip>
              <Chip href="https://www.themoviedb.org/movie/312221-creed" color="#06b6d4">
                TMDB
              </Chip>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <Image
            src="/creed-banner.jpg"
            className="hidden w-60 lg:block"
            width={720}
            height={960}
            alt="Creed Banner"
          />

          <iframe
            className="aspect-video w-full lg:aspect-auto"
            src="https://www.youtube.com/embed/Uv554B7YHk4?si=F19_DExiDEPlSTLS"
            title="Creed: Apollo fia (Előzetes)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-x-6 gap-y-2 text-lg md:flex-row">
            <span className="font-bold">Rendező:</span>
            <Anchor href="/ryan-coogler" className="text-cyan-500">
              Ryan Coogler
            </Anchor>
          </div>

          <hr className="border-gray-600" />

          <div className="flex flex-col gap-x-6 gap-y-2 text-lg md:flex-row">
            <span className="font-bold">Forgatókönyvírók:</span>

            <div className="flex flex-col gap-x-3 md:flex-row md:items-center">
              <Anchor href="/ryan-coogler" className="text-cyan-500">
                Ryan Coogler
              </Anchor>

              <Separator />

              <Anchor
                href="https://www.imdb.com/name/nm2128400"
                target="_blank"
                className="text-cyan-500"
              >
                Aaron Covington
              </Anchor>

              <Separator />

              <Anchor
                href="https://www.imdb.com/name/nm0000230"
                target="_blank"
                className="text-cyan-500"
              >
                Sylvester Stallone
              </Anchor>
            </div>
          </div>
        </div>

        <hr className="border-gray-600" />

        <div className="flex flex-col gap-x-6 gap-y-2 text-lg md:flex-row">
          <span className="font-bold">Főszereplők:</span>

          <div className="flex flex-col gap-x-3 md:flex-row md:items-center">
            <Anchor
              href="https://www.imdb.com/name/nm0430107"
              target="_blank"
              className="text-cyan-500"
            >
              Michael B. Jordan
            </Anchor>

            <Separator />

            <Anchor
              href="https://www.imdb.com/name/nm0000230"
              target="_blank"
              className="text-cyan-500"
            >
              Sylvester Stallone
            </Anchor>

            <Separator />

            <Anchor
              href="https://www.imdb.com/name/nm1935086"
              target="_blank"
              className="text-cyan-500"
            >
              Tessa Thompson
            </Anchor>
          </div>
        </div>
      </div>
    </header>

    <article className="container mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-24 pt-12">
      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold md:text-3xl">A filmről</h2>
        <Expendable />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold md:text-3xl">Szereplők</h2>
        <List items={cast} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold md:text-3xl">Filmográfia</h2>
        <List items={movies} />
      </section>

      <section className="flex w-full flex-col gap-2">
        <h2 className="text-2xl font-bold md:text-3xl">Források</h2>

        <ul className="list-inside list-disc pl-2">
          <li>
            Creed:{' '}
            <Anchor href="https://hu.wikipedia.org/wiki/Creed:_Apollo_fia" target="_blank">
              Wikipédia
            </Anchor>
          </li>
          <li>
            Ryan Coogler:{' '}
            <Anchor href="https://hu.wikipedia.org/wiki/Ryan_Coogler" target="_blank">
              Wikipédia
            </Anchor>
          </li>
          <li>
            <Anchor href="https://imdb.com" target="_blank">
              IMDb
            </Anchor>
          </li>
        </ul>
      </section>
    </article>
  </main>
);

export default Page;
