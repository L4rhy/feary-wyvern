import type { Metadata } from 'next'
import { Amatic_SC } from 'next/font/google'
import './globals.css'

const amatic_SC = Amatic_SC({ subsets:["latin"], weight:'400'})

export const metadata: Metadata = {
  title: 'Feary Wyvern Home',
  description: 'Pagina Inicial do VTT Feary Wyvern',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={amatic_SC.className}>{children}</body>
    </html>
  )
}
