export type Store = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  address: any
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
  createdAt: Date
  updatedAt: Date
}
