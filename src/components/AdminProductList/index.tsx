import { getProducts } from '@/services'
import { formatCurrency } from '@/utils'
import { AddNew } from './AddNew'
import { DeleteProduct } from './DeleteProduct'
import { EditProduct } from './EditProduct'

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
            <tr key={product.id}>
              <td className="py-2 px-3 border">{product.name}</td>
              <td className="py-2 px-3 border text-center">
                {formatCurrency(product.price)}
              </td>
              <td className="py-2 px-3 border w-36">
                <div className="flex justify-center gap-2">
                  <EditProduct product={product} />
                  <DeleteProduct productId={product.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
