import type { Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';

import '~/styles/style.scss';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="hu">
    <body className={GeistSans.className}>{children}</body>
  </html>
);

export default RootLayout;
