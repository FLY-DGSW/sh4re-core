import { AnnouncementProps } from "@/types/announcement/announcement";

export const announcements: AnnouncementProps[] = [
  {
    id: 1,
    label: "과제",
    title: "React Hook Form과 Zod를 활용한 폼 검증 구현",
    date: "2025.08.01",
    author: "김태현",
    content: `이번 과제는 React Hook Form과 Zod 라이브러리를 사용하여 견고한 폼 검증 시스템을 구현하는 것입니다.

📋 과제 요구사항:
• React Hook Form을 사용한 회원가입 폼 구현
• Zod 스키마를 활용한 클라이언트 사이드 검증
• 실시간 에러 메시지 표시
• TypeScript 타입 안전성 확보

🗓️ 제출 기한: 2025년 8월 8일 23:59까지
📂 제출 방법: GitHub Repository 링크 제출

참고 자료와 예시 코드는 강의 자료실에서 확인하실 수 있습니다.`,
  },
  {
    id: 2,
    label: "공지",
    title: "2025 여름 해커톤 대회 우승팀 발표 🎉",
    date: "2025.07.30",
    author: "박지민",
    content: `2025 여름 해커톤 대회가 성공적으로 마무리되었습니다!

🏆 수상팀 발표:
• 대상: Team CodeCrafters - "AI 기반 학습 도우미 플랫폼"
• 최우수상: Team DevNinja - "실시간 코드 리뷰 시스템"
• 우수상: Team ByteBuilders - "개발자 포트폴리오 자동 생성기"

🎁 시상식: 2025년 8월 5일 오후 2시, 대강당
💰 상금 및 부상: 대상 100만원, 최우수상 50만원, 우수상 30만원

모든 참가자들의 열정과 노력에 깊은 감사를 드립니다!`,
  },
  {
    id: 3,
    label: "과제",
    title: "Next.js 13 App Router와 Server Components",
    date: "2025.07.28",
    author: "이상민",
    content: `Next.js 13의 새로운 App Router와 Server Components를 활용한 블로그 애플리케이션을 구현해보세요.

🎯 학습 목표:
• App Router의 폴더 기반 라우팅 시스템 이해
• Server Components와 Client Components의 차이점 학습
• 데이터 페칭 최적화 (fetch, cache, revalidate)
• 동적 라우팅과 메타데이터 관리

📝 구현 기능:
• 블로그 포스트 목록 페이지
• 상세 페이지 (동적 라우팅)
• 검색 기능 (Client Component)
• SEO 최적화

⏰ 제출 기한: 2025년 8월 10일까지`,
  },
  {
    id: 4,
    label: "공지",
    title: "AWS 클라우드 실습 환경 오픈 안내 ☁️",
    date: "2025.07.27",
    author: "최윤서",
    content: `AWS 클라우드 실습을 위한 교육용 계정이 준비되었습니다.

🔑 접속 정보:
• AWS 교육용 계정 생성 완료
• 실습 가능 서비스: EC2, S3, RDS, Lambda, CloudFront
• 월 사용 한도: $100 (초과 시 자동 차단)

📚 실습 과정:
1. EC2 인스턴스 생성 및 웹서버 배포
2. S3를 활용한 정적 웹사이트 호스팅
3. RDS 데이터베이스 연동
4. Lambda 서버리스 함수 구현

⚠️ 주의사항:
• 실습 후 반드시 리소스 삭제
• 비용 발생 방지를 위해 인스턴스 중지 확인
• 계정 정보는 절대 외부 공유 금지`,
  },
  {
    id: 5,
    label: "과제",
    title: "TypeScript 고급 타입과 유틸리티 타입 마스터하기",
    date: "2025.07.25",
    author: "정현우",
    content: `TypeScript의 고급 타입 시스템을 깊이 있게 학습하는 과제입니다.

🎯 학습 주제:
• Generic Types와 Conditional Types
• Mapped Types와 Template Literal Types
• 유틸리티 타입 (Pick, Omit, Partial, Required 등)
• 타입 가드와 타입 추론

💻 실습 과제:
• 타입 안전한 API 클라이언트 구현
• 폼 데이터 검증 타입 시스템 구축
• 고급 타입을 활용한 상태 관리

📖 참고 자료:
• TypeScript 공식 문서 Advanced Types
• 강의 자료의 예제 코드 및 해설

제출 시 타입 정의의 이유와 장점을 주석으로 상세히 설명해주세요.`,
  },
  {
    id: 6,
    label: "공지",
    title: "2025 하반기 취업 특강 시리즈 개최 📈",
    date: "2025.07.24",
    author: "김영희",
    content: `개발자 취업을 위한 특별 강연 시리즈를 준비했습니다.

📅 일정:
• 8월 12일: "개발자 이력서 작성법과 포트폴리오 전략" - 네이버 김OO 개발자
• 8월 19일: "기술 면접 완전 정복" - 카카오 이OO 테크리드
• 8월 26일: "신입 개발자 생존 가이드" - 토스 박OO 시니어 개발자
• 9월 2일: "스타트업 vs 대기업, 어디로 갈까?" - 다양한 회사 패널 토론

🕐 시간: 매주 월요일 오후 7시~9시
📍 장소: 온라인 (Zoom) + 오프라인 동시 진행
💰 참가비: 무료

사전 등록 필수! 선착순 100명 모집합니다.`,
  },
  {
    id: 7,
    label: "공지",
    title: "여름휴가 기간 중 학습실 운영 안내 🏖️",
    date: "2025.07.22",
    author: "관리팀",
    content: `여름휴가 기간 중 학습실 운영 일정을 안내드립니다.

📅 휴무 기간: 8월 15일 ~ 8월 18일 (광복절 연휴)
⏰ 운영 시간 조정:
• 평일: 오전 9시 ~ 오후 9시 (기존 10시에서 단축)
• 주말: 오전 10시 ~ 오후 6시

🔒 출입 방법:
• 기존 출입카드 그대로 사용
• 야간 출입 시 보안업체 확인 필수

📞 긴급 연락처: 010-XXXX-XXXX (관리실)

안전하고 즐거운 여름휴가 보내세요!`,
  },
  {
    id: 8,
    label: "과제",
    title: "Docker와 Kubernetes를 활용한 컨테이너 오케스트레이션",
    date: "2025.07.20",
    author: "송준호",
    content: `현대적인 애플리케이션 배포를 위한 컨테이너 기술을 학습합니다.

🐳 Docker 실습:
• Dockerfile 작성 및 이미지 빌드
• 멀티 스테이지 빌드 최적화
• Docker Compose를 활용한 멀티 컨테이너 환경
• 볼륨과 네트워크 관리

☸️ Kubernetes 기초:
• Pod, Service, Deployment 개념
• YAML 매니페스트 작성
• 로드밸런싱과 스케일링
• ConfigMap과 Secret 활용

🚀 최종 과제:
React 앱을 Docker 컨테이너로 빌드하고, Kubernetes 클러스터에 배포하는 전 과정을 구현해주세요.

미니큐브(minikube) 설치 가이드는 별도 제공됩니다.`,
  },
  {
    id: 9,
    label: "공지",
    title: "오픈소스 컨트리뷰션 챌린지 시작! 🚀",
    date: "2025.07.18",
    author: "오지현",
    content: `개발자로서의 성장을 위한 오픈소스 기여 프로그램을 시작합니다.

🎯 프로그램 목표:
• 실제 오픈소스 프로젝트에 기여
• 협업과 코드 리뷰 경험
• GitHub 포트폴리오 강화
• 개발자 커뮤니티 네트워킹

📋 참여 방법:
1. 관심 있는 오픈소스 프로젝트 선정
2. 이슈 분석 및 기여 방안 계획 수립
3. Pull Request 제출
4. 월말 성과 발표

🏆 인센티브:
• 우수 기여자 시상 (상금 + 추천서)
• 컨트리뷰션 이력 LinkedIn 인증
• 메인테이너와의 1:1 멘토링 기회

참가 신청은 8월 1일까지 받습니다!`,
  },
  {
    id: 10,
    label: "과제",
    title: "GraphQL과 Apollo Client를 활용한 데이터 페칭 최적화",
    date: "2025.07.16",
    author: "임수진",
    content: `REST API의 한계를 극복하는 GraphQL을 학습하고 실습해보세요.

📚 학습 내용:
• GraphQL 쿼리 언어 문법
• Schema 설계와 Resolver 구현
• Apollo Server를 활용한 GraphQL 서버 구축
• Apollo Client로 React 앱과 연동

🛠️ 실습 프로젝트:
"도서 관리 시스템"을 GraphQL로 구��하세요.

필수 기능:
• 도서 목록 조회 (페이지네이션)
• 도서 상세 정보 (작가, 출판사, 리뷰 포함)
• 도서 검색 및 필터링
• 사용자 인증 및 즐겨찾기

⚡ 성능 최적화:
• Query 최적화와 N+1 문제 해결
• DataLoader를 활용한 배치 처리
• 캐싱 전략 수립

GraphQL Playground를 활용한 API 테스트도 포함해주세요.`,
  },
  {
    id: 11,
    label: "공지",
    title: "개발 환경 업그레이드 완료 안내 💻",
    date: "2025.07.14",
    author: "IT 지원팀",
    content: `학습실 개발 환경이 최신 사양으로 업그레이드되었습니다.

🔧 업그레이드 내용:
• 모든 PC에 SSD 512GB로 교체
• 메모리 16GB → 32GB 확장
• 듀얼 모니터 (27인치) 설치 완료
• 기계식 키보드 및 게이밍 마우스 지급

💾 소프트웨어 업데이트:
• Node.js v18 LTS
• Python 3.11
• Docker Desktop 최신 버전
• VS Code 확장 프로그램 일괄 설치
• JetBrains 제품군 라이선스 활성화

🌐 네트워크 개선:
• 기가비트 인터넷 (업로드/다운로드 1Gbps)
• Wi-Fi 6 지원 무선 환경

더욱 쾌적한 개발 환경에서 학습하세요!`,
  },
  {
    id: 12,
    label: "과제",
    title: "테스트 주도 개발(TDD)과 Jest를 활용한 단위 테스트",
    date: "2025.07.12",
    author: "한지민",
    content: `품질 높은 코드 작성을 위한 테스트 주도 개발을 실습합니다.

🧪 TDD 사이클:
1. Red: 실패하는 테스트 작성
2. Green: 테스트를 통과하는 최소한의 코드 작성
3. Refactor: 코드 품질 개선

🛠️ 사용 기술:
• Jest: JavaScript 테스팅 프레임워크
• React Testing Library: 컴포넌트 테스트
• MSW: API 모킹
• Istanbul: 코드 커버리지 측정

📝 실습 과제:
"할일 관리 앱"을 TDD로 개발하세요.

테스트해야 할 기능:
• 할일 추가/삭제/수정
• 완료 상태 토글
• 필터링 (전체/완료/미완료)
• 로컬스토리지 연동

목표 커버리지: 90% 이상
테스트 케이스와 구현 코드를 함께 제출해주세요.`,
  },
  {
    id: 13,
    label: "공지",
    title: "2025 하반기 교육과정 수강생 모집 📚",
    date: "2025.07.10",
    author: "교육팀",
    content: `2025년 하반기 새로운 교육과정이 개설됩니다.

🚀 신규 과정:
• "풀스택 개발자 마스터 과정" (6개월)
• "AI/ML 엔지니어 부트캠프" (4개월)
• "클라우드 아키텍트 전문가 과정" (3개월)
• "모바일 앱 개발 (React Native)" (3개월)

📅 ���강 일정:
• 1차: 2025년 9월 2일
• 2차: 2025년 10월 7일

🎓 수료 혜택:
• 수료증 발급
• 취업 지원 서비스 (이력서 첨삭, 면접 코칭)
• 기업 연계 취업 기회 제공
• 수료생 네트워크 참여

💰 수강료:
• 조기 등록 시 20% 할인
• 재직자 교육비 지원 가능
• 무이자 분할납부 옵션

상담 및 등록: 교육팀 (02-XXX-XXXX)`,
  },
];
