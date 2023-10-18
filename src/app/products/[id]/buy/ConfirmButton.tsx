'use client'

import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { buyProduct } from '@/api'

type Props = {
  productId: string
}

export async function ConfirmButton({ productId }: Props) {
  const router = useRouter()

  const handleConfirmPurchase = async () => {
    try {
      await buyProduct(productId)
      toast.success('Purchase successful!')
      router.replace('/')
    } catch (error) {
      toast.error('Something went wrong while purchasing this product')
      console.log(error)
    }
  }

  return (
    <button onClick={handleConfirmPurchase} className="btn-primary">
      Confirm purchase
    </button>
  )
}
