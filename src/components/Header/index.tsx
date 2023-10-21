import Link from 'next/link'
import { getStore, getUser } from '@/services'
import { LogoutButton } from './LogoutButton'

type Props = {
  title: string
}

export async function Header({ title }: Props) {
  const data = await getStore()
  const user = await getUser()

  return (
    <header className="grid md:grid-cols-3 place-items-center py-4 px-8 gap-4 border-b border-b-slate-300">
      <div className="md:w-full">
        <Link href="/" className="w-fit grid">
          <span className="text-lg">{data.name}</span>
          <span className="text-xs leading-none place-self-end">
            Best commerce
          </span>
        </Link>
      </div>

      <h1 className="text-2xl text-center">{title}</h1>

      <div className="w-full flex items-center justify-center md:justify-end gap-4 text-sm">
        {user ? (
          <>
            <span>{user.name}</span>
            <Link href="/purchases" className="hover:underline">
              Purchases
            </Link>
            <LogoutButton />
          </>
        ) : (
          <Link href="/login" className="btn-secondary">
            Login
          </Link>
        )}
      </div>
    </header>
  )
}
