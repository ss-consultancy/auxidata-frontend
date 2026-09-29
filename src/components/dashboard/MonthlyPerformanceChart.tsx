import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts'
import type { MonthlyPerformancePoint } from '../../types/dashboard.types'

interface MonthlyPerformanceChartProps {
  data: MonthlyPerformancePoint[]
}

function MonthlyPerformanceChart({
  data,
}: MonthlyPerformanceChartProps) {
  return (
    <article className="h-[220px] rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
      <h2 className="text-sm font-bold text-slate-800">
        Monthly Performance
      </h2>

      <div className="mt-4 h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="27%">
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#94a3b8',
                fontSize: 9,
              }}
            />

            <Tooltip
              cursor={{ fill: 'rgba(20, 184, 166, 0.05)' }}
              formatter={(value) => [value, 'Performance']}
            />

            <Bar
              dataKey="value"
              fill="#078f82"
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  )
}

export default MonthlyPerformanceChart