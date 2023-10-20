import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { RequestCookies } from 'next/dist/server/web/spec-extension/cookies'
import { ACCESS_TOKEN_COOKIE_NAME } from '@/constants'

export function getAccessToken(
  cookies: RequestCookies | ReadonlyRequestCookies,
) {
  return cookies.get(ACCESS_TOKEN_COOKIE_NAME)?.value || ''
}

export function setAuthorizationHeader(
  cookies: RequestCookies | ReadonlyRequestCookies,
) {
  const accessToken = getAccessToken(cookies)
  return { headers: { Authorization: `Bearer ${accessToken}` } }
}
