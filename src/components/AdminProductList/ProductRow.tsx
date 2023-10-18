'use client'

import { X } from 'lucide-react'
import { Product } from '@/types'
import { formatCurrency } from '@/utils'

type Props = {
  product: Product
}

export function ProductRow({ product }: Props) {
  return (
    <tr>
      <td className="py-2 px-3 border">{product.name}</td>
      <td className="py-2 px-3 border text-center">
        {formatCurrency(product.price)}
      </td>
      <td className="py-2 px-3 border w-36">
        <div className="flex justify-center gap-2">
          <button className="btn-secondary text-sm">Edit</button>
          <button className="btn-primary font-mono text-sm text-white bg-red-500 border-red-500">
            <X size={16} />
          </button>
        </div>
      </td>
    </tr>
  )
}
