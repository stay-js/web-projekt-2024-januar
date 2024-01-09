'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '~/utils/cn';
import { navItems } from '~/constants/nav-items';

export const Navigation: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const pathname = usePathname();

  const handleClose = () => {
    setIsToggled(false);
    document.body.style.overflowY = 'scroll';
  };

  const handleToggle = () => {
    setIsToggled((value) => {
      value
        ? (document.body.style.overflowY = 'scroll')
        : (document.body.style.overflowY = 'hidden');

      return !value;
    });
  };

  return (
    <nav className="flex w-full select-none items-center justify-between px-6 py-4">
      <Link href="/" className="text-2xl font-bold">
        Creed
      </Link>

      <button
        className="z-10 h-6 w-6 lg:hidden"
        title="Menü megnyitása"
        type="button"
        onClick={handleToggle}
      >
        <span
          className={cn(
            'absolute block h-0.5 w-6 bg-current transition-all duration-300',
            isToggled ? 'rotate-45' : '-translate-y-2',
          )}
        />
        <span
          className={cn(
            'absolute block h-0.5 w-6 bg-current transition-all duration-300',
            isToggled && 'opacity-0',
          )}
        />
        <span
          className={cn(
            'absolute block h-0.5 w-6 bg-current transition-all duration-300',
            isToggled ? '-rotate-45' : 'translate-y-2',
          )}
        />
      </button>

      <div
        className={cn(
          'fixed inset-0 flex items-center justify-end bg-[hsl(240,_100%,_5%,_60%)] lg:static lg:flex lg:h-fit lg:w-fit lg:bg-transparent',
          !isToggled && 'hidden',
        )}
      >
        <ul className="flex h-screen w-9/12 flex-col gap-6 bg-white px-6 pt-32 lg:h-fit lg:w-fit lg:flex-row lg:gap-0 lg:p-0">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <a
                className={cn(
                  'text-lg text-neutral-900 transition-colors hover:text-neutral-500 lg:rounded-md lg:px-3 lg:py-2 lg:text-base lg:font-semibold lg:after:hidden lg:hover:bg-neutral-300 lg:hover:text-neutral-800',
                  path !== pathname && 'lg:text-neutral-600',
                )}
                onClick={handleClose}
                href={path}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
