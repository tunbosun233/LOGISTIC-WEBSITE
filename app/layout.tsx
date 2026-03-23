import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1F3A5F' },
  ],
}

export const metadata: Metadata = {
  title: 'SwiftShip - Global Logistics & Shipping Solutions',
  description: 'Reliable and efficient logistics solutions for your business. International shipping, freight services, and real-time tracking.',
  // Removed generator: 'v0.app' to hide AI origin
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swiftship.com',
    title: 'SwiftShip - Global Logistics & Shipping Solutions',
    description: 'Reliable and efficient logistics solutions for your business.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}