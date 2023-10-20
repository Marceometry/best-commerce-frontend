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

export async function fetchFromEdge(path: string, cookies: RequestCookies) {
  const baseURL = process.env.NEXT_PUBLIC_API_URL
  return fetch(baseURL + path, setAuthorizationHeader(cookies)).then((res) =>
    res.json(),
  )
}
