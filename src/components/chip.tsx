import Link from 'next/link';

export const Chip: React.FC<{
  children: React.ReactNode;
  color: string;
  href: string;
}> = ({ children, color, href }) => (
  <Link
    className="flex w-fit items-center gap-2 rounded-full border-2 border-current px-4 py-1 ring-current transition hover:bg-neutral-200 hover:ring dark:hover:bg-neutral-800"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color }}
  >
    <div className="h-2 w-2 rounded-full bg-current" />
    <span className="font-mono text-xs font-medium text-neutral-600 dark:text-neutral-200">
      {children}
    </span>
  </Link>
);
