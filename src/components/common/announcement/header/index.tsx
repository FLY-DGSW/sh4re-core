import * as S from "./style";
import SortDropdown from "@/components/ui/sortDropdown";
import SearchInput from "@/components/ui/searchInput";
import { AnnouncementHeaderProps } from "@/types/announcement/announcement";

const sortOptions = [
  { value: "date", label: "최신순" },
  { value: "title", label: "가나다순" },
];

const AnnouncementHeader = ({
  sortOrder,
  showNoticesOnly,
  handleSortChange,
  handleSearch,
  handleShowNoticesOnlyChange,
}: AnnouncementHeaderProps) => {
  return (
    <S.PageHeader>
      <S.PageTitle>공지사항</S.PageTitle>
      <S.HeaderActions>
        <S.CheckboxContainer>
          <input
            type='checkbox'
            id='notices-only'
            checked={showNoticesOnly}
            onChange={handleShowNoticesOnlyChange}
          />
          <label htmlFor='notices-only'>공지사항만 보기</label>
        </S.CheckboxContainer>
        <SortDropdown
          options={sortOptions}
          value={sortOrder}
          onChange={handleSortChange}
        />
        <SearchInput onSearch={handleSearch} placeholder='공지 찾기' />
      </S.HeaderActions>
    </S.PageHeader>
  );
};

export default AnnouncementHeader;
