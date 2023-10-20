'use server'

import { cookies } from 'next/headers'
import { api } from '@/lib/axios'
import {
  Category,
  Product,
  ProductsByCategory,
  Purchase,
  Store,
  User,
} from '@/types'
import { setAuthorizationHeader } from '@/utils'

export async function getStore() {
  const { data } = await api.get<Store>(`/stores/${process.env.STORE_ID}`)
  return data
}

export async function getUser() {
  try {
    const { data } = await api.get<User>(
      '/auth/profile',
      setAuthorizationHeader(cookies()),
    )
    return data
  } catch (error) {
    return null
  }
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
  const { data } = await api.post<Purchase>(
    `/products/${id}/buy`,
    null,
    setAuthorizationHeader(cookies()),
  )
  return data
}

export async function getPurchases() {
  const { data } = await api.get<Purchase[]>(
    `/purchases/at/store/${process.env.STORE_ID}`,
    setAuthorizationHeader(cookies()),
  )
  return data
}
