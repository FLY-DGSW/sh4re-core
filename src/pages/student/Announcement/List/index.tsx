import * as S from "./style";
import Pagination from "@/components/ui/Pagination";
import SortDropdown from "@/components/ui/SortDropdown";
import SearchInput from "@/components/ui/SearchInput";
import { useAnnouncements } from "@/hooks/announcements/useAnnouncements";
import { useState } from "react";
import AnnouncementsItem from "@/components/common/AnnouncementsItem";

const sortOptions = [
  { value: "date", label: "최신순" },
  { value: "title", label: "가나다순" },
];

const AnnouncementsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    openItemId,
    currentPage,
    sortOrder,
    showNoticesOnly,
    totalPages,
    selectedAnnouncements,
    isLoading,
    error,
    handleItemClick,
    setCurrentPage,
    handleSortChange,
    handleShowNoticesOnlyChange,
  } = useAnnouncements(searchTerm);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <S.Container>
      <S.MainContent>
        {/* Header */}
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
            <SearchInput
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder='공지 찾기'
            />
          </S.HeaderActions>
        </S.PageHeader>

        {/* List */}
        <S.List>
          {selectedAnnouncements.map((announcement) => (
            <AnnouncementsItem
              key={announcement.id}
              announcement={announcement}
              isOpen={openItemId === announcement.id}
              onClick={() => handleItemClick(announcement.id)}
            />
          ))}
        </S.List>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </S.MainContent>
    </S.Container>
  );
};

export default AnnouncementsPage;
