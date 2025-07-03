import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Phaethon LLC',
  description: 'Phaethon LLC - A privately held company formed in the State of Wyoming',
  keywords: ['Phaethon', 'LLC', 'Wyoming', 'private company'],
  authors: [{ name: 'Phaethon LLC' }],
  creator: 'Phaethon LLC',
  publisher: 'Phaethon LLC',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
    apple: '/images/logo.svg',
  },
  openGraph: {
    title: 'Phaethon LLC',
    description: 'Phaethon LLC - A privately held company formed in the State of Wyoming',
    url: 'https://phaethon.com',
    siteName: 'Phaethon LLC',
    type: 'website',
    images: [
      {
        url: '/images/logo.svg',
        width: 100,
        height: 100,
        alt: 'Phaethon LLC Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Phaethon LLC',
    description: 'Phaethon LLC - A privately held company formed in the State of Wyoming',
    images: ['/images/logo.svg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
