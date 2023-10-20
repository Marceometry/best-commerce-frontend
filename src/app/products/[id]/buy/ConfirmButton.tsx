'use client'

import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { buyProduct } from '@/services'

type Props = {
  productId: string
}

export async function ConfirmButton({ productId }: Props) {
  const router = useRouter()

  const handleConfirmPurchase = async () => {
    try {
      await buyProduct(productId)
      toast.success('Purchase successful!')
      router.refresh()
      router.replace('/purchases')
    } catch (error) {
      toast.error('Something went wrong while purchasing this product')
    }
  }

  return (
    <button onClick={handleConfirmPurchase} className="btn-primary">
      Confirm purchase
    </button>
  )
}
