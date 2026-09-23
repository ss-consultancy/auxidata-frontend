import type {
  ApiErrorResponse,
  AuthResponse,
} from '../features/auth/auth.types'
import {
  clearAuthentication,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '../features/auth/tokenStore'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8070/api'

interface ApiRequestOptions
  extends Omit<RequestInit, 'body' | 'headers'> {
  body?: unknown
  headers?: Record<string, string>
  requiresAuth?: boolean
  retryAfterRefresh?: boolean
}

export class ApiError extends Error {
  readonly status: number
  readonly fieldErrors?: Record<string, string>

  constructor(
    status: number,
    message: string,
    fieldErrors?: Record<string, string>,
  ) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.fieldErrors = fieldErrors
  }
}

export async function refreshAccessToken(): Promise<boolean> {
  const refreshToken = getRefreshToken()

  if (!refreshToken) {
    return false
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refreshToken,
      }),
    })

    if (!response.ok) {
      clearAuthentication()
      return false
    }

    const authResponse = (await response.json()) as AuthResponse

    setAccessToken(authResponse.accessToken)

    if (authResponse.refreshToken) {
      setRefreshToken(authResponse.refreshToken)
    }

    return true
  } catch {
    clearAuthentication()
    return false
  }
}

export async function apiRequest<T>(
  path: string,
  options: ApiRequestOptions = {},
): Promise<T> {
  const {
    body,
    headers = {},
    requiresAuth = true,
    retryAfterRefresh = true,
    ...requestOptions
  } = options

  const requestHeaders: Record<string, string> = {
    Accept: 'application/json',
    ...headers,
  }

  if (body !== undefined) {
    requestHeaders['Content-Type'] = 'application/json'
  }

  const accessToken = getAccessToken()

  if (requiresAuth && accessToken) {
    requestHeaders.Authorization = `Bearer ${accessToken}`
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...requestOptions,
    headers: requestHeaders,
    body: body === undefined ? undefined : JSON.stringify(body),
  })

  if (
    response.status === 401 &&
    requiresAuth &&
    retryAfterRefresh &&
    path !== '/auth/refresh'
  ) {
    const refreshed = await refreshAccessToken()

    if (refreshed) {
      return apiRequest<T>(path, {
        ...options,
        retryAfterRefresh: false,
      })
    }

    clearAuthentication()
  }

  if (!response.ok) {
    const errorPayload = (await response.json().catch(() => null)) as
      | ApiErrorResponse
      | null

    throw new ApiError(
      response.status,
      errorPayload?.message ?? 'Unable to complete the request.',
      errorPayload?.fieldErrors,
    )
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}