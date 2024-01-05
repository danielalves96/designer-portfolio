import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'l0la0liveira Design',
  description: 'Web Designer Portifolio',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: 'http://lolaoliveira.art/images/projects/portifolio.jpg',
        width: 1750,
        height: 1125,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
