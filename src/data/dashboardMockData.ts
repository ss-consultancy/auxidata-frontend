import type { DashboardOverview } from '../types/dashboard.types'

export const dashboardMockData: DashboardOverview = {
  periodLabel: 'Last 6 months',

  metrics: [
    {
      id: 'total-revenue',
      label: 'Total Revenue',
      value: '$2.4M',
      change: 12,
      comparisonLabel: 'vs last month',
      direction: 'UP',
      icon: 'REVENUE',
    },
    {
      id: 'active-users',
      label: 'Active Users',
      value: '12,543',
      change: 8,
      comparisonLabel: 'vs last month',
      direction: 'UP',
      icon: 'USERS',
    },
    {
      id: 'transactions',
      label: 'Transactions',
      value: '8,432',
      change: 3,
      comparisonLabel: 'vs yesterday',
      direction: 'DOWN',
      icon: 'TRANSACTIONS',
    },
    {
      id: 'average-transaction',
      label: 'Avg. Transaction',
      value: '$284.50',
      change: 5,
      comparisonLabel: 'vs last month',
      direction: 'UP',
      icon: 'AVERAGE',
    },
  ],

  revenueTrend: [
    { month: 'Apr', revenue: 62000 },
    { month: 'May', revenue: 84000 },
    { month: 'Jun', revenue: 71000 },
    { month: 'Jul', revenue: 101000 },
    { month: 'Aug', revenue: 98000 },
    { month: 'Sep', revenue: 130000 },
  ],

  revenueByCategory: [
    {
      name: 'Subscriptions',
      value: 45,
      color: '#397ee8',
    },
    {
      name: 'One-time',
      value: 30,
      color: '#61c4bc',
    },
    {
      name: 'Enterprise',
      value: 25,
      color: '#efa91d',
    },
  ],

  monthlyPerformance: [
    { month: 'Apr', value: 58 },
    { month: 'May', value: 82 },
    { month: 'Jun', value: 70 },
    { month: 'Jul', value: 110 },
    { month: 'Aug', value: 96 },
    { month: 'Sep', value: 124 },
  ],

  userActivity: [
    { day: 'Mon', value: 24 },
    { day: 'Tue', value: 45 },
    { day: 'Wed', value: 30 },
    { day: 'Thu', value: 68 },
    { day: 'Fri', value: 52 },
    { day: 'Sat', value: 86 },
    { day: 'Sun', value: 72 },
  ],

  transactionHours: [
    {
      hour: '12 AM',
      values: [1, 2, 1, 3, 1, 2, 1, 3],
    },
    {
      hour: '3 AM',
      values: [2, 3, 2, 3, 2, 3, 2, 3],
    },
    {
      hour: '6 AM',
      values: [3, 2, 3, 2, 3, 2, 3, 2],
    },
    {
      hour: '9 AM',
      values: [4, 3, 4, 3, 4, 3, 4, 3],
    },
    {
      hour: '12 PM',
      values: [2, 4, 2, 4, 2, 4, 2, 4],
    },
  ],

  recentTransactions: [
    {
      id: 'transaction-98421',
      transactionId: '#TXN-98421',
      customer: 'Olivia Martin',
      amount: 1240,
      status: 'SUCCESS',
      date: 'Sep 25, 10:42 AM',
    },
    {
      id: 'transaction-98420',
      transactionId: '#TXN-98420',
      customer: 'Ethan Brooks',
      amount: 384.5,
      status: 'PENDING',
      date: 'Sep 25, 10:18 AM',
    },
    {
      id: 'transaction-98419',
      transactionId: '#TXN-98419',
      customer: 'Sophia Chen',
      amount: 2860,
      status: 'SUCCESS',
      date: 'Sep 25, 9:56 AM',
    },
    {
      id: 'transaction-98418',
      transactionId: '#TXN-98418',
      customer: 'Noah Williams',
      amount: 129.99,
      status: 'FAILED',
      date: 'Sep 25, 9:31 AM',
    },
    {
      id: 'transaction-98417',
      transactionId: '#TXN-98417',
      customer: 'Mia Rodriguez',
      amount: 745.2,
      status: 'SUCCESS',
      date: 'Sep 25, 8:47 AM',
    },
    {
      id: 'transaction-98416',
      transactionId: '#TXN-98416',
      customer: 'Liam Patel',
      amount: 512,
      status: 'PENDING',
      date: 'Sep 25, 8:15 AM',
    },
  ],

  totalTransactions: 128,
}