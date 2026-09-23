import type {
  AuthResponse,
  LoginRequest,
  RefreshRequest,
  RegisterRequest,
} from '../features/auth/auth.types'
import { apiRequest } from './httpClient'

export function registerUser(
  request: RegisterRequest,
): Promise<AuthResponse> {
  return apiRequest<AuthResponse>('/auth/register', {
    method: 'POST',
    body: request,
    requiresAuth: false,
  })
}

export function loginUser(
  request: LoginRequest,
): Promise<AuthResponse> {
  return apiRequest<AuthResponse>('/auth/login', {
    method: 'POST',
    body: request,
    requiresAuth: false,
  })
}

export function logoutUser(
  request: RefreshRequest,
): Promise<void> {
  return apiRequest<void>('/auth/logout', {
    method: 'POST',
    body: request,
    requiresAuth: false,
  })
}