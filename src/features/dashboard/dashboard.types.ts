export interface DashboardMetric {
  id: string
  label: string
  value: string
  percentageChange: number
  trend: 'UP' | 'DOWN' | 'NEUTRAL'
}

export type DataSourceType = 'POSTGRESQL' | 'MYSQL' | 'S3' | 'API'

export type DataSourceStatus = 'ACTIVE' | 'SYNCING' | 'FAILED'

export interface RecentDataSource {
  id: string
  name: string
  type: DataSourceType
  status: DataSourceStatus
  recordCount: number
  connectedAt: string
}