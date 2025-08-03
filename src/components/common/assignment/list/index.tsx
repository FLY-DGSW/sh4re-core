import { AssignmentListProps } from "@/types/assignment/assignment";
import AssignmentItem from "../item";
import * as S from "./style";

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

export default AssignmentList;