'use client'

import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Modal } from '@/components'
import { deleteProduct } from '@/services/admin'

type Props = {
  productId: string
}

export function DeleteModal({ productId }: Props) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    try {
      await deleteProduct(productId)
      setOpen(false)
      router.refresh()
    } catch (error) {
      toast.error('Something went wrong while deleting this product')
    }
  }

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Delete product"
      trigger={
        <button className="btn-primary font-mono text-sm text-slate-100 bg-red-500 border-red-500">
          <X size={16} />
        </button>
      }
    >
      <p>Are you sure you want to delete this product?</p>

      <div className="mt-6 gap-3 flex justify-end">
        <button
          type="button"
          className="btn-secondary"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
        <button className="btn-primary" onClick={handleDelete}>
          Submit
        </button>
      </div>
    </Modal>
  )
}
