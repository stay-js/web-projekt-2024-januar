import Image from 'next/image';
import Link from 'next/link';
import { Anchor } from '~/components/anchor';

const Page: React.FC = () => (
  <main>
    <header className="grid min-h-96 place-content-center overflow-hidden bg-[url(/banner.jpg)] bg-cover bg-center bg-no-repeat px-6">
      <h2 className="text-center text-6xl font-bold text-white">Creed: Apollo Fia</h2>
    </header>

    <article className="content">
      <section className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">A filmről</h2>
        <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-2 text-justify">
            <p>
              A <b>Creed: Apollo fia</b> (eredeti cím: <i>Creed</i>) 2015-ös amerikai sport-dráma,
              melyet <Anchor href="/ryan-coogler">Ryan Coogler</Anchor> rendezett, illetve a
              forgatókönyvét is ő írta, Aaron Covingtonnal közösen. A{' '}
              <Anchor href="https://www.imdb.com/list/ls020255449/" target="_blank">
                Rocky-sorozat
              </Anchor>{' '}
              folytatásaként és spin-off-jaként elkészült film szereplője{' '}
              <Anchor href="https://www.imdb.com/name/nm0430107/" target="_blank">
                Michael B. Jordan
              </Anchor>
              ,{' '}
              <Anchor href="https://www.imdb.com/name/nm0000230/" target="_blank">
                Sylvester Stallone
              </Anchor>
              ,{' '}
              <Anchor href="https://www.imdb.com/name/nm1935086/" target="_blank">
                Tessa Thompson
              </Anchor>
              ,{' '}
              <Anchor href="https://www.imdb.com/name/nm0711118/" target="_blank">
                Phylicia Rashad
              </Anchor>
              ,{' '}
              <Anchor href="https://www.imdb.com/name/nm6905689/" target="_blank">
                Tony Bellew
              </Anchor>
              , és{' '}
              <Anchor href="https://www.imdb.com/name/nm0574615/" target="_blank">
                Graham McTavish
              </Anchor>
              .
            </p>
            <p>
              A Creed forgatása <b>2015. január 19</b>-én kezdődött <b>Liverpoolban</b>, majd{' '}
              <b>Philadelphiában</b>, Rocky Balboa szülővárosában folytatódott.
            </p>
            <p>
              Az Amerikai Egyesült Államokban 2015. november 25-én mutatták be (az 1976-os
              Rocky-film nyitójelenetének negyvenedik évfordulóján), Magyarországon 2016. január
              21-én került a mozikba, a Fórum Hungary forgalmazásában.
            </p>
            <p>
              A Rocky-sorozat hetedik részeként és a{' '}
              <Anchor href="https://www.imdb.com/title/tt0479143/" target="_blank">
                Rocky Balboa
              </Anchor>{' '}
              folytatásaként a Creed pozitív értékeléseket kapott a kritikusoktól, akik a sorozat
              egyik legjobb részének tartották a filmet. Alakításáért Stallone{' '}
              <Anchor href="https://hu.wikipedia.org/wiki/Oscar-d%C3%ADj" target="_blank">
                Oscar-díj
              </Anchor>{' '}
              <b>jelölést kapott</b>, mint{' '}
              <Anchor
                href="https://hu.wikipedia.org/wiki/Oscar-d%C3%ADj_a_legjobb_f%C3%A9rfi_mell%C3%A9kszerepl%C5%91nek"
                target="_blank"
              >
                legjobb férfi mellékszereplő
              </Anchor>{' '}
              (az első Rocky-film óta először jelölték a színészt Oscarra), valamint számos egyéb
              díjat és jelölést is elnyert, köztük a{' '}
              <Anchor
                href="https://hu.wikipedia.org/wiki/Oscar-d%C3%ADj_a_legjobb_f%C3%A9rfi_mell%C3%A9kszerepl%C5%91nek"
                target="_blank"
              >
                legjobb férfi mellékszereplőnek
              </Anchor>{' '}
              járó{' '}
              <Anchor href="https://hu.wikipedia.org/wiki/Golden_Globe-d%C3%ADj" target="_blank">
                Golden Globe
              </Anchor>
              -díjat.
            </p>
          </div>

          <iframe
            className="aspect-video w-full rounded-lg"
            src="https://www.youtube.com/embed/Uv554B7YHk4?si=F19_DExiDEPlSTLS"
            title="Creed: Apollo fia (Előzetes)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Szereplők</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <Link href="https://www.imdb.com/name/nm0430107/" target="_blank">
              <Image
                className="rounded-lg"
                src="/michael-b-jordan.jpg"
                alt="Michael B. Jordan"
                width={1920}
                height={1228}
              />
            </Link>

            <div className="flex flex-col">
              <span className="text-lg font-semibold">Michael B. Jordan</span>
              <span className="text-neutral-700">Adonis Creed</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="https://www.imdb.com/name/nm0000230/" target="_blank">
              <Image
                className="rounded-lg"
                src="/sylvester-stallone.jpg"
                alt="Sylvester Stallone"
                width={1920}
                height={1228}
              />
            </Link>

            <div className="flex flex-col">
              <span className="text-lg font-semibold">Sylvester Stallone</span>
              <span className="text-neutral-700">Rocky Balboa</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="https://www.imdb.com/name/nm1935086/" target="_blank">
              <Image
                className="rounded-lg"
                src="/tessa-thompson.jpg"
                alt="Tessa Thompson"
                width={1920}
                height={1228}
              />
            </Link>

            <div className="flex flex-col">
              <span className="text-lg font-semibold">Tessa Thompson</span>
              <span className="text-neutral-700">Bianca Taylor</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Filmográfia</h2>
        <div className="grid gap-4 md:grid-cols-3">
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
