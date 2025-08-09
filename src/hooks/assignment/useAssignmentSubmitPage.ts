import { useNavigate, useParams } from "react-router-dom";
import { useAssignment } from "@/hooks/assignment/useAssignment";

export const useAssignmentSubmitPage = () => {
  const navigate = useNavigate();
  const { assignmentId } = useParams<{ assignmentId: string }>();
  const { assignment, isLoading } = useAssignment(Number(assignmentId));

  const isSubmitted = assignment?.label === "제출됨";

  const handleGoBack = () => {
    navigate("/assignments");
  };

  return { assignment, isLoading, isSubmitted, handleGoBack };
};
