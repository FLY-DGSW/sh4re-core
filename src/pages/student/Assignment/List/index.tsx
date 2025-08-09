import * as S from "./style";
import Pagination from "@/components/ui/Pagination";
import SortDropdown from "@/components/ui/SortDropdown";
import SearchInput from "@/components/ui/SearchInput";
import { useAssignments } from "@/hooks/assignment/useAssignments";
import { useState } from "react";
import AssignmentItem from "@/components/common/AssignmentItem";
import {
  AssignmentHeaderProps,
  ChapterListProps,
  ChapterItemProps,
  AssignmentListProps,
} from "@/types/assignment/assignment";

const sortOptions = [
  { value: "date", label: "최신순" },
  { value: "title", label: "가나다순" },
];

const AssignmentList = ({
  assignments,
  openAssignmentId,
  handleAssignmentClick,
}: AssignmentListProps) => {
  return (
    <S.AssignmentList>
      {assignments.map((assignment) => (
        <AssignmentItem
          key={assignment.id}
          assignment={assignment}
          isOpen={openAssignmentId === assignment.id}
          onClick={() => handleAssignmentClick(assignment)}
        />
      ))}
    </S.AssignmentList>
  );
};

const ChapterItem = ({
  chapter,
  openAssignmentId,
  handleAssignmentClick,
  calculateProgress,
}: ChapterItemProps) => {
  const progress = calculateProgress(chapter.assignments);

  return (
    <S.ChapterWrapper>
      <S.ChapterItem>
        <S.ChapterHeader>
          <S.ChapterTitleSection>
            <S.ChapterTitle>{chapter.title}</S.ChapterTitle>
            <S.ProgressSection>
              <S.ProgressBar>
                <S.ProgressFill $percentage={progress.percentage} />
              </S.ProgressBar>
              <S.ProgressText>
                {progress.completed}/{progress.total} ({progress.percentage}%)
              </S.ProgressText>
            </S.ProgressSection>
          </S.ChapterTitleSection>
          <S.ChapterMeta>
            <S.AssignmentCount>
              과제 총 {chapter.assignments.length}개
            </S.AssignmentCount>
          </S.ChapterMeta>
        </S.ChapterHeader>
        <S.ChapterDescription>{chapter.description}</S.ChapterDescription>
      </S.ChapterItem>

      <S.ChapterContent>
        <AssignmentList
          assignments={chapter.assignments}
          openAssignmentId={openAssignmentId}
          handleAssignmentClick={handleAssignmentClick}
        />
      </S.ChapterContent>
    </S.ChapterWrapper>
  );
};

const ChapterList = ({
  chapters,
  openAssignmentId,
  handleAssignmentClick,
  calculateProgress,
}: ChapterListProps) => {
  return (
    <S.ChapterList>
      {chapters.map((chapter) => (
        <ChapterItem
          key={chapter.id}
          chapter={chapter}
          openAssignmentId={openAssignmentId}
          handleAssignmentClick={handleAssignmentClick}
          calculateProgress={calculateProgress}
        />
      ))}
    </S.ChapterList>
  );
};

const AssignmentHeader = ({
  sortOrder,
  handleSortChange,
  searchTerm,
  handleSearchChange,
  showAssignedOnly,
  handleShowAssignedOnlyChange,
}: AssignmentHeaderProps) => {
  return (
    <S.PageHeader>
      <S.PageTitle>과제 목록</S.PageTitle>
      <S.HeaderActions>
        <S.CheckboxContainer>
          <input
            type='checkbox'
            id='assigned-only'
            checked={showAssignedOnly}
            onChange={handleShowAssignedOnlyChange}
          />
          <label htmlFor='assigned-only'>할당된 과제만 보기</label>
        </S.CheckboxContainer>
        <SortDropdown
          options={sortOptions}
          value={sortOrder}
          onChange={handleSortChange}
        />
        <SearchInput
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='과제 찾기'
        />
      </S.HeaderActions>
    </S.PageHeader>
  );
};

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
