import { Eye } from 'lucide-react'
import type {
  RecentTransaction,
  TransactionStatus,
} from '../../types/dashboard.types'

interface RecentTransactionsTableProps {
  transactions: RecentTransaction[]
  totalTransactions: number
}

function RecentTransactionsTable({
  transactions,
  totalTransactions,
}: RecentTransactionsTableProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between px-5 py-5">
        <div>
          <h2 className="text-sm font-bold text-slate-800">
            Recent Transactions
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Latest payment activity across all accounts
          </p>
        </div>

        <button
          type="button"
          className="text-xs font-bold text-[#078f82] hover:underline"
        >
          View all transactions
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead className="bg-slate-50">
            <tr className="text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-5 py-3 font-semibold">Transaction ID</th>
              <th className="px-5 py-3 font-semibold">Customer</th>
              <th className="px-5 py-3 font-semibold">Amount</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 font-semibold">Date</th>
              <th className="px-5 py-3 text-right font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-t border-slate-100 text-xs text-slate-600"
              >
                <td className="px-5 py-3 font-medium text-[#078f82]">
                  {transaction.transactionId}
                </td>

                <td className="px-5 py-3">{transaction.customer}</td>

                <td className="px-5 py-3 font-medium text-slate-700">
                  {formatCurrency(transaction.amount)}
                </td>

                <td className="px-5 py-3">
                  <StatusBadge status={transaction.status} />
                </td>

                <td className="px-5 py-3 text-slate-500">
                  {transaction.date}
                </td>

                <td className="px-5 py-3 text-right">
                  <button
                    type="button"
                    aria-label={`View ${transaction.transactionId}`}
                    className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                  >
                    <Eye size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 px-5 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>
          Showing 1–{transactions.length} of {totalTransactions} transactions
        </span>

        <div className="flex items-center gap-1">
          <PaginationButton label="‹" disabled />
          <PaginationButton label="1" active />
          <PaginationButton label="2" />
          <PaginationButton label="3" />
          <PaginationButton label="…" />
          <PaginationButton label="22" />
          <PaginationButton label="›" />
        </div>
      </div>
    </article>
  )
}

interface StatusBadgeProps {
  status: TransactionStatus
}

function StatusBadge({ status }: StatusBadgeProps) {
  const styles: Record<TransactionStatus, string> = {
    SUCCESS: 'bg-emerald-50 text-emerald-500',
    PENDING: 'bg-amber-50 text-amber-500',
    FAILED: 'bg-red-50 text-red-500',
  }

  const labels: Record<TransactionStatus, string> = {
    SUCCESS: 'Success',
    PENDING: 'Pending',
    FAILED: 'Failed',
  }

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${styles[status]}`}
    >
      {labels[status]}
    </span>
  )
}

interface PaginationButtonProps {
  label: string
  active?: boolean
  disabled?: boolean
}

function PaginationButton({
  label,
  active = false,
  disabled = false,
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`flex h-6 min-w-6 items-center justify-center rounded-md border px-1.5 text-[10px] ${
        active
          ? 'border-[#078f82] bg-[#078f82] text-white'
          : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50'
      } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
    >
      {label}
    </button>
  )
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export default RecentTransactionsTable