import { NextResponse } from 'next/server'
import { ACCESS_TOKEN_COOKIE_NAME } from '@/constants'

export async function POST() {
  const response = NextResponse.json({ success: true }, { status: 200 })

  response.cookies.delete(ACCESS_TOKEN_COOKIE_NAME)

  return response
}
