import Image from 'next/image';
import Link from 'next/link';
import { Anchor } from '~/components/anchor';
import { createMetadata } from '~/utils/create-metadata';

export const metadata = createMetadata({
  path: '/ryan-coogler',
  title: 'Ryan Coogler munkássága',
  description:
    'Ryan Kyle Coogler (Oakland, Kalifornia, 1986. május 23. -) amerikai filmrendező, filmproducer és forgatókönyvíró.',
});

const Page: React.FC = () => (
  <main>
    <header className="bg-neutral-100 px-6 py-16">
      <h1 className="text-center text-5xl font-bold">Ryan Coogler</h1>
    </header>

    <article className="content">
      <section className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Élete</h2>

        <div className="grid gap-6 lg:grid-cols-[1fr_4fr]">
          <Image
            className="rounded-lg"
            src="/ryan-coogler.jpg"
            alt="Ryan Coogler"
            width={791}
            height={1024}
          />
          <div className="flex flex-col gap-2 text-justify">
            <p>
              <b>Ryan Kyle Coogler</b> (Oakland, Kalifornia, 1986. május 23. -) amerikai
              filmrendező, filmproducer és forgatókönyvíró.
            </p>
            <p>
              Első nagyjátékfilmje,{' '}
              <Anchor href="https://www.imdb.com/title/tt2334649/" target="_blank">
                A megálló (2013)
              </Anchor>{' '}
              kritikai sikert aratott a 2013-as{' '}
              <Anchor
                href="https://hu.wikipedia.org/wiki/Sundance_Filmfesztiv%C3%A1l"
                target="_blank"
              >
                Sundance Filmfesztiválon
              </Anchor>
              . 2015-ben társ-forgatókönyvíróként és rendezőként vett részt a hetedik Rocky-film, a{' '}
              <Anchor href="https://www.imdb.com/title/tt3076658/" target="_blank">
                Creed: Apollo fia
              </Anchor>{' '}
              című filmdráma elkészítésében. 2018-ban megrendezte a{' '}
              <Anchor href="https://hu.wikipedia.org/wiki/Marvel-moziuniverzum" target="_blank">
                Marvel-moziuniverzumban
              </Anchor>{' '}
              játszódó{' '}
              <Anchor href="https://www.imdb.com/title/tt1825683/" target="_blank">
                Fekete Párduc
              </Anchor>{' '}
              című szuperhősfilmet, mely az amerikai filmtörténelem harmadik legnagyobb jegyeladási
              bevételét termelte.
            </p>
            <p>
              Coogler filmjeit jelentős kritikai és pénzügyi sikerek kísérik. 2013-ban a rendező
              felkerült a Time magazin „harminc, harminc éves kor alatti személy, aki megváltoztatja
              a világot” listájára. A kritikusok méltatták Coogler munkáit, melyekben gyakran
              mellőzött kultúrákat és személyeket - jellemzően afroamerikaiakat - állít a
              középpontba.
            </p>
            <p>
              Rendszeresen dolgozik együtt{' '}
              <Anchor href="https://www.imdb.com/name/nm0000230/" target="_blank">
                Michael B. Jordan
              </Anchor>{' '}
              színésszel és{' '}
              <Anchor href="https://www.imdb.com/name/nm3234869/" target="_blank">
                Ludwig Göransson
              </Anchor>{' '}
              zeneszerzővel. Mindketten közreműködtek Coogler eddigi összes filmjében.
            </p>

            <p className="mt-6">
              <b>1986. május 23</b>-án született a kaliforniai <b>Oaklandben</b>. Édesanyja, Joselyn
              (születési nevén Thomas) közösségi szervező, édesapja, Ira Coogler pedig fiatalkorúak
              nevelőintézetének nevelési tanácsadója. Mindkét szülő a Hayward-i Kaliforniai Állami
              Egyetemen végzett. Két testvére van, Noah és Keenan. Nagybátyja, Clarence Thomas
              harmadik generációs oaklandi kikötőmunkás, és a Nemzetközi Kikötő- és
              Raktárszakszervezet korábbi titkára.
            </p>
            <p>
              Coogler nyolcéves koráig Oaklandben élt, mielőtt a család a kaliforniai Richmondba
              költözött. Fiatal korában atlétikázott és futballozott. Egy katolikus
              magángimnáziumba, a kaliforniai Berkeleyben található Saint Mary&lsquo;s College High
              Schoolba járt, ahol kiválóan teljesített matematikából és természettudományokból.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Filmei</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <Link href="https://www.imdb.com/title/tt2334649/" target="_blank">
              <Image
                className="rounded-lg"
                src="/a-megallo.jpg"
                alt="A megálló"
                width={1600}
                height={900}
              />
            </Link>

            <span className="text-lg font-semibold">A megálló (2013)</span>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="https://www.imdb.com/title/tt3076658/" target="_blank">
              <Image
                className="rounded-lg"
                src="/creed.jpg"
                alt="Creed"
                width={1920}
                height={1080}
              />
            </Link>

            <span className="text-lg font-semibold">Creed (2015)</span>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="https://www.imdb.com/title/tt6343314/" target="_blank">
              <Image
                className="rounded-lg"
                src="/creed-2.jpg"
                alt="Creed II."
                width={1920}
                height={1080}
              />
            </Link>

            <span className="text-lg font-semibold">Creed II. (2018)</span>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="https://www.imdb.com/title/tt1825683/" target="_blank">
              <Image
                className="rounded-lg"
                src="/black-panther.jpg"
                alt="Fekete Párduc"
                width={1200}
                height={675}
              />
            </Link>

            <span className="text-lg font-semibold">Fekete Párduc (2018)</span>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="https://www.imdb.com/title/tt9784798/" target="_blank">
              <Image
                className="rounded-lg"
                src="/judas-es-a-fekete-messias.jpg"
                alt="Júdás és a Fekete Messiás"
                width={1707}
                height={960}
              />
            </Link>

            <span className="text-lg font-semibold">Júdás és a Fekete Messiás (2021)</span>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="https://www.imdb.com/title/tt3554046/" target="_blank">
              <Image
                className="rounded-lg"
                src="/space-jam-2.jpg"
                alt="Space Jam 2."
                width={1920}
                height={1080}
              />
            </Link>

            <span className="text-lg font-semibold">Space Jam 2. (2021)</span>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="https://www.imdb.com/title/tt9114286/" target="_blank">
              <Image
                className="rounded-lg"
                src="/black-panther-2.jpg"
                alt="Fekete Párduc"
                width={1280}
                height={720}
              />
            </Link>

            <span className="text-lg font-semibold">Fekete Párduc 2. (2022)</span>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="https://www.imdb.com/title/tt11145118/" target="_blank">
              <Image
                className="rounded-lg"
                src="/creed-3.jpg"
                alt="Creed III."
                width={1920}
                height={1080}
              />
            </Link>

            <span className="text-lg font-semibold">Creed III. (2023)</span>
          </div>
        </div>
      </section>
    </article>
  </main>
);

export default Page;
