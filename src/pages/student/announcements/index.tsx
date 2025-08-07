import AnnouncementsHeader from "@/components/common/announcements/header";
import AnnouncementsList from "@/components/common/announcements/list";
import * as S from "./style";
import Pagination from "@/components/ui/pagination";
import { useAnnouncements } from "@/hooks/announcements/useAnnouncements";
import { useState } from "react";

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
        <AnnouncementsHeader
          sortOrder={sortOrder}
          showNoticesOnly={showNoticesOnly}
          handleSortChange={handleSortChange}
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
          handleShowNoticesOnlyChange={handleShowNoticesOnlyChange}
        />
        <AnnouncementsList
          announcements={selectedAnnouncements}
          openItemId={openItemId}
          handleItemClick={handleItemClick}
        />
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