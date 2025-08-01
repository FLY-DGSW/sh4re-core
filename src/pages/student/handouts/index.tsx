import { useState, useMemo, useCallback } from "react";
import * as S from "./style";
import DOCXIcon from "@/assets/handouts/docx.svg?url";
import PPTXIcon from "@/assets/handouts/pptx.svg?url";
import XLSXIcon from "@/assets/handouts/xlsx.svg?url";
import HWPIcon from "@/assets/handouts/hwp.svg?url";
import PDFIcon from "@/assets/handouts/pdf.svg?url";
import { HandoutProps } from "@/types/handouts/handouts";
import Pagination from "@/components/ui/pagination";
import SearchInput from "@/components/ui/searchInput";
import SortDropdown from "@/components/ui/sortDropdown";

const handouts: HandoutProps[] = [
  {
    id: 1,
    extension: "PPTX",
    title: "React Hook과 상태 관리 완벽 가이드",
    date: "2025.08.01",
    author: "김태현",
  },
  {
    id: 2,
    extension: "PDF",
    title: "JavaScript ES6+ 문법과 모던 개발 패턴",
    date: "2025.07.30",
    author: "박지민",
  },
  {
    id: 3,
    extension: "DOCX",
    title: "TypeScript 기초부터 고급 타입까지",
    date: "2025.07.28",
    author: "이상민",
  },
  {
    id: 4,
    extension: "PPTX",
    title: "Next.js 13 App Router 심화 학습",
    date: "2025.07.27",
    author: "최윤서",
  },
  {
    id: 5,
    extension: "XLSX",
    title: "프론트엔드 성능 최적화 체크리스트",
    date: "2025.07.25",
    author: "정현우",
  },
  {
    id: 6,
    extension: "HWP",
    title: "웹 접근성과 시맨틱 HTML 작성법",
    date: "2025.07.24",
    author: "김영희",
  },
  {
    id: 7,
    extension: "PDF",
    title: "CSS Grid와 Flexbox 레이아웃 마스터",
    date: "2025.07.22",
    author: "송민준",
  },
  {
    id: 8,
    extension: "PPTX",
    title: "RESTful API 설계 원칙과 Best Practice",
    date: "2025.07.20",
    author: "송준호",
  },
  {
    id: 9,
    extension: "DOCX",
    title: "Git 브랜치 전략과 협업 워크플로우",
    date: "2025.07.18",
    author: "오지현",
  },
  {
    id: 10,
    extension: "PDF",
    title: "데이터베이스 정규화와 인덱스 최적화",
    date: "2025.07.16",
    author: "임수진",
  },
  {
    id: 11,
    extension: "XLSX",
    title: "웹 보안 취약점 분석 및 대응 방안",
    date: "2025.07.14",
    author: "한지민",
  },
  {
    id: 12,
    extension: "HWP",
    title: "Node.js와 Express 서버 개발 가이드",
    date: "2025.07.12",
    author: "윤서연",
  },
  {
    id: 13,
    extension: "PPTX",
    title: "Docker 컨테이너와 배포 자동화",
    date: "2025.07.10",
    author: "강도현",
  },
  {
    id: 14,
    extension: "PDF",
    title: "알고리즘과 자료구조 핵심 정리",
    date: "2025.07.08",
    author: "조예린",
  },
  {
    id: 15,
    extension: "DOCX",
    title: "테스트 주도 개발(TDD) 실전 가이드",
    date: "2025.07.06",
    author: "이준혁",
  },
  {
    id: 16,
    extension: "XLSX",
    title: "프로젝트 관리와 애자일 방법론",
    date: "2025.07.04",
    author: "김소영",
  },
  {
    id: 17,
    extension: "HWP",
    title: "클린 코드 작성법과 리팩토링 기법",
    date: "2025.07.02",
    author: "박재호",
  },
  {
    id: 18,
    extension: "PDF",
    title: "GraphQL과 Apollo Client 활용법",
    date: "2025.06.30",
    author: "정민아",
  },
];

const getIconByExtension = (extension: string) => {
  switch (extension) {
    case "DOCX":
      return DOCXIcon;
    case "PPTX":
      return PPTXIcon;
    case "XLSX":
      return XLSXIcon;
    case "HWP":
      return HWPIcon;
    case "PDF":
      return PDFIcon;
    default:
      return DOCXIcon;
  }
};

const sortOptions = [
  { value: "date", label: "최신순" },
  { value: "title", label: "가나다순" },
];

const HandoutsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("date");
  const itemsPerPage = 12;

  const processedHandouts = useMemo(() => {
    const filtered = handouts.filter((handout) =>
      handout.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sortOrder === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return sorted;
  }, [searchTerm, sortOrder]);

  const totalPages = Math.ceil(processedHandouts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedHandouts = processedHandouts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  }, []);

  const handleSortChange = useCallback((order: string) => {
    setSortOrder(order);
    setCurrentPage(1);
  }, []);

  return (
    <S.Container>
      <S.MainContent>
        <S.PageHeader>
          <S.PageTitle>수업자료</S.PageTitle>
          <S.HeaderActions>
            <SortDropdown
              options={sortOptions}
              value={sortOrder}
              onChange={handleSortChange}
            />
            <SearchInput onSearch={handleSearch} placeholder='자료 찾기' />
          </S.HeaderActions>
        </S.PageHeader>
        <S.HandoutList>
          {selectedHandouts.map((handout) => (
            <S.HandoutWrapper key={handout.id}>
              <S.HandoutItem>
                <S.HandoutIcon src={getIconByExtension(handout.extension)} />
                <S.HandoutTitle>{handout.title}</S.HandoutTitle>
                <S.HandoutMeta>
                  <S.HandoutDate>
                    {handout.date} · {handout.author}
                  </S.HandoutDate>
                </S.HandoutMeta>
              </S.HandoutItem>
            </S.HandoutWrapper>
          ))}
        </S.HandoutList>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </S.MainContent>
    </S.Container>
  );
};

export default HandoutsPage;
