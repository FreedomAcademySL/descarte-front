import type { Metadata } from 'next';
import { dir } from 'i18next';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import '../globals.css';
import { LngProps, languages } from '../i18n/settings';
import { ColorThemeProvider, LoggedInUserProvider } from '@/context';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const ITCFont = localFont({
  src: [
    {
      path: '../../../public/fonts/ITC-Avant-Garde-Gothic-Std.otf',
      weight: '400',
    },
  ],
  variable: '--font-ITC',
});

export const metadata: Metadata = {
  title: 'Freedom Academy',
  description: 'Freedom Academy web site',
  icons: {
    icon: '/favicon.ico',
  },
};

export async function generateStaticParams(): Promise<LngProps[]> {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: JSX.Element;
  params: LngProps;
}>): JSX.Element {
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <head />
      <body
        className={`${montserrat.className} ${ITCFont.className} `}
        suppressHydrationWarning={true}
      >
        <div>
          <ColorThemeProvider>
            <LoggedInUserProvider>{children}</LoggedInUserProvider>
          </ColorThemeProvider>
        </div>
      </body>
    </html>
  );
}
