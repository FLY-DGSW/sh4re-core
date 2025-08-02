import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Pagination from "@/components/ui/pagination";
import SearchInput from "@/components/ui/searchInput";
import SortDropdown from "@/components/ui/sortDropdown";
import { AssignmentProps } from "@/types/assignment/assignment";
import { chapters } from "@/constants/assignmentData";
import {
  calculateProgress,
  processChapters,
} from "@/util/math/assignmentUtils";

const sortOptions = [
  { value: "date", label: "최신순" },
  { value: "title", label: "가나다순" },
];

const AssignmentPage = () => {
  const navigate = useNavigate();
  const [openChapterId, setOpenChapterId] = useState<number | null>(null);
  const [openAssignmentId, setOpenAssignmentId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("date");
  const itemPerPage = 5;

  const handleChapterClick = (id: number) => {
    setOpenChapterId(openChapterId === id ? null : id);
    setOpenAssignmentId(null);
  };

  const handleAssignmentClick = (assignment: AssignmentProps) => {
    navigate(`/assignments/${assignment.id}`, { state: { assignment } });
  };

  const processedChapters = useMemo(
    () => processChapters(chapters, searchTerm, sortOrder),
    [searchTerm, sortOrder]
  );

  const totalPages = Math.ceil(processedChapters.length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const selectedChapters = processedChapters.slice(
    startIndex,
    startIndex + itemPerPage
  );

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  }, []);

  const handleSortChange = useCallback((order: string) => {
    setSortOrder(order);
    setCurrentPage(1);
  }, []);

  const memoizedCalculateProgress = useCallback(calculateProgress, []);

  return (
    <S.Container>
      <S.MainContent>
        <S.PageHeader>
          <S.PageTitle>과제 목록</S.PageTitle>
          <S.HeaderActions>
            <SortDropdown
              options={sortOptions}
              value={sortOrder}
              onChange={handleSortChange}
            />
            <SearchInput onSearch={handleSearch} placeholder='과제 찾기' />
          </S.HeaderActions>
        </S.PageHeader>

        <S.ChapterList>
          {selectedChapters.map((chapter) => {
            const progress = memoizedCalculateProgress(chapter.assignments);

            return (
              <S.ChapterWrapper key={chapter.id}>
                <S.ChapterItem onClick={() => handleChapterClick(chapter.id)}>
                  <S.ChapterHeader>
                    <S.ChapterTitleSection>
                      <S.ChapterTitle>{chapter.title}</S.ChapterTitle>
                      <S.ProgressSection>
                        <S.ProgressBar>
                          <S.ProgressFill $percentage={progress.percentage} />
                        </S.ProgressBar>
                        <S.ProgressText>
                          {progress.completed}/{progress.total} (
                          {progress.percentage}%)
                        </S.ProgressText>
                      </S.ProgressSection>
                    </S.ChapterTitleSection>
                    <S.ChapterMeta>
                      <S.AssignmentCount>
                        과제 {chapter.assignments.length}개
                      </S.AssignmentCount>
                      <S.ChevronIcon $isOpen={openChapterId === chapter.id}>
                        ▼
                      </S.ChevronIcon>
                    </S.ChapterMeta>
                  </S.ChapterHeader>
                  <S.ChapterDescription>
                    {chapter.description}
                  </S.ChapterDescription>
                </S.ChapterItem>

                <S.ChapterContent $isOpen={openChapterId === chapter.id}>
                  <S.AssignmentList>
                    {chapter.assignments.map((assignment) => (
                      <S.AssignmentWrapper key={assignment.id}>
                        <S.AssignmentItem
                          onClick={() => handleAssignmentClick(assignment)}
                        >
                          <S.AssignmentLabel label={assignment.label}>
                            [{assignment.label}]
                          </S.AssignmentLabel>
                          <S.AssignmentTitle>
                            {assignment.title}
                          </S.AssignmentTitle>
                          <S.AssignmentMeta>
                            <S.AssignmentDate>
                              {assignment.date} · {assignment.author}
                            </S.AssignmentDate>
                          </S.AssignmentMeta>
                        </S.AssignmentItem>
                        <S.AssignmentContent
                          $isOpen={openAssignmentId === assignment.id}
                        >
                          {assignment.content}
                        </S.AssignmentContent>
                      </S.AssignmentWrapper>
                    ))}
                  </S.AssignmentList>
                </S.ChapterContent>
              </S.ChapterWrapper>
            );
          })}
        </S.ChapterList>

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
