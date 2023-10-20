'use server'

import { cookies } from 'next/headers'
import { api } from '@/lib/axios'
import { Product } from '@/types'
import { setAuthorizationHeader } from '@/utils'

export type CreateProductDto = {
  name: string
  description: string
  price: number
  imageUrl?: string
}

export async function createProduct(payload: CreateProductDto) {
  const { data } = await api.post<Product>(
    '/products',
    payload,
    setAuthorizationHeader(cookies()),
  )
  return data
}

export async function updateProduct(
  payload: CreateProductDto & { id: string },
) {
  const { data } = await api.patch<Product>(
    `/products/${payload.id}`,
    payload,
    setAuthorizationHeader(cookies()),
  )
  return data
}

export async function deleteProduct(id: string) {
  const { data } = await api.delete<Product>(
    `/products/${id}`,
    setAuthorizationHeader(cookies()),
  )
  return data
}
