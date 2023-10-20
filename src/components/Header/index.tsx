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
    <header className="grid grid-cols-3 py-4 px-8 border-b">
      <div>
        <Link href="/" className="w-fit grid">
          <span className="text-lg">{data.name}</span>
          <span className="text-xs leading-none place-self-end">
            Best commerce
          </span>
        </Link>
      </div>

      <h1 className="text-2xl text-center">{title}</h1>

      <div className="flex items-center justify-end gap-4 text-sm">
        {user ? (
          <>
            <span>{user.name}</span>
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
