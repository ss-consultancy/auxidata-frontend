export interface DashboardMetric {
  id: string
  label: string
  value: string
  change: number
  comparisonLabel: string
  direction: 'UP' | 'DOWN'
  icon: 'REVENUE' | 'USERS' | 'TRANSACTIONS' | 'AVERAGE'
}

export interface RevenueTrendPoint {
  month: string
  revenue: number
}

export interface RevenueCategory {
  name: string
  value: number
  color: string
}

export interface MonthlyPerformancePoint {
  month: string
  value: number
}

export interface UserActivityPoint {
  day: string
  value: number
}

export interface TransactionHourPoint {
  hour: string
  values: number[]
}

export type TransactionStatus = 'SUCCESS' | 'PENDING' | 'FAILED'

export interface RecentTransaction {
  id: string
  transactionId: string
  customer: string
  amount: number
  status: TransactionStatus
  date: string
}

export interface DashboardOverview {
  periodLabel: string
  metrics: DashboardMetric[]
  revenueTrend: RevenueTrendPoint[]
  revenueByCategory: RevenueCategory[]
  monthlyPerformance: MonthlyPerformancePoint[]
  userActivity: UserActivityPoint[]
  transactionHours: TransactionHourPoint[]
  recentTransactions: RecentTransaction[]
  totalTransactions: number
}