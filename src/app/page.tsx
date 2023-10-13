import { Footer, Header, ProductList, Sidebar } from '@/components'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Products" />

      <main className="flex flex-1">
        <Sidebar />

        <ProductList />
      </main>

      <Footer />
    </div>
  )
}
