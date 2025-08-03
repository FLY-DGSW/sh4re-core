import { useState, useMemo, useCallback } from "react";
import * as S from "./style";
import Pagination from "@/components/ui/pagination";
import SearchInput from "@/components/ui/searchInput";
import SortDropdown from "@/components/ui/sortDropdown";
import { announcements } from "@/constants/announcementData";

const sortOptions = [
  { value: "date", label: "최신순" },
  { value: "title", label: "가나다순" },
];

const AnnouncementPage = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("date");
  const [showNoticesOnly, setShowNoticesOnly] = useState(false);
  const itemsPerPage = 10;

  const handleItemClick = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const processedAnnouncements = useMemo(() => {
    const filteredBySearch = announcements.filter((announcement) => {
      const term = searchTerm.toLowerCase();
      return (
        announcement.title.toLowerCase().includes(term) ||
        announcement.content?.toLowerCase().includes(term) ||
        announcement.author.toLowerCase().includes(term)
      );
    });

    const filteredByLabel = showNoticesOnly
      ? filteredBySearch.filter((announcement) => announcement.label === "공지")
      : filteredBySearch;

    const sorted = [...filteredByLabel].sort((a, b) => {
      if (sortOrder === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sortOrder === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return sorted;
  }, [searchTerm, sortOrder, showNoticesOnly]);

  const totalPages = Math.ceil(processedAnnouncements.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedAnnouncements = processedAnnouncements.slice(
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

  const handleShowNoticesOnlyChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowNoticesOnly(e.target.checked);
    setCurrentPage(1);
  };

  return (
    <S.Container>
      <S.MainContent>
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
        <S.AnnouncementList>
          {selectedAnnouncements.map((announcement) => (
            <S.AnnouncementWrapper key={announcement.id}>
              <S.AnnouncementItem
                onClick={() => handleItemClick(announcement.id)}
              >
                <S.AnnouncementLabel label={announcement.label}>
                  [{announcement.label}]
                </S.AnnouncementLabel>
                <S.AnnouncementTitle>{announcement.title}</S.AnnouncementTitle>
                <S.AnnouncementMeta>
                  <S.AnnouncementDate>
                    {announcement.date} · {announcement.author}
                  </S.AnnouncementDate>
                  <S.ChevronIcon $isOpen={openItemId === announcement.id}>
                    ▼
                  </S.ChevronIcon>
                </S.AnnouncementMeta>
              </S.AnnouncementItem>
              <S.AnnouncementContent $isOpen={openItemId === announcement.id}>
                {announcement.content}
              </S.AnnouncementContent>
            </S.AnnouncementWrapper>
          ))}
        </S.AnnouncementList>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </S.MainContent>
    </S.Container>
  );
};

export default AnnouncementPage;
