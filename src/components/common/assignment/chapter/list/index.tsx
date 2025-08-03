import { ChapterListProps } from "@/types/assignment/assignment";
import ChapterItem from "../item/index";
import * as S from "./style";

const ChapterList = ({
  chapters,
  openChapterId,
  openAssignmentId,
  handleChapterClick,
  handleAssignmentClick,
  calculateProgress,
}: ChapterListProps) => {
  return (
    <S.ChapterList>
      {chapters.map((chapter) => (
        <ChapterItem
          key={chapter.id}
          chapter={chapter}
          isOpen={openChapterId === chapter.id}
          openAssignmentId={openAssignmentId}
          onClick={() => handleChapterClick(chapter.id)}
          handleAssignmentClick={handleAssignmentClick}
          calculateProgress={calculateProgress}
        />
      ))}
    </S.ChapterList>
  );
};

export default ChapterList;
