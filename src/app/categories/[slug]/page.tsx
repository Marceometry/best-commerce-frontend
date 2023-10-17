import { getProductsByCategory } from '@/api'
import { Footer, Header, ProductList, Sidebar } from '@/components'

type Props = {
  params: { slug: string }
}

export default async function Category({ params: { slug } }: Props) {
  const { categoryName, products } = await getProductsByCategory(slug)

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={categoryName} />

      <main className="flex flex-1">
        <Sidebar />

        <ProductList products={products} />
      </main>

      <Footer />
    </div>
  )
}
