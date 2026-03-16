import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SR Infra - Premium Flats & Apartments in Hyderabad',
  description: 'Leading real estate developer offering luxury flats and apartments in Hyderabad, Telangana & Andhra Pradesh. 2BHK, 3BHK, 4BHK homes with world-class amenities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
