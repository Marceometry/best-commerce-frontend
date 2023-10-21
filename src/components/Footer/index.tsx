import { getStore } from '@/services'

export async function Footer() {
  const data = await getStore()

  return (
    <footer className="flex items-center justify-center p-4 border-t border-t-slate-300">
      {data.name} - All rights not reserved - {new Date().getFullYear()}
    </footer>
  )
}
