import AssignmentHeader from "@/components/common/assignment/header";
import ChapterList from "@/components/common/assignment/chapter/list";
import * as S from "./style";
import Pagination from "@/components/ui/pagination";
import { useAssignments } from "@/hooks/assignment/useAssignments";

const AssignmentPage = () => {
  const {
    openChapterId,
    openAssignmentId,
    currentPage,
    sortOrder,
    totalPages,
    selectedChapters,
    handleChapterClick,
    handleAssignmentClick,
    handleSearch,
    handleSortChange,
    memoizedCalculateProgress,
    setCurrentPage,
  } = useAssignments();

  return (
    <S.Container>
      <S.MainContent>
        <AssignmentHeader
          sortOrder={sortOrder}
          handleSortChange={handleSortChange}
          handleSearch={handleSearch}
        />
        <ChapterList
          chapters={selectedChapters}
          openChapterId={openChapterId}
          openAssignmentId={openAssignmentId}
          handleChapterClick={handleChapterClick}
          handleAssignmentClick={handleAssignmentClick}
          calculateProgress={memoizedCalculateProgress}
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

export default AssignmentPage;
