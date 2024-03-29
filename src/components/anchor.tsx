import Link from 'next/link';
import { cn } from '~/utils/cn';

export const Anchor: React.FC<{
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
  children: React.ReactNode;
}> = ({ href, target, className = '', children }) => (
  <Link
    className={cn(
      'w-fit bg-gradient-to-r from-neutral-200 to-neutral-900 bg-[length:0%_2px] bg-left-bottom bg-no-repeat font-bold transition-all duration-200 hover:bg-[length:100%_2px]',
      className,
    )}
    href={href}
    target={target}
    {...(target === '_blank' && { rel: 'noopener noreferrer' })}
  >
    {children}
  </Link>
);
