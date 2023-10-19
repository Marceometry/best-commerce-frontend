export type Store = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  address: any
}

export type User = {
  name: string
  username: string
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
}

export type Category = {
  id: string
  name: string
  slug: string
  createdAt: Date
  updatedAt: Date
}

export type ProductsByCategory = {
  categoryName: string
  products: Product[]
}

export type Purchase = {
  id: string
  userId: string
  product: Product
}
