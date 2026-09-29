import {
  Bell,
  CalendarDays,
  ChevronDown,
  CircleHelp,
  Menu,
  Search,
} from 'lucide-react'
import { useState } from 'react'

interface DashboardHeaderProps {
  onMenuClick: () => void
}

function DashboardHeader({
  onMenuClick,
}: DashboardHeaderProps) {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#078f82] text-sm font-bold text-white">
            A
          </div>

          <span className="text-sm font-semibold text-slate-700">
            Auxi Data
          </span>
        </div>
      </div>

      <div className="relative hidden w-full max-w-[335px] md:block">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search analytics..."
          className="
            h-9 w-full rounded-lg border border-slate-200 bg-slate-50
            pl-9 pr-3 text-xs text-slate-700 outline-none
            focus:border-blue-300 focus:ring-4 focus:ring-blue-50
          "
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={17} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>

        <button
          type="button"
          className="hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 sm:block"
          aria-label="Help"
        >
          <CircleHelp size={17} />
        </button>

        <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c49c7b] text-[10px] font-bold text-white">
            AM
          </div>

          <span className="hidden text-xs font-semibold text-slate-700 sm:inline">
            Alex Morgan
          </span>

          <ChevronDown size={14} className="text-slate-400" />
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader