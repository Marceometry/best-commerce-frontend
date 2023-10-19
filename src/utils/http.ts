import { ACCESS_TOKEN_COOKIE_NAME } from '@/constants'

export function extractAccessTokenFromCookies(request: Request) {
  const queryString = `${ACCESS_TOKEN_COOKIE_NAME}=`

  const cookie = request.headers.get('cookie') as string

  const token = cookie
    ?.split('; ')
    ?.find((cookie) => cookie.startsWith(queryString))
    ?.replace(queryString, '')

  return token
}

export function setAuthorizationHeader(accessToken: string) {
  return { headers: { Authorization: `Bearer ${accessToken}` } }
}
