'use client'

import { useRouter } from 'next/navigation'
import { buyProduct } from '@/api'

type Props = {
  productId: string
}

export async function ConfirmButton({ productId }: Props) {
  const router = useRouter()

  const handleConfirmPurchase = async () => {
    try {
      await buyProduct(productId)
      router.replace('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button onClick={handleConfirmPurchase} className="btn-primary">
      Confirm purchase
    </button>
  )
}
