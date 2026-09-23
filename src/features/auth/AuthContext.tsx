import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import {
  loginUser,
  logoutUser,
  registerUser,
} from '../../api/authApi'
import { refreshAccessToken } from '../../api/httpClient'
import type {
  LoginRequest,
  RegisterRequest,
} from './auth.types'
import {
  clearAuthentication,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from './tokenStore'

interface AuthContextValue {
  isAuthenticated: boolean
  isLoading: boolean
  login: (request: LoginRequest) => Promise<void>
  register: (request: RegisterRequest) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => getAccessToken() !== null,
  )
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function restoreSession() {
      try {
        const refreshed = await refreshAccessToken()
        setIsAuthenticated(refreshed)
      } finally {
        setIsLoading(false)
      }
    }

    void restoreSession()
  }, [])

  async function login(request: LoginRequest): Promise<void> {
    const response = await loginUser(request)

    setAccessToken(response.accessToken)
    setRefreshToken(response.refreshToken)
    setIsAuthenticated(true)
  }

  async function register(request: RegisterRequest): Promise<void> {
    const response = await registerUser(request)

    setAccessToken(response.accessToken)
    setRefreshToken(response.refreshToken)
    setIsAuthenticated(true)
  }

  async function logout(): Promise<void> {
    const refreshToken = getRefreshToken()

    try {
      if (refreshToken) {
        await logoutUser({ refreshToken })
      }
    } finally {
      clearAuthentication()
      setIsAuthenticated(false)
    }
  }

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated,
      isLoading,
      login,
      register,
      logout,
    }),
    [isAuthenticated, isLoading],
  )

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider.')
  }

  return context
}