import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Charizma Cosmetics | Premium Beauty & Skincare',
  description: 'Discover the art of beauty at Charizma Cosmetics. Premium skincare, makeup, and expert beauty consultations since 1996 in Shivpuri, Madhya Pradesh.',
  keywords: ['beauty', 'cosmetics', 'skincare', 'makeup', 'beauty parlour', 'Shivpuri', 'India'],
  authors: [{ name: 'Charizma Beauty Parlour' }],
  openGraph: {
    title: 'Charizma Cosmetics | Premium Beauty & Skincare',
    description: 'Helping people meet the real version of themselves through beauty, confidence, skincare, and expert guidance.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#D4A574',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
