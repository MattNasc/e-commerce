import { ClerkProvider } from "@clerk/nextjs/app-beta";
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import { ptBR } from "@clerk/localizations";
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-br">
        <body className={clsx(inter.className, 'bg-slate-700')}>
          <Navbar />
          <main className=' h-screen p-16'>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}