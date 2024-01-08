import type { Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { cn } from '~/utils/cn';
import { Navigation } from '~/components/navigation';
import { Footer } from '~/components/footer';

import '~/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="hu" className="antialiased">
    <body
      className={cn(
        GeistSans.className,
        'grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] overflow-x-hidden',
      )}
    >
      <div>
        <Navigation />
        {children}
      </div>

      <Footer />
    </body>
  </html>
);

export default RootLayout;
