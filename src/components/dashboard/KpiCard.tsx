import {
  ArrowDownRight,
  ArrowUpRight,
  Calculator,
  CreditCard,
  Repeat2,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type { DashboardMetric } from '../../types/dashboard.types'

interface KpiCardProps {
  metric: DashboardMetric
}

const iconMap: Record<DashboardMetric['icon'], LucideIcon> = {
  REVENUE: CreditCard,
  USERS: Users,
  TRANSACTIONS: Repeat2,
  AVERAGE: Calculator,
}

function KpiCard({ metric }: KpiCardProps) {
  const Icon = iconMap[metric.icon]
  const isPositive = metric.direction === 'UP'

  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-500">
            {metric.label}
          </p>

          <p className="mt-4 text-2xl font-medium tracking-tight text-slate-800">
            {metric.value}
          </p>
        </div>

        <span
          className={`flex h-9 w-9 items-center justify-center rounded-xl ${
            isPositive ? 'bg-teal-50 text-teal-600' : 'bg-red-50 text-red-500'
          }`}
        >
          <Icon size={17} />
        </span>
      </div>

      <div className="mt-4 flex items-center gap-1 text-[11px]">
        {isPositive ? (
          <ArrowUpRight size={14} className="text-emerald-500" />
        ) : (
          <ArrowDownRight size={14} className="text-red-500" />
        )}

        <span
          className={
            isPositive
              ? 'font-semibold text-emerald-500'
              : 'font-semibold text-red-500'
          }
        >
          {isPositive ? '+' : '-'}
          {metric.change}%
        </span>

        <span className="text-slate-400">{metric.comparisonLabel}</span>
      </div>
    </article>
  )
}

export default KpiCard