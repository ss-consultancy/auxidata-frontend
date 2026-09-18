import LoginForm from '../components/LoginForm'

function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-[minmax(430px,38%)_1fr]">
        <section className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-16 xl:px-24">
          <LoginForm />
        </section>

        <section
          className="
            relative hidden overflow-hidden bg-gradient-to-br
            from-[#119ba8] via-[#16bec6] to-[#7b35d5]
            lg:flex lg:items-center lg:justify-center
          "
        >
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-purple-500/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-300/40 blur-3xl" />

          <div className="relative z-10 max-w-2xl px-12 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
              Auxi Data Platform
            </p>

            <h2 className="mt-5 text-5xl font-semibold leading-tight">
              Make every business decision data-driven.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-cyan-50">
              Connect data sources, manage pipelines, monitor query
              performance, and give your teams a single view of business
              intelligence.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <Metric label="Data sources" value="48" />
              <Metric label="Queries run" value="28.9K" />
              <Metric label="Data processed" value="2.4 TB" />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

interface MetricProps {
  label: string
  value: string
}

function Metric({ label, value }: MetricProps) {
  return (
    <div className="rounded-xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-sm text-cyan-50">{label}</p>
    </div>
  )
}

export default LoginPage