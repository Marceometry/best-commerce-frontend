import { NextResponse } from 'next/server'
import { api } from '@/lib/axios'
import { extractAccessTokenFromCookies, setAuthorizationHeader } from '@/utils'

export async function POST(
  request: Request,
  { params }: { params: { id: string } },
) {
  const accessToken = extractAccessTokenFromCookies(request)

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
