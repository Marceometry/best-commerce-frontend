import Link from 'next/link'
import { getStore } from '@/api'

type Props = {
  title: string
}

export async function Header({ title }: Props) {
  const data = await getStore()

  return (
    <header
      className="grid py-4 px-8 border-b"
      style={{ gridTemplateColumns: '1fr 2fr' }}
    >
      <Link href="/">
        <div className="w-fit grid">
          <span className="text-lg">{data.name}</span>
          <span className="text-xs leading-none place-self-end">
            Best commerce
          </span>
        </div>
      </Link>

      <div className="w-1/2 grid place-items-center">
        <h1 className="text-2xl">{title}</h1>
      </div>
    </header>
  )
}
