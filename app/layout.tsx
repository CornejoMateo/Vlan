import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist"
});

export const metadata: Metadata = {
  title: 'Vlan - Internet y Seguridad',
  description: 'Soluciones profesionales de conectividad y seguridad para tu hogar y negocio. Internet de alta velocidad y sistemas de seguridad confiables.',
  keywords: ['internet', 'seguridad', 'conectividad', 'fibra óptica', 'cámaras de seguridad'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
