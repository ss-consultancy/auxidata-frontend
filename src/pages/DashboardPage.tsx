import { BarChart3, Database, LogOut, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function DashboardPage() {
  const navigate = useNavigate()

  const userEmail = sessionStorage.getItem('auxi_email') ?? 'user@auxidata.com'

  function handleLogout() {
    sessionStorage.removeItem('auxi_authenticated')
    sessionStorage.removeItem('auxi_email')
    navigate('/login')
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6 sm:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#20aeba]">Auxi Data</p>

            <h1 className="mt-1 text-3xl font-semibold text-slate-900">
              Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              Signed in as {userEmail}
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="
              inline-flex items-center justify-center gap-2 rounded-lg
              border border-slate-300 px-4 py-2.5 text-sm font-medium
              text-slate-700 transition hover:bg-slate-50
            "
          >
            <LogOut size={17} />
            Sign out
          </button>
        </header>

        <section className="mt-6 grid gap-5 md:grid-cols-3">
          <DashboardCard
            icon={<Users size={23} />}
            label="Total Users"
            value="1,248"
            change="+12.5% this month"
            iconClassName="bg-cyan-100 text-cyan-600"
          />

          <DashboardCard
            icon={<Database size={23} />}
            label="Data Sources"
            value="48"
            change="+8.2% this month"
            iconClassName="bg-teal-100 text-teal-600"
          />

          <DashboardCard
            icon={<BarChart3 size={23} />}
            label="Queries Run"
            value="28,934"
            change="+15.3% this month"
            iconClassName="bg-purple-100 text-purple-600"
          />
        </section>

        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Frontend baseline is working
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Your React Router navigation, TypeScript files, login flow, and
            dashboard route are now connected correctly. The next step is to
            replace this placeholder dashboard with the full dashboard preview
            from your Figma design and then connect the login form to your
            Spring Boot authentication API.
          </p>
        </section>
      </div>
    </main>
  )
}

interface DashboardCardProps {
  icon: React.ReactNode
  label: string
  value: string
  change: string
  iconClassName: string
}

function DashboardCard({
  icon,
  label,
  value,
  change,
  iconClassName,
}: DashboardCardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClassName}`}
      >
        {icon}
      </div>

      <p className="mt-5 text-sm text-slate-500">{label}</p>

      <p className="mt-1 text-3xl font-semibold text-slate-900">{value}</p>

      <p className="mt-2 text-sm font-medium text-emerald-600">{change}</p>
    </article>
  )
}

export default DashboardPage