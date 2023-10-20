import { NextRequest, NextResponse } from 'next/server'
import { Store } from '@/types'
import { getAccessToken, setAuthorizationHeader } from '@/utils'

export async function middleware(req: NextRequest) {
  const storeId = process.env.STORE_ID
  const baseURL = process.env.NEXT_PUBLIC_API_URL

  try {
    const accessToken = getAccessToken(req.cookies)
    const store: Store = await fetch(
      `${baseURL}/stores`,
      setAuthorizationHeader(accessToken),
    ).then((res) => res.json())

    if (store?.id !== storeId) throw new Error('Access denied')
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/', req.url))
  }
}

export const config = {
  matcher: '/admin/:path*',
}
