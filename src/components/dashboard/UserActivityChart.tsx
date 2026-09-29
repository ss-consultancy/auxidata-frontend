import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { UserActivityPoint } from '../../types/dashboard.types'

interface UserActivityChartProps {
  data: UserActivityPoint[]
}

function UserActivityChart({ data }: UserActivityChartProps) {
  return (
    <article className="h-[220px] rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
      <h2 className="text-sm font-bold text-slate-800">
        User Activity (7 days)
      </h2>

      <div className="mt-4 h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              vertical={false}
              stroke="#edf2f7"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#94a3b8',
                fontSize: 9,
              }}
            />

            <YAxis hide />

            <Tooltip
              formatter={(value) => [value, 'Activity']}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#3983e7"
              strokeWidth={2}
              dot={{
                r: 3,
                fill: '#3983e7',
                strokeWidth: 2,
                stroke: '#ffffff',
              }}
              activeDot={{
                r: 5,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  )
}

export default UserActivityChart