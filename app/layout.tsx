import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { site } from '@/lib/content'
import { description, title, url } from '@/lib/seo'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url }],
  creator: site.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-video-preview': -1 },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: site.name,
    title,
    description,
    locale: 'en_US',
    firstName: 'Maykell',
    lastName: 'Carrillo'
  },
  twitter: { card: 'summary_large_image', title, description }
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
