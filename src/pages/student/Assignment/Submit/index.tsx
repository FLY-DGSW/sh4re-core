import { useAssignmentSubmitPage } from "@/hooks/assignment/useAssignmentSubmitPage";
import * as S from "./style";
import BackButton from "@/components/ui/BackButton";
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

const SubmitForm = () => {
  return (
    <S.SubmitForm>
      <S.FormGroup>
        <S.Label htmlFor='description'>설명</S.Label>
        <S.Textarea
          id='description'
          placeholder='과제에 대한 설명을 입력하세요.'
          disabled={true}
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>파일 첨부</S.Label>
        <S.FileUploadButton htmlFor='file-upload' disabled={true}>
          파일 선택
        </S.FileUploadButton>
        <S.FileInput id='file-upload' type='file' multiple disabled={true} />
      </S.FormGroup>

      <S.SubmitButtonGroup>
        <S.SubmitButton type='submit' disabled={true}>
          제출하기
        </S.SubmitButton>
      </S.SubmitButtonGroup>
    </S.SubmitForm>
  );
};

const SubmittedInfo = () => {
  return (
    <S.SubmittedInfo>
      <S.InfoRow>
        <S.InfoLabel>설명</S.InfoLabel>
        <S.InfoValue>더미 설명입니다.</S.InfoValue>
      </S.InfoRow>
      <S.InfoRow>
        <S.InfoLabel>첨부 파일</S.InfoLabel>
        <S.FileList>
          <S.FileItem>
            <span>dummy_file.pdf</span>
          </S.FileItem>
        </S.FileList>
      </S.InfoRow>
      <S.ResubmitNote>
        과제는 한 번만 제출할 수 있습니다. 수정이 필요한 경우 담당 교사에게
        문의하세요.
      </S.ResubmitNote>
    </S.SubmittedInfo>
  );
};

const AssignmentSubmitPage = () => {
  const { assignment, isSubmitted, handleGoBack } = useAssignmentSubmitPage();

  return (
    <S.Container>
      <S.PageLayout>
        <S.Header>
          <BackButton onClick={handleGoBack}>과제 목록</BackButton>
        </S.Header>
        <S.Content>
          {assignment && (
            <AssignmentInfo assignment={assignment} isSubmitted={isSubmitted} />
          )}
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
