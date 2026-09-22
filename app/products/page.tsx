import Link from 'next/link'
import { getProducts } from '@/lib/products'

export default async function Producspage() {
  const products = await getProducts()

  return (
    <div className="mx-auto max-w-2xl flex-1 px-8 py-16">
      <h1 className="mb-8 text-2xl font-semibold text-black dark:text-zinc-50">
        선호목록
      </h1>

      <ul className="flex flex-col gap-4">
        {products.map((p) => (
          <li key={p.id}>
            <Link
              href={`/products/${p.id}`}
              className="block rounded-lg border border-black/[.08] px-5 py-4 dark:border-white/[0.08] dark:hover:bg-white/[.05]"
            >
              <p className="font-medium text-black dark:text-zinc-50">
                {p.name}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {p.description} · 좋아요 {p.likes}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
