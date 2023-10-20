'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export function SignUpLink() {
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect')
  const queryParams = redirect ? `?redirect=${redirect}` : ''

  return (
    <Link
      href={`/signup${queryParams}`}
      className="text-sky-300 hover:underline"
    >
      Sign up
    </Link>
  )
}
