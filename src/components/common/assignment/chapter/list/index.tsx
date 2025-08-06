import { ChapterListProps } from "@/types/assignment/assignment";
import ChapterItem from "../item/index";
import * as S from "./style";

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

export default ChapterList;