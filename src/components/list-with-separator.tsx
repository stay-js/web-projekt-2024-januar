import { Anchor } from './anchor';
import { cn } from '~/utils/cn';

export const ListWithSeparator: React.FC<{
  items: {
    href: string;
    text: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
  }[];
}> = ({ items }) => (
  <ul className="flex flex-col gap-x-3 md:flex-row md:items-center">
    {items.map((item, index) => (
      <li
        key={item.href}
        className={cn(
          index != 0 &&
            'flex items-center gap-3 before:hidden before:h-1 before:w-1 before:rounded-full before:bg-neutral-200 before:md:block',
        )}
      >
        <Anchor href={item.href} target={item.target} className="text-cyan-500">
          {item.text}
        </Anchor>
      </li>
    ))}
  </ul>
);
