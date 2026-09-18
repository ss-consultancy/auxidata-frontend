export type UserRole = 'ADMIN' | 'ANALYST' | 'VIEWER'

export interface LoginRequest {
  email: string
  password: string
  rememberMe: boolean
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

export interface ApiErrorResponse {
  message: string
  errorCode?: string
  timestamp?: string
}