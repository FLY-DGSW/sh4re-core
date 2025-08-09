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
      <S.Item onClick={onClick}>
        <S.Label label={assignment.label}>
          [{assignment.label}]
        </S.Label>
        <S.Title>{assignment.title}</S.Title>
        <S.Meta>
          <S.Date>
            {assignment.date} · {assignment.author}
          </S.Date>
        </S.Meta>
      </S.Item>
      <S.Content $isOpen={isOpen}>
        {assignment.content}
      </S.Content>
    </S.AssignmentWrapper>
  );
};

export default AssignmentItem;
