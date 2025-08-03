import { Chapter } from "@/types/assignment/assignment";

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "React 기초",
    description: "React의 기본 개념과 컴포넌트 작성 방법을 학습합니다.",
    assignments: [
      {
        id: 1,
        label: "제출됨",
        title: "React Hook Form과 Zod를 활용한 폼 검증 구현",
        date: "2025.08.01",
        author: "김태현",
        content: `이번 과제는 React Hook Form과 Zod 라이브러리를 사용하여 견고한 폼 검증 시스템을 구현하는 것입니다.\n\n📋 과제 요구사항:\n• React Hook Form을 사용한 회원가입 폼 구현\n• Zod 스키마를 활용한 클라이언트 사이드 검증\n• 실시간 에러 메시지 표시\n• TypeScript 타입 안전성 확보\n\n🗓️ 제출 기한: 2025년 8월 8일 23:59까지\n📂 제출 방법: GitHub Repository 링크 제출\n\n참고 자료와 예시 코드는 강의 자료실에서 확인하실 수 있습니다.`,
      },
      {
        id: 2,
        label: "누락됨",
        title: "useState와 useEffect를 활용한 상태 관리",
        date: "2025.07.28",
        author: "이지은",
        content: `React의 기본 훅인 useState와 useEffect를 활용하여 상태 관리를 구현하는 과제입니다.\n\n📋 과제 요구사항:\n• useState를 사용한 카운터 앱 구현\n• useEffect를 활용한 API 데이터 페칭\n• 컴포넌트 생명주기 이해 및 적용\n• 조건부 렌더링 구현\n\n🗓️ 제출 기한: 2025년 8월 5일 23:59까지\n📂 제출 방법: CodeSandbox 링크 제출`,
      },
      {
        id: 3,
        label: "제출됨",
        title: "컴포넌트 생명주기와 useEffect 심화",
        date: "2025.08.03",
        author: "박민수",
        content: `useEffect의 의존성 배열과 정리 함수를 활용하는 과제입니다.\n\n📋 과제 요구사항:\n• useEffect 의존성 배열 이해\n• 정리 함수 (cleanup function) 구현\n• 메모리 누수 방지\n• 무한 렌더링 해결\n\n🗓️ 제출 기한: 2025년 8월 10일 23:59까지\n📂 제출 방법: GitHub Repository 링크 제출`,
      },
    ],
  },
  {
    id: 2,
    title: "상태 관리",
    description: "Redux, Zustand 등 상태 관리 라이브러리 사용법을 익힙니다.",
    assignments: [
      {
        id: 4,
        label: "누락됨",
        title: "Redux Toolkit을 활용한 전역 상태 관리",
        date: "2025.07.25",
        author: "박민수",
        content: `Redux Toolkit을 사용하여 전역 상태 관리 시스템을 구축하는 과제입니다.\n\n📋 과제 요구사항:\n• Redux Toolkit을 사용한 스토어 설정\n• createSlice를 활용한 리듀서 작성\n• useSelector와 useDispatch 훅 활용\n• 비동기 액션 처리 (createAsyncThunk)\n\n🗓️ 제출 기한: 2025년 8월 1일 23:59까지 (마감됨)\n📂 제출 방법: GitHub Repository 링크 제출`,
      },
      {
        id: 5,
        label: "할당됨",
        title: "Context API와 useReducer 활용",
        date: "2025.08.02",
        author: "최유진",
        content: `React의 Context API와 useReducer를 활용한 상태 관리 과제입니다.\n\n📋 과제 요구사항:\n• Context API를 사용한 전역 상태 공유\n• useReducer를 활용한 복잡한 상태 로직 관리\n• Provider 패턴 구현\n• 성능 최적화 (useMemo, useCallback)\n\n🗓️ 제출 기한: 2025년 8월 9일 23:59까지\n📂 제출 방법: GitHub Repository 링크 제출`,
      },
    ],
  },
  {
    id: 3,
    title: "스타일링",
    description:
      "CSS-in-JS, Tailwind CSS 등 다양한 스타일링 방법을 학습합니다.",
    assignments: [
      {
        id: 6,
        label: "제출됨",
        title: "Styled-components를 활용한 컴포넌트 스타일링",
        date: "2025.08.02",
        author: "최유진",
        content: `Styled-components를 사용하여 재사용 가능한 스타일 컴포넌트를 작성하는 과제입니다.\n\n📋 과제 요구사항:\n• Styled-components 라이브러리 설치 및 설정\n• 테마 시스템 구축 (ThemeProvider 활용)\n• 동적 스타일링 구현 (props 기반)\n• 반응형 디자인 적용\n\n🗓️ 제출 기한: 2025년 8월 9일 23:59까지\n📂 제출 방법: GitHub Repository 링크 제출`,
      },
      {
        id: 7,
        label: "제출됨",
        title: "Tailwind CSS로 반응형 레이아웃 구현",
        date: "2025.07.30",
        author: "강도현",
        content: `Tailwind CSS를 활용하여 모바일 퍼스트 반응형 레이아웃을 구현하는 과제입니다.\n\n📋 과제 요구사항:\n• Tailwind CSS 설치 및 설정\n• 모바일 퍼스트 반응형 디자인\n• 유틸리티 클래스를 활용한 스타일링\n• 다크 모드 지원\n\n🗓️ 제출 기한: 2025년 8월 6일 23:59까지\n📂 제출 방법: Vercel 배포 링크 제출`,
      },
      {
        id: 8,
        label: "할당됨",
        title: "CSS Modules와 SCSS 활용",
        date: "2025.08.04",
        author: "김서연",
        content: `CSS Modules와 SCSS를 활용한 모듈화된 스타일링 과제입니다.\n\n📋 과제 요구사항:\n• CSS Modules 설정 및 활용\n• SCSS 변수와 믹스인 사용\n• BEM 방법론 적용\n• 스타일 모듈화 및 재사용성 증대\n\n🗓️ 제출 기한: 2025년 8월 11일 23:59까지\n📂 제출 방법: GitHub Repository 링크 제출`,
      },
    ],
  },
];
