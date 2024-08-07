import type { Metadata, Viewport } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout/Layout';
import StoreProvider from '@/components/Layout/Providers/StoreProvider';
import { Toaster } from '@/components/ui/toaster';
import RQueryProvider from '@/components/Layout/Providers/QueryProvider';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ivgam Blog',
  description:
    'Здесь я делюсь своими историями, идеями и приключениями. Но что еще круче – вы тоже можете стать частью этого процесса! Предложите свою идею для статьи, и мы с удовольствием воплотим ее в жизнь',
  creator: 'Artyom Galay',
  keywords: ['блог', 'веб-разработка', 'ivgam', 'мысли'],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://ivgamblogserver.online',
    title: 'Ivgam Blog',
    description:
      'Личный блог, делящийся мыслями, статьями и руководствами по веб-разработке и многому другому.',
    siteName: 'Ivgam Blog',
    images: [
      {
        url: '/assets/default-image.png', // Замените на URL вашего изображения по умолчанию
        width: 800,
        height: 600,
        alt: 'Ivgam Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ivgam', // Замените на ваш Twitter-аккаунт
    creator: '@ivgam',
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RQueryProvider>
      <StoreProvider>
        <html lang="en">
          <body className={nunito.className}>
            <Layout>{children}</Layout>
            <Toaster />
          </body>
        </html>
      </StoreProvider>
    </RQueryProvider>
  );
}
