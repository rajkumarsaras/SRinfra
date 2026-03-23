import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: 'SR Infra - Premium Construction Company in Hyderabad | Luxury Villas & Residences',
  description: 'SR Infra is a premier construction company in Hyderabad specializing in luxury villas, premium residences and gated communities. Established by experienced Civil Engineers with 25+ years expertise. Building sustainable and valuable spaces across Telangana & Andhra Pradesh.',
  keywords: 'construction company Hyderabad, luxury villas Hyderabad, premium residences, gated community Hyderabad, civil engineers, sustainable construction, Gopanpalli villas, Madhapur apartments, Kondapur residences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}
