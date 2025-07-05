import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forge',
  description: 'Forge - Web Development Solutions',
  generator: 'v0.dev',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
        type: 'image/png'
      }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
