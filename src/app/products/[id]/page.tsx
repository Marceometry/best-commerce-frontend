import Image from 'next/image'
import Link from 'next/link'
import { Footer, Header, Sidebar } from '@/components'
import { getProductById } from '@/services'
import { formatCurrency } from '@/utils'

type Props = {
  params: { id: string }
}

export default async function Product({ params: { id } }: Props) {
  const product = await getProductById(id)

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Detalhes do produto" />

      <main className="flex-1 grid grid-cols-[auto_auto]">
        <Sidebar />

        <div className="p-4 w-fit flex flex-col items-center">
          {product.imageUrl && (
            <div className="w-96 h-72 mb-8 overflow-hidden rounded">
              <Image
                src={product.imageUrl}
                alt={`Image of product ${product.name}`}
                className="w-full h-full object-cover"
                width={320}
                height={240}
                priority
              />
            </div>
          )}

          <div>
            <strong className="text-lg">{formatCurrency(product.price)}</strong>

            <span className="block mt-2 mb-3">{product.name}</span>

            <p className="text-sm">{product.description}</p>
          </div>

          <Link
            href={`/products/${product.id}/buy`}
            className="btn-primary mt-8"
          >
            Buy now
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
