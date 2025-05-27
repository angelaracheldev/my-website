import '@fontsource/source-code-pro/400.css';
import '@fontsource/source-code-pro/700.css';
import './globals.css';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
  
const inter = Source_Code_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Angela Rachel",
  description: "Portfolio and blog of Angela Rachel, a full-stack web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
        <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}