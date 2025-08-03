import * as S from "./style";
import SortDropdown from "@/components/ui/sortDropdown";
import SearchInput from "@/components/ui/searchInput";
import { AssignmentHeaderProps } from "@/types/assignment/assignment";

const sortOptions = [
  { value: "date", label: "최신순" },
  { value: "title", label: "가나다순" },
];

const AssignmentHeader = ({
  sortOrder,
  handleSortChange,
  searchTerm,
  handleSearchChange,
}: AssignmentHeaderProps) => {
  return (
    <S.PageHeader>
      <S.PageTitle>과제 목록</S.PageTitle>
      <S.HeaderActions>
        <SortDropdown
          options={sortOptions}
          value={sortOrder}
          onChange={handleSortChange}
        />
        <SearchInput
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='과제 찾기'
        />
      </S.HeaderActions>
    </S.PageHeader>
  );
};

export default AssignmentHeader;
