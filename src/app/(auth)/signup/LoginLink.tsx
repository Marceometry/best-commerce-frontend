'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export function LoginLink() {
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect')
  const queryParams = redirect ? `?redirect=${redirect}` : ''

  return (
    <Link
      href={`/login${queryParams}`}
      className="text-sky-300 hover:underline"
    >
      Log in
    </Link>
  )
}
