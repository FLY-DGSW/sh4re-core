# Sh4re V2

## 기술 스택

- **React**
- **TypeScript**
- **Vite**
- **styled-components**
- **Tanstack Query**
- **React Router v7**
- **Jotai**

## 설치 및 실행

```bash
pnpm i

pnpm dev
```

## 프로젝트 구조

```
src/
├── api/                 # HTTP 클라이언트 설정
├── components/          # 재사용 가능한 컴포넌트
│   ├── common/          # 비즈니스 로직 컴포넌트
│   └── ui/              # UI 컴포넌트
├── pages/               # 라우트 레벨 페이지 컴포넌트
│   ├── common/          # 공통 페이지
│   ├── student/         # 학생용 페이지
│   └── teacher/         # 교사용 페이지
├── styles/              # 테마 및 스타일링 시스템
│   ├── theme/           # 테마 설정 및 컨텍스트
│   ├── typography.ts    # 타이포그래피 시스템
│   └── GlobalStyle.ts   # 전역 스타일
├── hooks/               # 커스텀 React 훅
├── types/               # TypeScript 타입 정의
├── constants/           # 앱 상수 및 데이터
├── libs/                # 유틸리티 라이브러리
├── util/                # 헬퍼 유틸리티
├── App.tsx              # 메인 앱 컴포넌트
├── router.tsx           # 라우터 설정
└── main.tsx             # 엔트리 포인트
```

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
