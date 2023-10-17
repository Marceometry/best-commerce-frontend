import Image from 'next/image'
import Link from 'next/link'
import { getProductById } from '@/api'
import { Footer, Header, Sidebar } from '@/components'
import { formatCurrency } from '@/utils'

type Props = {
  params: { id: string }
}

export default async function Product({ params: { id } }: Props) {
  const product = await getProductById(id)

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Detalhes do produto" />

      <main className="flex flex-1">
        <Sidebar />

        <div className="p-4 mx-auto flex flex-col items-center">
          {product.imageUrl && (
            <div className="w-96 h-72 mb-8 overflow-hidden rounded">
              <Image
                src={product.imageUrl}
                alt={`Image of product ${product.name}`}
                className="w-full h-full object-cover"
                width={320}
                height={240}
              />
            </div>
          )}

          <div>
            <strong className="text-lg">{formatCurrency(product.price)}</strong>

            <span className="block mt-2 mb-3">{product.name}</span>

            <p className="text-sm">{product.description}</p>
          </div>

          <Link href={`/products/${product.id}/buy`} className="btn-primary">
            Buy now
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}