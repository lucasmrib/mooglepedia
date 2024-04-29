import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Navbar } from '@/components/navbar'

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
          <main className="flex h-fit pt-16">
            <Navbar />
            {children}
          </main>
      </body>
    </html>
  )
}
