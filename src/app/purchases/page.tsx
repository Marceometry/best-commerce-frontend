import Image from 'next/image'
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
          <p>Você ainda não fez nenhuma compra.</p>
        </main>
      ) : (
        <main className="flex-1 grid grid-cols-2 gap-y-4 gap-x-8 p-8 mx-auto">
          {purchases.map((purchase) => (
            <div key={purchase.id} className="w-fit">
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
                <strong>{formatCurrency(purchase.product.price)}</strong>
                <span>|</span>
                <span>{purchase.product.name}</span>
              </div>
              <p>{new Date(purchase.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </main>
      )}

      <Footer />
    </div>
  )
}
