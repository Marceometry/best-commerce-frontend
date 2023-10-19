import { NextRequest, NextResponse } from 'next/server'
import { ACCESS_TOKEN_COOKIE_NAME } from '@/constants'
import { api } from '@/lib/axios'
import { setAuthorizationHeader } from '@/utils'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE_NAME)?.value

  if (!accessToken) {
    return NextResponse.json(
      { message: 'No access token found' },
      { status: 401 },
    )
  }

  const { data: purchase } = await api.post(
    `/products/${params.id}/buy`,
    null,
    setAuthorizationHeader(accessToken),
  )

  return NextResponse.json(purchase, { status: 201 })
}
