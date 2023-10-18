import { getProducts } from '@/api'
import { AddNew } from './AddNew'
import { ProductRow } from './ProductRow'

export async function AdminProductList() {
  const products = await getProducts()

  return (
    <section className="flex-1 py-4 px-8">
      <div className="flex gap-4 mb-6">
        <h2 className="text-xl">List of products</h2>

        <AddNew />
      </div>

      <table className="w-full max-w-5xl border-collapse">
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </section>
  )
}
