import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.scss'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B24IKT19 Idavollen.',
  description: 'Bachelorprosjekt ved Høgskolen i Østfold for Sunnaas Sykehus Produsert av: Mats L. Christensen, Håkon S. Strøm og Le Nguyen Gia Tuan ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
