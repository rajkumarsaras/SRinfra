import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import StructuredData from './structured-data'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: 'SR Infra - Leading Construction Company in Hyderabad | Luxury Villas, Apartments & Civil Engineering',
  description: 'SR Infra: Premier construction company in Hyderabad, Telangana with 25+ years experience. Expert civil engineers specializing in luxury villas, premium apartments, gated communities, and residential projects across Hyderabad, Gopanpalli, Madhapur, Kondapur, Nallagandla. Sustainable construction, quality engineering, and timely delivery.',
  keywords: [
    'construction company Hyderabad',
    'civil engineering Hyderabad',
    'luxury villas Hyderabad',
    'premium apartments Hyderabad',
    'gated community Hyderabad',
    'residential construction Telangana',
    'construction company Telangana',
    'civil engineers Hyderabad',
    'building construction Hyderabad',
    'villa construction Gopanpalli',
    'apartments Madhapur',
    'residential projects Kondapur',
    'construction Nallagandla',
    'sustainable construction Hyderabad',
    'quality construction Telangana',
    'experienced civil engineers',
    'SR Infra Hyderabad',
    'construction services Hyderabad',
    'real estate construction Hyderabad',
    'infrastructure development Telangana',
    'Andhra Pradesh construction',
    'luxury home builders Hyderabad',
    'residential builders Hyderabad',
    'construction contractors Hyderabad',
  ].join(', '),
  authors: [{ name: 'SR Infra' }],
  creator: 'SR Infra',
  publisher: 'SR Infra',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://srinfraco.com',
    siteName: 'SR Infra',
    title: 'SR Infra - Leading Construction Company in Hyderabad | Luxury Villas & Civil Engineering',
    description: 'Premier construction company in Hyderabad with 25+ years experience. Expert civil engineers specializing in luxury villas, apartments, and residential projects across Telangana.',
    images: [
      {
        url: 'https://srinfraco.com/SrInfraLogo.png',
        width: 1200,
        height: 630,
        alt: 'SR Infra - Construction Company Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR Infra - Leading Construction Company in Hyderabad',
    description: 'Premier construction company with 25+ years experience. Luxury villas, apartments & civil engineering in Hyderabad, Telangana.',
    images: ['https://srinfraco.com/SrInfraLogo.png'],
  },
  alternates: {
    canonical: 'https://srinfraco.com',
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}
