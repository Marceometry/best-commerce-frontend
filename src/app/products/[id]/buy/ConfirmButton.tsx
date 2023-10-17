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
      toast.success('Compra realizada com sucesso!')
      router.replace('/')
    } catch (error) {
      toast.error('Algo deu errado')
      console.log(error)
    }
  }

  return (
    <button onClick={handleConfirmPurchase} className="btn-primary">
      Confirm purchase
    </button>
  )
}
