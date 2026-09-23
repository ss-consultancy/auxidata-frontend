let accessToken: string | null = null

const REFRESH_TOKEN_STORAGE_KEY = 'auxi_refresh_token'

export function getAccessToken(): string | null {
  return accessToken
}

export function setAccessToken(token: string | null): void {
  accessToken = token
}

export function clearAccessToken(): void {
  accessToken = null
}

export function getRefreshToken(): string | null {
  return sessionStorage.getItem(REFRESH_TOKEN_STORAGE_KEY)
}

export function setRefreshToken(token: string): void {
  sessionStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, token)
}

export function clearRefreshToken(): void {
  sessionStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY)
}

export function clearAuthentication(): void {
  clearAccessToken()
  clearRefreshToken()
}