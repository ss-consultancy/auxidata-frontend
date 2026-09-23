import {
  Building2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from 'lucide-react'
import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BrandLogo from './BrandLogo'

interface SignupFormState {
  fullName: string
  email: string
  companyName: string
  password: string
  confirmPassword: string
  acceptedTerms: boolean
}

const initialSignupForm: SignupFormState = {
  fullName: '',
  email: '',
  companyName: '',
  password: '',
  confirmPassword: '',
  acceptedTerms: false,
}

function SignupForm() {
  const navigate = useNavigate()

  const [form, setForm] = useState<SignupFormState>(initialSignupForm)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const passwordStrength = getPasswordStrength(form.password)

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function handleTermsChange(event: ChangeEvent<HTMLInputElement>) {
    setForm((currentForm) => ({
      ...currentForm,
      acceptedTerms: event.target.checked,
    }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    const validationError = validateForm(form)

    if (validationError) {
      setError(validationError)
      return
    }

    try {
      setIsSubmitting(true)

      // Demo-only delay.
      // Replace this with your Spring Boot /api/auth/register call.
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, 700)
      })

      sessionStorage.setItem('signup_email', form.email)

      navigate('/login')
    } catch {
      setError('Unable to create your account. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleSocialSignup(provider: 'Google' | 'Microsoft') {
    setError(`${provider} signup will be connected to OAuth later.`)
  }

  return (
    <div className="w-full max-w-[440px]">
      <div className="flex justify-center lg:justify-start">
        <BrandLogo />
      </div>

      <div className="mt-7 text-center lg:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
          Create your account
        </h1>
      </div>

      <form
        className="mt-5 space-y-3"
        onSubmit={handleSubmit}
        noValidate
      >
        <FormField
          id="fullName"
          name="fullName"
          label="Full Name"
          placeholder="Enter your full name"
          value={form.fullName}
          onChange={handleTextChange}
          icon={<UserRound size={18} />}
          autoComplete="name"
        />

        <FormField
          id="email"
          name="email"
          label="Work Email"
          type="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={handleTextChange}
          icon={<Mail size={18} />}
          autoComplete="email"
        />

        <FormField
          id="companyName"
          name="companyName"
          label="Company Name"
          placeholder="Enter your company name"
          value={form.companyName}
          onChange={handleTextChange}
          icon={<Building2 size={18} />}
          autoComplete="organization"
        />

        <PasswordField
          id="password"
          name="password"
          label="Password"
          placeholder="Create a password"
          value={form.password}
          onChange={handleTextChange}
          showPassword={showPassword}
          onToggleVisibility={() =>
            setShowPassword((visible) => !visible)
          }
        />

        <PasswordStrength strength={passwordStrength} />

        <PasswordField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          value={form.confirmPassword}
          onChange={handleTextChange}
          showPassword={showConfirmPassword}
          onToggleVisibility={() =>
            setShowConfirmPassword((visible) => !visible)
          }
        />

        <label className="flex items-start gap-2 pt-1 text-sm text-slate-500">
          <input
            type="checkbox"
            checked={form.acceptedTerms}
            onChange={handleTermsChange}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-[#198b83]"
          />

          <span>
            I agree to{' '}
            <button
              type="button"
              onClick={() =>
                setError('Terms of Service page will be added later.')
              }
              className="font-semibold text-[#168b83] hover:underline"
            >
              Terms of Service
            </button>{' '}
            &amp;{' '}
            <button
              type="button"
              onClick={() =>
                setError('Privacy Policy page will be added later.')
              }
              className="font-semibold text-[#168b83] hover:underline"
            >
              Privacy Policy
            </button>
          </span>
        </label>

        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            flex h-12 w-full items-center justify-center rounded-lg
            bg-[#203f66] font-semibold text-white transition
            hover:bg-[#183452] focus:outline-none
            focus:ring-4 focus:ring-blue-100 disabled:opacity-60
          "
        >
          {isSubmitting ? 'Creating account...' : 'Create Account'}
        </button>
      </form>

      <Divider />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => handleSocialSignup('Google')}
          className="
            flex h-11 items-center justify-center gap-2 rounded-lg
            border border-slate-300 bg-white text-sm font-semibold
            text-slate-700 transition hover:bg-slate-50
          "
        >
          <GoogleIcon />
          <span>Sign up with Google</span>
        </button>

        <button
          type="button"
          onClick={() => handleSocialSignup('Microsoft')}
          className="
            flex h-11 items-center justify-center gap-2 rounded-lg
            border border-slate-300 bg-white text-sm font-semibold
            text-slate-700 transition hover:bg-slate-50
          "
        >
          <MicrosoftIcon />
          <span>Sign up with Microsoft</span>
        </button>
      </div>

      <p className="mt-5 text-center text-sm text-slate-500">
        Already have an account?{' '}
        <Link
          to="/login"
          className="font-semibold text-[#168b83] hover:text-[#0f706a]"
        >
          Sign in
        </Link>
      </p>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
        <LockKeyhole size={14} />
        <span>Your information is encrypted and secure</span>
      </div>
    </div>
  )
}

interface FormFieldProps {
  id: keyof SignupFormState
  name: keyof SignupFormState
  label: string
  placeholder: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
  type?: 'text' | 'email'
  autoComplete?: string
}

function FormField({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  icon,
  type = 'text',
  autoComplete,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-semibold text-slate-800"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className="
            h-12 w-full rounded-lg border border-slate-300
            bg-[#f8fafc] px-11 text-sm text-slate-900 outline-none
            transition placeholder:text-slate-400
            focus:border-[#168b83] focus:bg-white focus:ring-4
            focus:ring-teal-100
          "
        />

        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
          {icon}
        </span>
      </div>
    </div>
  )
}

interface PasswordFieldProps {
  id: keyof SignupFormState
  name: keyof SignupFormState
  label: string
  placeholder: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  showPassword: boolean
  onToggleVisibility: () => void
}

function PasswordField({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  showPassword,
  onToggleVisibility,
}: PasswordFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-semibold text-slate-800"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={name}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={
            id === 'password' ? 'new-password' : 'new-password'
          }
          className="
            h-12 w-full rounded-lg border border-slate-300
            bg-[#f8fafc] px-11 pr-12 text-sm text-slate-900 outline-none
            transition placeholder:text-slate-400
            focus:border-[#168b83] focus:bg-white focus:ring-4
            focus:ring-teal-100
          "
        />

        <LockKeyhole
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <button
          type="button"
          onClick={onToggleVisibility}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          className="
            absolute right-3 top-1/2 -translate-y-1/2 rounded-md
            p-1 text-slate-500 transition hover:text-slate-800
          "
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  )
}

interface PasswordStrengthProps {
  strength: PasswordStrength
}

function PasswordStrength({ strength }: PasswordStrengthProps) {
  const segmentColors = [
    strength.score >= 1 ? 'bg-[#168b83]' : 'bg-slate-200',
    strength.score >= 2 ? 'bg-[#168b83]' : 'bg-slate-200',
    strength.score >= 3 ? 'bg-[#168b83]' : 'bg-slate-200',
    strength.score >= 4 ? 'bg-[#168b83]' : 'bg-slate-200',
  ]

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-1 gap-1">
        {segmentColors.map((color, index) => (
          <span
            key={index}
            className={`h-1 flex-1 rounded-full ${color}`}
          />
        ))}
      </div>

      <span
        className={`min-w-10 text-right text-xs font-semibold ${
          strength.score >= 3 ? 'text-[#168b83]' : 'text-slate-400'
        }`}
      >
        {strength.label}
      </span>
    </div>
  )
}

interface PasswordStrength {
  score: number
  label: string
}

function getPasswordStrength(password: string): PasswordStrength {
  if (!password) {
    return {
      score: 0,
      label: '',
    }
  }

  let score = 0

  if (password.length >= 8) score += 1
  if (/[A-Z]/.test(password)) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[^A-Za-z0-9]/.test(password)) score += 1

  const labelByScore: Record<number, string> = {
    0: '',
    1: 'Weak',
    2: 'Fair',
    3: 'Good',
    4: 'Strong',
  }

  return {
    score,
    label: labelByScore[score],
  }
}

function validateForm(form: SignupFormState): string | null {
  if (!form.fullName.trim()) {
    return 'Please enter your full name.'
  }

  if (!/\S+@\S+\.\S+/.test(form.email)) {
    return 'Please enter a valid work email.'
  }

  if (!form.companyName.trim()) {
    return 'Please enter your company name.'
  }

  if (form.password.length < 8) {
    return 'Password must be at least 8 characters.'
  }

  if (form.password !== form.confirmPassword) {
    return 'Passwords do not match.'
  }

  if (!form.acceptedTerms) {
    return 'Please accept the Terms of Service and Privacy Policy.'
  }

  return null
}

function Divider() {
  return (
    <div className="my-5 flex items-center gap-3 text-sm text-slate-400">
      <span className="h-px flex-1 bg-slate-200" />
      <span>or</span>
      <span className="h-px flex-1 bg-slate-200" />
    </div>
  )
}

function GoogleIcon() {
  return (
    <span className="text-base font-bold text-[#4285f4]" aria-hidden="true">
      G
    </span>
  )
}

function MicrosoftIcon() {
  return (
    <span
      className="grid grid-cols-2 gap-0.5"
      aria-hidden="true"
    >
      <span className="h-2.5 w-2.5 bg-[#f25022]" />
      <span className="h-2.5 w-2.5 bg-[#7fba00]" />
      <span className="h-2.5 w-2.5 bg-[#00a4ef]" />
      <span className="h-2.5 w-2.5 bg-[#ffb900]" />
    </span>
  )
}

export default SignupForm