import type { Metadata } from 'next'
import { Toast } from '@/components'
import { getStore } from '@/services'
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
      <body className="bg-slate-950 text-slate-100">
        {children}
        <Toast />
      </body>
    </html>
  )
}
