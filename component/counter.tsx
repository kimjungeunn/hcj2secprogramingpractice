"use client"

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-black/[.08] p-6 dark:border-white/[0.08]">
      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
        현재 카운트: <span className="font-semibold text-black dark:text-zinc-50">{count}</span>
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="rounded-lg bg-black/[.05] px-3 py-1.5 text-xs font-semibold text-zinc-800 hover:bg-black/[.1] dark:bg-white/[0.05] dark:text-zinc-200 dark:hover:bg-white/[.1]"
        >
          -1 감소
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-black text-white px-3 py-1.5 text-xs font-semibold hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          +1 증가
        </button>
      </div>
    </div>
  )
}
