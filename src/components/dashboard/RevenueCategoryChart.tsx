import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import type { RevenueCategory } from '../../types/dashboard.types'

interface RevenueCategoryChartProps {
  data: RevenueCategory[]
}

function RevenueCategoryChart({
  data,
}: RevenueCategoryChartProps) {
  return (
    <article className="h-[300px] rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
      <h2 className="text-sm font-bold text-slate-800">
        Revenue by Category
      </h2>

      <div className="mt-3 flex h-[235px] items-center gap-3">
        <div className="h-full w-[58%]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius="61%"
                outerRadius="86%"
                paddingAngle={2}
                stroke="none"
              >
                {data.map((category) => (
                  <Cell key={category.name} fill={category.color} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => [`${value}%`, 'Share']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          {data.map((category) => (
            <div
              key={category.name}
              className="flex items-center gap-2 text-xs"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: category.color }}
              />

              <span className="text-slate-500">{category.name}</span>

              <span className="font-bold text-slate-700">
                {category.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default RevenueCategoryChart