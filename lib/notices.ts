export interface Notice {
  id: string
  title: string
  author: string
  createdAt: string
  content?: string
}

const MOCK_NOTICES: Notice[] = [
  {
    id: '1',
    title: '환영합니다! 첫 번째 공지사항입니다.',
    author: '운영자',
    createdAt: '2024-03-20',
    content: '첫 번째 공지사항의 상세 내용입니다.',
  },
  {
    id: '2',
    title: '새로운 기능이 업데이트 되었습니다.',
    author: '개발팀',
    createdAt: '2024-03-18',
    content: '업데이트 된 새로운 기능들에 대한 설명입니다.',
  },
  {
    id: '3',
    title: '서버 점검 안내 (예정)',
    author: '운영자',
    createdAt: '2024-03-15',
    content: '서버 점검에 대한 상세 안내입니다.',
  },
]

// 1. 서버 컴포넌트(page.tsx)에서 사용할 데이터 가져오기 함수입니다.
// async를 붙여서 비동기 함수로 만듭니다.
export async function getNotices(): Promise<Notice[]> {
  // 실제 서버에서 데이터를 가져오는 것처럼 1.5초 정도 기다리는 효과를 줍니다.
  // 이 시간 동안 app/notices/loading.tsx 화면이 보여집니다.
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // 가상의 공지사항 목록 데이터를 반환합니다.
  return MOCK_NOTICES
}

// 개별 공지사항 상세 데이터를 가져오는 함수
export async function getNotice(id: string): Promise<Notice | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return MOCK_NOTICES.find((notice) => notice.id === id)
}
