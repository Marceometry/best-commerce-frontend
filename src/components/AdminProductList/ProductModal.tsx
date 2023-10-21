'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Input, Modal } from '@/components'
import { createProduct, updateProduct } from '@/services/admin'
import { Product } from '@/types'
import { currencyMask, currencyUnmask } from '@/utils'

type FormValues = {
  name: string
  description: string
  price: string
  imageUrl?: string
}

type Props = {
  product?: Product
}

export function ProductModal({ product }: Props) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { handleSubmit, register } = useForm<FormValues>()
  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      const payload = { ...data, price: currencyUnmask(data.price) }
      if (product?.id) {
        await updateProduct({ ...payload, id: product.id })
      } else {
        await createProduct(payload)
      }
      setOpen(false)
      toast.success(
        `Product successfully ${product?.id ? 'updated' : 'created'}!`,
      )
      router.refresh()
    } catch (error) {
      toast.error(
        `Something went wrong while ${
          product?.id ? 'updating' : 'creating'
        } this product`,
      )
    } finally {
      setIsSubmitting(false)
    }
  })

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Edit product"
      trigger={
        <button className="btn-secondary text-sm">
          {product?.id ? 'Edit' : '+ New'}
        </button>
      }
    >
      <form onSubmit={onSubmit}>
        <Input
          label="Name"
          placeholder="Product name"
          defaultValue={product?.name}
          {...register('name')}
          required
        />
        <Input
          label="Description"
          placeholder="Product description"
          defaultValue={product?.description}
          {...register('description')}
          required
        />
        <Input
          label="Price"
          placeholder="R$ 49,99"
          defaultValue={currencyMask(String(product?.price))}
          {...register('price')}
          onChange={(e) => {
            e.target.value = currencyMask(e.target.value)
            register('price').onChange(e)
          }}
          required
        />
        <Input
          label="Image URL"
          placeholder="https:example.com/image.png"
          defaultValue={product?.imageUrl}
          {...register('imageUrl')}
        />

        <div className="mt-6 gap-3 flex justify-end">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setOpen(false)}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </form>
    </Modal>
  )
}
