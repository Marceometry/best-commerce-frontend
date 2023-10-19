import axios from 'axios'
import { api } from '@/lib/axios'
import {
  Category,
  Product,
  ProductsByCategory,
  Purchase,
  Store,
  User,
} from '@/types'

export async function getStore() {
  const { data } = await api.get<Store>(`/stores/${process.env.STORE_ID}`)
  return data
}

export async function getUser() {
  const { data } = await axios.get<User>('/api/auth/profile')
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

export async function getProductsByCategory(slug: string) {
  const { data } = await api.get<ProductsByCategory>(
    `/products/store/${process.env.STORE_ID}/category/${slug}`,
  )
  return data
}

export async function getProductById(id: string) {
  const { data } = await api.get<Product>(`/products/${id}`)
  return data
}

export async function buyProduct(id: string) {
  const { data } = await axios.post<Purchase>(`/api/products/${id}/buy`)
  return data
}
