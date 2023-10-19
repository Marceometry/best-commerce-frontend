'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Input, Modal } from '@/components'
import { createProduct } from '@/services/admin'
import { currencyMask, currencyUnmask } from '@/utils'

type FormValues = {
  name: string
  description: string
  price: string
  imageUrl?: string
}

export function AddNew() {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { handleSubmit, register } = useForm<FormValues>()

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      await createProduct({ ...data, price: currencyUnmask(data.price) })
      toast.error('Product successfully created!')
    } catch (error) {
      toast.error('Something went wrong while creating this product')
    } finally {
      setIsSubmitting(false)
    }
  })

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Add new product"
      trigger={<button className="btn-secondary">+ New</button>}
    >
      <form onSubmit={onSubmit}>
        <Input
          label="Name"
          placeholder="Product name"
          {...register('name')}
          required
        />
        <Input
          label="Description"
          placeholder="Product description"
          {...register('description')}
          required
        />
        <Input
          label="Price"
          placeholder="R$ 49,99"
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
