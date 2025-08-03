import * as S from "./style";
import SortDropdown from "@/components/ui/sortDropdown";
import SearchInput from "@/components/ui/searchInput";
import { AnnouncementsHeaderProps } from "@/types/announcements/announcements";

const sortOptions = [
  { value: "date", label: "최신순" },
  { value: "title", label: "가나다순" },
];

const AnnouncementsHeader = ({
  sortOrder,
  showNoticesOnly,
  handleSortChange,
  handleSearch,
  handleShowNoticesOnlyChange,
}: AnnouncementsHeaderProps) => {
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

export default AnnouncementsHeader;
