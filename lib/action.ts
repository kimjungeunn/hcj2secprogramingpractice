'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { likeProduct as likeProductInDb } from '@/lib/products'
import { createNotice } from '@/lib/notices'

// 상품 좋아요 기능
export async function likeProductAction(id: string) {
  const newLikes = await likeProductInDb(id)

  // 최신 좋아요 수가 화면에 반영되도록 합니다.
  revalidatePath(`/products/${id}`)
  return newLikes
}

// 공지사항 작성 기능
export async function createNoticeAction(formData: FormData) {
  // 사용자가 입력한 데이터 가져오기
  const title = String(formData.get('title') ?? '').trim()
  const author = String(formData.get('author') ?? '').trim()
  const content = String(formData.get('content') ?? '').trim()

  // 빈칸 검사
  if (!title || !author || !content) {
    throw new Error('모든 항목을 입력해주세요.')
  }

  // MongoDB에 게시글 저장
  await createNotice({ title, author, content })

  // 공지사항 목록 갱신
  revalidatePath('/notices')

  // 공지사항 페이지로 이동
  redirect('/notices')
}
