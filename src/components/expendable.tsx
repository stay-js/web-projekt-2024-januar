'use client';

import { Anchor } from './anchor';
import { useState } from 'react';

export const Expendable: React.FC = () => {
  const [isExpended, setIsExpended] = useState(false);

  return (
    <div className="flex flex-col gap-2 hyphens-auto">
      <p>
        A <b>Creed: Apollo fia</b> (eredeti cím: <i>Creed</i>) 2015-ös amerikai sport-dráma, melyet{' '}
        <Anchor href="/ryan-coogler">Ryan Coogler</Anchor> rendezett, illetve a forgatókönyvét is ő
        írta, Aaron Covingtonnal közösen. A{' '}
        <Anchor href="https://www.imdb.com/list/ls020255449" target="_blank">
          Rocky-sorozat
        </Anchor>{' '}
        folytatásaként és spin-off-jaként elkészült film szereplője{' '}
        <Anchor href="https://www.imdb.com/name/nm0430107" target="_blank">
          Michael B. Jordan
        </Anchor>
        ,{' '}
        <Anchor href="https://www.imdb.com/name/nm0000230" target="_blank">
          Sylvester Stallone
        </Anchor>
        ,{' '}
        <Anchor href="https://www.imdb.com/name/nm1935086" target="_blank">
          Tessa Thompson
        </Anchor>
        ,{' '}
        <Anchor href="https://www.imdb.com/name/nm0711118" target="_blank">
          Phylicia Rashad
        </Anchor>
        ,{' '}
        <Anchor href="https://www.imdb.com/name/nm6905689" target="_blank">
          Tony Bellew
        </Anchor>
        , és{' '}
        <Anchor href="https://www.imdb.com/name/nm0574615" target="_blank">
          Graham McTavish
        </Anchor>
        .
      </p>

      {isExpended && (
        <>
          <p>
            A Creed forgatása <b>2015. január 19</b>-én kezdődött <b>Liverpoolban</b>, majd{' '}
            <b>Philadelphiában</b>, Rocky Balboa szülővárosában folytatódott.
          </p>
          <p>
            Az Amerikai Egyesült Államokban 2015. november 25-én mutatták be (az 1976-os Rocky-film
            nyitójelenetének negyvenedik évfordulóján), Magyarországon 2016. január 21-én került a
            mozikba, a Fórum Hungary forgalmazásában.
          </p>
          <p>
            A Rocky-sorozat hetedik részeként és a{' '}
            <Anchor href="https://www.imdb.com/title/tt0479143" target="_blank">
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
        </>
      )}

      <button
        className="w-fit font-bold transition-opacity hover:opacity-65"
        onClick={() => setIsExpended((value) => !value)}
      >
        <span>{isExpended ? 'Kevesebb' : 'Több...'}</span>
      </button>
    </div>
  );
};
