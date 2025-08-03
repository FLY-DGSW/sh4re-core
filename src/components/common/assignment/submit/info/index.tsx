import * as S from "./style";
import { Assignment } from "@/types/assignment/assignment";

interface AssignmentInfoProps {
  assignment: Assignment;
  isSubmitted: boolean;
}

const AssignmentInfo = ({ assignment, isSubmitted }: AssignmentInfoProps) => {
  return (
    <S.AssignmentInfo>
      <S.AssignmentHeader>
        <S.StatusBadge label={isSubmitted ? "제출됨" : assignment.label}>
          {isSubmitted ? "제출됨" : assignment.label}
        </S.StatusBadge>
        <S.AssignmentTitle>{assignment.title}</S.AssignmentTitle>
        <S.AssignmentMeta>
          {assignment.author} 선생님 | {assignment.date}
        </S.AssignmentMeta>
      </S.AssignmentHeader>
      <S.AssignmentContent>{assignment.content}</S.AssignmentContent>
    </S.AssignmentInfo>
  );
};

export default AssignmentInfo;
