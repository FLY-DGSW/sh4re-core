import * as S from "./style";
import Pagination from "@/components/ui/Pagination";
import SortDropdown from "@/components/ui/SortDropdown";
import SearchInput from "@/components/ui/SearchInput";
import { useHandouts } from "@/hooks/handouts/useHandouts";
import { useState } from "react";
import HandoutsItem from "@/components/common/HandoutsItem";

const sortOptions = [
  { value: "date", label: "최신순" },
  { value: "title", label: "가나다순" },
];

const HandoutsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    currentPage,
    sortOrder,
    totalPages,
    selectedHandouts,
    handleSortChange,
    setCurrentPage,
  } = useHandouts(searchTerm);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

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
            <SearchInput
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder='자료 찾기'
            />
          </S.HeaderActions>
        </S.PageHeader>
        <S.HandoutList>
          {selectedHandouts.map((handout) => (
            <HandoutsItem key={handout.id} handout={handout} />
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
