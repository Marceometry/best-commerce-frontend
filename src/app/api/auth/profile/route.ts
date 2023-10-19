import { NextRequest, NextResponse } from 'next/server'
import { ACCESS_TOKEN_COOKIE_NAME } from '@/constants'
import { api } from '@/lib/axios'
import { setAuthorizationHeader } from '@/utils'

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE_NAME)?.value

  if (!accessToken) {
    return NextResponse.json(
      { message: 'No access token found' },
      { status: 401 },
    )
  }

  const { data: user } = await api.get(
    '/auth/profile',
    setAuthorizationHeader(accessToken),
  )

  return NextResponse.json(user)
}
