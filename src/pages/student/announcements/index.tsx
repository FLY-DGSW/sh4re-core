import AnnouncementsHeader from "@/components/common/announcements/header";
import AnnouncementsList from "@/components/common/announcements/list";
import * as S from "./style";
import Pagination from "@/components/ui/pagination";
import { useAnnouncements } from "@/hooks/announcements/useAnnouncements";

const AnnouncementsPage = () => {
  const {
    openItemId,
    currentPage,
    sortOrder,
    showNoticesOnly,
    totalPages,
    selectedAnnouncements,
    handleItemClick,
    setCurrentPage,
    handleSearch,
    handleSortChange,
    handleShowNoticesOnlyChange,
  } = useAnnouncements();

  return (
    <S.Container>
      <S.MainContent>
        <AnnouncementsHeader 
          sortOrder={sortOrder}
          showNoticesOnly={showNoticesOnly}
          handleSortChange={handleSortChange}
          handleSearch={handleSearch}
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