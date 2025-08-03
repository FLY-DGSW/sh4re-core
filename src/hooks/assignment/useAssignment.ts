import { chapters } from "@/constants/assignmentData";
import { Assignment } from "@/types/assignment/assignment";

export const useAssignment = (assignmentId: number) => {
  const findAssignment = (): Assignment | undefined => {
    for (const chapter of chapters) {
      const found = chapter.assignments.find((a) => a.id === assignmentId);
      if (found) {
        return found;
      }
    }
    return undefined;
  };

  const assignment = findAssignment();

  return {
    assignment,
    isLoading: false, // 더미데이터 로딩 상태 false
  };
};
