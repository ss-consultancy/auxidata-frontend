import { useState } from 'react'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import KpiCard from '../components/dashboard/KpiCard'
import MonthlyPerformanceChart from '../components/dashboard/MonthlyPerformanceChart'
import RecentTransactionsTable from '../components/dashboard/RecentTransactionsTable'
import RevenueCategoryChart from '../components/dashboard/RevenueCategoryChart'
import RevenueTrendChart from '../components/dashboard/RevenueTrendChart'
import TransactionHeatmap from '../components/dashboard/TransactionHeatmap'
import UserActivityChart from '../components/dashboard/UserActivityChart'
import { dashboardMockData } from '../data/dashboardMockData'

function DashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState<boolean>(false)

  return (
    <div className="h-dvh overflow-hidden bg-[#f7f9fc]">
      {/* Desktop sidebar: fixed at the left, never scrolls with content */}
      <DashboardSidebar />

      {/* Mobile sidebar backdrop */}
      {isMobileMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close navigation menu"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-[250px] transform transition-transform
          duration-300 lg:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <DashboardSidebar mobile />
      </div>

      {/* Main application region starts after the desktop sidebar */}
      <div className="flex h-dvh min-w-0 flex-col lg:pl-[198px]">
        {/* Sticky header stays visible when dashboard content scrolls */}
        <div className="sticky top-0 z-30 shrink-0">
          <DashboardHeader
            onMenuClick={() => setIsMobileMenuOpen(true)}
          />
        </div>

        {/* Only this area scrolls */}
        <main className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6 xl:p-8">
          <div className="mx-auto max-w-[1480px] pb-8">
            <DashboardTitle />

            <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {dashboardMockData.metrics.map((metric) => (
                <KpiCard key={metric.id} metric={metric} />
              ))}
            </section>

            <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(300px,0.88fr)]">
              <RevenueTrendChart
                data={dashboardMockData.revenueTrend}
              />

              <RevenueCategoryChart
                data={dashboardMockData.revenueByCategory}
              />
            </section>

            <section className="mt-4 grid gap-4 lg:grid-cols-3">
              <MonthlyPerformanceChart
                data={dashboardMockData.monthlyPerformance}
              />

              <UserActivityChart
                data={dashboardMockData.userActivity}
              />

              <TransactionHeatmap
                data={dashboardMockData.transactionHours}
              />
            </section>

            <section className="mt-4">
              <RecentTransactionsTable
                transactions={dashboardMockData.recentTransactions}
                totalTransactions={dashboardMockData.totalTransactions}
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

function DashboardTitle() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
          Dashboard Overview
        </h1>

        <p className="mt-1 text-xs text-slate-500">
          Key performance metrics for September 2026
        </p>
      </div>

      <button
        type="button"
        className="
          inline-flex h-9 items-center gap-2 self-start rounded-lg
          border border-slate-200 bg-white px-3 text-xs font-semibold
          text-slate-600 shadow-sm hover:bg-slate-50 sm:self-auto
        "
      >
        <span>▣</span>
        Last 6 months
      </button>
    </div>
  )
}

export default DashboardPage