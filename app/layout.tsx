import '@coinbase/onchainkit/styles.css';
import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { helvetica, helveticaNeue } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Based Mints',
  description: 'Iconomic Moments is a collection of moments that have shaped the history of Base.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`
      ${Object.values(helvetica).map(font => font.variable).join(' ')}
      ${Object.values(helveticaNeue).map(font => font.variable).join(' ')}
    `}>
      <body className="bg-background dark">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
