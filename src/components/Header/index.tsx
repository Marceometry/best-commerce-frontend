import Link from 'next/link'
import { getStore } from '@/services'
import { Auth } from './Auth'

type Props = {
  title: string
}

export async function Header({ title }: Props) {
  const data = await getStore()

  return (
    <header className="grid grid-cols-3 py-4 px-8 border-b">
      <Link href="/">
        <div className="w-fit grid">
          <span className="text-lg">{data.name}</span>
          <span className="text-xs leading-none place-self-end">
            Best commerce
          </span>
        </div>
      </Link>

      <h1 className="text-2xl text-center">{title}</h1>

      <Auth />
    </header>
  )
}
