import { AdminSidebar, Footer, Header } from '@/components'
import { getStore } from '@/services'

export default async function CompanyProfile() {
  const store = await getStore()

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={`${store.name} - Admin`} />

      <main className="flex flex-1">
        <AdminSidebar />

        <section className="flex flex-1 flex-col py-4 px-8">
          <strong className="text-2xl mb-4">{store.name}</strong>

          <div className="flex flex-col gap-1">
            <span>Address:</span>
            <span>
              {store.address.street}, {store.address.number},{' '}
              {store.address.complement ? store.address.complement + ', ' : ''}
              {store.address.neighborhood} - {store.address.city},{' '}
              {store.address.state}, {store.address.country} |{' '}
              {store.address.zipCode}
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
