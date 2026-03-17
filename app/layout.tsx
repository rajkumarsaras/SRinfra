import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SR Infra - Construction Company in Hyderabad | Residential Villas & Apartments',
  description: 'SR Infra is a dynamic construction company in Hyderabad specializing in residential construction, luxury villas, and premium apartments. Established by experienced Civil Engineers with 20+ years expertise. Building sustainable and valuable spaces across Telangana & Andhra Pradesh.',
  keywords: 'construction company Hyderabad, residential construction, luxury villas Hyderabad, apartments Hyderabad, civil engineers, sustainable construction, Madhapur projects, Kondapur apartments, Patancheru villas',
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
