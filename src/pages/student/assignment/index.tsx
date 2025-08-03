import AssignmentHeader from "@/components/common/assignment/header";
import ChapterList from "@/components/common/assignment/chapter/list";
import * as S from "./style";
import Pagination from "@/components/ui/pagination";
import { useAssignments } from "@/hooks/assignment/useAssignments";
import { useState } from "react";

const AssignmentPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    openChapterId,
    openAssignmentId,
    currentPage,
    sortOrder,
    totalPages,
    selectedChapters,
    handleChapterClick,
    handleAssignmentClick,
    handleSortChange,
    memoizedCalculateProgress,
    setCurrentPage,
  } = useAssignments(searchTerm);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <S.Container>
      <S.MainContent>
        <AssignmentHeader
          sortOrder={sortOrder}
          handleSortChange={handleSortChange}
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
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