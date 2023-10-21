import { CategoriesSidebar, Footer, Header, ProductList } from '@/components'
import { getProducts } from '@/services'

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Products" />

      <main className="flex-1 grid grid-cols-[auto_auto]">
        <div>
          <CategoriesSidebar />
        </div>

        <ProductList products={products} />
      </main>

      <Footer />
    </div>
  )
}
