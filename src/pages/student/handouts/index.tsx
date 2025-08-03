import { useState, useMemo, useCallback } from "react";
import * as S from "./style";
import DOCXIcon from "@/assets/handouts/docx.svg?url";
import PPTXIcon from "@/assets/handouts/pptx.svg?url";
import XLSXIcon from "@/assets/handouts/xlsx.svg?url";
import HWPIcon from "@/assets/handouts/hwp.svg?url";
import PDFIcon from "@/assets/handouts/pdf.svg?url";
import Pagination from "@/components/ui/pagination";
import SearchInput from "@/components/ui/searchInput";
import SortDropdown from "@/components/ui/sortDropdown";
import { handouts } from "@/constants/handoutData";

export const getIconByExtension = (extension: string) => {
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
