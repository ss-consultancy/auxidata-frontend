export type UserRole = 'ADMIN' | 'ANALYST' | 'VIEWER'

export interface LoginRequest {
  email: string
  password: string
}

export interface AuthenticatedUser {
  id: string
  name: string
  email: string
  roles: UserRole[]
}

export interface LoginResponse {
  user: AuthenticatedUser
  accessToken?: string
  expiresIn?: number
}

export interface RegisterRequest {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface RefreshRequest {
  refreshToken: string
}

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  tokenType: 'Bearer'
  expiresIn: number
}

export interface ApiErrorResponse {
  timestamp?: string
  status?: number
  error?: string
  message?: string
  fieldErrors?: Record<string, string>
}