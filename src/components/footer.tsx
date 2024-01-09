import { Anchor } from './anchor';
import { SiNextdotjs, SiVercel } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export const Footer: React.FC = () => (
  <footer className="row-start-2 flex flex-col items-center justify-between gap-2 bg-neutral-100 p-6">
    <p>
      Készítette:{' '}
      <Anchor href="https://znagy.hu" target="_blank">
        Nagy Zétény
      </Anchor>
      .
    </p>

    <div className="flex gap-4">
      <Link
        className="translate-opacity hover:opacity-65"
        title="GitHub"
        href="https://github.com/stay-js/web-projekt-2024-januar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={22} />
      </Link>

      <Link
        className="translate-opacity hover:opacity-65"
        title="Next.js"
        href="https://nextjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiNextdotjs size={22} />
      </Link>

      <Link
        className="translate-opacity hover:opacity-65"
        title="Vercel"
        href="https://vercel.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiVercel size={22} />
      </Link>
    </div>
  </footer>
);
