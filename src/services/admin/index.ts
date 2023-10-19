import { api } from '@/lib/axios'
import { Product } from '@/types'

export type CreateProductDto = {
  name: string
  description: string
  price: number
  imageUrl?: string
}

export async function createProduct(payload: CreateProductDto) {
  const { data } = await api.post<Product>('/products', payload)
  return data
}
