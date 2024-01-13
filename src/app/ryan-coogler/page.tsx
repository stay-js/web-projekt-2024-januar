import Image from 'next/image';
import { Anchor } from '~/components/anchor';
import { List } from '~/components/list';
import { movies } from '~/constants/ryan-coogler-movies';
import { createMetadata } from '~/utils/create-metadata';

export const metadata = createMetadata({
  path: '/ryan-coogler',
  title: 'Ryan Coogler munkássága',
  description:
    'Ryan Kyle Coogler (Oakland, Kalifornia, 1986. május 23. -) amerikai filmrendező, filmproducer és forgatókönyvíró.',
});

const Page: React.FC = () => (
  <main>
    <header className="bg-neutral-100 px-6 py-16 shadow">
      <h1 className="text-center text-3xl font-bold md:text-5xl">Ryan Coogler</h1>
    </header>

    <article className="container mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-24 pt-12">
      <section className="flex flex-col gap-3">
        <div className="grid gap-6 lg:grid-cols-[4fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Élete</h2>

            <div className="flex flex-col gap-2 hyphens-auto">
              <p>
                <Anchor href="https://www.imdb.com/name/nm3363032" target="_blank">
                  Ryan Kyle Coogler
                </Anchor>{' '}
                (Oakland, Kalifornia, 1986. május 23. -) amerikai filmrendező, filmproducer és
                forgatókönyvíró.
              </p>
              <p>
                Első nagyjátékfilmje,{' '}
                <Anchor href="https://www.imdb.com/title/tt2334649" target="_blank">
                  A megálló (2013)
                </Anchor>{' '}
                kritikai sikert aratott a 2013-as{' '}
                <Anchor
                  href="https://hu.wikipedia.org/wiki/Sundance_Filmfesztiv%C3%A1l"
                  target="_blank"
                >
                  Sundance Filmfesztiválon
                </Anchor>
                . 2015-ben társ-forgatókönyvíróként és rendezőként vett részt a hetedik Rocky-film,
                a{' '}
                <Anchor href="https://www.imdb.com/title/tt3076658" target="_blank">
                  Creed: Apollo fia
                </Anchor>{' '}
                című filmdráma elkészítésében. 2018-ban megrendezte a{' '}
                <Anchor href="https://hu.wikipedia.org/wiki/Marvel-moziuniverzum" target="_blank">
                  Marvel-moziuniverzumban
                </Anchor>{' '}
                játszódó{' '}
                <Anchor href="https://www.imdb.com/title/tt1825683" target="_blank">
                  Fekete Párduc
                </Anchor>{' '}
                című szuperhősfilmet, mely az amerikai filmtörténelem harmadik legnagyobb
                jegyeladási bevételét termelte.
              </p>
              <p>
                Coogler filmjeit jelentős kritikai és pénzügyi sikerek kísérik. 2013-ban a rendező
                felkerült a Time magazin „harminc, harminc éves kor alatti személy, aki
                megváltoztatja a világot” listájára. A kritikusok méltatták Coogler munkáit,
                melyekben gyakran mellőzött kultúrákat és személyeket - jellemzően afroamerikaiakat
                - állít a középpontba.
              </p>
              <p>
                Rendszeresen dolgozik együtt{' '}
                <Anchor href="https://www.imdb.com/name/nm0430107" target="_blank">
                  Michael B. Jordan
                </Anchor>{' '}
                színésszel és{' '}
                <Anchor href="https://www.imdb.com/name/nm3234869" target="_blank">
                  Ludwig Göransson
                </Anchor>{' '}
                zeneszerzővel. Mindketten közreműködtek Coogler eddigi összes filmjében.
              </p>
              <p>
                <b>1986. május 23</b>-án született a kaliforniai <b>Oaklandben</b>. Édesanyja,
                Joselyn (születési nevén Thomas) közösségi szervező, édesapja, Ira Coogler pedig
                fiatalkorúak nevelőintézetének nevelési tanácsadója. Mindkét szülő a Hayward-i
                Kaliforniai Állami Egyetemen végzett. Két testvére van, Noah és Keenan. Nagybátyja,
                Clarence Thomas harmadik generációs oaklandi kikötőmunkás, és a Nemzetközi Kikötő-
                és Raktárszakszervezet korábbi titkára.
              </p>
              <p>
                Coogler nyolcéves koráig Oaklandben élt, mielőtt a család a kaliforniai Richmondba
                költözött. Fiatal korában atlétikázott és futballozott. Egy katolikus
                magángimnáziumba, a kaliforniai Berkeleyben található Saint Mary&lsquo;s College
                High Schoolba járt, ahol kiválóan teljesített matematikából és
                természettudományokból.
              </p>
            </div>
          </div>

          <div className="flex h-fit flex-col border">
            <span className="p-4 text-center text-lg font-bold">Ryan Coogler</span>

            <Image
              className="mx-auto w-full sm:w-3/5 lg:w-full"
              src="/ryan-coogler.jpg"
              alt="Ryan Coogler"
              width={791}
              height={1024}
            />

            <ul className="flex flex-col gap-2 p-4">
              <li>
                <b>Született:</b> Oakland, Kalifornia, 1986. május 23.
              </li>
              <li>
                <b>Állampolgársága:</b> amerikai
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold md:text-3xl">Filmei</h2>
        <List items={movies} />
      </section>
    </article>
  </main>
);

export default Page;
