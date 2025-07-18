// layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Phaethon Order LLC | Full-Stack AI Development & Foundation Model Solutions',
  description: 'Phaethon Order LLC delivers full-stack infrastructure for Foundation Model (FM) deployment — including prompt engineering, fine-tuning, scalable APIs, UI/UX, and RAG systems.',
  keywords: [
    'Foundation Models',
    'LLM',
    'Prompt Engineering',
    'AI Development',
    'RAG Pipelines',
    'Backend API',
    'Full Stack AI',
    'Cloud Deployment',
    'Firebase',
    'Vercel',
    'Cloud Run',
    'AI Infrastructure',
    'AI UX Design'
  ],
  authors: [{ name: 'Phaethon Order LLC' }],
  creator: 'Phaethon Order LLC',
  publisher: 'Phaethon Order LLC',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Phaethon Order LLC | Full-Stack AI Development',
    description: 'Adaptive, production-ready infrastructure for general-purpose Foundation Models. Custom prompt engineering, cloud deployment, scalable APIs, and more.',
    url: 'https://phaethon.llc',
    siteName: 'Phaethon Order LLC',
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
    card: 'summary_large_image',
    title: 'Phaethon Order LLC',
    description: 'Foundation Model infrastructure and prompt systems, from concept to deployment.',
    images: ['/images/logo.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3A506B" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
