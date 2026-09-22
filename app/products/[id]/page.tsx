import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProduct } from '../../../lib/products'
import React from 'react'

type Props = { params: Promise<{ id: string }> }

export default async function ProductDatailPage({ params }: Props) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="mx-auto flex max-w 2xl flex-1 flex-col px-8 py-16">
      <Link href="/products" className="text-sm text-zinc-500 hover:underline">
        ← 목록으로
      </Link>
    </div>
  )
}
