export function setAuthorizationHeader(accessToken: string) {
  return { headers: { Authorization: `Bearer ${accessToken}` } }
}
