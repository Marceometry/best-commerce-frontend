import { getProducts } from '@/services'
import { formatCurrency } from '@/utils'
import { DeleteModal } from './DeleteModal'
import { ProductModal } from './ProductModal'

export async function AdminProductList() {
  const products = await getProducts()

  return (
    <section className="flex-1 py-4 px-8">
      <div className="flex gap-4 mb-6">
        <h2 className="text-xl">List of products</h2>

        <ProductModal />
      </div>

      <table className="w-full max-w-5xl border-collapse">
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-3 border">{product.name}</td>
              <td className="py-2 px-3 border text-center">
                {formatCurrency(product.price)}
              </td>
              <td className="py-2 px-3 border w-36">
                <div className="flex justify-center gap-2">
                  <ProductModal product={product} />
                  <DeleteModal productId={product.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
