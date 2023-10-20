import Image from 'next/image'
import { getProductById } from '@/services'
import { formatCurrency } from '@/utils'
import { CancelButton } from './CancelButton'
import { ConfirmButton } from './ConfirmButton'

type Props = {
  params: { id: string }
}

export default async function Buy({ params: { id } }: Props) {
  const product = await getProductById(id)

  return (
    <div className="grid place-items-center h-screen w-screen p-4">
      <div className="p-4 mx-auto flex flex-col items-center">
        {product.imageUrl && (
          <div className="w-80 h-60 mb-8 overflow-hidden rounded">
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

        <strong className="text-3xl">{formatCurrency(product.price)}</strong>
        <span className="block mt-2 mb-3">{product.name}</span>

        <div className="grid grid-cols-2 gap-4 pt-8">
          <CancelButton />
          <ConfirmButton productId={product.id} />
        </div>
      </div>
    </div>
  )
}
