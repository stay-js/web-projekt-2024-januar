'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '~/utils/cn';
import { navItems } from '~/constants/nav-items';

export const Navigation: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const pathname = usePathname();

  const handleClose = () => {
    setIsToggled(false);

    document.body.style.overflowY = 'scroll';

    const main = document.querySelector('main');
    if (main) main.ariaHidden = 'false';
  };

  const handleToggle = () => {
    setIsToggled((value) => {
      document.body.style.overflowY = value ? 'scroll' : 'hidden';

      const main = document.querySelector('main');
      if (main) main.ariaHidden = value ? 'true' : 'false';

      return !value;
    });
  };

  return (
    <nav className="flex h-16 w-full select-none items-center justify-between px-6">
      <Link href="/" className="text-2xl font-bold">
        Web Projekt
      </Link>

      <button
        className="z-10 h-6 w-6 lg:hidden"
        title={`Menü ${isToggled ? 'bezárása' : 'megnyitása'}`}
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
          'fixed left-0 top-16 h-[calc(100vh-4rem)] w-full overflow-y-auto bg-white lg:static lg:flex lg:h-fit lg:w-fit',
          !isToggled && 'hidden',
        )}
      >
        <ul className="flex flex-col gap-8 px-6 pb-20 pt-4 lg:w-fit lg:flex-row lg:gap-1 lg:p-0">
          {navItems.map(({ path, name }) => (
            <li
              key={path}
              className="relative after:absolute after:-bottom-4 after:h-px after:w-full after:bg-neutral-300 lg:after:hidden"
            >
              <Link
                className={cn(
                  'flex items-center gap-2 font-bold text-black transition-colors lg:static lg:rounded-md lg:px-3 lg:py-2 lg:font-medium lg:hover:bg-neutral-300',
                  path !== pathname && 'lg:text-neutral-600',
                )}
                onClick={handleClose}
                href={path}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
