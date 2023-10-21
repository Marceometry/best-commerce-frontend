import { CategoriesSidebar, Footer, Header, ProductList } from '@/components'
import { getProductsByCategory } from '@/services'

type Props = {
  params: { slug: string }
}

export default async function Category({ params: { slug } }: Props) {
  const { categoryName, products } = await getProductsByCategory(slug)

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={categoryName} />

      <main className="flex-1 grid sm:grid-cols-[auto_auto]">
        <CategoriesSidebar />

        <ProductList products={products} />
      </main>

      <Footer />
    </div>
  )
}
