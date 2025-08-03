import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import BackButton from "@/components/ui/backButton";
import AssignmentInfo from "@/components/common/assignment/submit/info";
import SubmitForm from "@/components/common/assignment/submit/form";
import SubmittedInfo from "@/components/common/assignment/submit/submitted";
import { useAssignment } from "@/hooks/assignment/useAssignment";

const AssignmentSubmitPage = () => {
  const navigate = useNavigate();
  const { assignmentId } = useParams<{ assignmentId: string }>();
  const { assignment, isLoading } = useAssignment(Number(assignmentId));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!assignment) {
    return <div>과제를 찾을 수 없습니다.</div>;
  }

  const isSubmitted = assignment.label === "제출됨";

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.PageLayout>
        <S.Header>
          <BackButton onClick={handleGoBack}>과제 목록</BackButton>
        </S.Header>
        <S.Content>
          <AssignmentInfo assignment={assignment} isSubmitted={isSubmitted} />
          <S.SubmitSection>
            <S.SectionTitle>
              {isSubmitted ? "제출된 과제" : "과제 제출"}
            </S.SectionTitle>
            {isSubmitted ? <SubmittedInfo /> : <SubmitForm />}
          </S.SubmitSection>
        </S.Content>
      </S.PageLayout>
    </S.Container>
  );
};

export default AssignmentSubmitPage;
