import { NextResponse } from 'next/server'
import { ACCESS_TOKEN_COOKIE_NAME } from '@/constants'
import { api } from '@/lib/axios'
import { login } from '@/services/auth'

export async function POST(request: Request) {
  const body = await request.json()

  const {
    data: { access_token },
  } = await api.post('/auth/login', body)

  const response = NextResponse.json({ success: true }, { status: 200 })

  response.cookies.set({
    name: ACCESS_TOKEN_COOKIE_NAME,
    value: access_token,
    path: '/',
  })

  return response
}
