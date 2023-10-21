export type Address = {
  id: string
  number: string
  street: string
  neighborhood: string
  complement: string
  city: string
  state: string
  country: string
  zipCode: string
}

export type Store = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  address: Address
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
  amount: number
  userId: string
  product: Product
  createdAt: Date
  updatedAt: Date
}
