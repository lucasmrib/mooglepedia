import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: {
    default: 'MooglePedia',
    template: '%s | MooglePedia'
  },
  description: 'Website that contains all information for FF9 runs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#2e3136]">
        <Header/>
        {children}
      </body>
    </html>
  )
}
