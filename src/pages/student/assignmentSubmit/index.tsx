import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";
import { IoMdArrowBack } from "react-icons/io";
import { Assignment } from "@/types/assignment/assignment";
import AssignmentInfo from "@/components/common/assignment/submit/info";
import SubmitForm from "@/components/common/assignment/submit/form";
import SubmittedInfo from "@/components/common/assignment/submit/submitted";

const AssignmentSubmitPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const assignment: Assignment | undefined = location.state?.assignment;

  if (!assignment) {
    return null;
  }

  const isSubmitted = assignment.label === "제출됨";

  return (
    <S.Container>
      <S.PageLayout>
        <S.Header>
          <S.BackButton onClick={() => navigate("/assignments")}>
            <IoMdArrowBack />
            과제 목록
          </S.BackButton>
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
