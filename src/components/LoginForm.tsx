import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Eye, EyeOff, Mail } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import BrandLogo from './BrandLogo'

interface LoginFormState {
  email: string
  password: string
  rememberMe: boolean
}

const initialFormState: LoginFormState = {
  email: '',
  password: '',
  rememberMe: true,
}

function LoginForm() {
  const navigate = useNavigate()

  const [form, setForm] = useState<LoginFormState>(initialFormState)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setForm((currentForm) => ({
      ...currentForm,
      email: event.target.value,
    }))
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setForm((currentForm) => ({
      ...currentForm,
      password: event.target.value,
    }))
  }

  function handleRememberMeChange(event: ChangeEvent<HTMLInputElement>) {
    setForm((currentForm) => ({
      ...currentForm,
      rememberMe: event.target.checked,
    }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!form.email.trim() || !form.password) {
      setError('Please enter your email and password.')
      return
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    try {
      setIsSubmitting(true)

      // Demo-only behavior.
      // Replace this with your Spring Boot /auth/login API call later.
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, 600)
      })

      sessionStorage.setItem('auxi_authenticated', 'true')
      sessionStorage.setItem('auxi_email', form.email)

      navigate('/dashboard')
    } catch {
      setError('Unable to sign in. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-[400px]">
      <BrandLogo />

      <div className="mt-16">
        <h1 className="text-4xl font-semibold tracking-tight text-[#172554] sm:text-5xl">
          Welcome back
        </h1>

        <p className="mt-4 text-lg text-slate-600 sm:text-xl">
          Access your data intelligence
        </p>
      </div>

      <form className="mt-12 space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="relative">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleEmailChange}
            className="
              h-14 w-full rounded-lg border border-slate-300 bg-white
              px-4 pr-12 text-slate-900 outline-none transition
              placeholder:text-slate-400 focus:border-cyan-500
              focus:ring-4 focus:ring-cyan-100
            "
          />

          <Mail
            size={20}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handlePasswordChange}
            className="
              h-14 w-full rounded-lg border border-slate-300 bg-white
              px-4 pr-12 text-slate-900 outline-none transition
              placeholder:text-slate-400 focus:border-cyan-500
              focus:ring-4 focus:ring-cyan-100
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="
              absolute right-3 top-1/2 -translate-y-1/2 rounded-md
              p-1 text-slate-400 transition hover:text-slate-700
            "
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex items-center justify-between pt-1 text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-slate-700">
            <input
              type="checkbox"
              checked={form.rememberMe}
              onChange={handleRememberMeChange}
              className="h-4 w-4 rounded border-slate-300 accent-cyan-600"
            />
            Remember me
          </label>

          <button
            type="button"
            onClick={() => setError('Password reset will be added next.')}
            className="font-medium text-[#1599a4] hover:text-[#087b87]"
          >
            Forgot password?
          </button>
        </div>

        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            h-14 w-full rounded-lg bg-[#20aeba] font-medium text-white
            shadow-sm transition hover:bg-[#1599a4] focus:outline-none
            focus:ring-4 focus:ring-cyan-100 disabled:opacity-60
          "
        >
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="my-8 flex items-center gap-4 text-sm text-slate-500">
        <span className="h-px flex-1 bg-slate-200" />
        <span>or continue with</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => setError('Google OAuth will be connected later.')}
          className="
            flex h-12 items-center justify-center gap-2 rounded-lg
            border border-slate-300 bg-white font-medium text-slate-700
            transition hover:bg-slate-50
          "
        >
          <span className="text-lg font-bold text-[#4285f4]">G</span>
          Google
        </button>

        <button
          type="button"
          onClick={() => setError('Apple OAuth will be connected later.')}
          className="
            flex h-12 items-center justify-center gap-2 rounded-lg
            border border-slate-300 bg-white font-medium text-slate-700
            transition hover:bg-slate-50
          "
        >
          <span className="text-lg text-black">●</span>
          Apple
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
  Don&apos;t have an account?{' '}
  <Link
    to="/signup"
    className="font-semibold text-[#168b83] hover:text-[#0f706a]"
  >
    Create account
  </Link>
</p>
    </div>
  )
}

export default LoginForm