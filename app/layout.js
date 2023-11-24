import clsx from 'clsx';
import { GeistSans, GeistMono } from 'geist/font';
import { Analytics } from '@vercel/analytics/react';
import NavBar from '@/app/components/NavBar';
import '@/app/globals.css';

export const metadata = {
  title: {
    default: 'Welcome to the real world!',
    template: '%s | Omer Olcay',
  },
  description: 'Software Engineer & Scrum Master @Insider',
};

export default function Layout({ children }) {
  return (
    <html
      lang='en'
      className={clsx('text-black bg-white dark:text-white dark:bg-[#111010]', GeistSans.variable, GeistMono.variable)}
    >
      <body
        className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'
        suppressHydrationWarning={true}
      >
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <NavBar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
