import { Anchor } from './anchor';

export const Footer: React.FC = () => (
  <footer className="row-start-2 flex flex-col items-center justify-between bg-neutral-100 p-6 md:flex-row">
    <p>
      Készítette:{' '}
      <Anchor href="https://znagy.hu" target="_blank">
        Nagy Zétény
      </Anchor>
      .
    </p>

    <div className="flex gap-2 md:gap-4">
      <Anchor href="https://github.com/stay-js/web-projekt-2024-januar" target="_blank">
        GitHub
      </Anchor>
      <Anchor href="https://nextjs.org" target="_blank">
        Next.js
      </Anchor>
      <Anchor href="https://vercel.com" target="_blank">
        Vercel
      </Anchor>
    </div>
  </footer>
);
