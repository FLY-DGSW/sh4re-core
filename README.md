# Sh4re Core

## 기술 스택

- **React**
- **TypeScript**
- **Vite**
- **styled-components**
- **React Query**
- **React Router**

## 시작하는 방법

### 필요 조건

- Node.js 18+
- pnpm

### 설치 및 실행

```bash
pnpm install

pnpm dev

pnpm build

pnpm preview
```

## 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
├── pages/              # 페이지 컴포넌트
├── styles/             # 스타일 관련 파일
│   ├── theme.ts        # 테마 설정
│   ├── typography.ts   # 타이포그래피 시스템
│   └── GlobalStyle.ts  # 전역 스타일
├── App.tsx             # 메인 앱 컴포넌트
├── router.tsx          # 라우터 설정
└── main.tsx            # 엔트리 포인트
```

## 디자인 시스템

### 컬러

- **Primary**: Blue, Red, Orange, Green
- **Background**: Primary, Secondary, Selected, Light
- **Text**: Primary, Secondary, Button

### 타이포그래피

- **Heading1**: 36px, Bold
- **Heading2**: 28px, Bold
- **Heading3**: 24px, Bold/Medium
- **SubHeading**: 20px, SemiBold/Medium
- **Body**: 16px, Regular
- **Body2**: 12px, Regular
- **Caption**: 10px, Regular

### 사용 방법

```typescript
// 컬러 사용
const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.blue};
  color: ${({ theme }) => theme.colors.text.button};
`;

// 타이포그래피 사용
const Title = styled.h1`
  ${Typography("heading1")}
  color: ${({ theme }) => theme.colors.text.primary};
`;
```

## 컨벤션

- 컴포넌트: PascalCase (예: `HomePage.tsx`)
- 일반 파일: camelCase (예: `theme.ts`)

### 커밋 메시지

```
<type>: <description>

예시:
feat: 사용자 프로필 페이지 추가
fix: 로그인 버튼 클릭 오류 수정
style: 헤더 컴포넌트 스타일 개선
refactor: 테마 시스템 구조 변경
docs: README 업데이트
```

#### 타입

- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **style**: 코드 스타일 변경
- **refactor**: 코드 리팩토링
- **docs**: 문서 수정
- **chore**: 빌드 설정, 패키지 관리 등
