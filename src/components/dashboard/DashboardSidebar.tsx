import {
  BarChart3,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
  WalletCards,
} from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../features/auth/AuthContext'

interface DashboardSidebarProps {
  mobile?: boolean
}

const navigationItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Analytics',
    path: '/analytics',
    icon: BarChart3,
  },
  {
    label: 'Reports',
    path: '/reports',
    icon: FileText,
  },
  {
    label: 'Transactions',
    path: '/transactions',
    icon: WalletCards,
  },
  {
    label: 'Users',
    path: '/users',
    icon: Users,
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: Settings,
  },
]

function DashboardSidebar({
  mobile = false,
}: DashboardSidebarProps) {
  const navigate = useNavigate()
  const { logout } = useAuth()

  async function handleLogout() {
    await logout()
    navigate('/login', { replace: true })
  }

  const sidebarClassName = mobile
    ? 'flex h-dvh w-full flex-col bg-[#23466f] text-white shadow-2xl'
    : `
        fixed inset-y-0 left-0 z-30 hidden h-dvh w-[198px]
        flex-col bg-[#23466f] text-white lg:flex
      `

  return (
    <aside className={sidebarClassName}>
      <div className="flex h-16 shrink-0 items-center gap-3 border-b border-white/10 px-5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#078f82] text-sm font-bold">
          A
        </div>

        <span className="text-sm font-semibold">Auxi Data</span>
      </div>

      {/* Navigation itself scrolls only if it grows beyond available space */}
      <div className="min-h-0 flex-1 overflow-y-auto px-3 pt-5">
        <p className="px-2 text-[9px] font-bold uppercase tracking-wider text-blue-200/70">
          Workspace
        </p>

        <nav className="mt-3 space-y-1">
          {navigationItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium transition ${
                  isActive
                    ? 'bg-[#078f82] text-white'
                    : 'text-blue-100 hover:bg-white/10'
                }`
              }
            >
              <Icon size={16} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Logout is always pinned at the bottom of sidebar */}
      <div className="shrink-0 border-t border-white/10 px-3 py-4">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-blue-100 transition hover:bg-white/10"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  )
}

export default DashboardSidebar