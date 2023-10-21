import { AdminProductList, AdminSidebar, Footer, Header } from '@/components'
import { getStore } from '@/services'

export default async function AdminPanel() {
  const store = await getStore()

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={`${store.name} - Admin`} />

      <main className="flex flex-1">
        <AdminSidebar />

        <AdminProductList />
      </main>

      <Footer />
    </div>
  )
}
