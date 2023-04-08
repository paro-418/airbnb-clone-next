'use client';
import './globals.css';
import { Nunito } from 'next/font/google';
import NavBar from './components/navbar/NavBar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/Modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={font.className}>
        <ToasterProvider />
        <ClientOnly>
          <RegisterModal />
          <NavBar />0
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
