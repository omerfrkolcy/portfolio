import clsx from 'clsx';
import { GeistSans, GeistMono } from 'geist/font';
import Sidebar from '@/app/components/Sidebar';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import '@/app/globals.css';

export const metadata = {
  metadataBase: new URL('https://localhost'),
  title: {
    default: 'Welcome to the real world!',
    template: '%s | Omer Olcay',
  },
  description: 'Front-End Engineer.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={clsx('text-black bg-white dark:text-white dark:bg-[#111010]', GeistSans.variable, GeistMono.variable)}
    >
      <body className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <Sidebar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
