import { Footer, Header, ProductList, Sidebar } from '@/components'
import { getProductsByCategory } from '@/services'

type Props = {
  params: { slug: string }
}

export default async function Category({ params: { slug } }: Props) {
  const { categoryName, products } = await getProductsByCategory(slug)

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={categoryName} />

      <main className="flex-1 grid grid-cols-[auto_auto]">
        <Sidebar />

        <ProductList products={products} />
      </main>

      <Footer />
    </div>
  )
}
