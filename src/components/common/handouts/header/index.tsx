import * as S from "./style";
import SortDropdown from "@/components/ui/sortDropdown";
import SearchInput from "@/components/ui/searchInput";
import { HandoutsHeaderProps } from "@/types/handouts/handouts";

const sortOptions = [
  { value: "date", label: "최신순" },
  { value: "title", label: "가나다순" },
];

const HandoutsHeader = ({
  sortOrder,
  handleSortChange,
  searchTerm,
  handleSearchChange,
}: HandoutsHeaderProps) => {
  return (
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
  );
};

export default HandoutsHeader;
