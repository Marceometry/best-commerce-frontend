import { getStore } from '@/api'

export async function Footer() {
  const data = await getStore()

  return (
    <footer className="flex items-center justify-center p-4 border-t">
      {data.name} - All rights not reserved - {new Date().getFullYear()}
    </footer>
  )
}
