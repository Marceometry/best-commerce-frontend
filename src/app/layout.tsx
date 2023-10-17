import type { Metadata } from 'next'
import { getStore } from '@/api'
import { Toast } from '@/components'
import '@/styles/globals.css'

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
      <body>
        {children}
        <Toast />
      </body>
    </html>
  )
}
