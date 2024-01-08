import { Anchor } from './anchor';

export const Footer: React.FC = () => (
  <footer className="row-start-2 flex flex-col items-center justify-between bg-neutral-100 p-6 md:flex-row">
    <p>
      Készítette: <Anchor href="https://znagy.hu">Nagy Zétény</Anchor>.
    </p>

    <div className="flex gap-2 md:gap-4">
      <Anchor href="https://github.com/stay-js/web-projekt-2024-januar">GitHub</Anchor>
      <Anchor href="https://nextjs.org">Next.js</Anchor>
      <Anchor href="https://vercel.com">Vercel</Anchor>
    </div>
  </footer>
);
