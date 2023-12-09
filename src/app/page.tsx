import Hero from 'modules/home/hero'
import Accordion from 'modules/home/accordion'

const title = 'Victor Alvar | FullStack Developer'
const description =
  'A software developer passionate about delivering exceptional IT services and building products that resonate with both businesses and people. Transforming ideas into innovative solutions.'

export const metadata = {
  title: title,
  description: description,
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
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    locale: 'en_US',
    url: 'https://www.victor-alvar.com',
    siteName: 'Victor Alvar',
    images: [
      {
        url: 'https://www.victor-alvar.com/images/social/atalaso-share-preview.png',
        width: 1200,
        height: 600,
        alt: 'Victor Alvar',
      },
    ],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: [
    {
      url: '/site.webmanifest',
    },
    {
      url: '/manifest.json',
    },
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
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Accordion />
    </main>
  )
}
