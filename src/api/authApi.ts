import type {
  ApiErrorResponse,
  LoginRequest,
  LoginResponse,
} from '../features/auth/auth.types'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api'

export async function loginUser(
  request: LoginRequest,
): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(request),
  })

  const payload: LoginResponse | ApiErrorResponse | null = await response
    .json()
    .catch(() => null)

  if (!response.ok) {
    const message =
      payload && 'message' in payload
        ? payload.message
        : 'Unable to authenticate. Please try again.'

    throw new Error(message)
  }

  return payload as LoginResponse
}