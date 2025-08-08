import AssignmentHeader from "@/components/common/assignment/header";
import ChapterList from "@/components/common/assignment/chapter/list";
import * as S from "./style";
import Pagination from "@/components/ui/Pagination";
import { useAssignments } from "@/hooks/assignment/useAssignments";
import { useState } from "react";

const AssignmentPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAssignedOnly, setShowAssignedOnly] = useState(false);

  const {
    openAssignmentId,
    currentPage,
    sortOrder,
    totalPages,
    selectedChapters,
    handleAssignmentClick,
    handleSortChange,
    memoizedCalculateProgress,
    setCurrentPage,
  } = useAssignments(searchTerm);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleShowAssignedOnlyChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowAssignedOnly(e.target.checked);
  };

  const filteredChapters = showAssignedOnly
    ? selectedChapters
        .map((chapter) => ({
          ...chapter,
          assignments: chapter.assignments.filter(
            (assignment) => assignment.label === "할당됨"
          ),
        }))
        .filter((chapter) => chapter.assignments.length > 0)
    : selectedChapters;

  return (
    <S.Container>
      <S.MainContent>
        <AssignmentHeader
          sortOrder={sortOrder}
          handleSortChange={handleSortChange}
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
          showAssignedOnly={showAssignedOnly}
          handleShowAssignedOnlyChange={handleShowAssignedOnlyChange}
        />
        <ChapterList
          chapters={filteredChapters}
          openAssignmentId={openAssignmentId}
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
