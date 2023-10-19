'use server'

import axios from 'axios'
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
import { getAccessToken, setAuthorizationHeader } from '@/utils'

export async function getStore() {
  const { data } = await api.get<Store>(`/stores/${process.env.STORE_ID}`)
  return data
}

export async function getUser() {
  try {
    const accessToken = getAccessToken(cookies)
    const { data } = await api.get<User>(
      '/auth/profile',
      setAuthorizationHeader(accessToken),
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
  const { data } = await axios.post<Purchase>(`/api/products/${id}/buy`)
  return data
}
