import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from '@/providers';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Tiffin walla',
  description:
    'This web app provides you the all the management feature to track your tifin details.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap'
          rel='stylesheet'
        />
        <link
          type='image/svg+xml'
          rel='icon'
          href='/images/DarkLogo.svg?v=2'
          media='(prefers-color-scheme: light)'
        />
        <link
          rel='icon'
          type='image/svg+xml'
          href='/images/WhiteLogo.svg?v=2'
          media='(prefers-color-scheme: dark)'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
