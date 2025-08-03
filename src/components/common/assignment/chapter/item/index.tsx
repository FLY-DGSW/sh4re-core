import { ChapterItemProps } from "@/types/assignment/assignment";
import AssignmentList from "../../list";
import * as S from "./style";

const ChapterItem = ({
  chapter,
  isOpen,
  openAssignmentId,
  onClick,
  handleAssignmentClick,
  calculateProgress,
}: ChapterItemProps) => {
  const progress = calculateProgress(chapter.assignments);

  return (
    <S.ChapterWrapper>
      <S.ChapterItem onClick={onClick}>
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
              과제 {chapter.assignments.length}개
            </S.AssignmentCount>
            <S.ChevronIcon $isOpen={isOpen}>▼</S.ChevronIcon>
          </S.ChapterMeta>
        </S.ChapterHeader>
        <S.ChapterDescription>{chapter.description}</S.ChapterDescription>
      </S.ChapterItem>

      <S.ChapterContent $isOpen={isOpen}>
        <AssignmentList
          assignments={chapter.assignments}
          openAssignmentId={openAssignmentId}
          handleAssignmentClick={handleAssignmentClick}
        />
      </S.ChapterContent>
    </S.ChapterWrapper>
  );
};

export default ChapterItem;