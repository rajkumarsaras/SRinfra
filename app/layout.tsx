import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import StructuredData from './structured-data'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: 'SR Infra - Expert Engineering Contractors in Hyderabad | Civil Engineering & Construction Services',
  description: 'SR Infra: Leading engineering contractors in Hyderabad, Telangana with 25+ years expertise. Specialized civil engineering contractors for luxury villas, premium apartments, gated communities, and residential projects. Committed to safety, architectural excellence, and quality engineering across Hyderabad, Gopanpalli, Madhapur, Kondapur, Nallagandla.',
  keywords: [
    'engineering contractors Hyderabad',
    'civil engineering contractors Hyderabad',
    'construction engineering contractors Telangana',
    'engineering services Hyderabad',
    'civil engineering services Hyderabad',
    'engineering contractors for villas Hyderabad',
    'engineering contractors for apartments',
    'residential engineering contractors',
    'engineering contractors Telangana',
    'civil engineers Hyderabad',
    'engineering contractors Gopanpalli',
    'engineering contractors Madhapur',
    'engineering contractors Kondapur',
    'engineering contractors Nallagandla',
    'construction engineering services',
    'architectural engineering Hyderabad',
    'structural engineering contractors',
    'SR Infra Hyderabad',
    'engineering consultants Hyderabad',
    'construction project engineering',
    'infrastructure engineering Telangana',
    'Andhra Pradesh engineering contractors',
    'residential engineering services',
    'engineering contractors for construction',
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
    title: 'SR Infra - Expert Engineering Contractors in Hyderabad | Civil Engineering Services',
    description: 'Leading engineering contractors in Hyderabad with 25+ years expertise. Specialized civil engineering contractors for villas, apartments, and residential projects. Committed to safety and architectural excellence.',
    images: [
      {
        url: 'https://srinfraco.com/SrInfraLogo.png',
        width: 1200,
        height: 630,
        alt: 'SR Infra - Engineering Contractors Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR Infra - Expert Engineering Contractors in Hyderabad',
    description: 'Leading engineering contractors with 25+ years expertise. Civil engineering services for luxury villas, apartments & residential projects in Hyderabad, Telangana.',
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
