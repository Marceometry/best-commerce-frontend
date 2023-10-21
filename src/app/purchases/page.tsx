import Image from 'next/image'
import Link from 'next/link'
import { Footer, Header } from '@/components'
import { getPurchases } from '@/services'
import { formatCurrency } from '@/utils'

export default async function Purchases() {
  const purchases = await getPurchases()

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Purchases" />

      {!purchases.length ? (
        <main className="flex-1 grid place-items-center">
          <p>You {"haven't"} made any purchases yet.</p>
        </main>
      ) : (
        <main className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-8 p-8 mx-auto">
          {purchases.map((purchase) => (
            <div key={purchase.id}>
              <Link
                href={`/products/${purchase.product.id}`}
                className="w-fit group"
              >
                {purchase.product.imageUrl && (
                  <div className="w-60 h-44 mb-2 overflow-hidden rounded">
                    <Image
                      src={purchase.product.imageUrl}
                      alt={`Image of product ${purchase.product.name}`}
                      className="w-full h-full object-cover"
                      width={320}
                      height={240}
                    />
                  </div>
                )}

                <div className="flex gap-2">
                  <strong>{formatCurrency(purchase.amount)}</strong>
                  <span>|</span>
                  <span className="group-hover:underline">
                    {purchase.product.name}
                  </span>
                </div>
                <p>{new Date(purchase.createdAt).toLocaleString()}</p>
              </Link>
            </div>
          ))}
        </main>
      )}

      <Footer />
    </div>
  )
}
