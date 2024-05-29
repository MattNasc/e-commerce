import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'
import clsx from 'clsx'

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
    <html lang="en">
      <body className={clsx(inter.className, 'bg-slate-700')}>
        <Navbar/>
        <main className=' h-screen p-16'>
          {children}
        </main>
      </body>
    </html>
  )
}