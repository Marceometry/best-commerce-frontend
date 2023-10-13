import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getStore } from '@/api'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const data = await getStore()
  return {
    title: `${data.name} | Best Commerce`,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
