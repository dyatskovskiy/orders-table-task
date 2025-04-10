import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import React from 'react';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Orders',
  description: 'Orders table',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='w-full h-full'>
      <body
        className={`${montserrat.variable} antialiased w-full h-full text-black dark:text-white bg-white dark:bg-violet-dark`}
      >
        {children}
      </body>
    </html>
  );
}
