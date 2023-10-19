import { Footer, Header, ProductList, Sidebar } from '@/components'
import { getProducts } from '@/services'

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Products" />

      <main className="flex flex-1">
        <Sidebar />

        <ProductList products={products} />
      </main>

      <Footer />
    </div>
  )
}
