import { NextRequest, NextResponse } from 'next/server'
import { Store, User } from '@/types'
import { getAccessToken, setAuthorizationHeader } from '@/utils'

export async function middleware(req: NextRequest) {
  const storeId = process.env.STORE_ID
  const baseURL = process.env.NEXT_PUBLIC_API_URL

  const { pathname } = new URL(req.url)

  const isAuthPage =
    pathname.startsWith('/login') || pathname.endsWith('/signup')

  if (isAuthPage && getAccessToken(req.cookies)) {
    try {
      const user: User = await fetch(
        `${baseURL}/auth/profile`,
        setAuthorizationHeader(req.cookies),
      ).then((res) => res.json())

      if (user?.username) throw new Error('Already logged in')
      return NextResponse.next()
    } catch (error) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  const isProtectedPage =
    (pathname.startsWith('/products') && pathname.endsWith('/buy')) ||
    pathname.startsWith('/purchases')

  if (isProtectedPage) {
    try {
      const user: User = await fetch(
        `${baseURL}/auth/profile`,
        setAuthorizationHeader(req.cookies),
      ).then((res) => res.json())

      if (!user?.username) throw new Error('Access denied')
      return NextResponse.next()
    } catch (error) {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, req.url),
      )
    }
  }

  const isAdminRoute = pathname.startsWith('/admin')

  if (isAdminRoute) {
    try {
      const store: Store = await fetch(
        `${baseURL}/stores`,
        setAuthorizationHeader(req.cookies),
      ).then((res) => res.json())

      if (store?.id !== storeId) throw new Error('Access denied')
      return NextResponse.next()
    } catch (error) {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, req.url),
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/products/:id*/buy',
    '/purchases',
    '/login',
    '/signup',
  ],
}
