import Navbar from 'layout/header/navbar'
import '../styles/globals.scss'
import type {Metadata} from 'next'
import {DM_Sans, Schibsted_Grotesk} from 'next/font/google'

// primary font
const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-primary',
})

// Secondary font
const DmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-secondary',
})

export const metadata: Metadata = {
  description:
    'A software developer passionate about delivering exceptional IT services and building products that resonate with both businesses and people. Transforming ideas into innovative solutions.',
  keywords: [
    'victor alvar',
    'victor',
    'alvar',
    'technology solutions',
    'software experts',
    'IT consulting',
    'digital transformation',
    'software engineering',
    'developer',
    'data & analytics',
    'data science',
  ],
  icons: {
    icon: '/images/favicon/favicon.ico',
    shortcut: '/images/favicon/favicon.ico',
    apple: [
      {
        url: '/images/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicon/favicon.ico',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicon/favicon-32x32.png',
        sizes: '32x32',
      },
    ],
  },
  metadataBase: new URL('https://victor-alvar.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${DmSans.className} ${DmSans.variable} ${schibstedGrotesk.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
