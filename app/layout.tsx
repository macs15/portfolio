import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://maykell.dev'),
  title: 'Maykell Carrillo · Senior Frontend Engineer',
  description:
    'Senior frontend engineer in Brazil. Headless eCommerce for Danone, operations platforms for agency clients, and Gastify, my own App Store finance app.',
  openGraph: {
    title: 'Maykell Carrillo · Senior Frontend Engineer',
    description: 'Storefronts, operations tools and my own App Store app.',
    url: 'https://maykell.dev',
    type: 'website'
  },
  icons: { icon: '/favicon.ico' }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdfdfc' },
    { media: '(prefers-color-scheme: dark)', color: '#111110' }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
