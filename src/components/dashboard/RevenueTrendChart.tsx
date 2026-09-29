import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { RevenueTrendPoint } from '../../types/dashboard.types'

interface RevenueTrendChartProps {
  data: RevenueTrendPoint[]
}

function RevenueTrendChart({ data }: RevenueTrendChartProps) {
  return (
    <article className="h-[300px] rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
      <div className="mb-5">
        <h2 className="text-sm font-bold text-slate-800">
          Revenue Trend (Last 6 Months)
        </h2>
      </div>

      <ResponsiveContainer width="100%" height="82%">
        <BarChart data={data} barCategoryGap="22%">
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5b92ed" />
              <stop offset="100%" stopColor="#e5edfb" />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            stroke="#eef2f7"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: '#94a3b8',
              fontSize: 10,
            }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: '#94a3b8',
              fontSize: 10,
            }}
            tickFormatter={(value: number) => `$${value / 1000}k`}
          />

          <Tooltip
            cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
            formatter={(value) => [
              `$${Number(value).toLocaleString()}`,
              'Revenue',
            ]}
          />

          <Bar
            dataKey="revenue"
            fill="url(#revenueGradient)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </article>
  )
}

export default RevenueTrendChart