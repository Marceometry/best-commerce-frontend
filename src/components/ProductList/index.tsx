import Image from 'next/image'
import Link from 'next/link'
import { getProducts } from '@/api'
import { formatCurrency } from '@/utils'

export async function ProductList() {
  const products = await getProducts()

  return (
    <section className="flex-1 py-4 px-8">
      <ul className="flex flex-col gap-4">
        {products.map((product) => (
          <li key={product.id} className="flex gap-3">
            {product.imageUrl && (
              <div className="w-60 h-44 overflow-hidden rounded">
                <Image
                  src={product.imageUrl}
                  alt={`Image of product ${product.name}`}
                  className="w-full h-full object-cover"
                  width={320}
                  height={240}
                />
              </div>
            )}

            <div className="flex flex-col justify-between max-w-xl">
              <div>
                <strong className="text-lg">
                  {formatCurrency(product.price)}
                </strong>

                <span className="block mt-2 mb-3">{product.name}</span>

                <p className="text-sm">{product.description}</p>
              </div>

              <Link
                href="/"
                className="w-fit inline-block mt-8 py-1 px-4 border rounded transition-colors hover:bg-white hover:text-black"
              >
                Buy now
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
