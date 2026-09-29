import type { TransactionHourPoint } from '../../types/dashboard.types'

interface TransactionHeatmapProps {
  data: TransactionHourPoint[]
}

function TransactionHeatmap({
  data,
}: TransactionHeatmapProps) {
  return (
    <article className="h-[220px] rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
      <h2 className="text-sm font-bold text-slate-800">
        Transaction Hours
      </h2>

      <div className="mt-5 space-y-1.5">
        {data.map((row) => (
          <div key={row.hour} className="grid grid-cols-8 gap-1.5">
            {row.values.map((value, index) => (
              <span
                key={`${row.hour}-${index}`}
                title={`${row.hour}: ${value}`}
                className={`h-4 rounded-[3px] ${getHeatmapColor(value)}`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-between text-[9px] text-slate-400">
        <span>12 AM</span>
        <span>Peak 2–6 PM</span>
        <span>11 PM</span>
      </div>
    </article>
  )
}

function getHeatmapColor(value: number): string {
  const colors: Record<number, string> = {
    1: 'bg-[#e5f4f2]',
    2: 'bg-[#b7e2dd]',
    3: 'bg-[#63c4bb]',
    4: 'bg-[#058f82]',
  }

  return colors[value] ?? 'bg-slate-100'
}

export default TransactionHeatmap