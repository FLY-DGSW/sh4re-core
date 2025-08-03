import AnnouncementHeader from "@/components/common/announcement/header";
import AnnouncementList from "@/components/common/announcement/list";
import * as S from "./style";
import Pagination from "@/components/ui/pagination";
import { useAnnouncements } from "@/hooks/announcement/useAnnouncements";

const AnnouncementPage = () => {
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
        <AnnouncementHeader 
          sortOrder={sortOrder}
          showNoticesOnly={showNoticesOnly}
          handleSortChange={handleSortChange}
          handleSearch={handleSearch}
          handleShowNoticesOnlyChange={handleShowNoticesOnlyChange}
        />
        <AnnouncementList 
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

export default AnnouncementPage;