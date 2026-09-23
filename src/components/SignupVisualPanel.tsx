import {
  Check,
  Sparkles,
} from 'lucide-react'

function SignupVisualPanel() {
  return (
    <section
      className="
        relative hidden min-h-screen overflow-hidden
        bg-[#234b7b] lg:block
      "
    >
      <BackgroundDecorations />

      <div className="relative z-10 flex min-h-screen flex-col px-12 py-16 xl:px-20">
        <div className="mx-auto mt-20 w-full max-w-[560px]">
          <IntelligenceChart />
          <ConnectedSources />
        </div>

        <div className="mt-auto pb-14 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-teal-200">
            <Sparkles size={14} />
            Data intelligence, unified
          </div>

          <h2 className="mx-auto max-w-[650px] text-4xl font-bold leading-tight text-white xl:text-5xl">
            Join 10,000+ businesses managing their data intelligence
          </h2>
        </div>
      </div>
    </section>
  )
}

function BackgroundDecorations() {
  return (
    <>
      <div className="absolute -left-32 top-28 h-[380px] w-[380px] rounded-full border border-white/10" />
      <div className="absolute left-28 top-36 h-[260px] w-[260px] rounded-full border border-white/10" />
      <div className="absolute right-28 top-40 h-28 w-28 rounded-full border border-white/10" />
      <div className="absolute right-32 top-24 h-14 w-14 rotate-45 border border-white/10" />
      <div className="absolute left-40 top-48 h-3 w-3 rounded-full bg-cyan-400" />
      <div className="absolute left-1/2 top-[330px] h-2 w-2 rounded-full bg-white/50" />
      <div className="absolute bottom-[330px] right-32 h-16 w-16 rotate-45 rounded-lg border border-white/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(95,188,225,0.12),transparent_35%)]" />
    </>
  )
}

function IntelligenceChart() {
  const bars = [32, 47, 42, 65, 56, 81, 70, 88]

  return (
    <div className="ml-auto w-full max-w-[280px] rounded-2xl border border-white/15 bg-white/10 p-4 shadow-xl backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">
          Intelligence coverage
        </p>

        <span className="text-xs font-bold text-teal-300">+24.8%</span>
      </div>

      <div className="mt-8 flex h-24 items-end gap-3">
        {bars.map((height, index) => (
          <div
            key={index}
            className="flex flex-1 items-end"
            style={{ height: `${height}%` }}
          >
            <div className="h-full w-full rounded-t bg-slate-200/90" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ConnectedSources() {
//   const sources = [
//     {
//       name: 'Warehouse synced',
//       icon: Database,
//     },
//     {
//       name: 'CRM enriched',
//       icon: GitBranch,
//     },
//     {
//       name: 'Product events',
//       icon: BarChart3,
//     },
//   ]

const sources = [
  'Warehouse synced',
  'CRM enriched',
  'Product events',
]

  return (
    <div className="mt-20 w-full max-w-[260px] rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
      <h3 className="text-sm font-semibold text-white">
        Connected sources
      </h3>

      <div className="mt-4 space-y-3">
        {sources.map((name) => (
  <div
    key={name}
    className="flex items-center justify-between gap-4 text-xs"
  >
    <span className="flex items-center gap-2 text-slate-100">
      <span className="h-2 w-2 rounded-full bg-teal-300" />
      {name}
    </span>

    <span className="flex items-center gap-1 text-slate-200">
      <Check size={13} className="text-teal-300" />
      Live
    </span>
  </div>
))}
      </div>
    </div>
  )
}

export default SignupVisualPanel