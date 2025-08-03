import { AssignmentItemProps } from "@/types/assignment/assignment";
import * as S from "./style";

const AssignmentItem = ({
  assignment,
  isOpen = false,
  onClick = () => {},
  className,
}: AssignmentItemProps) => {
  return (
    <S.AssignmentWrapper className={className}>
      <S.AssignmentItem onClick={onClick}>
        <S.AssignmentLabel label={assignment.label}>
          [{assignment.label}]
        </S.AssignmentLabel>
        <S.AssignmentTitle>{assignment.title}</S.AssignmentTitle>
        <S.AssignmentMeta>
          <S.AssignmentDate>
            {assignment.date} · {assignment.author}
          </S.AssignmentDate>
        </S.AssignmentMeta>
      </S.AssignmentItem>
      <S.AssignmentContent $isOpen={isOpen}>
        {assignment.content}
      </S.AssignmentContent>
    </S.AssignmentWrapper>
  );
};

export default AssignmentItem;