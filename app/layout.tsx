import type { Metadata, Viewport } from 'next'
import { Barlow, Bebas_Neue, Geist_Mono } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/cookie-banner'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Mexico Badminton | El Deporte de la Velocidad y Precisión',
    template: '%s | Mexico Badminton',
  },
  description:
    'Descubre el badminton en México: historia, reglas, técnicas, equipamiento y noticias del deporte más rápido del mundo. Todo sobre el bádminton mexicano.',
  keywords: [
    'badminton México',
    'bádminton',
    'deporte raqueta México',
    'reglas badminton',
    'historia badminton México',
    'técnica badminton',
    'equipamiento badminton',
  ],
  authors: [{ name: 'Mexico Badminton' }],
  creator: 'Mexico Badminton',
  metadataBase: new URL('https://mexicobadminton.com'),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://mexicobadminton.com',
    siteName: 'Mexico Badminton',
    title: 'Mexico Badminton | El Deporte de la Velocidad y Precisión',
    description:
      'Todo sobre el bádminton en México: historia, reglas, técnicas, logros nacionales y mucho más.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mexico Badminton',
    description: 'El bádminton mexicano: historia, técnicas y logros del deporte más rápido del mundo.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://mexicobadminton.com',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2d6a34',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${barlow.variable} ${bebasNeue.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
