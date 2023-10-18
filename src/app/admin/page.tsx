import Link from 'next/link'
import { getStore } from '@/api'
import { AdminProductList, Footer, Header } from '@/components'

export default async function AdminPanel() {
  const store = await getStore()

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={`${store.name} - Admin`} />

      <main className="flex flex-1">
        <aside className="flex-shrink border-r py-4 px-8">
          <ul className="text-sm mt-2">
            <li>
              <Link href="" className="hover:underline">
                Company profile
              </Link>
            </li>
          </ul>
        </aside>

        <AdminProductList />
      </main>

      <Footer />
    </div>
  )
}
