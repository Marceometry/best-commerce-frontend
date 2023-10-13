import { api } from '@/lib/axios'
import { Category, Product, Store } from '@/types'

export async function getStore() {
  const { data } = await api.get<Store>(`/stores/${process.env.STORE_ID}`)
  return data
}

export async function getProducts() {
  const { data } = await api.get<Product[]>(
    `/products/store/${process.env.STORE_ID}`,
  )
  return data
}

export async function getCategories() {
  const { data } = await api.get<Category[]>(
    `/categories/store/${process.env.STORE_ID}`,
  )
  return data
}
