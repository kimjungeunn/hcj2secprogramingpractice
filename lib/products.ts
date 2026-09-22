export type Product = {
  id: string
  name: string
  description: string
  likes: number
}

const products: Product[] = [
  { id: '1', name: '머그컵', description: '나의 최애 머그컵', likes: 3 },
  { id: '2', name: '노트', description: '나의 최애 노트', likes: 2 },
  { id: '3', name: '볼펜', description: '나의 최애 볼펜', likes: 1 },
  { id: '4', name: '연필', description: '나의 최애 연필', likes: 4 },
]

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getProducts(): Promise<Product[]> {
  await delay(700) // ← 이게 없으면 loading.tsx가 안 보임
  return products
}

export async function getProduct(id: string) {
  await delay(400)
  return products.find((p) => p.id === id)
}

export async function likeProduct(id: string): Promise<number> {
  await delay(300)
  const product = products.find((p) => p.id === id)
  if (!product) return 0
  product.likes += 1
  return product.likes
}
